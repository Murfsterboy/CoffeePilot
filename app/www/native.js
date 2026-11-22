/* CoffeePilot Android app - connection layer. Runs after the main app code (coffeepilot.js).
   - Settings screen with saved places (Home, Holiday...) and the two Shelly addresses for each
   - "Search this Wi-Fi": finds the warm-up and pump Shellys on whatever network the phone is on
   - Auto-connect: if the Shellys stop answering, switch to the saved place for this Wi-Fi,
     or search this Wi-Fi once and save what it finds
   - Native keep-screen-on and share-sheet CSV export */
"use strict";
(function () {
  var NAT = CPN.NAT, ld = CPN.ld, sv = CPN.sv, net3 = CPN.net3;
  var IPRE = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;
  var phone = { ip: "", wifi: false };
  var scanning = false, scanned = {}, offSince = 0, autoBusy = false, editId = null, lastFound = null;

  function h(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function el(id) { return document.getElementById(id); }
  function places() { return ld("cp_places", []); }
  function savePlaces(p) { sv("cp_places", p); }
  function activeId() { return ld("cp_active", ""); }
  function active() { var id = activeId(), p = places(); return p.filter(function (x) { return x.id === id; })[0] || p[0]; }
  function autoOn() { return ld("cp_auto", true); }

  function tf(url, ms, opt) {
    var ac = new AbortController(), t = setTimeout(function () { ac.abort(); }, ms);
    var o = { cache: "no-store", signal: ac.signal };
    if (opt) for (var k in opt) o[k] = opt[k];
    return fetch(url, o).then(function (r) { clearTimeout(t); return r; }, function (e) { clearTimeout(t); throw e; });
  }
  function tj(url, ms) { return tf(url, ms).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }); }

  function netInfo() {
    if (!NAT) return Promise.resolve(phone);
    return NAT.netInfo().then(function (n) { phone = { ip: (n && n.ip) || "", wifi: !!(n && n.wifi) }; return phone; }, function () { return phone; });
  }

  /* ---------- switching place ---------- */
  function use(id) {
    var p = places().filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    sv("cp_active", p.id);
    CFG = { a: p.a, sa: p.sa || 1, b: p.b, sb: p.sb || 1 };
    store("cp_cfg", CFG);
    okA = okB = null; W = null; B = null; lastId = null; prevPhase = null; prevShot = false;
    offSince = 0;
    conn(); wsReset(); pollA(); brew();
    drawSet();
  }

  /* ---------- finding the Shellys ---------- */
  function identify(ip, found) {
    return Promise.all([1, 2, 3, 4].map(function (s) {
      return tj("http://" + ip + "/script/" + s + "/api", 3000).then(function (j) {
        if (!j) return;
        if (j.profiles && !found.b) found.b = { ip: ip, s: s };
        else if (j.phase && j.readyAt != null && !found.a) found.a = { ip: ip, s: s, name: j.name };
      }).catch(function () {});
    }));
  }

  function scan(net, prog) {
    var order = [], seen = {};
    // addresses used before go first, so a known network is found in a second or two
    places().forEach(function (p) { [p.a, p.b].forEach(function (ip) { var m = /\.(\d+)$/.exec(ip || ""); if (m) order.push(+m[1]); }); });
    for (var i = 1; i < 255; i++) order.push(i);
    var ips = [];
    order.forEach(function (n) { if (n > 0 && n < 255 && !seen[n]) { seen[n] = 1; ips.push(net + "." + n); } });
    var found = { a: null, b: null }, idx = 0, done = 0, run = 0, N = ips.length;
    return new Promise(function (resolve) {
      function next() {
        if (found.a && found.b && run === 0) return resolve(found);
        if (idx >= N && run === 0) return resolve(found);
        while (run < 40 && idx < N && !(found.a && found.b)) {
          (function (ip) {
            run++;
            tf("http://" + ip + "/shelly", 1500, { mode: "no-cors" })
              .then(function () { return identify(ip, found); }, function () {})
              .then(function () { run--; done++; if (prog) prog(done, N, found); next(); });
          })(ips[idx++]);
        }
      }
      next();
    });
  }

  function adopt(found, net, name) {
    if (!found.a && !found.b) return null;
    var list = places(), cur = active();
    var p = list.filter(function (x) { return x.net === net; })[0];
    if (!p && cur && !cur.a && !cur.b) p = cur;
    if (!p) {
      p = { id: "p" + Date.now().toString(36), name: name || ("Wi-Fi " + net + ".x"), a: "", sa: 1, b: "", sb: 1, net: net };
      list.push(p);
    }
    if (name) p.name = name;
    if (found.a) { p.a = found.a.ip; p.sa = found.a.s; }
    if (found.b) { p.b = found.b.ip; p.sb = found.b.s; }
    p.net = net;
    savePlaces(list);
    use(p.id);
    return p;
  }

  /* ---------- automatic reconnect ---------- */
  function autoFix() {
    autoBusy = true;
    netInfo().then(function (n) {
      var mine = net3(n.ip), cur = active();
      if (!mine) { autoBusy = false; return; }
      var match = places().filter(function (x) { return x.net === mine; })[0];
      if (match && (!cur || cur.id !== match.id)) {
        use(match.id);
        toast("On " + match.name + " Wi-Fi · switched to " + match.name);
        autoBusy = false;
        return;
      }
      if (scanned[mine] || scanning) { autoBusy = false; return; }
      scanned[mine] = true;
      scanning = true;
      toast("Can't reach the Stilosa · searching this Wi-Fi…", 60000);
      drawSet();
      return scan(mine).then(function (f) {
        scanning = false; autoBusy = false;
        var known = places().filter(function (x) { return x.net === mine; })[0];
        var p = adopt(f, mine);
        if (!p) toast("Stilosa not found on this Wi-Fi. Check it's plugged in and joined to this network.", 7000);
        else if (!known) toast("Found the Stilosa · saved as “" + p.name + "”. Rename it in Settings.", 7000);
        else toast("Found the Stilosa at its new address · " + p.name + " updated", 6000);
        drawSet();
      });
    }).catch(function () { autoBusy = false; scanning = false; });
  }

  setInterval(function () {
    if (document.visibilityState !== "visible" || autoBusy || scanning || !autoOn()) return;
    if (!(okA === false || okB === false)) { offSince = 0; return; }
    if (!offSince) { offSince = Date.now(); return; }
    if (Date.now() - offSince < 6000) return;
    offSince = Date.now();
    autoFix();
  }, 1000);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") { offSince = 0; scanned = {}; netInfo().then(drawSet); }
  });

  /* ---------- toast ---------- */
  var toastT = null;
  function toast(msg, ms) {
    var t = el("cpnToast");
    t.textContent = msg;
    t.classList.add("on");
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.classList.remove("on"); }, ms || 4500);
  }
  window.cpnToast = toast;

  /* ---------- settings screen ---------- */
  var css = document.createElement("style");
  css.textContent =
    "#cpnSet{position:fixed;inset:0;z-index:60;background:var(--bg);overflow-y:auto;display:none}" +
    "#cpnSet.on{display:block}" +
    "#cpnSet .in{max-width:460px;margin:0 auto;padding:max(20px,env(safe-area-inset-top)) 20px 40px;display:flex;flex-direction:column;gap:14px}" +
    ".cpnRow{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--line);font-size:14px}" +
    ".cpnRow:last-child{border-bottom:0}.cpnRow b{display:block;font-size:15px}.cpnRow small{display:block;font-size:12px;color:var(--mut);margin-top:2px}" +
    ".cpnTag{font-size:12px;font-weight:600;color:#9fe0a5;border:1px solid #3d6b3a;border-radius:99px;padding:4px 10px;white-space:nowrap}" +
    ".cpnBtn{border:1px solid var(--acc);background:transparent;color:var(--acc2);border-radius:99px;padding:6px 14px;font:600 13px Inter,sans-serif;white-space:nowrap}" +
    ".cpnIn{background:var(--bg);border:1px solid var(--gap);border-radius:10px;color:var(--ink);font:600 16px Inter,sans-serif;padding:10px;width:100%}" +
    ".cpnProg{height:8px;border-radius:4px;background:var(--gap);overflow:hidden}.cpnProg i{display:block;height:100%;background:var(--acc);width:0;transition:width .2s}" +
    ".cpnSw{display:flex;gap:12px;align-items:flex-start;font-size:14px;line-height:1.4}.cpnSw input{width:22px;height:22px;accent-color:var(--acc);flex:none;margin-top:1px}" +
    ".cpnSw small{display:block;color:var(--mut);font-size:12px;margin-top:2px}" +
    "#cpnToast{position:fixed;left:50%;bottom:92px;transform:translate(-50%,20px);opacity:0;pointer-events:none;z-index:80;background:#f3e9df;color:#1c1410;font:600 14px Inter,sans-serif;padding:11px 16px;border-radius:12px;max-width:min(92vw,420px);text-align:center;box-shadow:0 6px 24px #0008;transition:all .25s}" +
    "#cpnToast.on{opacity:1;transform:translate(-50%,0)}" +
    "#cpnEd .err{color:#ffb3a6}" +
    ".conn span:last-child{max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
  document.head.appendChild(css);

  document.body.insertAdjacentHTML("beforeend",
    '<div id="cpnToast" role="status" aria-live="polite"></div>' +
    '<div id="cpnSet" role="dialog" aria-label="Settings"><div class="in">' +
      '<div class="top"><button class="lnk" style="font-size:15px" onclick="history.back()">‹ Back</button><span class="sub" style="margin:0">Settings</span></div>' +
      '<div class="h ttl">Connection</div>' +
      '<div class="card" style="gap:0;padding:6px 16px" id="cpnStat"></div>' +
      '<div class="card" style="gap:6px"><div class="row"><div class="cap">Saved places</div><button class="lnk" onclick="cpnEdit(null)">+ Add a place</button></div><div id="cpnPlaces"></div></div>' +
      '<div class="card"><div class="cap">Find the Stilosa on this Wi-Fi</div>' +
        '<div class="desc">Searches the network your phone is on for the warm-up and pump Shellys, then fills in their addresses for you.</div>' +
        '<label style="display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--mut)">Network (first three numbers of the address)' +
          '<div style="display:flex;align-items:center;gap:6px"><input id="cpnNet" class="cpnIn" inputmode="decimal" placeholder="192.168.0"><span style="color:var(--mut);font-size:15px;white-space:nowrap">.1 – 254</span></div></label>' +
        '<button class="go" id="cpnScanB" onclick="cpnScan()">Search this Wi-Fi</button>' +
        '<div id="cpnScanOut" class="desc"></div></div>' +
      '<div class="card"><label class="cpnSw"><input type="checkbox" id="cpnAuto" onchange="cpnSetAuto(this.checked)"><span>Connect automatically<small>If the Shellys stop answering, switch to the saved place for the Wi-Fi you’re on, or search this Wi-Fi and save what it finds.</small></span></label></div>' +
      '<div class="card"><label class="cpnSw"><input type="checkbox" id="cpnGh" onchange="cpnSetGh(this.checked)"><span>Get app updates from GitHub<small id="cpnSrc"></small></span></label>' +
        '<button class="ghost" onclick="location.reload()">Restart the app now</button></div>' +
    '</div></div>' +
    '<dialog id="cpnEd"><div class="h" style="font-size:18px;margin-bottom:12px" id="cpnEdT">Place</div>' +
      '<label>Name<input id="cpnEdN" placeholder="Home, Holiday cottage…"></label>' +
      '<div class="g2"><label>Warm-up Shelly IP<input id="cpnEdA" inputmode="decimal" placeholder="192.168.1.241"></label><label>Script no.<input id="cpnEdSA" inputmode="numeric"></label></div>' +
      '<div class="g2"><label>Pump Shelly IP<input id="cpnEdB" inputmode="decimal" placeholder="192.168.1.80"></label><label>Script no.<input id="cpnEdSB" inputmode="numeric"></label></div>' +
      '<div class="note" id="cpnEdSt" style="text-align:left;margin-bottom:12px;min-height:18px"></div>' +
      '<div class="btns" style="margin-bottom:10px"><button class="bb" style="height:44px;font-size:15px" onclick="cpnTest()">Test</button><button class="bb" style="height:44px;font-size:15px;background:var(--acc);color:var(--bg)" onclick="cpnSave()">Save and use</button></div>' +
      '<div class="btns"><button class="lnk" style="flex:1;color:var(--mut)" onclick="cpnCloseEd()">Cancel</button><button class="lnk" id="cpnDel" style="flex:1;color:#ff8a7a" onclick="cpnDelete()">Delete place</button></div>' +
    '</dialog>');

  function stLine(label, ip, s, ok) {
    var dot = ok === true ? "g" : ok === false ? "r" : "";
    var txt = !ip ? "not set" : ok === true ? "connected" : ok === false ? "no reply" : "checking…";
    return '<div class="cpnRow"><span style="display:flex;align-items:center;gap:10px"><span class="dot ' + dot + '"></span><span><b>' + label + '</b><small>' + h(ip || "—") + (ip && s && s !== 1 ? " · script " + h(s) : "") + '</small></span></span><span style="color:var(--mut);font-size:13px">' + txt + '</span></div>';
  }

  function drawSet() {
    if (!el("cpnSet").classList.contains("on")) return;
    var cur = active() || {}, mine = net3(phone.ip);
    el("cpnStat").innerHTML =
      '<div class="cpnRow"><span><b>This phone</b><small>' + (phone.ip ? h(phone.ip) + (phone.wifi ? " on Wi-Fi" : "") : NAT ? "Not on Wi-Fi" : "Address only shown in the Android app") + '</small></span><span class="cpnTag" style="color:var(--acc2);border-color:var(--gap)">' + h(cur.name || "") + '</span></div>' +
      stLine("Warm-up Shelly", CFG.a, CFG.sa, okA) + stLine("Pump Shelly", CFG.b, CFG.sb, okB);
    el("cpnPlaces").innerHTML = places().map(function (p) {
      var on = p.id === cur.id, here = mine && p.net === mine;
      return '<div class="cpnRow"><span><b>' + h(p.name) + (here ? ' <span style="font-size:12px;color:#9fe0a5;font-weight:500">· this Wi-Fi</span>' : "") + '</b><small>Warm-up ' + h(p.a || "—") + ' · Pump ' + h(p.b || "—") + '</small></span>' +
        '<span style="display:flex;gap:12px;align-items:center">' + (on ? '<span class="cpnTag">In use</span>' : '<button class="cpnBtn" onclick="cpnUse(\'' + p.id + '\')">Use</button>') +
        '<button class="lnk" onclick="cpnEdit(\'' + p.id + '\')">Edit</button></span></div>';
    }).join("");
    if (document.activeElement !== el("cpnNet") && !el("cpnNet").value) el("cpnNet").value = mine || cur.net || "";
    el("cpnScanB").disabled = scanning;
    el("cpnScanB").style.opacity = scanning ? .5 : 1;
    if (scanning && !el("cpnScanOut").innerHTML) el("cpnScanOut").textContent = "Searching…";
    el("cpnAuto").checked = autoOn();
    el("cpnGh").checked = ld("cp_gh", true);
    var at = CPN.at ? new Date(CPN.at) : null;
    el("cpnSrc").textContent = "Running: " + (CPN.src === "github" ? "GitHub copy" + (at ? " from " + at.toLocaleDateString("en-GB", { day: "numeric", month: "short" }) + " " + at.toTimeString().slice(0, 5) : "") : "copy built into the app") +
      (CPN.update ? " · a newer copy is downloaded, restart to use it" : "") + ". Turn this off to always use the built-in copy.";
  }

  var setTimer = null;
  function openSettings() {
    if (el("cpnSet").classList.contains("on")) return;
    el("cpnSet").classList.add("on");
    history.pushState({ cpn: "set" }, "");
    el("cpnNet").value = "";
    el("cpnScanOut").innerHTML = lastFound || "";
    netInfo().then(drawSet);
    drawSet();
    setTimer = setInterval(drawSet, 1000);
  }
  function closeSettings() {
    el("cpnSet").classList.remove("on");
    clearInterval(setTimer);
  }
  window.addEventListener("popstate", function () {
    if (el("cpnEd").open) { el("cpnEd").close(); return; }
    if (el("cpnSet").classList.contains("on")) closeSettings();
  });

  window.cpnUse = function (id) { use(id); toast("Using " + (active() || {}).name); };
  window.cpnSetAuto = function (v) { sv("cp_auto", !!v); offSince = 0; scanned = {}; };
  window.cpnSetGh = function (v) { sv("cp_gh", !!v); toast(v ? "GitHub updates on · restart to apply" : "Built-in copy will be used · restart to apply"); };

  window.cpnScan = function () {
    var net = net3(el("cpnNet").value.trim().replace(/\.+$/, "") + ".1");
    if (!net) { el("cpnScanOut").innerHTML = '<span style="color:#ffb3a6">Enter the first three numbers, for example 192.168.0</span>'; return; }
    if (scanning) return;
    scanning = true; drawSet();
    var out = el("cpnScanOut");
    out.innerHTML = '<div class="cpnProg"><i id="cpnBar"></i></div><div id="cpnScanTxt" style="margin-top:6px">Searching ' + h(net) + '.1 – 254…</div>';
    scan(net, function (d, n, f) {
      var b = el("cpnBar"); if (b) b.style.width = Math.round(d / n * 100) + "%";
      var t = el("cpnScanTxt"); if (t) t.textContent = "Checked " + d + " of " + n + (f.a ? " · warm-up found" : "") + (f.b ? " · pump found" : "");
    }).then(function (f) {
      scanning = false;
      scanned[net] = true;
      if (!f.a && !f.b) {
        lastFound = '<span style="color:#ffb3a6">No CoffeePilot Shellys found on ' + h(net) + '.x.</span> Check the Stilosa is plugged in and has joined this Wi-Fi, and that your phone is on the same Wi-Fi.';
        out.innerHTML = lastFound; drawSet(); return;
      }
      var known = places().filter(function (x) { return x.net === net; })[0];
      var nm = known ? known.name : (prompt("Found the Stilosa on " + net + ".x\n\nName this place:", "Holiday") || "").trim();
      var p = adopt(f, net, nm || null);
      lastFound = '<b style="color:#9fe0a5">Found and connected</b> · ' +
        (f.a ? "Warm-up " + h(f.a.ip) : '<span style="color:#ffb3a6">warm-up not found</span>') + " · " +
        (f.b ? "Pump " + h(f.b.ip) : '<span style="color:#ffb3a6">pump not found</span>') +
        "<br>Saved as “" + h(p.name) + "”.";
      out.innerHTML = lastFound;
      drawSet();
    });
  };

  /* ---------- add / edit place ---------- */
  window.cpnEdit = function (id) {
    var p = id ? places().filter(function (x) { return x.id === id; })[0] : null;
    editId = p ? p.id : null;
    var base = net3(phone.ip) ? net3(phone.ip) + "." : "";
    el("cpnEdT").textContent = p ? "Edit place" : "Add a place";
    el("cpnEdN").value = p ? p.name : "";
    el("cpnEdA").value = p ? p.a : base;
    el("cpnEdSA").value = p ? p.sa || 1 : 1;
    el("cpnEdB").value = p ? p.b : base;
    el("cpnEdSB").value = p ? p.sb || 1 : 1;
    el("cpnEdSt").textContent = "";
    el("cpnDel").style.visibility = p && places().length > 1 ? "visible" : "hidden";
    el("cpnEd").showModal();
    history.pushState({ cpn: "ed" }, "");
  };
  window.cpnCloseEd = function () { history.back(); };
  // Back gesture / Esc on the edit box: close it through history so the Back button stays in step
  el("cpnEd").addEventListener("cancel", function (e) { e.preventDefault(); history.back(); });

  function readEd() {
    return {
      name: el("cpnEdN").value.trim() || "Place",
      a: el("cpnEdA").value.trim(), sa: parseInt(el("cpnEdSA").value, 10) || 1,
      b: el("cpnEdB").value.trim(), sb: parseInt(el("cpnEdSB").value, 10) || 1
    };
  }
  function badIp(v) { return v && !IPRE.test(v); }

  window.cpnTest = function () {
    var v = readEd(), st = el("cpnEdSt");
    if (badIp(v.a) || badIp(v.b)) { st.innerHTML = '<span class="err">Check the IP addresses (four numbers, e.g. 192.168.0.41)</span>'; return; }
    st.textContent = "Testing…";
    function one(ip, s, kind) {
      if (!ip) return Promise.resolve(kind + ": not set");
      return tj("http://" + ip + "/script/" + s + "/api", 4000).then(function (j) {
        var ok = kind === "Pump" ? !!(j && j.profiles) : !!(j && j.phase);
        return kind + (ok ? " ✓" + (j.name ? " (" + j.name + ")" : "") : ": answered, but it isn't the " + kind.toLowerCase() + " script");
      }, function () { return kind + ": ✗ no reply"; });
    }
    Promise.all([one(v.a, v.sa, "Warm-up"), one(v.b, v.sb, "Pump")]).then(function (r) { st.textContent = r.join(" · "); });
  };

  window.cpnSave = function () {
    var v = readEd(), st = el("cpnEdSt");
    if (!v.a && !v.b) { st.innerHTML = '<span class="err">Enter at least one IP address</span>'; return; }
    if (badIp(v.a) || badIp(v.b)) { st.innerHTML = '<span class="err">Check the IP addresses (four numbers, e.g. 192.168.0.41)</span>'; return; }
    var list = places(), p = editId ? list.filter(function (x) { return x.id === editId; })[0] : null;
    if (!p) { p = { id: "p" + Date.now().toString(36) }; list.push(p); }
    p.name = v.name; p.a = v.a; p.sa = v.sa; p.b = v.b; p.sb = v.sb; p.net = net3(v.a) || net3(v.b);
    savePlaces(list);
    history.back();
    use(p.id);
    toast("Saved · using " + p.name);
  };

  window.cpnDelete = function () {
    var list = places();
    if (list.length < 2 || !editId) return;
    var p = list.filter(function (x) { return x.id === editId; })[0];
    if (!p || !confirm("Delete “" + p.name + "”?")) return;
    list = list.filter(function (x) { return x.id !== editId; });
    savePlaces(list);
    history.back();
    if (activeId() === editId) use(list[0].id); else drawSet();
  };

  /* ---------- hooks into the main app ---------- */
  openSet = openSettings;

  var _conn = conn;
  conn = function () {
    var r = _conn.apply(this, arguments);
    if (places().length > 1) {
      var n = (active() || {}).name;
      ["1", "2"].forEach(function (i) { var t = el("cTxt" + i); if (t && n) t.textContent += " · " + n; });
    }
    if (scanning) ["1", "2"].forEach(function (i) { var t = el("cTxt" + i); if (t) t.textContent = "Searching Wi-Fi…"; });
    return r;
  };
  conn();

  if (NAT) {
    // Keep-screen-on the native way (the web wake lock isn't available inside the app)
    var _vid = vid;
    vid = function () {
      NAT.keepAwake({ on: true }).then(function () { AWAKE = true; VIA = "lock"; awUI(); }, function () { _vid(); });
    };
    // Shot log export goes to the Android share sheet (email, Drive, Keep...)
    var _exp = exportCsv;
    exportCsv = function () {
      var f = ["at", "prof", "time", "dose", "yield", "grind", "taste", "notes", "adv"], rows = [f.join(",")];
      getLog().forEach(function (n) { rows.push(f.map(function (k) { return '"' + String(n[k] == null ? "" : n[k]).replace(/"/g, "'") + '"'; }).join(",")); });
      NAT.shareText({ title: "CoffeePilot shot log", text: rows.join("\n") }).catch(function () { _exp(); });
    };
    // Screen on from the start, like a coffee-machine display
    wake();
  }

  netInfo();
})();
