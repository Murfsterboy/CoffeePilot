/* CoffeePilot Android app - loader. Runs before the main app code.
   - Picks the saved place (Home, Holiday...) and hands its Shelly addresses to the main app
   - Starts the app code at once (last GitHub copy, or the copy built into the app),
     then quietly fetches the latest coffeepilot.js from GitHub Pages for next time */
"use strict";
(function () {
  var REMOTE = "https://murfsterboy.github.io/CoffeePilot/coffeepilot.js";
  function ld(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function sv(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function net3(ip) { var m = /^(\d{1,3}\.\d{1,3}\.\d{1,3})\.\d{1,3}$/.exec(String(ip || "").trim()); return m ? m[1] : ""; }
  function parses(js) { try { new Function(js); return true; } catch (e) { return false; } }

  // Native helper, only present inside the Android app
  var NAT = null;
  try {
    var C = window.Capacitor;
    if (C && C.isNativePlatform && C.isNativePlatform()) {
      if (window.capacitorExports && capacitorExports.registerPlugin) NAT = capacitorExports.registerPlugin("CoffeeNative");
      else if (C.registerPlugin) NAT = C.registerPlugin("CoffeeNative");
    }
  } catch (e) { NAT = null; }

  // Saved places: one per Wi-Fi network, each with both Shelly addresses
  var places = ld("cp_places", null);
  if (!places || !places.length) {
    var old = ld("cp_cfg", null) || {};
    var a = old.a || "192.168.1.241", b = old.b || "192.168.1.80";
    places = [{ id: "home", name: "Home", a: a, sa: old.sa || 1, b: b, sb: old.sb || 1, net: net3(a) || net3(b) }];
    sv("cp_places", places);
    sv("cp_active", "home");
  }
  var act = ld("cp_active", places[0].id);
  var P = places.filter(function (p) { return p.id === act; })[0] || places[0];
  sv("cp_active", P.id);
  sv("cp_cfg", { a: P.a, sa: P.sa, b: P.b, sb: P.sb });   // the main app reads this when it starts

  window.CPN = { NAT: NAT, ld: ld, sv: sv, net3: net3, REMOTE: REMOTE, src: "", parses: parses };

  function after() { var s = document.createElement("script"); s.src = "native.js"; document.body.appendChild(s); }
  function unboot() { var b = document.getElementById("boot"); if (b) b.parentNode.removeChild(b); }
  function runText(js) {
    unboot(); CPN.src = "github";
    var s = document.createElement("script");
    s.text = js + "\n//# sourceURL=coffeepilot-github.js";
    document.body.appendChild(s);
    after();
  }
  function runBuiltIn() {
    unboot(); CPN.src = "built-in";
    var s = document.createElement("script");
    s.src = "coffeepilot.js";
    s.onload = after;
    document.body.appendChild(s);
  }

  var useGh = ld("cp_gh", true), cache = ld("cp_appjs", null);
  if (useGh && cache && cache.js && parses(cache.js)) { CPN.at = cache.at; runText(cache.js); }
  else runBuiltIn();

  if (useGh) {
    var ac = new AbortController();
    setTimeout(function () { ac.abort(); }, 15000);
    fetch(REMOTE + "?t=" + Date.now(), { cache: "no-store", signal: ac.signal })
      .then(function (r) { if (!r.ok) throw new Error("http " + r.status); return r.text(); })
      .then(function (js) {
        if (js.length < 20000 || js.indexOf("var DEF=") < 0 || !parses(js)) return;
        if (cache && cache.js === js) return;
        sv("cp_appjs", { js: js, at: new Date().toISOString() });
        CPN.update = true;
        if (window.cpnToast) cpnToast("App update downloaded · used next time you open CoffeePilot");
      })
      .catch(function () {});
  }
})();
