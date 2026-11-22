/* CoffeePilot app v2.5 - loaded by the starter page on the pump Shelly (v2.1: pump power trace; v2.2: guided pump test; v2.3: smart fill; v2.4: Brew now banner; v2.5: knob-left-on-Coffee warnings; v2.6: one continuous warm-up, no Heat 1 / Heat 2; needs brew script v3.6 and warm-up v7.1) */
!function(){var e=document,t=e.createElement("style");t.textContent=":root{--bg:#1c1410;--card:#2e231c;--card2:#3a2b20;--line:#3d2f25;--ink:#f3e9df;--mut:#b9a796;--dim:#a8968a;--acc:#c97b3c;--acc2:#e0a46a;--soak:#5b8fb9;--gap:#4a3a2e;--ok:#4cd964;--nav:#241a14}*{box-sizing:border-box}html,body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,system-ui,sans-serif;-webkit-tap-highlight-color:transparent}body{min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;max-width:460px;margin:0 auto}a{color:var(--acc2)}button{font-family:inherit;color:inherit;cursor:pointer}.view{display:none;flex:1;padding:max(24px,env(safe-area-inset-top)) 20px 20px;flex-direction:column;gap:14px}.view.on{display:flex}.h{font-family:'Space Grotesk',sans-serif;font-weight:700}.top{display:flex;justify-content:space-between;align-items:center;width:100%}.ttl{font-size:24px}.sub{font-size:13px;color:var(--mut);margin-top:2px}.conn{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--mut);background:var(--card);padding:6px 10px;border-radius:99px;border:0}.dot{width:8px;height:8px;border-radius:50%;background:var(--gap);display:inline-block;flex:none}.dot.g{background:var(--ok)}.dot.a{background:#f2a640}.dot.r{background:#ff5a4e}.ring{position:relative;align-self:center}.ring svg{display:block;transform:rotate(-90deg)}.ring circle{fill:none}.ring .c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px}.big{font-family:'Space Grotesk',sans-serif;font-weight:700;font-variant-numeric:tabular-nums}.lbl{font-size:12px;color:var(--mut);text-transform:uppercase;letter-spacing:.12em}.pill{align-self:center;font-size:15px;background:var(--card);padding:8px 16px;border-radius:99px;text-align:center}.steps{display:flex;gap:8px;justify-content:center}.st{padding:7px 14px;border-radius:8px;background:var(--card);font-size:13px;color:var(--dim)}.st.d{background:var(--gap);color:var(--ink)}.st.a{background:var(--acc);color:var(--bg);font-weight:600}.tiles{background:var(--card);border-radius:14px;padding:14px 16px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.tiles span{display:block;font-size:11px;color:var(--mut);text-transform:uppercase;letter-spacing:.08em}.tiles b{display:block;font-size:17px;margin-top:2px;font-variant-numeric:tabular-nums}.btns{display:flex;gap:12px}.bb{flex:1;height:58px;border:0;border-radius:14px;background:var(--card);font:600 18px Inter,sans-serif;display:flex;align-items:center;justify-content:center;gap:10px}.bb .dot{width:12px;height:12px}.bb.onG .dot{background:var(--ok);box-shadow:0 0 10px var(--ok)}.bb.offR .dot{background:#ff5a4e;box-shadow:0 0 10px #ff5a4e}.ghost{border:1px solid var(--gap);background:transparent;color:var(--acc2);border-radius:12px;padding:12px;font-size:15px;font-weight:600}.warn{background:#5a2a1c;color:#ffd9cc;border-radius:12px;padding:10px 14px;font-size:14px;font-weight:600}.note{font-size:13px;color:var(--mut);text-align:center}.ban{border-radius:14px;padding:12px 16px;display:flex;align-items:center;gap:12px}.ban.g{background:#24492a}.ban.g small{color:#cfe8d2}.ban.y{background:#4a3517}.ban.y small{color:#f0d9b5}.ban.n{background:var(--card)}.ban.n small{color:var(--mut)}.ban b{display:block;font-size:15px}.ban small{display:block;font-size:13px;margin-top:2px}.card{background:var(--card);border-radius:16px;padding:16px;display:flex;flex-direction:column;gap:10px}.cap{font-size:11px;color:var(--mut);text-transform:uppercase;letter-spacing:.1em}.row{display:flex;justify-content:space-between;align-items:baseline;gap:8px}.lnk{background:none;border:0;color:var(--acc2);font-size:13px;font-weight:600;padding:4px 0}.bar{display:flex;width:100%;height:10px;border-radius:5px;overflow:hidden;gap:2px}.bar i{display:block;min-width:2px}.bar .fill,.bar .on{background:var(--acc)}.bar .soak{background:var(--soak)}.bar .gap,.bar .fgap{background:var(--gap)}.bar .full{background:var(--acc2)}.bar .fine,.bar .finez{background:repeating-linear-gradient(90deg,#e8c27a 0 3px,#4a3a2e 3px 5px)}.bar .off{width:3px;flex:none;background:var(--ink)}.bar .rest{background:transparent}.desc{font-size:13px;color:var(--mut)}.legend{display:flex;gap:12px;flex-wrap:wrap;font-size:11px;color:var(--mut)}.legend span{display:flex;align-items:center;gap:5px}.legend i{width:10px;height:10px;border-radius:3px;display:inline-block}.plist{display:flex;flex-direction:column;gap:8px}.prof{text-align:left;border:2px solid transparent;background:var(--card);border-radius:14px;padding:10px 14px;display:flex;flex-direction:column;gap:6px;width:100%}.prof.sel{border-color:var(--acc);background:var(--card2)}.prof .row span:first-child{font-weight:600;font-size:15px}.prof .row span:last-child{font-size:12px;color:var(--mut)}.prof.sel .row span:last-child{color:var(--acc2);font-weight:600}.shotT{background:var(--card);border-radius:20px;padding:24px 20px 20px;display:flex;flex-direction:column;align-items:center;gap:6px}.phase{font-size:14px;font-weight:700;color:var(--acc2);text-transform:uppercase;letter-spacing:.14em;margin-top:4px;text-align:center}.tl{position:relative;height:26px}.tl .bar{height:26px;border-radius:8px}.cur{position:absolute;top:-6px;width:3px;height:38px;border-radius:2px;background:var(--ink);transition:left .1s linear}.tlx{display:flex;justify-content:space-between;font-size:11px;color:var(--mut)}.list{background:var(--card);border-radius:14px;padding:4px 16px}.li{display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid var(--line);font-size:14px;gap:8px}.li:last-child{border-bottom:0}.li span:first-child{display:flex;align-items:center;gap:10px}.li.now{font-weight:600}.li.now span:last-child{color:var(--acc2)}.li span:last-child{color:var(--mut)}.sw{width:10px;height:10px;border-radius:3px;display:inline-block}.stp{display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--line)}.stp b{display:block;font-size:15px}.stp small{display:block;font-size:12px;color:var(--mut);margin-top:2px}.stp div:last-child{display:flex;align-items:center;gap:10px}.pm{width:44px;height:44px;border-radius:12px;border:0;background:var(--gap);font-size:22px}.val{width:56px;text-align:center;font-family:'Space Grotesk',sans-serif;font-size:18px;font-weight:700}.go{height:54px;border:0;border-radius:14px;background:var(--acc);color:var(--bg);font:700 16px Inter,sans-serif;width:100%}.form{background:var(--card);border-radius:16px;padding:14px 16px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.form .w{grid-column:span 3}.form label{display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--mut)}.form input{background:var(--bg);border:1px solid var(--gap);border-radius:10px;color:var(--ink);font:600 16px Inter,sans-serif;padding:10px;width:100%}.taste{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}.taste button{height:44px;border-radius:10px;border:0;background:var(--gap);font:600 13px Inter,sans-serif}.taste button.a{background:var(--acc);color:var(--bg);font-weight:700}.log .e{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--card);gap:8px}.log .e b{display:block;font-size:14px}.log .e small{display:block;font-size:12px;color:var(--mut);margin-top:3px}.tag{font-size:12px;font-weight:600;background:var(--card);padding:5px 10px;border-radius:99px;white-space:nowrap}nav{position:sticky;bottom:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));background:var(--nav);border-top:1px solid #3a2d24;padding:8px 8px max(14px,env(safe-area-inset-bottom))}nav button{background:none;border:0;display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;font-size:11px;color:var(--mut)}nav button.on{color:var(--acc2);font-weight:600}nav svg,.ic{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}dialog{background:var(--card);color:var(--ink);border:0;border-radius:16px;padding:18px;width:min(92vw,380px)}dialog::backdrop{background:#000a}dialog label{display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--mut);margin-bottom:10px}dialog input{background:var(--bg);border:1px solid var(--gap);border-radius:10px;color:var(--ink);font:600 15px Inter,sans-serif;padding:10px}.g2{display:grid;grid-template-columns:2fr 1fr;gap:8px}.awk{align-self:center;margin-top:-6px;padding:6px 12px;border-radius:99px;font-size:12px;font-weight:500;background:transparent;border:1px solid var(--gap);color:var(--mut)}.awk.on{border-color:#3d6b3a;color:#9fe0a5}.adv{background:var(--bg);border:1px solid var(--gap);border-radius:12px;padding:12px 14px;font-size:13px;color:var(--mut);line-height:1.45;display:flex;flex-direction:column;gap:6px}.adv .cap{color:var(--acc2)}.adv b{color:var(--ink);font-size:15px;font-weight:600}.adv ul{margin:0;padding-left:18px}.adv small{font-size:12px}.apb{margin-top:6px;border:1px solid var(--acc);background:transparent;color:var(--acc2);border-radius:99px;padding:6px 12px;font:600 12px Inter,sans-serif}.apb.ok{border-color:#3d6b3a;color:#9fe0a5}.hide{display:none!important}",e.head.appendChild(t);var n=e.createElement("link");n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap",e.head.appendChild(n),e.body.insertAdjacentHTML("beforeend",'<section class="view" id="v-warm"><div class="top"><div><div class="h ttl">CoffeePilot</div><div class="sub" id="wSub">Stilosa · warm-up</div></div><button class="conn" onclick="openSet()" aria-label="Connection settings"><span class="dot" id="cDot1"></span><span id="cTxt1">Connecting</span></button></div><div class="ring" style="width:250px;height:250px;margin-top:6px"><svg width="250" height="250" viewBox="0 0 250 250" aria-hidden="true"><circle cx="125" cy="125" r="108" stroke="#2e231c" stroke-width="14"/><circle id="wArc" cx="125" cy="125" r="108" stroke="#c97b3c" stroke-width="14" stroke-linecap="round" stroke-dasharray="678.6" stroke-dashoffset="678.6"/></svg><div class="c"><div class="big" id="wT" style="font-size:54px">--:--</div><div class="lbl" id="wTl">Idle</div></div></div><button class="awk" id="aw" onclick="wake()">Tap to keep screen on</button><div class="pill" id="wPill">Connecting…</div><div class="steps"><div class="st" id="s0">Heat 1</div><div class="st" id="s1">Heat 2</div><div class="st" id="s2">Brew</div></div><div class="warn hide" id="wWarn"></div><div class="note hide" id="wNote"></div><div class="tiles"><div><span>Machine</span><b id="tM">--</b></div><div><span>Knob</span><b id="tK">--</b></div><div><span>Auto-off</span><b id="tA">--</b></div></div><div class="btns"><button class="bb" id="bOn" onclick="warm(\'on\')"><span class="dot"></span>On</button><button class="bb" id="bOff" onclick="warm(\'off\')"><span class="dot"></span>Off</button></div><button class="ghost" id="bSkip" onclick="warm(\'skip\')">Brew now · no preheat</button></section><section class="view" id="v-brew"><div id="rdy" style="display:flex;flex-direction:column;gap:14px"><div class="top"><div><div class="h ttl">CoffeePilot</div><div class="sub" id="bSub">Stilosa · ready to brew</div></div><button class="conn" onclick="openSet()" aria-label="Connection settings"><span class="dot" id="cDot2"></span><span id="cTxt2">Connecting</span></button></div><div class="ring" style="width:210px;height:210px"><svg width="210" height="210" viewBox="0 0 210 210" aria-hidden="true"><circle cx="105" cy="105" r="92" stroke="#2e231c" stroke-width="12"/><circle id="bArc" cx="105" cy="105" r="92" stroke="#4cd964" stroke-width="12" stroke-linecap="round" stroke-dasharray="578" stroke-dashoffset="578"/></svg><div class="c"><div class="big" id="bT" style="font-size:46px">--:--</div><div class="lbl" id="bTl">Idle</div></div></div><div class="ban n" id="bBan"><svg class="ic" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" id="bBanIc"><path d="M20 6 9 17l-5-5"/></svg><div><b id="bBanT">Connecting…</b><small id="bBanS"></small></div></div><div class="card"><div class="row"><div class="cap">Next shot profile</div><button class="lnk" onclick="go(\'prof\')">Change</button></div><div class="h" style="font-size:22px" id="nName">--</div><div class="bar" style="height:14px;border-radius:7px" id="nBar"></div><div class="desc" id="nDesc"></div></div><div class="btns"><button class="bb" id="bOn2" onclick="warm(\'on\')" style="height:56px;font-size:17px"><span class="dot"></span>On</button><button class="bb" id="bOff2" onclick="warm(\'off\')" style="height:56px;font-size:17px"><span class="dot"></span>Off</button></div></div><div id="shot" class="hide" style="display:flex;flex-direction:column;gap:16px"><div class="top"><div><div class="h ttl">Pulling shot</div><div class="sub" id="sSub">--</div></div><div class="conn" style="font-size:13px;font-weight:600;color:var(--ink);padding:8px 12px"><span class="dot" id="sPd" style="width:10px;height:10px"></span><span id="sPt">Pump</span></div></div><div class="shotT"><div class="big" style="font-size:84px;line-height:1"><span id="sT">0.0</span><span style="font-size:28px;color:var(--mut)"> s</span></div><div style="font-size:15px;color:var(--mut)" id="sOf"></div><div class="phase" id="sPh">--</div></div><div style="display:flex;flex-direction:column;gap:8px"><div class="tl"><div class="bar" id="sBar"></div><div class="cur" id="sCur" style="left:0"></div></div><div class="tlx"><span>0 s</span><span id="sMid"></span><span id="sEnd"></span></div></div><div class="list" id="sList"></div><div style="display:flex;gap:10px;align-items:flex-start;font-size:13px;color:var(--mut);line-height:1.45"><svg class="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style="flex:none;margin-top:1px"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.5"/></svg><span id="sHint"></span></div><button class="ghost" onclick="brew(\'stop=1\')">Stop pump now</button></div></section><section class="view" id="v-prof"><div><div class="h ttl">Shot profiles</div><div class="sub">Pick one before turning the knob</div></div><div class="legend"><span><i style="background:var(--acc)"></i>Pump on</span><span><i style="background:var(--soak)"></i>Soak</span><span><i style="background:repeating-linear-gradient(90deg,#e8c27a 0 3px,#4a3a2e 3px 5px)"></i>Fine pulses</span><span><i style="background:var(--gap);outline:1px solid #6a5848"></i>Gap</span><span><i style="background:var(--acc2)"></i>Full flow</span><span><i style="width:3px;height:12px;border-radius:1px;background:var(--ink)"></i>Pump off</span></div><div class="plist" id="pList"><div class="note">Connecting to the pump Shelly…</div></div></section><section class="view" id="v-cust"><div class="top"><button class="lnk" style="font-size:14px" onclick="go(\'prof\')">‹ Profiles</button><div class="sub" style="margin:0">Saved to the Shelly</div></div><div class="h ttl" id="cTitle">Custom profile</div><div class="card" style="padding:14px 16px"><div class="row" style="align-items:flex-end"><div><div class="cap">Total shot time</div><div class="sub" id="cTsub">Pump stops automatically</div></div><span class="h" style="font-size:34px;color:var(--acc2);line-height:1" id="cTot">--</span></div><div class="bar" style="height:18px;border-radius:6px" id="cBar"></div><div class="desc" id="cDesc" style="font-size:12px"></div></div><div class="list" style="border-radius:16px" id="cRows"></div><button class="go" onclick="saveCustom()">Save and select</button></section><section class="view" id="v-log"><div class="top"><div class="h ttl">Shot log</div><button class="lnk" style="font-size:14px" onclick="exportCsv()">Export CSV</button></div><form class="form hide" id="lForm" onsubmit="return false"><div class="w row"><b style="font-size:15px" id="lProf">--</b><span class="h" style="font-size:18px;color:var(--acc2)" id="lTime">--</span></div><label>Dose (g)<input id="lDose" inputmode="decimal" oninput="advUI()"></label><label>Yield (g/ml)<input id="lYield" inputmode="decimal" placeholder="36" oninput="advUI()"></label><label>Grind<input id="lGrind" oninput="advUI()"></label><div class="w"><div style="font-size:12px;color:var(--mut);margin-bottom:6px">Taste</div><div class="taste" id="lTaste"></div></div><div class="w adv hide" id="lAdv"></div><label class="w">Notes<input id="lNotes" style="font-weight:400;font-size:15px" placeholder="How did it taste?"></label><button type="button" class="go w" style="height:50px;border-radius:12px" onclick="saveLog()">Save shot</button><button type="button" class="lnk w" style="color:var(--mut)" onclick="pending=null;drawLog()">Skip this shot</button></form><div class="cap" style="margin-top:4px">Earlier shots</div><div class="log" id="lList"></div></section><nav><button data-v="warm" onclick="go(\'warm\')"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c3 4 5 6 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-5 0 2 1 3 2 3 0-3 0-5 1-8z"/></svg>Warm-up</button><button data-v="brew" onclick="go(\'brew\')"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3v3M12 3v3"/></svg>Brew</button><button data-v="prof" onclick="go(\'prof\')"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>Profiles</button><button data-v="log" onclick="go(\'log\')"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>Log</button></nav><dialog id="set"><div class="h" style="font-size:18px;margin-bottom:12px">Shelly connections</div><div class="g2"><label>Warm-up Shelly IP<input id="iA"></label><label>Script no.<input id="iSA" inputmode="numeric"></label></div><div class="g2"><label>Pump Shelly IP<input id="iB"></label><label>Script no.<input id="iSB" inputmode="numeric"></label></div><div class="note" id="setSt" style="text-align:left;margin-bottom:12px"></div><div class="btns"><button class="bb" style="height:46px;font-size:15px" onclick="document.getElementById(\'set\').close()">Cancel</button><button class="bb" style="height:46px;font-size:15px;background:var(--acc);color:var(--bg)" onclick="saveSet()">Save</button></div></dialog>')}();var DEF={a:"192.168.1.241",sa:1,b:"192.168.1.80",sb:1};function load(e,t){try{var n=JSON.parse(localStorage.getItem(e));return null==n?t:n}catch(e){return t}}function store(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){}}var CFG=Object.assign({},DEF,load("cp_cfg",{}));function $(e){return document.getElementById(e)}function api(e,t,n){return"http://"+e+"/script/"+t+"/api"+(n?"?"+n:"")}var W=null,Wat=0,okA=null,B=null,Bat=0,okB=null,view=null,shotPh=null,lastId=null,prevPhase=null,prevShot=!1,pending=null,taste="",C=null;function fetchJ(e){var t=new AbortController,n=setTimeout(function(){t.abort()},4e3);return fetch(e,{cache:"no-store",signal:t.signal}).then(function(e){return clearTimeout(n),e.json()})}function warm(e){("off"!==e||confirm("Stop the warm-up and switch the machine off?"))&&pollA(e?"cmd="+e:"")}var inA=!1,inB=!1,lastBp=0,WS=null,wsOk=!1,wsN=0;function pollA(e){if(!e&&inA)return Promise.resolve();e||(inA=!0);var t=Date.now();return fetchJ(api(CFG.a,CFG.sa,e)).then(function(n){e||(inA=!1),W=n,Wat=(t+Date.now())/2,okA=!0,onW()}).catch(function(){e||(inA=!1),okA=!1,conn()})}function newer(e){return!B||e.boot!==B.boot||null==e.seq||null==B.seq||e.seq>=B.seq}function brew(e){if(!e&&inB)return Promise.resolve();e||(inB=!0),lastBp=Date.now();var t=Date.now();return fetchJ(api(CFG.b,CFG.sb,e)).then(function(n){if(e||(inB=!1),okB=!0,!newer(n))return conn();B=n,Bat=(t+Date.now())/2,onB()}).catch(function(){e||(inB=!1),okB=wsOk,conn()})}function onEv(e){B&&newer(e)&&(B.seq=e.seq,B.boot=e.boot,B.shot=e.shot,B.sn=e.sn,B.ss=e.ss,B.el=e.el,B.pump=e.pump,B.label=e.label,e.last&&(B.last=e.last),Bat=Date.now(),okB=!0,onB())}function wsOpen(){if(!WS&&"https:"!==location.protocol&&"undefined"!=typeof WebSocket){var e;try{e=new WebSocket("ws://"+CFG.b+"/rpc")}catch(e){return}WS=e,e.onopen=function(){e.send(JSON.stringify({id:++wsN,src:"coffeepilot"+Date.now().toString(36),method:"Shelly.GetDeviceInfo"}))},e.onmessage=function(e){var t;try{t=JSON.parse(e.data)}catch(e){return}t.id?(wsOk=!0,okB=!0,conn()):"NotifyEvent"===t.method&&t.params&&t.params.events&&t.params.events.forEach(function(e){"cp"===e.event&&e.data&&onEv(e.data)})},e.onclose=function(){WS===e&&(WS=null,wsOk=!1,setTimeout(wsOpen,3e3))},e.onerror=function(){try{e.close()}catch(e){}}}}function wsReset(){var e=WS;WS=null,wsOk=!1,e&&(e.onclose=null,e.close()),wsOpen()}function sum(e){var t=0;return e.forEach(function(e){t+=e.d}),t}function fixedPulses(e){return e.pulses>0&&e.on>0}function looped(e){return e.pulses<0&&e.on>0}function hasFine(e){return e.fn>0&&e.fon>0}function r1(e){return Math.round(10*e)/10}function plan(e){var t=[];if("Direct"===e.n)return{s:[],full:!0};if(e.fill>0&&t.push({k:"fill",d:e.fill}),e.soak>0&&t.push({k:"soak",d:e.soak}),hasFine(e))for(var n=0;n<e.fn;n++)t.push({k:"fine",d:e.fon}),t.push({k:"fgap",d:e.foff});if(0!==e.pulses&&e.on>0){if(e.pulses<0)return{s:t,loop:!0};for(var a=0;a<e.pulses;a++)t.push({k:"on",d:e.on}),a<e.pulses-1&&t.push({k:"gap",d:e.off});return{s:t,end:!0}}return{s:t,full:!0}}function total(e){var t=plan(e);return t.end?r1(sum(t.s)):null}function untilPulses(e){var t=plan(e),n=0;return t.s.forEach(function(e){"fill"!==e.k&&"soak"!==e.k&&"fine"!==e.k&&"fgap"!==e.k||(n+=e.d)}),r1(n)}function segs(e,t){var n=plan(e),a=n.s.slice(),o=sum(a);if(n.loop)for(var s=Math.max(t||0,o+5*(e.on+e.off));o<s;)a.push({k:"on",d:e.on}),a.push({k:"gap",d:e.off}),o+=e.on+e.off;else n.full&&a.push({k:"full",d:"Direct"===e.n?t||30:Math.max((t||30)-o,8)});return n.end&&(a.end=!0),a}function barHtml(e,t){var n=[];e.forEach(function(e){var t="fine"===e.k||"fgap"===e.k?"finez":e.k,a=n[n.length-1];"finez"===t&&a&&"finez"===a.k?a.d+=e.d:n.push({k:t,d:e.d})});var a=n.map(function(e){return'<i class="'+e.k+'" style="flex:'+e.d+'"></i>'}).join("");return e.end&&(a+='<i class="off"></i>'),t&&(a+='<i class="rest" style="flex:'+t+'"></i>'),a}function sec(e){return Math.round(10*e)/10+" s"}function desc(e){if("Direct"===e.n)return"Pump follows the knob · hot water";var t=[];return e.fill&&t.push("Fill "+sec(e.fill)),e.soak&&t.push("Soak "+sec(e.soak)),hasFine(e)&&t.push("Fine "+e.fon+" on / "+e.foff+" off × "+e.fn),e.pulses&&e.on&&t.push("Pulse "+e.on+" on / "+e.off+" off"+(e.pulses<0?" to end":" × "+e.pulses)),e.pulses&&e.on?e.pulses>0&&t.push("Pump off"):t.push("Full flow"),t.join(" › ")}function tagFor(e){if("Direct"===e.n)return"no profile";var t=total(e);return null!=t?t+" s total":looped(e)?"pulses to the end":r1(e.fill+e.soak)+" s to full"}function where(e,t){for(var n=segs(e,t+30),a=0,o=0,s=0,i=fixedPulses(e)?e.pulses:0,l=0;l<n.length;l++){if("on"===n[l].k&&o++,"fine"===n[l].k&&s++,t<a+n[l].d)return{k:n[l].k,pulse:o,fine:s,n:i,left:a+n[l].d-t,i:l};a+=n[l].d}return{k:"end",pulse:o,fine:s,n:i,left:0,i:n.length}}function whereB(e,t,n){if(null==B.sn||B.sn<0)return where(e,t);for(var a=segs(e,Math.max(n,t+30)),o=Math.min(B.sn,a.length-1),s=0,i=0,l=0,r=0;r<o;r++)"on"===a[r].k&&s++,"fine"===a[r].k&&i++,l+=a[r].d;"on"===a[o].k&&s++,"fine"===a[o].k&&i++;var d=Math.max(0,t-(B.ss||0)),p=a[o].d;return{k:a[o].k,pulse:s,fine:i,n:fixedPulses(e)?e.pulses:0,left:Math.max(0,p-d),i:o,x:l+Math.min(d,p)}}function go(e){view=e,["warm","brew","prof","cust","log"].forEach(function(t){$("v-"+t).classList.toggle("on",t===e)}),document.querySelectorAll("nav button").forEach(function(t){t.classList.toggle("on",t.dataset.v===e||"cust"===e&&"prof"===t.dataset.v)}),"cust"===e&&openCustom(),"log"===e&&drawLog(),"prof"===e&&drawProfiles(),drawAll(),window.scrollTo(0,0)}function conn(){var e,t;okA&&okB?(e="g",t="Connected"):!1===okA&&!1===okB?(e="r",t="Offline"):!1===okA?(e="a",t="Warm-up offline"):!1===okB?(e="a",t="Pump offline"):(e="",t="Connecting"),["1","2"].forEach(function(n){$("cDot"+n).className="dot "+e,$("cTxt"+n).textContent=t})}function openSet(){$("iA").value=CFG.a,$("iSA").value=CFG.sa,$("iB").value=CFG.b,$("iSB").value=CFG.sb,$("setSt").textContent="Warm-up: "+(okA?"connected":"not reachable")+" · Pump: "+(okB?"connected":"not reachable")+("https:"===location.protocol?" · This page is on https, which browsers block from talking to the Shellys. Open it over http on your home network.":window.isSecureContext?"":" · Screen wake lock is off: add this page's address and the warm-up Shelly's to chrome://flags/#unsafely-treat-insecure-origin-as-secure"),$("set").showModal()}function saveSet(){store("cp_cfg",CFG={a:$("iA").value.trim()||DEF.a,sa:parseInt($("iSA").value,10)||1,b:$("iB").value.trim()||DEF.b,sb:parseInt($("iSB").value,10)||1}),$("set").close(),okA=okB=null,B=null,conn(),wsReset(),pollA(),brew()}function mmss(e){var t=(e=Math.max(0,Math.round(e)))%60;return Math.floor(e/60)+":"+(t<10?"0":"")+t}function wEl(){return W?W.elapsed+("idle"===W.phase?0:(Date.now()-Wat)/1e3):0}function bEl(){return B&&B.shot?B.el+(Date.now()-Bat)/1e3:0}function onW(){conn(),"heating"===prevPhase&&"ready"===W.phase&&(navigator.vibrate&&navigator.vibrate([300,150,300]),"warm"===view&&go("brew")),prevPhase=W.phase,drawAll()}function onB(){if(conn(),null===lastId)lastId=B.last?B.last.id:0;else if(B.last&&B.last.id!==lastId)return lastId=B.last.id,pending={prof:B.last.p,time:B.last.t,ph:shotPh},navigator.vibrate&&navigator.vibrate(200),void go("log");B.shot&&!prevShot&&(shotPh=prevPhase),B.shot&&!prevShot&&"brew"!==view&&go("brew"),prevShot=!!B.shot,"prof"!==view||document.activeElement.closest(".prof")||drawProfiles(),drawAll()}function setArc(e,t,n){n=Math.min(1,Math.max(0,n||0)),$(e).setAttribute("stroke-dashoffset",t*(1-n)),$(e).style.opacity=n>.003?1:0}function drawAll(){"warm"===view&&drawWarm(),"brew"===view&&drawBrew()}function drawWarm(){if(W){var e=wEl(),t=W.phase;$("wSub").textContent=W.name+" · "+("ready"===t?"ready to brew":"warm-up"),"heating"===t?($("wT").textContent=mmss(W.readyAt-e),$("wTl").textContent="Ready in",$("wArc").setAttribute("stroke","#c97b3c"),setArc("wArc",678.6,e/W.readyAt)):"ready"===t?($("wT").textContent=mmss(W.end-e),$("wTl").textContent="Auto-off in",$("wArc").setAttribute("stroke","#4cd964"),setArc("wArc",678.6,(W.end-e)/Math.max(1,W.end-W.readyAt))):($("wT").textContent="--:--",$("wTl").textContent="Idle",setArc("wArc",678.6,0)),$("wPill").textContent=W.use?"Machine in use":"idle"===t?W.on?"Machine looks on":"Machine off":"ready"===t?"At brewing temp":0===W.press?"Waiting to switch on":"Machine heating · cycle "+(W.step+1)+" of 2";for(var n=0;n<3;n++)$("s"+n).className="st"+("idle"===t?"":n===W.step?" a":n<W.step?" d":"");$("s0").textContent="Heat 1"+("idle"!==t&&W.step>0?" ✓":""),$("s1").textContent="Heat 2"+("idle"!==t&&W.step>1?" ✓":""),$("wWarn").classList.toggle("hide",!W.warn),$("wWarn").textContent=W.warn||"",$("wNote").classList.toggle("hide",!W.note),$("wNote").textContent=W.note||"",$("tM").textContent=W.on?"On":"Off";var a=B?B.knob:W.knob;$("tK").textContent=!0===a?"Coffee":!1===a?"Centre":"--",$("tK").style.color=!0===a?"#f2a640":"",$("tA").textContent="idle"===t?"--":"in "+mmss(W.end-e),$("bOn").className="bb"+("idle"!==t?" onG":""),$("bOff").className="bb"+("idle"===t?" offR":""),$("bSkip").classList.toggle("hide","ready"===t),$("bSkip").textContent="idle"===t?"Brew now · no preheat":"Skip the rest of the warm-up"}else $("wPill").textContent=!1===okA?"Cannot reach the warm-up Shelly":"Connecting…"}function drawBrew(){var e=B&&B.shot;if($("rdy").classList.toggle("hide",!!e),$("shot").classList.toggle("hide",!e),e)return drawShot();var t,n,a=wEl(),o=W?W.phase:null,s="n";"ready"===o?($("bT").textContent=mmss(W.end-a),$("bTl").textContent="Auto-off in",$("bArc").setAttribute("stroke","#4cd964"),setArc("bArc",578,(W.end-a)/Math.max(1,W.end-W.readyAt))):"heating"===o?($("bT").textContent=mmss(W.readyAt-a),$("bTl").textContent="Ready in",$("bArc").setAttribute("stroke","#c97b3c"),setArc("bArc",578,a/W.readyAt)):($("bT").textContent="--:--",$("bTl").textContent="Idle",setArc("bArc",578,0)),$("bSub").textContent=(W?W.name:"Stilosa")+("ready"===o?" · ready to brew":"heating"===o?" · warming up":"");var i=B?B.knob:null,l=B&&B.last&&!B.shot&&!0===i;if(!1===okB?(s="n",t="Can't reach the pump Shelly",n="Check it's powered and on Wi-Fi ("+CFG.b+")"):l?(s="y",t=("Pump off"===B.label?"Shot finished":"Stopped"===B.label?"Pump stopped":"Shot ended")+" · "+B.last.t+" s",n="Turn the knob back to the centre"):"ready"===o?(s="g",t=W.use?"Machine in use":"Group head at brewing temp",n="Turn the knob to Coffee to pull your shot"):"heating"===o?(s="y",t="Still warming up · ready in "+mmss(W.readyAt-a),n="You can brew now, but the shot will run cooler"):(s="n",t="Machine "+(W&&W.on?"on":"off"),n="Start a warm-up, or tap On"),$("bBan").className="ban "+s,$("bBanT").textContent=t,$("bBanS").textContent=n,$("bBanIc").setAttribute("stroke","g"===s?"#7ee08f":"y"===s?"#f2c48a":"#b9a796"),B){var r=B.profiles[B.sel];$("nName").textContent=r.n,$("nBar").innerHTML=barHtml(segs(r,30)),$("nDesc").textContent=desc(r)}$("bOn2").className="bb"+(o&&"idle"!==o?" onG":""),$("bOff2").className="bb"+("idle"===o?" offR":"")}function drawShot(){var e=B.profiles[B.sel],t=bEl(),n=total(e),a=untilPulses(e),o=null!=n?n:Math.max(t+6,a+15,25),s=whereB(e,t,o),i=segs(e,o);$("sSub").textContent=e.n+(null!=n?" · "+n+" s total":""),$("sPd").className="dot"+(B.pump?" g":""),$("sPd").style.boxShadow=B.pump?"0 0 10px #4cd964":"",$("sPt").textContent=B.pump?"Pump on":"Pump off",$("sT").textContent=t.toFixed(1),$("sOf").innerHTML=null!=n?"of "+n+' s · <span style="color:var(--ink);font-weight:600">'+Math.max(0,n-t).toFixed(1)+" s left</span>":"full"===s.k?"Full flow · stop at your yield":!looped(e)||"on"!==s.k&&"gap"!==s.k?"of "+a+" s to "+(looped(e)?"pulsing":"full flow"):"Pulsing until you stop";var l={fill:"Fill",soak:"Soak",full:"Full flow",end:"Pump off"}[s.k];"on"!==s.k&&"gap"!==s.k||(l="Pulse "+s.pulse+(s.n?" of "+s.n:"")+" · "+("on"===s.k?"on":"gap")),"fine"!==s.k&&"fgap"!==s.k||(l="Fine "+s.fine+" of "+e.fn+" · "+("fine"===s.k?"on":"gap")),"Direct"===e.n&&(l="Direct"),$("sPh").textContent=l;var r=sum(i),d=Math.max(r,o);$("sBar").innerHTML=barHtml(i,d>r?d-r:0),$("sCur").style.left=Math.min(99,(null!=s.x?s.x:t)/d*100)+"%";var p=r1(e.fill+e.soak),c=a;$("sMid").textContent=hasFine(e)?"Fine ends "+c+" s":e.soak?"Soak ends "+p+" s":"",$("sEnd").textContent=null!=n?"Pump off "+n+" s":"";var u=[];if("Direct"===e.n)u.push(["full","Pump follows the knob","now",!0]);else{if(e.fill&&u.push(["fill","Fill",t>=e.fill?sec(e.fill)+" · done":"fill"===s.k?sec(s.left)+" left":sec(e.fill),"fill"===s.k]),e.soak&&u.push(["soak","Soak",t>=p?sec(e.soak)+" · done":"soak"===s.k?sec(s.left)+" left":sec(e.soak),"soak"===s.k]),hasFine(e)){var f="fine"===s.k||"fgap"===s.k;u.push(["fine","Fine "+e.fon+" s on / "+e.foff+" s off × "+e.fn,f?s.fine+" of "+e.fn:t>=c?"done":e.fn+" pulses",f])}if(e.pulses&&e.on){var v="on"===s.k||"gap"===s.k;u.push(["on","Pulses "+e.on+" s on / "+e.off+" s off"+(e.pulses>0?" × "+e.pulses:""),v?s.n?s.pulse+" of "+s.n:"pulse "+s.pulse:t>a?"done":e.pulses>0?e.pulses+" pulses":"to the end",v]),e.pulses>0&&u.push(["off","Pump off","at "+n+" s","end"===s.k])}else u.push(["full","Full flow","full"===s.k?"until you stop":"after "+a+" s","full"===s.k])}var h={fill:"var(--acc)",soak:"var(--soak)",full:"var(--acc2)",on:"var(--acc)",fine:"#e8c27a"};$("sList").innerHTML=u.map(function(e){var t="off"===e[0]?'<span class="sw" style="width:3px;height:12px;border-radius:1px;background:var(--ink);margin:0 3.5px"></span>':'<span class="sw" style="background:'+h[e[0]]+'"></span>';return'<div class="li'+(e[3]?" now":"")+'"><span>'+t+e[1]+"</span><span>"+e[2]+"</span></div>"}).join(""),$("sHint").textContent=null!=n?"The pump stops on its own at "+n+" s. Turn the knob back early if you reach your yield first.":"Turn the knob back to the centre when you reach your yield. The pump stops after "+B.max+" s as a safety limit."}function drawProfiles(){if(B){var e="";B.profiles.forEach(function(t,n){var a=n===B.sel;e+=n>=5?'<div class="prof'+(a?" sel":"")+'" style="cursor:default"><div class="row"><span>'+t.n+' <span style="font-size:12px;color:var(--acc2)">'+(null!=total(t)?"· "+total(t)+" s total":"")+'</span></span><span style="display:flex;gap:14px;align-items:center">'+(a?'<span style="color:var(--acc2);font-weight:600">Selected</span>':'<button class="lnk" onclick="pick('+n+')">Select</button>')+'<button class="lnk" onclick="editIdx='+n+';go(\'cust\')">Edit</button></span></div><div class="bar">'+barHtml(segs(t,30))+'</div><div class="desc" style="font-size:12px">'+desc(t)+"</div></div>":'<button class="prof'+(a?" sel":"")+'" onclick="pick('+n+')"'+(B.shot?" disabled":"")+'><div class="row"><span>'+t.n+"</span><span>"+(a?"Selected":tagFor(t))+'</span></div><div class="bar">'+barHtml(segs(t,30))+'</div><div class="desc" style="font-size:12px">'+desc(t)+"</div></button>"}),B.shot&&(e+='<div class="note">Profiles can\'t be changed during a shot</div>'),$("pList").innerHTML=e}else $("pList").innerHTML='<div class="note">'+(!1===okB?"Can't reach the pump Shelly ("+CFG.b+")":"Connecting to the pump Shelly…")+"</div>"}function pick(e){B&&!B.shot&&brew("p="+e).then(drawProfiles)}var editIdx=5,F_STD=[["fill","Fill","Pump on to wet the puck",0,20,.5],["soak","Soak","Pump off, puck swells",0,30,.5],["on","Pulse on","Pump run per pulse",.5,10,.5],["off","Pulse off","Gap between pulses",.5,10,.5],["pulses","Pulses","Then pump off",-1,30,1]],F_FINE=[["fon","Fine on","Pump run per fine pulse",.1,1,.1],["foff","Fine off","Gap between fine pulses",.1,1,.1],["fn","Fine pulses","Straight after the soak",0,40,1]];function fields(){return 6===editIdx?F_STD.slice(0,2).concat(F_FINE,F_STD.slice(2)):F_STD}function openCustom(){var e=6===editIdx?{n:"Custom 2",fill:3,soak:8,fon:.3,foff:.3,fn:10,on:2,off:1,pulses:4}:{n:"Custom",fill:3,soak:8,on:2,off:1,pulses:6},t=B&&B.profiles[editIdx]?B.profiles[editIdx]:e;C=JSON.parse(JSON.stringify(t)),$("cTitle").textContent=C.n+" profile",drawCustom()}function bump(e,t){var n=fields().filter(function(t){return t[0]===e})[0];C[e]=Math.min(n[4],Math.max(n[3],r1(C[e]+t*n[5]))),drawCustom()}function shownVal(e,t){return"pulses"===e?t<0?"To end":0===t?"None":t:"fn"===e?t:t.toFixed(1)+" s"}function hintFor(e,t){return"pulses"===e[0]?t<0?"Pulse until you stop":0===t?"Full flow instead":"Then pump off":e[2]}function drawCustom(){var e=total(C);$("cTot").textContent=null!=e?e+" s":"Open",$("cTsub").textContent=null!=e?"Pump stops automatically":C.pulses<0?"Pulses until you turn the knob back":"Full flow until you turn the knob back",$("cBar").innerHTML=barHtml(segs(C,30)),$("cDesc").textContent=desc(C)+(null==e?" · stops after 60 s at most":""),$("cRows").innerHTML=fields().map(function(e){var t=C[e[0]];return'<div class="stp"><div><b>'+e[1]+"</b><small>"+hintFor(e,t)+'</small></div><div><button class="pm" aria-label="Less '+e[1]+'" onclick="bump(\''+e[0]+'\',-1)">−</button><span class="val">'+shownVal(e[0],t)+'</span><button class="pm" aria-label="More '+e[1]+'" onclick="bump(\''+e[0]+"',1)\">+</button></div></div>"}).join("")+'<div class="stp" style="border:0"><div><b>Total shot time</b><small>Worked out from the settings above</small></div><span class="h" style="font-size:18px;color:var(--acc2)">'+(null!=e?e+" s":"Open")+"</span></div>"}function saveCustom(){B&&B.shot?alert("Wait for the shot to finish first."):brew(6===editIdx?"c2="+[C.fill,C.soak,C.fon,C.foff,C.fn,C.on,C.off,C.pulses].join(","):"c="+[C.fill,C.soak,C.on,C.off,C.pulses].join(",")).then(function(){return brew("p="+editIdx)}).then(function(){okB?go("prof"):alert("Couldn't reach the pump Shelly. Nothing was saved.")})}var TASTE=["Sour","2","Balanced","4","Bitter"];function getLog(){return load("cp_log",[])}function drawLog(){var e=$("lForm");if(e.classList.toggle("hide",!pending),pending){var t=getLog()[0]||{};$("lProf").textContent=pending.prof,$("lTime").textContent=pending.time+" s",e.dataset.for&&e.dataset.for===pending.prof+pending.time||(e.dataset.for=pending.prof+pending.time,$("lDose").value=t.dose||"",$("lYield").value="",$("lGrind").value=t.grind||"",$("lNotes").value="",taste=""),$("lTaste").innerHTML=TASTE.map(function(e,t){return'<button type="button" class="'+(taste===String(t+1)?"a":"")+'" onclick="taste=\''+(t+1)+"';drawLog()\">"+e+"</button>"}).join(""),advUI()}var n=getLog();$("lList").innerHTML=n.length?n.slice(0,40).map(function(e){return'<div class="e"><div><b>'+esc(e.prof)+"</b><small>"+(e.dose||"?")+" g › "+(e.yield||"?")+" g · grind "+esc(e.grind||"?")+" · "+e.time+" s<br>"+esc(e.at)+(e.notes?" · "+esc(e.notes):"")+(e.adv?'<br><span style="color:var(--acc2)">Next: '+esc(e.adv)+"</span>":"")+"</small></div>"+(e.taste?'<span class="tag">'+TASTE[e.taste-1]+"</span>":"")+"</div>"}).join(""):'<div class="note" style="text-align:left;padding:10px 0">No shots logged yet. Pull a shot and the form opens here.</div>'}function esc(e){return String(e).replace(/[&<>"]/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[e]})}function saveLog(){if(pending){var e=getLog(),t=new Date,n=t.toLocaleDateString("en-GB",{day:"numeric",month:"short"})+" "+t.toTimeString().slice(0,5);e.unshift({at:n,prof:pending.prof,time:pending.time,dose:$("lDose").value,yield:$("lYield").value,grind:$("lGrind").value,taste:taste,notes:$("lNotes").value,adv:ADV?ADV.short+(ADV.applied?" · applied "+ADV.applied.join(", "):""):""}),store("cp_log",e.slice(0,500)),pending=null,drawLog()}}function exportCsv(){var e=["at","prof","time","dose","yield","grind","taste","notes","adv"],t=[e.join(",")];getLog().forEach(function(n){t.push(e.map(function(e){return'"'+String(null==n[e]?"":n[e]).replace(/"/g,"'")+'"'}).join(","))});var n=document.createElement("a");n.href=URL.createObjectURL(new Blob([t.join("\n")],{type:"text/csv"})),n.download="coffeepilot-shots.csv",n.click()}var ADV=null;function num(e){return e=String(e||"").replace(",",".").trim(),/^-?\d+(\.\d+)?$/.test(e)?parseFloat(e):null}function profByName(e){return B?B.profiles.filter(function(t){return t.n===e})[0]:null}function grindTip(e,t){var n=num(e),a=t?"finer":"coarser";if(null==n)return{t:"Grind one step "+a,s:"grind "+a};var o=n%1?.5:1,s=r1(t?n-o:n+o);return{t:"Grind one step "+a+": try "+s+" (from "+n+")",s:"grind "+s,x:"Assumes a lower number is finer on your grinder. If yours runs the other way, go to "+r1(t?n+o:n-o)+"."}}function act(e,t,n,a){return{t:e,k:t,v:n,l:a}}function editable(e){var t=B&&e?B.profiles.indexOf(e):-1;return 5===t||6===t?t:-1}function applyAdv(e){var t=ADV&&ADV.also[e],n=pending&&profByName(pending.prof),a=editable(n);if(t&&t.k&&!(a<0))if(B.shot)alert("Wait for the shot to finish first.");else{var o=JSON.parse(JSON.stringify(n)),s=(6===a?F_STD.concat(F_FINE):F_STD).filter(function(e){return e[0]===t.k})[0];o[t.k]=s?Math.min(s[4],Math.max(s[3],t.v)):t.v;var i=6===a?"c2="+[o.fill,o.soak,o.fon,o.foff,o.fn,o.on,o.off,o.pulses].join(","):"c="+[o.fill,o.soak,o.on,o.off,o.pulses].join(",");t.busy=!0,advDraw(),brew(i).then(function(){return brew("p="+a)}).then(function(){t.busy=!1,okB?(t.done=!0,ADV.applied=(ADV.applied||[]).concat(o.n+" "+t.l.toLowerCase())):alert("Couldn't reach the pump Shelly. Nothing was changed."),advDraw()})}}function advise(e,t,n,a,o,s,i){if(!e)return null;var l,r,d,p,c=t&&n?n/t:null,u=t?Math.round(2*t):null,f=e<=2,v=1===e||5===e,h=[],g=s&&"Direct"!==s.n,b=s&&fixedPulses(s),x=!s||"Direct"===s.n||plan(s).full;if(3===e)return{main:"Dialled in · keep everything the same",short:"keep settings",why:"Balanced shot"+(c?" at 1:"+c.toFixed(1):"")+". Note the grind and dose so you can repeat it.",also:[]};if(f){if(d="Sour or thin means under-extracted: the water didn't take enough from the coffee.","heating"===i)l="Let the warm-up finish before brewing",r="finish warm-up",h.push("This shot was pulled while the machine was still heating. A cool group head is a common cause of sour shots.");else if(c&&c<1.8)l="Run a longer shot: about "+u+" g out (this one was 1:"+c.toFixed(1)+")",r="longer shot, ~"+u+" g",b&&h.push(act("On "+s.n+", add a pulse: "+(s.pulses+1)+" (now "+s.pulses+") so the pump runs longer.","pulses",s.pulses+1,"Pulses "+(s.pulses+1)));else{var m=grindTip(o,!0);l=m.t,r=m.s,p=m.x,x&&a&&a<20&&h.push("At "+a+" s the water ran through fast, which also points to grinding finer.")}if(0!==l.indexOf("Grind")&&"heating"!==i){var w=grindTip(o,!0);h.push("If that doesn't fix it: "+w.t.charAt(0).toLowerCase()+w.t.slice(1)+".")}g&&s.soak<8&&h.push(act("Try a longer soak on "+s.n+": "+r1(s.soak+2)+" s (now "+s.soak+" s) to wet the puck more evenly.","soak",r1(s.soak+2),"Soak "+r1(s.soak+2)+" s")),g||h.push("A profile with a soak (for example Custom) usually extracts more evenly than Direct."),v&&h.push("Very sour: you can also dose 0.5–1 g more, if the basket has room.")}else{if(d="Bitter or harsh means over-extracted: the water pulled out too much.",c&&c>2.5)l="Stop the shot sooner: about "+u+" g out (this one was 1:"+c.toFixed(1)+")",r="shorter shot, ~"+u+" g",b&&s.pulses>1&&h.push(act("On "+s.n+", remove a pulse: "+(s.pulses-1)+" (now "+s.pulses+").","pulses",s.pulses-1,"Pulses "+(s.pulses-1)));else{var k=grindTip(o,!1);l=k.t,r=k.s,p=k.x,x&&a&&a>35&&h.push("At "+a+" s the flow was slow, which also points to grinding coarser."),b&&s.pulses>1&&h.push(act("Or remove a pulse on "+s.n+": "+(s.pulses-1)+" (now "+s.pulses+") to cut the volume.","pulses",s.pulses-1,"Pulses "+(s.pulses-1)))}g&&s.soak>8&&h.push(act("Try a shorter soak on "+s.n+": "+r1(s.soak-2)+" s (now "+s.soak+" s).","soak",r1(s.soak-2),"Soak "+r1(s.soak-2)+" s")),s&&hasFine(s)&&s.fn>6&&h.push(act("Try fewer fine pulses on "+s.n+": "+(s.fn-3)+" (now "+s.fn+").","fn",s.fn-3,"Fine pulses "+(s.fn-3))),v&&h.push("Very bitter on every setting can also mean very dark or stale beans.")}return t&&n||h.push("Add dose and yield for advice on shot length. Without a scale, about 1 ml ≈ 1 g of espresso is close enough for this."),h.push("Change one thing at a time, then grade the next shot."),{main:(2===e||4===e?"Small change · ":"")+l,short:r,why:d,x:p,also:h}}function advUI(){if($("lAdv")&&pending){var e=advise(parseInt(taste,10),num($("lDose").value),num($("lYield").value),pending.time,$("lGrind").value,profByName(pending.prof),pending.ph);e&&ADV&&ADV.applied&&(e.applied=ADV.applied,e.also.forEach(function(e){ADV.also.forEach(function(t){e.k&&t.k===e.k&&t.v===e.v&&(e.done=t.done)})})),ADV=e,advDraw()}}function advDraw(){var e=$("lAdv");if(e.classList.toggle("hide",!ADV),ADV){var t=editable(profByName(pending.prof))>=0,n=!1;e.innerHTML='<div class="cap">Try next</div><b>'+esc(ADV.main)+"</b><div>"+esc(ADV.why)+"</div>"+(ADV.x?"<small>"+esc(ADV.x)+"</small>":"")+(ADV.also.length?"<ul>"+ADV.also.map(function(e,a){var o="string"==typeof e?e:e.t,s="";return e.k&&(n=!0,t&&(s='<br><button type="button" class="apb'+(e.done?" ok":"")+'"'+(e.done||e.busy?" disabled":"")+' onclick="applyAdv('+a+')">'+(e.done?"Applied · "+esc(e.l)+" ✓":e.busy?"Saving…":"Apply · "+esc(e.l))+"</button>")),"<li>"+esc(o)+s+"</li>"}).join("")+"</ul>":"")+(n&&!t?"<small>Profile changes can be applied to Custom and Custom 2. Built-in profiles stay fixed.</small>":"")+(ADV.applied?'<small style="color:#9fe0a5">Saved to the Shelly and selected for your next shot.</small>':"")}}var WV="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAH9EU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHYTbuMU6uEElTDZ1OsggEeTbuMU6uEHFO7a1OsggHn7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmsirXsYMPQkBNgI1MYXZmNjAuMTYuMTAwV0GNTGF2ZjYwLjE2LjEwMESJiECfQAAAAAAAFlSua8GuAQAAAAAAADjXgQFzxYjF/G6EcNahlJyBACK1nIN1bmSIgQCGhVZfVlA4g4EBI+ODhDuaygDgibCBELqBEJqBAhJUw2f8c3OgY8CAZ8iaRaOHRU5DT0RFUkSHjUxhdmY2MC4xNi4xMDBzc9ZjwItjxYjF/G6EcNahlGfIoUWjh0VOQ09ERVJEh5RMYXZjNjAuMzEuMTAyIGxpYnZweGfIoUWjiERVUkFUSU9ORIeTMDA6MDA6MDIuMDAwMDAwMDAwAB9DtnXD54EAo6OBAACAEAIAnQEqEAAQAABHCIWFiJmEiAICAAwNYAD+/6tQgKOZgQPoALEBAAEQEAAYADA/9AwAAAD+/6tQgBxTu2uRu4+zgQC3iveBAfGCAZ/wgQM=",WL=null,VID=null,WANT=!1,AWAKE=!1,VIA="";function awUI(){var e=$("aw");e&&(e.textContent=AWAKE&&"lock"===VIA?"Screen stays on":AWAKE?"Screen on · fallback, may still sleep":WANT?"Keeping screen on…":"Tap to keep screen on",e.className="awk"+(AWAKE&&"lock"===VIA?" on":""))}function vid(){VID||((VID=document.createElement("video")).muted=!0,VID.loop=!0,VID.setAttribute("playsinline",""),VID.setAttribute("muted",""),VID.src=WV,VID.style.cssText="position:fixed;inset:0;width:100vw;height:100vh;object-fit:cover;opacity:.01;z-index:-1;pointer-events:none",document.body.appendChild(VID));var e=VID.play();e&&e.then&&e.then(function(){AWAKE=!0,VIA="video",awUI()}).catch(function(){AWAKE=!1,awUI()})}function wake(){if(WANT=!0,navigator.wakeLock&&window.isSecureContext){if(WL)return;navigator.wakeLock.request("screen").then(function(e){WL=e,AWAKE=!0,VIA="lock",awUI(),VID&&VID.pause(),e.addEventListener("release",function(){WL=null,AWAKE=!1,awUI()})}).catch(function(){vid()})}else vid();awUI()}document.addEventListener("click",wake),document.addEventListener("touchend",wake),document.addEventListener("visibilitychange",function(){"visible"===document.visibilityState&&(WANT&&wake(),wsOpen(),pollA(),brew())}),go("warm"),window.isSecureContext&&wake(),Promise.all([pollA(),brew()]).then(function(){(B&&B.shot||W&&"ready"===W.phase)&&go("brew")}),wsOpen(),setInterval(function(){"visible"===document.visibilityState&&pollA()},2e3),setInterval(function(){"visible"===document.visibilityState&&Date.now()-lastBp>=(wsOk?2e3:700)&&brew()},100),setInterval(drawAll,100);

// ---- CoffeePilot app v2.1: pump power trace (needs brew script v3.4) ----
// Live chart on the shot screen, a chart on the log form after each shot, saved traces in the log,
// and "Export traces" for a CSV of every sample. The heater's share is taken off using V²/R, with R
// learnt from readings where the heater is on and the pump is off.
(function () {
  var HEAT_W = 300, LAG = 1.2, SETTLE = 1.8, R_DEF = 48;
  var LT = { s: [], e: [], tid: null, lp: null, v: 0 }, liveOn = false, lastDraw = 0, lastV = -1;

  function pTr(tr) {
    function sp(x) {
      return String(x || "").split(";").filter(Boolean).map(function (r) { return r.split(",").map(Number); });
    }
    return { s: sp(tr.s), e: sp(tr.e) };
  }
  function med(a) {
    if (!a.length) return null;
    var b = a.slice().sort(function (x, y) { return x - y; }), m = b.length >> 1;
    return b.length % 2 ? b[m] : (b[m - 1] + b[m]) / 2;
  }
  function avg(a) { var t = 0; a.forEach(function (x) { t += x; }); return a.length ? t / a.length : null; }

  // works out the pump's share of each reading, and summarises each pump run
  function anal(tr) {
    var d = pTr(tr), S = d.s, E = d.e;
    function pumpAt(t) { var p = 0; for (var i = 0; i < E.length && E[i][0] <= t; i++) p = E[i][1]; return p; }
    function settled(t) {
      var p = pumpAt(t);
      for (var i = 0; i < E.length; i++) if (E[i][0] > t - LAG && E[i][0] <= t && E[i][1] !== p) return null;
      return pumpAt(t - LAG) === p ? p : null;
    }
    var rs = [], idle = [];
    S.forEach(function (x) {
      var st = settled(x[0]);
      if (st !== 0) return;
      if (x[1] >= HEAT_W && x[2] > 0) rs.push(x[2] * x[2] / x[1]);
      else if (x[1] < HEAT_W) idle.push(x[1]);
    });
    var stored = load("cp_R", null), R = med(rs);
    if (R && rs.length >= 2) store("cp_R", stored ? r1(stored * 0.7 + R * 0.3) : r1(R));
    if (!R) R = stored || R_DEF;
    var base = med(idle) || 0;
    var P = S.map(function (x, i) {
      var h = x[1] >= HEAT_W, v = x[2] || 230;
      var ok = (!S[i - 1] || (S[i - 1][1] >= HEAT_W) === h) && (!S[i + 1] || (S[i + 1][1] >= HEAT_W) === h);
      var pw = r1(x[1] - base - (h ? v * v / R : 0));
      return { t: x[0], w: x[1], v: x[2], h: h, ok: ok && pw > -15, pw: pw, st: settled(x[0]), p: pumpAt(x[0]) };
    });
    // pump runs from the step log
    var runs = [], on = null;
    E.forEach(function (x) {
      if (x[1] && on === null) on = x[0];
      else if (!x[1] && on !== null) { runs.push([on, x[0]]); on = null; }
    });
    if (on !== null) runs.push([on, S.length ? S[S.length - 1][0] : on]);
    var sum = [];
    runs.forEach(function (r) {
      var pts = P.filter(function (q) { return q.ok && q.st === 1 && q.t >= r[0] + SETTLE && q.t <= r[1] + 0.3; });
      if (pts.length < 2) return;
      var h0 = pts[0].h, part = false;
      if (pts.some(function (q) { return q.h !== h0; })) {   // heater switched mid-run: use the heater-off part
        var off = pts.filter(function (q) { return !q.h; });
        if (off.length < 2) { sum.push({ a: r[0], b: r[1], mixed: true }); return; }
        pts = off; h0 = false; part = true;
      }
      var w = pts.map(function (q) { return q.pw; }), k = Math.min(2, w.length >> 1 || 1);
      var first = avg(w.slice(0, k)), last = avg(w.slice(-k));
      sum.push({ a: r[0], b: r[1], first: r1(first), last: r1(last), mean: r1(avg(w)), heat: h0, n: w.length, part: part,
        min: r1(Math.min.apply(null, w)), max: r1(Math.max.apply(null, w)) });
    });
    function runStart(t) { var a = null; for (var i = 0; i < E.length && E[i][0] <= t; i++) if (E[i][1]) a = E[i][0]; return a; }
    var onPts = P.filter(function (q) { var a = runStart(q.t); return q.ok && q.st === 1 && a !== null && q.t >= a + SETTLE; });
    var offHeat = onPts.filter(function (q) { return !q.h; });
    var useP = offHeat.length >= 2 ? offHeat : onPts;
    return { P: P, E: E, R: r1(R), runs: sum, mean: useP.length ? r1(avg(useP.map(function (q) { return q.pw; }))) : null,
      meanClean: offHeat.length >= 2, nOn: onPts.length };
  }

  function draw(cv, tr, live) {
    if (!cv) return null;
    var A = anal(tr), dpr = window.devicePixelRatio || 1, W = cv.clientWidth || 300, H = 160;
    cv.width = W * dpr; cv.height = H * dpr; cv.style.height = H + "px";
    var c = cv.getContext("2d");
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.clearRect(0, 0, W, H);
    var P = A.P, t0 = -1, t1 = 10;
    if (P.length) { t0 = Math.min(-1, P[0].t); t1 = Math.max(t1, P[P.length - 1].t + (live ? 2 : 0.5)); }
    var pws = P.filter(function (q) { return q.ok; }).map(function (q) { return q.pw; });
    var ymax = Math.max(60, Math.ceil(Math.max.apply(null, pws.concat([0])) * 1.15 / 10) * 10);
    var ymin = Math.max(-40, Math.min(0, Math.floor(Math.min.apply(null, pws.concat([0])) / 10) * 10));
    var L = 34, Rm = 8, T = 8, B = 30;
    function X(t) { return L + (t - t0) / (t1 - t0) * (W - L - Rm); }
    function Y(w) { return T + (ymax - Math.max(ymin, Math.min(ymax, w))) / (ymax - ymin) * (H - T - B); }
    // pump-on shading
    c.fillStyle = "rgba(201,123,60,.22)";
    var on = null;
    A.E.forEach(function (e) {
      if (e[1] && on === null) on = e[0];
      else if (!e[1] && on !== null) { c.fillRect(X(on), T, X(e[0]) - X(on), H - T - B); on = null; }
    });
    if (on !== null) c.fillRect(X(on), T, X(t1) - X(on), H - T - B);
    // grid and labels
    c.strokeStyle = "#3d2f25"; c.fillStyle = "#b9a796"; c.font = "11px Inter,sans-serif"; c.lineWidth = 1;
    var step = (ymax - ymin) > 100 ? 40 : 20;
    for (var g = Math.ceil(ymin / step) * step; g <= ymax; g += step) {
      c.beginPath(); c.moveTo(L, Y(g) + .5); c.lineTo(W - Rm, Y(g) + .5); c.stroke();
      c.textAlign = "right"; c.fillText(g + " W", L - 4, Y(g) + 4);
    }
    c.textAlign = "center";
    var xs = (t1 - t0) > 40 ? 10 : 5;
    for (var x = Math.ceil(t0 / xs) * xs; x <= t1; x += xs) if (X(x) < W - 16 && X(x) > L + 8) c.fillText(x + " s", X(x), H - 16);
    // heater strip
    P.forEach(function (q, i) {
      if (!q.h) return;
      var nx = P[i + 1] ? X(P[i + 1].t) : X(q.t) + 4;
      c.fillStyle = "#b5523b"; c.fillRect(X(q.t), H - B + 2, Math.max(2, nx - X(q.t)), 5);
    });
    // pump power line
    c.strokeStyle = "#e0a46a"; c.lineWidth = 2; c.beginPath();
    var pen = false;
    P.forEach(function (q) {
      if (!q.ok) { pen = false; return; }
      if (pen) c.lineTo(X(q.t), Y(q.pw)); else { c.moveTo(X(q.t), Y(q.pw)); pen = true; }
    });
    c.stroke();
    var sf = tr && tr.sf;
    if (sf && sf.s === "fired" && sf.at != null) {
      c.save(); c.strokeStyle = "#9fe0a5"; c.setLineDash([4, 3]); c.lineWidth = 1.5;
      c.beginPath(); c.moveTo(X(sf.at) + .5, T); c.lineTo(X(sf.at) + .5, H - B); c.stroke(); c.restore();
      if (sf.plat != null) {
        c.save(); c.strokeStyle = "rgba(159,224,165,.5)"; c.setLineDash([2, 3]);
        c.beginPath(); c.moveTo(L, Y(sf.plat) + .5); c.lineTo(X(sf.at), Y(sf.plat) + .5); c.stroke(); c.restore();
      }
    }
    c.fillStyle = "#e0a46a";
    P.forEach(function (q) { if (q.ok) { c.beginPath(); c.arc(X(q.t), Y(q.pw), 2, 0, 7); c.fill(); } });
    return A;
  }

  function sfText(sf) {
    if (!sf) return "";
    return {
      fired: "Smart fill ended the fill at " + sf.at + " s (pump dropped from " + sf.plat + " to " + sf.w + " W)",
      timeout: "Smart fill: no pressure rise seen, so the fill ran its full time",
      heater: "Smart fill: the heater was on, so the timed fill was used",
      nodata: "Smart fill: no power readings, so the timed fill was used",
      "short": "Smart fill: fill time under 2.5 s, too short to measure",
      stopped: "Smart fill: the shot was stopped during the fill",
      watching: "Smart fill: watching for pressure", start: "Smart fill: measuring the plateau"
    }[sf.s] || "";
  }
  function summary(A, sf) {
    if (!A || !A.P.length) return "No power readings in this shot. Check the brew script is v3.6 and the 1PM Mini is reachable.";
    var out = [];
    if (sf) out.push('<span style="color:#9fe0a5">' + sfText(sf) + "</span>");
    if (A.mean !== null) out.push("Pump power while on: " + A.mean + " W" + (A.meanClean ? " (heater off)" : " (heater on, ± ~10 W)"));
    A.runs.forEach(function (r) {
      if (r.mixed) out.push(r1(r.a) + "–" + r1(r.b) + " s: heater switched mid-run, skipped");
      else if (r.b - r.a >= 2) {
        var d = r1(r.last - r.first);
        out.push(r1(r.a) + "–" + r1(r.b) + " s: " + r.first + " → " + r.last + " W (" + (d >= 0 ? "+" : "") + d + ")" + (r.heat ? " · heater on" : "") +
          (r.part ? " · heater-off part" : ""));
      }
    });
    out.push("Heater R " + A.R + " Ω · " + A.P.length + " readings");
    return out.join("<br>");
  }

  function liveTr() {
    return {
      s: LT.s.map(function (a) { return a.join(","); }).join(";"),
      e: LT.e.map(function (a) { return a.join(","); }).join(";"),
      sf: B && B.sfr ? B.sfr : null
    };
  }

  // ---- page additions ----
  var ins = '<div class="card" id="pwCard"><div class="row"><div class="cap">Pump power</div><span class="desc" id="pwNow"></span></div>' +
    '<canvas id="pwC" style="width:100%;display:block"></canvas>' +
    '<div class="legend"><span><i style="background:#e0a46a"></i>Pump (est.)</span><span><i style="background:rgba(201,123,60,.45)"></i>Pump on</span><span><i style="background:#b5523b"></i>Heater on</span><span><i style="width:3px;background:#9fe0a5"></i>Smart fill</span></div></div>';
  $("sList").insertAdjacentHTML("beforebegin", ins);
  var row = $("lProf").parentNode;
  row.insertAdjacentHTML("afterend", '<div class="w hide" id="lPwBox" style="display:flex;flex-direction:column;gap:6px">' +
    '<canvas id="lPwC" style="width:100%;display:block"></canvas><div class="desc" id="lPwS" style="font-size:12px;line-height:1.5"></div></div>');
  var ex = document.querySelector('#v-log .top .lnk');
  ex.insertAdjacentHTML("beforebegin", '<button class="lnk" style="font-size:14px;margin-right:14px" onclick="cpExportTr()">Export traces</button>');
  var wrap = document.createElement("span"); ex.parentNode.insertBefore(wrap, ex.previousSibling); wrap.appendChild(ex.previousSibling); wrap.appendChild(ex);
  document.body.insertAdjacentHTML("beforeend", '<dialog id="trD"><div class="h" style="font-size:18px" id="trT"></div>' +
    '<div class="sub" id="trSub" style="margin-bottom:10px"></div><canvas id="trC" style="width:100%;display:block"></canvas>' +
    '<div class="desc" id="trS" style="font-size:12px;line-height:1.5;margin:8px 0 12px"></div>' +
    '<button class="bb" style="height:44px;font-size:15px;width:100%" onclick="document.getElementById(\'trD\').close()">Close</button></dialog>');

  // ---- hooks into the existing app ----
  var _onEv = onEv;
  onEv = function (e) {
    if (e) {
      if (e.shot && !liveOn) { LT = { s: [], e: [], tid: null, lp: null, v: 0 }; liveOn = true; }
      if (e.shot && e.pump !== LT.lp) { LT.e.push([r1(e.el), e.pump ? 1 : 0]); LT.lp = e.pump; LT.v++; }
      if (!e.shot && liveOn) { liveOn = false; if (LT.lp) LT.e.push([e.last ? e.last.t : r1(e.el), 0]); LT.lp = false; LT.v++; }
      if (e.pw && (LT.tid === null || LT.tid === e.tid)) {
        LT.tid = e.tid;
        var last = LT.s[LT.s.length - 1];
        if (!last || e.pw[0] > last[0]) { LT.s.push(e.pw); LT.v++; }
      }
    }
    var r = _onEv.apply(this, arguments);
    if (e && B && e.sf !== undefined && e.boot === B.boot) B.sfr = e.sf;
    if (e && B && e.shot && e.sn === 0 && !e.sf) B.sfr = null;
    return r;
  };

  var _drawShot = drawShot;
  drawShot = function () {
    _drawShot.apply(this, arguments);
    var sf = B && B.sfr, ph = $("sPh");
    if (sf && B.label === "Smart fill") ph.textContent = sf.s === "watching" ? "Smart fill · watching (" + sf.plat + " W)" : "Smart fill · measuring";
    else if (sf && sf.s === "fired" && (B.label === "Soak" || B.label === "Fine")) ph.textContent += " · fill ended " + sf.at + " s";
    var now = Date.now();
    if (LT.v === lastV && now - lastDraw < 1000) return;
    lastV = LT.v; lastDraw = now;
    var A = draw($("pwC"), liveTr(), true), q = A && A.P[A.P.length - 1];
    $("pwNow").textContent = q ? Math.round(q.w) + " W total · heater " + (q.h ? "on" : "off") + " · pump ≈ " + Math.round(q.pw) + " W"
      : (wsOk ? "Waiting for readings…" : "Live readings need the WebSocket");
  };

  function fetchTr(p, id, n) {
    fetchJ(api(CFG.b, CFG.sb, "trace=1")).then(function (r) {
      var t = r && r.trace;
      if (t && t.id === id) {
        p.tr = { s: t.s, e: t.e, sf: t.sf || null };
        if (pending === p && view === "log") drawLog();
        if (t.rec && n < 4) setTimeout(function () { fetchTr(p, id, n + 1); }, 1500);
      } else if (n < 4) setTimeout(function () { fetchTr(p, id, n + 1); }, 1500);
    }).catch(function () { if (n < 4) setTimeout(function () { fetchTr(p, id, n + 1); }, 1500); });
  }

  var _onB = onB;
  onB = function () {
    var before = pending;
    var r = _onB.apply(this, arguments);
    if (pending && pending !== before && !pending.tid && B && B.last) {
      pending.tid = B.last.id;
      pending.sf = B.last.sf || null;
      if (LT.s.length) { pending.tr = liveTr(); if (view === "log") drawLog(); }
      fetchTr(pending, B.last.id, 0);
    }
    return r;
  };

  var _drawLog = drawLog;
  drawLog = function () {
    _drawLog.apply(this, arguments);
    var box = $("lPwBox"), has = !!(pending && pending.tr);
    box.classList.toggle("hide", !has);
    if (has) $("lPwS").innerHTML = summary(draw($("lPwC"), pending.tr, false), pending.tr.sf || pending.sf);
    var L = getLog(), rows = document.querySelectorAll("#lList .e");
    for (var i = 0; i < rows.length; i++) {
      var en = L[i];
      if (!en || !en.tr) continue;
      var sm = rows[i].querySelector("small");
      if (sm && !sm.querySelector(".cpTr")) sm.insertAdjacentHTML("beforeend", (en.sf && en.sf.s === "fired" ? '<br><span style="color:#9fe0a5">Smart fill ended at ' + en.sf.at + " s</span>" : "") +
        '<br><button type="button" class="apb cpTr" onclick="cpShowTr(' + i + ')">Power' + (en.pw != null ? " · pump " + en.pw + " W" : "") + "</button>");
    }
  };

  var _saveLog = saveLog;
  saveLog = function () {
    var tr = pending && pending.tr, A = tr ? anal(tr) : null, sf = pending && (pending.sf || (tr && tr.sf));
    _saveLog.apply(this, arguments);
    if (!tr) return;
    var L = getLog();
    if (!L[0]) return;
    L[0].tr = tr; L[0].pw = A ? A.mean : null;
    if (sf) L[0].sf = sf;
    for (var i = 60; i < L.length; i++) delete L[i].tr;   // keep traces for the latest 60 shots
    store("cp_log", L);
    drawLog();
  };

  window.cpShowTr = function (i) {
    var en = getLog()[i];
    if (!en || !en.tr) return;
    $("trT").textContent = en.prof + " · " + en.time + " s";
    $("trSub").textContent = en.at + (en.notes ? " · " + en.notes : "");
    var d = $("trD"); d.showModal();
    $("trS").innerHTML = summary(draw($("trC"), en.tr, false), en.sf || en.tr.sf);
  };

  window.cpExportTr = function () {
    var rows = ["shot,at,profile,notes,t_s,total_w,volts,pump_on,heater_on,pump_w_est,reliable"];
    getLog().forEach(function (en, k) {
      if (!en.tr) return;
      anal(en.tr).P.forEach(function (q) {
        rows.push([k + 1, '"' + en.at + '"', '"' + en.prof + '"', '"' + String(en.notes || "").replace(/"/g, "'") + '"',
          q.t, q.w, q.v, q.p, q.h ? 1 : 0, q.pw, q.ok && q.st !== null ? 1 : 0].join(","));
      });
    });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([rows.join("\n")], { type: "text/csv" }));
    a.download = "coffeepilot-traces.csv"; a.click();
  };
  window.cpPw = { anal: anal, draw: draw, liveTr: liveTr, summary: summary, sfText: sfText, lt: function () { return LT; } };
})();


// ---- CoffeePilot app v2.2: guided pump test (needs brew script v3.5) ----
// Three 10 s full-flow runs (empty basket, blind basket, coffee puck) from Profiles › Pump test.
// Each run is armed on the Shelly, started with the knob, stops itself, and its pump power is filed here
// and in the shot log (with its trace). The results card says whether smart fill can work.
(function () {
  var SECS = 10;
  var TESTS = [
    { k: "empty", sh: "Empty", name: "Empty basket", tag: "No pressure",
      what: "Your normal basket in the portafilter with no coffee in it. Water runs straight through with almost nothing holding it back, so this gives the pump's no-pressure reading.",
      setup: ["Fit your normal (non-pressurised) basket, empty and dry", "Lock the portafilter in as usual",
        "Put a jug or large mug underneath: roughly 50–100 ml comes out"],
      expect: "A fast, steady stream for 10 s, then the pump stops on its own." },
    { k: "blind", sh: "Blind", name: "Blind basket or choked puck", tag: "Full pressure", opt: true,
      what: "Something water can't get through, so the pump pushes up to (or close to) its full pressure. This gives the maximum-pressure reading. A blind basket has no holes; a rubber backflush disc in your normal basket does the same. No blind basket? A choked puck works nearly as well. This test is optional: you can skip it and still get a result from the empty and puck runs.",
      setup: ["Blind basket or backflush disc: fit it in place of your normal basket",
        "Or a choked puck: grind as fine as your grinder goes, dose a little more than usual and tamp hard",
        "Lock the portafilter in firmly and leave a cup underneath"],
      expect: "Little or nothing comes out and the pump sounds more strained. When it stops the basket stays under pressure: wait 10–15 s before unlocking, and turn the handle slowly, as it can spit hot water." },
    { k: "puck", sh: "Puck", name: "Coffee puck", tag: "Real shot",
      what: "A normal puck: your usual dose, ground and tamped exactly as you'd brew. It shows where a real puck sits between the empty and blind readings.",
      setup: ["Dose, grind and tamp as normal", "Lock in and put your cup underneath",
        "It runs 10 s at full flow, so this won't be your best shot"],
      expect: "Water through the puck as usual. The pump stops at 10 s whatever the yield." }
  ];
  var TS = load("cp_test", { res: {}, step: 0 }), PEND = null, inOnB = false, key = "", lastC = 0;
  function sv() { store("cp_test", TS); }
  function nextStep() { for (var i = 0; i < 3; i++) if (!TS.res[TESTS[i].k]) return i; return 3; }
  function got(k) { var r = TS.res[k]; return r && !r.skip && r.pw != null ? r : null; }

  // ---- page ----
  $("pList").insertAdjacentHTML("beforebegin", '<button class="prof" onclick="go(\'test\')" style="border-color:var(--gap)"><div class="row">' +
    '<span>Pump test</span><span style="color:var(--acc2);font-weight:600">3 × 10 s ›</span></div>' +
    '<div class="desc" style="font-size:12px">Measures how the pump\'s power changes with pressure, to see if smart fill can work.</div></button>');
  $("v-log").insertAdjacentHTML("afterend", '<section class="view" id="v-test"><div class="top"><button class="lnk" style="font-size:14px" onclick="go(\'prof\')">‹ Profiles</button>' +
    '<button class="lnk" style="font-size:13px;color:var(--mut)" onclick="cpTest.reset()">Start again</button></div>' +
    '<div><div class="h ttl">Pump test</div><div class="sub">Three 10 s runs on full pump power</div></div>' +
    '<div class="steps" id="tsSteps"></div><div id="tsBody" style="display:flex;flex-direction:column;gap:14px"></div></section>');

  function heat() {
    if (!W) return { c: "n", t: "Machine state unknown", s: "Can't reach the warm-up Shelly" };
    if (!W.on) return { c: "n", t: "Machine is off", s: "Switch it on and let it warm up before testing" };
    var p = W.p;
    if (!p || !p.ok) return { c: "n", t: "Heater state unknown", s: "No power reading from the 1PM Mini" };
    return p.heat ? { c: "y", t: "Heater on · wait for it to switch off", s: "Readings taken with the heater on can be ~10 W out. It usually cycles off within a minute or two." }
      : { c: "g", t: "Heater off · good time to test", s: "Arm the test and turn the knob to Coffee" };
  }

  function resLine(r) {
    if (!r) return "--";
    if (r.skip) return "skipped";
    if (r.pw == null) return "no reading";
    return r.pw + " W" + (r.clean ? "" : " *");
  }

  function verdict() {
    var E = got("empty"), Bl = got("blind"), P = got("puck"), o = [];
    if (!E || (!Bl && !P)) return "";
    var top = Bl || P, gap = r1(top.pw - E.pw), ag = Math.abs(gap), more = gap > 0;
    var h, s, what = Bl ? "at full pressure" : "through a puck";
    if (ag >= 3) {
      var thr = r1(E.pw + gap * (Bl ? 0.6 : 0.5));
      h = "Smart fill looks possible";
      s = "The pump draws " + ag + " W " + (more ? "more" : "less") + " " + what + " than with no pressure. Suggested trigger: pump power " +
        (more ? "rises above " : "falls below ") + thr + " W.";
    } else if (ag >= 1.5) {
      h = "Borderline · " + ag + " W difference";
      s = "Retake the empty and " + (Bl ? "blind" : "puck") + " runs with the heater off. If the gap stays under 3 W, smart fill won't be reliable.";
    } else {
      h = "Too small to use · " + ag + " W difference";
      s = "The pump's power hardly changes with pressure, so smart fill can't work from the power meter. A pressure sensor is the way forward.";
    }
    o.push('<b>' + h + '</b><div>' + s + '</div>');
    if (!Bl) o.push("<small>Worked out from the empty and puck runs, as the full-pressure run " + (TS.res.blind && TS.res.blind.skip ? "was skipped" : "hasn't been done") +
      ". A blind basket or choked puck run would confirm the ceiling.</small>");
    if (Bl && P && ag >= 1.5) {
      var pos = Math.round((P.pw - E.pw) / gap * 100);
      o.push("<div>Your puck reached about " + Math.max(0, Math.min(130, pos)) + "% of the way from no pressure to full pressure.</div>");
    }
    if (!E.clean || (Bl && !Bl.clean) || (P && !P.clean)) o.push("<small>* Taken with the heater on, so less reliable. Retake that run with the heater off.</small>");
    return '<div class="adv"><div class="cap">Result</div>' + o.join("") + "</div>";
  }

  function resultsCard() {
    var any = TESTS.some(function (t) { return TS.res[t.k]; });
    if (!any) return "";
    return '<div class="list" style="border-radius:16px">' + TESTS.map(function (t, i) {
      var r = TS.res[t.k];
      return '<div class="li"><span>' + t.name + ' <span style="color:var(--mut);font-size:12px">' + t.tag + "</span></span><span>" +
        (r ? resLine(r) + ' <button class="lnk" style="margin-left:8px" onclick="cpTest.redo(' + i + ')">' + (r.skip ? "Run it" : "Retake") + "</button>" : "not run") + "</span></div>";
    }).join("") + "</div>" + verdict();
  }

  function stepCard(i) {
    var t = TESTS[i];
    return '<div class="card"><div class="row"><div class="cap">Test ' + (i + 1) + " of 3</div>" +
      '<span class="tag" style="background:var(--gap)">' + t.tag + '</span></div><div class="h" style="font-size:22px">' + t.name + "</div>" +
      '<div class="desc" style="font-size:14px;line-height:1.45">' + t.what + "</div>" +
      '<div class="cap" style="margin-top:4px">Set up</div><ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.5">' +
      t.setup.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" +
      '<div class="cap" style="margin-top:4px">What to expect</div><div class="desc" style="font-size:14px;line-height:1.45">' + t.expect + "</div></div>";
  }

  function state() {
    if (!B) return "conn";
    if (B.shot && B.label === "Test") return "run";
    if (B.shot) return "busy";
    if (PEND) return "wait";
    if (B.test) return "armed";
    return "idle";
  }

  function build(st, i) {
    var h = "";
    if (st === "conn") h = '<div class="note">' + (okB === false ? "Can't reach the pump Shelly (" + CFG.b + ")" : "Connecting to the pump Shelly…") + "</div>";
    else if (st === "busy") h = '<div class="ban y"><div><b>A normal shot is running</b><small>Finish it, then come back to the test.</small></div></div>';
    else if (st === "run") h = '<div class="shotT"><div class="lbl">' + (TESTS[i] ? TESTS[i].name : "Test") + ' · pump on</div><div class="big" style="font-size:72px;line-height:1"><span id="tsT">10</span>' +
      '<span style="font-size:24px;color:var(--mut)"> s</span></div><div style="font-size:14px;color:var(--mut)">Stops by itself</div></div>' +
      '<div class="card"><div class="row"><div class="cap">Pump power</div><span class="desc" id="tsNow"></span></div><canvas id="tsC" style="width:100%;display:block"></canvas></div>' +
      '<button class="ghost" onclick="brew(\'stop=1\')">Stop pump now</button>';
    else if (st === "wait") h = '<div class="ban n"><div><b>Run finished · reading the results…</b><small>Turn the knob back to the centre.' +
      (PEND && PEND.k === "blind" ? " Wait 10–15 s before unlocking the portafilter." : "") + "</small></div></div>";
    else if (i >= 3) h = '<div class="ban g"><div><b>' + (TS.res.blind && TS.res.blind.skip ? "Tests done" : "All three runs done") + '</b><small>Retake any run below, or send the traces from Log › Export traces.</small></div></div>';
    else {
      h = stepCard(i) + '<div class="ban n" id="tsHeat"><div><b id="tsHeatT"></b><small id="tsHeatS"></small></div></div>';
      if (st === "armed") h += '<div class="ban g"><div><b>Armed · turn the knob to Coffee now</b><small>The pump runs for ' + (B.test.s || SECS) +
        ' s and stops by itself. Arm expires in <span id="tsLeft"></span>.</small></div></div>' +
        '<button class="ghost" onclick="cpTest.cancel()">Cancel</button>';
      else {
        h += '<button class="go" onclick="cpTest.arm(' + i + ')">Arm test ' + (i + 1) + " · " + SECS + " s</button>";
        if (TESTS[i].opt) h += '<button class="ghost" onclick="cpTest.skip(' + i + ')">Skip this test</button>';
      }
    }
    return h + resultsCard();
  }

  function drawTest() {
    if (view !== "test") return;
    var st = state(), i = PEND ? -1 : nextStep();
    if (st === "run") i = TS.running != null ? TS.running : nextStep();
    if (st === "armed" && B.test) { var ix = TESTS.map(function (t) { return t.k; }).indexOf(B.test.l); if (ix >= 0) i = ix; }
    var k2 = st + "|" + i + "|" + JSON.stringify(TS.res) + "|" + (B && B.test ? B.test.l : "");
    if (k2 !== key) {
      key = k2;
      $("tsBody").innerHTML = build(st, i);
      $("tsSteps").innerHTML = TESTS.map(function (t, j) {
        var r = TS.res[t.k], done = !!r, cur = j === i && st !== "wait";
        return '<div class="st' + (cur ? " a" : done ? " d" : "") + '">' + t.sh + (done ? (r.skip ? " –" : " ✓") : "") + "</div>";
      }).join("");
    }
    if ($("tsHeat")) { var hh = heat(); $("tsHeat").className = "ban " + hh.c; $("tsHeatT").textContent = hh.t; $("tsHeatS").textContent = hh.s; }
    if ($("tsLeft") && B && B.test) {
      var left = Math.max(0, B.test.left - (Date.now() - Bat) / 1000);
      $("tsLeft").textContent = mmss(left);
    }
    if ($("tsT")) $("tsT").textContent = Math.max(0, SECS - bEl()).toFixed(1);
    if ($("tsC") && Date.now() - lastC > 500) {
      lastC = Date.now();
      var A = cpPw.draw($("tsC"), cpPw.liveTr(), true), q = A && A.P[A.P.length - 1];
      $("tsNow").textContent = q ? "heater " + (q.h ? "on" : "off") + " · pump ≈ " + Math.round(q.pw) + " W" : "Waiting for readings…";
    }
  }

  function finish(p, tr) {
    var A = cpPw.anal(tr), pw = A.mean, run = A.runs.filter(function (r) { return !r.mixed; })[0];
    // full pressure: use where the pump settled at the end, not the average (it starts high while the basket fills)
    if (p.k === "blind" && run && run.last != null) pw = run.last;
    TS.res[p.k] = { pw: pw, clean: A.meanClean, n: A.nOn, id: p.id, at: Date.now() };
    TS.running = null; sv();
    var L = getLog(), d = new Date, t = TESTS.filter(function (x) { return x.k === p.k; })[0];
    L.unshift({ at: d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }) + " " + d.toTimeString().slice(0, 5),
      prof: "Test · " + p.k, time: p.t, dose: "", yield: "", grind: "", taste: "", notes: "Pump test: " + (t ? t.name.toLowerCase() : p.k),
      adv: "", tr: tr, pw: A.mean });
    store("cp_log", L.slice(0, 500));
    PEND = null; key = ""; drawTest();
    if (navigator.vibrate) navigator.vibrate([150, 80, 150]);
  }

  function fetchRes(p, n) {
    function again() {
      if (PEND !== p) return;
      if (n < 6) setTimeout(function () { fetchRes(p, n + 1); }, 1200);
      else finish(p, cpPw.liveTr());   // fall back to the live readings
    }
    fetchJ(api(CFG.b, CFG.sb, "trace=1")).then(function (r) {
      var t = r && r.trace;
      if (t && t.id === p.id && !t.rec) finish(p, { s: t.s, e: t.e }); else again();
    }).catch(again);
  }

  // ---- hooks ----
  var _onB = onB;
  onB = function () {
    if (B && B.last && lastId !== null && B.last.id !== lastId && B.last.tl) {
      lastId = B.last.id;   // test runs don't open the log form
      PEND = { k: B.last.tl, id: B.last.id, t: B.last.t };
      key = "";
      setTimeout(function () { fetchRes(PEND, 0); }, 3200);
    }
    if (B && B.shot && B.label === "Test" && TS.running == null) TS.running = Math.min(2, nextStep());
    inOnB = true;
    try { return _onB.apply(this, arguments); } finally { inOnB = false; }
  };

  var _go = go;
  go = function (e) {
    if (inOnB && view === "test" && (e === "brew" || e === "log")) return;
    $("v-test").classList.remove("on");
    if (e === "test") {
      _go("prof");
      $("v-prof").classList.remove("on"); $("v-test").classList.add("on");
      view = "test"; key = ""; drawTest(); window.scrollTo(0, 0);
      return;
    }
    return _go.apply(this, arguments);
  };

  var _drawAll = drawAll;
  drawAll = function () { _drawAll.apply(this, arguments); drawTest(); };
  setInterval(drawTest, 100);   // the app's own 100 ms timer holds the original drawAll, so tick here too

  window.cpTest = {
    arm: function (i) {
      if (B && B.shot) return;
      TS.running = i; sv();
      brew("t=" + SECS + "&tl=" + TESTS[i].k).then(function () {
        if (!okB) alert("Couldn't reach the pump Shelly. The test isn't armed.");
        else if (!B.test) alert("The pump Shelly didn't arm the test. Check the brew script is v3.5.");
        key = ""; drawTest();
      });
    },
    cancel: function () { brew("t=0").then(function () { key = ""; drawTest(); }); },
    skip: function (i) { TS.res[TESTS[i].k] = { skip: true, at: Date.now() }; sv(); key = ""; drawTest(); window.scrollTo(0, 0); },
    redo: function (i) { delete TS.res[TESTS[i].k]; sv(); key = ""; drawTest(); window.scrollTo(0, 0); },
    reset: function () {
      if (!confirm("Clear the pump test results and start again? Saved traces stay in the log.")) return;
      TS = { res: {}, step: 0 }; sv(); key = ""; drawTest();
    }
  };
})();


// ---- CoffeePilot app v2.3: smart fill switch on Custom and Custom 2 (needs brew script v3.6) ----
(function () {
  var F_SF = [["sf", "Smart fill", "", 0, 1, 1], ["sfd", "Pressure drop", "Pump power drop that ends the fill", 2, 8, 0.5]];

  var _fields = fields;
  fields = function () {
    var f = _fields.apply(this, arguments).slice();
    if (editIdx !== 5 && editIdx !== 6) return f;
    var add = C && C.sf ? F_SF : F_SF.slice(0, 1);
    return f.slice(0, 1).concat(add, f.slice(1));   // straight after Fill
  };

  var _shownVal = shownVal;
  shownVal = function (k, v) {
    if (k === "sf") return v ? "On" : "Off";
    if (k === "sfd") return Number(v).toFixed(1) + " W";
    return _shownVal.apply(this, arguments);
  };

  var _hintFor = hintFor;
  hintFor = function (f, v) {
    if (f[0] === "sf") return v ? "Ends the fill when pressure builds" : "Fill runs for its set time";
    if (f[0] === "fill" && C && C.sf) return v < 2.5 ? "Too short for smart fill: use 2.5 s or more" : "Longest fill: try 6–8 s with smart fill";
    return _hintFor.apply(this, arguments);
  };

  var _openCustom = openCustom;
  openCustom = function () {
    _openCustom.apply(this, arguments);
    if (C) { if (C.sf == null) C.sf = 0; if (C.sfd == null) C.sfd = 3.5; drawCustom(); }
  };

  var _bump = bump;
  bump = function (k, d) {
    var was = C && C.sf;
    _bump.apply(this, arguments);
    if (k === "sf" && C.sf && !was && C.fill < 6) { C.fill = 6; drawCustom(); }   // a 3 s fill is too short to see pressure build
  };

  saveCustom = function () {
    if (B && B.shot) { alert("Wait for the shot to finish first."); return; }
    var sf = C.sf ? 1 : 0, d = C.sfd || 3.5;
    var q = editIdx === 6 ? "c2=" + [C.fill, C.soak, C.fon, C.foff, C.fn, C.on, C.off, C.pulses, sf, d].join(",")
      : "c=" + [C.fill, C.soak, C.on, C.off, C.pulses, sf, d].join(",");
    brew(q).then(function () { return brew("p=" + editIdx); }).then(function () {
      if (!okB) alert("Couldn't reach the pump Shelly. Nothing was saved.");
      else if (sf && B && B.profiles[editIdx] && B.profiles[editIdx].sf == null) alert("Saved, but the pump Shelly ignored smart fill. Check the brew script is v3.6.");
      else go("prof");
    });
  };

  var _desc = desc;
  desc = function (e) {
    var s = _desc.apply(this, arguments);
    return e && e.sf && e.fill ? s.replace("Fill " + sec(e.fill), "Smart fill up to " + sec(e.fill)) : s;
  };
})();


// ---- CoffeePilot app v2.4: "Brew now" banner (temperature surfing from the 1PM's heater readings) ----
// The Stilosa's thermostat lets the boiler swing. It peaks just after the heater switches off, so the best
// moment to pull a shot is in the first part of the heater-off spell. The app watches the heater state from
// the warm-up Shelly's status (p.heat), learns how long the off spells last, shows a banner on the Brew
// screen, and records the heater state with each shot in the log.
(function () {
  var H = { last: null, offAt: 0, onAt: 0, offs: load("cp_offs", []), ons: load("cp_ons", []), buzzed: 0 };
  var WIN_MIN = 15, WIN_MAX = 45, cap = null, prevShot2 = false;

  function med(a) { if (!a.length) return null; var b = a.slice().sort(function (x, y) { return x - y; }); return b[b.length >> 1]; }
  function win() {   // how long after switch-off counts as "hot": 40% of a typical off spell
    var m = med(H.offs);
    return m ? Math.max(WIN_MIN, Math.min(WIN_MAX, Math.round(m * 0.4))) : 30;
  }
  function push(arr, key, v) { if (v >= 5 && v <= 600) { arr.push(Math.round(v)); if (arr.length > 20) arr.shift(); store(key, arr); } }

  function track() {
    if (!W || !W.p || !W.p.ok || !W.on) { H.last = null; return; }
    var now = Date.now(), h = !!W.p.heat;
    if (H.last === null) { H.last = h; return; }   // first reading: no transition seen yet
    if (h === H.last) return;
    if (!h) { if (H.onAt) push(H.ons, "cp_ons", (now - H.onAt) / 1000); H.offAt = now; }
    else { if (H.offAt) push(H.offs, "cp_offs", (now - H.offAt) / 1000); H.onAt = now; }
    H.last = h;
  }

  function state() {
    if (!W || !W.p || !W.p.ok) return null;
    if (!W.on) return null;
    var now = Date.now();
    if (W.p.heat) return { k: "on", since: H.onAt ? (now - H.onAt) / 1000 : null };
    if (!H.offAt) return { k: "off?" };   // heater off, but we didn't see it switch off
    var s = (now - H.offAt) / 1000, w = win();
    return s <= w ? { k: "hot", since: s, left: w - s } : { k: "cool", since: s, next: med(H.offs) ? Math.max(0, med(H.offs) - s) : null };
  }

  $("bBan").insertAdjacentHTML("afterend", '<div class="ban n hide" id="bnBan"><svg class="ic" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M12 3c3 4 5 6 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-5 0 2 1 3 2 3 0-3 0-5 1-8z"/></svg><div style="flex:1"><b id="bnT"></b><small id="bnS"></small>' +
    '<div class="bar hide" id="bnBar" style="height:6px;margin-top:8px;background:rgba(0,0,0,.25)"><i id="bnFill" style="background:#7ee08f;flex:none;width:0"></i></div></div></div>');

  function draw() {
    var el = $("bnBan"), st = state(), ready = W && W.phase === "ready";   // not during warm-up: the group head is still cold
    if (!st || !ready || (B && B.shot)) { el.classList.add("hide"); return; }
    el.classList.remove("hide");
    var c = "n", t, s, bar = false, pct = 0;
    if (st.k === "hot") {
      c = "g"; t = "Brew now · boiler at its hottest";
      s = "Heater switched off " + Math.round(st.since) + " s ago · best for another " + Math.ceil(st.left) + " s";
      bar = true; pct = st.left / win() * 100;
      if (H.buzzed !== H.offAt && navigator.vibrate) { H.buzzed = H.offAt; navigator.vibrate(120); }
    } else if (st.k === "on") {
      c = "y"; t = "Heater on · wait for it to switch off";
      var mo = med(H.ons);
      s = (mo && st.since != null ? "Usually about " + Math.max(0, Math.round(mo - st.since)) + " s more. " : "") + "The best moment to brew is just after it stops.";
    } else if (st.k === "cool") {
      t = "Boiler cooling · fine to brew";
      s = "Heater has been off " + Math.round(st.since) + " s." + (st.next != null && st.next > 0 ? " It usually comes back on in about " + Math.round(st.next) + " s." : "") +
        " For the hottest shot, wait for the next cycle.";
    } else {
      t = "Heater off"; s = "Waiting to see the next heat cycle, then this will show the best moment to brew.";
    }
    el.className = "ban " + c;
    $("bnT").textContent = t; $("bnS").textContent = s;
    $("bnBar").classList.toggle("hide", !bar);
    $("bnFill").style.width = Math.max(0, Math.min(100, pct)) + "%";
  }

  function tempText(tp) {
    if (!tp) return "";
    if (tp.k === "hot") return "brewed " + Math.round(tp.since) + " s after heater off (hot)";
    if (tp.k === "cool") return "brewed " + Math.round(tp.since) + " s after heater off";
    if (tp.k === "on") return "brewed with heater on";
    return "";
  }

  // ---- hooks ----
  var _onW = onW;
  onW = function () { track(); return _onW.apply(this, arguments); };

  var _drawBrew = drawBrew;
  drawBrew = function () { _drawBrew.apply(this, arguments); draw(); };

  var _onB = onB;
  onB = function () {
    if (B && B.shot && !prevShot2) cap = state();   // heater state at the moment the shot started
    prevShot2 = !!(B && B.shot);
    var before = pending, r = _onB.apply(this, arguments);
    if (pending && pending !== before && cap) { pending.temp = cap; cap = null; if (view === "log") drawLog(); }
    return r;
  };

  var _saveLog = saveLog;
  saveLog = function () {
    var tp = pending && pending.temp;
    _saveLog.apply(this, arguments);
    if (!tp) return;
    var L = getLog();
    if (L[0] && !L[0].temp) { L[0].temp = { k: tp.k, since: tp.since != null ? Math.round(tp.since) : null }; store("cp_log", L); drawLog(); }
  };

  var _drawLog = drawLog;
  drawLog = function () {
    _drawLog.apply(this, arguments);
    var L = getLog(), rows = document.querySelectorAll("#lList .e");
    for (var i = 0; i < rows.length; i++) {
      var en = L[i], sm = rows[i].querySelector("small");
      if (en && en.temp && sm && !sm.querySelector(".cpTemp")) {
        var tt = tempText(en.temp);
        if (tt) sm.insertAdjacentHTML("beforeend", '<br><span class="cpTemp" style="color:' + (en.temp.k === "hot" ? "#9fe0a5" : "var(--mut)") + '">' + tt + "</span>");
      }
    }
    if ($("lTempLine")) $("lTempLine").remove();
    var t2 = pending && pending.temp ? tempText(pending.temp) : "";
    if (t2) $("lProf").parentNode.insertAdjacentHTML("afterend", '<div class="w desc" id="lTempLine" style="font-size:12px;margin-top:-4px">' + t2 + "</div>");
  };

  window.cpBrewNow = { H: H, state: state, win: win };
})();


// ---- CoffeePilot app v2.5: brew knob left on Coffee (needs warm-up script v7.1) ----
// A red banner on the Warm-up and Brew screens while the warm-up Shelly reports kl (knob left on Coffee),
// a stronger warning when a switch-on was refused, a reminder in the Off confirmation, and a "Done" button.
(function () {
  var html = function (id) {
    return '<div class="ban hide" id="' + id + '" style="background:#5a2a1c;align-items:flex-start">' +
      '<svg class="ic" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style="flex:none;stroke:#ffb4a1;margin-top:2px"><circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.5"/></svg>' +
      '<div style="flex:1"><b class="kT" style="color:#ffd9cc"></b><small class="kS" style="color:#ffd9cc"></small>' +
      '<button type="button" class="apb kB" style="border-color:#ffb4a1;color:#ffd9cc;margin-top:8px" onclick="cpKnobAck()">Done, it\'s centred</button></div></div>';
  };
  $("wPill").insertAdjacentHTML("afterend", html("kWarm"));
  $("bBan").insertAdjacentHTML("beforebegin", html("kBrew"));
  var was = false, busy = false;

  function knobNow() { return B && B.knob === true ? true : W && W.knob === true ? true : null; }

  function draw() {
    var kl = !!(W && W.kl), blocked = !!(W && W.kb);
    ["kWarm", "kBrew"].forEach(function (id) {
      var el = $(id);
      if (!el) return;
      el.classList.toggle("hide", !kl);
      if (!kl) return;
      el.querySelector(".kT").textContent = blocked ? "Stilosa didn't switch on: the brew knob is on Coffee" : "Brew knob left on Coffee";
      el.querySelector(".kS").textContent = blocked ? "Turn the knob to the centre, then press On (or the power button) again."
        : "Turn it back to the centre now, or the Stilosa won't switch on next time.";
      el.querySelector(".kB").disabled = busy;
    });
    if (kl && $("wWarn")) $("wWarn").classList.add("hide");   // the banner says it; no duplicate
    if (kl && !was && navigator.vibrate) navigator.vibrate(blocked ? [400, 150, 400, 150, 400] : [250, 120, 250]);
    was = kl;
  }

  window.cpKnobAck = function () {
    busy = true; draw();
    pollA("cmd=ack").then(function () { busy = false; draw(); });
  };

  var _warm = warm;
  warm = function (e) {
    if (e === "off" && knobNow() === true) {
      if (confirm("Switch the machine off?\n\nThe brew knob is still on Coffee. Turn it to the centre as well, or the Stilosa won't switch on next time."))
        pollA("cmd=off");
      return;
    }
    return _warm.apply(this, arguments);
  };

  var _onW = onW;
  onW = function () { var r = _onW.apply(this, arguments); draw(); return r; };
  var _drawWarm = drawWarm;
  drawWarm = function () { _drawWarm.apply(this, arguments); draw(); };
  var _drawBrew = drawBrew;
  drawBrew = function () { _drawBrew.apply(this, arguments); draw(); };
})();

/* ---- CoffeePilot app v2.6: one continuous warm-up (Stilosa control board removed, the 1PM Mini keeps it on) ----
   The machine no longer cuts out every 9 minutes, so there are no heat cycles to show.
   Warm-up screen: "Warming up" then "Brew", with one countdown to brewing temperature. */
(function () {
  function fix() {
    if (!W || !$("s0")) return;
    var t = W.phase, heat = t === "heating", ready = t === "ready";
    $("s1").classList.add("hide");
    $("s0").className = "st" + (heat ? " a" : ready ? " d" : "");
    $("s0").textContent = ready ? "Warmed up \u2713" : "Warming up";
    $("s2").className = "st" + (ready ? " a" : "");
    $("s2").textContent = "Brew";
    if (heat && !W.use && W.press !== 0) {
      var mins = Math.round((W.readyAt || 0) / 60);
      $("wPill").textContent = "Warming up" + (mins ? " \u00b7 " + mins + " min to brewing temp" : "");
    }
  }
  var _drawWarm = drawWarm;
  drawWarm = function () { _drawWarm.apply(this, arguments); fix(); };
})();
