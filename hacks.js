// ==UserScript==
// @name         Xenostopic CLIENT FOR BLOOKET
// @namespace    http://tampermonkey.net/
// @version      7.1.0
// @description  NOT PATCHED ANYMORE, THE BEST GUI ON THE WEB! ADVANCED ANTIBAN AND TONS OF FEATURES {CHEAT} {HACK} {CLIENT}
// @author       Xenostopic
// @run-at       document-end
// @match        *://*.blooket.com/*
// @match        *://blooket.com/*
// @license      APGL-3.0
// @icon         https://i.ibb.co/LhDtzNd1/icon512.png
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @grant       unsafeWindow
// @require     https://cdn.jsdelivr.net/npm/sweetalert2@11
// @downloadURL https://github.com/xenostopic-cyber/Blooket-hacks-personal
// @updateURL https://github.com/xenostopic-cyber/Blooket-hacks-personal
// ==/UserScript==

var window = unsafeWindow; 

/**
* Hook.js Lite
* Version: 1.5 Lite
* Original Author: Xenostopic
* Contributors: Xenostopic, juro50000
*/
(async()=>{let e=document.querySelector("#app")||document.body,t=Object.keys(e).find(e=>e.startsWith("__react")),n=null,o=null;if(t&&function e(t,o=0){if(!(!t||o>25||n)){try{if(t.memoizedState){let i=t.memoizedState,s=0;for(;i&&s<20&&!n;){let a=i.memoizedState;if(a&&void 0!==a.hasJoined&&a.send&&a.onStateChange)return void(n=a);i=i.next,s++}}}catch{}e(t.child,o+1),e(t.sibling,o+1)}}(e[t]),!n)return;if(window.messageFlow=[],window.monitorEnabled=!0,window.interceptEnabled=!1,window.interceptQueue=[],window.interceptIncoming=!1,window.interceptOutgoing=!1,window.repeaterMessages=[],window.interceptRules=new Map,window.eventListeners=new Map,window.wsConnected=!0,n.connection&&n.connection.transport&&n.connection.transport.ws){let i=n.connection.transport.ws,s=i.onmessage,a=i.onclose,r=i.onerror;i.onmessage=function(e){if(window.monitorEnabled)try{Date.now()}catch(t){}return s.call(this,e)},i.onclose=function(e){window.wsConnected=!1,a&&a.call(this,e)},i.onerror=function(e){window.wsConnected=!1,r&&r.call(this,e)}}let l=n.onMessage.bind(n),c=new Map,d=new Map;n.onMessage=function(e,t){let n=function(...n){let o="*"===e?n[0]:e,i="*"===e?n[1]:n[0];if(window.breakpoints){let s=e=>{let t=`${o}_${e}`,n=window.breakpoints.get(t);if(n&&n.enabled){n.hitCount++;try{n.callback(i,o,e)}catch(s){}}};s("IN"),s("BOTH")}let a=window.eventListeners.get(o);a&&a.length>0&&a.forEach(e=>{try{e(i,o)}catch(t){}});let r=window.interceptRules.get(o);if(r&&r.enabled&&"IN"===r.direction){if("DROP"===r.action)return void(window.monitorEnabled&&window.messageFlow.push({direction:"IN",type:o,message:i,timestamp:Date.now(),id:Date.now()+Math.random(),dropped:!0}));if("TRANSFORM"===r.action)try{let l=r.transform(i);window.monitorEnabled&&window.messageFlow.push({direction:"IN",type:o,message:l,timestamp:Date.now(),id:Date.now()+Math.random(),autoTransformed:!0,original:i});let c=[...n];return 1===c.length?c[0]=l:2===c.length&&(c[1]=l),t(...c)}catch(d){}}if(!window.interceptEnabled||!window.interceptIncoming)return window.monitorEnabled&&window.messageFlow.push({direction:"IN",type:o,message:i,timestamp:Date.now(),id:Date.now()+Math.random()}),t(...n);{let m={direction:"IN",type:o,message:i,timestamp:Date.now(),id:Date.now()+Math.random(),originalArgs:n,originalCallback:t,status:"pending"};window.interceptQueue.push(m)}};return c.set(e,n),d.set(e,t),l(e,n)};var m=n.send.bind(n);n.send=function(e,t){if(window.breakpoints){let n=n=>{let o=`${e}_${n}`,i=window.breakpoints.get(o);if(i&&i.enabled){i.hitCount++;try{i.callback(t,e,n)}catch(s){}}};n("OUT"),n("BOTH")}let o=window.interceptRules.get(e);if(o&&o.enabled&&"OUT"===o.direction){if("DROP"===o.action)return void(window.monitorEnabled&&window.messageFlow.push({direction:"OUT",type:e,message:t,timestamp:Date.now(),id:Date.now()+Math.random(),dropped:!0}));if("TRANSFORM"===o.action)try{let i=o.transform(t);return window.monitorEnabled&&window.messageFlow.push({direction:"OUT",type:e,message:i,timestamp:Date.now(),id:Date.now()+Math.random(),autoTransformed:!0,original:t}),m(e,i)}catch(s){}}if(!window.interceptEnabled||!window.interceptOutgoing)return window.monitorEnabled&&window.messageFlow.push({direction:"OUT",type:e,message:t,timestamp:Date.now(),id:Date.now()+Math.random()}),m(e,t);{let a={direction:"OUT",type:e,message:t,timestamp:Date.now(),id:Date.now()+Math.random(),originalType:e,originalData:JSON.parse(JSON.stringify(t)),status:"pending"};window.interceptQueue.push(a)}};let p=window.location.href.includes("/host");if(p)o={name:"Host"};else{n.state&&n.state.players||await new Promise(e=>{let t=setInterval(()=>{n.state&&n.state.players&&(clearInterval(t),e())},100)});let g=n.state.players;o=Array.from(g.values())[0]}o&&(window.colyseusRoom=n,window.me=o,window.myPlayer=o,window.colyseus={room:n,state:n.state,connection:n.connection,sessionId:n.sessionId,id:n.id,name:n.name,players:n.state?.players,getRoomData:()=>({sessionId:n.sessionId,id:n.id,name:n.name,hasJoined:n.hasJoined}),getAllPlayers:()=>n.state?.players?Array.from(n.state.players.entries()).map(([e,t])=>({id:e,name:t.name,player:t})):[]},window.hook={room:n,me:o,inspect(){console.log("Room:",n),console.log("Player:",o),console.log("Colyseus:",window.colyseus)},sendMessage(e,t={},o="OUT"){if(n){if("OUT"===o)return n.send(e,t);if("IN"===o){let i=d.get(e)||d.get("*");i&&(i(t),window.monitorEnabled&&window.messageFlow.push({direction:"IN",type:e,message:t,timestamp:Date.now(),id:Date.now()+Math.random(),simulated:!0}))}}},listen(e,t,n="BOTH"){if("function"!=typeof t||!["IN","OUT","BOTH"].includes(n))return;window.breakpoints||(window.breakpoints=new Map);let o=`${e}_${n}`;window.breakpoints.set(o,{messageType:e,callback:t,direction:n,enabled:!0,hitCount:0})},unlisten(e,t="BOTH"){if(window.breakpoints){if("BOTH"===t)window.breakpoints.delete(`${e}_IN`),window.breakpoints.delete(`${e}_OUT`),window.breakpoints.delete(`${e}_BOTH`);else{let n=`${e}_${t}`;window.breakpoints.delete(n)}}},status(){let e=window.wsConnected&&n.connection&&n.connection.transport&&n.connection.transport.ws;return console.log("WebSocket Status:",e?"CONNECTED":"DISCONNECTED"),e&&(console.log("Room ID:",n.id),console.log("Session ID:",n.sessionId)),e},reconnect(){let e=document.querySelector("#app")||document.body,t=Object.keys(e).find(e=>e.startsWith("__react")),o=null;if(t&&function e(t,n=0){if(!(!t||n>25||o)){try{if(t.memoizedState){let i=t.memoizedState,s=0;for(;i&&s<20&&!o;){let a=i.memoizedState;if(a&&void 0!==a.hasJoined&&a.send&&a.onStateChange)return void(o=a);i=i.next,s++}}}catch{}e(t.child,n+1),e(t.sibling,n+1)}}(e[t]),!o)return;if(n=o,window.colyseusRoom=n,n.connection&&n.connection.transport&&n.connection.transport.ws){let i=n.connection.transport.ws,s=i.onmessage,a=i.onclose,r=i.onerror;i.onmessage=function(e){if(window.monitorEnabled)try{Date.now()}catch(t){}return s.call(this,e)},i.onclose=function(e){window.wsConnected=!1,a&&a.call(this,e)},i.onerror=function(e){window.wsConnected=!1,r&&r.call(this,e)}}let l=n.onMessage.bind(n),c=new Map;n.onMessage=function(e,t){let n=function(...n){let o="*"===e?n[0]:e,i="*"===e?n[1]:n[0],s=window.eventListeners.get(o);s&&s.length>0&&s.forEach(e=>{try{e(i,o)}catch(t){}});let a=window.interceptRules.get(o);if(a&&a.enabled&&"IN"===a.direction){if("DROP"===a.action)return void(window.monitorEnabled&&window.messageFlow.push({direction:"IN",type:o,message:i,timestamp:Date.now(),id:Date.now()+Math.random(),dropped:!0}));if("TRANSFORM"===a.action)try{let r=a.transform(i);window.monitorEnabled&&window.messageFlow.push({direction:"IN",type:o,message:r,timestamp:Date.now(),id:Date.now()+Math.random(),autoTransformed:!0,original:i});let l=[...n];return 1===l.length?l[0]=r:2===l.length&&(l[1]=r),t(...l)}catch(c){}}if(!window.interceptEnabled||!window.interceptIncoming)return window.monitorEnabled&&window.messageFlow.push({direction:"IN",type:o,message:i,timestamp:Date.now(),id:Date.now()+Math.random()}),t(...n);{let d={direction:"IN",type:o,message:i,timestamp:Date.now(),id:Date.now()+Math.random(),originalArgs:n,originalCallback:t,status:"pending"};window.interceptQueue.push(d)}};return c.set(e,n),d.set(e,t),l(e,n)};let p=n.send.bind(n);n.send=function(e,t){let n=window.interceptRules.get(e);if(n&&n.enabled&&"OUT"===n.direction){if("DROP"===n.action)return void(window.monitorEnabled&&window.messageFlow.push({direction:"OUT",type:e,message:t,timestamp:Date.now(),id:Date.now()+Math.random(),dropped:!0}));if("TRANSFORM"===n.action)try{let o=n.transform(t);return window.monitorEnabled&&window.messageFlow.push({direction:"OUT",type:e,message:o,timestamp:Date.now(),id:Date.now()+Math.random(),autoTransformed:!0,original:t}),p(e,o)}catch(i){}}if(!window.interceptEnabled||!window.interceptOutgoing)return window.monitorEnabled&&window.messageFlow.push({direction:"OUT",type:e,message:t,timestamp:Date.now(),id:Date.now()+Math.random()}),p(e,t);{let s={direction:"OUT",type:e,message:t,timestamp:Date.now(),id:Date.now()+Math.random(),originalType:e,originalData:JSON.parse(JSON.stringify(t)),status:"pending"};window.interceptQueue.push(s)}},m=p,window.wsConnected=!0,window.hook.room=n},intercept:{add(e,t,n="OUT"){"function"==typeof t&&["IN","OUT","BOTH"].includes(n)&&("BOTH"===n?(window.interceptRules.set(e+"_IN",{messageType:e,transform:t,direction:"IN",enabled:!0,action:"TRANSFORM"}),window.interceptRules.set(e+"_OUT",{messageType:e,transform:t,direction:"OUT",enabled:!0,action:"TRANSFORM"})):window.interceptRules.set(e,{messageType:e,transform:t,direction:n,enabled:!0,action:"TRANSFORM"}))},replace(e,t,n,o="OUT"){this.add(e,e=>"object"==typeof e&&null!==e?{...e,[t]:n}:e,o)},drop(e,t="OUT"){["IN","OUT","BOTH"].includes(t)&&("BOTH"===t?(window.interceptRules.set(e+"_IN",{messageType:e,direction:"IN",enabled:!0,action:"DROP"}),window.interceptRules.set(e+"_OUT",{messageType:e,direction:"OUT",enabled:!0,action:"DROP"})):window.interceptRules.set(e,{messageType:e,direction:t,enabled:!0,action:"DROP"}))},remove(e,t=null){"BOTH"===t||null===t?(window.interceptRules.delete(e),window.interceptRules.delete(e+"_IN"),window.interceptRules.delete(e+"_OUT")):window.interceptRules.delete(e)},list(){0!==window.interceptRules.size?(console.log("\n=== Active Intercept Rules ==="),window.interceptRules.forEach((e,t)=>{let n=e.enabled?"✓":"✗",o=e.action||"TRANSFORM";console.log(`${n} ${e.messageType} [${e.direction}] - ${o}`)}),console.log(`Total: ${window.interceptRules.size} rules`)):console.log("No active intercept rules")},enableRule(e){let t=window.interceptRules.get(e);t&&(t.enabled=!0)},disableRule(e){let t=window.interceptRules.get(e);t&&(t.enabled=!1)},clearRules(){window.interceptRules.clear()},enable(){window.interceptEnabled=!0},disable(){window.interceptEnabled=!1},toggle(){window.interceptEnabled=!window.interceptEnabled},incoming(e){window.interceptIncoming=e},outgoing(e){window.interceptOutgoing=e},queue:()=>window.interceptQueue,clear(){window.interceptQueue=[]},forward(e,t=!1){let n=window.interceptQueue[e];if(n&&"pending"===n.status){if(n.status="forwarded","OUT"===n.direction)m(n.type,n.message);else if(n.originalCallback&&n.originalArgs)try{let o=[...n.originalArgs];1===o.length?o[0]=n.message:2===o.length&&(o[1]=n.message),n.originalCallback(...o)}catch(i){}window.monitorEnabled&&window.messageFlow.push({direction:n.direction,type:n.type,message:n.message,timestamp:Date.now(),id:Date.now()+Math.random(),modified:t}),window.interceptQueue.splice(e,1)}},drop(e){let t=window.interceptQueue[e];t&&"pending"===t.status&&(t.status="dropped",window.interceptQueue.splice(e,1))}},monitor:{on(){window.monitorEnabled=!0},off(){window.monitorEnabled=!1},toggle(){window.monitorEnabled=!window.monitorEnabled},status(){console.log("Monitor:",window.monitorEnabled?"ON":"OFF"),console.log("Captured messages:",window.messageFlow.length)},show(e=20){console.log(`Last ${e} messages:`);let t=window.messageFlow.slice(-e);t.forEach((e,n)=>{let o="IN"===e.direction?"IN ":"OUT",i=window.messageFlow.length-t.length+n,s=e.autoTransformed?" [TRANSFORMED]":"",a=e.dropped?" [DROPPED]":"";console.log(`[${i}] ${o} ${e.type}${s}${a}`,e.message)})},clear(){window.messageFlow=[]},search(e){let t=window.messageFlow.filter(t=>JSON.stringify(t).toLowerCase().includes(e.toLowerCase()));0!==t.length?(console.log(`Found ${t.length} matching messages:`),t.forEach((e,t)=>{let n="IN"===e.direction?"IN ":"OUT";console.log(`[${t}] ${n} ${e.type}`,e.message)})):console.log("No matching messages found.")},analyze(){let e={};window.messageFlow.forEach(t=>{let n=`${t.direction}:${t.type}`;e[n]=(e[n]||0)+1}),console.log("\nMessage statistics:"),Object.entries(e).sort((e,t)=>t[1]-e[1]).forEach(([e,t])=>{console.log(`  ${e}: ${t}`)}),console.log("\nTotal messages:",window.messageFlow.length)},export(){let e=JSON.stringify(window.messageFlow,null,2);return navigator.clipboard.writeText(e),e}}})})();
    
/*!
* sweetalert2 v11.26.17
* Released under the MIT License.
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Sweetalert2=t()}(this,function(){"use strict";function e(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function t(t,n){return t.get(e(t,n))}function n(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}const o={},i=e=>new Promise(t=>{if(!e)return t();const n=window.scrollX,i=window.scrollY;o.restoreFocusTimeout=setTimeout(()=>{o.previousActiveElement instanceof HTMLElement?(o.previousActiveElement.focus(),o.previousActiveElement=null):document.body&&document.body.focus(),t()},100),window.scrollTo(n,i)}),s="swal2-",r=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"].reduce((e,t)=>(e[t]=s+t,e),{}),a=["success","warning","info","question","error"].reduce((e,t)=>(e[t]=s+t,e),{}),l="SweetAlert2:",c=e=>e.charAt(0).toUpperCase()+e.slice(1),u=e=>{console.warn(`${l} ${"object"==typeof e?e.join(" "):e}`)},d=e=>{console.error(`${l} ${e}`)},p=[],m=(e,t=null)=>{var n;n=`"${e}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`,p.includes(n)||(p.push(n),u(n))},h=e=>"function"==typeof e?e():e,g=e=>e&&"function"==typeof e.toPromise,f=e=>g(e)?e.toPromise():Promise.resolve(e),b=e=>e&&Promise.resolve(e)===e,y=()=>document.body.querySelector(`.${r.container}`),v=e=>{const t=y();return t?t.querySelector(e):null},w=e=>v(`.${e}`),C=()=>w(r.popup),A=()=>w(r.icon),E=()=>w(r.title),k=()=>w(r["html-container"]),B=()=>w(r.image),$=()=>w(r["progress-steps"]),L=()=>w(r["validation-message"]),P=()=>v(`.${r.actions} .${r.confirm}`),x=()=>v(`.${r.actions} .${r.cancel}`),T=()=>v(`.${r.actions} .${r.deny}`),S=()=>v(`.${r.loader}`),O=()=>w(r.actions),M=()=>w(r.footer),j=()=>w(r["timer-progress-bar"]),H=()=>w(r.close),I=()=>{const e=C();if(!e)return[];const t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(t).sort((e,t)=>{const n=parseInt(e.getAttribute("tabindex")||"0"),o=parseInt(t.getAttribute("tabindex")||"0");return n>o?1:n<o?-1:0}),o=e.querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'),i=Array.from(o).filter(e=>"-1"!==e.getAttribute("tabindex"));return[...new Set(n.concat(i))].filter(e=>ee(e))},D=()=>N(document.body,r.shown)&&!N(document.body,r["toast-shown"])&&!N(document.body,r["no-backdrop"]),V=()=>{const e=C();return!!e&&N(e,r.toast)},q=(e,t)=>{if(e.textContent="",t){const n=(new DOMParser).parseFromString(t,"text/html"),o=n.querySelector("head");o&&Array.from(o.childNodes).forEach(t=>{e.appendChild(t)});const i=n.querySelector("body");i&&Array.from(i.childNodes).forEach(t=>{t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(!0)):e.appendChild(t)})}},N=(e,t)=>{if(!t)return!1;const n=t.split(/\s+/);for(let t=0;t<n.length;t++)if(!e.classList.contains(n[t]))return!1;return!0},_=(e,t,n)=>{if(((e,t)=>{Array.from(e.classList).forEach(n=>{Object.values(r).includes(n)||Object.values(a).includes(n)||Object.values(t.showClass||{}).includes(n)||e.classList.remove(n)})})(e,t),!t.customClass)return;const o=t.customClass[n];o&&("string"==typeof o||o.forEach?z(e,o):u(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof o}"`))},R=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${r.popup} > .${r[t]}`);case"checkbox":return e.querySelector(`.${r.popup} > .${r.checkbox} input`);case"radio":return e.querySelector(`.${r.popup} > .${r.radio} input:checked`)||e.querySelector(`.${r.popup} > .${r.radio} input:first-child`);case"range":return e.querySelector(`.${r.popup} > .${r.range} input`);default:return e.querySelector(`.${r.popup} > .${r.input}`)}},F=e=>{if(e.focus(),"file"!==e.type){const t=e.value;e.value="",e.value=t}},U=(e,t,n)=>{e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(t=>{Array.isArray(e)?e.forEach(e=>{n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},z=(e,t)=>{U(e,t,!0)},W=(e,t)=>{U(e,t,!1)},K=(e,t)=>{const n=Array.from(e.children);for(let e=0;e<n.length;e++){const o=n[e];if(o instanceof HTMLElement&&N(o,t))return o}},Y=(e,t,n)=>{n===`${parseInt(`${n}`)}`&&(n=parseInt(n)),n||0===parseInt(`${n}`)?e.style.setProperty(t,"number"==typeof n?`${n}px`:n):e.style.removeProperty(t)},X=(e,t="flex")=>{e&&(e.style.display=t)},Z=e=>{e&&(e.style.display="none")},J=(e,t="block")=>{e&&new MutationObserver(()=>{Q(e,e.innerHTML,t)}).observe(e,{childList:!0,subtree:!0})},G=(e,t,n,o)=>{const i=e.querySelector(t);i&&i.style.setProperty(n,o)},Q=(e,t,n="flex")=>{t?X(e,n):Z(e)},ee=e=>Boolean(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),te=e=>Boolean(e.scrollHeight>e.clientHeight),ne=e=>{const t=window.getComputedStyle(e),n=parseFloat(t.getPropertyValue("animation-duration")||"0"),o=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||o>0},oe=(e,t=!1)=>{const n=j();n&&ee(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${e/1e3}s linear`,n.style.width="0%"},10))},ie=`\n <div aria-labelledby="${r.title}" aria-describedby="${r["html-container"]}" class="${r.popup}" tabindex="-1">\n   <button type="button" class="${r.close}"></button>\n   <ul class="${r["progress-steps"]}"></ul>\n   <div class="${r.icon}"></div>\n   <img class="${r.image}" />\n   <h2 class="${r.title}" id="${r.title}"></h2>\n   <div class="${r["html-container"]}" id="${r["html-container"]}"></div>\n   <input class="${r.input}" id="${r.input}" />\n   <input type="file" class="${r.file}" />\n   <div class="${r.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${r.select}" id="${r.select}"></select>\n   <div class="${r.radio}"></div>\n   <label class="${r.checkbox}">\n     <input type="checkbox" id="${r.checkbox}" />\n     <span class="${r.label}"></span>\n   </label>\n   <textarea class="${r.textarea}" id="${r.textarea}"></textarea>\n   <div class="${r["validation-message"]}" id="${r["validation-message"]}"></div>\n   <div class="${r.actions}">\n     <div class="${r.loader}"></div>\n     <button type="button" class="${r.confirm}"></button>\n     <button type="button" class="${r.deny}"></button>\n     <button type="button" class="${r.cancel}"></button>\n   </div>\n   <div class="${r.footer}"></div>\n   <div class="${r["timer-progress-bar-container"]}">\n     <div class="${r["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g,""),se=()=>{o.currentInstance&&o.currentInstance.resetValidationMessage()},re=e=>{const t=(()=>{const e=y();return!!e&&(e.remove(),W([document.documentElement,document.body],[r["no-backdrop"],r["toast-shown"],r["has-column"]]),!0)})();if("undefined"==typeof window||"undefined"==typeof document)return void d("SweetAlert2 requires document to initialize");const n=document.createElement("div");n.className=r.container,t&&z(n,r["no-transition"]),q(n,ie),n.dataset.swal2Theme=e.theme;const i=(e=>{if("string"==typeof e){const t=document.querySelector(e);if(!t)throw new Error(`Target element "${e}" not found`);return t}return e})(e.target||"body");i.appendChild(n),e.topLayer&&(n.setAttribute("popover",""),n.showPopover()),(e=>{const t=C();t&&(t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true"))})(e),(e=>{"rtl"===window.getComputedStyle(e).direction&&(z(y(),r.rtl),o.isRTL=!0)})(i),(()=>{const e=C();if(!e)return;const t=K(e,r.input),n=K(e,r.file),o=e.querySelector(`.${r.range} input`),i=e.querySelector(`.${r.range} output`),s=K(e,r.select),a=e.querySelector(`.${r.checkbox} input`),l=K(e,r.textarea);t&&(t.oninput=se),n&&(n.onchange=se),s&&(s.onchange=se),a&&(a.onchange=se),l&&(l.oninput=se),o&&i&&(o.oninput=()=>{se(),i.value=o.value},o.onchange=()=>{se(),i.value=o.value})})()},ae=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"==typeof e?le(e,t):e&&q(t,e)},le=(e,t)=>{"jquery"in e?ce(t,e):q(t,e.toString())},ce=(e,t)=>{if(e.textContent="",0 in t)for(let n=0;n in t;n++)e.appendChild(t[n].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},ue=(e,t)=>{const n=O(),o=S();n&&o&&(t.showConfirmButton||t.showDenyButton||t.showCancelButton?X(n):Z(n),_(n,t,"actions"),function(e,t,n){const o=P(),i=T(),s=x();if(!o||!i||!s)return;pe(o,"confirm",n),pe(i,"deny",n),pe(s,"cancel",n),function(e,t,n,o){if(!o.buttonsStyling)return void W([e,t,n],r.styled);z([e,t,n],r.styled),o.confirmButtonColor&&e.style.setProperty("--swal2-confirm-button-background-color",o.confirmButtonColor);o.denyButtonColor&&t.style.setProperty("--swal2-deny-button-background-color",o.denyButtonColor);o.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",o.cancelButtonColor);de(e),de(t),de(n)}(o,i,s,n),n.reverseButtons&&(n.toast?(e.insertBefore(s,o),e.insertBefore(i,o)):(e.insertBefore(s,t),e.insertBefore(i,t),e.insertBefore(o,t)))}(n,o,t),q(o,t.loaderHtml||""),_(o,t,"loader"))};function de(e){const t=window.getComputedStyle(e);if(t.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=t.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");e.style.setProperty("--swal2-action-button-focus-box-shadow",t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function pe(e,t,n){const o=c(t);Q(e,n[`show${o}Button`],"inline-block"),q(e,n[`${t}ButtonText`]||""),e.setAttribute("aria-label",n[`${t}ButtonAriaLabel`]||""),e.className=r[t],_(e,n,`${t}Button`)}const me=(e,t)=>{const n=y();n&&(!function(e,t){"string"==typeof t?e.style.background=t:t||z([document.documentElement,document.body],r["no-backdrop"])}(n,t.backdrop),function(e,t){if(!t)return;t in r?z(e,r[t]):(u('The "position" parameter is not valid, defaulting to "center"'),z(e,r.center))}(n,t.position),function(e,t){if(!t)return;z(e,r[`grow-${t}`])}(n,t.grow),_(n,t,"container"))};var he={innerParams:new WeakMap,domCache:new WeakMap};const ge=["input","file","range","select","radio","checkbox","textarea"],fe=e=>{if(!e.input)return;if(!Ee[e.input])return void d(`Unexpected type of input! Expected ${Object.keys(Ee).join(" | ")}, got "${e.input}"`);const t=Ce(e.input);if(!t)return;const n=Ee[e.input](t,e);X(t),e.inputAutoFocus&&setTimeout(()=>{F(n)})},be=(e,t)=>{const n=C();if(!n)return;const o=R(n,e);if(o){(e=>{for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;["id","type","value","style"].includes(n)||e.removeAttribute(n)}})(o);for(const e in t)o.setAttribute(e,t[e])}},ye=e=>{if(!e.input)return;const t=Ce(e.input);t&&_(t,e,"input")},ve=(e,t)=>{!e.placeholder&&t.inputPlaceholder&&(e.placeholder=t.inputPlaceholder)},we=(e,t,n)=>{if(n.inputLabel){const o=document.createElement("label"),i=r["input-label"];o.setAttribute("for",e.id),o.className=i,"object"==typeof n.customClass&&z(o,n.customClass.inputLabel),o.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",o)}},Ce=e=>{const t=C();if(t)return K(t,r[e]||r.input)},Ae=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:b(t)||u(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},Ee={};Ee.text=Ee.email=Ee.password=Ee.number=Ee.tel=Ee.url=Ee.search=Ee.date=Ee["datetime-local"]=Ee.time=Ee.week=Ee.month=(e,t)=>{const n=e;return Ae(n,t.inputValue),we(n,n,t),ve(n,t),n.type=t.input,n},Ee.file=(e,t)=>{const n=e;return we(n,n,t),ve(n,t),n},Ee.range=(e,t)=>{const n=e,o=n.querySelector("input"),i=n.querySelector("output");return o&&(Ae(o,t.inputValue),o.type=t.input,we(o,e,t)),i&&Ae(i,t.inputValue),e},Ee.select=(e,t)=>{const n=e;if(n.textContent="",t.inputPlaceholder){const e=document.createElement("option");q(e,t.inputPlaceholder),e.value="",e.disabled=!0,e.selected=!0,n.appendChild(e)}return we(n,n,t),n},Ee.radio=e=>(e.textContent="",e),Ee.checkbox=(e,t)=>{const n=C();if(!n)throw new Error("Popup not found");const o=R(n,"checkbox");if(!o)throw new Error("Checkbox input not found");o.value="1",o.checked=Boolean(t.inputValue);const i=e.querySelector("span");if(i){const e=t.inputPlaceholder||t.inputLabel;e&&q(i,e)}return o},Ee.textarea=(e,t)=>{const n=e;Ae(n,t.inputValue),ve(n,t),we(n,n,t);return setTimeout(()=>{if("MutationObserver"in window){const e=C();if(!e)return;const o=parseInt(window.getComputedStyle(e).width);new MutationObserver(()=>{if(!document.body.contains(n))return;const e=n.offsetWidth+(i=n,parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight));var i;const s=C();s&&(e>o?s.style.width=`${e}px`:Y(s,"width",t.width))}).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const ke=(e,t)=>{const n=k();n&&(J(n),_(n,t,"htmlContainer"),t.html?(ae(t.html,n),X(n,"block")):t.text?(n.textContent=t.text,X(n,"block")):Z(n),((e,t)=>{const n=C();if(!n)return;const o=he.innerParams.get(e),i=!o||t.input!==o.input;ge.forEach(e=>{const o=K(n,r[e]);o&&(be(e,t.inputAttributes),o.className=r[e],i&&Z(o))}),t.input&&(i&&fe(t),ye(t))})(e,t))},Be=(e,t)=>{for(const[n,o]of Object.entries(a))t.icon!==n&&W(e,o);z(e,t.icon&&a[t.icon]),Pe(e,t),$e(),_(e,t,"icon")},$e=()=>{const e=C();if(!e)return;const t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<n.length;e++)n[e].style.backgroundColor=t},Le=(e,t)=>{if(!t.icon&&!t.iconHtml)return;let n=e.innerHTML,o="";if(t.iconHtml)o=xe(t.iconHtml);else if("success"===t.icon)o=(e=>`\n  ${e.animation?'<div class="swal2-success-circular-line-left"></div>':""}\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div>\n  ${e.animation?'<div class="swal2-success-fix"></div>':""}\n  ${e.animation?'<div class="swal2-success-circular-line-right"></div>':""}\n`)(t),n=n.replace(/ style=".*?"/g,"");else if("error"===t.icon)o='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';else if(t.icon){o=xe({question:"?",warning:"!",info:"i"}[t.icon])}n.trim()!==o.trim()&&q(e,o)},Pe=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])G(e,n,"background-color",t.iconColor);G(e,".swal2-success-ring","border-color",t.iconColor)}},xe=e=>`<div class="${r["icon-content"]}">${e}</div>`;let Te=!1,Se=0,Oe=0,Me=0,je=0;const He=e=>{const t=C();if(!t)return;const n=A();if(e.target===t||n&&n.contains(e.target)){Te=!0;const n=Ve(e);Se=n.clientX,Oe=n.clientY,Me=parseInt(t.style.insetInlineStart)||0,je=parseInt(t.style.insetBlockStart)||0,z(t,"swal2-dragging")}},Ie=e=>{const t=C();if(t&&Te){let{clientX:n,clientY:i}=Ve(e);const s=n-Se;t.style.insetInlineStart=`${Me+(o.isRTL?-s:s)}px`,t.style.insetBlockStart=`${je+(i-Oe)}px`}},De=()=>{const e=C();Te=!1,W(e,"swal2-dragging")},Ve=e=>{let t=0,n=0;return e.type.startsWith("mouse")?(t=e.clientX,n=e.clientY):e.type.startsWith("touch")&&(t=e.touches[0].clientX,n=e.touches[0].clientY),{clientX:t,clientY:n}},qe=(e,t)=>{const n=y(),o=C();if(n&&o){if(t.toast){Y(n,"width",t.width),o.style.width="100%";const e=S();e&&o.insertBefore(e,A())}else Y(o,"width",t.width);Y(o,"padding",t.padding),t.color&&(o.style.color=t.color),t.background&&(o.style.background=t.background),Z(L()),Ne(o,t),t.draggable&&!t.toast?(z(o,r.draggable),(e=>{e.addEventListener("mousedown",He),document.body.addEventListener("mousemove",Ie),e.addEventListener("mouseup",De),e.addEventListener("touchstart",He),document.body.addEventListener("touchmove",Ie),e.addEventListener("touchend",De)})(o)):(W(o,r.draggable),(e=>{e.removeEventListener("mousedown",He),document.body.removeEventListener("mousemove",Ie),e.removeEventListener("mouseup",De),e.removeEventListener("touchstart",He),document.body.removeEventListener("touchmove",Ie),e.removeEventListener("touchend",De)})(o))}},Ne=(e,t)=>{const n=t.showClass||{};e.className=`${r.popup} ${ee(e)?n.popup:""}`,t.toast?(z([document.documentElement,document.body],r["toast-shown"]),z(e,r.toast)):z(e,r.modal),_(e,t,"popup"),"string"==typeof t.customClass&&z(e,t.customClass),t.icon&&z(e,r[`icon-${t.icon}`])},_e=e=>{const t=document.createElement("li");return z(t,r["progress-step"]),q(t,e),t},Re=e=>{const t=document.createElement("li");return z(t,r["progress-step-line"]),e.progressStepsDistance&&Y(t,"width",e.progressStepsDistance),t},Fe=(e,t)=>{var n;qe(0,t),me(0,t),((e,t)=>{const n=$();if(!n)return;const{progressSteps:o,currentProgressStep:i}=t;o&&0!==o.length&&void 0!==i?(X(n),n.textContent="",i>=o.length&&u("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.forEach((e,s)=>{const a=_e(e);if(n.appendChild(a),s===i&&z(a,r["active-progress-step"]),s!==o.length-1){const e=Re(t);n.appendChild(e)}})):Z(n)})(0,t),((e,t)=>{const n=he.innerParams.get(e),o=A();if(!o)return;if(n&&t.icon===n.icon)return Le(o,t),void Be(o,t);if(!t.icon&&!t.iconHtml)return void Z(o);if(t.icon&&-1===Object.keys(a).indexOf(t.icon))return d(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),void Z(o);X(o),Le(o,t),Be(o,t),z(o,t.showClass&&t.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",$e)})(e,t),((e,t)=>{const n=B();n&&(t.imageUrl?(X(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt||""),Y(n,"width",t.imageWidth),Y(n,"height",t.imageHeight),n.className=r.image,_(n,t,"image")):Z(n))})(0,t),((e,t)=>{const n=E();n&&(J(n),Q(n,Boolean(t.title||t.titleText),"block"),t.title&&ae(t.title,n),t.titleText&&(n.innerText=t.titleText),_(n,t,"title"))})(0,t),((e,t)=>{const n=H();n&&(q(n,t.closeButtonHtml||""),_(n,t,"closeButton"),Q(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel||""))})(0,t),ke(e,t),ue(0,t),((e,t)=>{const n=M();n&&(J(n),Q(n,Boolean(t.footer),"block"),t.footer&&ae(t.footer,n),_(n,t,"footer"))})(0,t);const i=C();"function"==typeof t.didRender&&i&&t.didRender(i),null===(n=o.eventEmitter)||void 0===n||n.emit("didRender",i)},Ue=()=>{var e;return null===(e=P())||void 0===e?void 0:e.click()},ze=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),We=e=>{if(e.keydownTarget&&e.keydownHandlerAdded&&e.keydownHandler){const t=e.keydownHandler;e.keydownTarget.removeEventListener("keydown",t,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1}},Ke=(e,t)=>{var n;const o=I();if(o.length)return-2===(e+=t)&&(e=o.length-1),e===o.length?e=0:-1===e&&(e=o.length-1),void o[e].focus();null===(n=C())||void 0===n||n.focus()},Ye=["ArrowRight","ArrowDown"],Xe=["ArrowLeft","ArrowUp"],Ze=(e,t,n)=>{e&&(t.isComposing||229===t.keyCode||(e.stopKeydownPropagation&&t.stopPropagation(),"Enter"===t.key?Je(t,e):"Tab"===t.key?Ge(t):[...Ye,...Xe].includes(t.key)?Qe(t.key):"Escape"===t.key&&et(t,e,n)))},Je=(e,t)=>{if(!h(t.allowEnterKey))return;const n=C();if(!n||!t.input)return;const o=R(n,t.input);if(e.target&&o&&e.target instanceof HTMLElement&&e.target.outerHTML===o.outerHTML){if(["textarea","file"].includes(t.input))return;Ue(),e.preventDefault()}},Ge=e=>{const t=e.target,n=I();let o=-1;for(let e=0;e<n.length;e++)if(t===n[e]){o=e;break}e.shiftKey?Ke(o,-1):Ke(o,1),e.stopPropagation(),e.preventDefault()},Qe=e=>{const t=O(),n=P(),o=T(),i=x();if(!(t&&n&&o&&i))return;const s=[n,o,i];if(document.activeElement instanceof HTMLElement&&!s.includes(document.activeElement))return;const r=Ye.includes(e)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let e=0;e<t.children.length;e++){if(a=a[r],!a)return;if(a instanceof HTMLButtonElement&&ee(a))break}a instanceof HTMLButtonElement&&a.focus()}},et=(e,t,n)=>{e.preventDefault(),h(t.allowEscapeKey)&&n(ze.esc)};var tt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const nt=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},ot="undefined"!=typeof window&&Boolean(window.GestureEvent),it=()=>{const e=y();if(!e)return;let t;e.ontouchstart=e=>{t=st(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},st=e=>{const t=e.target,n=y(),o=k();return!(!n||!o)&&(!rt(e)&&!at(e)&&(t===n||!(te(n)||!(t instanceof HTMLElement)||((e,t)=>{let n=e;for(;n&&n!==t;){if(te(n))return!0;n=n.parentElement}return!1})(t,o)||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||te(o)&&o.contains(t))))},rt=e=>Boolean(e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType),at=e=>e.touches&&e.touches.length>1;let lt=null;const ct=e=>{null===lt&&(document.body.scrollHeight>window.innerHeight||"scroll"===e)&&(lt=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${lt+(()=>{const e=document.createElement("div");e.className=r["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t})()}px`)};function ut(e,t,n,s){V()?yt(e,s):(i(n).then(()=>yt(e,s)),We(o)),ot?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),D()&&(null!==lt&&(document.body.style.paddingRight=`${lt}px`,lt=null),(()=>{if(N(document.body,r.iosfix)){const e=parseInt(document.body.style.top,10);W(document.body,r.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}})(),nt()),W([document.documentElement,document.body],[r.shown,r["height-auto"],r["no-backdrop"],r["toast-shown"]])}function dt(e){e=gt(e);const t=tt.swalPromiseResolve.get(this),n=pt(this);this.isAwaitingPromise?e.isDismissed||(ht(this),t(e)):n&&t(e)}const pt=e=>{const t=C();if(!t)return!1;const n=he.innerParams.get(e);if(!n||N(t,n.hideClass.popup))return!1;W(t,n.showClass.popup),z(t,n.hideClass.popup);const o=y();return W(o,n.showClass.backdrop),z(o,n.hideClass.backdrop),ft(e,t,n),!0};function mt(e){const t=tt.swalPromiseReject.get(this);ht(this),t&&t(e)}const ht=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,he.innerParams.get(e)||e._destroy())},gt=e=>void 0===e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),ft=(e,t,n)=>{var i;const s=y(),r=ne(t);"function"==typeof n.willClose&&n.willClose(t),null===(i=o.eventEmitter)||void 0===i||i.emit("willClose",t),r&&s?bt(e,t,s,Boolean(n.returnFocus),n.didClose):s&&ut(e,s,Boolean(n.returnFocus),n.didClose)},bt=(e,t,n,i,s)=>{o.swalCloseEventFinishedCallback=ut.bind(null,e,n,i,s);const r=function(e){var n;e.target===t&&(null===(n=o.swalCloseEventFinishedCallback)||void 0===n||n.call(o),delete o.swalCloseEventFinishedCallback,t.removeEventListener("animationend",r),t.removeEventListener("transitionend",r))};t.addEventListener("animationend",r),t.addEventListener("transitionend",r)},yt=(e,t)=>{setTimeout(()=>{var n;"function"==typeof t&&t.bind(e.params)(),null===(n=o.eventEmitter)||void 0===n||n.emit("didClose"),e._destroy&&e._destroy()})},vt=e=>{let t=C();if(t||new Qn,t=C(),!t)return;const n=S();V()?Z(A()):wt(t,e),X(n),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},wt=(e,t)=>{const n=O(),o=S();n&&o&&(!t&&ee(P())&&(t=P()),X(n),t&&(Z(t),o.setAttribute("data-button-to-replace",t.className),n.insertBefore(o,t)),z([e,n],r.loading))},Ct=e=>e.checked?1:0,At=e=>e.checked?e.value:null,Et=e=>e.files&&e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,kt=(e,t)=>{const n=C();if(!n)return;const o=e=>{"select"===t.input?function(e,t,n){const o=K(e,r.select);if(!o)return;const i=(e,t,o)=>{const i=document.createElement("option");i.value=o,q(i,t),i.selected=Lt(o,n.inputValue),e.appendChild(i)};t.forEach(e=>{const t=e[0],n=e[1];if(Array.isArray(n)){const e=document.createElement("optgroup");e.label=t,e.disabled=!1,o.appendChild(e),n.forEach(t=>i(e,t[1],t[0]))}else i(o,n,t)}),o.focus()}(n,$t(e),t):"radio"===t.input&&function(e,t,n){const o=K(e,r.radio);if(!o)return;t.forEach(e=>{const t=e[0],i=e[1],s=document.createElement("input"),a=document.createElement("label");s.type="radio",s.name=r.radio,s.value=t,Lt(t,n.inputValue)&&(s.checked=!0);const l=document.createElement("span");q(l,i),l.className=r.label,a.appendChild(s),a.appendChild(l),o.appendChild(a)});const i=o.querySelectorAll("input");i.length&&i[0].focus()}(n,$t(e),t)};g(t.inputOptions)||b(t.inputOptions)?(vt(P()),f(t.inputOptions).then(t=>{e.hideLoading(),o(t)})):"object"==typeof t.inputOptions?o(t.inputOptions):d("Unexpected type of inputOptions! Expected object, Map or Promise, got "+typeof t.inputOptions)},Bt=(e,t)=>{const n=e.getInput();n&&(Z(n),f(t.inputValue).then(o=>{n.value="number"===t.input?`${parseFloat(o)||0}`:`${o}`,X(n),n.focus(),e.hideLoading()}).catch(t=>{d(`Error in inputValue promise: ${t}`),n.value="",X(n),n.focus(),e.hideLoading()}))};const $t=e=>{const t=[];return e instanceof Map?e.forEach((e,n)=>{let o=e;"object"==typeof o&&(o=$t(o)),t.push([n,o])}):Object.keys(e).forEach(n=>{let o=e[n];"object"==typeof o&&(o=$t(o)),t.push([n,o])}),t},Lt=(e,t)=>Boolean(t)&&null!=t&&t.toString()===e.toString(),Pt=(e,t)=>{const n=he.innerParams.get(e);if(!n.input)return void d(`The "input" parameter is needed to be set when using returnInputValueOn${c(t)}`);const o=e.getInput(),i=((e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return Ct(n);case"radio":return At(n);case"file":return Et(n);default:return t.inputAutoTrim?n.value.trim():n.value}})(e,n);n.inputValidator?xt(e,i,t):o&&!o.checkValidity()?(e.enableButtons(),e.showValidationMessage(n.validationMessage||o.validationMessage)):"deny"===t?Tt(e,i):Mt(e,i)},xt=(e,t,n)=>{const o=he.innerParams.get(e);e.disableInput();Promise.resolve().then(()=>f(o.inputValidator(t,o.validationMessage))).then(o=>{e.enableButtons(),e.enableInput(),o?e.showValidationMessage(o):"deny"===n?Tt(e,t):Mt(e,t)})},Tt=(e,t)=>{const n=he.innerParams.get(e);if(n.showLoaderOnDeny&&vt(T()),n.preDeny){e.isAwaitingPromise=!0;Promise.resolve().then(()=>f(n.preDeny(t,n.validationMessage))).then(n=>{!1===n?(e.hideLoading(),ht(e)):e.close({isDenied:!0,value:void 0===n?t:n})}).catch(t=>Ot(e,t))}else e.close({isDenied:!0,value:t})},St=(e,t)=>{e.close({isConfirmed:!0,value:t})},Ot=(e,t)=>{e.rejectPromise(t)},Mt=(e,t)=>{const n=he.innerParams.get(e);if(n.showLoaderOnConfirm&&vt(),n.preConfirm){e.resetValidationMessage(),e.isAwaitingPromise=!0;Promise.resolve().then(()=>f(n.preConfirm(t,n.validationMessage))).then(n=>{ee(L())||!1===n?(e.hideLoading(),ht(e)):St(e,void 0===n?t:n)}).catch(t=>Ot(e,t))}else St(e,t)};function jt(){const e=he.innerParams.get(this);if(!e)return;const t=he.domCache.get(this);Z(t.loader),V()?e.icon&&X(A()):Ht(t),W([t.popup,t.actions],r.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}const Ht=e=>{const t=e.loader.getAttribute("data-button-to-replace"),n=t?e.popup.getElementsByClassName(t):[];n.length?X(n[0],"inline-block"):ee(P())||ee(T())||ee(x())||Z(e.actions)};function It(){const e=he.innerParams.get(this),t=he.domCache.get(this);return t?R(t.popup,e.input):null}function Dt(e,t,n){const o=he.domCache.get(e);t.forEach(e=>{o[e].disabled=n})}function Vt(e,t){const n=C();if(n&&e)if("radio"===e.type){const e=n.querySelectorAll(`[name="${r.radio}"]`);for(let n=0;n<e.length;n++)e[n].disabled=t}else e.disabled=t}function qt(){Dt(this,["confirmButton","denyButton","cancelButton"],!1)}function Nt(){Dt(this,["confirmButton","denyButton","cancelButton"],!0)}function _t(){Vt(this.getInput(),!1)}function Rt(){Vt(this.getInput(),!0)}function Ft(e){const t=he.domCache.get(this),n=he.innerParams.get(this);q(t.validationMessage,e),t.validationMessage.className=r["validation-message"],n.customClass&&n.customClass.validationMessage&&z(t.validationMessage,n.customClass.validationMessage),X(t.validationMessage);const o=this.getInput();o&&(o.setAttribute("aria-invalid","true"),o.setAttribute("aria-describedby",r["validation-message"]),F(o),z(o,r.inputerror))}function Ut(){const e=he.domCache.get(this);e.validationMessage&&Z(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),W(t,r.inputerror))}const zt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},Wt=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],Kt={allowEnterKey:void 0},Yt=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Xt=e=>Object.prototype.hasOwnProperty.call(zt,e),Zt=e=>-1!==Wt.indexOf(e),Jt=e=>Kt[e],Gt=e=>{Xt(e)||u(`Unknown parameter "${e}"`)},Qt=e=>{Yt.includes(e)&&u(`The parameter "${e}" is incompatible with toasts`)},en=e=>{const t=Jt(e);t&&m(e,t)},tn=e=>{!1===e.backdrop&&e.allowOutsideClick&&u('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),e.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(e.theme)&&u(`Invalid theme "${e.theme}"`);for(const t in e)Gt(t),e.toast&&Qt(t),en(t)};function nn(e){const t=y(),n=C(),o=he.innerParams.get(this);if(!n||N(n,o.hideClass.popup))return void u("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const i=on(e),s=Object.assign({},o,i);tn(s),t&&(t.dataset.swal2Theme=s.theme),Fe(this,s),he.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const on=e=>{const t={};return Object.keys(e).forEach(n=>{if(Zt(n)){const o=e;t[n]=o[n]}else u(`Invalid parameter to update: ${n}`)}),t};function sn(){var e;const t=he.domCache.get(this),n=he.innerParams.get(this);n?(t.popup&&o.swalCloseEventFinishedCallback&&(o.swalCloseEventFinishedCallback(),delete o.swalCloseEventFinishedCallback),"function"==typeof n.didDestroy&&n.didDestroy(),null===(e=o.eventEmitter)||void 0===e||e.emit("didDestroy"),rn(this)):an(this)}const rn=e=>{an(e),delete e.params,delete o.keydownHandler,delete o.keydownTarget,delete o.currentInstance},an=e=>{e.isAwaitingPromise?(ln(he,e),e.isAwaitingPromise=!0):(ln(tt,e),ln(he,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},ln=(e,t)=>{for(const n in e)e[n].delete(t)};var cn=Object.freeze({__proto__:null,_destroy:sn,close:dt,closeModal:dt,closePopup:dt,closeToast:dt,disableButtons:Nt,disableInput:Rt,disableLoading:jt,enableButtons:qt,enableInput:_t,getInput:It,handleAwaitingPromise:ht,hideLoading:jt,rejectPromise:mt,resetValidationMessage:Ut,showValidationMessage:Ft,update:nn});const un=(e,t,n)=>{t.popup.onclick=()=>{e&&(dn(e)||e.timer||e.input)||n(ze.close)}},dn=e=>Boolean(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton);let pn=!1;const mn=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=()=>{},t.target===e.container&&(pn=!0)}}},hn=e=>{e.container.onmousedown=t=>{t.target===e.container&&t.preventDefault(),e.popup.onmouseup=function(t){e.popup.onmouseup=()=>{},(t.target===e.popup||t.target instanceof HTMLElement&&e.popup.contains(t.target))&&(pn=!0)}}},gn=(e,t,n)=>{t.container.onclick=o=>{pn?pn=!1:o.target===t.container&&h(e.allowOutsideClick)&&n(ze.backdrop)}},fn=e=>e instanceof Element||(e=>"object"==typeof e&&e.jquery)(e);const bn=()=>{if(o.timeout)return(()=>{const e=j();if(!e)return;const t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const n=t/parseInt(window.getComputedStyle(e).width)*100;e.style.width=`${n}%`})(),o.timeout.stop()},yn=()=>{if(o.timeout){const e=o.timeout.start();return oe(e),e}};let vn=!1;const wn={};const Cn=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in wn){const n=t.getAttribute&&t.getAttribute(e);if(n)return void wn[e].fire({template:n})}};o.eventEmitter=new class{constructor(){this.events={}}_getHandlersByEventName(e){return void 0===this.events[e]&&(this.events[e]=[]),this.events[e]}on(e,t){const n=this._getHandlersByEventName(e);n.includes(t)||n.push(t)}once(e,t){const n=(...o)=>{this.removeListener(e,n),t.apply(this,o)};this.on(e,n)}emit(e,...t){this._getHandlersByEventName(e).forEach(e=>{try{e.apply(this,t)}catch(e){console.error(e)}})}removeListener(e,t){const n=this._getHandlersByEventName(e),o=n.indexOf(t);o>-1&&n.splice(o,1)}removeAllListeners(e){void 0!==this.events[e]&&(this.events[e].length=0)}reset(){this.events={}}};var An=Object.freeze({__proto__:null,argsToParams:e=>{const t={};return"object"!=typeof e[0]||fn(e[0])?["title","html","icon"].forEach((n,o)=>{const i=e[o];"string"==typeof i||fn(i)?t[n]=i:void 0!==i&&d(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}):Object.assign(t,e[0]),t},bindClickHandler:function(e="data-swal-template"){wn[e]=this,vn||(document.body.addEventListener("click",Cn),vn=!0)},clickCancel:()=>{var e;return null===(e=x())||void 0===e?void 0:e.click()},clickConfirm:Ue,clickDeny:()=>{var e;return null===(e=T())||void 0===e?void 0:e.click()},enableLoading:vt,fire:function(...e){return new this(...e)},getActions:O,getCancelButton:x,getCloseButton:H,getConfirmButton:P,getContainer:y,getDenyButton:T,getFocusableElements:I,getFooter:M,getHtmlContainer:k,getIcon:A,getIconContent:()=>w(r["icon-content"]),getImage:B,getInputLabel:()=>w(r["input-label"]),getLoader:S,getPopup:C,getProgressSteps:$,getTimerLeft:()=>o.timeout&&o.timeout.getTimerLeft(),getTimerProgressBar:j,getTitle:E,getValidationMessage:L,increaseTimer:e=>{if(o.timeout){const t=o.timeout.increase(e);return oe(t,!0),t}},isDeprecatedParameter:Jt,isLoading:()=>{const e=C();return!!e&&e.hasAttribute("data-loading")},isTimerRunning:()=>Boolean(o.timeout&&o.timeout.isRunning()),isUpdatableParameter:Zt,isValidParameter:Xt,isVisible:()=>ee(C()),mixin:function(e){return class extends(this){_main(t,n){return super._main(t,Object.assign({},e,n))}}},off:(e,t)=>{o.eventEmitter&&(e?t?o.eventEmitter.removeListener(e,t):o.eventEmitter.removeAllListeners(e):o.eventEmitter.reset())},on:(e,t)=>{o.eventEmitter&&o.eventEmitter.on(e,t)},once:(e,t)=>{o.eventEmitter&&o.eventEmitter.once(e,t)},resumeTimer:yn,showLoading:vt,stopTimer:bn,toggleTimer:()=>{const e=o.timeout;return e&&(e.running?bn():yn())}});class En{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const kn=["swal-title","swal-html","swal-footer"],Bn=e=>{const t={};return Array.from(e.querySelectorAll("swal-param")).forEach(e=>{Mn(e,["name","value"]);const n=e.getAttribute("name"),o=e.getAttribute("value");n&&o&&(t[n]=n in zt&&"boolean"==typeof zt[n]?"false"!==o:n in zt&&"object"==typeof zt[n]?JSON.parse(o):o)}),t},$n=e=>{const t={};return Array.from(e.querySelectorAll("swal-function-param")).forEach(e=>{const n=e.getAttribute("name"),o=e.getAttribute("value");n&&o&&(t[n]=new Function(`return ${o}`)())}),t},Ln=e=>{const t={};return Array.from(e.querySelectorAll("swal-button")).forEach(e=>{Mn(e,["type","color","aria-label"]);const n=e.getAttribute("type");if(n&&["confirm","cancel","deny"].includes(n)){if(t[`${n}ButtonText`]=e.innerHTML,t[`show${c(n)}Button`]=!0,e.hasAttribute("color")){const o=e.getAttribute("color");null!==o&&(t[`${n}ButtonColor`]=o)}if(e.hasAttribute("aria-label")){const o=e.getAttribute("aria-label");null!==o&&(t[`${n}ButtonAriaLabel`]=o)}}}),t},Pn=e=>{const t={},n=e.querySelector("swal-image");return n&&(Mn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt")||void 0)),t},xn=e=>{const t={},n=e.querySelector("swal-icon");return n&&(Mn(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},Tn=e=>{const t={},n=e.querySelector("swal-input");n&&(Mn(n,["type","label","placeholder","value"]),t.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(t.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(t.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(t.inputValue=n.getAttribute("value")));const o=Array.from(e.querySelectorAll("swal-input-option"));return o.length&&(t.inputOptions={},o.forEach(e=>{Mn(e,["value"]);const n=e.getAttribute("value");if(!n)return;const o=e.innerHTML;t.inputOptions[n]=o})),t},Sn=(e,t)=>{const n={};for(const o in t){const i=t[o],s=e.querySelector(i);s&&(Mn(s,[]),n[i.replace(/^swal-/,"")]=s.innerHTML.trim())}return n},On=e=>{const t=kn.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(e=>{const n=e.tagName.toLowerCase();t.includes(n)||u(`Unrecognized element <${n}>`)})},Mn=(e,t)=>{Array.from(e.attributes).forEach(n=>{-1===t.indexOf(n.name)&&u([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,""+(t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element.")])})},jn=e=>{var t,n;const i=y(),s=C();if(!i||!s)return;"function"==typeof e.willOpen&&e.willOpen(s),null===(t=o.eventEmitter)||void 0===t||t.emit("willOpen",s);const r=window.getComputedStyle(document.body).overflowY;if(Vn(i,s,e),setTimeout(()=>{In(i,s)},10),D()&&(Dn(i,void 0!==e.scrollbarPadding&&e.scrollbarPadding,r),(()=>{const e=y();Array.from(document.body.children).forEach(t=>{t.contains(e)||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")||""),t.setAttribute("aria-hidden","true"))})})()),V()||o.previousActiveElement||(o.previousActiveElement=document.activeElement),"function"==typeof e.didOpen){const t=e.didOpen;setTimeout(()=>t(s))}null===(n=o.eventEmitter)||void 0===n||n.emit("didOpen",s)},Hn=e=>{const t=C();if(!t||e.target!==t)return;const n=y();n&&(t.removeEventListener("animationend",Hn),t.removeEventListener("transitionend",Hn),n.style.overflowY="auto",W(n,r["no-transition"]))},In=(e,t)=>{ne(t)?(e.style.overflowY="hidden",t.addEventListener("animationend",Hn),t.addEventListener("transitionend",Hn)):e.style.overflowY="auto"},Dn=(e,t,n)=>{(()=>{if(ot&&!N(document.body,r.iosfix)){const e=document.body.scrollTop;document.body.style.top=-1*e+"px",z(document.body,r.iosfix),it()}})(),t&&"hidden"!==n&&ct(n),setTimeout(()=>{e.scrollTop=0})},Vn=(e,t,n)=>{var o;null!==(o=n.showClass)&&void 0!==o&&o.backdrop&&z(e,n.showClass.backdrop),n.animation?(t.style.setProperty("opacity","0","important"),X(t,"grid"),setTimeout(()=>{var e;null!==(e=n.showClass)&&void 0!==e&&e.popup&&z(t,n.showClass.popup),t.style.removeProperty("opacity")},10)):X(t,"grid"),z([document.documentElement,document.body],r.shown),n.heightAuto&&n.backdrop&&!n.toast&&z([document.documentElement,document.body],r["height-auto"])};var qn=(e,t)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),Nn=(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL");function _n(e){!function(e){e.inputValidator||("email"===e.input&&(e.inputValidator=qn),"url"===e.input&&(e.inputValidator=Nn))}(e),e.showLoaderOnConfirm&&!e.preConfirm&&u("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),function(e){(!e.target||"string"==typeof e.target&&!document.querySelector(e.target)||"string"!=typeof e.target&&!e.target.appendChild)&&(u('Target parameter is not valid, defaulting to "body"'),e.target="body")}(e),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),re(e)}let Rn;var Fn=new WeakMap;class Un{constructor(...t){if(n(this,Fn,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),"undefined"==typeof window)return;Rn=this;const o=Object.freeze(this.constructor.argsToParams(t));var i,s,r;this.params=o,this.isAwaitingPromise=!1,i=Fn,s=this,r=this._main(Rn.params),i.set(e(i,s),r)}_main(e,t={}){if(tn(Object.assign({},t,e)),o.currentInstance){const e=tt.swalPromiseResolve.get(o.currentInstance),{isAwaitingPromise:t}=o.currentInstance;o.currentInstance._destroy(),t||e({isDismissed:!0}),D()&&nt()}o.currentInstance=Rn;const n=Wn(e,t);_n(n),Object.freeze(n),o.timeout&&(o.timeout.stop(),delete o.timeout),clearTimeout(o.restoreFocusTimeout);const i=Kn(Rn);return Fe(Rn,n),he.innerParams.set(Rn,n),zn(Rn,i,n)}then(e){return t(Fn,this).then(e)}finally(e){return t(Fn,this).finally(e)}}const zn=(e,t,n)=>new Promise((i,s)=>{const r=t=>{e.close({isDismissed:!0,dismiss:t,isConfirmed:!1,isDenied:!1})};tt.swalPromiseResolve.set(e,i),tt.swalPromiseReject.set(e,s),t.confirmButton.onclick=()=>{(e=>{const t=he.innerParams.get(e);e.disableButtons(),t.input?Pt(e,"confirm"):Mt(e,!0)})(e)},t.denyButton.onclick=()=>{(e=>{const t=he.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?Pt(e,"deny"):Tt(e,!1)})(e)},t.cancelButton.onclick=()=>{((e,t)=>{e.disableButtons(),t(ze.cancel)})(e,r)},t.closeButton.onclick=()=>{r(ze.close)},((e,t,n)=>{e.toast?un(e,t,n):(mn(t),hn(t),gn(e,t,n))})(n,t,r),((e,t,n)=>{if(We(e),!t.toast){const o=e=>Ze(t,e,n);e.keydownHandler=o;const i=t.keydownListenerCapture?window:C();if(i){e.keydownTarget=i,e.keydownListenerCapture=t.keydownListenerCapture;const n=o;e.keydownTarget.addEventListener("keydown",n,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0}}})(o,n,r),((e,t)=>{"select"===t.input||"radio"===t.input?kt(e,t):["text","email","number","tel","textarea"].some(e=>e===t.input)&&(g(t.inputValue)||b(t.inputValue))&&(vt(P()),Bt(e,t))})(e,n),jn(n),Yn(o,n,r),Xn(t,n),setTimeout(()=>{t.container.scrollTop=0})}),Wn=(e,t)=>{const n=(e=>{const t="string"==typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};const n=t.content;return On(n),Object.assign(Bn(n),$n(n),Ln(n),Pn(n),xn(n),Tn(n),Sn(n,kn))})(e),o=Object.assign({},zt,t,n,e);return o.showClass=Object.assign({},zt.showClass,o.showClass),o.hideClass=Object.assign({},zt.hideClass,o.hideClass),!1===o.animation&&(o.showClass={backdrop:"swal2-noanimation"},o.hideClass={}),o},Kn=e=>{const t={popup:C(),container:y(),actions:O(),confirmButton:P(),denyButton:T(),cancelButton:x(),loader:S(),closeButton:H(),validationMessage:L(),progressSteps:$()};return he.domCache.set(e,t),t},Yn=(e,t,n)=>{const o=j();Z(o),t.timer&&(e.timeout=new En(()=>{n("timer"),delete e.timeout},t.timer),t.timerProgressBar&&o&&(X(o),_(o,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&oe(t.timer)})))},Xn=(e,t)=>{if(!t.toast)return h(t.allowEnterKey)?void(Zn(e)||Jn(e,t)||Ke(-1,1)):(m("allowEnterKey"),void Gn())},Zn=e=>{const t=Array.from(e.popup.querySelectorAll("[autofocus]"));for(const e of t)if(e instanceof HTMLElement&&ee(e))return e.focus(),!0;return!1},Jn=(e,t)=>t.focusDeny&&ee(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&ee(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!ee(e.confirmButton))&&(e.confirmButton.focus(),!0),Gn=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};Un.prototype.disableButtons=Nt,Un.prototype.enableButtons=qt,Un.prototype.getInput=It,Un.prototype.disableInput=Rt,Un.prototype.enableInput=_t,Un.prototype.hideLoading=jt,Un.prototype.disableLoading=jt,Un.prototype.showValidationMessage=Ft,Un.prototype.resetValidationMessage=Ut,Un.prototype.close=dt,Un.prototype.closePopup=dt,Un.prototype.closeModal=dt,Un.prototype.closeToast=dt,Un.prototype.rejectPromise=mt,Un.prototype.update=nn,Un.prototype._destroy=sn,Object.assign(Un,An),Object.keys(cn).forEach(e=>{Un[e]=function(...t){if(Rn&&Rn[e])return Rn[e](...t)}}),Un.DismissReason=ze,Un.version="11.26.17";const Qn=Un;return Qn.default=Qn,Qn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,":root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");

/**
 * @license AGPL-3.0
 * Blooket Cheats
 * Copyright (C) 2023-present Xenostopic
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Source: https://x-gui.netlify.app/ 
 **/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

console.log("%cXenostopic CLIENT LOADED! ENJOY! %c\n Created by X-Network", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem");
console.log("%c gui.js", "color: #0bc2cf; font-size: 1rem");
console.log("%c Join the discord! Acc nvm, currently banned :( ", "color: #ffd000; font-size: 1rem", "color: #8000ff; font-size: 1rem");

(() => {
    if (!window.iframe) {
        window.iframe = document.createElement("iframe");
        window.iframe.style.display = "none";
        document.body.append(window.iframe);
    }

    window.alert = (...args) => window.iframe.contentWindow.alert(...args);

    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function() {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const timeProcessed = 1747005941679;
    let latestProcess = -1;
    const cheat = (async () => {
        const versionName = "7.1.0x";
        const gui = document.createElement("div");
        Object.assign(gui.style, {
            top: window.innerHeight / 2 - 250 + "px",
            left: innerWidth / 2 - 400 + "px",
        });
        const variables = {
            "--highlight": "#8A2BE2",
            "--highlight2": "#4B0082",
            "--background": "#0B0B1E",
            "--background2": "#151534",
            "--textColor": "#E0E0FF",
            "--textColor2": "#9A8CFF",
            "--toggleOff": "#2C273F",
            "--toggleOn": "#5FA3FF",
        };
        let settings,
            settingsKey = "XGUI.BenIsASillyGoose";
        const Settings = {
            data: null,
            setItem(k, v) {
                k.split(".").reduce((obj, k, i, a) => (++i == a.length && (obj[k] = v), k in obj ? obj[k] : (obj[k] = {})), this.data);
                CookieHelper.setCookie(settingsKey, this.data);
                return v;
            },
            deleteItem(k) {
                k.split(".").reduce((obj, k, i, a) => (++i == a.length && delete obj[k], obj[k]), this.data);
                CookieHelper.setCookie(settingsKey, this.data);
                return this.data;
            },
            setData(v) {
                this.data = v;
                CookieHelper.setCookie(settingsKey, this.data);
            },
        };
        const defaultHideKey = {
            ctrl: true,
            shift: false,
            alt: false,
            key: "e"
        };
        const defaultCloseKey = {
            ctrl: true,
            shift: false,
            alt: false,
            key: "x"
        };
        const defaultresetPosKey = {
            ctrl: true,
            shift: false,
            alt: false,
            key: "r"
        };
        for (const variable in variables) gui.style.setProperty(variable, variables[variable]);
        try {
            const _nameEQ = settingsKey + "=";
            const _match = document.cookie.split(";").map(c => c.trim()).find(c => c.startsWith(_nameEQ));
            Settings.data = _match ? (JSON.parse(decodeURIComponent(_match.slice(_nameEQ.length))) || {}) : {};
        } catch {
            document.cookie = `${settingsKey}=${encodeURIComponent("{}")}; path=/; domain=.blooket.com; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
            Settings.data = {};
        } finally {
            for (const variable in Settings.data.theme || {}) gui.style.setProperty("--" + variable, Settings.data.theme[variable]);
            Settings.data.hideKey ??= defaultHideKey;
            Settings.data.closeKey ??= defaultCloseKey;
            Settings.data.resetPosKey ??= defaultresetPosKey;
        }
        const CookieHelper = {
            setCookie: (name, value, days = 365) => {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                const expires = "expires=" + date.toUTCString();
                document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; domain=.blooket.com; ${expires};path=/`;
            },
            getCookie: (name) => {
                const nameEQ = name + "=";
                const cookies = document.cookie.split(';');
                for (let cookie of cookies) {
                    cookie = cookie.trim();
                    if (cookie.indexOf(nameEQ) === 0) {
                        try {
                            return JSON.parse(decodeURIComponent(cookie.substring(nameEQ.length)));
                        } catch {
                            return null;
                        }
                    }
                }
                return null;
            }
        };

        function setCookie(name, value, days = 365) {
            const expires = new Date(Date.now() + days * 864e5).toUTCString();
            const domain = location.hostname.split('.').slice(-2).join('.');
            document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; domain=.blooket.com; SameSite=Lax`;
        }

        function getCookie(name) {
            const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            return match ? decodeURIComponent(match[2]) : null;
        }

        function areSweetAlertsEnabled() {
            const cookieValue = getCookie("sweetAlertsEnabled");
            return cookieValue === null ? true : cookieValue === "true";
        }
        const styles = document.createElement("style");
        const classes = {},
            datasets = {};
        styles.innerHTML =
            "@import url('https://fonts.googleapis.com/css?family=Titan+One');\n@import url('https://fonts.googleapis.com/css?family=Nunito');" +
            `.bigTextContainer,.version{align-items:center;user-select:none}.cheatsList>div,.settingsPage>div{padding:5px 10px}.gamemode,.gui,.leaderboardList,.sidebar{box-sizing:border-box}.controls>div,.credit,.pathText,.runCheat,.sidebarPath,.version{user-select:none}.noScroll::-webkit-scrollbar{display:none}.noScroll{-ms-overflow-style:none;scrollbar-width:none}.gui {
  position: fixed;
  z-index: 100;
  background: var(--background);
  height: 500px;
  width: 800px;
  color: #fff;
  padding-left: 50px;
  font-size: 16px;
  border-radius: 15px; 
  overflow: hidden; 
}
button,
.runCheat,
.cheatToggle,
.toggleTrigger,
.controls > div,
.searchbarButton {
    border-radius: 12px !important;
}
.controls,.credit,.gamemodesList,.guiContent,.guiTopBar,.sidebar,.sidebarShadow,.version{position:absolute}.sidebarShadow{inset:0;background:#000;opacity:0%;pointer-events:none;transition:.2s;z-index:9}.controls>div,.guiContent,.sidebar,select[data-type] option{background:var(--background2)}.sidebarShadow:has(~ .sidebar:hover){opacity:40%}.credit{bottom:0;left:0;right:0;height:0;transition:.1s;overflow:hidden;text-align:center}.sidebar {
  top: 0;
  left: 0;
  height: 100%;
  width: 50px;
  position: absolute;
  z-index: 10;
  background: var(--background2);
  box-sizing: border-box;
  padding-bottom: 30px;
  transition: width .2s .1s;
  overflow-x: hidden;
  overflow-y: hidden;
}
.sidebar:hover {
  width: 200px;
  overflow-y: auto;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar:hover::-webkit-scrollbar {
  width: 6px;
}
.sidebar:hover::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 6px;
}
.sidebar:hover{width:200px;transition-delay:0s}.sidebar:hover>.credit{height:25px;transition:.4s 0.2s}.guiContent{inset:20px;left:70px;top:40px;z-index:1;padding-top:32px}.guiTopBar{z-index:1;top:0;left:50px;right:0;height:25px}.version{top:0;left:0;margin-inline:10px;color:#888;font-size:.9em;letter-spacing:.5px;height:100%;display:flex}.controls{top:0;right:0;display:grid;grid-template-columns:1fr 1fr 1fr;height:25px;width:122px;gap:1px;border:1px solid var(--background);z-index:2}.controls>div{display:grid;place-items:center;font-weight:100}.closeControl{transition:.1s}.closeControl:hover{background:red}.creditsPage,.gamemodesPage,.searchPage{position:absolute;inset:0;top:32px}.gamemodesList{display:grid;gap:0 30px;padding-inline:30px;margin-top:0;padding-top:15px;margin-bottom:0;grid-template-columns:1fr 1fr;overflow-y:scroll;inset:0}.leaderboardPage,.logsPage{inset:10px;position:absolute}.pathText{position:absolute;top:40px;left:70px;right:20px;z-index:3;padding:7px 10px;height:22px}.clearLogsButton,.refreshControl{z-index:5;place-items:center;cursor:pointer}.leaderboardPage{top:42px}.leaderboardList{list-style:none;margin:0;padding:20px 40px 10px;height:100%;overflow:scroll;font-size:1.5em}.logsPage{top:37px;background:#000d;border-radius:2.5px}.logMessages{list-style:none;margin:10px;padding:0;display:flex;flex-direction:column-reverse;overflow-y:scroll;word-wrap:break-word;position:absolute;inset:0}.clearLogsButton{position:absolute;top:5px;right:5px;width:25px;height:25px;display:grid;scale:-1 1 1;transition:.2s}.searchbarHolder{display:flex;outline:2px solid var(--highlight);margin:10px 20px;height:30px;font-size:2em}.searchbarInput{outline:0;border:none;background:0 0;color:#fff;flex:1;font-size:.5em;font-family:Nunito;padding-inline:5px}.gamemode,.settingsPage>div{border-radius:2.5px;background:var(--background)}.searchbarButton{color:#fff;font-size:.6em;aspect-ratio:1/1;height:30px;display:grid;place-items:center;cursor:pointer}.bigText,.bigTextContainer{height:50px;width:200px;font-family:Titan One}.searchResults{position:absolute;inset:0;top:45px;padding-inline:20px;overflow-y:scroll}.favoritesPage,.settingsPage{inset:0;top:32px;overflow-y:scroll;position:absolute}.noResult{margin:20px 10px;font-size:.85em}.clearLogsButton:hover,.licenseMessage{font-size:1.25em}.favoritesPage{padding-block:10px;padding-inline:20px}.licenseMessage{font-weight:900;padding-inline:20px;margin-top:10px}.copyrightTag{font-size:.7em;font-weight:200;position:absolute;bottom:0;left:0;padding:5px 8px}.codingCredits,.creditLinks,.uploadDates{list-style:none;padding-inline:20px;margin-block:16px}.settingsPage{padding:10px;display:flex;flex-direction:column;gap:10px}.sidebarPaths{display:flex;flex-direction:column;width:200px}.bigTextContainer{display:flex;font-size:2em;margin-block:10px;transition:font-size .2s .1s,margin-block .2s .1s}.bigText{display:flex;align-items:center;justify-content:center}.refreshControl{position:absolute;top:45px;right:25px;width:25px;height:25px;display:grid}.gamemode{width:100%;height:200px;margin-bottom:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;padding-top:10px;position:relative;overflow:hidden;padding-bottom:35px;transition:.4s}.contentPage,.gamemode>div{position:absolute;bottom:0}.gamemode:hover{box-shadow:0 0 10px var(--highlight);transition:.2s}.gamemode>img{width:85%;max-width:100%;max-height:100%}.gamemode>div{left:0;right:0;height:25px;background:var(--highlight);display:flex;justify-content:center;align-items:center;box-shadow:0 -5px 5px #0004;font-weight:800;font-size:1.1em;transition:.25s}.contentPage{inset-inline:0;top:35px}.cheatsList{display:flex;flex-direction:column;height:100%;overflow-y:scroll;padding-inline:10px}.cheatToggle,.cheatToggle>.toggleTrigger,.runCheat{height:35px;border-radius:2.5px}.cheatsList>div{display:grid;margin-bottom:10px;position:relative;background:var(--background);border-radius:2.5px}.cheatInfo,.cheatInputs,.cheatName,.cheatTop,.logMessage>span,.runCheat,.sidebarPath,.sidebarPath>i{display:flex}.cheatInfo{flex-direction:column;flex:1}.cheatName{font-size:1.5em;font-weight:700}.cheatDescription{font-size:.8em;margin-right:25px}.runCheat{--buttonColor:var(--highlight);width:20%;background:var(--buttonColor);margin-block:auto;cursor:pointer;align-items:center;justify-content:center;font-weight:800;transition:.5s;color:#fff!important}.runCheat:hover{box-shadow:0 0 10px 0 var(--buttonColor);transition:.3s}.runCheat:active{box-shadow:0 0 0 0 var(--buttonColor);transition:50ms}.cheatInputs{margin:5px 0 5px 5px;flex-direction:column;gap:5px}.searchResult,.standing{margin-bottom:10px;transition:.2s}.creditsPage>ul>li>strong,.logMessage img,.standingBlook{margin-right:5px}.cheatInputs>div{display:flex;flex-direction:row;font-size:.8rem;color:var(--highlight);font-weight:700;align-items:center}.cheatInputs>div>span{flex:1}.cheatToggle{width:20%;background:var(--highlight2);margin-block:auto;cursor:pointer;position:relative}.cheatToggle>.toggleTrigger{width:45px;position:absolute;top:0;left:0;background:var(--highlight);pointer-events:none;transition:left .2s,box-shadow .5s;z-index:1}.cheatToggle:hover>.toggleTrigger{box-shadow:0 0 10px 0 var(--highlight);transition:left .2s,box-shadow .2s}.toggleTrigger.active{left:calc(100% - 45px)}.toggleColor{position:absolute;inset:10px 20px;background:rgb(from var(--toggleOff) r g b / 25%);border-radius:2.5px;transition:.2s}.toggleTrigger.active+.toggleColor{background:rgb(from var(--toggleOn) r g b / 25%)}input[data-type],select[data-type]{width:20%;height:25px;outline:0;border:2px solid var(--highlight);box-sizing:border-box;background:0 0;color:#fff;font-size:.9em;padding-left:5px;font-family:Nunito;border-radius:2px;font-weight:800}.logo,.sidebarPath>i{width:50px;height:50px}select[data-type]{-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:''}input::placeholder{color:rgb(from var(--textColor) r g b / 50%)}input[data-type]::-webkit-inner-spin-button,input[data-type]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[data-type][type=number]{-moz-appearance:textfield}select[data-type] option{border-radius:0}select[data-type]::-ms-expand{display:none}.sidebarPath{align-items:center;cursor:pointer;transition:.2s 0.1s}.searchResult:hover,.sidebarPath:hover{color:var(--highlight);text-shadow:0 0 5px var(--highlight)}.sidebarPath>i{justify-content:center;align-items:center;font-size:1.5em}.sidebarPath>span{padding-left:5px}.sidebar:hover .sidebarPath{padding-left:20px;transition-delay:0s}.logo{left:0;transition:left .2s .1s;display:grid;place-items:center;min-width:50px;position:absolute}.sidebar:hover .logo{left:28px;transition:left .2s}.bigText{margin-top:-150px;transition:margin-top .1s}.sidebar:hover .bigText{margin-top:0;transition:margin-top .4s 0.1s}.sidebar:hover .bigTextContainer{font-size:2.5em;margin-block:20px;transition:font-size .2s,margin-block .2s}/* === Glowing title effect === */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideOutRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(30px);
  }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes guiFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes guiFadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
@keyframes pageIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.gui {
  animation: guiFadeIn 0.3s ease-out;
}
.gui.hiding {
  animation: guiFadeOut 0.3s ease-out;
}
.creditsPage>ul>li>span{color:var(--textColor2);font-weight:800}.creditsPage>ul>li i{margin-inline:2px;line-height:1}.creditsPage a{color:var(--highlight);text-decoration:none}.creditsPage a:hover,.pathPage:hover{text-decoration:underline}.warning{color:var(--highlight2);font-size:.85em}.searchResult{cursor:pointer}.searchResultName{font-weight:800}.searchResultDescription{font-size:.8em}.searchResultSeparator{font-size:1.5em;font-weight:800;margin-block:10px;cursor:pointer;transition:.2s;border-bottom:2px solid #fff;padding-inline:5px;filter:drop-shadow(0px 0px 0px var(--highlight))}.searchResultSeparator:hover{color:var(--highlight);border-bottom:2px solid var(--highlight);filter:drop-shadow(0px 0px 2.5px var(--highlight))}.toggleCheat{--buttonColor:var(--toggleOff)}.toggleCheat.active{--buttonColor:var(--toggleOn)}.logMessage img{height:1em;align-self:center}.standing{display:flex;font-weight:800;align-items:center;position:relative;padding:5px 10px 5px 50px;border-radius:2.5px;background:var(--highlight2)}.standing:before{content:attr(data-place) ".";margin-right:10px}.standing::after{content:attr(data-value);flex:1;text-align:right;font-weight:100}.standing:hover{background:var(--standingColor);box-shadow:0 0 7.5px var(--standingColor)}.standingBlook{height:1.25em;align-self:center;position:absolute;left:10px}.favoriteButton,.favoriteButton>i{transition:.2s;display:grid;place-items:center;width:32px;height:32px}.favoriteButton{font-size:.8em;padding-left:5px;cursor:pointer}.favoriteButton:hover{color:#ff0}.favoriteButton>i{position:absolute;scale:0;transform-origin:50% 55%}.favoriteButton>i.filled{scale:1}.pathPage{cursor:pointer;color:var(--highlight)}[data-favorited=false],[data-favorites="0"]{display:none}
        [data-mode][data-name][data-description] {}`
            .replace(/\.([^0-9][\w-]+)/gm, (x, y) => "." + (classes[y] ??= randString(10)))
            .replace(/data-(\w+)/gm, (x, y) => "data-" + (datasets[y] ??= randString(10)));
        gui.className = classes.gui;
        gui.append(styles);

        function roundGamemodeBoxes() {
            const gamemodes = gui.querySelectorAll("." + classes.gamemode);
            gamemodes.forEach(tile => {
                tile.style.borderRadius = "15px";
                tile.style.overflow = "hidden";
            });
        }
        setTimeout(roundGamemodeBoxes, 50);
        const sidebarShadow = document.createElement("div");
        sidebarShadow.className = classes.sidebarShadow;
        gui.appendChild(sidebarShadow);
        const credit = document.createElement("div");
        credit.className = classes.credit;
        const sidebar = document.createElement("div");
        sidebar.className = classes.sidebar;
        sidebar.append(credit);
        const guiContent = document.createElement("div");
        guiContent.className = classes.guiContent;
        const guiTopBar = document.createElement("div");
        guiTopBar.className = classes.guiTopBar;
        guiTopBar.style.cursor = "grab";
        dragElement(guiTopBar, gui);
        const version = document.createElement("span");
        version.className = classes.version;
        version.innerText = "Xenostopic " + versionName;
        guiTopBar.append(version);
        const style = document.createElement("style");
        style.textContent = `
.Xenostopic-i {
  width: 16px;
  height: 16px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  pointer-events: none;
}
.Xenostopic-move {
  background-image: url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'>\
<path d='M4 12l4-4v3h8V8l4 4-4 4v-3H8v3z'/>\
</svg>");
}
.Xenostopic-min {
  background-image: url(\"data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'>\
<rect x='4' y='11' width='16' height='2'/>\
</svg>\");
}
.Xenostopic-full {
  background-image: url(\"data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'>\
<path d='M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zm6 10v6h-6v-2h4v-4h2zm-16 6h6v-2H6v-4H4v6z'/>\
</svg>\");
}
.Xenostopic-close {
  background-image: url(\"data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='white' stroke-width='2' fill='none'>\
<line x1='4' y1='4' x2='20' y2='20'/>\
<line x1='20' y1='4' x2='4' y2='20'/>\
</svg>\");
}
`;
        document.head.appendChild(style);
        const controls = document.createElement("div");
        controls.className = classes.controls;
        const moveControl = document.createElement("div");
        moveControl.style.cursor = "grab";
        moveControl.innerHTML = `<i class="Xenostopic-i Xenostopic-move"></i>`;
        dragElement(moveControl, gui);
        const minimizeControl = document.createElement("div");
        minimizeControl.minimized = false;
        let hideAnimation = false;

        function setMinIcon(min) {
            minimizeControl.innerHTML =
                `<i class="Xenostopic-i ${min ? "Xenostopic-min" : "Xenostopic-full"}"></i>`;
        }
        setMinIcon(true);
        minimizeControl.onclick = () => {
            if (hideAnimation) return;
            hideAnimation = true;
            const hidden = minimizeControl.minimized;
            setMinIcon(hidden);
            gui.animate(
                [{
                        width: hidden ? "122px" : "800px",
                        height: hidden ? "27px" : "500px",
                        left: gui.style.left
                    },
                    {
                        width: hidden ? "800px" : "122px",
                        height: hidden ? "500px" : "27px",
                        left: `${parseInt(gui.style.left) + (hidden ? -678 : 678)}px`
                    }
                ], {
                    duration: 200,
                    easing: "ease"
                }
            );
            gui.style.width = hidden ? "800px" : "122px";
            gui.style.height = hidden ? "500px" : "27px";
            setTimeout(() => {
                for (const child of gui.children) {
                    if (child === controls) continue;
                    if (hidden) child.style.display = child._display;
                    else {
                        child._display = child.style.display;
                        child.style.display = "none";
                    }
                }
                hideAnimation = false;
            }, hidden ? 200 : 0);
            gui.style.left = `${parseInt(gui.style.left) + (hidden ? -678 : 678)}px`;
            minimizeControl.minimized = !hidden;
        };
        const closeControl = document.createElement("div");
        closeControl.innerHTML = `<i class="Xenostopic-i Xenostopic-close"></i>`;
        closeControl.onclick = () => {
            const animationsEnabled = getCookieValue("animationsEnabled");
            if (animationsEnabled) {
                const animationDuration = 0.3;
                gui.style.animation = `guiFadeOut ${animationDuration}s ease-out forwards`;
                gui.style.pointerEvents = 'none';
                setTimeout(() => {
                    gui.remove();
                }, animationDuration * 1000);
            } else {
                gui.remove();
            }
        };
        controls.append(moveControl, minimizeControl, closeControl);
        gui.appendChild(controls);
        const PERSIST_KEY = "Xenostopic_state_v4";
        const SHIFT = 678;

        function saveGUIState() {
            try {
                if (gui.dataset.mobileMode === "true") return;
                const rect = gui.getBoundingClientRect();
                const isMin = minimizeControl.minimized;
                let left = parseInt(gui.style.left) || rect.left;
                let top = parseInt(gui.style.top) || rect.top;
                if (isMin) left -= SHIFT;
                const state = {
                    left,
                    top,
                    minimized: isMin
                };
                document.cookie = PERSIST_KEY + "=" + encodeURIComponent(JSON.stringify(state)) + "; path=/; domain=.blooket.com; expires=Tue, 19 Jan 2038 03:14:07 GMT";
            } catch {}
        }

        function loadGUIState() {
            try {
                if (gui.dataset.mobileMode === "true") return {};
                const m = document.cookie.match(new RegExp(PERSIST_KEY + "=([^;]+)"));
                return m ? JSON.parse(decodeURIComponent(m[1])) : {};
            } catch {
                return {};
            }
        }
        (async function restoreGUI() {
            while (!gui || !minimizeControl || !moveControl || gui.children.length < 2) {
                await new Promise(r => setTimeout(r, 25));
            }
            if (gui.dataset.mobileMode === "true") return;
            const s = loadGUIState();
            if (s.left || s.top) {
                gui.style.width = "800px";
                gui.style.height = "500px";
                gui.style.left = s.left + "px";
                gui.style.top = s.top + "px";
                await new Promise(r => setTimeout(r, 20));
                if (s.minimized) minimizeControl.onclick();
            }
        })();
        document.addEventListener("pointerup", () => {
            if (gui.dataset.mobileMode === "true") return;
            setTimeout(saveGUIState, 30);
        });
        window.addEventListener("beforeunload", () => {
            if (gui.dataset.mobileMode === "true") return;
            saveGUIState();
        });
        const gamemodesPage = document.createElement("div");
        gamemodesPage.className = classes.gamemodesPage;
        const gamemodesList = document.createElement("div");
        gamemodesList.className = classes.noScroll + " " + classes.gamemodesList;
        gamemodesPage.append(gamemodesList);
        const path = [
            ["Gamemodes", gamemodesPage]
        ];
        window.XenostopicAnimationsEnabled = true;
        const getCookieValue = (name) => {
            const cookieValue = getCookie(name);
            return cookieValue === null ? true : cookieValue === "true";
        };
        setTimeout(() => {
            window.XenostopicAnimationsEnabled = getCookieValue("animationsEnabled");
        }, 10);
        const pathText = document.createElement("div");
        pathText.className = classes.pathText;
        path.createPage = function(name, index, current) {
            const page = document.createElement("span");
            page.innerText = name;
            if (!current) page.className = classes.pathPage;
            page.onclick = () => this.goto(index);
            return page;
        };
        path.updatePath = function() {
            pathText.innerHTML = "";
            pathText.append(this.createPage(this[0][0], 0, this.length == 1));
            for (let i = 1; i < this.length; i++) {
                pathText.append(" > ");
                pathText.append(this.createPage(this[i][0], i, this.length - 1 == i));
            }
            guiContent.innerHTML = "";
            const newPage = this[this.length - 1][1];
            guiContent.append(newPage);
            if (window.XenostopicAnimationsEnabled && newPage) {
                newPage.style.animation = "pageIn 0.3s ease-out";
            } else if (newPage) {
                newPage.style.animation = "none";
            }
            this[this.length - 1][1]?.onPath?.();
        };
        path.push = function(key, page) {
            Array.prototype.push.call(this, [key, page]);
            this.updatePath();
            return this.length;
        };
        path.goto = function(index) {
            while (this.length - 1 > index) this.pop();
            this.updatePath();
        };
        path.sidebar = function(key, page) {
            while (this.length > 0) this.pop();
            return this.push(key, page);
        };
        const leaderboardPage = document.createElement("div");
        leaderboardPage.className = classes.leaderboardPage;
        const leaderboardList = document.createElement("ul");
        leaderboardList.className = classes.noScroll + " " + classes.leaderboardList;
        const noLeaderboard = document.createElement("span");
        noLeaderboard.className = classes.noResult;
        noLeaderboard.innerText = "No leaderboard data. Join a game to see standings.";
        leaderboardPage.append(noLeaderboard, leaderboardList);
        const logsPage = document.createElement("div");
        logsPage.className = classes.logsPage;
        const logMessages = document.createElement("ul");
        logMessages.className = classes.noScroll + " " + classes.logMessages;
        const clearLogsButton = document.createElement("div");
        clearLogsButton.className = classes.clearLogsButton;
        clearLogsButton.innerHTML = `<i class="fas fa-ban" style="line-height: 1"></i>`;
        logsPage.append(logMessages, clearLogsButton);
        const Logs = {
            connection: null,
            standings: [],
            data: {},
            gamemodeData: {
                gold: {
                    sort: "g",
                },
                hack: {
                    sort: "cr",
                },
                fish: {
                    sort: "w",
                },
                pirate: {
                    sort: "d",
                },
                defense2: {
                    sort: "d",
                },
                brawl: {
                    sort: "xp",
                    upgrades: {
                        egg: "Rapid Eggs",
                        nut: "Crazy Acorns",
                        slime: "Bouncing Slime",
                        jesterBall: "Juggling Spheres",
                        horseshoe: "Revolving Horseshoes",
                        shell: "Rebounding Shell",
                        pizza: "Boomerang Pizza",
                        banana: "Curving Banana",
                        arrow: "Speeding Arrows",
                        peacock: "Peacock Feathers",
                        bone: "Whirling Bones",
                        bee: "Buzzing Bees",
                        bubble: "Booming Bubbles",
                        card: "Slicing Cards",
                        laser: "Rapid-fire Lasers",
                        darkEnergy: "Dark Energy",
                        syrup: "Sticky Syrup",
                        birdFeather: "Flying Feathers",
                    },
                },
                dino: {
                    sort: "f",
                },
                royale: {
                    sort: "e",
                },
                defense: {
                    sort: "d",
                },
                cafe: {
                    sort: "ca",
                },
                factory: {
                    sort: "ca",
                    glitches: {
                        lb: "Lunch Break",
                        as: "Ad Spam",
                        e37: "Error 37",
                        nt: "Night Time",
                        lo: "#LOL",
                        j: "Jokester",
                        sm: "Slow Mo",
                        dp: "Dance Party",
                        v: "Vortex",
                        r: "Reverse",
                        f: "Flip",
                        m: "Micro"
                    },
                },
                racing: {
                    sort: "pr",
                },
                rush: {
                    sort: "bs",
                },
                classic: {
                    sort: "p",
                },
                tower: {},
                kingdom: {},
                toy: {
                    sort: "t",
                    sabotages: {
                        c: "Oh Canada",
                        b: "Blizzard",
                        f: "Fog Spell",
                        d: "Dark & Dusk",
                        w: "Howling Wind",
                        g: "Gift Time!",
                        t: "TREES",
                        s: "Snow Plow",
                        fr: "Use The Force"
                    },
                },
            },
            exponents: ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
            formatNumber(input) {
                const [number, exponent] = (input = parseFloat(input)).toLocaleString(undefined, {
                    notation: "engineering"
                }).toLowerCase().split("e");
                if (exponent < 15) return number + ["", "k", "M", "B", "T"][exponent / 3];
                const [num, exp] = input.toLocaleString(undefined, {
                    notation: "scientific"
                }).toLowerCase().split("e");
                return num + " \xd7 10" + exp.split("").reduce((a, b) => a + Logs.exponents[b], "");
            },
            leaderboardCache: {},
            colyseusInterval: null,
            firebaseInterval: null,
            selectedStanding: null,
            getLiveGameController() {
                let stateNode;
                try {
                    stateNode = getStateNode();
                } catch (error) {
                    void error;
                }
                if (stateNode?.props?.liveGameController) return stateNode.props.liveGameController;
                try {
                    const node = Object.values(document.querySelector("#app > div > div"))[1]?.children?.[0]?._owner?.stateNode;
                    if (node?.props?.liveGameController) return node.props.liveGameController;
                } catch (error) {
                    void error;
                }
                return null;
            },
            getBlookFallbackUrl(blookName) {
                const normalizedName = String(blookName || "Black")
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "");
                if (!normalizedName) return "https://ac.blooket.com/marketassets/blooks/black.svg";
                return `https://ac.blooket.com/marketassets/blooks/${normalizedName}.svg`;
            },
            createStandingElement(name) {
                const element = document.createElement("li");
                element.className = classes.standing;
                const blook = document.createElement("img");
                blook.className = classes.standingBlook;
                const info = document.createElement("div");
                info.style.flex = "1";
                info.style.minWidth = "0";
                info.style.display = "flex";
                info.style.flexDirection = "column";
                const standingName = document.createElement("div");
                standingName.style.whiteSpace = "nowrap";
                standingName.style.overflow = "hidden";
                standingName.style.textOverflow = "ellipsis";
                const standingDetails = document.createElement("div");
                standingDetails.style.fontSize = ".5em";
                standingDetails.style.opacity = ".8";
                standingDetails.style.fontWeight = "400";
                standingDetails.style.whiteSpace = "nowrap";
                standingDetails.style.overflow = "hidden";
                standingDetails.style.textOverflow = "ellipsis";
                info.append(standingName, standingDetails);
                element.append(blook, info);
                element._nameEl = standingName;
                element._detailsEl = standingDetails;
                element.style.cursor = "pointer";
                element.onclick = () => {
                    Logs.selectedStanding = Logs.selectedStanding === name ? null : name;
                    Logs.setLeaderboard(Logs.standings || []);
                };
                return (Logs.leaderboardCache[name] = element);
            },
            stringifyPlayerData(data) {
                if (!data || typeof data !== "object") return "";
                return Object.entries(data)
                    .map(([key, value]) => {
                        if (typeof value === "object" && value !== null) {
                            try {
                                value = JSON.stringify(value);
                            } catch {
                                value = "[Object]";
                            }
                        }
                        return `${key}: ${value}`;
                    })
                    .join(" | ");
            },
            extractPlayerData(player) {
                if (!player || typeof player !== "object") return {};
                const normalized = {};
                for (const key in player) {
                    try {
                        const value = player[key];
                        if (typeof value === "function" || typeof value === "symbol" || value === undefined) continue;
                        if (typeof value === "object" && value !== null) {
                            try {
                                normalized[key] = JSON.parse(JSON.stringify(value));
                            } catch {
                                normalized[key] = "[Object]";
                            }
                        } else normalized[key] = value;
                    } catch {}
                }
                return normalized;
            },
            setLeaderboard(standings) {
                noLeaderboard.style.display = standings.length > 0 ? "none" : "block";
                leaderboardList.innerHTML = "";
                Logs.standings = standings;
                if (Logs.selectedStanding && !standings.some((s) => s.name === Logs.selectedStanding)) Logs.selectedStanding = null;
                let place = 1;
                let blookInfo;
                for (let i = 0; i < standings.length; i++) {
                    const standing = standings[i];
                    const standingEl = Logs.leaderboardCache[standing.name] || Logs.createStandingElement(standing.name);
                    const blookName = standing.blookName || standing.blook || standing.extraData?.blook || standing.extraData?.b || Logs.data[standing.name]?.b || "Black";
                    blookInfo = Logs.blookData?.[blookName] || Logs.blookData?.["Black"] || {
                        url: Logs.getBlookFallbackUrl(blookName),
                        color: "#888"
                    };
                    standingEl.firstChild.src = blookInfo.url || Logs.getBlookFallbackUrl(blookName);
                    standingEl.firstChild.onerror = () => {
                        if (standingEl.firstChild.src !== Logs.getBlookFallbackUrl("Black")) {
                            standingEl.firstChild.src = Logs.getBlookFallbackUrl("Black");
                            return;
                        }
                        standingEl.firstChild.onerror = null;
                        standingEl.firstChild.src = "data:image/gif;base64,R0lGODlhAQABAAAAACw=";
                    };
                    standingEl.firstChild.alt = `${blookName} blook`;
                    standingEl.style.setProperty("--standingColor", blookInfo.color);
                    if (standingEl._nameEl) standingEl._nameEl.innerText = standing.name;
                    const fullDetails = standing.detailsText || Logs.stringifyPlayerData(standing.extraData);
                    const collapsedDetails = `Score: ${Logs.formatNumber(standing.value)}`;
                    const isSelected = Logs.selectedStanding === standing.name;
                    if (standingEl._detailsEl) standingEl._detailsEl.innerText = isSelected ? (fullDetails || "No extra player data") : collapsedDetails;
                    standingEl.title = isSelected ? (fullDetails || standing.name) : `${standing.name} (click for full data)`;
                    standingEl.dataset[datasets.value] = Logs.formatNumber(standing.value);
                    if (standings[i - 1]?.value != standings[i].value) place = i + 1;
                    standingEl.dataset[datasets.place] = place;
                    leaderboardList.append(standingEl);
                }
            },
            blookData: null,
            fetchBlooks() {
                return (
                    Logs.blookData ??
                    new Promise((r) => {
                        var i = document.createElement("iframe");
                        i.style.display = "none";
                        var s = document.createElement("script");
                        s.type = "module";
                        s.src = document.querySelector("script[src*='ac.blooket.com']").src + "?" + Date.now();
                        const a = document.createElement("div");
                        a.id = "app";
                        let blooks = {};
                        document.body.appendChild(i);
                        let finish;
                        i.contentWindow.Object.prototype.hasOwnProperty.call = function(a, b) {
                            if (a[b]?.rarity && a in blooks == false) Object.assign(blooks, a);
                            finish ??= setTimeout(() => {
                                document.body.removeChild(i);
                                r((Logs.blookData = blooks));
                            });
                            return Object.prototype.hasOwnProperty.call(a, b);
                        };
                        i.contentDocument.body.appendChild(a);
                        i.contentDocument.body.appendChild(s);
                    })
                );
            },
            connectColyseus() {
                if (!window.colyseus) return false;
                if (Logs.colyseusInterval) return true;
                Logs.fetchBlooks().catch(() => {});
                Logs.colyseusInterval = setInterval(() => {
                    if (!window.colyseus) {
                        clearInterval(Logs.colyseusInterval);
                        Logs.colyseusInterval = null;
                        return;
                    }
                    try {
                        const players = window.colyseus.getAllPlayers();
                        if (!players || players.length === 0) return;
                        const standings = players
                            .map(({
                                name,
                                player
                            }) => {
                                const playerData = Logs.extractPlayerData(player);
                                return {
                                    name: playerData?.name || name || "Unknown",
                                    blookName: playerData?.blook || playerData?.b || "Black",
                                    value: playerData?.tokens ?? playerData?.score ?? playerData?.points ?? 0,
                                    extraData: playerData
                                };
                            })
                            .sort((a, b) => b.value - a.value);
                        Logs.setLeaderboard(standings);
                    } catch (e) {
                        console.warn("Colyseus leaderboard error:", e);
                    }
                }, 1000);
                return true;
            },
            handleFirebasePlayers(players, gamemode) {
                if (!players) players = {};
                let added;
                if (!(added = Logs.diffObjects(Logs.data, players))) return;
                Logs.data = players;
                if (Logs.gamemodeData[gamemode]?.sort) {
                    Logs.standings = Object.entries(players)
                        .map(([name, data]) => ({
                            name,
                            blook: data?.b,
                            blookName: data?.b,
                            value: data?.[Logs.gamemodeData[gamemode].sort] || 0,
                            extraData: data || {}
                        }))
                        .sort((a, b) => b.value - a.value);
                    Logs.setLeaderboard(Logs.standings);
                }
                try {
                    let addedPlayer;
                    switch (gamemode) {
                        case "brawl":
                            for (const player in added) {
                                if (!(addedPlayer = added[player]).up) continue;
                                const upgrade = addedPlayer.up.split(":");
                                if (upgrade.length == 2 && upgrade[0] in Logs.gamemodeData.brawl.upgrades) Logs.addAlert(player, `upgraded ${Logs.gamemodeData.brawl.upgrades[upgrade[0]]} to level ${upgrade[1]}`);
                            }
                            break;
                        case "gold":
                            for (const player in added) {
                                if (!(addedPlayer = added[player]).tat) continue;
                                const [tat, amount] = addedPlayer.tat.split(":");
                                if (amount == "swap") Logs.addAlert(player, `just swapped ${document.querySelector("[src*='assets/candy']") ? "candy" : "gold"} with ${tat}`);
                                else Logs.addAlert(player, `just took ${Logs.formatNumber(parseInt(amount))} ${document.querySelector("[src*='assets/candy']") ? "candy" : "gold"} from ${tat}`);
                            }
                            break;
                        case "toy":
                            for (const player in added) {
                                if ((addedPlayer = added[player]).s) Logs.addAlert(player, `sabotaged with "${Logs.gamemodeData.toy.sabotages[addedPlayer.s]}"`);
                                else if (addedPlayer.tat) {
                                    const [tat, amount] = addedPlayer.tat.split(":");
                                    if (amount == "swap") Logs.addAlert(player, `just swapped toys with ${tat}`);
                                    else Logs.addAlert(player, `just took ${Logs.formatNumber(parseInt(amount))} toy${amount == 1 ? "" : "s"} from ${tat}`);
                                }
                            }
                            break;
                        case "hack":
                            for (const player in added) {
                                if (!(addedPlayer = added[player]).tat) continue;
                                const [tat, amount] = addedPlayer.tat.split(":");
                                Logs.addAlert(player, `just took ${Logs.formatNumber(parseInt(amount))} crypto from ${tat}`);
                            }
                            break;
                        case "pirate":
                            for (const player in added) {
                                if (!(addedPlayer = added[player]).tat) continue;
                                const [tat, amount] = addedPlayer.tat.split(":");
                                Logs.addAlert(player, `just took ${Logs.formatNumber(parseInt(amount))} doubloons from ${tat}`);
                            }
                            break;
                        case "defense2":
                            for (const player in added) {
                                if (!(addedPlayer = added[player]).r) continue;
                                Logs.addAlert(player, `just completed Round ${addedPlayer.r}!`);
                            }
                            break;
                        case "fish":
                            for (const player in added) {
                                if ((addedPlayer = added[player]).f == "Frenzy") Logs.addAlert(player, `just started a frenzy`);
                                else if (addedPlayer.s) Logs.addAlert(player, `just sent a ${addedPlayer.f} distraction`);
                            }
                            break;
                        case "dino":
                            for (const player in added) {
                                if (!(addedPlayer = added[player]).tat) continue;
                                const [tat, caught] = addedPlayer.tat.split(":");
                                if (caught == "true") Logs.addAlert(player, `just caught ${tat} CHEATING!`);
                                else Logs.addAlert(player, `investigated ${tat}`);
                            }
                            break;
                        case "cafe":
                            for (const player in added) {
                                if (!(addedPlayer = added[player]).up) continue;
                                const [upgrade, level] = addedPlayer.up.split(":");
                                if (level) Logs.addAlert(player, `upgraded ${upgrade} to level ${level}`);
                            }
                            break;
                        case "factory":
                            for (const player in added) {
                                if ((addedPlayer = added[player]).g) Logs.addAlert(player, `activated the ${Logs.gamemodeData.factory.glitches[addedPlayer.g]} glitch!`);
                                else if (addedPlayer.s) {
                                    const [amount, synergy] = addedPlayer.s.split("-");
                                    Logs.addAlert(player, `has a ${amount} ${synergy} synergy!`);
                                } else if (addedPlayer.t) Logs.addAlert(player, `now has 10 Blooks!`);
                            }
                            break;
                    }
                } catch (e) {
                    console.error(e);
                    Logs.addLog("Error adding an alert", "red");
                }
            },
            async connect() {
                try {
                    if (window.colyseus) {
                        if (Logs.firebaseInterval) {
                            clearInterval(Logs.firebaseInterval);
                            Logs.firebaseInterval = null;
                        }
                        return Logs.connectColyseus();
                    }
                    if (Logs.colyseusInterval) {
                        clearInterval(Logs.colyseusInterval);
                        Logs.colyseusInterval = null;
                    }
                    const liveGameController = Logs.getLiveGameController();
                    if (!liveGameController) return false;
                    await Logs.fetchBlooks();
                    const gamemode = Logs.getGamemode();
                    if (gamemode === "hack" || gamemode === "gold" || gamemode === "fish") {
                        if (Logs.firebaseInterval) return true;
                        Logs.firebaseInterval = setInterval(() => {
                            try {
                                liveGameController.getDatabaseVal("c", (players) => {
                                    Logs.handleFirebasePlayers(players || {}, gamemode);
                                });
                            } catch (e) {
                                console.warn("Firebase leaderboard poll error:", e);
                            }
                        }, 1000);
                        liveGameController.getDatabaseVal("c", (players) => {
                            Logs.handleFirebasePlayers(players || {}, gamemode);
                        });
                        return true;
                    }
                    Logs.connection = await liveGameController.getDatabaseRef("c");
                    if (!Logs.connection) return false;
                    Logs.connection.on("value", (snapshot) => {
                        Logs.handleFirebasePlayers(snapshot.val() || {}, gamemode);
                    });
                    return true;
                } catch (e) {
                    console.warn(e);
                    return false;
                }
            },
            diffObjects(obj1, obj2) {
                const changed = {};
                for (const key in obj1) {
                    if (!(key in obj2)) continue;
                    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
                        const recChanged = Logs.diffObjects(obj1[key], obj2[key]);
                        if (recChanged && Object.keys(recChanged).length !== 0) changed[key] = recChanged;
                    } else if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) changed[key] = obj2[key];
                }
                for (const key in obj2)
                    if (!(key in obj1)) changed[key] = obj2[key];
                if (Object.keys(changed).length == 0) return null;
                return changed;
            },
            getGamemode() {
                const gamemode = getStateNode().props?.client?.type;
                if (typeof gamemode == "string") {
                    const normalized = gamemode.toLowerCase();
                    if (normalized == "fishing") return "fish";
                    if (normalized == "goldquest") return "gold";
                    if (normalized == "cryptohack") return "hack";
                    return normalized;
                }
                switch (window.location.pathname) {
                    case "/play/gold":
                    case "/play/gold/final":
                    case "/gold/play/landing":
                        return "gold";
                    case "/play/hack":
                    case "/play/hack/final":
                    case "/hack/play/landing":
                        return "hack";
                    case "/play/fishing":
                    case "/play/fishing/final":
                    case "/fish/play/landing":
                        return "fish";
                    case "/play/pirate":
                    case "/play/pirate/final":
                    case "/pirate/play/landing":
                        return "pirate";
                    case "/play/defense2/load":
                    case "/play/defense2":
                    case "/play/defense2/final":
                    case "/defense2/play/landing":
                        return "defense2";
                    case "/play/brawl/start":
                    case "/play/brawl/settings":
                    case "/play/brawl":
                    case "/play/brawl/final":
                    case "/brawl/play/landing":
                        return "brawl";
                    case "/play/dino":
                    case "/play/dino/final":
                    case "/dino/play/landing":
                        return "dino";
                    case "/play/battle-royale/match/preview":
                    case "/play/battle-royale/question":
                    case "/play/battle-royale/answer/sent":
                    case "/play/battle-royale/answer/result":
                    case "/play/battle-royale/match/result":
                    case "/play/battle-royale/final":
                    case "/royale/play/landing":
                        return "royale";
                    case "/defense/load":
                    case "/defense":
                    case "/defense/final":
                    case "/defense/play/landing":
                        return "defense";
                    case "/cafe/load":
                    case "/cafe":
                    case "/cafe/shop":
                    case "/cafe/final":
                    case "/cafe/play/landing":
                        return "cafe";
                    case "/play/factory":
                    case "/play/factory/settings":
                    case "/play/factory/start":
                    case "/play/factory/final":
                    case "/factory/play/landing":
                        return "factory";
                    case "/play/racing":
                    case "/play/racing/final":
                    case "/racing/play/landing":
                        return "racing";
                    case "/play/rush":
                    case "/play/rush/final":
                    case "/rush/play/landing":
                        return "rush";
                    case "/play/classic/get-ready":
                    case "/play/classic/question":
                    case "/play/classic/answer/sent":
                    case "/play/classic/answer/result":
                    case "/play/classic/standings":
                    case "/play/classic/final":
                    case "/classic/play/landing":
                        return "classic";
                    case "/tower/load":
                    case "/tower/start":
                    case "/tower/map":
                    case "/tower/battle":
                    case "/tower/rest":
                    case "/tower/risk":
                    case "/tower/shop":
                    case "/tower/victory":
                    case "/tower/final":
                    case "/tower/play/landing":
                        return "tower";
                    case "/kingdom/start":
                    case "/kingdom":
                    case "/kingdom/final":
                    case "/kingdom/play/landing":
                        return "kingdom";
                    case "/play/toy":
                    case "/play/toy/final":
                    case "/toy/play/landing":
                        return "toy";
                }
                return "";
            },
            sanitizer: document.createElement("div"),
            sanitizeText(text) {
                Logs.sanitizer.textContent = text;
                return Logs.sanitizer.innerHTML;
            },
            addAlert(name, message) {
                const element = document.createElement("li");
                element.className = classes.logMessage;
                const span = document.createElement("span");
                Logs.lastLog.setTime(Date.now());
                span.innerHTML = `<strong>${Logs.sanitizeText(name)}</strong>&nbsp;${Logs.sanitizeText(message)}<span style="opacity: 50%; flex: 1; text-align: right;">${parseTime(Logs.lastLog)}</span>`;
                let blook;
                if ((blook = Logs.blookData?.[Logs.data[name].b])) {
                    const img = document.createElement("img");
                    img.src = blook.url;
                    span.prepend(img);
                }
                element.append(span);
                logMessages.prepend(element);
            },
            lastLog: new Date(),
            addLog(message, color) {
                const element = document.createElement("li");
                element.className = classes.logMessage;
                const span = document.createElement("span");
                if (color) span.style.color = color;
                span.style.display = "flex";
                Logs.lastLog.setTime(Date.now());
                span.innerHTML = "[LOG] " + Logs.sanitizeText(message) + `<span style="opacity: 50%; flex: 1; text-align: right;">${parseTime(Logs.lastLog)}</span>`;
                element.append(span);
                logMessages.prepend(element);
            },
            interval: null,
        };
        if (window.location.host != "dashboard.blooket.com" && window.location.host != "blooket.com") Logs.interval = setInterval(() => Logs.connect().then((connected) => connected && clearInterval(Logs.interval)), 5000);
        clearLogsButton.onclick = () => {
            clearLogsButton.animate([{
                rotate: "0deg"
            }, {
                rotate: "360deg"
            }], {
                duration: 750,
                easing: "ease"
            });
            logMessages.innerHTML = "";
            Logs.addLog("Cleared Logs");
        };

        function createFunctionFromCode(code, ...params) {
            try {
                code = code.trim();
                const iifePattern = /^\(.*\)\(\);?$/s;
                if (iifePattern.test(code)) {
                    return new Function(code);
                }
                if (code.startsWith('function')) {
                    return eval(`(${code})`);
                }
                if (code.includes('=>')) {
                    return eval(`(${code})`);
                }
                if (params.length > 0) {
                    return new Function(...params, code);
                } else {
                    return new Function(code);
                }
            } catch (error) {
                console.error('Error creating function from code:', error);
                console.error('Code:', code);
                return function() {
                    console.error('Failed to execute custom module due to syntax error');
                };
            }
        }
        const cheats = {
            global: {
                img: "https://ac.blooket.com/dashclassic/assets/Blooket-M6jYh_hk.png",
                name: "Global",
                cheats: [{
                        name: "Auto Answer",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const stateNode = getStateNode();
                                    const Question = stateNode.state.question || stateNode.props.client.question;
                                    if (stateNode.state.question.qType != "typing") {
                                        if (stateNode.state.stage != "feedback" && !stateNode.state.feedback) {
                                            let ind;
                                            for (ind = 0; ind < Question.answers.length; ind++) {
                                                let found = false;
                                                for (let j = 0; j < Question.correctAnswers.length; j++)
                                                    if (Question.answers[ind] == Question.correctAnswers[j]) {
                                                        found = true;
                                                        break;
                                                    }
                                                if (found) break;
                                            }
                                            document.querySelectorAll("[class*='answerContainer']")[ind].click();
                                        } else document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
                                    } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(Question.answers[0]);
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Highlight Answers",
                        description: "Toggles highlight answers on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const stateNode = getStateNode();
                                    const Question = stateNode.state.question || stateNode.props.client.question;
                                    let ind = 0;
                                    while (ind < Question.answers.length) {
                                        let found = false;
                                        for (let j = 0; j < Question.correctAnswers.length; j++)
                                            if (Question.answers[ind] == Question.correctAnswers[j]) {
                                                found = true;
                                                break;
                                            }
                                        ind++;
                                        document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.backgroundColor = found ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)";
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Subtle Highlight Answers",
                        description: "Toggles subtle highlight answers on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const stateNode = getStateNode();
                                    const Question = stateNode.state.question || stateNode.props.client.question;
                                    let ind = 0;
                                    while (ind < Question.answers.length) {
                                        let j = 0;
                                        let found = false;
                                        while (j < Question.correctAnswers.length) {
                                            if (Question.answers[ind] == Question.correctAnswers[j]) {
                                                found = true;
                                                break;
                                            }
                                            j++;
                                        }
                                        ind++;
                                        if (found) document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.boxShadow = "unset";
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Always Correct (Client-Sided)",
                        description: "Makes all answers appear correct locally (Only works in colyseus gamemodes)",
                        type: "toggle",
                        enabled: false,
                        data: {
                            answers: []
                        },
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                if (window.hook && window.hook.intercept) {
                                    window.hook.intercept.enable();
                                    window.hook.intercept.incoming(true);
                                    this.data = {
                                        answers: []
                                    };
                                    window.hook.intercept.add('showQuestion', (data) => {
                                        if (data && data.answers && Array.isArray(data.answers)) {
                                            this.data.answers = [...data.answers];
                                        }
                                        return data;
                                    }, 'IN');
                                    window.hook.intercept.add('answerResult', (data) => {
                                        if (data) {
                                            data.isCorrect = true;
                                            if (this.data.answers.length > 0) {
                                                data.correctAnswers = [...this.data.answers];
                                            }
                                        }
                                        return data;
                                    }, 'IN');
                                }
                            } else {
                                this.enabled = false;
                                if (window.hook && window.hook.intercept) {
                                    window.hook.intercept.remove('showQuestion');
                                    window.hook.intercept.remove('answerResult');
                                    window.hook.intercept.disable();
                                }
                                this.data = {
                                    answers: []
                                };
                            }
                        }
                    }, {
                        name: "Learn Auto Answer",
                        description: "Toggles Learn Auto Answer on. This version works in the modes that auto answer doesnt work in, but can only learn answers if you've seen them before.",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                (() => {
                                    console.log("🧠 Learn Auto Answer v3.3\n");
                                    if (!window.answerDatabase) {
                                        window.answerDatabase = {};
                                    }

                                    function autoContinue() {
                                        const feedbackContainer = document.querySelector('[class*="feedbackContainer"]');
                                        const feedbackText = document.querySelector('[class*="feedbackText"]');
                                        const isFeedback = feedbackContainer || (feedbackText && feedbackText.offsetParent !== null);
                                        if (isFeedback) {
                                            if (feedbackContainer) feedbackContainer.click();
                                            else document.body.click();
                                            const event = new KeyboardEvent('keydown', {
                                                key: 'Enter',
                                                code: 'Enter',
                                                keyCode: 13,
                                                which: 13,
                                                bubbles: true
                                            });
                                            document.dispatchEvent(event);
                                        }
                                    }

                                    function learn() {
                                        const wrappers = document.querySelectorAll('[class*="questionWrapper"]');
                                        wrappers.forEach(wrapper => {
                                            const questionTextEl = wrapper.querySelector('[class*="questionText"]');
                                            if (!questionTextEl) return;
                                            let questionMedia = wrapper.querySelector('[class*="questionImage"]');
                                            let qMediaSrc = questionMedia ? questionMedia.src : "none";
                                            let questionMath = wrapper.querySelector('[class*="mq-selectable"]');
                                            let qMathText = questionMath ? questionMath.innerText.trim() : "none";
                                            const question = questionTextEl.textContent.trim() + " " + qMediaSrc + " " + qMathText;
                                            const correctBtn = Array.from(wrapper.querySelectorAll('[class*="answerButton"]')).find(btn =>
                                                btn.innerHTML.includes('fa-check') ||
                                                (btn.style.backgroundColor && btn.style.backgroundColor.includes('rgb(139, 220, 111)')) ||
                                                (btn.querySelector('[class*="answerFront"]') && btn.querySelector('[class*="answerFront"]').style.backgroundColor.includes('rgb(139, 220, 111)'))
                                            );
                                            if (correctBtn) {
                                                const textEl = correctBtn.querySelector('[class*="answerText"]');
                                                const mathEl = correctBtn.querySelector('[class*="mq-selectable"]');
                                                const answer = textEl ? textEl.textContent.trim() : (mathEl ? mathEl.innerText.trim() : null);
                                                if (answer && !window.answerDatabase[question]) {
                                                    window.answerDatabase[question] = [answer];
                                                    console.log(`✓ Learned (MC): "${question}" → "${answer}"`);
                                                }
                                            }
                                            const rawTypingEls = Array.from(wrapper.querySelectorAll('[class*="typingFeedbackAnswer"]'));
                                            const realTypingAnswers = rawTypingEls.filter(el => {
                                                const cls = el.getAttribute('class') || "";
                                                return !cls.includes('Answers') && !cls.includes('Icon');
                                            });
                                            if (realTypingAnswers.length > 0) {
                                                const answer = realTypingAnswers[0].textContent.trim();
                                                if (!window.answerDatabase[question]) {
                                                    window.answerDatabase[question] = [answer];
                                                    console.log(`✓ Learned (Typing): "${question}" → "${answer}"`);
                                                }
                                            }
                                        });
                                    }

                                    function answer() {
                                        const wrappers = document.querySelectorAll('[class*="questionWrapper"]');
                                        if (wrappers.length === 0) return;
                                        let activeWrapper = wrappers[wrappers.length - 1];
                                        const questionTextEl = activeWrapper.querySelector('[class*="questionText"]');
                                        if (!questionTextEl) return;
                                        let questionMedia = activeWrapper.querySelector('[class*="questionImage"]');
                                        let qMediaSrc = questionMedia ? questionMedia.src : "none";
                                        let questionMath = activeWrapper.querySelector('[class*="mq-selectable"]');
                                        let qMathText = questionMath ? questionMath.innerText.trim() : "none";
                                        const question = questionTextEl.textContent.trim() + " " + qMediaSrc + " " + qMathText;
                                        if (window.answerDatabase[question]) {
                                            const knownAnswer = window.answerDatabase[question][0];
                                            const buttons = activeWrapper.querySelectorAll('[class*="answerButton"]');
                                            for (const btn of buttons) {
                                                const textEl = btn.querySelector('[class*="answerText"]');
                                                const mathEl = btn.querySelector('[class*="mq-selectable"]');
                                                const btnText = textEl ? textEl.textContent.trim() : (mathEl ? mathEl.innerText.trim() : "");
                                                if (btnText === knownAnswer && !btn.className.includes('Disabled')) {
                                                    console.log(`🎯 Answering (MC): "${question}"`);
                                                    btn.click();
                                                    return;
                                                }
                                            }
                                            const input = activeWrapper.querySelector('input[class*="typingAnswerInput"]');
                                            if (input && !input.disabled) {
                                                if (input.value !== knownAnswer) {
                                                    console.log(`🎯 Typing: "${knownAnswer}"`);
                                                    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                                                    setter.call(input, knownAnswer);
                                                    input.dispatchEvent(new Event('input', {
                                                        bubbles: true
                                                    }));
                                                    input.dispatchEvent(new Event('change', {
                                                        bubbles: true
                                                    }));
                                                }
                                                const submitBtn = activeWrapper.querySelector('button[class*="typingAnswerButton"]');
                                                if (submitBtn && (!submitBtn._lastClick || Date.now() - submitBtn._lastClick > 200)) {
                                                    submitBtn.click();
                                                    submitBtn._lastClick = Date.now();
                                                }
                                            }
                                        }
                                    }
                                    this.data = setInterval(() => {
                                        autoContinue();
                                        learn();
                                        answer();
                                    }, 50);
                                    console.log("✅ Script Active.");
                                })();
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    }, {
                        name: "Learn Highlight Answer",
                        description: "Toggles Learn Highlight Answer on. This version works in the modes that highlight answers doesnt work in, but can only learn answers if you've seen them before.",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                (() => {
                                    console.log("🎨 Highlight Answers Active (Green = Correct, Red = Wrong)\n");
                                    if (!window.answerDatabase) {
                                        window.answerDatabase = {};
                                    }

                                    function autoContinue() {
                                        const feedbackContainer = document.querySelector('[class*="feedbackContainer"]');
                                        const feedbackText = document.querySelector('[class*="feedbackText"]');
                                        const isFeedback = feedbackContainer ||
                                            (feedbackText && feedbackText.offsetParent !== null);
                                        if (isFeedback) {
                                            if (feedbackContainer) {
                                                feedbackContainer.click();
                                            } else {
                                                document.body.click();
                                            }
                                            const event = new KeyboardEvent('keydown', {
                                                key: 'Enter',
                                                code: 'Enter',
                                                keyCode: 13,
                                                which: 13,
                                                bubbles: true
                                            });
                                            document.dispatchEvent(event);
                                        }
                                    }

                                    function learn() {
                                        const wrappers = document.querySelectorAll('[class*="questionWrapper"]');
                                        wrappers.forEach(wrapper => {
                                            const questionTextEl = wrapper.querySelector('[class*="questionText"]');
                                            if (!questionTextEl) return;
                                            let questionMedia = wrapper.querySelector('[class*="questionImage"]');
                                            let qMediaSrc = questionMedia ? questionMedia.src : "none";
                                            let questionMath = wrapper.querySelector('[class*="mq-selectable"]');
                                            let qMathText = questionMath ? questionMath.innerText.trim() : "none";
                                            const question = questionTextEl.textContent.trim() + " " + qMediaSrc + " " + qMathText;
                                            const correctBtn = Array.from(wrapper.querySelectorAll('[class*="answerButton"]')).find(btn =>
                                                btn.innerHTML.includes('fa-check') ||
                                                (btn.style.backgroundColor && btn.style.backgroundColor.includes('rgb(139, 220, 111)')) ||
                                                (btn.querySelector('[class*="answerFront"]') && btn.querySelector('[class*="answerFront"]').style.backgroundColor.includes('rgb(139, 220, 111)'))
                                            );
                                            if (correctBtn) {
                                                const textEl = correctBtn.querySelector('[class*="answerText"]');
                                                const mathEl = correctBtn.querySelector('[class*="mq-selectable"]');
                                                const answer = textEl ? textEl.textContent.trim() : (mathEl ? mathEl.innerText.trim() : null);
                                                if (answer && !window.answerDatabase[question]) {
                                                    window.answerDatabase[question] = [answer];
                                                    console.log(`✓ Learned (MC): "${question}" → "${answer}"`);
                                                }
                                            }
                                            const rawTypingEls = Array.from(wrapper.querySelectorAll('[class*="typingFeedbackAnswer"]'));
                                            const realTypingAnswers = rawTypingEls.filter(el => {
                                                const cls = el.getAttribute('class') || "";
                                                return !cls.includes('Answers') && !cls.includes('Icon');
                                            });
                                            if (realTypingAnswers.length > 0) {
                                                const answer = realTypingAnswers[0].textContent.trim();
                                                if (!window.answerDatabase[question]) {
                                                    window.answerDatabase[question] = [answer];
                                                    console.log(`✓ Learned (Typing): "${question}" → "${answer}"`);
                                                }
                                            }
                                        });
                                    }

                                    function highlight() {
                                        const wrappers = document.querySelectorAll('[class*="questionWrapper"]');
                                        if (wrappers.length === 0) return;
                                        const activeWrapper = wrappers[wrappers.length - 1];
                                        if (activeWrapper.className.includes('slideOut')) return;
                                        const questionTextEl = activeWrapper.querySelector('[class*="questionText"]');
                                        if (!questionTextEl) return;
                                        let questionMedia = activeWrapper.querySelector('[class*="questionImage"]');
                                        let qMediaSrc = questionMedia ? questionMedia.src : "none";
                                        let questionMath = activeWrapper.querySelector('[class*="mq-selectable"]');
                                        let qMathText = questionMath ? questionMath.innerText.trim() : "none";
                                        const question = questionTextEl.textContent.trim() + " " + qMediaSrc + " " + qMathText;
                                        if (window.answerDatabase[question]) {
                                            const knownAnswer = window.answerDatabase[question][0];
                                            const buttons = activeWrapper.querySelectorAll('[class*="answerButton"]');
                                            if (buttons.length > 0) {
                                                buttons.forEach(btn => {
                                                    const textEl = btn.querySelector('[class*="answerText"]');
                                                    const mathEl = btn.querySelector('[class*="mq-selectable"]');
                                                    const btnText = textEl ? textEl.textContent.trim() : (mathEl ? mathEl.innerText.trim() : "");
                                                    const front = btn.querySelector('[class*="answerFront"]');
                                                    const back = btn.querySelector('[class*="answerBack"]');
                                                    const correctColor = '#00ff00';
                                                    const wrongColor = '#ff0000';
                                                    if (btnText === knownAnswer) {
                                                        if (front) {
                                                            front.style.backgroundColor = correctColor;
                                                            front.style.color = 'black';
                                                        }
                                                        if (back) back.style.backgroundColor = '#00cc00';
                                                    } else if (btnText) {
                                                        if (front) {
                                                            front.style.backgroundColor = wrongColor;
                                                            front.style.opacity = '0.7';
                                                        }
                                                        if (back) back.style.backgroundColor = '#cc0000';
                                                    }
                                                });
                                            }
                                            const input = activeWrapper.querySelector('input[class*="typingAnswerInput"]');
                                            if (input) {
                                                input.setAttribute('placeholder', `ANSWER: ${knownAnswer}`);
                                                const subHeader = activeWrapper.querySelector('[class*="typingAnswerSubheader"]');
                                                if (subHeader) {
                                                    subHeader.textContent = `ANSWER: ${knownAnswer}`;
                                                    subHeader.style.color = '#00ff00';
                                                    subHeader.style.fontWeight = 'bold';
                                                    subHeader.style.fontSize = '20px';
                                                }
                                            }
                                        }
                                    }
                                    this.data = setInterval(() => {
                                        autoContinue();
                                        learn();
                                        highlight();
                                    }, 100);
                                    console.log("✅ Highlighting Active. Play manually to populate database.");
                                })();
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    }, {
                        name: "Learn Subtle Highlight Answers",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                (() => {
                                    console.log("🕵️ Subtle Highlight Active (Lighter Shadow = Correct)\n");
                                    if (!window.answerDatabase) {
                                        window.answerDatabase = {};
                                    }

                                    function lightenColor(color) {
                                        const rgb = color.match(/\d+/g);
                                        if (!rgb) return color;
                                        const r = Math.round(parseInt(rgb[0]) + (255 - parseInt(rgb[0])) * 0.1);
                                        const g = Math.round(parseInt(rgb[1]) + (255 - parseInt(rgb[1])) * 0.1);
                                        const b = Math.round(parseInt(rgb[2]) + (255 - parseInt(rgb[2])) * 0.1);
                                        return `rgb(${r}, ${g}, ${b})`;
                                    }

                                    function autoContinue() {
                                        const feedbackContainer = document.querySelector('[class*="feedbackContainer"]');
                                        const feedbackText = document.querySelector('[class*="feedbackText"]');
                                        const isFeedback = feedbackContainer ||
                                            (feedbackText && feedbackText.offsetParent !== null);
                                        if (isFeedback) {
                                            if (feedbackContainer) {
                                                feedbackContainer.click();
                                            } else {
                                                document.body.click();
                                            }
                                            const event = new KeyboardEvent('keydown', {
                                                key: 'Enter',
                                                code: 'Enter',
                                                keyCode: 13,
                                                which: 13,
                                                bubbles: true
                                            });
                                            document.dispatchEvent(event);
                                        }
                                    }

                                    function learn() {
                                        const wrappers = document.querySelectorAll('[class*="questionWrapper"]');
                                        wrappers.forEach(wrapper => {
                                            const questionTextEl = wrapper.querySelector('[class*="questionText"]');
                                            if (!questionTextEl) return;
                                            let questionMedia = wrapper.querySelector('[class*="questionImage"]');
                                            let qMediaSrc = questionMedia ? questionMedia.src : "none";
                                            let questionMath = wrapper.querySelector('[class*="mq-selectable"]');
                                            let qMathText = questionMath ? questionMath.innerText.trim() : "none";
                                            const question = questionTextEl.textContent.trim() + " " + qMediaSrc + " " + qMathText;
                                            const correctBtn = Array.from(wrapper.querySelectorAll('[class*="answerButton"]')).find(btn =>
                                                btn.innerHTML.includes('fa-check') ||
                                                (btn.style.backgroundColor && btn.style.backgroundColor.includes('rgb(139, 220, 111)')) ||
                                                (btn.querySelector('[class*="answerFront"]') && btn.querySelector('[class*="answerFront"]').style.backgroundColor.includes('rgb(139, 220, 111)'))
                                            );
                                            if (correctBtn) {
                                                const textEl = correctBtn.querySelector('[class*="answerText"]');
                                                const mathEl = correctBtn.querySelector('[class*="mq-selectable"]');
                                                const answer = textEl ? textEl.textContent.trim() : (mathEl ? mathEl.innerText.trim() : null);
                                                if (answer && !window.answerDatabase[question]) {
                                                    window.answerDatabase[question] = [answer];
                                                    console.log(`✓ Learned: "${question}" → "${answer}"`);
                                                }
                                            }
                                            const rawTypingEls = Array.from(wrapper.querySelectorAll('[class*="typingFeedbackAnswer"]'));
                                            const realTypingAnswers = rawTypingEls.filter(el => {
                                                const cls = el.getAttribute('class') || "";
                                                return !cls.includes('Answers') && !cls.includes('Icon');
                                            });
                                            if (realTypingAnswers.length > 0) {
                                                const answer = realTypingAnswers[0].textContent.trim();
                                                if (!window.answerDatabase[question]) {
                                                    window.answerDatabase[question] = [answer];
                                                    console.log(`✓ Learned: "${question}" → "${answer}"`);
                                                }
                                            }
                                        });
                                    }

                                    function highlight() {
                                        const wrappers = document.querySelectorAll('[class*="questionWrapper"]');
                                        if (wrappers.length === 0) return;
                                        const activeWrapper = wrappers[wrappers.length - 1];
                                        if (activeWrapper.className.includes('slideOut')) return;
                                        const questionTextEl = activeWrapper.querySelector('[class*="questionText"]');
                                        if (!questionTextEl) return;
                                        let questionMedia = activeWrapper.querySelector('[class*="questionImage"]');
                                        let qMediaSrc = questionMedia ? questionMedia.src : "none";
                                        let questionMath = activeWrapper.querySelector('[class*="mq-selectable"]');
                                        let qMathText = questionMath ? questionMath.innerText.trim() : "none";
                                        const question = questionTextEl.textContent.trim() + " " + qMediaSrc + " " + qMathText;
                                        if (window.answerDatabase[question]) {
                                            const knownAnswer = window.answerDatabase[question][0];
                                            const buttons = activeWrapper.querySelectorAll('[class*="answerButton"]');
                                            if (buttons.length > 0) {
                                                buttons.forEach(btn => {
                                                    const textEl = btn.querySelector('[class*="answerText"]');
                                                    const mathEl = btn.querySelector('[class*="mq-selectable"]');
                                                    const btnText = textEl ? textEl.textContent.trim() : (mathEl ? mathEl.innerText.trim() : "");
                                                    const back = btn.querySelector('[class*="answerBack"]');
                                                    if (back && btnText === knownAnswer) {
                                                        const currentColor = window.getComputedStyle(back).backgroundColor;
                                                        back.style.backgroundColor = lightenColor(currentColor);
                                                    }
                                                });
                                            }
                                            const input = activeWrapper.querySelector('input[class*="typingAnswerInput"]');
                                            if (input) {
                                                input.setAttribute('placeholder', knownAnswer);
                                            }
                                        }
                                    }
                                    this.data = setInterval(() => {
                                        autoContinue();
                                        learn();
                                        highlight();
                                    }, 100);
                                    console.log("✅ Subtle Highlight Active.");
                                })();
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Change play.blooket.com Theme",
                        description: "Change the theme of the play.blooket.com page",
                        inputs: [{
                            name: "Theme",
                            type: "options",
                            options: ["Fall", "Spooky", "Xenostopic", "Shamrock", "Default"]
                        }],
                        run: function(selectedTheme) {
                            const THEMES = {
                                FALL: {
                                    blooks: [
                                        "https://media.blooket.com/image/upload/v1667537874/Media/fall/fall_red_leaf.svg",
                                        "https://media.blooket.com/image/upload/v1667537876/Media/fall/fall_yellow_leaf.svg",
                                        "https://media.blooket.com/image/upload/v1667537879/Media/fall/fall_orange_leaf.svg"
                                    ],
                                    bg: "#e09f3e",
                                    alt: "Leaf",
                                    width: 300,
                                    height: 300,
                                    baseOpacity: 0.9,
                                    filter: "none",
                                    useWrapper: false
                                },
                                SPOOKY: {
                                    blooks: ["Ghost"],
                                    bg: "#292929",
                                    alt: "Ghost Blook",
                                    width: 200,
                                    height: 200,
                                    baseOpacity: null,
                                    filter: "none",
                                    useWrapper: true,
                                    isBlookName: true
                                },
                                SHAMROCK: {
                                    blooks: [
                                        "https://media.blooket.com/image/upload/v1678742192/Media/shamrock/3LeafClover.svg",
                                        "https://media.blooket.com/image/upload/v1678742192/Media/shamrock/3LeafClover.svg",
                                        "https://media.blooket.com/image/upload/v1678742193/Media/shamrock/4LeafClover.svg"
                                    ],
                                    bg: "#099441",
                                    alt: "Shamrock",
                                    width: 200,
                                    height: 200,
                                    baseOpacity: null,
                                    filter: "none",
                                    useWrapper: false
                                },
                                DEFAULT: {
                                    blooks: ["Chick", "Horse", "Chicken", "Dragon", "Cow", "Lil Bot", "Rabbit", "Parrot", "Puppy"],
                                    bg: "#0bc2cf",
                                    alt: "Blook",
                                    width: 200,
                                    height: 200,
                                    baseOpacity: null,
                                    filter: "none",
                                    useWrapper: true,
                                    isBlookName: true
                                },
                                "Xenostopic": {
                                    blooks: ["https://media.blooket.com/image/upload/ib2dx2v1suvcxozkfcgl"],
                                    bg: "#1a1a1a",
                                    alt: "Xenostopic",
                                    width: 350,
                                    height: 350,
                                    baseOpacity: null,
                                    filter: "opacity(0.4)",
                                    useWrapper: true,
                                    isBlookName: false
                                }
                            };
                            const BLOOK_URLS = {
                                "Ghost": "https://ac.blooket.com/marketassets/blooks/ghost.svg",
                                "Chick": "https://ac.blooket.com/marketassets/blooks/chick.svg",
                                "Horse": "https://ac.blooket.com/marketassets/blooks/horse.svg",
                                "Chicken": "https://ac.blooket.com/marketassets/blooks/chicken.svg",
                                "Dragon": "https://ac.blooket.com/marketassets/blooks/dragon.svg",
                                "Cow": "https://ac.blooket.com/marketassets/blooks/cow.svg",
                                "Lil Bot": "https://ac.blooket.com/marketassets/blooks/lilbot.svg",
                                "Rabbit": "https://ac.blooket.com/marketassets/blooks/rabbit.svg",
                                "Parrot": "https://ac.blooket.com/marketassets/blooks/parrot.svg",
                                "Puppy": "https://ac.blooket.com/marketassets/blooks/puppy.svg"
                            };

                            function random(min, max) {
                                return Math.random() * (max - min) + min;
                            }

                            function randomInt(min, max) {
                                return Math.floor(Math.random() * (max - min)) + min;
                            }

                            function randomChoice(arr) {
                                return arr[Math.floor(Math.random() * arr.length)];
                            }
                            const theme = THEMES[selectedTheme.toUpperCase()];
                            if (!theme) {
                                return Swal.fire({
                                    icon: "error",
                                    title: "Invalid Theme",
                                    text: `Unknown theme: ${selectedTheme}`
                                });
                            }
                            if (!window.location.hostname.includes("blooket.com")) {
                                return Swal.fire({
                                    icon: "error",
                                    title: "Wrong Page",
                                    text: "This cheat only works on play.blooket.com"
                                });
                            }
                            const bg = document.querySelector("._background_l90pt_1");
                            if (bg) {
                                bg.style.backgroundColor = theme.bg;
                            }
                            const container = document.querySelector(".FloatingBlooks_container__30tmg");
                            if (!container) {
                                return Swal.fire({
                                    icon: "error",
                                    title: "Not Found",
                                    text: "FloatingBlooks container not found on this page"
                                });
                            }
                            container.innerHTML = "";
                            for (let i = 0; i < 30; i++) {
                                const blookDiv = document.createElement("div");
                                blookDiv.className = "FloatingBlooks_blookContainer__wNUvu";
                                const duration = randomInt(15000, 20000);
                                const delay = -5000 + (200 * i);
                                const left = 5 + random(0, 30) + (30 * (i % 3));
                                const top = 100 + (5 * i);
                                const scale = random(0.5, 1);
                                const opacity = theme.baseOpacity !== null ? theme.baseOpacity : random(0.2, 0.6);
                                blookDiv.style.cssText = `
                bottom: ${top}vh;
                left: ${left}vw;
                animation-duration: ${duration}ms;
                animation-delay: ${delay}ms;
                opacity: ${opacity};
            `;
                                const blookChoice = randomChoice(theme.blooks);
                                const blookSrc = theme.isBlookName ? BLOOK_URLS[blookChoice] : blookChoice;
                                const blookAlt = theme.isBlookName ? `${blookChoice} Blook` : theme.alt;
                                const img = document.createElement("img");
                                img.src = blookSrc;
                                img.alt = blookAlt;
                                img.draggable = false;
                                img.width = theme.width;
                                img.height = theme.height;
                                if (theme.useWrapper) {
                                    const wrapper = document.createElement("div");
                                    wrapper.className = "_blookContainer_inzvw_1 FloatingBlooks_blook__vOvK6";
                                    wrapper.setAttribute("data-tooltip-id", "blook-tooltip");
                                    wrapper.style.cssText = `transform: scale(${scale});`;
                                    img.className = "_blook_inzvw_1";
                                    img.style.cssText = `filter: ${theme.filter};`;
                                    wrapper.appendChild(img);
                                    blookDiv.appendChild(wrapper);
                                } else {
                                    img.className = "FloatingBlooks_blook__vOvK6";
                                    img.style.cssText = `
                    transform: scale(${scale});
                    filter: ${theme.filter};
                `;
                                    blookDiv.appendChild(img);
                                }
                                container.appendChild(blookDiv);
                            }
                            Swal.fire({
                                icon: "success",
                                title: "Theme Changed",
                                text: `Successfully changed to ${selectedTheme} theme!`
                            });
                        }
                    },
                    {
                        name: "Unlock All Blook Parts",
                        description: "Unlocks every clothing, hat, hair, eyes, glasses, item, mouth, nose, cheeks, and eyebrows part in the blook editor",
                        run: function() {
                            if (!window.location.href.startsWith("https://dashboard.blooket.com/stats")) {
                                return alert("You must be in the blook editor on dashboard.blooket.com/stats for this to work.");
                            }

                            const el = document.querySelector("#app > div > div > div:nth-child(9)");
                            if (!el) {
                                return alert("You must have the blook editor open for this to work.");
                            }

                            const fk = Object.keys(el).find(k =>
                                k.startsWith("__reactFiber") || k.startsWith("__reactInternalInstance")
                            );
                            if (!fk) {
                                return alert("You must have the blook editor open for this to work.");
                            }

                            let fiber = el[fk];
                            let instance = null;
                            while (fiber) {
                                if (fiber.stateNode?.setState && fiber.stateNode?.state && "unlocks" in fiber.stateNode.state) {
                                    instance = fiber.stateNode;
                                    break;
                                }
                                fiber = fiber.return;
                            }

                            if (!instance) {
                                return alert("You must have the blook editor open for this to work.");
                            }

                            const ALL = Array.from({
                                length: 10000
                            }, (_, i) => i);

                            instance.setState(prev => ({
                                ...prev,
                                unlocks: {
                                    clothing: ALL,
                                    eyes: ALL,
                                    glasses: ALL,
                                    hair: ALL,
                                    hat: ALL,
                                    item: ALL,
                                    mouth: ALL,
                                    nose: ALL,
                                    cheeks: ALL,
                                    eyebrows: ALL,
                                }
                            }), () => {
                                alert("All blook parts have been unlocked.");
                            });
                        }
                    },
                    {
                        name: "Freeze Leaderboard",
                        description: "Freezes the leaderboard on the host's screen",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            var e = Object.values(function e(t = document.querySelector("#app")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                                }
                                ())[1].children[0]._owner.stateNode;
                            if (this.enabled)
                                this.enabled = !1, clearInterval(this.data), this.data = null, e.props.liveGameController.removeVal(`c/${e.props.client.name}/tat`);
                            else {
                                this.enabled = !0;
                                let t = () => {
                                    e.props.liveGameController.setVal({
                                        path: `c/${e.props.client.name}/tat/Freeze`,
                                        val: "freeze"
                                    })
                                };
                                this.data = setInterval(t, 25)
                            }
                        }
                    }, {
                        name: "Anti Kick",
                        description: "Prevents the host from kicking you, Although cheats stop working and you can't win.",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            const stateNode = getStateNode();
                            const lgc = stateNode?.props?.liveGameController;
                            if (!lgc) return alert("Not in a game.");
                            if (!this.enabled) {
                                this.enabled = true;
                                const playerName = stateNode.props.client.name;
                                const savedBlook = stateNode.props.client.blook;
                                this.data = setInterval(() => {
                                    lgc.getDatabaseRef("c").once("value", (snap) => {
                                        const players = snap.val() || {};
                                        if (!players[playerName]) {
                                            lgc.setVal({
                                                path: `c/${playerName}`,
                                                val: {
                                                    n: playerName,
                                                    b: savedBlook
                                                }
                                            });
                                        }
                                    });
                                }, 500);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    }, {
                        name: "Percent Auto Answer",
                        description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
                        inputs: [{
                            name: "Target Grade",
                            type: "number",
                        }, ],
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function(target) {
                            if (!this.enabled) {
                                this.enabled = true;
                                const stateNode = getStateNode();
                                this.data = setInterval(
                                    (TARGET) => {
                                        try {
                                            const question = stateNode.state.question || stateNode.props.client.question;
                                            if (stateNode.state.stage == "feedback" || stateNode.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                                            else if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                                                let correct = 0,
                                                    total = 0;
                                                for (let corrects in stateNode.corrects) correct += stateNode.corrects[corrects];
                                                for (let incorrect in stateNode.incorrects) total += stateNode.incorrects[incorrect];
                                                total += correct;
                                                const yes = total == 0 || Math.abs(correct / (total + 1) - TARGET) >= Math.abs((correct + 1) / (total + 1) - TARGET);
                                                if (stateNode.state.question.qType != "typing") {
                                                    const answerContainers = document.querySelectorAll("[class*='answerContainer']");
                                                    for (let i = 0; i < answerContainers.length; i++) {
                                                        const contains = question.correctAnswers.includes(question.answers[i]);
                                                        if (yes == contains) return answerContainers[i]?.click?.();
                                                    }
                                                    answerContainers[0].click();
                                                } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(yes ? question.answers[0] : Math.random().toString(36).substring(2));
                                            }
                                        } catch {}
                                    },
                                    100,
                                    (target ?? 100) / 100
                                );
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Auto Answer",
                        description: "Click the correct answer for you",
                        run: function() {
                            const stateNode = getStateNode();
                            const Question = stateNode.state.question || stateNode.props.client.question;
                            if (stateNode.state.question.qType != "typing") {
                                if (stateNode.state.stage != "feedback" && !stateNode.state.feedback) {
                                    let ind;
                                    for (ind = 0; ind < Question.answers.length; ind++) {
                                        let found = false;
                                        for (let j = 0; j < Question.correctAnswers.length; j++)
                                            if (Question.answers[ind] == Question.correctAnswers[j]) {
                                                found = true;
                                                break;
                                            }
                                        if (found) break;
                                    }
                                    document.querySelectorAll("[class*='answerContainer']")[ind].click();
                                } else document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
                            } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(Question.answers[0]);
                        },
                    },
                    {
                        name: "Highlight Answers",
                        description: "Colors answers to be red or green highlighting the correct ones",
                        run: function() {
                            const stateNode = getStateNode();
                            const Question = stateNode.state.question || stateNode.props.client.question;
                            let ind = 0;
                            while (ind < Question.answers.length) {
                                let found = false;
                                for (let j = 0; j < Question.correctAnswers.length; j++)
                                    if (Question.answers[ind] == Question.correctAnswers[j]) {
                                        found = true;
                                        break;
                                    }
                                ind++;
                                document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.backgroundColor = found ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)";
                            }
                        },
                    },
                    {
                        name: "Free Folder!",
                        description: "Gives you plus perks like folders, does not unlock plus gamemodes! (ONLY WORKS ON THE MY SETS PAGE!)",
                        run: function() {
                            const reactHandler = () => Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                            const component = reactHandler();
                            if (!component) return console.error("React component not found!");
                            component.getIsPlus = e => e();
                            component.plus = true;
                            if (component.props && component.props.user && component.props.user.data) {
                                component.props.user.data.plan = "Plus";
                                component.props.user.data.hasPlus = true;
                                component.props.user.data.planName = "Plus";
                            }
                            component.setState({
                                hasPlus: true,
                                noFolder: false,
                                noMerge: false,
                                copying: false
                            });
                            console.log("Folders unlocked!");
                        },
                    }, {
                        name: "Simulate Unlock",
                        description: "Simulates unlocking a certain blook",
                        inputs: [{
                            name: "Blook (Case Sensitive)"
                        }],
                        run: (unlockedBlook) => {
                            const stateNode = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                            stateNode.setState({
                                loadingPack: !1,
                                openPack: !0,
                                unlockedBlook,
                                newUnlock: !0,
                                canOpen: !1
                            });
                            setTimeout(() => stateNode.setState({
                                canOpen: !0
                            }), 200);
                        }
                    }, {
                        name: "Simulate Pack",
                        description: "Simulates unlocking a pack",
                        inputs: [{
                            name: "Pack",
                            type: "options",
                            options: () => [...document.querySelector("[class*=packsWrapper]")?.children]?.map(e => e.children[0].children[0].alt)
                        }],
                        run: async (packName) => {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            const alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname !== "/market") {
                                alert("You must be on the market page to run this cheat!");
                                return;
                            }
                            const stateNode = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                            const getProbs = (pack) => (new Promise(res => {
                                if (!Array.prototype.map2) {
                                    Array.prototype.map2 = Array.prototype.map;
                                }
                                Array.prototype.map = function() {
                                    if (typeof this[0]?.[1] == "number") {
                                        res(this);
                                        Array.prototype.map = Array.prototype.map2;
                                    }
                                    return Array.prototype.map2.apply(this, arguments);
                                }
                                var a = new(stateNode.constructor)();
                                a.state.currentPack = pack;
                                a.render();
                                res(null);
                            }));
                            async function pickRandom(pack) {
                                let probs = (await getProbs(pack));
                                const choice = pickW(probs.map(e => e[1]));
                                return probs[choice];
                            }

                            function pickW(a) {
                                let v = 0;
                                let sum = [];
                                const rand = Math.floor(Math.random() * a.reduce((a, b) => a + b, 0));
                                a.forEach(e => (sum.push(v), v += e));
                                return sum.map(e => rand < e).findLastIndex(e => e ? 0 : 1);
                            }
                            stateNode.setState({
                                loadingPack: !1,
                                openPack: !0,
                                unlockedBlook: (await pickRandom(packName))[0],
                                newUnlock: !0,
                                canOpen: !1
                            });
                            setTimeout(() => stateNode.setState({
                                canOpen: !0
                            }), 200);
                        }
                    }, {
                        name: "Spam Buy Blooks",
                        description: "Opens a box an amount of times",
                        inputs: [{
                                name: "Box",
                                type: "options",
                                options: () =>
                                    Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((a, b) => {
                                        b.querySelector("[class*='blookContainer'] > img") || a.push(b.querySelector("[class*='packImgContainer'] > img").alt);
                                        return a;
                                    }, []),
                            },
                            {
                                name: "Amount",
                                type: "number",
                            },
                            {
                                name: "Show Unlocks",
                                type: "options",
                                options: [{
                                        name: "Show Unlocks",
                                        value: true,
                                    },
                                    {
                                        name: "Don't Show Unlocks",
                                        value: false,
                                    },
                                ],
                            },
                        ],
                        run: async function(box, amountToOpen, alertBlooks) {
                            if (window.location.pathname.startsWith("/market")) {
                                const stateNode = getStateNode();
                                const prices = Array.prototype.reduce.call(
                                    document.querySelectorAll("[class*='packsWrapper'] > div"),
                                    (a, b) => {
                                        b.querySelector("[class*='blookContainer'] > img") || (a[b.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(b.querySelector("[class*='packBottom']").textContent));
                                        return a;
                                    }, {}
                                );
                                box = box
                                    .split(" ")
                                    .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
                                    .join(" ");
                                const cost = prices[box];
                                if (!cost) return alert("I couldn't find that box!");
                                const canOpen = Math.floor(stateNode.state.tokens / cost);
                                if (canOpen <= 0) return alert("You do not have enough tokens!");
                                const amount = Math.min(canOpen, amountToOpen || 0);
                                const blooks = {},
                                    now = Date.now();
                                for (let i = 0; i < amount; i++) {
                                    await stateNode.buyPack(true, box);
                                    blooks[stateNode.state.unlockedBlook] ||= 0;
                                    blooks[stateNode.state.unlockedBlook]++;
                                    stateNode.startOpening();
                                    clearTimeout(stateNode.openTimeout);
                                    const rarity = stateNode.state.purchasedBlookRarity;
                                    stateNode.setState({
                                        canOpen: true,
                                        currentPack: "",
                                        opening: alertBlooks,
                                        doneOpening: alertBlooks,
                                        openPack: alertBlooks
                                    });
                                    clearTimeout(stateNode.canOpenTimeout);
                                    if (rarity == "Chroma") break;
                                }
                                await new Promise((r) => setTimeout(r));
                                alert(
                                    `(${Date.now() - now}ms) Results:\n${Object.entries(blooks)
                                        .map(([blook, amount]) => `    ${blook} ${amount}`)
                                        .join(`\n`)}`
                                );
                            } else alert("This can only be ran in the Market page.");
                        },
                    },
                    {
                        name: "Zoom Hack",
                        description: "Removes the window is too tall so you can zoom out with arrow keys",
                        type: "toggle",
                        enabled: false,
                        run: function() {
                            this.enabled = !this.enabled;
                            if (this.enabled) {
                                const style = document.createElement("style");
                                style.textContent = `
._wrapper_18iap_1 {
    display: none !important;
}
`;
                                document.head.appendChild(style);
                                this.styleElement = style;
                            } else {
                                if (this.styleElement) {
                                    this.styleElement.remove();
                                    this.styleElement = null;
                                }
                            }
                        },
                    },
                    {
                        name: "Bypass Filter",
                        description: "Bypasses the name filter",
                        inputs: [{
                            name: "Text",
                            type: "text",
                        }],
                        run: function(e) {
                            var t,
                                a,
                                o;
                            let r;
                            a = function e(t) {
                                    for (var a = t.split(""), o = "", r = 0; r < a.length; r++)
                                        o += "\xad" + a[r];
                                    return o
                                }
                                (t = e),
                                r = document.createElement("iframe"),
                                document.body.appendChild(r),
                                window.alert = r.contentWindow.alert.bind(r.contentWindow),
                                (o = document.createElement("textarea")).value = a,
                                o.style.position = "fixed",
                                o.style.top = 0,
                                o.style.left = 0,
                                o.style.opacity = 0,
                                document.body.appendChild(o),
                                o.select(),
                                document.execCommand("copy"),
                                alert("Bypassed text copied to clipboard!"),
                                r.remove(),
                                document.body.removeChild(o)
                        }
                    },
                    {
                        name: "Bypass Name Length",
                        description: "Removes the Name Length. You can go up to 120 Characters",
                        run: function() {
                            (
                                document.querySelector("body > main > div > form > div > div.Form_inputRow__w_TK3 > div > input") ||
                                document.querySelector("#app > div > div > div:nth-child(2) > div > form > div._inputRow_1lycq_54 > div._nameInputContainer_1lycq_85 > input")
                            )?.removeAttribute("maxlength")
                        },
                    },
                    {
                        name: "Use any Banner",
                        description: "Unlocked all banners",
                        inputs: [{
                            name: "Banner",
                            type: "options",
                            options: Object.entries({
                                Starter: "starter",
                                Fire: "fire",
                                "Tech Chip": "techChip",
                                Shamrocks: "shamrocks",
                                "Orange Ice Pop": "orangeIcePop",
                                Slime: "slime",
                                Sushi: "sushi",
                                "Falling Blocks": "fallingBlocks",
                                Racetrack: "racetrack",
                                "Football Field": "footballField",
                                "Ice Cream Sandwich": "iceCreamSandwich",
                                "Winter Landscape": "winterLandscape",
                                Leaves: "leaves",
                                "Music Class": "musicClass",
                                "Science Class": "scienceClass",
                                "Art Class": "artClass",
                                Clockwork: "clockwork",
                                "Hockey Rink": "hockeyRink",
                                "Outer Space": "outerSpace",
                                "Soccer Field": "soccerField",
                                Ice: "ice",
                                "Toaster Pastry": "toasterPastry",
                                "Fish Tank": "fishTank",
                                Theater: "theater",
                                Farm: "farm",
                                Spooky: "spooky",
                                "Spooky Cat": "spookyCat",
                                "Spooky Window": "spookyWindow",
                                Frankenstein: "frankenstein",
                                Ghosts: "ghosts",
                                Mummy: "mummy",
                                Spiders: "spiders",
                                Coffin: "coffin",
                                Pumpkins: "pumpkins",
                                "Christmas Tree": "christmasTree",
                                Chalkboard: "chalkboard",
                                Balloons: "balloons",
                                Skateboard: "skateboard",
                                Sunset: "sunset",
                                Tiger: "tiger",
                                "Pirate Map": "pirateMap",
                                Pencil: "pencil",
                                "Road Sign": "roadSign",
                                "Corn Dog": "cornDog",
                                Leaf: "leaf",
                                "Chili Pepper": "chiliPepper",
                                "Love Letter": "loveLetter",
                                Gifts: "gifts",
                                "Winter Train": "winterTrain",
                                "Winter Drive": "winterDrive",
                                Workbench: "workbench",
                                Harvest: "harvest",
                                Chocolate: "chocolate",
                                "Fall Picnic": "fallPicnic",
                                Bookshelf: "bookshelf",
                                "Easter Pattern": "easterPattern",
                                Carrot: "carrot",
                                "Easter Field": "easterField",
                                Garden: "garden",
                                Bakery: "bakery",
                                "Gummy Worm": "gummyWorm",
                                "Basketball Court": "basketballCourt",
                                "Flying Kite": "flyingKite",
                                "Hot Dog": "hotDog",
                                "Japanese Garden": "japaneseGarden",
                                Sandwich: "sandwich",
                                Ruler: "ruler",
                                "Ball Pit": "ballPit",
                                "Xylophone": "xylophone",
                                "Holiday Lights": "holidayLights",
                                "Ice Cream Truck": "iceCreamTruck",
                                "Holiday Gift Wrap": "holidayGiftWrap",
                                "Winter Sweater": "winterSweater",
                                "Holiday Ornaments": "holidayOrnaments",
                                Watermelon: "watermelon",
                                Baguette: "baguette",
                                Rollerblades: "rollerblades",
                                Surfboard: "surfboard",
                                Cookout: "cookout",
                                Comic: "comic",
                                Crayon: "crayon",
                                Lightning: "lightning",
                                Baseball: "baseball",
                                "Shamrock Coins": "shamrockCoins",
                                "End Of The Rainbow": "endRainbow",
                                "Easter Field": "easterField",
                                Marker: "marker",
                                Pizza: "pizza",
                                Leaf: "leaf",
                                "Alphabet Soup": "alphabetSoup"
                            }).map(([e, t]) => ({
                                name: e,
                                value: t
                            }))
                        }],
                        run: function(e) {
                            var t = document.createElement("iframe");

                            function a() {
                                return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner
                            }
                            document.head.appendChild(t),
                                window.alert = t.contentWindow.alert.bind(window),
                                window.prompt = t.contentWindow.prompt.bind(window),
                                t.remove(),
                                a().stateNode.props.liveGameController.setVal({
                                    path: "c/" + a().stateNode.props.client.name + "/bg",
                                    val: e
                                })
                        }
                    },
                    {
                        name: "Change Name Ingame",
                        description: "Changes your name ingame",
                        inputs: [{
                            name: "New Name",
                            type: "text"
                        }],
                        run: (function(newname) {
                            (async () => {
                                const reactHandler = (e => Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode);
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                let alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                async function genToken(name) {
                                    const res = await fetch("https://fb.blooket.com/c/firebase/join", {
                                        body: JSON.stringify({
                                            id: reactHandler().props.client.hostId,
                                            name
                                        }),
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        method: "PUT",
                                        credentials: "include"
                                    }).then(e => e.json());
                                    if (!res.success) {
                                        alert("Error: " + res.msg);
                                        return;
                                    }
                                    return res.fbToken;
                                }
                                const oldname = reactHandler().props.client.name;
                                reactHandler().props.client.name = newname;
                                const olddata = await reactHandler().props.liveGameController.getDatabaseVal(`c/${oldname}`);
                                await reactHandler().props.liveGameController.removeVal(`c/${oldname}`);
                                const token = await genToken(newname);
                                if (!token) {
                                    return;
                                }
                                await reactHandler().props.liveGameController._liveApp.auth().signInWithCustomToken(token);
                                reactHandler().props.liveGameController._liveApp.auth().onAuthStateChanged(e => {
                                    if (e.uid.split(":")[1] === newname) {
                                        reactHandler().props.liveGameController.setVal({
                                            path: `c/${newname}`,
                                            val: olddata
                                        });
                                    }
                                });
                                reactHandler().setState({});
                            })();
                        })
                    },
                    {
                        name: "Change Blook Ingame",
                        description: "Changes your blook",
                        inputs: [{
                            name: "Blook (case sensitive)",
                            type: "string",
                        }, ],
                        run: function(blook) {
                            let {
                                props
                            } = getStateNode();
                            props.liveGameController.setVal({
                                path: `c/${props.client.name}/b`,
                                val: (props.client.blook = blook)
                            });
                        },
                    },
                    {
                        name: "Get Daily Rewards",
                        description: "Gets max daily tokens and xp",
                        run: async function() {
                            if (!window.location.href.includes("play.blooket.com")) alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/");
                            else {
                                const gameId = [
                                    "60101da869e8c70013913b59",
                                    "625db660c6842334835cb4c6",
                                    "60268f8861bd520016eae038",
                                    "611e6c804abdf900668699e3",
                                    "60ba5ff6077eb600221b7145",
                                    "642467af9b704783215c1f1b",
                                    "605bd360e35779001bf57c5e",
                                    "6234cc7add097ff1c9cff3bd",
                                    "600b1491d42a140004d5215a",
                                    "5db75fa3f1fa190017b61c0c",
                                    "5fac96fe2ca0da00042b018f",
                                    "600b14d8d42a140004d52165",
                                    "5f88953cdb209e00046522c7",
                                    "600b153ad42a140004d52172",
                                    "5fe260e72a505b00040e2a11",
                                    "5fe3d085a529560004cd3076",
                                    "5f5fc017aee59500041a1456",
                                    "608b0a5863c4f2001eed43f4",
                                    "5fad491512c8620004918ace",
                                    "5fc91a9b4ea2e200046bd49a",
                                    "5c5d06a7deebc70017245da7",
                                    "5ff767051b68750004a6fd21",
                                    "5fdcacc85d465a0004b021b9",
                                    "5fb7eea20bd44300045ba495",
                                ][Math.floor(Math.random() * 24)];
                                const rand = (l, h) => Math.floor(Math.random() * (h - l + 1)) + l;
                                const {
                                    t
                                } = await fetch("https://play.blooket.com/api/playersessions/solo", {
                                        body: JSON.stringify({
                                            gameMode: "Factory",
                                            questionSetId: gameId
                                        }),
                                        method: "POST",
                                        credentials: "include",
                                    })
                                    .then((x) => x.json())
                                    .catch(() => alert("There was an error creating a solo game."));
                                await fetch("https://play.blooket.com/api/playersessions/landings", {
                                    body: JSON.stringify({
                                        t
                                    }),
                                    method: "POST",
                                    credentials: "include",
                                }).catch(() => alert("There was an error when landing."));
                                await fetch("https://play.blooket.com/api/playersessions/questions?t=" + t, {
                                    credentials: "include"
                                });
                                await fetch("https://play.blooket.com/api/gamequestionsets?gameId=" + gameId, {
                                    credentials: "include"
                                });
                                await fetch("https://play.blooket.com/api/users/factorystats", {
                                    body: JSON.stringify({
                                        t,
                                        place: 1,
                                        cash: rand(10000000, 100000000),
                                        playersDefeated: 0,
                                        correctAnswers: rand(500, 2000),
                                        upgrades: rand(250, 750),
                                        blookUsed: "Chick",
                                        nameUsed: "You",
                                        mode: "Time-Solo"
                                    }),
                                    method: "PUT",
                                    credentials: "include",
                                }).catch(() => alert("There was an error when spoofing stats."));
                                await fetch("https://play.blooket.com/api/users/add-rewards", {
                                        body: JSON.stringify({
                                            t,
                                            addedTokens: 500,
                                            addedXp: 300
                                        }),
                                        method: "PUT",
                                        credentials: "include",
                                    })
                                    .then((x) => x.json())
                                    .then(({
                                        dailyReward
                                    }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                                    .catch(() => alert("There was an error when adding rewards."));
                            }
                        },
                    },
                    {
                        name: "Blooket Bot",
                        description: "Opens Blooket Bot",
                        run: function() {
                            function getGameCode() {
                                const appDiv = document.querySelector('#app>div>div');
                                if (appDiv) {
                                    const reactComponent = Object.values(appDiv)[1]?.children[0]?._owner;
                                    return reactComponent?.stateNode?.props?.client?.hostId || null;
                                }
                                return null;
                            }
                            const gameCode = getGameCode();
                            const url = gameCode ? "https://blooketbot.schoolcheats.net/" + gameCode : "https://blooketbot.schoolcheats.net/";
                            window.open(url, "_blank", "width=500,height=500,resizable=yes,scrollbars=yes,status=yes");
                        }
                    }, {
                        name: "Blooket Stream Finder",
                        description: "Opens Stream Finder",
                        run: function() {
                            function getGameCode() {
                                const appDiv = document.querySelector('#app>div>div');
                                if (appDiv) {
                                    const reactComponent = Object.values(appDiv)[1]?.children[0]?._owner;
                                    return reactComponent?.stateNode?.props?.client?.hostId || null;
                                }
                                return null;
                            }
                            const gameCode = getGameCode();
                            const url = gameCode ? "https://0alter0.github.io/blooketstreamfinderV2/" + gameCode : "https://0alter0.github.io/blooketstreamfinderV2/";
                            window.open(url, "_blank", "width=500,height=500,resizable=yes,scrollbars=yes,status=yes");
                        }
                    }, {
                        name: "Open Chat (Global)",
                        description: "Opens The Xenostopic Chat, Not Ingame",
                        run: function() {
                            window.open(
                                "https://hack.chat/?Xenostopic",
                                "_blank",
                                "width=500,height=500,resizable=yes,scrollbars=yes,status=yes"
                            );
                        }
                    }, {
                        name: "Open Chat (Ingame)",
                        description: "Opens Xenostopic Ingame Chat",
                        run: function() {
                            (function() {
                                function getGameCode() {
                                    const appDiv = document.querySelector('#app>div>div');
                                    if (appDiv) {
                                        const reactComponent = Object.values(appDiv)[1]?.children[0]?._owner;
                                        return reactComponent?.stateNode?.props?.client?.hostId || null;
                                    }
                                    return null;
                                }

                                function getGameCodeFromURL() {
                                    const parts = window.location.pathname.split('/').filter(Boolean);
                                    return parts.length >= 3 ? parts[0] : null;
                                }
                                let gameCode = getGameCode();
                                if (!gameCode) {
                                    gameCode = getGameCodeFromURL();
                                }
                                const url = gameCode ?
                                    "https://hack.chat/?Xenostopic" + gameCode :
                                    "https://hack.chat/?Xenostopic";
                                window.open(
                                    url,
                                    "_blank",
                                    "width=500,height=500,resizable=yes,scrollbars=yes,status=yes"
                                );
                            })();
                        }
                    },
                    {
                        name: "Use Any Blook",
                        description: "Allows you to play as any blook",
                        run: function() {
                            const lobby = window.location.pathname.startsWith("/play/lobby"),
                                dashboard = !lobby && window.location.pathname.startsWith("/blooks");
                            if (dashboard) {
                                let key = "konzpack",
                                    propCall = Object.prototype.hasOwnProperty.call;
                                let webpack = webpackChunk_N_E.push([
                                    [key],
                                    {
                                        [key]: () => {}
                                    },
                                    function(func) {
                                        Object.prototype.hasOwnProperty.call = function() {
                                            Object.defineProperty(arguments[0], key, {
                                                set: () => {},
                                                configurable: true
                                            });
                                            return (Object.prototype.hasOwnProperty.call = propCall).apply(this, arguments);
                                        };
                                        return func;
                                    },
                                ]);
                                const blookData = webpack(4927).nK;
                                const blooksHook = Object.values(document.querySelector("[class*=BlooksWrapper_content]"))[0].return.memoizedState.next;
                                const showBlooks = blooksHook.memoizedState;
                                const seen = {},
                                    userBlooks = [],
                                    prices = {
                                        Uncommon: 5,
                                        Rare: 20,
                                        Epic: 75,
                                        Legendary: 200,
                                        Chroma: 300,
                                        Unique: 350,
                                        Mystical: 1000,
                                    };
                                for (const data of blooksHook.next.memoizedState) {
                                    userBlooks.push(data);
                                    seen[data.blook] = true;
                                }
                                for (const blook in blookData) {
                                    if (blookData[blook].rarity != "Common" && !seen[blook])
                                        userBlooks.push({
                                            blook,
                                            quantity: 1,
                                            sellPrice: prices[blookData[blook].rarity],
                                        });
                                }
                                blooksHook.next.queue.dispatch(userBlooks);
                                blooksHook.queue.dispatch(!showBlooks);
                                setTimeout(() => blooksHook.queue.dispatch(showBlooks), 1);
                            } else if (lobby) getStateNode().setState({
                                unlocks: {
                                    includes: () => !0
                                }
                            });
                            else alert("This only works in lobbies or the dashboard blooks page.");
                        },
                    },
                    {
                        name: "Every Answer Correct",
                        description: "Sets every answer to be correct",
                        run: function() {
                            const stateNode = getStateNode();
                            for (let i = 0; i < stateNode.freeQuestions.length; i++) {
                                stateNode.freeQuestions[i].correctAnswers = stateNode.freeQuestions[i].answers;
                                stateNode.questions[i].correctAnswers = stateNode.questions[i].answers;
                                stateNode.props.client.questions[i].correctAnswers = stateNode.questions[i].answers;
                            }
                            try {
                                stateNode.forceUpdate();
                            } catch {}
                        },
                    },
                    {
                        name: "Remove all Taken Blooks",
                        description: "Removes all taken blooks, allowing you to use any taken blook. Only works in lobby.",
                        run: function() {
                            const stateNode = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                            stateNode.setState({
                                takenBlooks: {
                                    includes: e => !1
                                }
                            });
                            stateNode.setState = function(a, b) {
                                if (a?.takenBlooks) {
                                    return;
                                }
                                stateNode.updater.enqueueSetState(stateNode, a, b, "setState");
                            }
                        }
                    }, {
                        name: "Subtle Highlight Answers",
                        description: "Removes the shadow from correct answers",
                        run: function() {
                            const stateNode = getStateNode();
                            const Question = stateNode.state.question || stateNode.props.client.question;
                            let ind = 0;
                            while (ind < Question.answers.length) {
                                let j = 0;
                                let found = false;
                                while (j < Question.correctAnswers.length) {
                                    if (Question.answers[ind] == Question.correctAnswers[j]) {
                                        found = true;
                                        break;
                                    }
                                    j++;
                                }
                                ind++;
                                if (found) document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.boxShadow = "unset";
                            }
                        },
                    },
                    {
                        name: "Remove Random Name",
                        description: "Allows you to put a custom name",
                        run: function() {
                            getStateNode().setState({
                                isRandom: false,
                                client: {
                                    name: ""
                                }
                            });
                            document.querySelector('[class*="nameInput"]')?.focus?.();
                        },
                    },
                    {
                        name: "Sell Duplicate Blooks",
                        description: "Sell all duplicate blooks leaving you with 1 each",
                        run: async function() {
                            if (!window.location.pathname.startsWith("/blooks")) {
                                return alert("Go to https://dashboard.blooket.com/blooks first");
                            }

                            if (!confirm("Sell all duplicates except Legendary+ and keep 1 each?")) return;

                            async function sellBlook(blookName, quantity) {
                                const formData = new FormData();
                                formData.append('1_blook', blookName);
                                formData.append('1_quantity', quantity.toString());
                                formData.append('0', '[{"status":"UNSET","message":"","fieldErrors":{}},"$K1"]');

                                try {
                                    const response = await fetch('https://dashboard.blooket.com/blooks', {
                                        method: 'POST',
                                        headers: {
                                            'next-action': '504d5bfe3d4b01def79630a2138ec4f50f85bee9',
                                            'accept': 'text/x-component',
                                            'next-router-state-tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22(routes)%22%2C%7B%22children%22%3A%5B%22(dashboard)%22%2C%7B%22children%22%3A%5B%22blooks%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D'
                                        },
                                        body: formData
                                    });

                                    if (response.ok) {
                                        console.log(`Sold ${quantity}x ${blookName}`);
                                    } else {
                                        console.error(`Failed ${blookName}: ${response.status}`);
                                    }
                                } catch (err) {
                                    console.error("Network error:", err);
                                }
                            }

                            const blookslist = (() => {
                                const anyEl = document.querySelector('*');
                                const fiberKey = Object.keys(anyEl).find(k => k.startsWith('__reactFiber$'));
                                let fiber = anyEl[fiberKey];

                                while (fiber?.return) fiber = fiber.return;

                                const path = "child.child.child.child.child.child.child.child.child.child.sibling.child.child.child.child.child.child.child.child.sibling.child.child.sibling.child.child.child.child.sibling.child.sibling.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.sibling.child.sibling.sibling.sibling.sibling.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.child.sibling.child.child";

                                let target = fiber;
                                path.split('.').forEach(k => target = target?.[k]);

                                return target?.memoizedProps?.blooks || [];
                            })();

                            let key = "konzpack",
                                original = Object.prototype.hasOwnProperty.call;

                            let webpack = webpackChunk_N_E.push([
                                [key],
                                {
                                    [key]: () => {}
                                },
                                function(func) {
                                    Object.prototype.hasOwnProperty.call = function() {
                                        Object.defineProperty(arguments[0], key, {
                                            set: () => {},
                                            configurable: true
                                        });
                                        return (Object.prototype.hasOwnProperty.call = original).apply(this, arguments);
                                    };
                                    return func;
                                }
                            ]);

                            const blookData = webpack(26170).nK;

                            const prices = {
                                Uncommon: 5,
                                Rare: 20,
                                Epic: 75,
                                Legendary: 200,
                                Chroma: 300,
                                Unique: 350,
                                Mystical: 1000,
                            };

                            let sellAmt = 0;
                            let sellBlookAmt = 0;

                            for (let blook of blookslist) {
                                const rarity = blookData[blook.blook]?.rarity;

                                if (blook.quantity > 1 && ["Uncommon", "Rare", "Epic"].includes(rarity)) {
                                    const amountToSell = blook.quantity - 1;

                                    await sellBlook(blook.blook, amountToSell);

                                    sellBlookAmt += amountToSell;
                                    sellAmt += prices[rarity] * amountToSell;
                                }
                            }

                            alert(`Sold ${sellBlookAmt} blooks for ${sellAmt} tokens`);
                        }
                    }
                ],
            },
            extras: {
                img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlnb24gZmlsbD0iI2ZkZDAyOSIgcG9pbnRzPSIxMjAsMTggMTUxLDk0IDI0MCw5NCAxNjgsMTQ4IDE5NSwyMzAgMTIwLDE4MyA0NSwyMzAgNzIsMTQ4IDAsOTQgODksOTQiLz48L3N2Zz4=",
                name: "Extras",
                cheats: [{
                        name: "EXECUTOR",
                        description: "Opens an advanced, sleek, GUI with countless features, made by @Xenostopic",
                        run: function() {
                            try {
                                if (typeof window.ExecutorUserScriptVersion === "function") {
                                    console.log("Executor Userscript detected — running the built-in version.");
                                    ExecutorUserScriptVersion();
                                } else {
                                    new Function("var testCSP='CSP check'")();
                                    var s = document.createElement('script');
                                    s.src = 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Menu@main/menu.js';
                                    s.onload = function() {
                                        s.remove();
                                    };
                                    s.onerror = function() {
                                        alert('Error loading the script.\n\nTry:\n1. Visiting a different site (some block scripts)\n2. Reinstall the bookmarklet\n3. Contact the owner.');
                                        console.error('Script load error via <script src>');
                                    };
                                    document.body.appendChild(s);
                                }
                            } catch (e) {
                                if (e.message.includes('Content Security Policy')) {
                                    var i = document.querySelector('iframe');
                                    var m = 'Script blocked by Content Security Policy.\n\nTry:\n1. Visit a different site\n2. Use the Spoofer\n3. Contact the owner.';
                                    i ? i.contentWindow.alert(m) : alert(m);
                                } else {
                                    alert('Script execution failed.\n\nTry:\n1. Visit a different site\n2. Reinstall the bookmarklet\n3. Contact the owner.');
                                    console.error('Execution error:', e);
                                }
                            }
                        },
                    },
                    {
                        name: "Toggle Invert Colors",
                        description: "Toggle between inverting and restoring colors on the page",
                        run: function() {
                            const html = document.documentElement;
                            html.style.filter = html.style.filter === "invert(1)" ? "" : "invert(1)";
                            const elems = document.querySelectorAll("a, img, video");
                            for (let i = 0; i < elems.length; i++) {
                                const el = elems[i];
                                if ((el.nodeName === "A" && (el.style.background !== "" || el.style.backgroundImage !== "")) || el.nodeName !== "A") {
                                    el.style.filter = el.style.filter === "invert(1)" ? "" : "invert(1)";
                                }
                            }
                        },
                    },
                    {
                        name: "Toggle Dark Mode",
                        description: "Toggles Dark Mode",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e),
                                window.alert = e.contentWindow.alert.bind(window),
                                e.remove(),
                                ! function e() {
                                    let t = document.querySelectorAll("#nightify");
                                    if (t.length)
                                        t[0].parentNode.removeChild(t[0]);
                                    else {
                                        var a = document.getElementsByTagName("head")[0],
                                            o = document.createElement("style");
                                        o.setAttribute("type", "text/css"),
                                            o.setAttribute("id", "nightify"),
                                            o.appendChild(document.createTextNode(`html{-webkit-filter:invert(100%) hue-rotate(180deg) contrast(70%) !important; background: #222;} .line-content {background-color: #333;} html img{-webkit-filter:invert(100%) hue-rotate(0deg) contrast(100%) !important;}`)),
                                            a.appendChild(o)
                                    }
                                }
                                ()
                        }
                    }, {
                        name: "3D Page",
                        description: "Makes the page 3D",
                        run: function() {
                            var e = {
                                menu: document.createElement("div"),
                                limit: document.createElement("input"),
                                gap: document.createElement("input"),
                                sag: document.createElement("input"),
                                fov: document.createElement("input"),
                                flo: document.createElement("input"),
                                off: document.createElement("input"),
                                non: document.createElement("input"),
                                end: document.createElement("input"),
                                tgl: document.createElement("input"),
                                cssStatic: document.createElement("style"),
                                cssDynamic: document.createElement("style"),
                                orientation: {
                                    yaw: 0,
                                    pitch: 0,
                                    roll: 0
                                },
                                mouseMove: function(t) {
                                    e.orientation.yaw = -(180 * Math.cos(Math.PI * t.clientX / innerWidth)) * e.limit.value,
                                        e.orientation.pitch = 180 * Math.cos(Math.PI * t.clientY / innerHeight) * e.limit.value,
                                        e.updateBody()
                                },
                                gyroMove: function(t) {
                                    innerWidth > innerHeight ? (e.orientation.yaw = -(t.alpha + t.beta), e.orientation.pitch = t.gamma - 90 * Math.sign(90 - Math.abs(t.beta))) : (e.orientation.yaw = -(t.alpha + t.gamma), e.orientation.pitch = t.beta - 90),
                                        e.updateBody()
                                },
                                updateOrigin: function(e) {
                                    document.body.style.transformOrigin = innerWidth / 2 + pageXOffset + "px " + (innerHeight / 2 + pageYOffset) + "px"
                                },
                                updateBody: function() {
                                    document.body.style.transform = "perspective(" + Math.pow(2, e.fov.value) + "px) translateZ(-" + e.gap.value + "px) rotateX(" + e.orientation.pitch + "deg) rotateY(" + e.orientation.yaw + "deg)"
                                },
                                updateCSS: function() {
                                    if (e.non.checked)
                                        e.cssDynamic.innerHTML = "";
                                    else if (e.off.checked)
                                        e.cssDynamic.innerHTML = "* { transform-style: preserve-3d; }";
                                    else {
                                        for (var t = 0; document.querySelector("body" + " > *".repeat(t)); t++);
                                        var a = e.gap.value / t,
                                            o = -Math.PI * e.sag.value / t;
                                        e.cssDynamic.innerHTML = ` * { transform: translateZ(${a}px) rotateX(${o}rad); transform-style: preserve-3d; transition: transform 1s; outline: 1px solid rgba(0, 0, 0, 0.0625); ${e.flo.checked ? "overflow: visible !important;" : ""} } *:hover { transform: translateZ(${2 * a}px) rotateX(${2 * o}rad); ${e.flo.checked ? "" : "overflow: visible;"} } `
                                    }
                                },
                                toggle: function() {
                                    "active" == e.menu.className ? e.menu.removeAttribute("class") : e.menu.className = "active"
                                },
                                quit: function() {
                                    window.removeEventListener("deviceorientation", e.gyroMove),
                                        window.removeEventListener("mousemove", e.mouseMove),
                                        window.removeEventListener("scroll", e.updateOrigin),
                                        window.addEventListener("resize", e.updateOrigin),
                                        e.menu.remove(),
                                        e.cssStatic.remove(),
                                        e.cssDynamic.remove(),
                                        document.body.removeAttribute("style")
                                },
                                newRange: function(t, a, o, r, i, n, s) {
                                    e.menu.appendChild(t),
                                        t.type = "range",
                                        t.min = o,
                                        t.max = i,
                                        t.step = r,
                                        t.value = n,
                                        t.addEventListener("input", s),
                                        e.menu.appendChild(document.createElement("span")).innerHTML = a,
                                        e.menu.appendChild(document.createElement("br"))
                                },
                                newCheckbox: function(t, a, o) {
                                    e.menu.appendChild(t),
                                        t.type = "checkbox",
                                        t.addEventListener("click", o),
                                        e.menu.appendChild(document.createElement("span")).innerHTML = a,
                                        e.menu.appendChild(document.createElement("br"))
                                },
                                newButton: function(t, a, o) {
                                    e.menu.appendChild(t),
                                        t.type = "button",
                                        t.value = a,
                                        t.addEventListener("click", o)
                                },
                                init: function() {
                                    document.body.parentNode.appendChild(e.menu).id = "tri-menu",
                                        e.newRange(e.limit, "limit", 0, .03125, 1, .125, e.updateBody),
                                        e.newRange(e.gap, "gap / distance", 0, 32, 512, 128, function() {
                                            e.updateCSS(),
                                                e.updateBody()
                                        }),
                                        e.newRange(e.sag, "sag", -.25, .03125, .25, 0, e.updateCSS),
                                        e.newRange(e.fov, "field of view", 7, 1, 13, 10, e.updateBody),
                                        e.newCheckbox(e.flo, "force overflow", e.updateCSS),
                                        e.flo.setAttribute("checked", ""),
                                        e.newCheckbox(e.off, "flatten layers", e.updateCSS),
                                        e.newCheckbox(e.non, "flatten everything", e.updateCSS),
                                        e.newButton(e.end, "Quit", e.quit),
                                        e.newButton(e.tgl, "≡", e.toggle),
                                        e.tgl.id = "tri-toggle",
                                        e.menu.appendChild(e.cssStatic).innerHTML = " html, body { transition-property: none; height: 100%25; width: 100%25; } html, html:hover, #tri-menu, #tri-menu > *, #tri-menu > *:hover { transform: none; outline: none; overflow: auto !important; float: none; } #tri-menu { position: fixed; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); color: white; border: 1px solid rgba(255, 255, 255, 0.5);; border-radius: 0 0 16px 0; padding: 8px; transform: translate(-100%25, -100%25) translate(32px, 32px); } #tri-menu.active { transform: none; } #tri-toggle { position: absolute; bottom: 0; right: 0; height: 32px; width: 32px; background: transparent; color: white; border: none; cursor: pointer; } #tri-menu.active > #tri-toggle { background: white; color: black; border-radius: 8px 0 0 0; }",
                                        e.menu.appendChild(e.cssDynamic),
                                        e.updateCSS(),
                                        window.addEventListener("deviceorientation", e.gyroMove),
                                        window.addEventListener("mousemove", e.mouseMove),
                                        window.addEventListener("scroll", e.updateOrigin),
                                        window.addEventListener("resize", e.updateOrigin),
                                        window.scrollBy(0, 1)
                                }
                            };
                            e.init()
                        }
                    }, {
                        name: "Auto Clicker",
                        description: "Automatically clicks for you. Press S to toggle.",
                        inputs: [{
                            name: "Click Delay",
                            type: "number"
                        }],
                        run: function(inputs) {
                            clicker: {
                                "use strict";
                                let clickInterval = null;
                                let clickingEnabled = true;
                                const {
                                    Number,
                                    self
                                } = window;
                                const milliseconds = Number.parseInt(inputs, 10);
                                if (false === Number.isSafeInteger(milliseconds)) {
                                    self.alert("Input was not an integer");
                                    break clicker;
                                }
                                let clientX = 0,
                                    clientY = 0;
                                const {
                                    document
                                } = self;

                                function startClicking() {
                                    clickInterval = self.setInterval(() => {
                                        document.elementFromPoint(clientX, clientY)?.click?.();
                                    }, milliseconds);
                                }

                                function stopClicking() {
                                    self.clearInterval(clickInterval);
                                    clickInterval = null;
                                }
                                startClicking();
                                document.addEventListener("mousemove", event => {
                                    ({
                                        clientX,
                                        clientY
                                    } = event);
                                }, {
                                    passive: true
                                });
                                self.addEventListener("keydown", event => {
                                    if (event.key === "s") {
                                        if (clickingEnabled) {
                                            stopClicking();
                                        } else {
                                            startClicking();
                                        }
                                        clickingEnabled = !clickingEnabled;
                                    }
                                });
                            }
                        }
                    }, {
                        name: "Tab Cloaker",
                        description: "Changes the tab image and name",
                        inputs: [{
                            name: "Icon URL",
                            type: "text",
                        }, {
                            name: "Tab Title",
                            type: "text",
                        }],
                        run: function(e, t) {
                            var a = document.querySelector("link[rel*='icon']") || document.createElement("link");
                            a.type = "image/x-icon",
                                a.rel = "shortcut icon",
                                a.href = e || "https://www.blooket.com/favicon.ico",
                                document.getElementsByTagName("head")[0].appendChild(a),
                                document.title = t || "Blooket"
                        }
                    }, {
                        name: "Grayscale Mode",
                        description: "Turns the page grayscale",
                        run: function() {
                            const html = document.documentElement;
                            html.style.filter =
                                html.style.filter === "grayscale(1)" ? "" : "grayscale(1)";
                        }
                    },
                    {
                        name: "Sepia Mode",
                        description: "Applies a sepia filter",
                        run: function() {
                            const html = document.documentElement;
                            html.style.filter =
                                html.style.filter === "sepia(1)" ? "" : "sepia(1)";
                        }
                    },
                    {
                        name: "High Contrast",
                        description: "Boosts contrast for readability",
                        run: function() {
                            const html = document.documentElement;
                            html.style.filter =
                                html.style.filter === "contrast(1.5)" ? "" : "contrast(1.5)";
                        }
                    },
                    {
                        name: "Soft Blur",
                        description: "Applies subtle blur",
                        run: function() {
                            const html = document.documentElement;
                            html.style.filter =
                                html.style.filter.includes("blur") ? "" : "blur(3px)";
                        }
                    },
                    {
                        name: "Pastel Theme",
                        description: "Soft pastel color palette",
                        run: function() {
                            if (document.getElementById("pastel-ui")) {
                                document.getElementById("pastel-ui").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "pastel-ui";
                            style.innerHTML = `* { filter: saturate(0.8) brightness(1.05); }`;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Rainbow Hue Cycle",
                        description: "Smooth color cycling",
                        run: function() {
                            if (window._rainbow) {
                                clearInterval(window._rainbow);
                                window._rainbow = null;
                                document.documentElement.style.filter = "";
                                return;
                            }
                            let i = 0;
                            window._rainbow = setInterval(() => {
                                document.documentElement.style.filter = `hue-rotate(${i++}deg)`;
                                if (i > 360) i = 0;
                            }, 40);
                        }
                    },
                    {
                        name: "Rounded UI",
                        description: "Extra rounded corners",
                        run: function() {
                            if (document.getElementById("rounded-ui")) {
                                document.getElementById("rounded-ui").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "rounded-ui";
                            style.innerHTML = `* { border-radius: 16px !important; }`;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Outline UI",
                        description: "Outlines UI elements",
                        run: function() {
                            if (document.getElementById("outline-ui")) {
                                document.getElementById("outline-ui").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "outline-ui";
                            style.innerHTML = `* { outline: 1px solid rgba(255,255,255,0.12); }`;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Flat UI",
                        description: "Removes shadows for a flat look",
                        run: function() {
                            if (document.getElementById("flat-ui")) {
                                document.getElementById("flat-ui").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "flat-ui";
                            style.innerHTML = `* { box-shadow: none !important; text-shadow: none !important; }`;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Wobbly UI",
                        description: "UI gently wobbles",
                        run: function() {
                            if (document.getElementById("wobbly-ui")) {
                                document.getElementById("wobbly-ui").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "wobbly-ui";
                            style.innerHTML = `
      * { animation: wobble 2s infinite alternate; }
      @keyframes wobble { 0% { transform: rotate(-1deg); } 100% { transform: rotate(1deg); } }
    `;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Floating UI",
                        description: "UI gently floats up and down",
                        run: function() {
                            if (document.getElementById("float-ui")) {
                                document.getElementById("float-ui").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "float-ui";
                            style.innerHTML = `
      * { animation: floaty 3s ease-in-out infinite; }
      @keyframes floaty { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-5px);} }
    `;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Tiny UI",
                        description: "Slightly shrinks UI",
                        run: function() {
                            const html = document.documentElement;
                            html.style.zoom = html.style.zoom === "0.9" ? "" : "0.9";
                        }
                    },
                    {
                        name: "Mirror Page",
                        description: "Flips page horizontally",
                        run: function() {
                            const html = document.documentElement;
                            html.style.transform = html.style.transform === "scaleX(-1)" ? "" : "scaleX(-1)";
                        }
                    },
                    {
                        name: "Outline Elements (Black)",
                        description: "Toggles black outlines on all page elements",
                        run: function() {
                            if (document.getElementById("outline-elements-black")) {
                                document.getElementById("outline-elements-black").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "outline-elements-black";
                            style.innerHTML = `
      * {
        outline: 1px solid black !important;
        outline-offset: -1px !important;
      }
    `;
                            document.head.appendChild(style);
                        }
                    }, {
                        name: "Outline Elements (Red)",
                        description: "Toggles red outlines on all page elements",
                        run: function() {
                            if (document.getElementById("outline-elements-red")) {
                                document.getElementById("outline-elements-red").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "outline-elements-red";
                            style.innerHTML = `
      * {
        outline: 1px solid red !important;
        outline-offset: -1px !important;
      }
    `;
                            document.head.appendChild(style);
                        }
                    }, {
                        name: "Light Screen Shake",
                        description: "Subtle screen shake",
                        run: function() {
                            document.body.animate(
                                [{
                                    transform: "translate(0,0)"
                                }, {
                                    transform: "translate(-2px,1px)"
                                }, {
                                    transform: "translate(2px,-1px)"
                                }, {
                                    transform: "translate(0,0)"
                                }], {
                                    duration: 200
                                }
                            );
                        }
                    },
                    {
                        name: "Jello UI",
                        description: "UI elements wobble like jello",
                        run: function() {
                            if (document.getElementById("jello-ui")) {
                                document.getElementById("jello-ui").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "jello-ui";
                            style.innerHTML = `
      * { animation: jello 1s infinite; }
      @keyframes jello {
        0%,100%{transform:scale3d(1,1,1);}
        25%{transform:scale3d(1.05,0.95,1);}
        50%{transform:scale3d(0.95,1.05,1);}
        75%{transform:scale3d(1.02,0.98,1);}
      }
    `;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Rotate Page",
                        description: "Rotates the entire page slowly",
                        run: function() {
                            const html = document.documentElement;
                            html.style.transition = "transform 0.5s";
                            html.style.transform = html.style.transform === "rotate(180deg)" ? "" : "rotate(180deg)";
                        }
                    },
                    {
                        name: "Scale Up Page",
                        description: "Slightly zooms in page",
                        run: function() {
                            const html = document.documentElement;
                            html.style.transform = html.style.transform === "scale(1.1)" ? "" : "scale(1.1)";
                        }
                    },
                    {
                        name: "Spin Slowly",
                        description: "Page spins continuously",
                        run: function() {
                            if (window._spin) {
                                clearInterval(window._spin);
                                window._spin = null;
                                document.documentElement.style.transform = "";
                                return;
                            }
                            let deg = 0;
                            window._spin = setInterval(() => {
                                deg += 1;
                                document.documentElement.style.transform = `rotate(${deg}deg)`;
                            }, 50);
                        }
                    },
                    {
                        name: "Flip Vertically",
                        description: "Flips page upside down",
                        run: function() {
                            const html = document.documentElement;
                            html.style.transform = html.style.transform === "scaleY(-1)" ? "" : "scaleY(-1)";
                        }
                    },
                    {
                        name: "Shake UI",
                        description: "UI elements shake slightly",
                        run: function() {
                            if (document.getElementById("shake-ui")) {
                                document.getElementById("shake-ui").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "shake-ui";
                            style.innerHTML = `
      * { animation: shake 0.2s infinite alternate; }
      @keyframes shake { 0%{transform:translate(0,0);} 50%{transform:translate(2px,-2px);} 100%{transform:translate(0,0);} }
    `;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Flip Horizontally Random",
                        description: "UI flips left and right repeatedly",
                        run: function() {
                            if (window._flipH) {
                                clearInterval(window._flipH);
                                window._flipH = null;
                                document.documentElement.style.transform = "";
                                return;
                            }
                            let flip = 1;
                            window._flipH = setInterval(() => {
                                document.documentElement.style.transform = `scaleX(${flip})`;
                                flip *= -1;
                            }, 500);
                        }
                    },
                    {
                        name: "Glow UI Pulse",
                        description: "UI elements glow and pulse gently",
                        run: function() {
                            if (document.getElementById("pulse-ui")) {
                                document.getElementById("pulse-ui").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "pulse-ui";
                            style.innerHTML = `
      * { animation: pulse 2s infinite; }
      @keyframes pulse { 0%,100%{box-shadow:none;} 50%{box-shadow:0 0 10px rgba(0,255,255,0.5);} }
    `;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "UI Zoom Pulse",
                        description: "UI elements pulse bigger and smaller",
                        run: function() {
                            if (document.getElementById("zoom-pulse-ui")) {
                                document.getElementById("zoom-pulse-ui").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "zoom-pulse-ui";
                            style.innerHTML = `
      * { animation: zoomPulse 2s infinite; }
      @keyframes zoomPulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.05);} }
    `;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Flip Random UI",
                        description: "UI elements flip randomly THIS WILL BREAK GUI, YOU WILL NEED TO RELOAD!",
                        run: function() {
                            if (window._flipUI) {
                                clearInterval(window._flipUI);
                                window._flipUI = null;
                                document.querySelectorAll("*").forEach(el => el.style.transform = "");
                                return;
                            }
                            window._flipUI = setInterval(() => {
                                document.querySelectorAll("*").forEach(el => {
                                    if (Math.random() < 0.05) el.style.transform = `rotate(${Math.random()*360}deg)`;
                                });
                            }, 200);
                        }
                    },
                    {
                        name: "Tilted Page",
                        description: "Page tilts left and right slowly",
                        run: function() {
                            if (window._tiltPage) {
                                clearInterval(window._tiltPage);
                                window._tiltPage = null;
                                document.documentElement.style.transform = "";
                                return;
                            }
                            let deg = -3;
                            let dir = 1;
                            window._tiltPage = setInterval(() => {
                                document.documentElement.style.transform = `rotate(${deg}deg)`;
                                deg += dir;
                                if (deg > 3 || deg < -3) dir *= -1;
                            }, 50);
                        }
                    },
                    {
                        name: "Page Flip Slowly",
                        description: "Page rotates slowly 360 degrees",
                        run: function() {
                            if (window._pageFlip) {
                                clearInterval(window._pageFlip);
                                window._pageFlip = null;
                                document.documentElement.style.transform = "";
                                return;
                            }
                            let deg = 0;
                            window._pageFlip = setInterval(() => {
                                deg += 1;
                                document.documentElement.style.transform = `rotate(${deg}deg)`;
                                if (deg >= 360) deg = 0;
                            }, 50);
                        }
                    }, {
                        name: "Cursor: Crosshair",
                        description: "Changes mouse cursor to crosshair",
                        run: function() {
                            document.body.style.cursor = document.body.style.cursor ? "" : "crosshair";
                        }
                    },
                    {
                        name: "Cursor: Pointer",
                        description: "Changes mouse cursor to pointer",
                        run: function() {
                            document.body.style.cursor = document.body.style.cursor ? "" : "pointer";
                        }
                    },
                    {
                        name: "Cursor: Grab",
                        description: "Changes mouse cursor to grab",
                        run: function() {
                            document.body.style.cursor = document.body.style.cursor ? "" : "grab";
                        }
                    },
                    {
                        name: "Cursor: Move",
                        description: "Changes mouse cursor to move",
                        run: function() {
                            document.body.style.cursor = document.body.style.cursor ? "" : "move";
                        }
                    },
                    {
                        name: "Cursor: Wait",
                        description: "Changes mouse cursor to wait",
                        run: function() {
                            document.body.style.cursor = document.body.style.cursor ? "" : "wait";
                        }
                    },
                    {
                        name: "Cursor: Help",
                        description: "Changes mouse cursor to help",
                        run: function() {
                            document.body.style.cursor = document.body.style.cursor ? "" : "help";
                        }
                    },
                    {
                        name: "Cursor: Text",
                        description: "Changes mouse cursor to text (I-beam)",
                        run: function() {
                            document.body.style.cursor = document.body.style.cursor ? "" : "text";
                        }
                    },
                    {
                        name: "Cursor: Progress",
                        description: "Changes mouse cursor to progress",
                        run: function() {
                            document.body.style.cursor = document.body.style.cursor ? "" : "progress";
                        }
                    },
                    {
                        name: "Cursor: Not-allowed",
                        description: "Changes mouse cursor to not-allowed",
                        run: function() {
                            document.body.style.cursor = document.body.style.cursor ? "" : "not-allowed";
                        }
                    },
                    {
                        name: "Cursor: Alias",
                        description: "Changes mouse cursor to alias",
                        run: function() {
                            document.body.style.cursor = document.body.style.cursor ? "" : "alias";
                        }
                    }, {
                        name: "Extra Bold Text",
                        description: "Extremely bold text",
                        run: function() {
                            if (document.getElementById("extra-bold-text")) {
                                document.getElementById("extra-bold-text").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "extra-bold-text";
                            style.innerHTML = `* { font-weight: 900 !important; }`;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Slightly Bigger Text For GUI",
                        description: "Slightly increases text size for readability",
                        run: function() {
                            if (document.getElementById("slightly-bigger-text")) {
                                document.getElementById("slightly-bigger-text").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "slightly-bigger-text";
                            style.innerHTML = `* { font-size: 1.05em !important; }`;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Outline Text",
                        description: "Adds strong outline to text for visibility",
                        run: function() {
                            if (document.getElementById("outline-text")) {
                                document.getElementById("outline-text").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "outline-text";
                            style.innerHTML = `
      * {
        text-shadow:
          -1px -1px 0 #000,
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000;
      }
    `;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Shadowed Text",
                        description: "Adds prominent shadow behind text for depth",
                        run: function() {
                            if (document.getElementById("shadow-text")) {
                                document.getElementById("shadow-text").remove();
                                return;
                            }
                            const style = document.createElement("style");
                            style.id = "shadow-text";
                            style.innerHTML = `
      * {
        text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
      }
    `;
                            document.head.appendChild(style);
                        }
                    },
                    {
                        name: "Rainbow Text",
                        description: "Text cycles through rainbow colors",
                        run: function() {
                            if (window._rainbowText) {
                                clearInterval(window._rainbowText);
                                window._rainbowText = null;
                                document.querySelectorAll("*").forEach(el => el.style.color = "");
                                return;
                            }
                            let hue = 0;
                            window._rainbowText = setInterval(() => {
                                document.querySelectorAll("*").forEach(el => el.style.color = `hsl(${hue},90%,55%)`);
                                hue += 3;
                                if (hue > 360) hue = 0;
                            }, 100);
                        }
                    }, {
                        name: "Reset Visuals",
                        description: "Resets all visual changes",
                        run: function() {
                            document.documentElement.style.filter = "";
                            document.documentElement.style.transform = "";
                            document.documentElement.style.zoom = "";
                            document.body.style.cursor = "";
                            clearInterval(window._rainbow);
                            window._rainbow = null;
                            document.querySelectorAll("style[id]").forEach(s => s.remove());
                            document.removeEventListener("mousemove", window._cursorCircle);
                            document.removeEventListener("mousemove", window._cursorTrailFn);
                            document.removeEventListener("mousemove", window._cursorSparkleFn);
                            document.removeEventListener("mousemove", window._cursorRainbowFn);
                            document.removeEventListener("mousemove", window._cursorGlowFn);
                        }
                    }, {
                        name: "Toggle Small Font",
                        description: "Switch GUI font-size between normal and slightly smaller.",
                        run: function() {
                            if (typeof gui !== "undefined") {
                                const current = gui.style.fontSize || getComputedStyle(gui).fontSize;
                                if (current === "13px") gui.style.fontSize = "";
                                else gui.style.fontSize = "13px";
                            } else {
                                console.warn("GUI element not found for Toggle Small Font");
                            }
                        },
                    },
                ],
            },
            custom_modules: {
                img: (() => {
                    const img = new Image();
                    img.src = "https://media.blooket.com/image/upload/c_limit,f_auto,h_250,fl_lossy,q_auto:low/v1767747712/mxquoykv3onnjgmw6zgl.png";
                    return img.src;
                })(),
                name: "Custom Modules",
                cheats: (() => {
                    if (detectCSP()) return [];
                    const customModules = CookieHelper.getCookie('custom_modules_list') || [];
                    return customModules.map((module, index) => {
                        const defaultDescription = module.description || `Custom Module #${index + 1}`;
                        if (module.type === 'execute') {
                            return {
                                name: module.name,
                                description: defaultDescription,
                                run: createFunctionFromCode(module.code)
                            };
                        } else if (module.type === 'toggle') {
                            return {
                                name: module.name,
                                description: defaultDescription,
                                type: 'toggle',
                                enabled: false,
                                data: null,
                                run: createFunctionFromCode(module.code)
                            };
                        } else if (module.type === 'edit') {
                            return {
                                name: module.name,
                                description: defaultDescription,
                                inputs: [{
                                    name: 'Value',
                                    type: 'string'
                                }],
                                run: createFunctionFromCode(module.code, 'value')
                            };
                        }
                    });
                })()
            },
            host: {
                img: "https://media.blooket.com/image/upload/wvpwgl0iywrjy11u7oy4",
                name: "Host",
                cheats: [{
                        name: "Host Any Gamemode",
                        description: "Change the selected gamemode on the host settings page",
                        inputs: [{
                            name: "Gamemode",
                            type: "options",
                            options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"]
                        }],
                        run: function(e) {
                            let t = document.createElement("iframe");
                            if (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), "/host/settings" != location.pathname)
                                return alert("Run this script on the host settings page");
                            let {
                                stateNode: a
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                                }
                                ())[1].children[0]._owner;
                            a.setState({
                                settings: {
                                    type: e
                                }
                            })
                        }
                    }, {
                        name: "Anti Timeout",
                        description: "Automatically sends packets to prevent the game from timing out",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    if (window.hook && window.hook.room) {
                                        hook.sendMessage('hostKeepAlive', {}, 'OUT');
                                    }
                                }, 500);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Timer Never Decreases",
                        description: "Spams packets to keep timer from decreasing",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                for (let i = 0; i < 30; i++) {
                                    setTimeout(() => {
                                        if (window.hook && window.hook.room) {
                                            hook.sendMessage('hostAddOneMinute', {}, 'OUT');
                                        }
                                    }, i * 5);
                                }
                                this.data = setInterval(() => {
                                    if (window.hook && window.hook.room) {
                                        hook.sendMessage('hostAddOneMinute', {}, 'OUT');
                                    }
                                }, 1000);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Toggle Spooky Theme",
                        description: "Toggles the spooky theme for Gold Quest",
                        run: function() {
                            (() => {
                                const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                                sn.season = sn.season ? 0 : 1;
                                sn.render();
                            })();
                        }
                    }, {
                        name: "Freeze Timer",
                        description: "Makes the host timer stop ingame",
                        run: function() {
                            (() => {
                                const {
                                    stateNode
                                } = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner;
                                clearInterval(stateNode.timerInterval);
                                stateNode.timerInterval = setInterval(function() {
                                    stateNode?.getClients?.(!1);
                                }, 4000);
                            })();
                        }
                    }, {
                        name: "Render Hours on Host Timer",
                        description: "Renders hours on host timer(use with remove host time limit). Can only render up to 24 hours.",
                        run: function() {
                            (() => {
                                const format = "HH:mm:ss";
                                const reg = '/(\\[[^\\[]*\\])|(\\\\)?(LTS|LT|LL?L?L?|l{1,4})/g';
                                if (!RegExp.prototype.tes) {
                                    RegExp.prototype.tes = RegExp.prototype.test;
                                }
                                RegExp.prototype.test = function(a) {
                                    if (a == "mm:ss" && this.toString() == reg) {
                                        return !0;
                                    }
                                    return RegExp.prototype.tes.apply(this, arguments);
                                }
                                if (!String.prototype.rep) {
                                    String.prototype.rep = String.prototype.replace;
                                }
                                String.prototype.replace = function(a, b) {
                                    if (this == "mm:ss" && a.toString() == reg) {
                                        return format;
                                    }
                                    return String.prototype.rep.apply(this, arguments);
                                }
                            })();
                        }
                    }, {
                        name: "View Lobbychat Logs",
                        description: "View messages players type in chat",
                        run: function() {
                            function reactHandler() {
                                return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                            }
                            document.addEventListener("keydown", function(e) {
                                if (e.key === "Shift" && e.code === "ShiftRight") {
                                    c.style.display = c.style.display === "none" ? "block" : "none";
                                }
                            });
                            const c = document.createElement("div");
                            c.className = "chat-box";
                            document.body.appendChild(c);
                            const h = document.createElement("div");
                            h.className = "chat-header";
                            h.textContent = "Chat Logs (RSHIFT to hide)";
                            c.appendChild(h);
                            const b = document.createElement("div");
                            b.className = "chat-body";
                            c.appendChild(b);

                            function a(e) {
                                const t = document.createElement("div");
                                t.textContent = e;
                                b.appendChild(t);
                                b.scrollTop = b.scrollHeight;
                            }
                            c.style.position = "fixed";
                            c.style.bottom = "20px";
                            c.style.right = "20px";
                            c.style.width = "300px";
                            c.style.height = "400px";
                            c.style.backgroundColor = "#fff";
                            c.style.border = "1px solid #ccc";
                            c.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
                            c.style.display = "block";
                            b.style.height = "360px";
                            b.style.overflowY = "scroll";
                            b.style.padding = "10px";
                            h.addEventListener("click", () => {
                                b.classList.toggle("open");
                            });
                            var da = reactHandler().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_;

                            function handleChat(e, t) {
                                if (t != null) {
                                    if (e.includes("/msg")) {
                                        t?.msg && (console.log(t.msg), a(e.split("/")[2] + ": " + t.msg));
                                    }
                                }
                            }
                            reactHandler().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_ = function(e, t, a, n) {
                                console.log(e, t, a, n);
                                handleChat(e, t);
                                da(e, t, a, n);
                            };
                            window.logsv = false;

                            function onsv(e) {
                                if (window.logsv) {
                                    a("Path: " + e.path.split("/").splice(2, 2).join("/") + " Val: " + ((typeof e.val === 'object') ? JSON.stringify(e.val) : e.val));
                                }
                            }
                            var orgsv = reactHandler().stateNode.props.liveGameController.setVal;
                            reactHandler().stateNode.props.liveGameController.setVal = function() {
                                onsv.apply(this, arguments);
                                orgsv.apply(this, arguments);
                            };
                            reactHandler().stateNode.props.liveGameController._liveApp.database().ref(`${reactHandler().stateNode.props.client.hostId}`).on("value", e => {});
                            a("Lobbychat successfully loaded!");

                            function app() {
                                c.style.wordWrap = "break-word";
                            }
                            app();
                        }
                    }, {
                        name: "Remove Host Time Limit",
                        description: "Removes the host time limit",
                        run: function() {
                            (() => {
                                const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                                sn.onAmountUpdate = function(t) {
                                    let settings = sn.state.settings;
                                    settings.amount = parseInt(t.target.value);
                                    sn.setState({
                                        settings
                                    });
                                }
                            })();
                        }
                    }, {
                        name: "Free Player Slots",
                        description: "Allows more players to join if the game is full",
                        run: async () => {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            const alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                            const players = await stateNode.props.liveGameController.getDatabaseVal("c");
                            let freed = 0;
                            if (!stateNode.state.blockedUsers) {
                                stateNode.state.blockedUsers = [];
                            }
                            async function wait(time) {
                                return new Promise(e => {
                                    setTimeout(e, time);
                                });
                            }
                            async function blockUser(name) {
                                if (stateNode.state.blockedUsers.includes(name)) {
                                    return;
                                }
                                const res = await fetch("https://fb.blooket.com/c/firebase/block", {
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    method: "POST",
                                    body: JSON.stringify({
                                        g: stateNode.props.host.id,
                                        u: name
                                    }),
                                    credentials: "include"
                                });
                                if (res.status !== 200) {
                                    return;
                                }
                                stateNode.state.blockedUsers.push(name);
                                freed++;
                                if (freed % parseInt("15") == 0) {
                                    await wait(600);
                                }
                                C.alerts?.[0].addLog("Freed user: " + name);
                            }
                            for (let i in players) {
                                await blockUser(i);
                            }
                            alert(`Freed slots: ${freed}`);
                        }
                    }, {
                        name: "Realtime Updates",
                        description: "Makes leaderboard updates happen in real-time.",
                        run: async () => {
                            const stateNode = () => Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                            (await stateNode().props.liveGameController.getDatabaseRef("")).on("value", e => stateNode()?.getClients?.(!1));
                        }
                    }, {
                        name: "Anti-Flood",
                        description: "Prevents bots from flooding the game",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (this.enabled) {
                                return;
                            }
                            this.enabled = true;
                            this.data = setInterval(async () => {
                                var iframe = document.createElement("iframe");
                                document.body.append(iframe);
                                window.confirm = iframe.contentWindow.confirm.bind(window);
                                iframe.style.display = "none";
                                try {
                                    let stateNode = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode;
                                    var dbRef = await stateNode.props.liveGameController.getDatabaseRef("c");
                                    let currentClients = {},
                                        clientCounts = {};
                                    dbRef.on("value", snapshot => {
                                        var clients = snapshot.val() || {};
                                        var newClients = [];
                                        for (const key in clients) {
                                            if (!currentClients[key]) {
                                                newClients.push(key);
                                                clientCounts[key.replace(/[0-9]/g, "")] = (clientCounts[key.replace(/[0-9]/g, "")] || 0) + 1;
                                            }
                                        }
                                        currentClients = clients;
                                        for (const client of newClients) {
                                            if (currentClients[client].g || clientCounts[client.replace(/[0-9]/g, "")] > 1) {
                                                stateNode.props.liveGameController.blockUser(client);
                                                clientCounts[client.replace(/[0-9]/g, "")]--;
                                            }
                                        }
                                    });
                                } catch (error) {
                                    console.error("An error occurred", error);
                                }
                            }, 2000);
                        }
                    }, {
                        name: "Enable Mobile Hosting",
                        description: "Makes it so that you can host on mobile",
                        run: function() {
                            (function() {
                                var metaViewport = document.querySelector('meta[name="viewport"]');
                                if (metaViewport) {
                                    metaViewport.parentNode.removeChild(metaViewport);
                                }
                                var newMetaViewport = document.createElement('meta');
                                newMetaViewport.name = 'viewport';
                                newMetaViewport.content = 'width=1280, initial-scale=1';
                                document.head.appendChild(newMetaViewport);
                            })();
                        }
                    }, {
                        name: "Kick All Players",
                        description: "Kicks all players from your game.",
                        run: async () => {
                            const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                            const db = await sn.props.liveGameController.getDatabaseVal("");
                            sn.props.liveGameController.setVal({
                                path: "bu",
                                val: Object.keys(db.c).reduce((a, b) => (a[b] = 1, a), db.bu ? db.bu : {})
                            });
                            sn.props.liveGameController.setVal({
                                path: "c",
                                val: {}
                            });
                        }
                    }
                ],
            },
            gold: {
                img: new Date().getMonth() == 9 ? "https://media.blooket.com/image/upload/v1663212881/Media/logos/Candy_Quest_Logo.png" : "https://media.blooket.com/image/upload/v1663212881/Media/logos/Gold_Quest_Logo_Resized.png",
                name: "Gold Quest",
                cheats: [{
                        name: "Always Triple",
                        description: "Always get triple gold",
                        type: "toggle",
                        enabled: false,
                        data: {
                            type: "multiply",
                            val: 3,
                            text: "Triple Gold!",
                            blook: "Unicorn"
                        },
                        run: function() {
                            let stateNode = getStateNode();
                            stateNode._choosePrize ||= stateNode.choosePrize;
                            if (!this.enabled) {
                                this.enabled = true;
                                stateNode.choosePrize = (i) => {
                                    stateNode.state.choices[i] = this.data;
                                    stateNode._choosePrize(i);
                                };
                            } else {
                                this.enabled = false;
                                if (stateNode._choosePrize) stateNode.choosePrize = stateNode._choosePrize;
                            }
                        },
                    },
                    {
                        name: "Always Quintuple",
                        description: "Always get quintuple gold",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                            e._choosePrize ||= e.choosePrize,
                                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null, e.choosePrize = e._choosePrize || e.choosePrize) : (this.enabled = !0, this.data = setInterval(() => {
                                    e.choosePrize = function(t) {
                                        e.state.choices[t] = {
                                                type: "multiply",
                                                val: 5,
                                                text: "Quintuple Gold!",
                                                blook: "Ice Elemental"
                                            },
                                            e._choosePrize(t)
                                    }
                                }, 50))
                        }
                    }, {
                        name: "Auto Choose",
                        description: "Automatically picks the option that would give you the most gold",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(async () => {
                                    let stateNode = getStateNode();
                                    if (stateNode.state.stage == "prize") {
                                        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                            try {
                                                if (players == null) return;
                                                players = Object.entries(players);
                                                let most = 0,
                                                    max = 0,
                                                    index = -1;
                                                for (let i = 0; i < players.length; i++)
                                                    if (players[i][0] != stateNode.props.client.name && players[i][1] > most) most = players[i][1];
                                                for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                    const choice = stateNode.state.choices[i];
                                                    let value = stateNode.state.gold;
                                                    if (choice.type == "gold") value = stateNode.state.gold + choice.val || stateNode.state.gold;
                                                    else if (choice.type == "multiply" || choice.type == "divide") value = Math.round(stateNode.state.gold * choice.val) || stateNode.state.gold;
                                                    else if (choice.type == "swap") value = most || stateNode.state.gold;
                                                    else if (choice.type == "take") value = stateNode.state.gold + most * choice.val || stateNode.state.gold;
                                                    if ((value || 0) <= max) continue;
                                                    max = value;
                                                    index = i + 1;
                                                }
                                                document.querySelector("div[class*='choice" + index + "']")?.click();
                                            } catch {}
                                        });
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Chest ESP",
                        description: "Shows what each chest will give you",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    getStateNode().state.choices.forEach(({
                                        text
                                    }, index) => {
                                        let chest = document.querySelector(`div[class*='choice${index + 1}']`);
                                        if (!chest || chest.querySelector("div")) return;
                                        let choice = document.createElement("div");
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Eczar";
                                        choice.style.fontSize = "2em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.transform = "translateY(200px)";
                                        choice.innerText = text;
                                        chest.append(choice);
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Remove Bad Choices",
                        description: "Removes the chance of getting Lose 25%, Lose 50%, and Nothing",
                        run: function() {
                            let iterator = Array.prototype[Symbol.iterator];
                            Array.prototype[Symbol.iterator] = function* values() {
                                if (this[0]?.type == "gold") {
                                    Array.prototype[Symbol.iterator] = iterator;
                                    console.log(this);
                                    for (let i = 0; i < this.length; i++)
                                        if (this[i].type == "divide" || this[i].type == "nothing") this.splice(i--, 1);
                                }
                                yield* iterator.apply(this);
                            };
                            getStateNode().constructor.prototype.answerNext.call({
                                nextReady: true,
                                here: true,
                                state: {
                                    correct: true
                                },
                                setState() {}
                            });
                        },
                    },
                    {
                        name: "Flood Alert Box",
                        description: "Makes the alert box filled with text",
                        inputs: [{
                            name: "Text",
                            type: "text"
                        }],
                        run: function(userInput) {
                            function getReactOwner() {
                                return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                            }

                            function repeatText(text, times) {
                                return new Array(times).fill(text).join(" ");
                            }

                            function setValForPlayer() {
                                getReactOwner().stateNode.props.liveGameController.getDatabaseVal("c/").then(data => {
                                    if (data != null) {
                                        const playerName = Object.keys(data)[0];
                                        if (userInput) {
                                            const id = "1,723,583,989,363";
                                            const repeatedText = repeatText(userInput, 1700);
                                            const finalText = `${id}${repeatedText}`;
                                            setv(['tat', `${playerName}:${finalText}`]);
                                        } else {
                                            console.log("No text entered. Operation cancelled.");
                                        }
                                    } else {
                                        console.log("Player not found!");
                                    }
                                });
                            }

                            function setv(args) {
                                getReactOwner().stateNode.props.liveGameController.setVal({
                                    path: "c/" + getReactOwner().stateNode.props.client.name + "/" + args[0],
                                    val: args.slice(1, args.length).join(" ")
                                });
                            }
                            setValForPlayer();
                        }
                    }, {
                        name: "Reset Players Gold",
                        description: "Sets a player's gold to 0",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let stateNode = getStateNode();
                                return stateNode.props.liveGameController._liveApp ? new Promise((res) => stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players)))) : [];
                            },
                        }, ],
                        run: function(target) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/tat",
                                val: target + ":swap:0",
                            });
                        },
                    },
                    {
                        name: "Set Gold",
                        description: "Sets amount of gold",
                        inputs: [{
                            name: "Gold",
                            type: "text",
                        }, ],
                        run: function(gold) {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                gold,
                                gold2: gold
                            });
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/g",
                                val: gold,
                            });
                        },
                    },
                    {
                        name: "Set Player's Gold",
                        description: "Sets another player's gold",
                        inputs: [{
                                name: "Player",
                                type: "options",
                                options: () => {
                                    let stateNode = getStateNode();
                                    return stateNode.props.liveGameController._liveApp ? new Promise((res) => stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players)))) : [];
                                },
                            },
                            {
                                name: "Gold",
                                type: "text",
                            },
                        ],
                        run: function(player, gold) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/tat",
                                val: player + ":swap:" + gold
                            });
                        }
                    },
                    {
                        name: "Reset All Players' Gold",
                        description: "Set's everyone else's gold to 0",
                        run: function() {
                            var e = document.createElement("iframe");
                            document.body.append(e),
                                window.alert = e.contentWindow.alert.bind(window),
                                e.remove();
                            let {
                                props: t,
                                state: a
                            } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
                                o = 0;
                            t.liveGameController.getDatabaseVal("c", async e => {
                                if (e)
                                    for (let r of Object.keys(e))
                                        t.liveGameController.setVal({
                                            path: "c/".concat(t.client.name),
                                            val: {
                                                b: t.client.blook,
                                                g: a.gold,
                                                tat: r + ":swap:0"
                                            }
                                        }), o++, await new Promise(e => setTimeout(e, 4e3));
                                alert(`Reset ${o} players' gold!`)
                            })

                        }
                    }, {
                        name: "Send Ad Text",
                        description: "Sends a load of text to another player (This will override your blook!)",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options() {
                                try {
                                    let {
                                        stateNode: e
                                    } = Object.values(function e(t = document.querySelector("body>div")) {
                                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                                        }
                                        ())[1].children[0]._owner;
                                    return new Promise(t => e?.props?.liveGameController?._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]));
                                } catch {
                                    return [];
                                }
                            },
                            name: "Text"
                        }],
                        run: async function(player, e) {
                            let {
                                props: t2
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                                }
                                ())[1].children[0]._owner.stateNode;
                            let repeatedText = `Dog:${Array(500).fill(e).join(' ')}`;
                            t2.client.blook = repeatedText;
                            t2.liveGameController.setVal({
                                path: `c/${t2.client.name}/b`,
                                val: repeatedText
                            });
                            t2.liveGameController.setVal({
                                path: `c/${t2.client.name}/tat`,
                                val: `${player}:196`
                            });
                        }
                    }, {
                        name: "Crash Host (Gold)",
                        description: "Crashes the Host's Game for Gold Quest",
                        inputs: [],
                        run: async function() {
                            function getOwner(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner?.stateNode ?
                                    t :
                                    getOwner(t.querySelector(":scope>div"));
                            }
                            let {
                                stateNode
                            } = Object.values(getOwner())[1].children[0]._owner;

                            function setv(args) {
                                stateNode.props.liveGameController.setVal({
                                    path: "c/" + stateNode.props.client.name + "/" + args[0],
                                    val: args.slice(1).join(" ")
                                });
                            }
                            setv(["g/t", "t"]);
                        }
                    }, {
                        name: "Swap Gold",
                        description: "Swaps gold with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: getPlayerOptions,
                        }, ],
                        run: function(player) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (!players || players[player] == null) return;
                                const gold = players[player].g || 0;
                                stateNode.props.liveGameController.setVal({
                                    path: "c/" + stateNode.props.client.name,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        tat: player + ":swap:" + (stateNode.state.gold || 0),
                                        g: gold,
                                    },
                                });
                                stateNode.setState({
                                    gold,
                                    gold2: gold
                                });
                            });
                        },
                    },
                    {
                        name: "Gold Lock",
                        description: "Prevents your gold from decreasing and hides swap/attack screens",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            let stateNode = getStateNode();
                            if (!this.enabled) {
                                this.enabled = true;
                                let lastGold = stateNode.state?.gold || 0;
                                const hideInterval = setInterval(() => {
                                    const modal = document.querySelector('[class*="modal"], [class*="popup"], [class*="overlay"], [class*="notification"], [class*="alert"], [class*="swap"], [class*="tat"]');
                                    if (modal && modal.style.display !== "none" && modal.style.display !== "hidden") {
                                        modal.style.display = "none";
                                        modal.style.visibility = "hidden";
                                        modal.remove();
                                    }
                                    const swapContainers = document.querySelectorAll('[class*="swapContainer"], [class*="tatContainer"], [class*="attackContainer"]');
                                    swapContainers.forEach(el => {
                                        if (el) el.remove();
                                    });
                                }, 50);
                                this.data = setInterval(() => {
                                    const currentGold = stateNode.state?.gold || 0;
                                    if (currentGold < lastGold) {
                                        const lostAmount = lastGold - currentGold;
                                        stateNode.props.liveGameController.setVal({
                                            path: "c/" + stateNode.props.client.name + "/g",
                                            val: lastGold
                                        });
                                        stateNode.setState({
                                            gold: lastGold,
                                            gold2: lastGold
                                        });
                                        if (typeof Swal !== "undefined") {
                                            Swal.fire({
                                                title: "Gold Protected",
                                                text: `Blocked loss of ${lostAmount.toLocaleString()} gold`,
                                                icon: "success",
                                                toast: true,
                                                position: "bottom-end",
                                                timer: 2000,
                                                timerProgressBar: true,
                                                showConfirmButton: false,
                                                background: "#151534",
                                                color: "#ffffff"
                                            });
                                        }
                                    } else {
                                        lastGold = currentGold;
                                    }
                                }, 100);
                                this.hideInterval = hideInterval;
                            } else {
                                this.enabled = false;
                                if (this.data) {
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                                if (this.hideInterval) {
                                    clearInterval(this.hideInterval);
                                    this.hideInterval = null;
                                }
                                if (typeof Swal !== "undefined") {
                                    Swal.fire({
                                        title: "Gold Lock Disabled",
                                        text: "Your gold is no longer protected",
                                        icon: "info",
                                        toast: true,
                                        position: "bottom-end",
                                        timer: 2000,
                                        showConfirmButton: false,
                                        background: "#151534",
                                        color: "#ffffff"
                                    });
                                }
                            }
                        }
                    },
                ],
            },
            hack: {
                img: "https://media.blooket.com/image/upload/v1663212882/Media/logos/Crypto_Hack_Logo_Resized.png",
                name: "Crypto Hack",
                cheats: [{
                        name: "Choice ESP",
                        description: "Shows what each choice will give you",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let chest = document.querySelector("[class*=feedbackContainer]");
                                    if (chest.children.length <= 4) {
                                        let choice = document.createElement("div");
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif";
                                        choice.style.fontSize = "2em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.marginTop = "675px";
                                        choice.innerText = getStateNode().state.choices[0].text;
                                        chest.append(choice);
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Password ESP",
                        description: "Highlights the correct password",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let {
                                        state
                                    } = getStateNode();
                                    if (state.stage == "hack")
                                        for (const button of document.querySelector("div[class*=buttonContainer]").children) {
                                            if (button.innerText == state.correctPassword) continue;
                                            button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                                            button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                                            button.style.textShadow = "0 0 1px #f33";
                                        }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Set Host Screen Green",
                        description: "Makes the whole screen filled with text",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            var a = Object.values(function e(t = document.querySelector("#app")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                                }
                                ())[1].children[0]._owner.stateNode;
                            if (this.enabled) {
                                this.enabled = !1;
                                clearInterval(this.data);
                                this.data = null;
                                a.props.liveGameController.setVal({
                                    path: `c/${a.props.client.name}/cr`,
                                    val: ""
                                });
                            } else {
                                this.enabled = !0;
                                let t = () => {
                                    a.props.liveGameController.setVal({
                                        path: `c/${a.props.client.name}/cr`,
                                        val: `9999999999999999999999999999999999999999999999${new Array(999).fill("็".repeat(70)).join(" ")}`
                                    });
                                };
                                this.data = setInterval(t, 25);
                            }
                        }
                    }, {
                        name: "Always Quintuple",
                        description: "Always get quintuple crypto",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                                choices: [{
                                    type: "mult",
                                    val: 5,
                                    rate: .075,
                                    blook: "Ice Elemental",
                                    text: "Quintuple Crypto"
                                }]
                            }), 50))
                        }
                    }, {
                        name: "Always Triple",
                        description: "Always get triple crypto",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval((state) => getStateNode().setState(state), 25, {
                                    choices: [{
                                        type: "mult",
                                        val: 3,
                                        rate: 0.075,
                                        blook: "Brainy Bot",
                                        text: "Triple Crypto"
                                    }]
                                });
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Always Hack",
                        description: "Always get hack",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                                choices: [{
                                    type: "hack",
                                    val: 3,
                                    rate: .075,
                                    blook: "Mega Bot",
                                    text: "HACK"
                                }]
                            }), 50))
                        }
                    }, {
                        name: "Set Freeze Password",
                        description: "Freezes other players when they attempt to hack you *IF TURNED ON IT WILL LAG YOU LIKE HELL*",
                        type: "toggle",
                        enabled: !1,
                        data: null,
                        run: function() {
                            const encodedChars = [
                                '\\u2f9f', '\\u4fff', '\\u4f52', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u4FF1', '\\u4FF2'
                            ];
                            const chars = encodedChars.map(char => eval(`"${char}"`));

                            function makeLongText() {
                                return new Array(3e+6).fill().map(e => chars[Math.floor(Math.random() * chars.length)]).join("");
                            }
                            var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                            if (this.enabled) {
                                this.enabled = !1;
                                clearInterval(this.data);
                                this.data = null;
                                t.setState({
                                    password: ''
                                });
                                t.props.liveGameController.setVal({
                                    path: "c/".concat(t.props.client.name),
                                    val: {
                                        b: t.props.client.blook,
                                        p: '',
                                        cr: t.state.crypto
                                    }
                                });
                            } else {
                                this.enabled = !0;
                                let lagFunction = () => {
                                    var e = makeLongText();
                                    t.setState({
                                        password: e
                                    });
                                    t.props.liveGameController.setVal({
                                        path: "c/".concat(t.props.client.name),
                                        val: {
                                            b: t.props.client.blook,
                                            p: e,
                                            cr: t.state.crypto
                                        }
                                    });
                                };
                                this.data = setInterval(lagFunction, 25);
                            }
                        }
                    }, {
                        name: "Auto Guess",
                        description: "Automatically guess the correct password",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let {
                                        state
                                    } = getStateNode();
                                    if (state.stage == "hack")
                                        for (const button of document.querySelector("div[class*=buttonContainer]").children) button.innerText == state.correctPassword && button.click();
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Remove Hack",
                        description: "Removes an attacking hack",
                        run: function() {
                            getStateNode().setState({
                                hack: ""
                            });
                        },
                    },
                    {
                        name: "Crypto Spy Panel",
                        description: "Shows password + crypto for every player in Crypto Hack",
                        type: "button",
                        run: function() {
                            if (!location.href.includes("cryptohack")) {
                                return alert("This panel works ONLY in Crypto Hack.");
                            }
                            let lgc = Logs.getLiveGameController();
                            if (!lgc) return alert("No liveGameController found.");
                            const panel = document.createElement("div");
                            panel.style = `
            position: fixed; top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            background: #121212;
            padding: 18px 22px;
            border-radius: 16px;
            z-index: 999999;
            width: 400px;
            max-height: 80vh;
            color: white;
            font-family: 'Nunito', sans-serif;
            box-shadow: 0 0 25px rgba(0,0,0,0.7);
            display: flex;
            flex-direction: column;
        `;
                            panel.innerHTML = `
            <div style="font-size:22px;font-weight:800;text-align:center;margin-bottom:10px;">
                🔍 Crypto Spy Panel
            </div>
            <div style="display:flex;justify-content:center;gap:10px;margin-bottom:10px;">
                <button id="refresh-crypto-spy" style="
                    padding:6px 12px;border-radius:8px;border:none;
                    background:#2b6cb0;color:white;font-size:14px;font-weight:600;cursor:pointer;
                ">Refresh</button>
                <button id="close-crypto-spy" style="
                    padding:6px 12px;border-radius:8px;border:none;
                    background:#d23b3b;color:white;font-size:14px;font-weight:600;cursor:pointer;
                ">Close</button>
            </div>
            <div id="crypto-spy-content" style="
                flex:1;overflow-y:auto;padding-right:4px;
                font-size:14px;line-height:1.4;
            ">
                <div style="opacity:0.6;text-align:center;">Loading player stats...</div>
            </div>
        `;
                            document.body.appendChild(panel);
                            const contentDiv = document.getElementById("crypto-spy-content");

                            function loadPlayerData() {
                                contentDiv.innerHTML = `<div style="opacity:0.6;text-align:center;">Loading player stats...</div>`;
                                lgc.getDatabaseVal("c", data => {
                                    if (!data) {
                                        contentDiv.innerHTML = "<div style='text-align:center;color:#aaa;'>No player data found.</div>";
                                        return;
                                    }
                                    let html = "";
                                    for (const player in data) {
                                        const p = data[player];
                                        let password =
                                            p?.p ??
                                            p?.Password ??
                                            p?.tat?.Password ??
                                            "?";
                                        html += `
                        <div style="
                            padding:8px 10px;background:#1d1d1d;border-radius:10px;
                            margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;
                        ">
                            <div style="flex:1;min-width:0;">
                                <div style="font-size:16px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    ${player}
                                </div>
                                <div style="font-size:13px;opacity:0.8;">
                                    🔑 Password: <b>${password}</b>
                                </div>
                            </div>
                            <div style="font-size:14px;font-weight:700;flex-shrink:0;">
                                🪙 ${p.cr ?? 0}
                            </div>
                        </div>
                    `;
                                    }
                                    contentDiv.innerHTML = html;
                                });
                            }
                            loadPlayerData();
                            document.getElementById("close-crypto-spy").onclick = () => panel.remove();
                            document.getElementById("refresh-crypto-spy").onclick = loadPlayerData;
                        }
                    }, {
                        name: "Set Host Screen Text",
                        description: "Makes the whole screen filled with text",
                        inputs: [{
                            name: "Text",
                            type: "text",
                        }],
                        run: function(e) {
                            let t = document.createElement("iframe");
                            document.body.append(t),
                                window.prompt = t.contentWindow.prompt.bind(window),
                                t.remove();
                            var a = Object.values(function e(t = document.querySelector("#app")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                                }
                                ())[1].children[0]._owner.stateNode;
                            a.props.liveGameController.setVal({
                                path: `c/${a.props.client.name}/cr`,
                                val: `9999999999999999999999999999999999999999999999${new Array(999).fill(e).join(" ")}`
                            })
                        }
                    }, {
                        name: "Send Ad Text",
                        description: "Sends a load of text to another player (This will override your blook!)",
                        inputs: [{
                                name: "Player",
                                options() {
                                    try {
                                        let {
                                            stateNode: e
                                        } = Object.values(
                                            (function find(t = document.querySelector("body>div")) {
                                                return Object.values(t)[1]?.children?.[0]?._owner?.stateNode ?
                                                    t :
                                                    find(t.querySelector(":scope>div"));
                                            })()
                                        )[1].children[0]._owner;
                                        return new Promise(resolve =>
                                            e?.props?.liveGameController?._liveApp ?
                                            e.props.liveGameController.getDatabaseVal("c", data => data && resolve(Object.keys(data))) :
                                            resolve([])
                                        );
                                    } catch {
                                        return [];
                                    }
                                }
                            },
                            {
                                name: "Text"
                            }
                        ],
                        run: async function(player, text) {
                            let {
                                props: t2
                            } = Object.values(
                                (function find(t = document.querySelector("body>div")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner?.stateNode ?
                                        t :
                                        find(t.querySelector(":scope>div"));
                                })()
                            )[1].children[0]._owner.stateNode;
                            let repeatedText = `Dog:${Array(500).fill(text).join(" ")}`;
                            t2.client.blook = repeatedText;
                            t2.liveGameController.setVal({
                                path: `c/${t2.client.name}/b`,
                                val: repeatedText
                            });
                            t2.liveGameController.setVal({
                                path: `c/${t2.client.name}/tat`,
                                val: `${player}:196`
                            });
                        }
                    }, {
                        name: "Flood Alert Box",
                        description: "Makes the alert box filled with text",
                        inputs: [{
                            name: "Text",
                            type: "text"
                        }],
                        run: function(userInput) {
                            function getReactOwner() {
                                return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                            }

                            function repeatText(text, times) {
                                return new Array(times).fill(text).join(" ");
                            }

                            function setValForPlayer() {
                                getReactOwner().stateNode.props.liveGameController.getDatabaseVal("c/").then(data => {
                                    if (data != null) {
                                        const playerName = Object.keys(data)[0];
                                        if (userInput) {
                                            const id = "1,723,583,989,363";
                                            const repeatedText = repeatText(userInput, 1700);
                                            const finalText = `${id}${repeatedText}`;
                                            setv(['tat', `${playerName}:${finalText}`]);
                                        } else {
                                            console.log("No text entered. Operation cancelled.");
                                        }
                                    } else {
                                        console.log("Player not found!");
                                    }
                                });
                            }

                            function setv(args) {
                                getReactOwner().stateNode.props.liveGameController.setVal({
                                    path: "c/" + getReactOwner().stateNode.props.client.name + "/" + args[0],
                                    val: args.slice(1, args.length).join(" ")
                                });
                            }
                            setValForPlayer();
                        }
                    }, {
                        name: "Set Crypto",
                        description: "Sets crypto",
                        inputs: [{
                            name: "Amount",
                            type: "text",
                        }, ],
                        run: function(amount) {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                crypto: amount,
                                crypto2: amount
                            });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/cr`,
                                val: amount,
                            });
                        },
                    },
                    {
                        name: "Crash Host (Crypto)",
                        description: "Crashes the Host's Game for Crypto Hack",
                        run: function() {
                            function reactHandler() {
                                return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                            }

                            function setv(args) {
                                reactHandler().stateNode.props.liveGameController.setVal({
                                    path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                                    val: args.slice(1, args.length).join(" ")
                                });
                            }
                            setv(['cr/t', 't']);
                        }
                    }, {
                        name: "Set Password",
                        description: "Sets hacking password",
                        inputs: [{
                            name: "Custom Password",
                            type: "string",
                        }, ],
                        run: function(password) {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                password
                            });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/p`,
                                val: password,
                            });
                        },
                    },
                    {
                        name: "Spam Hack Screen",
                        description: "Continuously shows hack screen on target player.",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let stateNode = getStateNode();
                                return stateNode.props.liveGameController._liveApp ?
                                    new Promise(res =>
                                        stateNode.props.liveGameController.getDatabaseVal(
                                            "c",
                                            players => players && res(Object.keys(players))
                                        )
                                    ) : [];
                            }
                        }],
                        run: function(target) {
                            if (!this.enabled) {
                                this.enabled = true;
                                if (!target) {
                                    this.enabled = false;
                                    return;
                                }
                                let stateNode = getStateNode();
                                const stealAmount = 0.00000000000000000000000000000000000000000000000000000000000000000000000001;
                                this.data = setInterval(() => {
                                    stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                        let player;
                                        if (
                                            players &&
                                            (player = Object.entries(players).find(
                                                x => x[0].toLowerCase() === target.toLowerCase()
                                            ))
                                        ) {
                                            const available = Number(player[1].cr) || 0;
                                            const steal = Math.min(stealAmount, available);
                                            if (steal <= 0) return;
                                            const currentCrypto = Number(stateNode.state.crypto) || 0;
                                            const newCrypto = currentCrypto + steal;
                                            stateNode.setState({
                                                crypto: newCrypto,
                                                crypto2: newCrypto
                                            });
                                            stateNode.props.liveGameController.setVal({
                                                path: "c/" + stateNode.props.client.name,
                                                val: {
                                                    b: stateNode.props.client.blook,
                                                    p: stateNode.state.password,
                                                    cr: newCrypto,
                                                    tat: player[0] + ":" + steal
                                                },
                                            });
                                        }
                                    });
                                }, 500);
                            } else {
                                this.enabled = false;
                                if (this.data) {
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                    },
                    {
                        name: "Steal Player's Crypto",
                        description: "Steals all of someone's crypto",
                        inputs: [{
                                name: "Player",
                                type: "options",
                                options: getPlayerOptions,
                            },
                            {
                                name: "Amount",
                                type: "number"
                            }
                        ],
                        run: function(target, stealAmount) {
                            if (!target || !Number.isFinite(stealAmount) || stealAmount <= 0) return;
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                let player;
                                if (
                                    players &&
                                    (player = Object.entries(players).find(
                                        x => x[0].toLowerCase() === target.toLowerCase()
                                    ))
                                ) {
                                    const available = Number(player[1].cr) || 0;
                                    const steal = Math.min(stealAmount, available);
                                    if (steal <= 0) return;
                                    const currentCrypto = Number(stateNode.state.crypto) || 0;
                                    const newCrypto = currentCrypto + steal;
                                    stateNode.setState({
                                        crypto: newCrypto,
                                        crypto2: newCrypto
                                    });
                                    stateNode.props.liveGameController.setVal({
                                        path: "c/" + stateNode.props.client.name,
                                        val: {
                                            b: stateNode.props.client.blook,
                                            p: stateNode.state.password,
                                            cr: newCrypto,
                                            tat: player[0] + ":" + steal
                                        },
                                    });
                                }
                            });
                        },
                    },
                    {
                        name: "Crypto Lock",
                        description: "Prevents your crypto from decreasing and hides attack screens",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            let stateNode = getStateNode();
                            if (!this.enabled) {
                                this.enabled = true;
                                let lastCrypto = stateNode.state?.crypto || 0;
                                const hideInterval = setInterval(() => {
                                    const modal = document.querySelector('[class*="modal"], [class*="popup"], [class*="overlay"], [class*="notification"], [class*="alert"], [class*="swap"], [class*="tat"]');
                                    if (modal && modal.style.display !== "none" && modal.style.display !== "hidden") {
                                        modal.style.display = "none";
                                        modal.style.visibility = "hidden";
                                        modal.remove();
                                    }
                                    const swapContainers = document.querySelectorAll('[class*="swapContainer"], [class*="tatContainer"], [class*="attackContainer"]');
                                    swapContainers.forEach(el => {
                                        if (el) el.remove();
                                    });
                                }, 50);
                                this.data = setInterval(() => {
                                    const currentCrypto = stateNode.state?.crypto || 0;
                                    if (currentCrypto < lastCrypto) {
                                        const lostAmount = lastCrypto - currentCrypto;
                                        stateNode.props.liveGameController.setVal({
                                            path: "c/" + stateNode.props.client.name + "/cr",
                                            val: lastCrypto
                                        });
                                        stateNode.setState({
                                            crypto: lastCrypto,
                                            crypto2: lastCrypto
                                        });
                                        if (typeof Swal !== "undefined") {
                                            Swal.fire({
                                                title: "Crypto Protected",
                                                text: `Blocked loss of ${lostAmount.toLocaleString()} crypto`,
                                                icon: "success",
                                                toast: true,
                                                position: "bottom-end",
                                                timer: 2000,
                                                timerProgressBar: true,
                                                showConfirmButton: false,
                                                background: "#151534",
                                                color: "#ffffff"
                                            });
                                        }
                                    } else {
                                        lastCrypto = currentCrypto;
                                    }
                                }, 100);
                                this.hideInterval = hideInterval;
                            } else {
                                this.enabled = false;
                                if (this.data) {
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                                if (this.hideInterval) {
                                    clearInterval(this.hideInterval);
                                    this.hideInterval = null;
                                }
                                if (typeof Swal !== "undefined") {
                                    Swal.fire({
                                        title: "Crypto Lock Disabled",
                                        text: "Your crypto is no longer protected",
                                        icon: "info",
                                        toast: true,
                                        position: "bottom-end",
                                        timer: 2000,
                                        showConfirmButton: false,
                                        background: "#151534",
                                        color: "#ffffff"
                                    });
                                }
                            }
                        }
                    },
                ],
            },
            fish: {
                img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Fishing_Frenzy_Logo_Resized.png",
                name: "Fishing Frenzy",
                cheats: [{
                        name: "Remove Distractions",
                        description: "Removes distractions",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    getStateNode().setState({
                                        party: ""
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Client Sided Frenzy",
                        description: "Frenzy for you only",
                        type: "toggle",
                        enabled: !1,
                        run: function() {
                            const componentInstance = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode;
                            if (this.enabled) {
                                this.enabled = !1;
                                componentInstance.setState({
                                    isFrenzy: false
                                });
                            } else {
                                this.enabled = !0;
                                componentInstance.setState({
                                    isFrenzy: true
                                });
                            }
                        }
                    }, {
                        name: "Frenzy",
                        description: "Sets everyone to frenzy mode",
                        run: function() {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: stateNode.state.weight,
                                    f: "Frenzy",
                                    s: true,
                                },
                            });
                        },
                    },
                    {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone",
                        inputs: [{
                            name: "Distraction",
                            type: "options",
                            options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"],
                        }, ],
                        run: function(f) {
                            let stateNode = getStateNode();
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: stateNode.state.weight,
                                    f,
                                    s: true,
                                },
                            });
                        },
                    },
                    {
                        name: "Set Next Fish",
                        description: "Sets the next fish to catch",
                        inputs: [{
                            name: "Fish",
                            type: "options",
                            options: ["Old Boot", "Waffle", "Two of Spades", "Jellyfish", "Clownfish", "Goldfish", "Frog", "Blizzard Clownfish", "Turtle", "Cat", "Lovely Frog", "Lucky Frog", "Poison Dart Frog", "Seal", "Walrus", "Fairy", "Crab", "Lemon Crab", "Pufferfish", "Blobfish", "Rainbow Jellyfish", "Octopus", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Narwhal", "Baby Shark", "Megalodon", "Alien", "Rainbow Narwhal", "UFO", "Santa Claus", "Swamp Monster", "Red Astronaut", "Spooky Pumpkin", "Dragon", "Tim the Alien"]
                        }],
                        run: function(e) {
                            function t() {
                                return Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner
                            }
                            var a = {
                                    "Old Boot": {
                                        rarity: "Trash",
                                        minWeight: 1,
                                        maxWeight: 10,
                                        tiers: ["F", "D", "C"]
                                    },
                                    Waffle: {
                                        rarity: "Trash",
                                        minWeight: 1,
                                        maxWeight: 10,
                                        tiers: ["F", "D", "C"]
                                    },
                                    "Two of Spades": {
                                        rarity: "Trash",
                                        minWeight: 1,
                                        maxWeight: 10,
                                        tiers: ["F", "D", "C"]
                                    },
                                    Jellyfish: {
                                        rarity: "Easy One",
                                        minWeight: 10,
                                        maxWeight: 25,
                                        tiers: ["D", "C", "B"]
                                    },
                                    Clownfish: {
                                        rarity: "Easy One",
                                        minWeight: 20,
                                        maxWeight: 45,
                                        tiers: ["D", "C", "B"]
                                    },
                                    Goldfish: {
                                        rarity: "Easy One",
                                        minWeight: 30,
                                        maxWeight: 65,
                                        tiers: ["D", "C", "B"]
                                    },
                                    Frog: {
                                        rarity: "Easy One",
                                        minWeight: 50,
                                        maxWeight: 100,
                                        tiers: ["D", "C", "B"]
                                    },
                                    "Blizzard Clownfish": {
                                        rarity: "Great Catch",
                                        minWeight: 75,
                                        maxWeight: 125,
                                        tiers: ["D", "C", "B"]
                                    },
                                    Turtle: {
                                        rarity: "Great Catch",
                                        minWeight: 100,
                                        maxWeight: 150,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    Cat: {
                                        rarity: "Great Catch",
                                        minWeight: 100,
                                        maxWeight: 200,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    "Lovely Frog": {
                                        rarity: "Great Catch",
                                        minWeight: 150,
                                        maxWeight: 350,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    "Lucky Frog": {
                                        rarity: "Great Catch",
                                        minWeight: 200,
                                        maxWeight: 400,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    "Poison Dart Frog": {
                                        rarity: "Great Catch",
                                        minWeight: 250,
                                        maxWeight: 750,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    Seal: {
                                        rarity: "Rare Find",
                                        minWeight: 500,
                                        maxWeight: 1e3,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    Walrus: {
                                        rarity: "Rare Find",
                                        minWeight: 700,
                                        maxWeight: 2200,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    Fairy: {
                                        rarity: "Rare Find",
                                        minWeight: 1500,
                                        maxWeight: 2500,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    Crab: {
                                        rarity: "Rare Find",
                                        minWeight: 1e3,
                                        maxWeight: 3e3,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    "Lemon Crab": {
                                        rarity: "Rare Find",
                                        minWeight: 2e3,
                                        maxWeight: 5e3,
                                        tiers: ["C", "B", "A"]
                                    },
                                    Pufferfish: {
                                        rarity: "Rare Find",
                                        minWeight: 2e3,
                                        maxWeight: 4e3,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    Blobfish: {
                                        rarity: "Rare Find",
                                        minWeight: 3e3,
                                        maxWeight: 5e3,
                                        tiers: ["D", "C", "B", "A"]
                                    },
                                    "Rainbow Jellyfish": {
                                        rarity: "Epic Grab",
                                        minWeight: 7e3,
                                        maxWeight: 1e4,
                                        tiers: ["C", "B", "A"]
                                    },
                                    Octopus: {
                                        rarity: "Epic Grab",
                                        minWeight: 1e4,
                                        maxWeight: 15e3,
                                        tiers: ["C", "B", "A"]
                                    },
                                    "Pirate Pufferfish": {
                                        rarity: "Epic Grab",
                                        minWeight: 12e3,
                                        maxWeight: 2e4,
                                        tiers: ["C", "B", "A"]
                                    },
                                    "Donut Blobfish": {
                                        rarity: "Epic Grab",
                                        minWeight: 13e3,
                                        maxWeight: 25e3,
                                        tiers: ["C", "B", "A"]
                                    },
                                    "Crimson Octopus": {
                                        rarity: "Epic Grab",
                                        minWeight: 15e3,
                                        maxWeight: 3e4,
                                        tiers: ["B", "A"]
                                    },
                                    Narwhal: {
                                        rarity: "Catch of the Day",
                                        minWeight: 25e3,
                                        maxWeight: 5e4,
                                        tiers: ["B", "A", "S"]
                                    },
                                    "Baby Shark": {
                                        rarity: "Catch of the Day",
                                        minWeight: 5e4,
                                        maxWeight: 1e5,
                                        tiers: ["B", "A", "S"]
                                    },
                                    Megalodon: {
                                        rarity: "Catch of the Day",
                                        minWeight: 25e4,
                                        maxWeight: 5e5,
                                        tiers: ["B", "A", "S"]
                                    },
                                    Alien: {
                                        rarity: "Angler's Legend",
                                        minWeight: 5e5,
                                        maxWeight: 7e5,
                                        tiers: ["A", "S"]
                                    },
                                    "Rainbow Narwhal": {
                                        rarity: "Angler's Legend",
                                        minWeight: 75e4,
                                        maxWeight: 1e6,
                                        tiers: ["A", "S", "S+"]
                                    },
                                    UFO: {
                                        rarity: "Angler's Legend",
                                        minWeight: 1e6,
                                        maxWeight: 2e6,
                                        tiers: ["A", "S", "S+"]
                                    },
                                    "Santa Claus": {
                                        rarity: "Angler's Legend",
                                        minWeight: 1e6,
                                        maxWeight: 2e6,
                                        tiers: ["A", "S", "S+"]
                                    },
                                    "Swamp Monster": {
                                        rarity: "Angler's Legend",
                                        minWeight: 1e6,
                                        maxWeight: 2e6,
                                        tiers: ["A", "S", "S+"]
                                    },
                                    "Red Astronaut": {
                                        rarity: "Angler's Legend",
                                        minWeight: 1e6,
                                        maxWeight: 2e6,
                                        tiers: ["A", "S", "S+"]
                                    },
                                    "Spooky Pumpkin": {
                                        rarity: "Angler's Legend",
                                        minWeight: 1e6,
                                        maxWeight: 2e6,
                                        tiers: ["A", "S", "S+"]
                                    },
                                    Dragon: {
                                        rarity: "Angler's Legend",
                                        minWeight: 1e6,
                                        maxWeight: 2e6,
                                        tiers: ["A", "S", "S+"]
                                    },
                                    "Tim the Alien": {
                                        rarity: "Angler's Legend",
                                        minWeight: 15e5,
                                        maxWeight: 25e9,
                                        tiers: ["A", "S", "S+"]
                                    }
                                },
                                o = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"];
                            if (!window.functionSet) {
                                var r = t().stateNode.answerNext;
                                t().stateNode.answerNext = function() {
                                    if (t().stateNode.state.hackFish) {
                                        var i,
                                            n,
                                            s;
                                        t().stateNode.setState({
                                                stage: "caught",
                                                isCast: !1,
                                                fish: {
                                                    name: i = e,
                                                    rarity: a[i].rarity,
                                                    weight: (n = a[i].minWeight, Math.floor(Math.random() * ((s = a[i].maxWeight) - n) + n)),
                                                    tier: a[i].tiers[Math.floor(Math.random() * a[i].tiers.length)],
                                                    isSpecial: o.includes(i) && 8 > Math.floor(100 * Math.random())
                                                },
                                                claimReady: !1
                                            }),
                                            setTimeout(function() {
                                                t().stateNode.setState({
                                                    claimReady: !0
                                                })
                                            }, 1600),
                                            t().stateNode.state.hackFish = null
                                    } else
                                        r.apply(this, arguments)
                                }
                            }
                            window.functionSet = !0,
                                ! function e(o) {
                                    if (Object.keys(a).includes(o))
                                        t().stateNode.state.hackFish = o;
                                    else {
                                        alert("That fish does not exist!");
                                        return
                                    }
                                }
                                (e)
                        }
                    }, {
                        name: "Set Lure",
                        description: "Sets fishing lure (range 1 - 5)",
                        inputs: [{
                            name: "Lure (1 - 5)",
                            type: "number",
                            min: 1,
                            max: 5,
                        }, ],
                        run: function(lure) {
                            getStateNode().setState({
                                lure: Math.max(Math.min(lure - 1, 4), 0)
                            });
                        },
                    },
                    {
                        name: "Set Weight",
                        description: "Sets weight",
                        inputs: [{
                            name: "Weight",
                            type: "text",
                        }, ],
                        run: function(weight) {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                weight,
                                weight2: weight
                            });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: weight,
                                    f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)],
                                },
                            });
                        },
                    },
                ],
            },
            fishsolo: {
                img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Fishing_Frenzy_Logo_Resized.png",
                name: "Fishing Frenzy (Solo Mode)",
                cheats: [{
                    name: "Set Lure",
                    description: "Sets your lure level",
                    type: "button",
                    inputs: [{
                        name: "Lure (1 - 5)",
                        type: "number",
                        min: 1,
                        max: 5,
                    }, ],
                    run: function(lure) {
                        (() => {
                            let iframe = document.createElement('iframe');
                            document.body.append(iframe);
                            const input = lure;
                            iframe.remove();
                            if (!input) return;
                            const targetInternal = parseInt(input) - 1;
                            if (isNaN(targetInternal) || targetInternal < 0 || targetInternal > 4) {
                                return alert("❌ Please enter a number between 1 and 5.");
                            }
                            const root = document.querySelector('#app') || document.body;
                            const rKey = Object.keys(root).find(k => k.startsWith('__reactFiber'));
                            if (!rKey) return;
                            let success = false;

                            function findAndDispatch(node) {
                                if (success || !node) return;
                                if (node.memoizedProps && typeof node.memoizedProps.lureLevel === 'number') {
                                    const currentLevel = node.memoizedProps.lureLevel;
                                    let parent = node.return;
                                    while (parent) {
                                        if (parent.memoizedState) {
                                            let hook = parent.memoizedState;
                                            let i = 0;
                                            while (hook) {
                                                if (i === 2 && hook.queue?.dispatch) {
                                                    if (hook.memoizedState === currentLevel) {
                                                        hook.queue.dispatch(targetInternal);
                                                        success = true;
                                                        return;
                                                    }
                                                }
                                                hook = hook.next;
                                                i++;
                                            }
                                        }
                                        parent = parent.return;
                                    }
                                }
                                findAndDispatch(node.child);
                                findAndDispatch(node.sibling);
                            }
                            findAndDispatch(root[rKey]);
                            if (success) {
                                alert(`✅ Lure Level permanently set to ${targetInternal + 1}!`);
                            } else {
                                alert("❌ Could not find Lure State Hook. Try catching one fish first.");
                            }
                        })();
                    },
                }, {
                    name: "Set Weight",
                    description: "Sets your weight",
                    type: "button",
                    inputs: [{
                        name: "Weight",
                        type: "text"
                    }, ],
                    run: function(weight) {
                        (() => {
                            let iframe = document.createElement('iframe');
                            document.body.append(iframe);
                            const input = weight;
                            iframe.remove();
                            if (!input) return;
                            const NEW_WEIGHT = parseFloat(input);
                            const root = document.querySelector('#app') || document.body;
                            const rKey = Object.keys(root).find(k => k.startsWith('__reactFiber'));
                            if (!rKey) return console.log("❌ React Root not found");
                            let success = false;

                            function findAndSet(node) {
                                if (success || !node) return;
                                if (node.memoizedState) {
                                    let hook = node.memoizedState;
                                    let i = 0;
                                    while (hook) {
                                        if (i === 2 && hook.queue?.dispatch) {
                                            const currentVal = hook.memoizedState;
                                            if (typeof currentVal === 'number') {
                                                hook.queue.dispatch(NEW_WEIGHT);
                                                success = true;
                                                return;
                                            }
                                        }
                                        hook = hook.next;
                                        i++;
                                    }
                                }
                                findAndSet(node.child);
                                findAndSet(node.sibling);
                            }
                            findAndSet(root[rKey]);
                            if (success) {
                                alert(`✅ Weight set to ${NEW_WEIGHT.toLocaleString()}!\n\nCatch a fish to update the UI.`);
                            } else {
                                alert("❌ Could not find Weight Hook. Catch one fish first!");
                            }
                        })();
                    },
                }]
            },
            pirate: {
                img: "https://media.blooket.com/image/upload/v1695317816/Media/logos/PiratesVoyageLogoSmall.png",
                name: "Pirate's Voyage",
                cheats: [{
                        name: "Heist ESP",
                        description: "Shows you what's under each chest during a heist",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        imgs: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const stateNode = getStateNode();
                                    if (stateNode.state.stage != "heist") return;
                                    if (this.imgs == null) this.imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), (x) => x.querySelector("img").src);
                                    const esp = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.memoizedState;
                                    for (const e of document.querySelectorAll("[class*=boxContent] > div")) e.remove();
                                    const open = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.next.next.memoizedState;
                                    Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (container, i) => {
                                        const box = container.firstChild.firstChild;
                                        if (open.includes(i)) return (box.style.opacity = "");
                                        box.style.opacity = "0.5";
                                        let d = document.createElement("div");
                                        d.innerHTML = "<img src='" + this.imgs[2 - esp[i]] + "' style='max-width: 75%; max-height: 75%'></img>";
                                        d.className = "chestESP";
                                        d.style.position = "absolute";
                                        d.style.inset = "0";
                                        d.style.display = "grid";
                                        d.style.placeItems = "center";
                                        d.style.pointerEvents = "none";
                                        container.onclick = () => {
                                            d.remove();
                                            box.style.opacity = "";
                                        };
                                        container.firstChild.prepend(d);
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Max Levels",
                        description: "Maxes out all islands and your boat",
                        run: function() {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                islandLevels: new Array(stateNode.state.islandLevels.length).fill(5)
                            }, stateNode.updateBoatLevel);
                        },
                    },
                    {
                        name: "Set Doubloons",
                        description: "Sets Doubloons",
                        inputs: [{
                            name: "Amount",
                            type: "number",
                        }, ],
                        run: function(doubloons) {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                doubloons
                            });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/d`,
                                val: doubloons,
                            });
                        },
                    },
                    {
                        name: "Start Heist",
                        description: "Starts a heist on someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: getPlayerOptions,
                        }, ],
                        run: function(target) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", function(val) {
                                if (val?.[target])
                                    stateNode.setState({
                                        stage: "heist",
                                        heistInfo: {
                                            name: target,
                                            blook: val[target].b
                                        },
                                        prizeAmount: Math.max(1000, val[target].d || 0),
                                    });
                            });
                        },
                    },
                    {
                        name: "Swap Doubloons",
                        description: "Swaps Doubloons with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: getPlayerOptions,
                        }, ],
                        run: async function(target) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", function(val) {
                                if (!val?.[target]) return;
                                stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}`,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        d: val[target].d,
                                        tat: `${target}:${val[target].d - stateNode.state.doubloons}`,
                                    },
                                });
                                stateNode.setState({
                                    doubloons: val[target].d
                                });
                            });
                        },
                    },
                    {
                        name: "Take Doubloons",
                        description: "Takes Doubloons from someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: getPlayerOptions,
                        }, ],
                        run: async function(target) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", function(val) {
                                if (!val?.[target]) return;
                                stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}`,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        d: stateNode.state.doubloons + val[target].d,
                                        tat: `${target}:${val[target].d}`,
                                    },
                                });
                                stateNode.setState({
                                    doubloons: stateNode.state.doubloons + val[target].d
                                });
                            });
                        },
                    },
                ],
            },
            defense2: {
                img: "https://media.blooket.com/image/upload/v1676079918/Media/logos/Tower_Defense_2_Logo_Resize.png",
                name: "Tower Defense 2",
                cheats: [{
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function() {
                            const phaser = GetPhaser();
                            const service = phaser.scene.towerService;
                            if (!service || !service.towers) {
                                return;
                            }
                            const towersDict = service.towers;
                            let totalUpgraded = 0;
                            Object.keys(towersDict).forEach(typeKey => {
                                const group = towersDict[typeKey];
                                let towers = [];
                                if (group.getChildren) towers = group.getChildren();
                                else if (group.children && group.children.entries) towers = group.children.entries;
                                else if (Array.isArray(group)) towers = group;
                                towers.forEach(tower => {
                                    tower.cd = 0;
                                    tower.fullCd = 1;
                                    if (tower.stats) {
                                        tower.stats.dmg = 1e+10;
                                        tower.stats.range = 1e+10;
                                        tower.stats.fireRate = 1e+10;
                                        tower.stats.ghostDetect = true;
                                        tower.stats.maxTargets = 1e+10;
                                        if (tower.stats.numProjectiles) {
                                            tower.stats.numProjectiles = 100;
                                        }
                                    }
                                    if (tower.rangeCircle) {
                                        tower.rangeCircle.radius = 1000;
                                    }
                                    totalUpgraded++;
                                });
                            });
                            if (totalUpgraded > 0) {
                                console.log(`✅ Upgraded ${totalUpgraded} towers (DMG, Range, Ghost Hit)!`);
                            } else {
                                console.log("⚠️ No active towers found.");
                            }
                        },
                    },
                    {
                        name: "Kill Enemies",
                        description: "Kills all the enemies",
                        run: function() {
                            const phaser = GetPhaser();
                            const enemyService = phaser.scene.enemyService;
                            if (!enemyService) {
                                return;
                            }
                            if (enemyService.enemyQueue) {
                                enemyService.enemyQueue.length = 0;
                            }
                            if (enemyService.enemies?.children?.entries) {
                                let killed = 0;
                                enemyService.enemies.children.entries.forEach(enemy => {
                                    if (enemy && enemy.hp && enemy.takeDamage) {
                                        enemy.takeDamage(enemy.hp);
                                        killed++;
                                    }
                                });
                                console.log(`✅ Killed ${killed} enemies!`);
                            } else {
                                console.log("⚠️ No enemies found");
                            }
                        },
                    },
                    {
                        name: "Set Coins",
                        description: "Sets coins",
                        inputs: [{
                            name: "Coins",
                            type: "number",
                        }],
                        run: function(coins) {
                            const phaser = GetPhaser();
                            if (!phaser.scene.gameManager) {
                                console.log("❌ Game Manager not found!");
                                return;
                            }
                            const amount = parseInt(coins);
                            if (!isNaN(amount)) {
                                phaser.scene.gameManager.coins = amount;
                                console.log(`✅ Coins set to ${amount}!\n\nNote: Buy something to update the display counter.`);
                            }
                        },
                    },
                    {
                        name: "Set Health",
                        description: "Sets the amount of health you have",
                        inputs: [{
                            name: "Health",
                            type: "number",
                        }],
                        run: function(health) {
                            const phaser = GetPhaser();
                            if (!phaser.scene.gameManager) {
                                console.log("❌ Game Manager not found!");
                                return;
                            }
                            let healthTarget = phaser.scene.gameManager;
                            if (healthTarget.health === undefined && phaser.scene.gameData?.health !== undefined) {
                                healthTarget = phaser.scene.gameData;
                            }
                            const amount = parseInt(health);
                            if (!isNaN(amount)) {
                                healthTarget.health = amount;
                                console.log(`✅ Health set to ${amount}!\n\nNote: only changes the health that it shows if you take any damage.`);
                            }
                        },
                    },
                    {
                        name: "Set Round",
                        description: "Sets the current round",
                        inputs: [{
                            name: "Round",
                            type: "number",
                        }],
                        run: function(round) {
                            const phaser = GetPhaser();
                            const enemyService = phaser.scene.enemyService;
                            if (!enemyService) {
                                console.log("❌ Enemy Service not found!");
                                return;
                            }
                            const amount = parseInt(round);
                            if (!isNaN(amount)) {
                                enemyService.waveNum = amount;
                                console.log(`✅ Round/Wave set to ${amount}!\n\nNote: You must finish the current wave for the game to jump to the new round.`);
                                if (enemyService.isWaveActive === false) {
                                    if (phaser.scene.hud?.updateWave) phaser.scene.hud.updateWave();
                                }
                            }
                        },
                    }
                ],
            },
            brawl: {
                img: "https://media.blooket.com/image/upload/v1663366470/Media/logos/Monster_Brawl_270x156_1.png",
                name: "Monster Brawl",
                cheats: [{
                        name: "Double Enemy XP",
                        description: "Doubles enemy XP drop value",
                        run: function() {
                            const phaser = GetPhaser();
                            if (!phaser) return;
                            let modified = 0;
                            const processed = new Set();
                            const monitor = setInterval(() => {
                                phaser.groups.forEach(group => {
                                    group.children?.entries?.forEach(enemy => {
                                        if (!processed.has(enemy) && enemy.val != null) {
                                            enemy.val *= 2;
                                            processed.add(enemy);
                                            modified++;
                                        }
                                    });
                                });
                            }, 50);
                            setTimeout(() => {
                                console.log(modified > 0 ?
                                    `✅ Doubled ${modified} enemies' XP!` :
                                    "⚠️ No enemies yet. They'll be doubled automatically!");
                            }, 2000);
                        },
                    },
                    {
                        name: "Half Enemy Speed",
                        description: "Makes enemies move 2x slower",
                        run: function() {
                            const phaser = GetPhaser();
                            if (!phaser) return;
                            let modified = 0;
                            const processed = new Set();
                            const monitor = setInterval(() => {
                                phaser.groups.forEach(group => {
                                    group.children?.entries?.forEach(enemy => {
                                        if (!processed.has(enemy) && enemy.speed != null) {
                                            enemy.speed *= 0.5;
                                            processed.add(enemy);
                                            modified++;
                                        }
                                    });
                                });
                            }, 50);
                            setTimeout(() => {
                                console.log(modified > 0 ?
                                    `✅ Slowed ${modified} enemies!` :
                                    "⚠️ No enemies yet. They'll be slowed automatically!");
                            }, 2000);
                        },
                    },
                    {
                        name: "Instant Kill",
                        description: "Sets all enemies health to 1",
                        run: function() {
                            const phaser = GetPhaser();
                            if (!phaser) return;
                            let modified = 0;
                            const processed = new Set();
                            const monitor = setInterval(() => {
                                phaser.groups.forEach(group => {
                                    group.children?.entries?.forEach(enemy => {
                                        if (!processed.has(enemy) && enemy.hp != null && enemy.hp > 1) {
                                            enemy.hp = 1;
                                            processed.add(enemy);
                                            modified++;
                                        }
                                    });
                                });
                            }, 50);
                            setTimeout(() => {
                                console.log(modified > 0 ?
                                    `✅ ${modified} enemies now have 1 HP!` :
                                    "⚠️ No enemies yet. They'll have 1 HP automatically!");
                            }, 2000);
                        },
                    },
                    {
                        name: "Invincibility",
                        description: "Makes you invincible",
                        run: function() {
                            const phaser = GetPhaser();
                            if (!phaser) return;
                            window._invincibilityActive = true;
                            const monitor = setInterval(() => {
                                const player = phaser.player || phaser.scene.playerService?.player;
                                if (player) {
                                    player.setData?.('invulnerable', true);
                                    player.setData?.('invulnerableTime', Infinity);
                                    player.setData?.('dmgCd', Infinity);
                                }
                                if (phaser.playerBody) {
                                    phaser.playerBody.onCollide = false;
                                    phaser.playerBody.onWorldBounds = false;
                                }
                            }, 50);
                            setTimeout(() => {
                                if (phaser.player) {
                                    console.log("✅ Invincibility activated!");
                                } else {
                                    console.log("⚠️ Invincibility active! Move around to apply.");
                                }
                            }, 1000);
                        },
                    },
                    {
                        name: "ESP",
                        description: "Gives you esp and tracers",
                        type: "toggle",
                        enabled: false,
                        run: function() {
                            this.enabled = !this.enabled;
                            if (this.enabled) {
                                const self = this;

                                function initGraphics() {
                                    const phaser = GetPhaser();
                                    if (!phaser || self.graphics) return;
                                    self.graphics = phaser.scene.add.graphics();
                                    self.graphics.setDepth(9999);
                                }

                                function drawESP() {
                                    if (!self.graphics) initGraphics();
                                    if (!self.graphics) return;
                                    const phaser = GetPhaser();
                                    if (!phaser) return;
                                    self.graphics.clear();
                                    const player = phaser.player || phaser.scene.playerService?.player;
                                    phaser.groups.forEach(group => {
                                        group.children?.entries?.forEach(enemy => {
                                            if (!enemy?.active || enemy.hp == null) return;
                                            const w = enemy.width || 40;
                                            const h = enemy.height || 40;
                                            const x = enemy.x;
                                            const y = enemy.y;
                                            self.graphics.lineStyle(2, 0xff0000, 1);
                                            self.graphics.strokeRect(x - w / 2, y - h / 2, w, h);
                                            if (player?.x != null && player?.y != null) {
                                                self.graphics.lineStyle(1, 0xff0000, 0.4);
                                                self.graphics.beginPath();
                                                self.graphics.moveTo(player.x, player.y);
                                                self.graphics.lineTo(x, y);
                                                self.graphics.strokePath();
                                            }
                                        });
                                    });
                                }
                                this.interval = setInterval(drawESP, 16);
                            } else {
                                if (this.interval) {
                                    clearInterval(this.interval);
                                    this.interval = null;
                                }
                                if (this.graphics) {
                                    this.graphics.clear();
                                    this.graphics.destroy();
                                    this.graphics = null;
                                }
                            }
                        },
                    },
                    {
                        name: "Kill Enemies",
                        description: "Kills all current enemies",
                        run: function() {
                            const phaser = GetPhaser();
                            if (!phaser) return;
                            let killed = 0;
                            phaser.groups.forEach(group => {
                                group.children?.entries?.forEach(enemy => {
                                    if (enemy.texture?.key?.includes('player')) return;
                                    if (enemy.receiveDamage && enemy.hp != null) {
                                        try {
                                            enemy.receiveDamage(enemy.hp || 9999, 1);
                                            killed++;
                                            return;
                                        } catch (e) {}
                                    }
                                    if (enemy.hp != null) {
                                        enemy.hp = 0;
                                        enemy.die?.() || enemy.death?.();
                                        killed++;
                                    }
                                });
                            });
                        },
                    },
                    {
                        name: "Zoom Hack",
                        description: "Removes the window is too tall so you can zoom out with arrow keys",
                        type: "toggle",
                        enabled: false,
                        run: function() {
                            this.enabled = !this.enabled;
                            if (this.enabled) {
                                const style = document.createElement("style");
                                style.textContent = `
._wrapper_18iap_1 {
    display: none !important;
}
`;
                                document.head.appendChild(style);
                                this.styleElement = style;
                            } else {
                                if (this.styleElement) {
                                    this.styleElement.remove();
                                    this.styleElement = null;
                                }
                            }
                        },
                    },
                    {
                        name: "Magnet",
                        description: "Pulls all XP towards you",
                        run: function() {
                            const phaser = GetPhaser();
                            if (!phaser) return;
                            const player = phaser.player || phaser.scene.playerService?.player;
                            if (!player) {
                                alert("❌ Player not found! Move around and try again.");
                                return;
                            }
                            player.magnetTime = 999999;
                            alert("✅ Permanent magnet activated!");
                        },
                    },
                    {
                        name: "Make Abilities OP",
                        description: "Maxes out all your current abilities",
                        run: function() {
                            const phaser = GetPhaser();
                            if (!phaser) return;
                            const service = phaser.scene.abilityService;
                            if (!service?.abilityStats) {
                                alert("❌ Ability Service not found!");
                                return;
                            }
                            let unlocked = 0,
                                modified = 0;
                            Object.keys(service.abilityStats).forEach(ability => {
                                const stats = service.abilityStats[ability];
                                if (service.abilityLevels[ability] == null) {
                                    service.abilityLevels[ability] = 1;
                                    unlocked++;
                                }
                                if (stats.dmg != null) stats.dmg = 9999;
                                if (stats.fireRate != null) stats.fireRate = 50;
                                if (stats.maxTargets != null) stats.maxTargets = 999;
                                if (stats.numProjectiles != null) stats.numProjectiles = 50;
                                if (stats.speed != null) stats.speed = 2000;
                                if (stats.lifespan > 0) stats.lifespan = 10000;
                                if (stats.knockback != null) stats.knockback = 5;
                                if (stats.intervalRate != null) stats.intervalRate = 10;
                                if (stats.width != null) stats.width *= 5;
                                modified++;
                            });
                            alert(`✅ Abilities OP!\n\nUnlocked: ${unlocked}\nModified: ${modified}`);
                        },
                    },
                    {
                        name: "Set XP",
                        description: "Sets your XP",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function(xp) {
                            const phaser = GetPhaser();
                            if (!phaser) return;
                            const gm = phaser.scene.gameManager;
                            if (!gm) {
                                alert("❌ Game Manager not found!");
                                return;
                            }
                            const amount = parseInt(xp);
                            if (isNaN(amount)) {
                                alert("❌ Invalid number!");
                                return;
                            }
                            gm.totalXp = amount;
                            gm.curXp = amount;
                            phaser.scene.eventBus?.emit('xp-updated', amount);
                            alert(`✅ XP set to ${amount}!`);
                        },
                    },
                    {
                        name: "Reset Health",
                        description: "Resets health to full",
                        run: function() {
                            const phaser = GetPhaser();
                            if (!phaser) return;
                            if (!phaser.scene.eventBus) {
                                alert("❌ Event Bus not found!");
                                return;
                            }
                            try {
                                phaser.scene.eventBus.emit('respawn');
                                alert("✅ Health reset!");
                            } catch (e) {
                                alert(`❌ Error: ${e.message}`);
                            }
                        },
                    },
                ],
            },
            dino: {
                img: "https://media.blooket.com/image/upload/wyaci6d9idtpkd34rmzy",
                name: "Deceptive Dinos",
                cheats: [{
                        name: "Auto Choose",
                        description: "Automatically choose the best fossil when excavating",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        rand(e, t) {
                            const s = [];
                            while (s.length < t) {
                                const i = Math.random();
                                let r = 0,
                                    g = null;
                                for (let o = 0; o < e.length; o++) {
                                    r += e[o].rate;
                                    if (r >= i) {
                                        g = e[o];
                                        break;
                                    }
                                }
                                g && !s.includes(g) && s.push(g);
                            }
                            return s;
                        },
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    try {
                                        let stateNode = getStateNode();
                                        if (stateNode.state.stage === "excavate") {
                                            stateNode.state.choices.length ||
                                                (stateNode.state.choices = this.rand(
                                                    [{
                                                            type: "fossil",
                                                            val: 10,
                                                            rate: 0.1,
                                                            blook: "Amber"
                                                        },
                                                        {
                                                            type: "fossil",
                                                            val: 25,
                                                            rate: 0.1,
                                                            blook: "Dino Egg"
                                                        },
                                                        {
                                                            type: "fossil",
                                                            val: 50,
                                                            rate: 0.175,
                                                            blook: "Dino Fossil"
                                                        },
                                                        {
                                                            type: "fossil",
                                                            val: 75,
                                                            rate: 0.175,
                                                            blook: "Stegosaurus"
                                                        },
                                                        {
                                                            type: "fossil",
                                                            val: 100,
                                                            rate: 0.15,
                                                            blook: "Velociraptor"
                                                        },
                                                        {
                                                            type: "fossil",
                                                            val: 125,
                                                            rate: 0.125,
                                                            blook: "Brontosaurus"
                                                        },
                                                        {
                                                            type: "fossil",
                                                            val: 250,
                                                            rate: 0.075,
                                                            blook: "Triceratops"
                                                        },
                                                        {
                                                            type: "fossil",
                                                            val: 500,
                                                            rate: 0.025,
                                                            blook: "Tyrannosaurus Rex"
                                                        },
                                                        {
                                                            type: "mult",
                                                            val: 1.5,
                                                            rate: 0.05
                                                        },
                                                        {
                                                            type: "mult",
                                                            val: 2,
                                                            rate: 0.025
                                                        },
                                                    ],
                                                    3
                                                ));
                                            let max = 0,
                                                index = -1;
                                            for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                const {
                                                    type,
                                                    val
                                                } = stateNode.state.choices[i];
                                                const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                                if (value <= max && type != "mult") continue;
                                                (max = value), (index = i + 1);
                                            }
                                            document.querySelector('div[class*=rockRow] > div[role="button"]:nth-child(' + index + ")").click();
                                        }
                                    } catch {}
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Rock ESP",
                        description: "Shows what is under the rocks",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: (() => {
                            function rand(e, t) {
                                const s = [];
                                while (s.length < t) {
                                    const i = Math.random();
                                    let r = 0;
                                    let g;
                                    for (let o = 0; o < e.length; o++) {
                                        r += e[o].rate;
                                        if (r >= i) {
                                            g = e[o];
                                            break;
                                        }
                                    }
                                    if (g && !s.includes(g)) s.push(g);
                                }
                                return s;
                            }
                            const exps = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
                            const getExpAscii = (num) => {
                                let res = "";
                                while (num > 0) {
                                    res = exps[num % 10] + res;
                                    num = ~~(num / 10);
                                }
                                return res;
                            };

                            function shortNum(value) {
                                let newValue = value.toString();
                                if (value >= 1000) {
                                    const suffixes = ["", "K", "M", "B", "T"];
                                    const suffixNum = Math.floor(Math.floor((Math.log(value) / Math.log(10)).toPrecision(14)) / 3);
                                    if (suffixNum < suffixes.length) {
                                        let shortValue = "";
                                        for (let precision = 3; precision >= 1; precision--) {
                                            shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision)).toString();
                                            const dotLessShortValue = shortValue.replace(/[^a-zA-Z 0-9]+/g, "");
                                            if (dotLessShortValue.length <= 3) break;
                                        }
                                        if (Number(shortValue) % 1 != 0) shortValue = Number(shortValue).toFixed(1);
                                        newValue = shortValue + suffixes[suffixNum];
                                    } else {
                                        let num = value;
                                        let exp = 0;
                                        while (num >= 100) {
                                            num = Math.floor(num / 10);
                                            exp += 1;
                                        }
                                        newValue = num / 10 + " × 10" + getExpAscii(exp + 1);
                                    }
                                }
                                return newValue;
                            }
                            return function() {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        let stateNode = getStateNode();
                                        const rocks = document.querySelector('[class*="rockButton"]').parentElement.children;
                                        if (!Array.prototype.every.call(rocks, (element) => element.querySelector("div")))
                                            stateNode.setState({
                                                    choices: rand(
                                                        [{
                                                                type: "fossil",
                                                                val: 10,
                                                                rate: 0.1,
                                                                blook: "Amber"
                                                            },
                                                            {
                                                                type: "fossil",
                                                                val: 25,
                                                                rate: 0.1,
                                                                blook: "Dino Egg"
                                                            },
                                                            {
                                                                type: "fossil",
                                                                val: 50,
                                                                rate: 0.175,
                                                                blook: "Dino Fossil"
                                                            },
                                                            {
                                                                type: "fossil",
                                                                val: 75,
                                                                rate: 0.175,
                                                                blook: "Stegosaurus"
                                                            },
                                                            {
                                                                type: "fossil",
                                                                val: 100,
                                                                rate: 0.15,
                                                                blook: "Velociraptor"
                                                            },
                                                            {
                                                                type: "fossil",
                                                                val: 125,
                                                                rate: 0.125,
                                                                blook: "Brontosaurus"
                                                            },
                                                            {
                                                                type: "fossil",
                                                                val: 250,
                                                                rate: 0.075,
                                                                blook: "Triceratops"
                                                            },
                                                            {
                                                                type: "fossil",
                                                                val: 500,
                                                                rate: 0.025,
                                                                blook: "Tyrannosaurus Rex"
                                                            },
                                                            {
                                                                type: "mult",
                                                                val: 1.5,
                                                                rate: 0.05
                                                            },
                                                            {
                                                                type: "mult",
                                                                val: 2,
                                                                rate: 0.025
                                                            },
                                                        ],
                                                        3
                                                    ),
                                                },
                                                () => {
                                                    Array.prototype.forEach.call(rocks, (element, index) => {
                                                        const rock = stateNode.state.choices[index];
                                                        if (element.querySelector("div")) element.querySelector("div").remove();
                                                        const choice = document.createElement("div");
                                                        choice.style.color = "white";
                                                        choice.style.fontFamily = "Macondo";
                                                        choice.style.fontSize = "1em";
                                                        choice.style.display = "flex";
                                                        choice.style.justifyContent = "center";
                                                        choice.style.transform = "translateY(25px)";
                                                        choice.innerText =
                                                            rock.type === "fossil" ?
                                                            `+${
                                                                      Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? shortNum(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)
                                                                  } Fossils` :
                                                            `x${rock.val} Fossils Per Excavation`;
                                                        element.append(choice);
                                                    });
                                                }
                                            );
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            };
                        })(),
                    },
                    {
                        name: "Set Fossils",
                        description: "Sets the amount of fossils you have",
                        inputs: [{
                            name: "Fossils",
                            type: "number",
                        }, ],
                        run: function(fossils) {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                fossils
                            });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/f`,
                                val: fossils,
                            });
                        },
                    },
                    {
                        name: "Set Multiplier",
                        description: "Sets fossil multiplier",
                        inputs: [{
                            name: "Multiplier",
                            type: "number",
                        }, ],
                        run: function(fossilMult) {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                fossilMult
                            });
                        },
                    },
                    {
                        name: "Stop Cheating",
                        description: "Undoes cheating so that you can't be caught",
                        run: function() {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                isCheating: false
                            });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/ic`,
                                val: false,
                            });
                        },
                    },
                ],
            },
            royale: {
                img: "https://media.blooket.com/image/upload/p1yibtlelaucmdzsxvey",
                name: "Battle Royale",
                cheats: [{
                        name: "Auto Answer (Toggle)",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let stateNode = getStateNode();
                                    stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Auto Answer",
                        description: "Chooses the correct answer for you",
                        run: function() {
                            let stateNode = getStateNode();
                            stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                        },
                    },
                ],
            },
            defense: {
                img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Tower_Defense_Logo_Resized.png",
                name: "Tower Defense",
                cheats: [{
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function() {
                            const comp = getStateNode('defense');
                            if (!comp?.towers || comp.towers.length === 0) return;
                            comp.towers.forEach(tower => {
                                tower.range = 100;
                                tower.cd = 0;
                                tower.damage = 1000000;
                                if (tower.stats) {
                                    tower.stats.damage = 1000000;
                                    tower.stats.range = 100;
                                    tower.stats.fireRate = 0.01;
                                }
                            });
                            if (comp.forceUpdate) comp.forceUpdate();
                        }
                    },
                    {
                        name: "Remove Enemies",
                        description: "Removes all the enemies",
                        run: function() {
                            const comp = getStateNode('defense');
                            if (!comp) return;
                            if (comp.enemies) {
                                comp.enemies = [];
                                comp.futureEnemies = [];
                                if (comp.state && comp.state.enemies) {
                                    comp.setState({
                                        enemies: [],
                                        futureEnemies: []
                                    });
                                }
                            }
                        }
                    },
                    {
                        name: "Remove Obstacles",
                        description: "Lets you place towers anywhere",
                        run: function() {
                            const comp = getStateNode('defense');
                            if (!comp?.tiles || comp.tiles.length === 0) return;
                            comp.tiles = comp.tiles.map(row => {
                                if (Array.isArray(row)) {
                                    return new Array(row.length).fill(0);
                                }
                                return row;
                            });
                            if (comp.forceUpdate) comp.forceUpdate();
                        }
                    },
                    {
                        name: "Set Damage",
                        description: "Sets damage",
                        inputs: [{
                            name: "Damage",
                            type: "number"
                        }],
                        run: function(dmg) {
                            const comp = getStateNode('defense');
                            if (!comp?.state || comp.state.totalDamage === undefined) return;
                            comp.setState({
                                totalDamage: Number(dmg)
                            });
                        }
                    },
                    {
                        name: "Set Round",
                        description: "Sets the current round",
                        inputs: [{
                            name: "Round",
                            type: "number"
                        }],
                        run: function(round) {
                            const comp = getStateNode('defense');
                            if (!comp?.state || comp.state.round === undefined) return;
                            comp.setState({
                                round
                            });
                        }
                    },
                    {
                        name: "Set Tokens",
                        description: "Sets the amount of tokens you have",
                        inputs: [{
                            name: "Tokens",
                            type: "number"
                        }],
                        run: function(tokens) {
                            const comp = getStateNode('defense');
                            if (!comp?.state || comp.state.tokens === undefined) return;
                            comp.setState({
                                tokens: Number(tokens)
                            });
                        }
                    }
                ]
            },
            cafe: {
                img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Cafe_Logo_Resized.png",
                name: "Café (Solo Mode)",
                cheats: [{
                        name: "Max Items",
                        description: "Maxes out items in the shop (solo only)",
                        run: function() {
                            const node = getStateNode('cafe');
                            if (!node?.memoizedState) return console.log("❌ Failed to find game state.");
                            const hook = getHook(node, 4);
                            if (hook?.memoizedState?.Toast) {
                                const newLevels = {
                                    ...hook.memoizedState
                                };
                                Object.keys(newLevels).forEach(key => {
                                    if (typeof newLevels[key] === 'number') newLevels[key] = 5;
                                });
                                hook.queue.dispatch(newLevels);
                            }
                        },
                    },
                    {
                        name: "Set Cash",
                        description: "Sets cafe cash (only works in solo)",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function(cafeCash) {
                            const newAmount = cafeCash || 1000000;
                            if (isNaN(newAmount)) return;
                            const node = getStateNode('cafe');
                            if (!node?.memoizedState) return console.log("❌ Failed to find game state.");
                            let hook = node.memoizedState;
                            let depth = 0;
                            while (hook) {
                                if (depth > 7 && typeof hook.memoizedState === 'number' && hook.queue) {
                                    hook.queue.dispatch(newAmount);
                                    return console.log(`✅ Cash set to ${newAmount.toLocaleString()}!`);
                                }
                                hook = hook.next;
                                depth++;
                            }
                        },
                    },
                    {
                        name: "Stock Food",
                        description: "Stocks all food to 999 (Not usable in shop) (Solo only)",
                        run: function() {
                            const node = getStateNode('cafe');
                            if (!node?.memoizedState) return console.log("❌ Failed to find game state.");
                            const hook4 = getHook(node, 4);
                            const hook5 = getHook(node, 5);
                            if (hook4?.memoizedState?.Toast && hook5?.memoizedState) {
                                const newLevels = {
                                    ...hook4.memoizedState
                                };
                                const newStock = {
                                    ...hook5.memoizedState
                                };
                                Object.keys(newLevels).forEach(key => {
                                    if (typeof newLevels[key] === 'number') newLevels[key] = 5;
                                });
                                Object.keys(newStock).forEach(key => {
                                    if (typeof newStock[key] === 'number') newStock[key] = 999;
                                });
                                hook4.queue.dispatch(newLevels);
                                hook5.queue.dispatch(newStock);
                            }
                        },
                    },
                    {
                        name: "Make Customers OP",
                        description: "Makes all customers pay a LOT (only works in solo)",
                        run: function() {
                            if (window.opCustomerInterval) clearInterval(window.opCustomerInterval);
                            const OP_VALUE = 99999999999999;
                            window.opCustomerInterval = setInterval(() => {
                                const node = getStateNode('cafe');
                                if (!node?.memoizedState) return;
                                let hook = node.memoizedState;
                                while (hook) {
                                    if (hook.memoizedState instanceof Map) {
                                        hook.memoizedState.forEach((val) => {
                                            if (val?.order?.value !== OP_VALUE) {
                                                val.order.value = OP_VALUE;
                                            }
                                        });
                                    }
                                    hook = hook.next;
                                }
                            }, 500);
                        }
                    },
                    {
                        name: "Make Upgrades Cheap",
                        description: "Makes most upgrades cheap with insane profits",
                        run: function() {
                            const node = getStateNode('cafe');
                            if (!node?.memoizedState) return console.log("❌ Failed to find game state.");
                            const hook = getHook(node, 1);
                            if (hook?.memoizedState?.toast?.prices) {
                                const newDefs = {
                                    ...hook.memoizedState
                                };
                                Object.keys(newDefs).forEach(key => {
                                    const item = newDefs[key];
                                    if (item?.prices && item?.profits) {
                                        newDefs[key] = {
                                            ...item,
                                            prices: new Array(item.prices.length).fill(1),
                                            profits: new Array(item.profits.length).fill(9e99)
                                        };
                                        newDefs[key].profits[0] = 0;
                                    }
                                });
                                hook.queue.dispatch(newDefs);
                            }
                        }
                    }
                ],
            },
            factory: {
                img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Factory_Logo_Resized.png",
                name: "Factory",
                cheats: [{
                        name: "Choose Blook",
                        description: "Adds any blook to your factory",
                        inputs: [{
                            name: "Blook",
                            type: "options",
                            options: [
                                "Chick", "Chicken", "Cow", "Duck", "Goat", "Horse", "Pig", "Sheep", "Cat", "Dog", "Goldfish", "Rabbit", "Hamster", "Turtle", "Puppy", "Kitten",
                                "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Seal", "Arctic Fox", "Snowy Owl", "Arctic Hare", "Penguin", "Baby Penguin",
                                "Polar Bear", "Walrus", "Tiger", "Jaguar", "Toucan", "Cockatoo", "Macaw", "Parrot", "Panther", "Anaconda", "Orangutan", "Capuchin",
                                "Elf", "Witch", "Wizard", "Fairy", "Slime Monster", "Jester", "Dragon", "Unicorn", "Queen", "King", "Two of Spades", "Eat Me", "Drink Me",
                                "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts",
                                "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot",
                                "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot"
                            ].map(name => ({
                                name,
                                value: name
                            }))
                        }],
                        run: function(blook) {
                            const factoryBlooks = [{
                                    name: "Chick",
                                    color: "#ffcd05",
                                    class: "\uD83C\uDF3D",
                                    rarity: "Common",
                                    cash: [3, 7, 65, 400, 2500],
                                    time: [1, 1, 1, 1, 1],
                                    price: [300, 3e3, 3e4, 2e5]
                                },
                                {
                                    name: "Chicken",
                                    color: "#ed1c24",
                                    class: "\uD83C\uDF3D",
                                    rarity: "Common",
                                    cash: [10, 40, 200, 1400, 1e4],
                                    time: [5, 4, 3, 2, 1],
                                    price: [570, 4e3, 5e4, 8e5]
                                },
                                {
                                    name: "Cow",
                                    color: "#58595b",
                                    class: "\uD83C\uDF3D",
                                    rarity: "Common",
                                    cash: [25, 75, 1500, 25e3, 25e4],
                                    time: [15, 10, 10, 10, 5],
                                    price: [500, 9500, 16e4, 4e6]
                                },
                                {
                                    name: "Duck",
                                    color: "#4ab96d",
                                    class: "\uD83C\uDF3D",
                                    rarity: "Common",
                                    cash: [4, 24, 200, 3e3, 4e4],
                                    time: [3, 3, 3, 3, 3],
                                    price: [450, 4200, 7e4, 11e5]
                                },
                                {
                                    name: "Goat",
                                    color: "#c59a74",
                                    class: "\uD83C\uDF3D",
                                    rarity: "Common",
                                    cash: [5, 28, 200, 1300, 12e3],
                                    time: [3, 3, 2, 2, 2],
                                    price: [500, 6400, 45e3, 5e5]
                                },
                                {
                                    name: "Horse",
                                    color: "#995b3c",
                                    class: "\uD83C\uDF3D",
                                    rarity: "Common",
                                    cash: [5, 20, 270, 1800, 15e3],
                                    time: [2, 2, 2, 2, 2],
                                    price: [550, 8200, 65e3, 6e5]
                                },
                                {
                                    name: "Pig",
                                    color: "#f6a9cb",
                                    class: "\uD83C\uDF3D",
                                    rarity: "Common",
                                    cash: [20, 50, 1300, 8e3, 8e4],
                                    time: [7, 7, 7, 7, 5],
                                    price: [400, 11e3, 8e4, 13e5]
                                },
                                {
                                    name: "Sheep",
                                    color: "#414042",
                                    class: "\uD83C\uDF3D",
                                    rarity: "Common",
                                    cash: [6, 25, 250, 1500, 11e3],
                                    time: [3, 3, 3, 2, 2],
                                    price: [500, 5e3, 5e4, 43e4]
                                },
                                {
                                    name: "Cat",
                                    color: "#f49849",
                                    class: "\uD83D\uDC3E",
                                    rarity: "Common",
                                    cash: [5, 18, 170, 1700, 13e3],
                                    time: [2, 2, 2, 2, 2],
                                    price: [480, 5500, 6e4, 5e5]
                                },
                                {
                                    name: "Dog",
                                    color: "#995b3c",
                                    class: "\uD83D\uDC3E",
                                    rarity: "Common",
                                    cash: [7, 25, 220, 1900, 9e3],
                                    time: [3, 3, 2, 2, 1],
                                    price: [460, 6600, 7e4, 73e4]
                                },
                                {
                                    name: "Goldfish",
                                    color: "#f18221",
                                    class: "\uD83D\uDC3E",
                                    rarity: "Common",
                                    cash: [5, 40, 350, 3500, 35e3],
                                    time: [3, 3, 3, 3, 3],
                                    price: [750, 7200, 84e3, 95e4]
                                },
                                {
                                    name: "Rabbit",
                                    color: "#e7bf9a",
                                    class: "\uD83D\uDC3E",
                                    rarity: "Common",
                                    cash: [3, 18, 185, 800, 7e3],
                                    time: [2, 2, 2, 1, 1],
                                    price: [500, 5800, 56e3, 55e4]
                                },
                                {
                                    name: "Hamster",
                                    color: "#ce9176",
                                    class: "\uD83D\uDC3E",
                                    rarity: "Common",
                                    cash: [10, 45, 450, 4500, 45e3],
                                    time: [4, 4, 4, 4, 4],
                                    price: [650, 6500, 8e4, 93e4]
                                },
                                {
                                    name: "Turtle",
                                    color: "#619a3c",
                                    class: "\uD83D\uDC3E",
                                    rarity: "Common",
                                    cash: [23, 120, 1400, 15e3, 17e4],
                                    time: [10, 10, 10, 10, 10],
                                    price: [700, 8500, 11e4, 13e5]
                                },
                                {
                                    name: "Puppy",
                                    color: "#414042",
                                    class: "\uD83D\uDC3E",
                                    rarity: "Common",
                                    cash: [4, 10, 75, 500, 3e3],
                                    time: [1, 1, 1, 1, 1],
                                    price: [450, 4e3, 35e3, 25e4]
                                },
                                {
                                    name: "Kitten",
                                    color: "#58595b",
                                    class: "\uD83D\uDC3E",
                                    rarity: "Common",
                                    cash: [4, 8, 60, 400, 2e3],
                                    time: [1, 1, 1, 1, 1],
                                    price: [350, 3500, 26e3, 17e4]
                                },
                                {
                                    name: "Bear",
                                    color: "#995b3c",
                                    class: "\uD83C\uDF32",
                                    rarity: "Common",
                                    cash: [12, 70, 550, 4500, 1e5],
                                    time: [7, 7, 6, 5, 5],
                                    price: [550, 5500, 63e3, 16e5]
                                },
                                {
                                    name: "Moose",
                                    color: "#995b3c",
                                    class: "\uD83C\uDF32",
                                    rarity: "Common",
                                    cash: [8, 45, 400, 3500, 26e3],
                                    time: [5, 5, 4, 4, 3],
                                    price: [520, 6500, 58e3, 7e5]
                                },
                                {
                                    name: "Fox",
                                    color: "#f49849",
                                    class: "\uD83C\uDF32",
                                    rarity: "Common",
                                    cash: [7, 15, 80, 550, 3e3],
                                    time: [2, 2, 1, 1, 1],
                                    price: [400, 4e3, 36e3, 24e4]
                                },
                                {
                                    name: "Raccoon",
                                    color: "#6d6e71",
                                    class: "\uD83C\uDF32",
                                    rarity: "Common",
                                    cash: [5, 14, 185, 1900, 19e3],
                                    time: [2, 2, 2, 2, 2],
                                    price: [400, 5e3, 71e3, 8e5]
                                },
                                {
                                    name: "Squirrel",
                                    color: "#d25927",
                                    class: "\uD83C\uDF32",
                                    rarity: "Common",
                                    cash: [3, 10, 65, 470, 2600],
                                    time: [1, 1, 1, 1, 1],
                                    price: [420, 3600, 32e3, 21e4]
                                },
                                {
                                    name: "Owl",
                                    color: "#594a42",
                                    class: "\uD83C\uDF32",
                                    rarity: "Common",
                                    cash: [4, 17, 155, 1500, 15e3],
                                    time: [2, 2, 2, 2, 2],
                                    price: [500, 4800, 55e3, 58e4]
                                },
                                {
                                    name: "Hedgehog",
                                    color: "#3f312b",
                                    class: "\uD83C\uDF32",
                                    rarity: "Common",
                                    cash: [11, 37, 340, 2200, 3e4],
                                    time: [5, 4, 3, 2, 2],
                                    price: [540, 7e3, 77e3, 12e5]
                                },
                                {
                                    name: "Seal",
                                    color: "#7ca1d5",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [6, 17, 150, 1200, 13e3],
                                    time: [2, 2, 2, 2, 2],
                                    price: [480, 4500, 43e3, 52e4]
                                },
                                {
                                    name: "Arctic Fox",
                                    color: "#7ca1d5",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [5, 18, 180, 850, 8500],
                                    time: [2, 2, 2, 1, 1],
                                    price: [520, 550, 61e3, 68e4]
                                },
                                {
                                    name: "Snowy Owl",
                                    color: "#feda3f",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [5, 20, 190, 1900, 16e3],
                                    time: [3, 3, 2, 2, 2],
                                    price: [370, 5300, 76e3, 62e4]
                                },
                                {
                                    name: "Arctic Hare",
                                    color: "#7ca1d5",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [6, 19, 85, 900, 7e3],
                                    time: [2, 2, 1, 1, 1],
                                    price: [540, 5200, 66e3, 55e4]
                                },
                                {
                                    name: "Penguin",
                                    color: "#fb8640",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [4, 21, 310, 3200, 33e3],
                                    time: [3, 3, 3, 3, 3],
                                    price: [400, 6500, 76e3, 87e4]
                                },
                                {
                                    name: "Baby Penguin",
                                    color: "#414042",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [3, 8, 70, 450, 2700],
                                    time: [1, 1, 1, 1, 1],
                                    price: [420, 3300, 33e3, 23e4]
                                },
                                {
                                    name: "Polar Bear",
                                    color: "#7ca1d5",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [12, 75, 700, 6500, 85e3],
                                    time: [8, 7, 6, 5, 5],
                                    price: [630, 7e3, 91e3, 14e5]
                                },
                                {
                                    name: "Walrus",
                                    color: "#7d4f33",
                                    class: "❄️",
                                    rarity: "Common",
                                    cash: [11, 46, 420, 3700, 51e3],
                                    time: [5, 5, 4, 4, 4],
                                    price: [550, 6200, 68e3, 1e6]
                                },
                                {
                                    name: "Tiger",
                                    color: "#f18221",
                                    class: "\uD83C\uDF34",
                                    rarity: "Common",
                                    cash: [6, 20, 100, 975, 7500],
                                    time: [3, 3, 1, 1, 1],
                                    price: [390, 6e3, 7e4, 61e4]
                                },
                                {
                                    name: "Jaguar",
                                    color: "#fbb040",
                                    class: "\uD83C\uDF34",
                                    rarity: "Common",
                                    cash: [8, 28, 230, 1600, 17e3],
                                    time: [3, 3, 2, 2, 2],
                                    price: [390, 6e3, 7e4, 61e4]
                                },
                                {
                                    name: "Toucan",
                                    color: "#ffca34",
                                    class: "\uD83C\uDF34",
                                    rarity: "Common",
                                    cash: [9, 20, 175, 625, 3800],
                                    time: [2, 2, 2, 1, 1],
                                    price: [520, 4800, 42e3, 3e5]
                                },
                                {
                                    name: "Cockatoo",
                                    color: "#7ca1d5",
                                    class: "\uD83C\uDF34",
                                    rarity: "Common",
                                    cash: [6, 35, 160, 1700, 18e3],
                                    time: [4, 4, 2, 2, 2],
                                    price: [500, 5e3, 63e3, 7e5]
                                },
                                {
                                    name: "Macaw",
                                    color: "#00aeef",
                                    class: "\uD83C\uDF34",
                                    rarity: "Common",
                                    cash: [3, 8, 85, 850, 8500],
                                    time: [1, 1, 1, 1, 1],
                                    price: [480, 5400, 62e3, 63e4]
                                },
                                {
                                    name: "Parrot",
                                    color: "#ed1c24",
                                    class: "\uD83C\uDF34",
                                    rarity: "Common",
                                    cash: [3, 9, 90, 900, 9e3],
                                    time: [1, 1, 1, 1, 1],
                                    price: [540, 5700, 65e3, 69e4]
                                },
                                {
                                    name: "Panther",
                                    color: "#2f2c38",
                                    class: "\uD83C\uDF34",
                                    rarity: "Common",
                                    cash: [12, 28, 215, 2100, 21e3],
                                    time: [5, 3, 2, 2, 2],
                                    price: [530, 6500, 76e3, 87e4]
                                },
                                {
                                    name: "Anaconda",
                                    color: "#8a9143",
                                    class: "\uD83C\uDF34",
                                    rarity: "Common",
                                    cash: [3, 15, 85, 1500, 7600],
                                    time: [1, 2, 1, 2, 1],
                                    price: [410, 5100, 58e3, 59e4]
                                },
                                {
                                    name: "Orangutan",
                                    color: "#bc6234",
                                    class: "\uD83C\uDF34",
                                    rarity: "Common",
                                    cash: [13, 52, 570, 4300, 7e4],
                                    time: [5, 5, 5, 4, 4],
                                    price: [600, 7e3, 8e4, 14e5]
                                },
                                {
                                    name: "Capuchin",
                                    color: "#e0b0a6",
                                    class: "\uD83C\uDF34",
                                    rarity: "Common",
                                    cash: [4, 14, 160, 780, 8200],
                                    time: [2, 2, 2, 1, 1],
                                    price: [390, 4700, 57e3, 68e4]
                                },
                                {
                                    name: "Elf",
                                    color: "#a7d054",
                                    class: "⚔️",
                                    rarity: "Uncommon",
                                    cash: [5e3, 15e3, 15e4, 15e5, 1e7],
                                    time: [1, 1, 1, 1, 1],
                                    price: [8e5, 9e6, 11e7, 8e8]
                                },
                                {
                                    name: "Witch",
                                    color: "#4ab96d",
                                    class: "⚔️",
                                    rarity: "Uncommon",
                                    cash: [18e3, 6e4, 4e4, 4e6, 35e6],
                                    time: [3, 3, 2, 2, 2],
                                    price: [11e5, 12e6, 15e7, 14e8]
                                },
                                {
                                    name: "Wizard",
                                    color: "#5a459c",
                                    class: "⚔️",
                                    rarity: "Uncommon",
                                    cash: [19500, 65e3, 44e4, 46e5, 4e6],
                                    time: [3, 3, 2, 2, 2],
                                    price: [13e5, 135e5, 16e7, 16e8]
                                },
                                {
                                    name: "Fairy",
                                    color: "#df6d9c",
                                    class: "⚔️",
                                    rarity: "Uncommon",
                                    cash: [18500, 6e4, 62e4, 44e5, 38e6],
                                    time: [3, 3, 3, 2, 2],
                                    price: [12e5, 125e5, 15e6, 15e8]
                                },
                                {
                                    name: "Slime Monster",
                                    color: "#2fa04a",
                                    class: "⚔️",
                                    rarity: "Uncommon",
                                    cash: [35e3, 14e4, 1e6, 11e6, 11e7],
                                    time: [5, 5, 4, 4, 4],
                                    price: [16e5, 15e6, 2e8, 23e8]
                                },
                                {
                                    name: "Jester",
                                    color: "#be1e2d",
                                    class: "⚔️",
                                    rarity: "Rare",
                                    cash: [25e3, 1e5, 68e4, 65e5, 32e6],
                                    time: [3, 3, 2, 2, 1],
                                    price: [2e6, 21e6, 23e7, 26e8]
                                },
                                {
                                    name: "Dragon",
                                    color: "#2fa04a",
                                    class: "⚔️",
                                    rarity: "Rare",
                                    cash: [36e3, 15e4, 15e5, 15e6, 15e7],
                                    time: [4, 4, 4, 4, 4],
                                    price: [23e5, 24e6, 27e7, 3e9]
                                },
                                {
                                    name: "Unicorn",
                                    color: "#f6afce",
                                    class: "⚔️",
                                    rarity: "Epic",
                                    cash: [24e3, 15e4, 14e5, 7e6, 75e6],
                                    time: [2, 2, 2, 1, 1],
                                    price: [45e5, 45e6, 55e7, 65e8]
                                },
                                {
                                    name: "Queen",
                                    color: "#9e1f63",
                                    class: "⚔️",
                                    rarity: "Rare",
                                    cash: [24e3, 95e3, 95e4, 97e5, 95e6],
                                    time: [3, 3, 3, 3, 3],
                                    price: [19e5, 2e7, 23e7, 25e8]
                                },
                                {
                                    name: "King",
                                    color: "#ee2640",
                                    class: "⚔️",
                                    rarity: "Legendary",
                                    cash: [75e3, 4e5, 6e6, 9e7, 125e7],
                                    time: [5, 5, 5, 5, 5],
                                    price: [6e6, 95e6, 16e8, 25e9]
                                },
                                {
                                    name: "Two of Spades",
                                    color: "#414042",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Uncommon",
                                    cash: [4500, 14e3, 14e4, 14e5, 9e6],
                                    time: [1, 1, 1, 1, 1],
                                    price: [77e4, 83e5, 98e6, 71e7]
                                },
                                {
                                    name: "Eat Me",
                                    color: "#d58c55",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Uncommon",
                                    cash: [13e3, 45e3, 45e4, 45e5, 5e7],
                                    time: [2, 2, 2, 2, 2],
                                    price: [13e5, 14e6, 16e7, 2e9]
                                },
                                {
                                    name: "Drink Me",
                                    color: "#dd7399",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Uncommon",
                                    cash: [12e3, 4e4, 4e5, 4e6, 45e6],
                                    time: [2, 2, 2, 2, 2],
                                    price: [12e5, 12e6, 14e7, 18e8]
                                },
                                {
                                    name: "Alice",
                                    color: "#4cc9f5",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Uncommon",
                                    cash: [13e3, 42e3, 21e4, 21e5, 23e6],
                                    time: [2, 2, 1, 1, 1],
                                    price: [12e5, 13e6, 15e7, 19e8]
                                },
                                {
                                    name: "Queen of Hearts",
                                    color: "#d62027",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Uncommon",
                                    cash: [23e3, 87e3, 62e4, 75e5, 9e7],
                                    time: [4, 4, 3, 3, 3],
                                    price: [13e5, 13e6, 18e7, 24e8]
                                },
                                {
                                    name: "Dormouse",
                                    color: "#89d6f8",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Rare",
                                    cash: [17e3, 68e3, 7e5, 35e5, 35e6],
                                    time: [2, 2, 1, 1, 1],
                                    price: [2e6, 22e6, 25e7, 28e8]
                                },
                                {
                                    name: "White Rabbit",
                                    color: "#ffcd05",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Rare",
                                    cash: [26e3, 105e3, 11e6, 77e5, 72e6],
                                    time: [3, 3, 3, 2, 2],
                                    price: [2e6, 23e6, 28e7, 29e8]
                                },
                                {
                                    name: "Cheshire Cat",
                                    color: "#dd7399",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Rare",
                                    cash: [32e3, 1e5, 9e5, 9e6, 6e7],
                                    time: [4, 3, 3, 3, 2],
                                    price: [18e5, 19e6, 22e7, 24e8]
                                },
                                {
                                    name: "Caterpillar",
                                    color: "#00c0f3",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Epic",
                                    cash: [1e4, 7e4, 65e4, 75e5, 85e6],
                                    time: [1, 1, 1, 1, 1],
                                    price: [42e5, 42e6, 54e7, 69e8]
                                },
                                {
                                    name: "Mad Hatter",
                                    color: "#914f93",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Epic",
                                    cash: [38e3, 25e4, 15e5, 14e6, 8e7],
                                    time: [3, 3, 2, 2, 1],
                                    price: [48e5, 48e6, 52e7, 66e8]
                                },
                                {
                                    name: "King of Hearts",
                                    color: "#c62127",
                                    class: "\uD83C\uDFF0",
                                    rarity: "Legendary",
                                    cash: [8e4, 42e4, 68e5, 1e8, 15e8],
                                    time: [5, 5, 5, 5, 5],
                                    price: [7e6, 11e7, 18e8, 3e10]
                                },
                                {
                                    name: "Earth",
                                    color: "#416eb5",
                                    class: "\uD83D\uDE80",
                                    rarity: "Uncommon",
                                    cash: [15e3, 45e3, 6e5, 65e5, 65e6],
                                    time: [3, 3, 3, 3, 3],
                                    price: [1e6, 11e6, 15e7, 17e8]
                                },
                                {
                                    name: "Meteor",
                                    color: "#c68c3c",
                                    class: "\uD83D\uDE80",
                                    rarity: "Uncommon",
                                    cash: [23e3, 65e3, 7e5, 45e5, 2e7],
                                    time: [5, 4, 3, 2, 1],
                                    price: [95e4, 13e6, 16e7, 16e8]
                                },
                                {
                                    name: "Stars",
                                    color: "#19184d",
                                    class: "\uD83D\uDE80",
                                    rarity: "Uncommon",
                                    cash: [1e4, 4e4, 2e5, 2e6, 18e6],
                                    time: [2, 2, 1, 1, 1],
                                    price: [14e5, 14e6, 15e7, 15e8]
                                },
                                {
                                    name: "Alien",
                                    color: "#8dc63f",
                                    class: "\uD83D\uDE80",
                                    rarity: "Uncommon",
                                    cash: [3e4, 1e5, 1e6, 11e6, 85e6],
                                    time: [4, 4, 4, 4, 4],
                                    price: [15e5, 17e6, 19e7, 17e8]
                                },
                                {
                                    name: "Planet",
                                    color: "#9dc6ea",
                                    class: "\uD83D\uDE80",
                                    rarity: "Rare",
                                    cash: [25e3, 1e5, 9e5, 9e6, 9e7],
                                    time: [3, 3, 3, 3, 3],
                                    price: [2e6, 21e6, 21e7, 24e8]
                                },
                                {
                                    name: "UFO",
                                    color: "#a15095",
                                    class: "\uD83D\uDE80",
                                    rarity: "Rare",
                                    cash: [17e3, 7e4, 7e5, 7e6, 7e7],
                                    time: [2, 2, 2, 2, 2],
                                    price: [21e5, 23e6, 25e7, 28e8]
                                },
                                {
                                    name: "Spaceship",
                                    color: "#ffcb29",
                                    class: "\uD83D\uDE80",
                                    rarity: "Epic",
                                    cash: [6e4, 32e4, 21e5, 15e6, 85e6],
                                    time: [5, 4, 3, 2, 1],
                                    price: [48e5, 46e6, 54e7, 68e8]
                                },
                                {
                                    name: "Astronaut",
                                    color: "#9bd4ee",
                                    class: "\uD83D\uDE80",
                                    rarity: "Legendary",
                                    cash: [45e3, 26e4, 25e5, 38e6, 55e7],
                                    time: [3, 3, 2, 2, 2],
                                    price: [65e5, 1e8, 17e8, 27e9]
                                },
                                {
                                    name: "Lil Bot",
                                    color: "#3e564a",
                                    class: "\uD83E\uDD16",
                                    rarity: "Uncommon",
                                    cash: [4e3, 12e3, 18e4, 19e5, 25e6],
                                    time: [1, 1, 1, 1, 1],
                                    price: [73e4, 12e6, 13e7, 19e8]
                                },
                                {
                                    name: "Lovely Bot",
                                    color: "#f179af",
                                    class: "\uD83E\uDD16",
                                    rarity: "Uncommon",
                                    cash: [16e3, 65e3, 65e4, 48e5, 42e6],
                                    time: [3, 3, 3, 2, 2],
                                    price: [13e5, 14e6, 17e7, 16e8]
                                },
                                {
                                    name: "Angry Bot",
                                    color: "#f1613a",
                                    class: "\uD83E\uDD16",
                                    rarity: "Uncommon",
                                    cash: [22e3, 85e3, 8e5, 62e5, 65e6],
                                    time: [4, 4, 4, 3, 3],
                                    price: [12e5, 13e6, 15e7, 17e8]
                                },
                                {
                                    name: "Happy Bot",
                                    color: "#51ba6b",
                                    class: "\uD83E\uDD16",
                                    rarity: "Uncommon",
                                    cash: [11e3, 45e3, 5e5, 25e5, 3e7],
                                    time: [2, 2, 2, 1, 1],
                                    price: [14e5, 15e6, 18e7, 24e8]
                                },
                                {
                                    name: "Watson",
                                    color: "#d69b5a",
                                    class: "\uD83E\uDD16",
                                    rarity: "Rare",
                                    cash: [24e3, 1e5, 1e6, 1e7, 1e8],
                                    time: [3, 3, 3, 3, 3],
                                    price: [2e6, 22e6, 24e7, 26e8]
                                },
                                {
                                    name: "Buddy Bot",
                                    color: "#9dc6ea",
                                    class: "\uD83E\uDD16",
                                    rarity: "Rare",
                                    cash: [22e3, 95e3, 65e4, 65e5, 65e6],
                                    time: [3, 3, 2, 2, 2],
                                    price: [19e5, 21e6, 23e7, 25e8]
                                },
                                {
                                    name: "Brainy Bot",
                                    color: "#9ecf7a",
                                    class: "\uD83E\uDD16",
                                    rarity: "Epic",
                                    cash: [5e4, 25e4, 21e5, 21e6, 17e7],
                                    time: [4, 3, 3, 3, 2],
                                    price: [5e6, 46e6, 5e8, 67e8]
                                },
                                {
                                    name: "Mega Bot",
                                    color: "#d71f27",
                                    class: "\uD83E\uDD16",
                                    rarity: "Legendary",
                                    cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                    time: [5, 5, 3, 3, 3],
                                    price: [7e6, 12e7, 19e8, 35e9]
                                }
                            ];
                            const nodes = getStateNode('factory');
                            const state = nodes.factory;
                            if (!state?.factories) {
                                return;
                            }
                            const chosenBlook = factoryBlooks.find(b => b.name === blook);
                            if (!chosenBlook) {
                                return;
                            }
                            const newBlook = {
                                ...chosenBlook,
                                level: 1,
                                bonus: 1
                            };
                            const maxSlots = 10;
                            if (state.factories.length < maxSlots) {
                                state.factories.push(newBlook);
                            } else {
                                state.factories[maxSlots - 1] = newBlook;
                            }
                        }
                    },
                    {
                        name: "Free Upgrades",
                        description: "Sets upgrade prices to 0 for all current blooks",
                        run: function() {
                            const nodes = getStateNode('factory');
                            const state = nodes.factory;
                            if (!state?.factories) {
                                return;
                            }
                            state.factories.forEach(factory => {
                                if (factory.price) factory.price = [0, 0, 0, 0, 0];
                            });
                        }
                    },
                    {
                        name: "Max Blooks",
                        description: "Maxes out all your blooks' levels",
                        run: function() {
                            const nodes = getStateNode('factory');
                            const state = nodes.factory;
                            if (!state?.factories || state.factories.length === 0) {
                                return;
                            }
                            state.factories.forEach(factory => factory.level = 4);
                            console.log(`Set ${state.factories.length} blooks to Level 4`);
                        }
                    },
                    {
                        name: "Make Blooks OP",
                        description: "Make all your blooks OP",
                        run: function() {
                            const nodes = getStateNode('factory');
                            const state = nodes.factory;
                            if (!state?.factories || state.factories.length === 0) {
                                return;
                            }
                            state.factories.forEach(factory => {
                                factory.cash = [1e9, 1e9, 1e9, 1e9, 1e9];
                                factory.time = [0.01, 0.01, 0.01, 0.01, 0.01];
                            });
                        }
                    },
                    {
                        name: "Remove Glitches",
                        description: "Removes all enemy glitches",
                        run: function() {
                            const glitchNames = ["Lunch Break", "Ad Spam", "Error 37", "Night Time", "#LOL", "Jokester", "Slow Mo", "Dance Party", "Vortex", "Reverse", "Flip", "Micro"];
                            let foundCount = 0;
                            const visited = new Set();

                            function clearState(obj, key) {
                                obj[key] = "";
                                if (Array.isArray(obj.ads)) obj.ads = [];
                                if (Array.isArray(obj.hazards)) obj.hazards = [];
                                if (typeof obj.lol === 'boolean') obj.lol = false;
                                if (typeof obj.night === 'boolean') obj.night = false;
                                if (typeof obj.joke === 'boolean') obj.joke = false;
                                if (typeof obj.slow === 'boolean') obj.slow = false;
                                if (typeof obj.dance === 'boolean') obj.dance = false;
                                if (typeof obj.color === 'string') obj.color = "";
                                foundCount++;
                            }

                            function scanDeep(obj, depth = 0) {
                                if (!obj || typeof obj !== 'object' || depth > 10 || visited.has(obj)) return;
                                visited.add(obj);
                                for (const key in obj) {
                                    const val = obj[key];
                                    if (typeof val === 'string' && glitchNames.includes(val)) {
                                        clearState(obj, key);
                                    }
                                    if (!key.startsWith('_') || key === '_owner') {
                                        if (typeof val === 'object') scanDeep(val, depth + 1);
                                    }
                                }
                            }
                            const root = document.querySelector('#app') || document.body;

                            function traverseDOM(node) {
                                const k = Object.keys(node).find(key => key.startsWith('__reactFiber'));
                                if (k) {
                                    const fiber = node[k];
                                    if (fiber.memoizedState) scanDeep(fiber.memoizedState);
                                    if (fiber.memoizedProps) scanDeep(fiber.memoizedProps);
                                }
                                for (const child of node.children) traverseDOM(child);
                            }
                            traverseDOM(root);
                        }
                    },
                    {
                        name: "Set All MegaBot",
                        description: "Sets all your blooks to maxed out Mega Bots",
                        run: function() {
                            const nodes = getStateNode('factory');
                            const state = nodes.factory;
                            if (!state?.factories) {
                                return;
                            }
                            const megaBot = {
                                name: "Mega Bot",
                                color: "#d71f27",
                                class: "🤖",
                                rarity: "Legendary",
                                cash: [80000, 430000, 4200000, 62000000, 1000000000],
                                time: [5, 5, 3, 3, 3],
                                price: [7000000, 120000000, 1900000000, 35000000000],
                                active: false,
                                level: 4,
                                bonus: 5.0
                            };
                            state.factories.length = 0;
                            for (let i = 0; i < 10; i++) {
                                state.factories.push({
                                    ...megaBot
                                });
                            }
                        }
                    },
                    {
                        name: "Set Cash",
                        description: "Sets amount of cash you have",
                        inputs: [{
                            name: "Cash",
                            type: "number"
                        }],
                        run: function(cash) {
                            const nodes = getStateNode('factory');
                            const state = nodes.factory;
                            if (!state?.addCash || state.cash === undefined) {
                                return;
                            }
                            const target = parseFloat(cash);
                            if (!isNaN(target)) {
                                const diff = target - state.cash;
                                state.addCash(diff);
                                console.log(`Cash set to ${target}`);
                            }
                        }
                    }
                ]
            },
            racing: {
                img: "https://media.blooket.com/image/upload/x0eee9nbyo22exi7p3qd",
                name: "Racing",
                cheats: [{
                        name: "Instant Win",
                        description: "Instantly Wins the race",
                        run: function() {
                            const stateNode = getStateNode();
                            stateNode.setState({
                                progress: stateNode.state.goalAmount
                            });
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/pr",
                                val: stateNode.state.goalAmount,
                            });
                        },
                    },
                    {
                        name: "Set Questions",
                        description: "Sets the number of questions left",
                        inputs: [{
                            name: "Questions",
                            type: "number",
                        }, ],
                        run: function(progress) {
                            let stateNode = getStateNode();
                            progress = stateNode.props.client.amount - progress;
                            stateNode.setState({
                                progress
                            });
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/pr",
                                val: progress,
                            });
                        },
                    },
                ],
            },
            rush: {
                img: "https://media.blooket.com/image/upload/oa9gwebaop7hxdrmee1y",
                name: "Blook Rush",
                cheats: [{
                        name: "Set Blooks",
                        description: "Sets amount of blooks you or your team has",
                        inputs: [{
                            name: "Blooks",
                            type: "number",
                        }, ],
                        run: function(numBlooks) {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                numBlooks
                            });
                            stateNode.props.liveGameController.setVal({
                                path: (stateNode.isTeam ? "a/" : "c/") + stateNode.props.client.name + "/bs",
                                val: numBlooks,
                            });
                        },
                    },
                    {
                        name: "Set Defense",
                        description: "Sets amount of defense you or your team has (Max 4)",
                        inputs: [{
                            name: "Defense (max 4)",
                            type: "number",
                            max: 4,
                        }, ],
                        run: function(defense) {
                            let numDefense = Math.min(defense, 4);
                            let stateNode = getStateNode();
                            stateNode.setState({
                                numDefense
                            });
                            stateNode.props.liveGameController.setVal({
                                path: (stateNode.isTeam ? "a/" : "c/") + stateNode.props.client.name + "/d",
                                val: numDefense,
                            });
                        },
                    },
                ],
            },
            tower: {
                img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Tower_Of_Doom_Logo_Resized.png",
                name: "Tower of Doom",
                cheats: [{
                        name: "Fill Deck",
                        description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                        run: function() {
                            if (window.location.pathname == "/tower/map") {
                                const stateNode = getStateNode();
                                stateNode.props.tower.artifacts =
                                    "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split(
                                        "|"
                                    );
                                stateNode.props.tower.cards =
                                    "Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰"
                                    .split("|")
                                    .map((x) => {
                                        const [blook, c] = x.split(",");
                                        return {
                                            strength: 20,
                                            charisma: 20,
                                            wisdom: 20,
                                            class: c,
                                            blook
                                        };
                                    });
                                try {
                                    stateNode.props.addTowerNode();
                                } catch {}
                                stateNode.setState({
                                    showDeck: false
                                });
                            } else alert("You need to be on the map to run this cheat!");
                        },
                    },
                    {
                        name: "Max Cards",
                        description: "Maxes out all the cards in your deck",
                        run: function() {
                            if (window.location.pathname == "/tower/map") {
                                const stateNode = getStateNode();
                                stateNode.props.tower.cards.forEach((card) => {
                                    card.strength = 20;
                                    card.charisma = 20;
                                    card.wisdom = 20;
                                });
                                try {
                                    stateNode.forceUpdate();
                                } catch {}
                            } else alert("You need to be on the map to run this cheat!");
                        },
                    },
                    {
                        name: "Max Health",
                        description: "Fills the player's health",
                        run: function() {
                            if (window.location.pathname == "/tower/battle") getStateNode().setState({
                                myHealth: 100,
                                myLife: 100
                            });
                            else alert("You need to be in battle to run this cheat!");
                        },
                    },
                    {
                        name: "Max Card Stats",
                        description: "Maxes out player's current card (Only works on attribute select page)",
                        run: function() {
                            const stateNode = getStateNode();
                            if (stateNode.state.phase !== "select") alert("You must be on the attribute selection page!");
                            else stateNode.setState({
                                myCard: {
                                    ...stateNode.state.myCard,
                                    strength: 20,
                                    charisma: 20,
                                    wisdom: 20
                                }
                            });
                        },
                    },
                    {
                        name: "Min Enemy Stats",
                        description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                        run: function() {
                            const stateNode = getStateNode();
                            if (stateNode.state.phase !== "select") alert("You must be on the attribute selection page!");
                            else stateNode.setState({
                                enemyCard: {
                                    ...stateNode.state.enemyCard,
                                    strength: 0,
                                    charisma: 0,
                                    wisdom: 0
                                }
                            });
                        },
                    },
                    {
                        name: "Set Coins",
                        description: "Try's to set amount of tower coins you have",
                        inputs: [{
                            name: "Coins",
                            type: "number",
                        }, ],
                        run: function(coins) {
                            if (window.location.pathname == "/tower/battle")
                                try {
                                    getStateNode().props.setTowerCoins(coins);
                                } catch {}
                            else alert("You need to be in battle to run this cheat!");
                        },
                    },
                ],
            },
            kingdom: {
                img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Crazy_Kingdom_Logo_Resized.png",
                name: "Crazy Kingdom",
                cheats: [{
                        name: "Choice ESP",
                        description: "Shows you what will happen if you say Yes or No",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function() {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(
                                    (stats) => {
                                        let stateNode = getStateNode();
                                        let elements = Array.prototype.reduce.call(document.querySelectorAll("[class*=statContainer]"), (obj, container, i) => ((obj[stats[i]] = container), obj), {});
                                        if (stateNode.state.phase == "choice") {
                                            Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), (x) => x.remove());
                                            Object.keys(stateNode.state.guest.yes || {}).forEach((x) => {
                                                if (elements[x] == null) return;
                                                let element = document.createElement("div");
                                                element.className = "choiceESP";
                                                element.style = "font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;";
                                                element.innerText = String(stateNode.state.guest.yes[x]);
                                                elements[x].appendChild(element);
                                            });
                                            Object.keys(stateNode.state.guest.no || {}).forEach((x) => {
                                                if (elements[x] == null) return;
                                                let element = document.createElement("div");
                                                element.className = "choiceESP";
                                                element.style = "font-size: 24px; color: darkred; font-weight: bolder;";
                                                element.innerText = String(stateNode.state.guest.no[x]);
                                                elements[x].appendChild(element);
                                            });
                                            Array.prototype.forEach.call(
                                                document.querySelectorAll("[class*=guestButton][role=button]"),
                                                (x) => (x.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), (x) => x.remove()))
                                            );
                                        }
                                    },
                                    50,
                                    ["materials", "people", "happiness", "gold"]
                                );
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), (x) => x.remove());
                                this.data = null;
                            }
                        },
                    },
                    {
                        name: "Disable Tax Toucan",
                        description: "Tax evasion",
                        run: function() {
                            getStateNode().taxCounter = Number.MAX_VALUE;
                        },
                    },
                    {
                        name: "Max Stats",
                        description: "Sets all resources to the max",
                        run: function() {
                            getStateNode().setState({
                                materials: 100,
                                people: 100,
                                happiness: 100,
                                gold: 100
                            });
                        },
                    },
                    {
                        name: "Set Guests",
                        description: "Sets the amount of guests you've seen",
                        inputs: [{
                            name: "Guests",
                            type: "number",
                        }, ],
                        run: function(guestScore) {
                            getStateNode().setState({
                                guestScore
                            });
                        },
                    },
                    {
                        name: "Skip Guest",
                        description: "Skips the current guest",
                        run: function() {
                            getStateNode().nextGuest();
                        },
                    },
                ],
            },
            toy: {
                img: "https://media.blooket.com/image/upload/v1663212881/Media/logos/Santas_Workshop_Logo_Resized.png",
                name: "Santa's Workshop",
                cheats: [{
                        name: "Remove Distractions",
                        description: "Removes all enemy distractions",
                        run: function() {
                            getStateNode().setState({
                                fog: !1,
                                dusk: !1,
                                wind: !1,
                                plow: !1,
                                blizzard: !1,
                                force: !1,
                                canada: !1,
                                trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                            });
                        },
                    },
                    {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone else playing",
                        inputs: [{
                            name: "Distraction",
                            type: "options",
                            options: Object.entries({
                                c: "Oh Canada",
                                b: "Blizzard",
                                f: "Fog Spell",
                                d: "Dark & Dusk",
                                w: "Howling Wind",
                                g: "Gift Time!",
                                t: "TREES",
                                s: "Snow Plow",
                                fr: "Use The Force"
                            }).map(([value, name]) => ({
                                name,
                                value,
                            })),
                        }, ],
                        run: function(val) {
                            let stateNode = getStateNode();
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/tat`,
                                val
                            });
                        },
                    },
                    {
                        name: "Set Toys",
                        description: "Sets amount of toys",
                        inputs: [{
                            name: "Toys",
                            type: "number",
                        }, ],
                        run: function(toys) {
                            let stateNode = getStateNode();
                            stateNode.setState({
                                toys
                            });
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name + "/t",
                                val: toys,
                            });
                        },
                    },
                    {
                        name: "Set Toys Per Question",
                        description: "Sets amount of toys per question",
                        inputs: [{
                            name: "Toys Per Question",
                            type: "number",
                        }, ],
                        run: function(toysPerQ) {
                            getStateNode().setState({
                                toysPerQ
                            });
                        },
                    },
                    {
                        name: "Swap Toys",
                        description: "Swaps toys with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: getPlayerOptions,
                        }, ],
                        run: function(target) {
                            let stateNode = getStateNode();
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (!players || players[target] == null) return;
                                stateNode.props.liveGameController.setVal({
                                    path: "c/" + stateNode.props.client.name + "/tat",
                                    val: `${target}:swap:${stateNode.state.toys}`,
                                });
                                stateNode.setState({
                                    toys: players[target].t
                                });
                            });
                        },
                    },
                ],
            },
            flappy: {
                img: "https://ac.blooket.com/marketassets/blooks/chick.svg",
                name: "Flappy Blook",
                cheats: [{
                        name: "Toggle Ghost",
                        description: "Lets you go through the pipes",
                        type: "toggle",
                        enabled: false,
                        run: function() {
                            this.enabled = !this.enabled;
                            for (const body of Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig.physics.world.bodies.entries) {
                                if (!body.gameObject.frame.texture.key.startsWith("blook")) continue;
                                body.checkCollision.none = this.enabled;
                                body.gameObject.setAlpha(this.enabled ? 0.5 : 1);
                                break;
                            }
                        },
                    },
                    {
                        name: "Change Settings",
                        description: "Changes various game mechanics and lets you play with the spacebar",
                        inputs: [{
                                name: "Bird Gravity",
                                type: "number",
                                value: 800
                            },
                            {
                                name: "Bird Speed",
                                type: "number",
                                value: 125
                            },
                            {
                                name: "Bird Flap Power",
                                type: "number",
                                value: 300
                            }
                        ],
                        run: function(birdGravity, birdSpeed, birdFlapPower) {
                            (function() {
                                const canvas = document.querySelector("#phaser-bouncy");
                                if (!canvas) return;
                                const scene = Object.values(canvas)[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig;
                                if (!scene) return;
                                scene.birdGravity = birdGravity;
                                scene.birdSpeed = birdSpeed;
                                scene.birdFlapPower = birdFlapPower;
                                scene.flap = function() {
                                    if (!this.isStarted) {
                                        this.bird.body.gravity.y = this.birdGravity;
                                        this.pipeGroup.setVelocityX(-this.birdSpeed);
                                        this.groundGroup.setVelocityX(-this.birdSpeed);
                                        this.isStarted = true;
                                    }
                                    this.bird.body.velocity.y = -this.birdFlapPower;
                                };
                                scene.input._events.pointerdown = [];
                                scene.create();
                                scene.input.keyboard.addKey('SPACE').on("down", () => {
                                    scene.flap.call(scene);
                                });
                            })();
                        }
                    },
                    {
                        name: "Change Game Code",
                        description: "Replace the old game with new HTML content",
                        inputs: [{
                            name: "HTML Code",
                            type: "text"
                        }],
                        run: function(newHtml) {
                            (function() {
                                if (newHtml) {
                                    var canvas = document.querySelector('canvas[width="320"][height="480"]');
                                    if (canvas) {
                                        var tempContainer = document.createElement('div');
                                        tempContainer.innerHTML = newHtml;
                                        var wrapperDiv = document.createElement('div');
                                        wrapperDiv.style.width = '320px';
                                        wrapperDiv.style.height = '480px';
                                        wrapperDiv.style.overflow = 'auto';
                                        wrapperDiv.style.boxSizing = 'border-box';
                                        wrapperDiv.style.position = canvas.style.position;
                                        wrapperDiv.style.marginLeft = canvas.style.marginLeft;
                                        wrapperDiv.style.marginTop = canvas.style.marginTop;
                                        wrapperDiv.style.cursor = canvas.style.cursor;
                                        wrapperDiv.style.backgroundColor = '#f0f0f0';
                                        while (tempContainer.firstChild) {
                                            wrapperDiv.appendChild(tempContainer.firstChild);
                                        }
                                        canvas.parentNode.replaceChild(wrapperDiv, canvas);
                                    }
                                    var scoreTextDiv = document.querySelector('div._scoreText_e2c5l_7');
                                    if (scoreTextDiv) {
                                        scoreTextDiv.parentNode.removeChild(scoreTextDiv);
                                    }
                                }
                            })();
                        }
                    }, {
                        name: "Set Score",
                        description: "Sets flappy blook score",
                        inputs: [{
                            name: "Score",
                            type: "number",
                        }, ],
                        run: function(score) {
                            Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[1](score || 0);
                        },
                    },
                ],
            },
        };
        const searchPage = document.createElement("div");
        searchPage.className = classes.searchPage;
        const searchbarHolder = document.createElement("form");
        searchbarHolder.className = classes.searchbarHolder;
        const searchbarInput = document.createElement("input");
        searchbarInput.placeholder = "Search Cheats";
        searchbarInput.className = classes.searchbarInput;
        const searchbarButton = document.createElement("div");
        searchbarButton.onclick = () => (searchbarInput.value = "");
        searchbarButton.innerHTML = '<i class="fas fa-times" style="line-height: 1;"></i>';
        searchbarButton.className = classes.searchbarButton;
        searchbarHolder.append(searchbarInput, searchbarButton);
        const searchResults = document.createElement("div");
        searchResults.className = classes.noScroll + " " + classes.searchResults;
        const noResult = document.createElement("div");
        noResult.className = classes.noResult;
        searchPage.append(searchbarHolder, searchResults);
        let searchThrottle,
            gamemodeResults = {};
        searchPage.onPath = searchbarHolder.onsubmit = (e) => {
            clearTimeout(searchThrottle);
            e?.preventDefault?.();
            const query = searchbarInput.value.toLowerCase();
            let hasResults = false;
            const animEnabled = window.XenostopicAnimationsEnabled;
            for (const child of searchResults.children) {
                if (child != noResult) {
                    if (child.dataset[datasets.mode]?.includes?.(query) || child.dataset[datasets.name].includes(query) || child.dataset[datasets.description]?.includes?.(query)) {
                        hasResults = true;
                        if (animEnabled) {
                            child.style.animation = "slideInLeft 0.3s ease-out";
                        }
                        child.style.display = "block";
                        if (child.dataset[datasets.mode]) {
                            if (animEnabled) {
                                gamemodeResults[child.dataset[datasets.mode]].style.animation = "slideInLeft 0.3s ease-out";
                            }
                            gamemodeResults[child.dataset[datasets.mode]].style.display = "block";
                        }
                    } else {
                        if (animEnabled) {
                            child.style.animation = "slideOutRight 0.3s ease-out";
                            setTimeout(() => {
                                child.style.display = "none";
                            }, 300);
                        } else {
                            child.style.display = "none";
                        }
                    }
                }
            }
            if (!hasResults) {
                noResult.innerText = `No results found for "${query}"`;
                if (animEnabled) {
                    noResult.style.animation = "fadeIn 0.3s ease-out";
                }
                noResult.style.display = "block";
            } else {
                if (animEnabled) {
                    noResult.style.animation = "fadeOut 0.3s ease-out";
                    setTimeout(() => {
                        noResult.style.display = "none";
                    }, 300);
                } else {
                    noResult.style.display = "none";
                }
            }
        };
        searchbarInput.oninput = (e) => {
            clearTimeout(searchThrottle);
            searchThrottle = setTimeout(searchbarHolder.onsubmit, 100);
        };
        const favoritesPage = document.createElement("div");
        favoritesPage.className = classes.noScroll + " " + classes.favoritesPage;
        const noFavorites = document.createElement("span");
        noFavorites.innerText = "You have no favorites.";
        favoritesPage.append(noFavorites);
        favoritesPage.onPath = () => {
            noFavorites.style.display = favoritesPage.querySelector("[data-" + datasets.favorited + "='true']") == null ? "block" : "none";
        };
        const NOTICE_BTN_BASE = 'display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#5865F2,#4752C4);color:#fff;font-size:15px;font-weight:600;padding:14px 32px;border-radius:12px;text-decoration:none;box-shadow:0 6px 20px rgba(88,101,242,.4);transition:all .3s ease';
        const NOTICE_BTN_ENTER = function() {
            this.style.cssText = NOTICE_BTN_BASE + ';transform:translateY(-3px) scale(1.02);box-shadow:0 10px 30px rgba(88,101,242,.6)';
        };
        const NOTICE_BTN_LEAVE = function() {
            this.style.cssText = NOTICE_BTN_BASE;
        };
        const CSP_SVG = `<path d="M12 2L4 6V11C4 16 7 20 12 22C17 20 20 16 20 11V6L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
        const LOCK_SVG = `<rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="2"/><path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1.5" fill="currentColor"/>`;
        gamemodesList.innerHTML = "";
        searchResults.innerHTML = "";
        searchResults.append(noResult);
        for (const mode in cheats) {
            const gamemode = document.createElement("div");
            gamemode.className = classes.gamemode;
            const image = document.createElement("img");
            image.src = cheats[mode].img;
            const name = document.createElement("div");
            image.alt = name.innerText = cheats[mode].name;
            gamemode.append(image, name);
            const cheatsPage = document.createElement("div");
            cheatsPage.className = classes.contentPage;
            if (mode === 'custom_modules') {
                cheatsPage.dataset.customModulesPage = 'true';
                customModulesPageRef = cheatsPage;
            }
            const cheatsList = document.createElement("div");
            cheatsList.className = classes.cheatsList + " " + classes.noScroll;
            if (mode === 'custom_modules') {
                customModulesCheatsList = cheatsList;
            }
            const inputElements = [];
            cheatsPage.onPath = () => inputElements.forEach((x) => x());
            const searchResultSeparator = document.createElement("div");
            searchResultSeparator.onclick = () => path.push(cheats[mode].name, cheatsPage);
            searchResultSeparator.className = classes.searchResultSeparator;
            searchResultSeparator.dataset[datasets.name] = (searchResultSeparator.innerText = cheats[mode].name).toLowerCase();
            gamemodeResults[cheats[mode].name.toLowerCase()] = searchResultSeparator;
            searchResults.append(searchResultSeparator);
            const favoritesSeparator = searchResultSeparator.cloneNode(true);
            favoritesSeparator.dataset[datasets.favorites] = 0;
            favoritesSeparator.onclick = searchResultSeparator.onclick;
            favoritesPage.append(favoritesSeparator);
            for (const cheat of cheats[mode].cheats) {
                const cheatId = `${mode}.${cheat.name.toLowerCase()}.${cheat.type == "toggle" ? "toggle" : "execute"}`;
                const cheatElement = document.createElement("div");
                const searchResult = document.createElement("div");
                searchResult.className = classes.searchResult;
                const searchResultInfo = document.createElement("div");
                searchResultInfo.className = classes.searchResultInfo;
                const searchResultName = document.createElement("div");
                searchResultName.className = classes.searchResultName;
                searchResult.dataset[datasets.name] = (searchResultName.innerText = cheat.name + (cheat.type == "toggle" && !cheat.name.includes("toggle") ? " (Toggle)" : "")).toLowerCase();
                searchResult.dataset[datasets.mode] = cheats[mode].name.toLowerCase();
                const searchResultDescription = document.createElement("div");
                searchResultDescription.className = classes.searchResultDescription;
                searchResult.dataset[datasets.description] = (searchResultDescription.innerText = cheat.description).toLowerCase();
                searchResultInfo.append(searchResultName, searchResultDescription);
                searchResult.onclick = () => {
                    path.push(searchResultName.innerText, cheatsPage);
                    cheatElement.scrollIntoView();
                    cheatElement.animate(
                        [{
                                color: "var(--textColor)",
                                textShadow: "0 0 0px var(--highlight)",
                            },
                            {
                                color: "var(--highlight)",
                                textShadow: "0 0 5px var(--highlight)",
                                offset: 0.25,
                            },
                            {
                                color: "var(--textColor)",
                                textShadow: "0 0 0px var(--highlight)",
                            },
                        ],
                        1500
                    );
                };
                searchResult.append(searchResultInfo);
                searchResults.append(searchResult);
                const cheatTop = document.createElement("div");
                cheatTop.className = classes.cheatTop;
                const cheatInfo = document.createElement("div");
                cheatInfo.className = classes.cheatInfo;
                const cheatName = document.createElement("span");
                cheatName.innerText = cheat.name;
                cheatName.className = classes.cheatName;
                const favoriteButton = document.createElement("i");
                favoriteButton.className = "far fa-star " + classes.favoriteButton;
                const favoriteInner = document.createElement("i");
                favoriteInner.className = "fas fa-star";
                favoriteButton.append(favoriteInner);
                let favoritesPageCopy = searchResult.cloneNode(true);
                favoritesPageCopy.dataset[datasets.favorited] = false;
                favoritesPageCopy.onclick = searchResult.onclick;
                favoritesPage.append(favoritesPageCopy);
                favoriteButton.onclick = () => {
                    const favorited = cheatId in Settings.data.favorites;
                    favoriteInner.classList.toggle(classes.filled, !favorited);
                    if (favorited) {
                        delete Settings.data.favorites[cheatId];
                        favoritesPageCopy.dataset[datasets.favorited] = false;
                        favoritesSeparator.dataset[datasets.favorites]--;
                    } else {
                        Settings.data.favorites[cheatId] = 1;
                        favoritesPageCopy.dataset[datasets.favorited] = true;
                        favoritesSeparator.dataset[datasets.favorites]++;
                    }
                    favoritesPage.onPath();
                    Settings.setData(Settings.data);
                };
                if (cheatId in (Settings.data.favorites ??= {})) {
                    favoriteInner.classList.toggle(classes.filled, true);
                    favoritesPageCopy.dataset[datasets.favorited] = true;
                    favoritesSeparator.dataset[datasets.favorites]++;
                }
                cheatName.append(favoriteButton);
                const cheatDescription = document.createElement("span");
                cheatDescription.innerText = cheat.description;
                cheatDescription.className = classes.cheatDescription;
                cheatInfo.append(cheatName, cheatDescription);
                cheatElement.append(cheatTop);
                const inputs = [];
                if (Array.isArray(cheat.inputs)) {
                    const cheatInputs = document.createElement("div");
                    cheatInputs.className = classes.cheatInputs;
                    for (const input of cheat.inputs) {
                        const inputElement = document.createElement("div");
                        const inputName = document.createElement("span");
                        inputName.innerText = input.name;
                        inputElement.append(inputName);
                        cheatInputs.append(inputElement);
                        if (input.type == "options") {
                            const inputField = document.createElement("select");
                            inputField.dataset[datasets.type] = "options";
                            inputElement.append(inputField);
                            inputs.push(inputField);
                            let curField = inputField;
                            const updateOptions = () => {
                                let choose = input.options;
                                const newInputField = document.createElement("select");
                                newInputField.dataset[datasets.type] = "options";
                                inputs[inputs.indexOf(curField)] = newInputField;
                                curField.replaceWith(newInputField);
                                curField = newInputField;
                                if (typeof choose == "function")
                                    try {
                                        choose = choose();
                                    } catch {
                                        choose = [];
                                    }
                                if (choose instanceof Promise) {
                                    const waiting = document.createElement("option");
                                    waiting.value = '""';
                                    waiting.innerHTML = "Loading Options...";
                                    curField.append(waiting);
                                    choose.then((choices) => {
                                        if (choices?.length > 0) {
                                            curField.innerHTML = "";
                                            for (const choice of choices) {
                                                const option = document.createElement("option");
                                                option.value = JSON.stringify(choice?.value ?? choice);
                                                option.innerHTML = choice?.name || choice;
                                                curField.append(option);
                                            }
                                        } else {
                                            const newInputField = document.createElement("input");
                                            inputs[inputs.indexOf(curField)] = newInputField;
                                            curField.replaceWith(newInputField);
                                            newInputField.dataset[datasets.type] = "string";
                                            newInputField.placeholder = input.name;
                                            curField = newInputField;
                                        }
                                    });
                                } else {
                                    if (choose?.length > 0) {
                                        for (const choice of choose) {
                                            const option = document.createElement("option");
                                            option.value = JSON.stringify(choice?.value ?? choice);
                                            option.innerHTML = choice?.name || choice;
                                            curField.append(option);
                                        }
                                    } else {
                                        const newInputField = document.createElement("input");
                                        inputs[inputs.indexOf(curField)] = newInputField;
                                        curField.replaceWith(newInputField);
                                        newInputField.dataset[datasets.type] = "string";
                                        newInputField.placeholder = input.name;
                                        curField = newInputField;
                                    }
                                }
                            };
                            updateOptions();
                            inputElements.push(updateOptions);
                        } else {
                            const inputField = document.createElement("input");
                            inputField.dataset[datasets.type] = input.type;
                            if (input.type == "number") {
                                inputField.type = "number";
                                inputField.min = input.min;
                                inputField.max = input.max;
                                inputField.value = input.value || (input.min ?? 0);
                            }
                            inputField.placeholder = input.name;
                            inputElement.append(inputField);
                            inputs.push(inputField);
                        }
                    }
                    cheatElement.append(cheatInputs);
                }
                cheatTop.append(cheatInfo);
                const runButton = document.createElement("div");
                runButton.className = classes.runCheat;
                if (cheat.type == "toggle") {
                    runButton.innerText = "Toggle On";
                    runButton.classList.add(classes.toggleCheat);
                } else runButton.innerText = "Execute";
                runButton.onclick = () => {
                    try {
                        cheat.run.apply(
                            cheat,
                            inputs.map((x) => (x.dataset[datasets.type] == "number" ? parseFloat("0" + x.value) : x.dataset[datasets.type] == "options" ? JSON.parse(x.value) : x.value))
                        );
                        if (cheat.type == "toggle") {
                            runButton.innerText = "Toggle " + (cheat.enabled ? "Off" : "On");
                            runButton.classList.toggle(classes.active, cheat.enabled);
                            Logs.addLog(`Toggled "${cheat.name}" ${cheat.enabled ? "on" : "off"}`, cheat.enabled ? "var(--toggleOn)" : "var(--toggleOff)");
                            if (areSweetAlertsEnabled()) {
                                Swal.fire({
                                    title: 'Cheat Toggled',
                                    text: `${cheat.name} is now ${cheat.enabled?'Enabled':'Disabled'}.`,
                                    icon: cheat.enabled ? 'success' : 'warning',
                                    toast: true,
                                    position: 'bottom',
                                    timer: 3000,
                                    timerProgressBar: true,
                                    showConfirmButton: false,
                                    background: '#151534',
                                    color: '#ffffff',
                                    iconColor: '#ffffff'
                                });
                            }
                        } else {
                            Logs.addLog(`Ran "${cheat.name}"`, "var(--highlight)");
                            if (areSweetAlertsEnabled()) {
                                Swal.fire({
                                    title: 'Cheat Executed',
                                    text: `${cheat.name} has been Executed.`,
                                    icon: 'info',
                                    toast: true,
                                    position: 'bottom',
                                    timer: 3000,
                                    timerProgressBar: true,
                                    showConfirmButton: false,
                                    background: '#151534',
                                    color: '#ffffff',
                                    iconColor: '#ffffff'
                                });
                            }
                        }
                    } catch (err) {
                        Logs.addLog(`Error running "${cheat.name}": ${err.message}`, "var(--error)");
                        if (areSweetAlertsEnabled()) {
                            Swal.fire({
                                title: 'Cheat Error',
                                text: `An error occurred while running ${cheat.name} make sure you are on the right page!`,
                                icon: 'error',
                                toast: true,
                                position: 'bottom',
                                timer: 3000,
                                timerProgressBar: true,
                                showConfirmButton: false,
                                background: '#151534',
                                color: '#ffffff',
                                iconColor: '#ff0000'
                            });
                        }
                    }
                };
                cheatTop.append(runButton);
                cheatsList.append(cheatElement);
            }
            cheatsPage.append(cheatsList);

            function createNoticeOverlay(targetPage, {
                svgPath,
                title,
                message,
                buttonHtml,
                buttonStyle,
                onEnter,
                onLeave
            }) {
                if (targetPage.querySelector?.('.Xenostopic-notice')) return;
                let blurTarget = targetPage.querySelector('.Xenostopic-blur-target');
                if (!blurTarget) {
                    blurTarget = document.createElement('div');
                    blurTarget.className = 'Xenostopic-blur-target';
                    blurTarget.style.cssText = 'filter:blur(8px);pointer-events:none';
                    while (targetPage.firstChild) blurTarget.appendChild(targetPage.firstChild);
                    targetPage.appendChild(blurTarget);
                }
                targetPage.style.cssText += ';position:relative;overflow:visible';
                const overlay = document.createElement('div');
                overlay.className = 'Xenostopic-notice';
                overlay.style.cssText = 'position:absolute;inset:0;display:flex;align-items:flex-start;justify-content:center;z-index:2000;padding:20px;overflow:visible';
                const card = document.createElement('div');
                card.style.cssText = `
        max-width:380px;width:100%;padding:40px 35px;border-radius:20px;text-align:center;
        backdrop-filter:blur(24px) saturate(180%);-webkit-backdrop-filter:blur(24px) saturate(180%);
        background:linear-gradient(145deg,rgba(138,43,226,.15),rgba(75,0,130,.1));
        border:1.5px solid rgba(255,255,255,.15);
        box-shadow:0 10px 40px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.08) inset,0 25px 70px rgba(138,43,226,.2);
        margin-top:-40px;
    `;
                const btn = document.createElement('a');
                Object.assign(btn, buttonHtml);
                btn.style.cssText = buttonStyle;
                btn.onmouseenter = onEnter;
                btn.onmouseleave = onLeave;
                card.innerHTML = `
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style="color:#fff;filter:drop-shadow(0 4px 16px rgba(255,255,255,.3));margin-bottom:20px">
            ${svgPath}
        </svg>
        <div style="color:#fff;font-size:32px;font-weight:800;letter-spacing:-.5px;margin-bottom:16px;text-shadow:0 2px 20px rgba(138,43,226,.6)">${title}</div>
        <div style="color:#fff;font-size:15px;line-height:1.6;margin-bottom:30px">${message}</div>
    `;
                card.appendChild(btn);
                overlay.appendChild(card);
                try {
                    targetPage.appendChild(overlay);
                } catch {
                    document.body.appendChild(overlay);
                }
            }
            gamemode.onclick = async () => {
                const unsupportedModes = ["racing", "royale", "dino", "rush"];
                if (mode === "custom_modules") {
                    const cspDetected = await detectCSP();
                    if (cspDetected) {
                        path.push(cheats[mode].name, cheatsPage);
                        createNoticeOverlay(cheatsPage, {
                            svgPath: CSP_SVG,
                            title: "CSP Detected",
                            message: "This is not supported on your version. Please use the extension version or get the CSP unblock extension.",
                            buttonHtml: {
                                href: "https://x-gui.netlify.app/extension",
                                target: "_blank",
                                textContent: "Get Extension"
                            },
                            buttonStyle: NOTICE_BTN_BASE,
                            onEnter: NOTICE_BTN_ENTER,
                            onLeave: NOTICE_BTN_LEAVE,
                        });
                        return;
                    }
                }
                if (unsupportedModes.includes(mode)) {
                    path.push(cheats[mode].name, cheatsPage);
                    createNoticeOverlay(cheatsPage, {
                        svgPath: LOCK_SVG,
                        title: "Not Supported",
                        message: "Cheats for this gamemode are still in development. Join the discord to find out when its done.",
                        buttonHtml: {
                            href: "https://discord.gg/Xenostopic",
                            target: "_blank",
                            innerHTML: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg><span style="margin-left:8px">Join Discord</span>`
                        },
                        buttonStyle: NOTICE_BTN_BASE,
                        onEnter: NOTICE_BTN_ENTER,
                        onLeave: NOTICE_BTN_LEAVE,
                    });
                } else {
                    path.push(cheats[mode].name, cheatsPage);
                }
            };
            gamemodesList.append(gamemode);
        }
        const creditsPage = document.createElement("div");
        creditsPage.className = classes.creditsPage;
        const changelogPage = document.createElement("div");
        changelogPage.className = classes.favoritesPage || "favoritesPage";
        Object.assign(changelogPage.style, {
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "24px 20px 50px 20px",
            overflowY: "auto",
        });
        const clHeader = document.createElement("div");
        Object.assign(clHeader.style, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "8px",
            paddingBottom: "16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
        });
        clHeader.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
    </svg>
    <span style="font-size:1.6em;font-weight:800;color:var(--textColor)">Changelog</span>
`;
        changelogPage.appendChild(clHeader);
        const clIcons = {
            dev: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
            bug: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l1.5 1.5M16 2l-1.5 1.5"/><rect x="6" y="6" width="12" height="14" rx="3"/><path d="M6 10H3M6 14H3M18 10h3M18 14h3"/></svg>`,
            fix: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3a4.5 4.5 0 00-3.8 6.8l-7.3 7.3a2 2 0 102.8 2.8l7.3-7.3A4.5 4.5 0 0019.5 7l-3 3-4-4 3-3z"/></svg>`,
            add: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
            mixed: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
            hotfix: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
            change: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`,
        };

        function getTagForVersion(desc) {
            const d = desc.toLowerCase();
            const hasFix = d.includes("fix") || d.includes("fixed");
            const hasAdd = d.includes("added") || d.includes("add") || d.includes("new");
            const hasBug = d.includes("bug") || d.includes("bugs");
            if (d.includes("development")) return {
                icon: clIcons.dev,
                color: "#f59e0b",
                label: "In Dev"
            };
            if (d.includes("hotfix")) return {
                icon: clIcons.hotfix,
                color: "#f59e0b",
                label: "Hotfix"
            };
            if (hasBug && !hasFix && !hasAdd) return {
                icon: clIcons.bug,
                color: "#ef4444",
                label: "Bug"
            };
            if (hasFix && hasAdd) return {
                icon: clIcons.mixed,
                color: "#8b5cf6",
                label: "Mixed"
            };
            if (hasFix) return {
                icon: clIcons.fix,
                color: "#10b981",
                label: "Fix"
            };
            if (hasAdd) return {
                icon: clIcons.add,
                color: "var(--highlight)",
                label: "Add"
            };
            if (d.includes("update") || d.includes("updated")) return {
                icon: clIcons.mixed,
                color: "var(--textColor2)",
                label: "Update"
            };
            return {
                icon: clIcons.change,
                color: "var(--textColor2)",
                label: "Change"
            };
        }
        const versions = [
            ["Version 7.1.0x", "Fixed the Custom Blook Editor so blooks now load correctly on the Play page. Updated the Blook Part List in the editor to include new items. Fixed the custom module issue where CSP was always detected. Corrected the position of CSP alerts in Custom Modules. Added Sweet Alerts to the Client Blook Editor. Fixed window.alert not working on certain pages. Added Gold Lock. Added Crypto Lock. Added Blooket Part Unlocker. Added a Leaderboard Tab and updated it for Colyseus.", "null"],
            ["Version 7x", "Redesigned alt manager, Updated Client Blooks UI, Improved changelog page, Cleaned up a lot of code, Added helpful quality-of-life features, Brought features from BCP into Xenostopic, Added new modules, Settings now save globally, Removed glow and made the UI less rounded, and Updated info and credits", "null"],
            ["Version 6.70x", "ADDED SMOOTH GUI ANIMATIONS, FIXED CUSTOM MODULE BUGS, ALLOWED TEXT VALUES FOR STATS, FIXED CRYPTO STEALING, ADDED SPAM CRYPTO HACK, UPDATED ICONS, FIXED STORAGE SYNC, AND UPDATED CREDITS.", "null"],
            ["Version 6.69x", "ADDED CSP DETECTOR FOR CUSTOM MODULES, FIXED CUSTOM MODULES BUG, FIXED STORAGE ISSUE ADDED IMAGE FIX AND ADDED FREE PLUS!.", "null"],
            ["Version 6.68x", "ADDED SMOOTH ANIMATIONS FOR Xenostopic, ADDED CUSTOM MODULES, AND NOW YOU CAN DRAG THE TOP AREA.", "null"],
            ["Version 6.67x", "ADDED SWAL ALERTS! TOGGLE, ADDED UNSUPPORTED GAMEMODE WARNINGS, AND MOVED SETTINGS MENU.", "null"],
            ["Version 6.66x", "ADDED SWAL ALERTS!", "null"],
            ["Version 6.65x", "ADDED CLIENT SIDED BLOOK EDITOR", "null"],
            ["Version 6.64x", "FIXED MOST GAMEMODES", "null"],
            ["Version 6.63x", "ADDED BLOOK EDITOR AND UPDATED MOBILE MODE", "null"],
            ["Version 6.62x", "ADDED ACCOUNT GENERATOR", "null"],
            ["Version 6.61x", "ADDED BLOOKET STREAM FINDER AND ALT MANAGER", "null"],
            ["Version 6.60x", "fixed ping display! ADDED CONSOLE MESSAGE AND ADDED PIN GUESSER!!", "null"],
            ["Version 6.50x", "FIXED KEYBINDS!! ADDED CHEATS AND ADDED 8 NEW THEMES, HAPPY HOLIDAYS GUYSS <3", "null"],
            ["Version 6.40x", "UPDATED REFRESH SVG AND ADDED CHEAT", "null"],
            ["Version 6.30x", "ADDED CHEATS AND UPDATED GUI", "null"],
            ["Version 6.20x", "ADDED MORE CHEATS+++", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 6.10x", "ADDED WHAT YOU ARE READING RN", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 6.00x", "ADDED MOBILE MODE + A BUNCH MORE CRAP", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 5.90x", "ROUNDED CORNERS", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 5.80x", "UPDATED XTRAS", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 5.70x", "ADDED EXTRAS TAB", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 5.60x", "STOP COMPLAINING (FIXED BUGS)", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 5.50x", "BUGS AND MORE BUGS", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 5.40x", "UPDATED VERSIONNAME VARIABLE", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 5.30x", "UPDATED BLOOKET BOT", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 5.20x", "ADDED REMOVE ALL TAKEN BLOOKS TO THE GLOBAL STATENODE", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 5.10x", "ADDED BLOOKET BOT", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 5.00x", "ADDED FREEZE LEADERBOARD", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 4.90x", "ADDED CHANGE GAME CODE TO FLAPPY BLOOK", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 4.80x", "ADDED CLIENT SIDE FRENZY", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 4.70x", "REMOVED THE . FROM THE TITLE", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 4.60x", "ADDED FLOOD ALERT BOX", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 4.50x", "FIXED SEVERAL BUGS", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 4.40x", "FIXED THE DOUBLE ERROR (SORRY GUYS!)", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 4.30x", "FIXED SPELLING ERROR", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 4.20x", "ADDED USERSCRIPT IMAGE!!!", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 4.10x", "BUGS FIXED (AGAIN)", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 4.00x", "BUGS FIXED", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 3.90x", "FIXED A SPELLING ERROR", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 3.80x", "BUGS", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 3.70x", "ATTEMPTED AN UPDATE BUT FAILED :(", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 3.60x", "DID SOME UI STUFF", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 3.50x", "FIXED A FEW BUS", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 3.40x", "NEW CHEATS ADDED", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 3.30x", "FIXED SUBDOMAIN ISSUE", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 3.20x", "ADDED SIMULATE UNLOCK, ALWAYS HACK, HOST ANY GAMEMODE, BYPASS FILTER, CRASH HOST, STEAL ALL PLAYERS GOLD AND BYPASS JOIN LIMIT", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 3.10x", "ADDED 7 NEW CHEATS", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 3.00x", "BUG FIXED", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 2.90x", "ADDED BYPASS NAME FILTER", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 2.80x", "ADDED 3 NEW CHEATS TO CRYPTO AND GOLD QUEST", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 2.70x", "ADDED WELCOME MESSAGE", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 2.60x", "ADDED GLOW EFFECT TO TITLE", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 2.50x", "REVAMPED COLORS AND UI", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 2.40x", "STARTED WITH NEW COLOR SCHEME", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 2.30x", "FIXED USE ANY BLOOK", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 2.20x", "BUG FIXED", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"],
            ["Version 2.10x", "STARTED NEW MENU", "https://greasyfork.org/en/scripts/553301-x-gui-client-for-blooket/versions"]
        ];
        versions.forEach(([ver, desc], index) => {
            const isLatest = index === 0;
            const {
                icon,
                color,
                label
            } = getTagForVersion(desc);
            const card = document.createElement("div");
            Object.assign(card.style, {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "10px",
                background: "rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "border-color 0.2s ease, background 0.2s ease",
                cursor: "default",
            });
            card.onmouseenter = () => {
                card.style.borderColor = "var(--highlight)";
                card.style.background = "rgba(0,0,0,0.3)";
            };
            card.onmouseleave = () => {
                card.style.borderColor = "rgba(255,255,255,0.06)";
                card.style.background = "rgba(0,0,0,0.2)";
            };
            const bubble = document.createElement("div");
            Object.assign(bubble.style, {
                width: "36px",
                height: "36px",
                minWidth: "36px",
                borderRadius: "10px",
                background: "var(--background2)",
                border: "1px solid " + color + "55",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: color,
                flexShrink: "0",
                marginTop: "2px",
            });
            bubble.title = label;
            bubble.innerHTML = icon;
            const textBlock = document.createElement("div");
            Object.assign(textBlock.style, {
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                flex: "1",
                minWidth: "0",
            });
            const verRow = document.createElement("div");
            Object.assign(verRow.style, {
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap"
            });
            const verLabel = document.createElement("span");
            Object.assign(verLabel.style, {
                fontWeight: "700",
                fontSize: "0.9em",
                color: "var(--textColor)",
            });
            verLabel.innerText = ver;
            if (isLatest) {
                const badge = document.createElement("span");
                Object.assign(badge.style, {
                    fontSize: "0.62em",
                    fontWeight: "700",
                    padding: "2px 7px",
                    borderRadius: "20px",
                    background: "var(--highlight)",
                    color: "#fff",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    flexShrink: "0",
                });
                badge.innerText = "Latest";
                verRow.append(verLabel, badge);
            } else {
                verRow.append(verLabel);
            }
            const descLabel = document.createElement("span");
            Object.assign(descLabel.style, {
                fontSize: "0.78em",
                color: "var(--textColor2)",
                lineHeight: "1.5",
                wordBreak: "break-word",
                whiteSpace: "normal",
            });
            descLabel.innerText = desc;
            textBlock.append(verRow, descLabel);
            card.append(bubble, textBlock);
            changelogPage.appendChild(card);
        });
        guiContent.appendChild(changelogPage);
        const altPage = document.createElement("div");
        altPage.className = classes.favoritesPage || "favoritesPage";
        Object.assign(altPage.style, {
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "24px 20px 60px 20px",
            overflowY: "auto"
        });
        const altManagerIcons = {
            users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
            eye: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
            eyeOff: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`,
            plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
            trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
            zap: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
            userPlus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>`,
            copy: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
            check: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
            download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
            upload: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
            code: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
        };
        const altStyle = document.createElement("style");
        altStyle.textContent = `
.${classes.favoritesPage || "favoritesPage"}::-webkit-scrollbar { width: 6px; }
.${classes.favoritesPage || "favoritesPage"}::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.4); border-radius: 3px; }
.${classes.favoritesPage || "favoritesPage"}::-webkit-scrollbar-track { background: transparent; }
.altCard {
  background: var(--background2);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.altCard:hover {
  border-color: rgba(139,92,246,0.3);
}
.altInput {
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 0 14px;
  height: 42px;
  color: #fff;
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color .2s ease, background .2s ease;
}
.altInput::placeholder { color: #6b7280; }
.altInput:focus {
  border-color: #8b5cf6;
  background: rgba(0,0,0,0.4);
}
.altSectionLabel {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.aBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0 14px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid transparent;
  font-size: 13px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  cursor: pointer;
  transition: background .15s ease, border-color .15s ease, opacity .15s ease, transform .1s ease;
  white-space: nowrap;
  line-height: 1;
}
.aBtn:active { transform: scale(0.97); }
.aBtn:disabled { opacity: 0.4; cursor: not-allowed; transform: none !important; }
.aBtnPrimary {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(139,92,246,0.3);
}
.aBtnPrimary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(139,92,246,0.4);
}
.aBtnGhost {
  background: rgba(255,255,255,0.06);
  color: #d1d5db;
  border-color: rgba(255,255,255,0.12);
}
.aBtnGhost:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
  border-color: rgba(255,255,255,0.22);
}
.aBtnDanger {
  background: rgba(239,68,68,0.12);
  color: #f87171;
  border-color: rgba(239,68,68,0.2);
}
.aBtnDanger:hover {
  background: rgba(239,68,68,0.22);
  border-color: rgba(239,68,68,0.38);
}
.aBtnFill {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: #fff;
  border-color: transparent;
  font-size: 12px;
  padding: 0 12px;
  height: 30px;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(139,92,246,0.25);
}
.aBtnFill:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139,92,246,0.4);
}
.aBtnIcon {
  padding: 0 10px;
  height: 42px;
  min-width: 42px;
  border-radius: 10px;
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
  color: #d1d5db;
  font-size: 13px;
  flex-shrink: 0;
}
.aBtnIcon:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
  border-color: rgba(255,255,255,0.2);
}
.altAltRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.altAltInfo { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.altAltUsername {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.altAltPassword {
  font-size: 12px;
  font-family: 'Menlo', 'Consolas', monospace;
  color: #6b7280;
  letter-spacing: 0.04em;
}
.altAltActions { display: flex; align-items: center; gap: 5px; flex-shrink: 0; }
.altDivider {
  height: 1px;
  background: rgba(255,255,255,0.06);
  margin: 2px 0;
}
`;
        document.head.appendChild(altStyle);
        const altTitle = document.createElement("div");
        Object.assign(altTitle.style, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontSize: "22px",
            fontWeight: "800",
            color: "#fff",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            marginBottom: "4px",
            paddingBottom: "14px",
            borderBottom: "1px solid rgba(255,255,255,0.07)"
        });
        altTitle.innerHTML = `${altManagerIcons.users} Alt Manager`;
        altPage.appendChild(altTitle);
        const addAltCard = document.createElement("div");
        addAltCard.className = "altCard";
        addAltCard.innerHTML = `
  <div class="altSectionLabel">${altManagerIcons.userPlus} Add Account</div>
  <div style="display:flex;flex-direction:column;gap:8px">
    <input id="altUser" class="altInput" placeholder="Username or email" autocomplete="off">
    <div style="display:flex;gap:6px">
      <input id="altPass" class="altInput" type="password" placeholder="Password" style="flex:1">
<button id="toggleAddPass" class="aBtn aBtnIcon"></button>
    </div>
    <button id="saveAltBtn" class="aBtn aBtnPrimary" style="width:100%;padding:9px"></button>
  </div>
`;
        altPage.appendChild(addAltCard);
        const altList = document.createElement("div");
        Object.assign(altList.style, {
            display: "flex",
            flexDirection: "column",
            gap: "6px"
        });
        const importExportCard = document.createElement("div");
        importExportCard.className = "altCard";
        importExportCard.innerHTML = `
  <div class="altSectionLabel">${altManagerIcons.code} Import / Export</div>
  <div style="display:flex;flex-direction:column;gap:8px">
    <textarea id="altJsonInput" class="altInput" placeholder="Paste base64 or JSON to import" style="min-height:80px;resize:vertical;padding:10px;font-family:monospace;font-size:0.8em;line-height:1.5"></textarea>
    <div style="display:flex;gap:6px">
      <button id="importJsonBtn" class="aBtn aBtnGhost" style="flex:1"></button>
      <button id="exportJsonBtn" class="aBtn aBtnGhost" style="flex:1"></button>
      <button id="copyJsonBtn" class="aBtn aBtnGhost" style="flex:1"></button>
    </div>
    <div id="jsonDisplay" class="altInput" style="min-height:70px;max-height:160px;overflow-y:auto;font-family:monospace;font-size:0.78em;white-space:pre-wrap;word-break:break-all;background:rgba(0,0,0,0.25);color:rgba(255,255,255,0.45);cursor:default;line-height:1.5"></div>
  </div>
`;
        altPage.appendChild(importExportCard);
        altPage.appendChild(altList);
        const ALT_KEY = "Xenostopic_alts";
        const getAlts = () => {
            const cookie = getCookie(ALT_KEY);
            return cookie ? JSON.parse(cookie) : [];
        };
        const setAlts = (alts) => {
            const value = JSON.stringify(alts);
            const maxAge = 365 * 24 * 60 * 60;
            document.cookie = `${ALT_KEY}=${encodeURIComponent(value)}; domain=.blooket.com; path=/; max-age=${maxAge}; SameSite=Lax`;
        };

        function autofillBlooket(username, password) {
            if (window.location.href !== "https://id.blooket.com/login") {
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        title: "Wrong Page!",
                        text: "Please navigate to https://id.blooket.com/login first!",
                        icon: "warning",
                        confirmButtonText: "OK"
                    });
                } else {
                    alert("⚠️ Please navigate to https://id.blooket.com/login first!");
                }
                return false;
            }
            try {
                const userInput = document.querySelector("body > main > div.LeftWrapper_leftWrapper__Uz6fI > div.CenterWrapper_centerWrapper__8sR2s > form > div:nth-child(1) > input");
                const passInput = document.querySelector("body > main > div.LeftWrapper_leftWrapper__Uz6fI > div.CenterWrapper_centerWrapper__8sR2s > form > div:nth-child(2) > input");
                if (!userInput || !passInput) {
                    if (typeof Swal !== 'undefined') {
                        Swal.fire({
                            title: "Error!",
                            text: "Could not find login fields.",
                            icon: "error",
                            confirmButtonText: "OK"
                        });
                    } else {
                        alert("❌ Could not find login fields.");
                    }
                    return false;
                }
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
                const userFiber = userInput[Object.keys(userInput).find(k => k.startsWith("__reactFiber"))];
                nativeInputValueSetter.call(userInput, username);
                userFiber.memoizedProps.onChange({
                    target: userInput
                });
                const passFiber = passInput[Object.keys(passInput).find(k => k.startsWith("__reactFiber"))];
                nativeInputValueSetter.call(passInput, password);
                passFiber.memoizedProps.onChange({
                    target: passInput
                });
                return true;
            } catch (error) {
                console.error("Autofill error:", error);
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        title: "Autofill Failed!",
                        text: "Error: " + error.message,
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                } else {
                    alert("❌ Autofill failed: " + error.message);
                }
                return false;
            }
        }

        function renderAlts() {
            altList.innerHTML = "";
            const alts = getAlts();
            if (!alts.length) {
                const empty = document.createElement("div");
                Object.assign(empty.style, {
                    textAlign: "center",
                    padding: "32px 16px",
                    fontSize: "0.85em",
                    color: "rgba(255,255,255,0.25)"
                });
                empty.innerText = "No accounts saved yet.";
                altList.appendChild(empty);
                return;
            }
            const listCard = document.createElement("div");
            listCard.className = "altCard";
            listCard.style.padding = "4px 0";
            const listLabel = document.createElement("div");
            listLabel.className = "altSectionLabel";
            listLabel.style.cssText = "padding:12px 16px 8px;margin:0";
            listLabel.innerHTML = `${altManagerIcons.users} Saved Accounts <span style="margin-left:auto;background:rgba(255,255,255,0.07);padding:2px 8px;border-radius:20px;font-size:0.9em">${alts.length}</span>`;
            listCard.appendChild(listLabel);
            alts.forEach((alt, index) => {
                if (index > 0) {
                    const div = document.createElement("div");
                    div.className = "altDivider";
                    div.style.margin = "0 16px";
                    listCard.appendChild(div);
                }
                let passVisible = false;
                const row = document.createElement("div");
                row.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 16px;transition:background .15s ease;border-radius:8px";
                row.onmouseenter = () => row.style.background = "rgba(255,255,255,0.03)";
                row.onmouseleave = () => row.style.background = "transparent";
                const info = document.createElement("div");
                info.className = "altAltInfo";
                info.style.minWidth = "0";
                const username = document.createElement("div");
                username.className = "altAltUsername";
                username.textContent = alt.user;
                const password = document.createElement("div");
                password.className = "altAltPassword";
                password.textContent = "••••••••";
                info.append(username, password);
                const actions = document.createElement("div");
                actions.className = "altAltActions";
                const eyeBtn = document.createElement("button");
                eyeBtn.className = "aBtn aBtnIcon";
                eyeBtn.title = "Show/hide password";
                eyeBtn.innerHTML = altManagerIcons.eye;
                eyeBtn.onclick = () => {
                    passVisible = !passVisible;
                    password.textContent = passVisible ? alt.pass : "••••••••";
                    password.style.color = passVisible ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.35)";
                    eyeBtn.innerHTML = passVisible ? altManagerIcons.eyeOff : altManagerIcons.eye;
                };
                const copyUserBtn = document.createElement("button");
                copyUserBtn.className = "aBtn aBtnIcon";
                copyUserBtn.title = "Copy username";
                copyUserBtn.innerHTML = altManagerIcons.copy;
                copyUserBtn.onclick = async () => {
                    await navigator.clipboard.writeText(alt.user);
                    copyUserBtn.innerHTML = altManagerIcons.check;
                    setTimeout(() => copyUserBtn.innerHTML = altManagerIcons.copy, 1500);
                };
                const fillBtn = document.createElement("button");
                fillBtn.className = "aBtn aBtnFill";
                fillBtn.innerHTML = `${altManagerIcons.zap} Fill`;
                fillBtn.onclick = () => {
                    const success = autofillBlooket(alt.user, alt.pass);
                    if (success) {
                        fillBtn.innerHTML = `${altManagerIcons.check} Done`;
                        setTimeout(() => fillBtn.innerHTML = `${altManagerIcons.zap} Fill`, 2000);
                    }
                };
                const removeBtn = document.createElement("button");
                removeBtn.className = "aBtn aBtnDanger";
                removeBtn.innerHTML = altManagerIcons.trash;
                removeBtn.title = "Remove";
                removeBtn.onclick = () => {
                    const confirm = () => {
                        const all = getAlts();
                        all.splice(index, 1);
                        setAlts(all);
                        renderAlts();
                    };
                    if (typeof Swal !== 'undefined') {
                        Swal.fire({
                            title: "Remove account?",
                            text: alt.user,
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#ef4444",
                            cancelButtonColor: "#6b7280",
                            confirmButtonText: "Remove",
                            cancelButtonText: "Cancel",
                            allowOutsideClick: true,
                            allowEscapeKey: true
                        }).then(r => r.isConfirmed && confirm());
                    } else {
                        if (window.confirm(`Remove "${alt.user}"?`)) confirm();
                    }
                };
                actions.append(eyeBtn, copyUserBtn, fillBtn, removeBtn);
                row.append(info, actions);
                listCard.appendChild(row);
            });
            altList.appendChild(listCard);
        }
        const addPassInput = addAltCard.querySelector("#altPass");
        const toggleAddPassBtn = addAltCard.querySelector("#toggleAddPass");
        const saveAltBtn = addAltCard.querySelector("#saveAltBtn");
        toggleAddPassBtn.innerHTML = altManagerIcons.eye;
        toggleAddPassBtn.onclick = () => {
            const show = addPassInput.type === "password";
            addPassInput.type = show ? "text" : "password";
            toggleAddPassBtn.innerHTML = show ? altManagerIcons.eyeOff : altManagerIcons.eye;
        };
        saveAltBtn.innerHTML = `${altManagerIcons.plus} Save Account`;
        saveAltBtn.onclick = () => {
            const user = addAltCard.querySelector("#altUser").value.trim();
            const pass = addPassInput.value.trim();
            if (!user || !pass) {
                alert("Please enter both username and password.");
                return;
            }
            const alts = getAlts();
            if (alts.some(a => a.user === user)) {
                if (!confirm(`"${user}" already exists. Update it?`)) return;
                const idx = alts.findIndex(a => a.user === user);
                alts.splice(idx, 1);
            }
            alts.push({
                user,
                pass
            });
            setAlts(alts);
            addAltCard.querySelector("#altUser").value = "";
            addPassInput.value = "";
            addPassInput.type = "password";
            toggleAddPassBtn.innerHTML = altManagerIcons.eye;
            saveAltBtn.innerHTML = `${altManagerIcons.check} Saved`;
            saveAltBtn.disabled = true;
            setTimeout(() => {
                saveAltBtn.innerHTML = `${altManagerIcons.plus} Save Account`;
                saveAltBtn.disabled = false;
            }, 1500);
            renderAlts();
        };
        const altJsonInput = importExportCard.querySelector("#altJsonInput");
        const jsonDisplay = importExportCard.querySelector("#jsonDisplay");
        jsonDisplay.style.paddingTop = "8px";
        const importJsonBtn = importExportCard.querySelector("#importJsonBtn");
        const exportJsonBtn = importExportCard.querySelector("#exportJsonBtn");
        const copyJsonBtn = importExportCard.querySelector("#copyJsonBtn");
        importJsonBtn.innerHTML = `${altManagerIcons.upload} Import`;
        exportJsonBtn.innerHTML = `${altManagerIcons.download} Export`;
        copyJsonBtn.innerHTML = `${altManagerIcons.copy} Copy`;
        jsonDisplay.textContent = "Export to see data here";
        importJsonBtn.onclick = () => {
            const inputText = altJsonInput.value.trim();
            if (!inputText) {
                alert("Paste base64 or JSON first.");
                return;
            }
            try {
                let imported;
                try {
                    imported = JSON.parse(inputText);
                } catch {
                    imported = JSON.parse(atob(inputText));
                }
                if (!Array.isArray(imported)) throw new Error("Data must be an array");
                for (const a of imported) {
                    if (!a.user || !a.pass) throw new Error("Each entry needs 'user' and 'pass'");
                }
                const doImport = () => {
                    const existing = getAlts();
                    setAlts([...existing, ...imported]);
                    renderAlts();
                    altJsonInput.value = "";
                };
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        title: "Import accounts?",
                        text: `${imported.length} account(s) will be added.`,
                        icon: "question",
                        showCancelButton: true,
                        confirmButtonColor: "#8b5cf6",
                        confirmButtonText: "Import",
                        cancelButtonText: "Cancel",
                        allowOutsideClick: true,
                        allowEscapeKey: true
                    }).then(r => {
                        if (r.isConfirmed) {
                            doImport();
                            Swal.fire({
                                title: "Imported!",
                                text: `${imported.length} account(s) added.`,
                                icon: "success",
                                timer: 2000,
                                showConfirmButton: false
                            });
                        }
                    });
                } else {
                    if (confirm(`Import ${imported.length} account(s)?`)) doImport();
                }
            } catch (e) {
                alert("Invalid format: " + e.message);
            }
        };
        exportJsonBtn.onclick = () => {
            const alts = getAlts();
            if (!alts.length) {
                alert("No accounts to export.");
                return;
            }
            const base64 = btoa(JSON.stringify(alts));
            altJsonInput.value = base64;
            jsonDisplay.textContent = JSON.stringify(alts, null, 2);
            exportJsonBtn.innerHTML = `${altManagerIcons.check} Exported`;
            exportJsonBtn.disabled = true;
            setTimeout(() => {
                exportJsonBtn.innerHTML = `${altManagerIcons.download} Export`;
                exportJsonBtn.disabled = false;
            }, 1500);
        };
        copyJsonBtn.onclick = async () => {
            const text = altJsonInput.value.trim();
            if (!text) return;
            await navigator.clipboard.writeText(text);
            copyJsonBtn.innerHTML = `${altManagerIcons.check} Copied`;
            setTimeout(() => copyJsonBtn.innerHTML = `${altManagerIcons.copy} Copy`, 1500);
        };
        altJsonInput.addEventListener('input', () => {
            const text = altJsonInput.value.trim();
            if (!text) {
                jsonDisplay.textContent = "Export to see data here";
                return;
            }
            try {
                let decoded;
                try {
                    decoded = JSON.parse(text);
                } catch {
                    decoded = JSON.parse(atob(text));
                }
                jsonDisplay.textContent = JSON.stringify(decoded, null, 2);
            } catch {
                jsonDisplay.textContent = "Invalid format";
            }
        });
        addAltCard.querySelector("#altUser").addEventListener("keypress", e => {
            if (e.key === "Enter") addAltCard.querySelector("#altPass").focus();
        });
        addPassInput.addEventListener("keypress", e => {
            if (e.key === "Enter") saveAltBtn.click();
        });
        altPage.onPath = renderAlts;

        const blookPage = document.createElement("div");
        blookPage.className = "blookPage";
        Object.assign(blookPage.style, {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "0",
            background: "var(--background2)",
            height: "100vh",
            overflowY: "scroll",
            boxSizing: "border-box",
            width: "100%"
        });
        const Blookstyle = document.createElement("style");
        Blookstyle.textContent = `
.blookPage {
    height: 100% !important;
    overflow-y: auto !important;
}
.blookPage::-webkit-scrollbar { width: 8px; }
.blookPage::-webkit-scrollbar-thumb { background: #5b4bdb; border-radius: 4px; }
.editorLayout {
    display: grid;
    grid-template-columns: 73px 1fr 73px;
    grid-template-rows: auto;
    gap: 1px;
    max-width: 560px;
    margin: 0 auto;
    width: 100%;
    padding: 12px 16px;
    align-items: start;
    justify-content: center;
}
.nameInputRow {
    display: none;
}
.topSection {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    align-self: start;
}
.leftColumn {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: flex-start;
    align-self: start;
}
.rightColumn {
    grid-column: 3;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: flex-start;
    align-self: start;
}
.partColumn {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 0;
    width: 100%;
}
.partButton {
    width: 73px;
    height: 59px;
    border-radius: 10px;
    border: 2px solid rgba(255,255,255,0.15);
    background: rgba(30,35,65,0.8);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    transition: all 0.2s;
    position: relative;
}
.partButton:hover {
    border-color: #8f6bff;
    background: rgba(40,45,75,0.9);
    transform: translateY(-2px);
}
.partButton.active {
    border-color: #5b4bdb;
    background: rgba(91,75,219,0.3);
}
.partButton.disabled {
    opacity: 0.3;
    cursor: not-allowed;
}
.partIcon {
    width: 18px;
    height: 18px;
}
.partLabel {
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    text-align: center;
}
.previewCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    width: 100%;
}
.previewBox {
    width: 290px;
    height: 255px;
    background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,255,0.95) 100%);
    border-radius: 20px;
    border: 4px solid rgba(120,100,255,0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    position: relative;
    overflow: hidden;
}
.previewStack {
    position: relative;
    width: 185px;
    height: 185px;
    flex-shrink: 0;
}
.previewStack img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.selectorView {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(240,240,255,0.98) 100%);
    display: flex;
    flex-direction: column;
    z-index: 10;
    border-radius: 20px;
}
.selectorViewHeader {
    padding: 12px 16px;
    border-bottom: 2px solid rgba(120,100,255,0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.selectorViewTitle {
    font-size: 16px;
    font-weight: 900;
    color: #333;
}
.selectorViewClose {
    background: rgba(120,100,255,0.15);
    border: none;
    border-radius: 8px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    color: #5b4bdb;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}
.selectorViewClose:hover {
    background: rgba(120,100,255,0.25);
    transform: scale(1.1);
}
.selectorViewGrid {
    flex: 1;
    overflow-y: auto;
    padding: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    align-content: start;
}
.selectorViewGrid::-webkit-scrollbar { width: 8px; }
.selectorViewGrid::-webkit-scrollbar-thumb { background: #5b4bdb; border-radius: 4px; }
.selectorViewItem {
    aspect-ratio: 1;
    background: rgba(230,230,245,0.6);
    border: 3px solid rgba(120,100,255,0.2);
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    position: relative;
}
.selectorViewItem:hover {
    border-color: #8f6bff;
    background: rgba(143,107,255,0.15);
    transform: scale(1.05);
}
.selectorViewItem.selected {
    border-color: #5b4bdb;
    background: rgba(91,75,219,0.2);
    border-width: 4px;
}
.selectorViewItem img {
    width: 75%;
    height: 75%;
    object-fit: contain;
}
.selectorViewItem.none svg {
    width: 45%;
    height: 45%;
}
.actionButtons {
    display: flex;
    gap: 12px;
    flex-wrap: nowrap;
    justify-content: center;
}
.blookBtn {
    height: 38px;
    padding: 0 14px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 13px;
    color: #fff;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    white-space: nowrap;
}
.blookBtn svg {
    width: 15px;
    height: 15px;
    fill: currentColor;
}
.icon-svg {
    width: 15px;
    height: 15px;
    fill: currentColor;
}
.blookBtn.save {
    background: linear-gradient(135deg, #8f6bff, #5b4bdb);
}
.blookBtn.save:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(91,75,219,0.4);
}
.blookBtn.save:active {
    transform: scale(0.98);
}
.blookBtn.clear {
    background: rgba(239,68,68,0.8);
}
.blookBtn.clear:hover {
    background: rgba(239,68,68,1);
    transform: translateY(-2px);
}
.blookBtn.clear:active {
    transform: scale(0.98);
}
.blookBtn.preset {
    background: linear-gradient(135deg, #10b981, #059669);
}
.blookBtn.preset:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16,185,129,0.4);
}
.blookBtn.preset:active {
    transform: scale(0.98);
}
.blookBtn.import {
    background: linear-gradient(135deg, #8f6bff, #5b4bdb);
}
.blookBtn.import:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(91,75,219,0.3);
}
.blookBtn.import:active {
    transform: scale(0.98);
}
.blookBtn.export {
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.15);
}
.blookBtn.export:hover {
    background: rgba(255,255,255,.12);
    border-color: rgba(255,255,255,.25);
}
.blookBtn.export:active {
    transform: scale(0.98);
}
.blookBtn.copy {
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.15);
}
.blookBtn.copy:hover {
    background: rgba(255,255,255,.12);
    border-color: rgba(255,255,255,.25);
}
.blookBtn.copy:active {
    transform: scale(0.98);
}
.nameInput {
    width: 100%;
    max-width: 340px;
    padding: 12px 14px;
    border-radius: 12px;
    border: 3px solid rgba(120,100,255,0.3);
    background: rgba(30,35,65,0.8);
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    box-sizing: border-box;
}
.nameInput::placeholder {
    color: rgba(255,255,255,0.5);
}
.codeContainer {
    width: 100%;
    max-width: 600px;
    display: flex;
    gap: 12px;
    align-items: center;
}
.importSection {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 12px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: stretch;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}
.blook-input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}
.blook-input {
    width: 100%;
    height: 44px;
    padding: 0 16px;
    background: rgba(0,0,0,.3);
    color: #fff;
    border: 2px solid rgba(255,255,255,.1);
    border-radius: 10px;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
    transition: all .2s ease;
}
.blook-input:focus {
    border-color: #8b5cf6;
    background: rgba(0,0,0,.4);
}
.blook-input::placeholder {
    color: #6b7280;
}
.button-group {
    display: flex;
    gap: 6px;
    flex-wrap: nowrap;
    width: 100%;
    box-sizing: border-box;
}
.button-group .blookBtn {
    flex: 1 1 0 !important;
    min-width: 0 !important;
    width: 0 !important;
    padding: 0 4px !important;
    font-size: 12px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
}
.seed-display {
    background: rgba(0,0,0,.3);
    border: 2px solid rgba(255,255,255,.1);
    border-radius: 10px;
    padding: 12px;
    color: #9ca3af;
    font-size: 13px;
    word-break: break-all;
    max-height: 100px;
    overflow-y: auto;
    font-family: monospace;
}
.seed-display::-webkit-scrollbar {
    width: 6px;
}
.seed-display::-webkit-scrollbar-track {
    background: rgba(0,0,0,.2);
    border-radius: 10px;
}
.seed-display::-webkit-scrollbar-thumb {
    background: rgba(139,92,246,.4);
    border-radius: 10px;
}
.sectionLabel {
    font-size: 13px;
    font-weight: 700;
    color: rgba(255,255,255,0.7);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
}
.blook-section {
    background: var(--background2, rgba(30,35,65,0.8));
    border-radius: 14px;
    padding: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,.2);
    width: 100%;
    box-sizing: border-box;
}
.blook-section-title {
    font-size: 1.1em;
    font-weight: 700;
    color: #fff;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.presetSection {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: stretch;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}
.presetList {
    width: 100%;
    max-height: 600px;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 14px;
    padding-right: 4px;
}
.presetList::-webkit-scrollbar { width: 8px; }
.presetList::-webkit-scrollbar-track {
    background: rgba(0,0,0,.2);
    border-radius: 10px;
}
.presetList::-webkit-scrollbar-thumb { 
    background: rgba(139,92,246,.4); 
    border-radius: 10px; 
}
.presetList::-webkit-scrollbar-thumb:hover {
    background: rgba(139,92,246,.6);
}
.presetItem {
    background: rgba(0,0,0,.3);
    border: 2px solid rgba(255,255,255,.1);
    border-radius: 14px;
    padding: 14px;
    cursor: pointer;
    transition: all .2s ease;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.presetItem:hover {
    background: rgba(0,0,0,.4);
    border-color: #8b5cf6;
    box-shadow: 0 4px 12px rgba(139,92,246,.2);
}
.preset-img-wrapper {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(139,92,246,.08), rgba(124,58,237,.05));
    border-radius: 10px;
    margin-bottom: 4px;
    position: relative;
}
.preset-blook-stack {
    position: relative;
    width: 80px;
    height: 80px;
}
.preset-blook-stack img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.presetName {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.presetCode {
    font-size: 11px;
    font-family: monospace;
    color: #9ca3af;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.presetItemActions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
}
.presetLoadBtn, .presetDeleteBtn {
    height: 34px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    transition: all .2s ease;
}
.presetLoadBtn {
    background: #8b5cf6;
    color: #fff;
}
.presetLoadBtn:hover {
    background: #7c3aed;
}
.presetLoadBtn:active {
    transform: scale(0.95);
}
.presetDeleteBtn {
    background: rgba(239,68,68,.2);
    color: #ef4444;
    border: 1px solid rgba(239,68,68,.3);
}
.presetDeleteBtn:hover {
    background: rgba(239,68,68,.3);
}
.presetDeleteBtn:active {
    transform: scale(0.95);
}
.empty-state {
    grid-column: 1/-1;
    text-align: center;
    padding: 40px 20px;
    color: #6b7280;
    font-size: 15px;
}
`;
        document.head.appendChild(Blookstyle);
        let partsData = {
            "base": [{
                "id": 1,
                "numInName": 0,
                "url": "https://media.blooket.com/image/upload/v1634087683/BlookParts/base0.svg"
            }, {
                "id": 2,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087683/BlookParts/base1.svg"
            }, {
                "id": 3,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087683/BlookParts/base2.svg"
            }, {
                "id": 4,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087683/BlookParts/base3.svg"
            }, {
                "id": 5,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087694/BlookParts/base4.svg"
            }, {
                "id": 6,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1634087683/BlookParts/base5.svg"
            }],
            "clothing": [{
                "id": 1,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087712/BlookParts/clothing1.svg"
            }, {
                "id": 2,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087707/BlookParts/clothing2.svg"
            }, {
                "id": 3,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087720/BlookParts/clothing3.svg"
            }, {
                "id": 4,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087741/BlookParts/clothing4.svg"
            }, {
                "id": 5,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1634087741/BlookParts/clothing5.svg"
            }, {
                "id": 6,
                "numInName": 6,
                "url": "https://media.blooket.com/image/upload/v1634087744/BlookParts/clothing6.svg"
            }, {
                "id": 7,
                "numInName": 7,
                "url": "https://media.blooket.com/image/upload/v1634087725/BlookParts/clothing7.svg"
            }, {
                "id": 8,
                "numInName": 8,
                "url": "https://media.blooket.com/image/upload/v1634087758/BlookParts/clothing8.svg"
            }, {
                "id": 9,
                "numInName": 9,
                "url": "https://media.blooket.com/image/upload/v1634087769/BlookParts/clothing9.svg"
            }, {
                "id": 10,
                "numInName": 10,
                "url": "https://media.blooket.com/image/upload/v1634087763/BlookParts/clothing10.svg"
            }, {
                "id": 11,
                "numInName": 11,
                "url": "https://media.blooket.com/image/upload/v1634087807/BlookParts/clothing11.svg"
            }, {
                "id": 12,
                "numInName": 12,
                "url": "https://media.blooket.com/image/upload/v1634087683/BlookParts/clothing12.svg"
            }, {
                "id": 13,
                "numInName": 13,
                "url": "https://media.blooket.com/image/upload/v1664323225/BlookParts/clothing13.svg"
            }, {
                "id": 14,
                "numInName": 14,
                "url": "https://media.blooket.com/image/upload/v1664323226/BlookParts/clothing14.svg"
            }, {
                "id": 15,
                "numInName": 15,
                "url": "https://media.blooket.com/image/upload/v1664323225/BlookParts/clothing15.svg"
            }, {
                "id": 16,
                "numInName": 16,
                "url": "https://media.blooket.com/image/upload/v1664323227/BlookParts/clothing16.svg"
            }, {
                "id": 17,
                "numInName": 17,
                "url": "https://media.blooket.com/image/upload/v1664323226/BlookParts/clothing17.svg"
            }, {
                "id": 18,
                "numInName": 18,
                "url": "https://media.blooket.com/image/upload/v1664323227/BlookParts/clothing18.svg"
            }, {
                "id": 19,
                "numInName": 19,
                "url": "https://media.blooket.com/image/upload/v1664323227/BlookParts/clothing19.svg"
            }, {
                "id": 20,
                "numInName": 20,
                "url": "https://media.blooket.com/image/upload/v1664323227/BlookParts/clothing20.svg"
            }, {
                "id": 21,
                "numInName": 21,
                "url": "https://media.blooket.com/image/upload/v1664323229/BlookParts/clothing21.svg"
            }, {
                "id": 22,
                "numInName": 22,
                "url": "https://media.blooket.com/image/upload/v1664323228/BlookParts/clothing22.svg"
            }, {
                "id": 23,
                "numInName": 23,
                "url": "https://media.blooket.com/image/upload/v1664324850/BlookParts/clothing23.svg"
            }, {
                "id": 24,
                "numInName": 24,
                "url": "https://media.blooket.com/image/upload/v1664324850/BlookParts/clothing24.svg"
            }, {
                "id": 25,
                "numInName": 25,
                "url": "https://media.blooket.com/image/upload/v1664324851/BlookParts/clothing25.svg"
            }, {
                "id": 26,
                "numInName": 26,
                "url": "https://media.blooket.com/image/upload/v1664324851/BlookParts/clothing26.svg"
            }, {
                "id": 27,
                "numInName": 27,
                "url": "https://media.blooket.com/image/upload/v1664324845/BlookParts/clothing27.svg"
            }, {
                "id": 28,
                "numInName": 28,
                "url": "https://media.blooket.com/image/upload/v1664324845/BlookParts/clothing28.svg"
            }, {
                "id": 29,
                "numInName": 29,
                "url": "https://media.blooket.com/image/upload/v1664325719/BlookParts/clothing29.svg"
            }, {
                "id": 30,
                "numInName": 30,
                "url": "https://media.blooket.com/image/upload/v1664325719/BlookParts/clothing30.svg"
            }, {
                "id": 31,
                "numInName": 31,
                "url": "https://media.blooket.com/image/upload/v1664325719/BlookParts/clothing31.svg"
            }, {
                "id": 32,
                "numInName": 32,
                "url": "https://media.blooket.com/image/upload/v1664325719/BlookParts/clothing32.svg"
            }, {
                "id": 33,
                "numInName": 33,
                "url": "https://media.blooket.com/image/upload/v1664325719/BlookParts/clothing33.svg"
            }, {
                "id": 34,
                "numInName": 34,
                "url": "https://media.blooket.com/image/upload/v1664325720/BlookParts/clothing34.svg"
            }, {
                "id": 35,
                "numInName": 35,
                "url": "https://media.blooket.com/image/upload/v1664326438/BlookParts/clothing35.svg"
            }, {
                "id": 36,
                "numInName": 36,
                "url": "https://media.blooket.com/image/upload/v1664326438/BlookParts/clothing36.svg"
            }, {
                "id": 37,
                "numInName": 37,
                "url": "https://media.blooket.com/image/upload/v1664334110/BlookParts/clothing37.svg"
            }, {
                "id": 38,
                "numInName": 38,
                "url": "https://media.blooket.com/image/upload/v1664334110/BlookParts/clothing38.svg"
            }, {
                "id": 39,
                "numInName": 39,
                "url": "https://media.blooket.com/image/upload/v1664334110/BlookParts/clothing39.svg"
            }, {
                "id": 40,
                "numInName": 40,
                "url": "https://media.blooket.com/image/upload/v1664334110/BlookParts/clothing40.svg"
            }, {
                "id": 41,
                "numInName": 41,
                "url": "https://media.blooket.com/image/upload/v1664334112/BlookParts/clothing41.svg"
            }, {
                "id": 42,
                "numInName": 42,
                "url": "https://media.blooket.com/image/upload/v1664334112/BlookParts/clothing42.svg"
            }, {
                "id": 43,
                "numInName": 43,
                "url": "https://media.blooket.com/image/upload/v1664334112/BlookParts/clothing43.svg"
            }, {
                "id": 44,
                "numInName": 44,
                "url": "https://media.blooket.com/image/upload/v1666686735/BlookParts/clothing44.svg"
            }, {
                "id": 45,
                "numInName": 45,
                "url": "https://media.blooket.com/image/upload/v1666686735/BlookParts/clothing45.svg"
            }, {
                "id": 46,
                "numInName": 46,
                "url": "https://media.blooket.com/image/upload/v1666686735/BlookParts/clothing46.svg"
            }, {
                "id": 47,
                "numInName": 47,
                "url": "https://media.blooket.com/image/upload/v1669084280/BlookParts/clothing47.svg"
            }, {
                "id": 48,
                "numInName": 48,
                "url": "https://media.blooket.com/image/upload/v1670303596/BlookParts/clothing48.svg"
            }, {
                "id": 49,
                "numInName": 49,
                "url": "https://media.blooket.com/image/upload/v1670912133/BlookParts/clothing49.svg"
            }, {
                "id": 50,
                "numInName": 50,
                "url": "https://media.blooket.com/image/upload/v1671528728/BlookParts/clothing50.svg"
            }, {
                "id": 51,
                "numInName": 51,
                "url": "https://media.blooket.com/image/upload/v1671528728/BlookParts/clothing51.svg"
            }, {
                "id": 52,
                "numInName": 52,
                "url": "https://media.blooket.com/image/upload/v1679268052/BlookParts/clothing52.svg"
            }, {
                "id": 53,
                "numInName": 53,
                "url": "https://media.blooket.com/image/upload/v1695265659/BlookParts/clothing53.svg"
            }, {
                "id": 54,
                "numInName": 54,
                "url": "https://media.blooket.com/image/upload/v1695265660/BlookParts/clothing54.svg"
            }, {
                "id": 55,
                "numInName": 55,
                "url": "https://media.blooket.com/image/upload/v1695265625/BlookParts/clothing55.svg"
            }, {
                "id": 56,
                "numInName": 56,
                "url": "https://media.blooket.com/image/upload/v1695265625/BlookParts/clothing56.svg"
            }, {
                "id": 57,
                "numInName": 57,
                "url": "https://media.blooket.com/image/upload/v1695265626/BlookParts/clothing57.svg"
            }, {
                "id": 58,
                "numInName": 58,
                "url": "https://media.blooket.com/image/upload/v1695265626/BlookParts/clothing58.svg"
            }, {
                "id": 59,
                "numInName": 59,
                "url": "https://media.blooket.com/image/upload/v1695265626/BlookParts/clothing59.svg"
            }, {
                "id": 60,
                "numInName": 60,
                "url": "https://media.blooket.com/image/upload/v1695265626/BlookParts/clothing60.svg"
            }, {
                "id": 61,
                "numInName": 61,
                "url": "https://media.blooket.com/image/upload/v1695265627/BlookParts/clothing61.svg"
            }, {
                "id": 62,
                "numInName": 62,
                "url": "https://media.blooket.com/image/upload/v1695265627/BlookParts/clothing62.svg"
            }, {
                "id": 63,
                "numInName": 63,
                "url": "https://media.blooket.com/image/upload/v1695265627/BlookParts/clothing63.svg"
            }, {
                "id": 64,
                "numInName": 64,
                "url": "https://media.blooket.com/image/upload/v1695265627/BlookParts/clothing64.svg"
            }, {
                "id": 65,
                "numInName": 65,
                "url": "https://media.blooket.com/image/upload/v1695265628/BlookParts/clothing65.svg"
            }, {
                "id": 66,
                "numInName": 66,
                "url": "https://media.blooket.com/image/upload/v1695265628/BlookParts/clothing66.svg"
            }, {
                "id": 67,
                "numInName": 67,
                "url": "https://media.blooket.com/image/upload/v1695265629/BlookParts/clothing67.svg"
            }, {
                "id": 68,
                "numInName": 68,
                "url": "https://media.blooket.com/image/upload/v1695265629/BlookParts/clothing68.svg"
            }, {
                "id": 69,
                "numInName": 69,
                "url": "https://media.blooket.com/image/upload/v1695265630/BlookParts/clothing69.svg"
            }, {
                "id": 70,
                "numInName": 70,
                "url": "https://media.blooket.com/image/upload/v1695265630/BlookParts/clothing70.svg"
            }, {
                "id": 71,
                "numInName": 71,
                "url": "https://media.blooket.com/image/upload/v1695265630/BlookParts/clothing71.svg"
            }, {
                "id": 72,
                "numInName": 72,
                "url": "https://media.blooket.com/image/upload/v1695265631/BlookParts/clothing72.svg"
            }, {
                "id": 73,
                "numInName": 73,
                "url": "https://media.blooket.com/image/upload/v1695265631/BlookParts/clothing73.svg"
            }, {
                "id": 74,
                "numInName": 74,
                "url": "https://media.blooket.com/image/upload/v1695265631/BlookParts/clothing74.svg"
            }, {
                "id": 75,
                "numInName": 75,
                "url": "https://media.blooket.com/image/upload/v1695265632/BlookParts/clothing75.svg"
            }, {
                "id": 76,
                "numInName": 76,
                "url": "https://media.blooket.com/image/upload/v1695265632/BlookParts/clothing76.svg"
            }, {
                "id": 77,
                "numInName": 77,
                "url": "https://media.blooket.com/image/upload/v1695265632/BlookParts/clothing77.svg"
            }, {
                "id": 78,
                "numInName": 78,
                "url": "https://media.blooket.com/image/upload/v1695265633/BlookParts/clothing78.svg"
            }, {
                "id": 79,
                "numInName": 79,
                "url": "https://media.blooket.com/image/upload/v1695265633/BlookParts/clothing79.svg"
            }, {
                "id": 80,
                "numInName": 80,
                "url": "https://media.blooket.com/image/upload/v1695265633/BlookParts/clothing80.svg"
            }, {
                "id": 81,
                "numInName": 81,
                "url": "https://media.blooket.com/image/upload/v1695265634/BlookParts/clothing81.svg"
            }, {
                "id": 82,
                "numInName": 82,
                "url": "https://media.blooket.com/image/upload/v1696372287/BlookParts/clothing82.svg"
            }, {
                "id": 83,
                "numInName": 83,
                "url": "https://media.blooket.com/image/upload/v1696372288/BlookParts/clothing83.svg"
            }, {
                "id": 84,
                "numInName": 84,
                "url": "https://media.blooket.com/image/upload/v1696372288/BlookParts/clothing84.svg"
            }, {
                "id": 85,
                "numInName": 85,
                "url": "https://media.blooket.com/image/upload/v1701743199/BlookParts/clothing85.svg"
            }, {
                "id": 86,
                "numInName": 86,
                "url": "https://media.blooket.com/image/upload/v1701743199/BlookParts/clothing86.svg"
            }, {
                "id": 87,
                "numInName": 87,
                "url": "https://media.blooket.com/image/upload/v1701743199/BlookParts/clothing87.svg"
            }, {
                "id": 88,
                "numInName": 88,
                "url": "https://media.blooket.com/image/upload/v1726105760/BlookParts/clothing88.svg"
            }, {
                "id": 89,
                "numInName": 89,
                "url": "https://media.blooket.com/image/upload/v1726105760/BlookParts/clothing89.svg"
            }, {
                "id": 90,
                "numInName": 90,
                "url": "https://media.blooket.com/image/upload/v1726105760/BlookParts/clothing90.svg"
            }, {
                "id": 91,
                "numInName": 91,
                "url": "https://media.blooket.com/image/upload/v1726105760/BlookParts/clothing91.svg"
            }, {
                "id": 92,
                "numInName": 92,
                "url": "https://media.blooket.com/image/upload/v1726105760/BlookParts/clothing92.svg"
            }, {
                "id": 93,
                "numInName": 93,
                "url": "https://media.blooket.com/image/upload/v1726105760/BlookParts/clothing93.svg"
            }, {
                "id": 94,
                "numInName": 94,
                "url": "https://media.blooket.com/image/upload/v1726105762/BlookParts/clothing94.svg"
            }, {
                "id": 95,
                "numInName": 95,
                "url": "https://media.blooket.com/image/upload/v1726105763/BlookParts/clothing95.svg"
            }, {
                "id": 96,
                "numInName": 96,
                "url": "https://media.blooket.com/image/upload/v1726105764/BlookParts/clothing96.svg"
            }, {
                "id": 97,
                "numInName": 97,
                "url": "https://media.blooket.com/image/upload/v1726105765/BlookParts/clothing97.svg"
            }, {
                "id": 98,
                "numInName": 98,
                "url": "https://media.blooket.com/image/upload/v1726105765/BlookParts/clothing98.svg"
            }, {
                "id": 99,
                "numInName": 99,
                "url": "https://media.blooket.com/image/upload/v1726105765/BlookParts/clothing99.svg"
            }, {
                "id": 100,
                "numInName": 100,
                "url": "https://media.blooket.com/image/upload/v1726105767/BlookParts/clothing100.svg"
            }, {
                "id": 101,
                "numInName": 101,
                "url": "https://media.blooket.com/image/upload/v1726105767/BlookParts/clothing101.svg"
            }, {
                "id": 102,
                "numInName": 102,
                "url": "https://media.blooket.com/image/upload/v1726105768/BlookParts/clothing102.svg"
            }, {
                "id": 103,
                "numInName": 103,
                "url": "https://media.blooket.com/image/upload/v1726105768/BlookParts/clothing103.svg"
            }, {
                "id": 104,
                "numInName": 104,
                "url": "https://media.blooket.com/image/upload/v1726105769/BlookParts/clothing104.svg"
            }, {
                "id": 105,
                "numInName": 105,
                "url": "https://media.blooket.com/image/upload/v1726105769/BlookParts/clothing105.svg"
            }, {
                "id": 106,
                "numInName": 106,
                "url": "https://media.blooket.com/image/upload/v1726105770/BlookParts/clothing106.svg"
            }, {
                "id": 107,
                "numInName": 107,
                "url": "https://media.blooket.com/image/upload/v1726105771/BlookParts/clothing107.svg"
            }, {
                "id": 108,
                "numInName": 108,
                "url": "https://media.blooket.com/image/upload/v1726105773/BlookParts/clothing108.svg"
            }, {
                "id": 109,
                "numInName": 109,
                "url": "https://media.blooket.com/image/upload/v1726105773/BlookParts/clothing109.svg"
            }, {
                "id": 110,
                "numInName": 110,
                "url": "https://media.blooket.com/image/upload/v1728608104/BlookParts/clothing110.svg"
            }, {
                "id": 111,
                "numInName": 111,
                "url": "https://media.blooket.com/image/upload/v1733205076/BlookParts/clothing111.svg"
            }, {
                "id": 112,
                "numInName": 112,
                "url": "https://media.blooket.com/image/upload/v1733205245/BlookParts/clothing112.svg"
            }, {
                "id": 113,
                "numInName": 113,
                "url": "https://media.blooket.com/image/upload/v1758008838/BlookParts/clothing113.svg"
            }, {
                "id": 114,
                "numInName": 114,
                "url": "https://media.blooket.com/image/upload/v1758008838/BlookParts/clothing114.svg"
            }, {
                "id": 115,
                "numInName": 115,
                "url": "https://media.blooket.com/image/upload/v1758008839/BlookParts/clothing115.svg"
            }, {
                "id": 116,
                "numInName": 116,
                "url": "https://media.blooket.com/image/upload/v1758008839/BlookParts/clothing116.svg"
            }, {
                "id": 117,
                "numInName": 117,
                "url": "https://media.blooket.com/image/upload/v1758008839/BlookParts/clothing117.svg"
            }, {
                "id": 118,
                "numInName": 118,
                "url": "https://media.blooket.com/image/upload/v1758008839/BlookParts/clothing118.svg"
            }, {
                "id": 119,
                "numInName": 119,
                "url": "https://media.blooket.com/image/upload/v1758008840/BlookParts/clothing119.svg"
            }, {
                "id": 120,
                "numInName": 120,
                "url": "https://media.blooket.com/image/upload/v1758008840/BlookParts/clothing120.svg"
            }, {
                "id": 121,
                "numInName": 121,
                "url": "https://media.blooket.com/image/upload/v1758008841/BlookParts/clothing121.svg"
            }, {
                "id": 122,
                "numInName": 122,
                "url": "https://media.blooket.com/image/upload/v1758008841/BlookParts/clothing122.svg"
            }, {
                "id": 123,
                "numInName": 123,
                "url": "https://media.blooket.com/image/upload/v1758008842/BlookParts/clothing123.svg"
            }, {
                "id": 124,
                "numInName": 124,
                "url": "https://media.blooket.com/image/upload/v1758008843/BlookParts/clothing124.svg"
            }, {
                "id": 125,
                "numInName": 125,
                "url": "https://media.blooket.com/image/upload/v1758008843/BlookParts/clothing125.svg"
            }, {
                "id": 126,
                "numInName": 126,
                "url": "https://media.blooket.com/image/upload/v1758008844/BlookParts/clothing126.svg"
            }, {
                "id": 127,
                "numInName": 127,
                "url": "https://media.blooket.com/image/upload/v1758008845/BlookParts/clothing127.svg"
            }, {
                "id": 128,
                "numInName": 128,
                "url": "https://media.blooket.com/image/upload/v1758008846/BlookParts/clothing128.svg"
            }, {
                "id": 129,
                "numInName": 129,
                "url": "https://media.blooket.com/image/upload/v1758008846/BlookParts/clothing129.svg"
            }, {
                "id": 130,
                "numInName": 130,
                "url": "https://media.blooket.com/image/upload/v1758008846/BlookParts/clothing130.svg"
            }, {
                "id": 131,
                "numInName": 131,
                "url": "https://media.blooket.com/image/upload/v1758008849/BlookParts/clothing131.svg"
            }, {
                "id": 132,
                "numInName": 132,
                "url": "https://media.blooket.com/image/upload/v1758008850/BlookParts/clothing132.svg"
            }, {
                "id": 133,
                "numInName": 133,
                "url": "https://media.blooket.com/image/upload/v1758008851/BlookParts/clothing133.svg"
            }, {
                "id": 134,
                "numInName": 134,
                "url": "https://media.blooket.com/image/upload/v1758008851/BlookParts/clothing134.svg"
            }, {
                "id": 135,
                "numInName": 135,
                "url": "https://media.blooket.com/image/upload/v1758008852/BlookParts/clothing135.svg"
            }, {
                "id": 136,
                "numInName": 136,
                "url": "https://media.blooket.com/image/upload/v1758008852/BlookParts/clothing136.svg"
            }, {
                "id": 137,
                "numInName": 137,
                "url": "https://media.blooket.com/image/upload/v1758008853/BlookParts/clothing137.svg"
            }, {
                "id": 138,
                "numInName": 138,
                "url": "https://media.blooket.com/image/upload/v1758008854/BlookParts/clothing138.svg"
            }, {
                "id": 139,
                "numInName": 139,
                "url": "https://media.blooket.com/image/upload/v1758008855/BlookParts/clothing139.svg"
            }, {
                "id": 140,
                "numInName": 140,
                "url": "https://media.blooket.com/image/upload/v1758008856/BlookParts/clothing140.svg"
            }, {
                "id": 141,
                "numInName": 141,
                "url": "https://media.blooket.com/image/upload/v1758008857/BlookParts/clothing141.svg"
            }, {
                "id": 142,
                "numInName": 142,
                "url": "https://media.blooket.com/image/upload/v1758008857/BlookParts/clothing142.svg"
            }],
            "eyes": [{
                "id": 1,
                "numInName": 0,
                "url": "https://media.blooket.com/image/upload/v1634087707/BlookParts/eyes0.svg"
            }, {
                "id": 2,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087719/BlookParts/eyes1.svg"
            }, {
                "id": 3,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087721/BlookParts/eyes2.svg"
            }, {
                "id": 4,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087723/BlookParts/eyes3.svg"
            }, {
                "id": 5,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087740/BlookParts/eyes4.svg"
            }, {
                "id": 6,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1634087742/BlookParts/eyes5.svg"
            }, {
                "id": 7,
                "numInName": 6,
                "url": "https://media.blooket.com/image/upload/v1634087747/BlookParts/eyes6.svg"
            }, {
                "id": 8,
                "numInName": 7,
                "url": "https://media.blooket.com/image/upload/v1634087759/BlookParts/eyes7.svg"
            }, {
                "id": 9,
                "numInName": 8,
                "url": "https://media.blooket.com/image/upload/v1634087764/BlookParts/eyes8.svg"
            }, {
                "id": 10,
                "numInName": 9,
                "url": "https://media.blooket.com/image/upload/v1634087770/BlookParts/eyes9.svg"
            }, {
                "id": 11,
                "numInName": 10,
                "url": "https://media.blooket.com/image/upload/v1634087780/BlookParts/eyes10.svg"
            }, {
                "id": 12,
                "numInName": 11,
                "url": "https://media.blooket.com/image/upload/v1634087782/BlookParts/eyes11.svg"
            }, {
                "id": 13,
                "numInName": 12,
                "url": "https://media.blooket.com/image/upload/v1664326436/BlookParts/eyes12.svg"
            }, {
                "id": 14,
                "numInName": 13,
                "url": "https://media.blooket.com/image/upload/v1664334112/BlookParts/eyes13.svg"
            }, {
                "id": 15,
                "numInName": 14,
                "url": "https://media.blooket.com/image/upload/v1695265634/BlookParts/eyes14.svg"
            }, {
                "id": 16,
                "numInName": 15,
                "url": "https://media.blooket.com/image/upload/v1696372289/BlookParts/eyes15.svg"
            }, {
                "id": 17,
                "numInName": 16,
                "url": "https://media.blooket.com/image/upload/v1726105774/BlookParts/eyes16.svg"
            }, {
                "id": 18,
                "numInName": 17,
                "url": "https://media.blooket.com/image/upload/v1726105775/BlookParts/eyes17.svg"
            }, {
                "id": 19,
                "numInName": 18,
                "url": "https://media.blooket.com/image/upload/v1726105775/BlookParts/eyes18.svg"
            }, {
                "id": 20,
                "numInName": 19,
                "url": "https://media.blooket.com/image/upload/v1726105775/BlookParts/eyes19.svg"
            }, {
                "id": 21,
                "numInName": 20,
                "url": "https://media.blooket.com/image/upload/v1758008858/BlookParts/eyes20.svg"
            }, {
                "id": 22,
                "numInName": 21,
                "url": "https://media.blooket.com/image/upload/v1758008858/BlookParts/eyes21.svg"
            }],
            "glasses": [{
                "id": 1,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087784/BlookParts/glasses1.svg"
            }, {
                "id": 2,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087786/BlookParts/glasses2.svg"
            }, {
                "id": 3,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087791/BlookParts/glasses3.svg"
            }, {
                "id": 4,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087792/BlookParts/glasses4.svg"
            }, {
                "id": 5,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1634087804/BlookParts/glasses5.svg"
            }, {
                "id": 6,
                "numInName": 6,
                "url": "https://media.blooket.com/image/upload/v1634087805/BlookParts/glasses6.svg"
            }, {
                "id": 7,
                "numInName": 7,
                "url": "https://media.blooket.com/image/upload/v1634087806/BlookParts/glasses7.svg"
            }, {
                "id": 8,
                "numInName": 8,
                "url": "https://media.blooket.com/image/upload/v1634087809/BlookParts/glasses8.svg"
            }, {
                "id": 9,
                "numInName": 9,
                "url": "https://media.blooket.com/image/upload/v1664323228/BlookParts/glasses9.svg"
            }, {
                "id": 10,
                "numInName": 10,
                "url": "https://media.blooket.com/image/upload/v1664324845/BlookParts/glasses10.svg"
            }, {
                "id": 11,
                "numInName": 11,
                "url": "https://media.blooket.com/image/upload/v1664324845/BlookParts/glasses11.svg"
            }, {
                "id": 12,
                "numInName": 12,
                "url": "https://media.blooket.com/image/upload/v1664324845/BlookParts/glasses12.svg"
            }, {
                "id": 13,
                "numInName": 13,
                "url": "https://media.blooket.com/image/upload/v1664324845/BlookParts/glasses13.svg"
            }, {
                "id": 14,
                "numInName": 14,
                "url": "https://media.blooket.com/image/upload/v1664324847/BlookParts/glasses14.svg"
            }, {
                "id": 15,
                "numInName": 15,
                "url": "https://media.blooket.com/image/upload/v1664334114/BlookParts/glasses15.svg"
            }, {
                "id": 16,
                "numInName": 16,
                "url": "https://media.blooket.com/image/upload/v1664334114/BlookParts/glasses16.svg"
            }, {
                "id": 17,
                "numInName": 17,
                "url": "https://media.blooket.com/image/upload/v1695265634/BlookParts/glasses17.svg"
            }, {
                "id": 18,
                "numInName": 18,
                "url": "https://media.blooket.com/image/upload/v1695265635/BlookParts/glasses18.svg"
            }, {
                "id": 19,
                "numInName": 19,
                "url": "https://media.blooket.com/image/upload/v1695265635/BlookParts/glasses19.svg"
            }, {
                "id": 20,
                "numInName": 20,
                "url": "https://media.blooket.com/image/upload/v1695265635/BlookParts/glasses20.svg"
            }, {
                "id": 21,
                "numInName": 21,
                "url": "https://media.blooket.com/image/upload/v1695265636/BlookParts/glasses21.svg"
            }, {
                "id": 22,
                "numInName": 22,
                "url": "https://media.blooket.com/image/upload/v1695265636/BlookParts/glasses22.svg"
            }, {
                "id": 23,
                "numInName": 23,
                "url": "https://media.blooket.com/image/upload/v1695265636/BlookParts/glasses23.svg"
            }, {
                "id": 24,
                "numInName": 24,
                "url": "https://media.blooket.com/image/upload/v1695265637/BlookParts/glasses24.svg"
            }, {
                "id": 25,
                "numInName": 25,
                "url": "https://media.blooket.com/image/upload/v1726105775/BlookParts/glasses25.svg"
            }, {
                "id": 26,
                "numInName": 26,
                "url": "https://media.blooket.com/image/upload/v1726105776/BlookParts/glasses26.svg"
            }, {
                "id": 27,
                "numInName": 27,
                "url": "https://media.blooket.com/image/upload/v1726105777/BlookParts/glasses27.svg"
            }, {
                "id": 28,
                "numInName": 28,
                "url": "https://media.blooket.com/image/upload/v1726105777/BlookParts/glasses28.svg"
            }, {
                "id": 29,
                "numInName": 29,
                "url": "https://media.blooket.com/image/upload/v1726105777/BlookParts/glasses29.svg"
            }, {
                "id": 30,
                "numInName": 30,
                "url": "https://media.blooket.com/image/upload/v1726105778/BlookParts/glasses30.svg"
            }, {
                "id": 31,
                "numInName": 31,
                "url": "https://media.blooket.com/image/upload/v1726105778/BlookParts/glasses31.svg"
            }, {
                "id": 32,
                "numInName": 32,
                "url": "https://media.blooket.com/image/upload/v1726105778/BlookParts/glasses32.svg"
            }, {
                "id": 33,
                "numInName": 33,
                "url": "https://media.blooket.com/image/upload/v1726105779/BlookParts/glasses33.svg"
            }, {
                "id": 34,
                "numInName": 34,
                "url": "https://media.blooket.com/image/upload/v1758008863/BlookParts/glasses34.svg"
            }, {
                "id": 35,
                "numInName": 35,
                "url": "https://media.blooket.com/image/upload/v1758008863/BlookParts/glasses35.svg"
            }, {
                "id": 36,
                "numInName": 36,
                "url": "https://media.blooket.com/image/upload/v1758008863/BlookParts/glasses36.svg"
            }, {
                "id": 37,
                "numInName": 37,
                "url": "https://media.blooket.com/image/upload/v1758008864/BlookParts/glasses37.svg"
            }, {
                "id": 38,
                "numInName": 38,
                "url": "https://media.blooket.com/image/upload/v1758008864/BlookParts/glasses38.svg"
            }, {
                "id": 39,
                "numInName": 39,
                "url": "https://media.blooket.com/image/upload/v1758008864/BlookParts/glasses39.svg"
            }, {
                "id": 40,
                "numInName": 40,
                "url": "https://media.blooket.com/image/upload/v1758008864/BlookParts/glasses40.svg"
            }, {
                "id": 41,
                "numInName": 41,
                "url": "https://media.blooket.com/image/upload/v1758008865/BlookParts/glasses41.svg"
            }],
            "hair": [{
                "id": 1,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087810/BlookParts/hair1.svg"
            }, {
                "id": 2,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087827/BlookParts/hair2.svg"
            }, {
                "id": 3,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087829/BlookParts/hair3.svg"
            }, {
                "id": 4,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087830/BlookParts/hair4.svg"
            }, {
                "id": 5,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1634087835/BlookParts/hair5.svg"
            }, {
                "id": 6,
                "numInName": 6,
                "url": "https://media.blooket.com/image/upload/v1634087836/BlookParts/hair6.svg"
            }, {
                "id": 7,
                "numInName": 7,
                "url": "https://media.blooket.com/image/upload/v1634087837/BlookParts/hair7.svg"
            }, {
                "id": 8,
                "numInName": 8,
                "url": "https://media.blooket.com/image/upload/v1634087847/BlookParts/hair8.svg"
            }, {
                "id": 9,
                "numInName": 9,
                "url": "https://media.blooket.com/image/upload/v1634087849/BlookParts/hair9.svg"
            }, {
                "id": 10,
                "numInName": 10,
                "url": "https://media.blooket.com/image/upload/v1634087851/BlookParts/hair10.svg"
            }, {
                "id": 11,
                "numInName": 11,
                "url": "https://media.blooket.com/image/upload/v1634087852/BlookParts/hair11.svg"
            }, {
                "id": 12,
                "numInName": 12,
                "url": "https://media.blooket.com/image/upload/v1634087855/BlookParts/hair12.svg"
            }, {
                "id": 13,
                "numInName": 13,
                "url": "https://media.blooket.com/image/upload/v1664326436/BlookParts/hair13.svg"
            }, {
                "id": 14,
                "numInName": 14,
                "url": "https://media.blooket.com/image/upload/v1664326436/BlookParts/hair14.svg"
            }, {
                "id": 15,
                "numInName": 15,
                "url": "https://media.blooket.com/image/upload/v1664334307/BlookParts/hair15.svg"
            }, {
                "id": 16,
                "numInName": 16,
                "url": "https://media.blooket.com/image/upload/v1664334307/BlookParts/hair16.svg"
            }, {
                "id": 17,
                "numInName": 17,
                "url": "https://media.blooket.com/image/upload/v1664334307/BlookParts/hair17.svg"
            }, {
                "id": 18,
                "numInName": 18,
                "url": "https://media.blooket.com/image/upload/v1678767661/BlookParts/hair18.svg"
            }, {
                "id": 19,
                "numInName": 19,
                "url": "https://media.blooket.com/image/upload/v1695265637/BlookParts/hair19.svg"
            }, {
                "id": 20,
                "numInName": 20,
                "url": "https://media.blooket.com/image/upload/v1695265638/BlookParts/hair20.svg"
            }, {
                "id": 21,
                "numInName": 21,
                "url": "https://media.blooket.com/image/upload/v1695265637/BlookParts/hair21.svg"
            }, {
                "id": 22,
                "numInName": 22,
                "url": "https://media.blooket.com/image/upload/v1695265638/BlookParts/hair22.svg"
            }, {
                "id": 23,
                "numInName": 23,
                "url": "https://media.blooket.com/image/upload/v1695265639/BlookParts/hair23.svg"
            }, {
                "id": 24,
                "numInName": 24,
                "url": "https://media.blooket.com/image/upload/v1695265639/BlookParts/hair24.svg"
            }, {
                "id": 25,
                "numInName": 25,
                "url": "https://media.blooket.com/image/upload/v1695265639/BlookParts/hair25.svg"
            }, {
                "id": 26,
                "numInName": 26,
                "url": "https://media.blooket.com/image/upload/v1695265640/BlookParts/hair26.svg"
            }, {
                "id": 27,
                "numInName": 27,
                "url": "https://media.blooket.com/image/upload/v1696372290/BlookParts/hair27.svg"
            }, {
                "id": 28,
                "numInName": 28,
                "url": "https://media.blooket.com/image/upload/v1726105780/BlookParts/hair28.svg"
            }, {
                "id": 29,
                "numInName": 29,
                "url": "https://media.blooket.com/image/upload/v1726105781/BlookParts/hair29.svg"
            }, {
                "id": 30,
                "numInName": 30,
                "url": "https://media.blooket.com/image/upload/v1726105782/BlookParts/hair30.svg"
            }, {
                "id": 31,
                "numInName": 31,
                "url": "https://media.blooket.com/image/upload/v1726105782/BlookParts/hair31.svg"
            }, {
                "id": 32,
                "numInName": 32,
                "url": "https://media.blooket.com/image/upload/v1726105782/BlookParts/hair32.svg"
            }, {
                "id": 33,
                "numInName": 33,
                "url": "https://media.blooket.com/image/upload/v1726105782/BlookParts/hair33.svg"
            }, {
                "id": 34,
                "numInName": 34,
                "url": "https://media.blooket.com/image/upload/v1726105783/BlookParts/hair34.svg"
            }, {
                "id": 35,
                "numInName": 35,
                "url": "https://media.blooket.com/image/upload/v1758008866/BlookParts/hair35.svg"
            }, {
                "id": 36,
                "numInName": 36,
                "url": "https://media.blooket.com/image/upload/v1758008869/BlookParts/hair36.svg"
            }, {
                "id": 37,
                "numInName": 37,
                "url": "https://media.blooket.com/image/upload/v1758008870/BlookParts/hair37.svg"
            }],
            "hat": [{
                "id": 1,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087855/BlookParts/hat1.svg"
            }, {
                "id": 2,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087861/BlookParts/hat2.svg"
            }, {
                "id": 3,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087869/BlookParts/hat3.svg"
            }, {
                "id": 4,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087870/BlookParts/hat4.svg"
            }, {
                "id": 5,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1634087877/BlookParts/hat5.svg"
            }, {
                "id": 6,
                "numInName": 6,
                "url": "https://media.blooket.com/image/upload/v1634087878/BlookParts/hat6.svg"
            }, {
                "id": 7,
                "numInName": 7,
                "url": "https://media.blooket.com/image/upload/v1634087880/BlookParts/hat7.svg"
            }, {
                "id": 8,
                "numInName": 8,
                "url": "https://media.blooket.com/image/upload/v1634087887/BlookParts/hat8.svg"
            }, {
                "id": 9,
                "numInName": 9,
                "url": "https://media.blooket.com/image/upload/v1634087891/BlookParts/hat9.svg"
            }, {
                "id": 10,
                "numInName": 10,
                "url": "https://media.blooket.com/image/upload/v1634087891/BlookParts/hat10.svg"
            }, {
                "id": 11,
                "numInName": 11,
                "url": "https://media.blooket.com/image/upload/v1634087899/BlookParts/hat11.svg"
            }, {
                "id": 12,
                "numInName": 12,
                "url": "https://media.blooket.com/image/upload/v1634087901/BlookParts/hat12.svg"
            }, {
                "id": 13,
                "numInName": 13,
                "url": "https://media.blooket.com/image/upload/v1634087902/BlookParts/hat13.svg"
            }, {
                "id": 14,
                "numInName": 14,
                "url": "https://media.blooket.com/image/upload/v1664323229/BlookParts/hat14.svg"
            }, {
                "id": 15,
                "numInName": 15,
                "url": "https://media.blooket.com/image/upload/v1664323229/BlookParts/hat15.svg"
            }, {
                "id": 16,
                "numInName": 16,
                "url": "https://media.blooket.com/image/upload/v1664323229/BlookParts/hat16.svg"
            }, {
                "id": 17,
                "numInName": 17,
                "url": "https://media.blooket.com/image/upload/v1664323230/BlookParts/hat17.svg"
            }, {
                "id": 18,
                "numInName": 18,
                "url": "https://media.blooket.com/image/upload/v1664323230/BlookParts/hat18.svg"
            }, {
                "id": 19,
                "numInName": 19,
                "url": "https://media.blooket.com/image/upload/v1664323230/BlookParts/hat19.svg"
            }, {
                "id": 20,
                "numInName": 20,
                "url": "https://media.blooket.com/image/upload/v1664324847/BlookParts/hat20.svg"
            }, {
                "id": 21,
                "numInName": 21,
                "url": "https://media.blooket.com/image/upload/v1664324847/BlookParts/hat21.svg"
            }, {
                "id": 22,
                "numInName": 22,
                "url": "https://media.blooket.com/image/upload/v1664324847/BlookParts/hat22.svg"
            }, {
                "id": 23,
                "numInName": 23,
                "url": "https://media.blooket.com/image/upload/v1664324847/BlookParts/hat23.svg"
            }, {
                "id": 24,
                "numInName": 24,
                "url": "https://media.blooket.com/image/upload/v1664324848/BlookParts/hat24.svg"
            }, {
                "id": 25,
                "numInName": 25,
                "url": "https://media.blooket.com/image/upload/v1664324849/BlookParts/hat25.svg"
            }, {
                "id": 26,
                "numInName": 26,
                "url": "https://media.blooket.com/image/upload/v1664325721/BlookParts/hat26.svg"
            }, {
                "id": 27,
                "numInName": 27,
                "url": "https://media.blooket.com/image/upload/v1664325715/BlookParts/hat27.svg"
            }, {
                "id": 28,
                "numInName": 28,
                "url": "https://media.blooket.com/image/upload/v1664325715/BlookParts/hat28.svg"
            }, {
                "id": 29,
                "numInName": 29,
                "url": "https://media.blooket.com/image/upload/v1664325715/BlookParts/hat29.svg"
            }, {
                "id": 30,
                "numInName": 30,
                "url": "https://media.blooket.com/image/upload/v1664325715/BlookParts/hat30.svg"
            }, {
                "id": 31,
                "numInName": 31,
                "url": "https://media.blooket.com/image/upload/v1664334114/BlookParts/hat31.svg"
            }, {
                "id": 32,
                "numInName": 32,
                "url": "https://media.blooket.com/image/upload/v1664334335/BlookParts/hat32.svg"
            }, {
                "id": 33,
                "numInName": 33,
                "url": "https://media.blooket.com/image/upload/v1664334335/BlookParts/hat33.svg"
            }, {
                "id": 34,
                "numInName": 34,
                "url": "https://media.blooket.com/image/upload/v1664334335/BlookParts/hat34.svg"
            }, {
                "id": 35,
                "numInName": 35,
                "url": "https://media.blooket.com/image/upload/v1664334335/BlookParts/hat35.svg"
            }, {
                "id": 36,
                "numInName": 36,
                "url": "https://media.blooket.com/image/upload/v1664334335/BlookParts/hat36.svg"
            }, {
                "id": 37,
                "numInName": 37,
                "url": "https://media.blooket.com/image/upload/v1666686633/BlookParts/hat37.svg"
            }, {
                "id": 38,
                "numInName": 38,
                "url": "https://media.blooket.com/image/upload/v1666686633/BlookParts/hat38.svg"
            }, {
                "id": 39,
                "numInName": 39,
                "url": "https://media.blooket.com/image/upload/v1666686633/BlookParts/hat39.svg"
            }, {
                "id": 40,
                "numInName": 40,
                "url": "https://media.blooket.com/image/upload/v1666686633/BlookParts/hat40.svg"
            }, {
                "id": 41,
                "numInName": 41,
                "url": "https://media.blooket.com/image/upload/v1669108036/BlookParts/hat41.svg"
            }, {
                "id": 42,
                "numInName": 42,
                "url": "https://media.blooket.com/image/upload/v1669108036/BlookParts/hat42.svg"
            }, {
                "id": 43,
                "numInName": 43,
                "url": "https://media.blooket.com/image/upload/v1670303596/BlookParts/hat43.svg"
            }, {
                "id": 44,
                "numInName": 44,
                "url": "https://media.blooket.com/image/upload/v1670912133/BlookParts/hat44.svg"
            }, {
                "id": 45,
                "numInName": 45,
                "url": "https://media.blooket.com/image/upload/v1671528728/BlookParts/hat45.svg"
            }, {
                "id": 46,
                "numInName": 46,
                "url": "https://media.blooket.com/image/upload/v1671528728/BlookParts/hat46.svg"
            }, {
                "id": 47,
                "numInName": 47,
                "url": "https://media.blooket.com/image/upload/v1678767661/BlookParts/hat47.svg"
            }, {
                "id": 48,
                "numInName": 48,
                "url": "https://media.blooket.com/image/upload/v1695265640/BlookParts/hat48.svg"
            }, {
                "id": 49,
                "numInName": 49,
                "url": "https://media.blooket.com/image/upload/v1695265640/BlookParts/hat49.svg"
            }, {
                "id": 50,
                "numInName": 50,
                "url": "https://media.blooket.com/image/upload/v1695265641/BlookParts/hat50.svg"
            }, {
                "id": 51,
                "numInName": 51,
                "url": "https://media.blooket.com/image/upload/v1695265641/BlookParts/hat51.svg"
            }, {
                "id": 52,
                "numInName": 52,
                "url": "https://media.blooket.com/image/upload/v1695265641/BlookParts/hat52.svg"
            }, {
                "id": 53,
                "numInName": 53,
                "url": "https://media.blooket.com/image/upload/v1695265642/BlookParts/hat53.svg"
            }, {
                "id": 54,
                "numInName": 54,
                "url": "https://media.blooket.com/image/upload/v1695265642/BlookParts/hat54.svg"
            }, {
                "id": 55,
                "numInName": 55,
                "url": "https://media.blooket.com/image/upload/v1695265642/BlookParts/hat55.svg"
            }, {
                "id": 56,
                "numInName": 56,
                "url": "https://media.blooket.com/image/upload/v1695265643/BlookParts/hat56.svg"
            }, {
                "id": 57,
                "numInName": 57,
                "url": "https://media.blooket.com/image/upload/v1695265643/BlookParts/hat57.svg"
            }, {
                "id": 58,
                "numInName": 58,
                "url": "https://media.blooket.com/image/upload/v1695265644/BlookParts/hat58.svg"
            }, {
                "id": 59,
                "numInName": 59,
                "url": "https://media.blooket.com/image/upload/v1695265644/BlookParts/hat59.svg"
            }, {
                "id": 60,
                "numInName": 60,
                "url": "https://media.blooket.com/image/upload/v1695265644/BlookParts/hat60.svg"
            }, {
                "id": 61,
                "numInName": 61,
                "url": "https://media.blooket.com/image/upload/v1695265645/BlookParts/hat61.svg"
            }, {
                "id": 62,
                "numInName": 62,
                "url": "https://media.blooket.com/image/upload/v1695265645/BlookParts/hat62.svg"
            }, {
                "id": 63,
                "numInName": 63,
                "url": "https://media.blooket.com/image/upload/v1695265646/BlookParts/hat63.svg"
            }, {
                "id": 64,
                "numInName": 64,
                "url": "https://media.blooket.com/image/upload/v1695265645/BlookParts/hat64.svg"
            }, {
                "id": 65,
                "numInName": 65,
                "url": "https://media.blooket.com/image/upload/v1695265646/BlookParts/hat65.svg"
            }, {
                "id": 66,
                "numInName": 66,
                "url": "https://media.blooket.com/image/upload/v1695265646/BlookParts/hat66.svg"
            }, {
                "id": 67,
                "numInName": 67,
                "url": "https://media.blooket.com/image/upload/v1695265647/BlookParts/hat67.svg"
            }, {
                "id": 68,
                "numInName": 68,
                "url": "https://media.blooket.com/image/upload/v1695265647/BlookParts/hat68.svg"
            }, {
                "id": 69,
                "numInName": 69,
                "url": "https://media.blooket.com/image/upload/v1695265647/BlookParts/hat69.svg"
            }, {
                "id": 70,
                "numInName": 70,
                "url": "https://media.blooket.com/image/upload/v1695265648/BlookParts/hat70.svg"
            }, {
                "id": 71,
                "numInName": 71,
                "url": "https://media.blooket.com/image/upload/v1695265648/BlookParts/hat71.svg"
            }, {
                "id": 72,
                "numInName": 72,
                "url": "https://media.blooket.com/image/upload/v1695265648/BlookParts/hat72.svg"
            }, {
                "id": 73,
                "numInName": 73,
                "url": "https://media.blooket.com/image/upload/v1695265649/BlookParts/hat73.svg"
            }, {
                "id": 74,
                "numInName": 74,
                "url": "https://media.blooket.com/image/upload/v1695265649/BlookParts/hat74.svg"
            }, {
                "id": 75,
                "numInName": 75,
                "url": "https://media.blooket.com/image/upload/v1695266827/BlookParts/hat75.svg"
            }, {
                "id": 76,
                "numInName": 76,
                "url": "https://media.blooket.com/image/upload/v1695266827/BlookParts/hat76.svg"
            }, {
                "id": 77,
                "numInName": 77,
                "url": "https://media.blooket.com/image/upload/v1695266827/BlookParts/hat77.svg"
            }, {
                "id": 78,
                "numInName": 78,
                "url": "https://media.blooket.com/image/upload/v1696372290/BlookParts/hat78.svg"
            }, {
                "id": 79,
                "numInName": 79,
                "url": "https://media.blooket.com/image/upload/v1696372286/BlookParts/hat79.svg"
            }, {
                "id": 80,
                "numInName": 80,
                "url": "https://media.blooket.com/image/upload/v1701743199/BlookParts/hat80.svg"
            }, {
                "id": 81,
                "numInName": 81,
                "url": "https://media.blooket.com/image/upload/v1701743200/BlookParts/hat81.svg"
            }, {
                "id": 82,
                "numInName": 82,
                "url": "https://media.blooket.com/image/upload/v1701743201/BlookParts/hat82.svg"
            }, {
                "id": 83,
                "numInName": 83,
                "url": "https://media.blooket.com/image/upload/v1726105784/BlookParts/hat83.svg"
            }, {
                "id": 84,
                "numInName": 84,
                "url": "https://media.blooket.com/image/upload/v1726105784/BlookParts/hat84.svg"
            }, {
                "id": 85,
                "numInName": 85,
                "url": "https://media.blooket.com/image/upload/v1726105784/BlookParts/hat85.svg"
            }, {
                "id": 86,
                "numInName": 86,
                "url": "https://media.blooket.com/image/upload/v1726105784/BlookParts/hat86.svg"
            }, {
                "id": 87,
                "numInName": 87,
                "url": "https://media.blooket.com/image/upload/v1726105784/BlookParts/hat87.svg"
            }, {
                "id": 88,
                "numInName": 88,
                "url": "https://media.blooket.com/image/upload/v1726105785/BlookParts/hat88.svg"
            }, {
                "id": 89,
                "numInName": 89,
                "url": "https://media.blooket.com/image/upload/v1726105786/BlookParts/hat89.svg"
            }, {
                "id": 90,
                "numInName": 90,
                "url": "https://media.blooket.com/image/upload/v1726105787/BlookParts/hat90.svg"
            }, {
                "id": 91,
                "numInName": 91,
                "url": "https://media.blooket.com/image/upload/v1726105790/BlookParts/hat91.svg"
            }, {
                "id": 92,
                "numInName": 92,
                "url": "https://media.blooket.com/image/upload/v1726105788/BlookParts/hat92.svg"
            }, {
                "id": 93,
                "numInName": 93,
                "url": "https://media.blooket.com/image/upload/v1726105791/BlookParts/hat93.svg"
            }, {
                "id": 94,
                "numInName": 94,
                "url": "https://media.blooket.com/image/upload/v1726105790/BlookParts/hat94.svg"
            }, {
                "id": 95,
                "numInName": 95,
                "url": "https://media.blooket.com/image/upload/v1726105789/BlookParts/hat95.svg"
            }, {
                "id": 96,
                "numInName": 96,
                "url": "https://media.blooket.com/image/upload/v1726105793/BlookParts/hat96.svg"
            }, {
                "id": 97,
                "numInName": 97,
                "url": "https://media.blooket.com/image/upload/v1726105793/BlookParts/hat97.svg"
            }, {
                "id": 98,
                "numInName": 98,
                "url": "https://media.blooket.com/image/upload/v1726105793/BlookParts/hat98.svg"
            }, {
                "id": 99,
                "numInName": 99,
                "url": "https://media.blooket.com/image/upload/v1726105794/BlookParts/hat99.svg"
            }, {
                "id": 100,
                "numInName": 100,
                "url": "https://media.blooket.com/image/upload/v1726105795/BlookParts/hat100.svg"
            }, {
                "id": 101,
                "numInName": 101,
                "url": "https://media.blooket.com/image/upload/v1726105796/BlookParts/hat101.svg"
            }, {
                "id": 102,
                "numInName": 102,
                "url": "https://media.blooket.com/image/upload/v1726105797/BlookParts/hat102.svg"
            }, {
                "id": 103,
                "numInName": 103,
                "url": "https://media.blooket.com/image/upload/v1726105797/BlookParts/hat103.svg"
            }, {
                "id": 104,
                "numInName": 104,
                "url": "https://media.blooket.com/image/upload/v1726105798/BlookParts/hat104.svg"
            }, {
                "id": 105,
                "numInName": 105,
                "url": "https://media.blooket.com/image/upload/v1726105798/BlookParts/hat105.svg"
            }, {
                "id": 106,
                "numInName": 106,
                "url": "https://media.blooket.com/image/upload/v1726105800/BlookParts/hat106.svg"
            }, {
                "id": 107,
                "numInName": 107,
                "url": "https://media.blooket.com/image/upload/v1726105800/BlookParts/hat107.svg"
            }, {
                "id": 108,
                "numInName": 108,
                "url": "https://media.blooket.com/image/upload/v1726105801/BlookParts/hat108.svg"
            }, {
                "id": 109,
                "numInName": 109,
                "url": "https://media.blooket.com/image/upload/v1726105803/BlookParts/hat109.svg"
            }, {
                "id": 110,
                "numInName": 110,
                "url": "https://media.blooket.com/image/upload/v1726105804/BlookParts/hat110.svg"
            }, {
                "id": 111,
                "numInName": 111,
                "url": "https://media.blooket.com/image/upload/v1726105805/BlookParts/hat111.svg"
            }, {
                "id": 112,
                "numInName": 112,
                "url": "https://media.blooket.com/image/upload/v1726105806/BlookParts/hat112.svg"
            }, {
                "id": 113,
                "numInName": 113,
                "url": "https://media.blooket.com/image/upload/v1726105807/BlookParts/hat113.svg"
            }, {
                "id": 114,
                "numInName": 114,
                "url": "https://media.blooket.com/image/upload/v1726105806/BlookParts/hat114.svg"
            }, {
                "id": 115,
                "numInName": 115,
                "url": "https://media.blooket.com/image/upload/v1726105808/BlookParts/hat115.svg"
            }, {
                "id": 116,
                "numInName": 116,
                "url": "https://media.blooket.com/image/upload/v1726105809/BlookParts/hat116.svg"
            }, {
                "id": 117,
                "numInName": 117,
                "url": "https://media.blooket.com/image/upload/v1726105809/BlookParts/hat117.svg"
            }, {
                "id": 118,
                "numInName": 118,
                "url": "https://media.blooket.com/image/upload/v1726105812/BlookParts/hat118.svg"
            }, {
                "id": 119,
                "numInName": 119,
                "url": "https://media.blooket.com/image/upload/v1728608104/BlookParts/hat119.svg"
            }, {
                "id": 120,
                "numInName": 120,
                "url": "https://media.blooket.com/image/upload/v1733205076/BlookParts/hat120.svg"
            }, {
                "id": 121,
                "numInName": 121,
                "url": "https://media.blooket.com/image/upload/v1733205328/BlookParts/hat121.svg"
            }, {
                "id": 122,
                "numInName": 122,
                "url": "https://media.blooket.com/image/upload/v1758008870/BlookParts/hat122.svg"
            }, {
                "id": 123,
                "numInName": 123,
                "url": "https://media.blooket.com/image/upload/v1758008871/BlookParts/hat123.svg"
            }, {
                "id": 124,
                "numInName": 124,
                "url": "https://media.blooket.com/image/upload/v1758008871/BlookParts/hat124.svg"
            }, {
                "id": 125,
                "numInName": 125,
                "url": "https://media.blooket.com/image/upload/v1758008871/BlookParts/hat125.svg"
            }, {
                "id": 126,
                "numInName": 126,
                "url": "https://media.blooket.com/image/upload/v1758008872/BlookParts/hat126.svg"
            }, {
                "id": 127,
                "numInName": 127,
                "url": "https://media.blooket.com/image/upload/v1758008873/BlookParts/hat127.svg"
            }, {
                "id": 128,
                "numInName": 128,
                "url": "https://media.blooket.com/image/upload/v1758008874/BlookParts/hat128.svg"
            }, {
                "id": 129,
                "numInName": 129,
                "url": "https://media.blooket.com/image/upload/v1758008874/BlookParts/hat129.svg"
            }, {
                "id": 130,
                "numInName": 130,
                "url": "https://media.blooket.com/image/upload/v1758008875/BlookParts/hat130.svg"
            }, {
                "id": 131,
                "numInName": 131,
                "url": "https://media.blooket.com/image/upload/v1758008878/BlookParts/hat131.svg"
            }, {
                "id": 132,
                "numInName": 132,
                "url": "https://media.blooket.com/image/upload/v1758008878/BlookParts/hat132.svg"
            }, {
                "id": 133,
                "numInName": 133,
                "url": "https://media.blooket.com/image/upload/v1758008879/BlookParts/hat133.svg"
            }, {
                "id": 134,
                "numInName": 134,
                "url": "https://media.blooket.com/image/upload/v1758008879/BlookParts/hat134.svg"
            }, {
                "id": 135,
                "numInName": 135,
                "url": "https://media.blooket.com/image/upload/v1758008880/BlookParts/hat135.svg"
            }, {
                "id": 136,
                "numInName": 136,
                "url": "https://media.blooket.com/image/upload/v1758008881/BlookParts/hat136.svg"
            }, {
                "id": 137,
                "numInName": 137,
                "url": "https://media.blooket.com/image/upload/v1758008883/BlookParts/hat137.svg"
            }, {
                "id": 138,
                "numInName": 138,
                "url": "https://media.blooket.com/image/upload/v1758008883/BlookParts/hat138.svg"
            }, {
                "id": 139,
                "numInName": 139,
                "url": "https://media.blooket.com/image/upload/v1758008883/BlookParts/hat139.svg"
            }, {
                "id": 140,
                "numInName": 140,
                "url": "https://media.blooket.com/image/upload/v1758008884/BlookParts/hat140.svg"
            }, {
                "id": 141,
                "numInName": 141,
                "url": "https://media.blooket.com/image/upload/v1758008885/BlookParts/hat141.svg"
            }, {
                "id": 142,
                "numInName": 142,
                "url": "https://media.blooket.com/image/upload/v1758008885/BlookParts/hat142.svg"
            }, {
                "id": 143,
                "numInName": 143,
                "url": "https://media.blooket.com/image/upload/v1758008885/BlookParts/hat143.svg"
            }, {
                "id": 144,
                "numInName": 144,
                "url": "https://media.blooket.com/image/upload/v1758008886/BlookParts/hat144.svg"
            }, {
                "id": 145,
                "numInName": 145,
                "url": "https://media.blooket.com/image/upload/v1758008888/BlookParts/hat145.svg"
            }, {
                "id": 146,
                "numInName": 146,
                "url": "https://media.blooket.com/image/upload/v1758008889/BlookParts/hat146.svg"
            }, {
                "id": 147,
                "numInName": 147,
                "url": "https://media.blooket.com/image/upload/v1758008890/BlookParts/hat147.svg"
            }, {
                "id": 148,
                "numInName": 148,
                "url": "https://media.blooket.com/image/upload/v1758008891/BlookParts/hat148.svg"
            }, {
                "id": 149,
                "numInName": 149,
                "url": "https://media.blooket.com/image/upload/v1758008892/BlookParts/hat149.svg"
            }, {
                "id": 150,
                "numInName": 150,
                "url": "https://media.blooket.com/image/upload/v1758008893/BlookParts/hat150.svg"
            }, {
                "id": 151,
                "numInName": 151,
                "url": "https://media.blooket.com/image/upload/v1758008894/BlookParts/hat151.svg"
            }, {
                "id": 152,
                "numInName": 152,
                "url": "https://media.blooket.com/image/upload/v1758008894/BlookParts/hat152.svg"
            }, {
                "id": 153,
                "numInName": 153,
                "url": "https://media.blooket.com/image/upload/v1758008896/BlookParts/hat153.svg"
            }, {
                "id": 154,
                "numInName": 154,
                "url": "https://media.blooket.com/image/upload/v1758008896/BlookParts/hat154.svg"
            }, {
                "id": 155,
                "numInName": 155,
                "url": "https://media.blooket.com/image/upload/v1758008899/BlookParts/hat155.svg"
            }],
            "item": [{
                "id": 1,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087902/BlookParts/item1.svg"
            }, {
                "id": 2,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087903/BlookParts/item2.svg"
            }, {
                "id": 3,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087903/BlookParts/item3.svg"
            }, {
                "id": 4,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087915/BlookParts/item4.svg"
            }, {
                "id": 5,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1634087920/BlookParts/item5.svg"
            }, {
                "id": 6,
                "numInName": 6,
                "url": "https://media.blooket.com/image/upload/v1634087921/BlookParts/item6.svg"
            }, {
                "id": 7,
                "numInName": 7,
                "url": "https://media.blooket.com/image/upload/v1634087922/BlookParts/item7.svg"
            }, {
                "id": 8,
                "numInName": 8,
                "url": "https://media.blooket.com/image/upload/v1634087922/BlookParts/item8.svg"
            }, {
                "id": 9,
                "numInName": 9,
                "url": "https://media.blooket.com/image/upload/v1634087927/BlookParts/item9.svg"
            }, {
                "id": 10,
                "numInName": 10,
                "url": "https://media.blooket.com/image/upload/v1634087939/BlookParts/item10.svg"
            }, {
                "id": 11,
                "numInName": 11,
                "url": "https://media.blooket.com/image/upload/v1634087942/BlookParts/item11.svg"
            }, {
                "id": 12,
                "numInName": 12,
                "url": "https://media.blooket.com/image/upload/v1634087942/BlookParts/item12.svg"
            }, {
                "id": 13,
                "numInName": 13,
                "url": "https://media.blooket.com/image/upload/v1634087944/BlookParts/item13.svg"
            }, {
                "id": 14,
                "numInName": 14,
                "url": "https://media.blooket.com/image/upload/v1664323225/BlookParts/item14.svg"
            }, {
                "id": 15,
                "numInName": 15,
                "url": "https://media.blooket.com/image/upload/v1664323225/BlookParts/item15.svg"
            }, {
                "id": 16,
                "numInName": 16,
                "url": "https://media.blooket.com/image/upload/v1664323225/BlookParts/item16.svg"
            }, {
                "id": 17,
                "numInName": 17,
                "url": "https://media.blooket.com/image/upload/v1664324849/BlookParts/item17.svg"
            }, {
                "id": 18,
                "numInName": 18,
                "url": "https://media.blooket.com/image/upload/v1664324849/BlookParts/item18.svg"
            }, {
                "id": 19,
                "numInName": 19,
                "url": "https://media.blooket.com/image/upload/v1664324849/BlookParts/item19.svg"
            }, {
                "id": 20,
                "numInName": 20,
                "url": "https://media.blooket.com/image/upload/v1664325715/BlookParts/item20.svg"
            }, {
                "id": 21,
                "numInName": 21,
                "url": "https://media.blooket.com/image/upload/v1664325715/BlookParts/item21.svg"
            }, {
                "id": 22,
                "numInName": 22,
                "url": "https://media.blooket.com/image/upload/v1664342232/BlookParts/item22.svg"
            }, {
                "id": 23,
                "numInName": 23,
                "url": "https://media.blooket.com/image/upload/v1664325717/BlookParts/item23.svg"
            }, {
                "id": 24,
                "numInName": 24,
                "url": "https://media.blooket.com/image/upload/v1664325717/BlookParts/item24.svg"
            }, {
                "id": 25,
                "numInName": 25,
                "url": "https://media.blooket.com/image/upload/v1664325717/BlookParts/item25.svg"
            }, {
                "id": 26,
                "numInName": 26,
                "url": "https://media.blooket.com/image/upload/v1664325717/BlookParts/item26.svg"
            }, {
                "id": 27,
                "numInName": 27,
                "url": "https://media.blooket.com/image/upload/v1664326436/BlookParts/item27.svg"
            }, {
                "id": 28,
                "numInName": 28,
                "url": "https://media.blooket.com/image/upload/v1664334116/BlookParts/item28.svg"
            }, {
                "id": 29,
                "numInName": 29,
                "url": "https://media.blooket.com/image/upload/v1664334117/BlookParts/item29.svg"
            }, {
                "id": 30,
                "numInName": 30,
                "url": "https://media.blooket.com/image/upload/v1664334118/BlookParts/item30.svg"
            }, {
                "id": 31,
                "numInName": 31,
                "url": "https://media.blooket.com/image/upload/v1664334118/BlookParts/item31.svg"
            }, {
                "id": 32,
                "numInName": 32,
                "url": "https://media.blooket.com/image/upload/v1666686889/BlookParts/item32.svg"
            }, {
                "id": 33,
                "numInName": 33,
                "url": "https://media.blooket.com/image/upload/v1666686889/BlookParts/item33.svg"
            }, {
                "id": 34,
                "numInName": 34,
                "url": "https://media.blooket.com/image/upload/v1669084280/BlookParts/item34.svg"
            }, {
                "id": 35,
                "numInName": 35,
                "url": "https://media.blooket.com/image/upload/v1671528728/BlookParts/item35.svg"
            }, {
                "id": 36,
                "numInName": 36,
                "url": "https://media.blooket.com/image/upload/v1678767661/BlookParts/item36.svg"
            }, {
                "id": 37,
                "numInName": 37,
                "url": "https://media.blooket.com/image/upload/v1695265651/BlookParts/item37.svg"
            }, {
                "id": 38,
                "numInName": 38,
                "url": "https://media.blooket.com/image/upload/v1695265651/BlookParts/item38.svg"
            }, {
                "id": 39,
                "numInName": 39,
                "url": "https://media.blooket.com/image/upload/v1695265651/BlookParts/item39.svg"
            }, {
                "id": 40,
                "numInName": 40,
                "url": "https://media.blooket.com/image/upload/v1695265652/BlookParts/item40.svg"
            }, {
                "id": 41,
                "numInName": 41,
                "url": "https://media.blooket.com/image/upload/v1695265652/BlookParts/item41.svg"
            }, {
                "id": 42,
                "numInName": 42,
                "url": "https://media.blooket.com/image/upload/v1695265652/BlookParts/item42.svg"
            }, {
                "id": 43,
                "numInName": 43,
                "url": "https://media.blooket.com/image/upload/v1695265653/BlookParts/item43.svg"
            }, {
                "id": 44,
                "numInName": 44,
                "url": "https://media.blooket.com/image/upload/v1695265653/BlookParts/item44.svg"
            }, {
                "id": 45,
                "numInName": 45,
                "url": "https://media.blooket.com/image/upload/v1695265653/BlookParts/item45.svg"
            }, {
                "id": 46,
                "numInName": 46,
                "url": "https://media.blooket.com/image/upload/v1695265654/BlookParts/item46.svg"
            }, {
                "id": 47,
                "numInName": 47,
                "url": "https://media.blooket.com/image/upload/v1695265654/BlookParts/item47.svg"
            }, {
                "id": 48,
                "numInName": 48,
                "url": "https://media.blooket.com/image/upload/v1767654254/BlookParts/item48v2.svg"
            }, {
                "id": 49,
                "numInName": 49,
                "url": "https://media.blooket.com/image/upload/v1695265655/BlookParts/item49.svg"
            }, {
                "id": 50,
                "numInName": 50,
                "url": "https://media.blooket.com/image/upload/v1695265655/BlookParts/item50.svg"
            }, {
                "id": 51,
                "numInName": 51,
                "url": "https://media.blooket.com/image/upload/v1695265656/BlookParts/item51.svg"
            }, {
                "id": 52,
                "numInName": 52,
                "url": "https://media.blooket.com/image/upload/v1695265656/BlookParts/item52.svg"
            }, {
                "id": 53,
                "numInName": 53,
                "url": "https://media.blooket.com/image/upload/v1695265656/BlookParts/item53.svg"
            }, {
                "id": 54,
                "numInName": 54,
                "url": "https://media.blooket.com/image/upload/v1695265657/BlookParts/item54.svg"
            }, {
                "id": 55,
                "numInName": 55,
                "url": "https://media.blooket.com/image/upload/v1695265657/BlookParts/item55.svg"
            }, {
                "id": 56,
                "numInName": 56,
                "url": "https://media.blooket.com/image/upload/v1701743199/BlookParts/item56.svg"
            }, {
                "id": 57,
                "numInName": 57,
                "url": "https://media.blooket.com/image/upload/v1701743199/BlookParts/item57.svg"
            }, {
                "id": 58,
                "numInName": 58,
                "url": "https://media.blooket.com/image/upload/v1726105812/BlookParts/item58.svg"
            }, {
                "id": 59,
                "numInName": 59,
                "url": "https://media.blooket.com/image/upload/v1726105813/BlookParts/item59.svg"
            }, {
                "id": 60,
                "numInName": 60,
                "url": "https://media.blooket.com/image/upload/v1726105814/BlookParts/item60.svg"
            }, {
                "id": 61,
                "numInName": 61,
                "url": "https://media.blooket.com/image/upload/v1726105815/BlookParts/item61.svg"
            }, {
                "id": 62,
                "numInName": 62,
                "url": "https://media.blooket.com/image/upload/v1728608104/BlookParts/item62.svg"
            }, {
                "id": 63,
                "numInName": 63,
                "url": "https://media.blooket.com/image/upload/v1728608104/BlookParts/item63.svg"
            }, {
                "id": 64,
                "numInName": 64,
                "url": "https://media.blooket.com/image/upload/v1728608104/BlookParts/item64.svg"
            }, {
                "id": 65,
                "numInName": 65,
                "url": "https://media.blooket.com/image/upload/v1728608104/BlookParts/item65.svg"
            }, {
                "id": 66,
                "numInName": 66,
                "url": "https://media.blooket.com/image/upload/v1733205074/BlookParts/item66.svg"
            }, {
                "id": 67,
                "numInName": 67,
                "url": "https://media.blooket.com/image/upload/v1733205074/BlookParts/item67.svg"
            }, {
                "id": 68,
                "numInName": 68,
                "url": "https://media.blooket.com/image/upload/v1758008899/BlookParts/item68.svg"
            }, {
                "id": 69,
                "numInName": 69,
                "url": "https://media.blooket.com/image/upload/v1758008899/BlookParts/item69.svg"
            }, {
                "id": 70,
                "numInName": 70,
                "url": "https://media.blooket.com/image/upload/v1758008901/BlookParts/item70.svg"
            }, {
                "id": 71,
                "numInName": 71,
                "url": "https://media.blooket.com/image/upload/v1758008901/BlookParts/item71.svg"
            }, {
                "id": 72,
                "numInName": 72,
                "url": "https://media.blooket.com/image/upload/v1758008903/BlookParts/item72.svg"
            }, {
                "id": 73,
                "numInName": 73,
                "url": "https://media.blooket.com/image/upload/v1767654254/BlookParts/item73v2.svg"
            }, {
                "id": 74,
                "numInName": 74,
                "url": "https://media.blooket.com/image/upload/v1758008903/BlookParts/item74.svg"
            }, {
                "id": 75,
                "numInName": 75,
                "url": "https://media.blooket.com/image/upload/v1758008903/BlookParts/item75.svg"
            }, {
                "id": 76,
                "numInName": 76,
                "url": "https://media.blooket.com/image/upload/v1758008904/BlookParts/item76.svg"
            }, {
                "id": 77,
                "numInName": 77,
                "url": "https://media.blooket.com/image/upload/v1758008904/BlookParts/item77.svg"
            }, {
                "id": 78,
                "numInName": 78,
                "url": "https://media.blooket.com/image/upload/v1758008904/BlookParts/item78.svg"
            }, {
                "id": 79,
                "numInName": 79,
                "url": "https://media.blooket.com/image/upload/v1758008905/BlookParts/item79.svg"
            }, {
                "id": 80,
                "numInName": 80,
                "url": "https://media.blooket.com/image/upload/v1758008908/BlookParts/item80.svg"
            }],
            "mouth": [{
                "id": 1,
                "numInName": 0,
                "url": "https://media.blooket.com/image/upload/v1634087948/BlookParts/mouth0.svg"
            }, {
                "id": 2,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087948/BlookParts/mouth1.svg"
            }, {
                "id": 3,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087957/BlookParts/mouth2.svg"
            }, {
                "id": 4,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087958/BlookParts/mouth3.svg"
            }, {
                "id": 5,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087959/BlookParts/mouth4.svg"
            }, {
                "id": 6,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1634087959/BlookParts/mouth5.svg"
            }, {
                "id": 7,
                "numInName": 6,
                "url": "https://media.blooket.com/image/upload/v1634087960/BlookParts/mouth6.svg"
            }, {
                "id": 8,
                "numInName": 7,
                "url": "https://media.blooket.com/image/upload/v1634087963/BlookParts/mouth7.svg"
            }, {
                "id": 9,
                "numInName": 8,
                "url": "https://media.blooket.com/image/upload/v1634087967/BlookParts/mouth8.svg"
            }, {
                "id": 10,
                "numInName": 9,
                "url": "https://media.blooket.com/image/upload/v1634087968/BlookParts/mouth9.svg"
            }, {
                "id": 11,
                "numInName": 10,
                "url": "https://media.blooket.com/image/upload/v1634087974/BlookParts/mouth10.svg"
            }, {
                "id": 12,
                "numInName": 11,
                "url": "https://media.blooket.com/image/upload/v1634087975/BlookParts/mouth11.svg"
            }, {
                "id": 13,
                "numInName": 12,
                "url": "https://media.blooket.com/image/upload/v1664326436/BlookParts/mouth12.svg"
            }, {
                "id": 14,
                "numInName": 13,
                "url": "https://media.blooket.com/image/upload/v1664326436/BlookParts/mouth13.svg"
            }, {
                "id": 15,
                "numInName": 14,
                "url": "https://media.blooket.com/image/upload/v1664334118/BlookParts/mouth14.svg"
            }, {
                "id": 16,
                "numInName": 15,
                "url": "https://media.blooket.com/image/upload/v1664334118/BlookParts/mouth15.svg"
            }, {
                "id": 17,
                "numInName": 16,
                "url": "https://media.blooket.com/image/upload/v1664334119/BlookParts/mouth16.svg"
            }, {
                "id": 18,
                "numInName": 17,
                "url": "https://media.blooket.com/image/upload/v1664334110/BlookParts/mouth17.svg"
            }, {
                "id": 19,
                "numInName": 18,
                "url": "https://media.blooket.com/image/upload/v1695265657/BlookParts/mouth18.svg"
            }, {
                "id": 20,
                "numInName": 19,
                "url": "https://media.blooket.com/image/upload/v1758008910/BlookParts/mouth19-2.svg"
            }, {
                "id": 21,
                "numInName": 20,
                "url": "https://media.blooket.com/image/upload/v1695265658/BlookParts/mouth20.svg"
            }, {
                "id": 22,
                "numInName": 21,
                "url": "https://media.blooket.com/image/upload/v1695265659/BlookParts/mouth21.svg"
            }, {
                "id": 23,
                "numInName": 22,
                "url": "https://media.blooket.com/image/upload/v1696372287/BlookParts/mouth22.svg"
            }, {
                "id": 24,
                "numInName": 23,
                "url": "https://media.blooket.com/image/upload/v1726105816/BlookParts/mouth23.svg"
            }, {
                "id": 25,
                "numInName": 24,
                "url": "https://media.blooket.com/image/upload/v1726105817/BlookParts/mouth24.svg"
            }, {
                "id": 26,
                "numInName": 25,
                "url": "https://media.blooket.com/image/upload/v1726105818/BlookParts/mouth25.svg"
            }, {
                "id": 27,
                "numInName": 26,
                "url": "https://media.blooket.com/image/upload/v1726105819/BlookParts/mouth26.svg"
            }, {
                "id": 28,
                "numInName": 27,
                "url": "https://media.blooket.com/image/upload/v1726105819/BlookParts/mouth27.svg"
            }, {
                "id": 29,
                "numInName": 28,
                "url": "https://media.blooket.com/image/upload/v1726105819/BlookParts/mouth28.svg"
            }, {
                "id": 30,
                "numInName": 29,
                "url": "https://media.blooket.com/image/upload/v1726105819/BlookParts/mouth29.svg"
            }, {
                "id": 31,
                "numInName": 30,
                "url": "https://media.blooket.com/image/upload/v1726105820/BlookParts/mouth30.svg"
            }, {
                "id": 32,
                "numInName": 31,
                "url": "https://media.blooket.com/image/upload/v1758008910/BlookParts/mouth31.svg"
            }, {
                "id": 33,
                "numInName": 32,
                "url": "https://media.blooket.com/image/upload/v1758008911/BlookParts/mouth32.svg"
            }, {
                "id": 34,
                "numInName": 33,
                "url": "https://media.blooket.com/image/upload/v1758008911/BlookParts/mouth33.svg"
            }],
            "nose": [{
                "id": 1,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087975/BlookParts/nose1.svg"
            }, {
                "id": 2,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087979/BlookParts/nose2.svg"
            }, {
                "id": 3,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087989/BlookParts/nose3.svg"
            }, {
                "id": 4,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087992/BlookParts/nose4.svg"
            }, {
                "id": 5,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1634087993/BlookParts/nose5.svg"
            }, {
                "id": 6,
                "numInName": 6,
                "url": "https://media.blooket.com/image/upload/v1634087993/BlookParts/nose6.svg"
            }, {
                "id": 7,
                "numInName": 7,
                "url": "https://media.blooket.com/image/upload/v1664334110/BlookParts/nose7.svg"
            }, {
                "id": 8,
                "numInName": 8,
                "url": "https://media.blooket.com/image/upload/v1666686854/BlookParts/nose8.svg"
            }, {
                "id": 9,
                "numInName": 9,
                "url": "https://media.blooket.com/image/upload/v1726105820/BlookParts/nose9.svg"
            }, {
                "id": 10,
                "numInName": 10,
                "url": "https://media.blooket.com/image/upload/v1726105820/BlookParts/nose10.svg"
            }, {
                "id": 11,
                "numInName": 11,
                "url": "https://media.blooket.com/image/upload/v1726105821/BlookParts/nose11.svg"
            }, {
                "id": 12,
                "numInName": 12,
                "url": "https://media.blooket.com/image/upload/v1726105821/BlookParts/nose12.svg"
            }],
            "cheeks": [{
                "id": 1,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087705/BlookParts/cheeks1.svg"
            }, {
                "id": 2,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087706/BlookParts/cheeks2.svg"
            }, {
                "id": 3,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087696/BlookParts/cheeks3.svg"
            }, {
                "id": 4,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087718/BlookParts/cheeks4.svg"
            }, {
                "id": 5,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1664342241/BlookParts/cheeks5.svg"
            }, {
                "id": 6,
                "numInName": 6,
                "url": "https://media.blooket.com/image/upload/v1664325848/BlookParts/cheeks6.svg"
            }, {
                "id": 7,
                "numInName": 7,
                "url": "https://media.blooket.com/image/upload/v1695265659/BlookParts/cheeks7.svg"
            }],
            "eyebrows": [{
                "id": 1,
                "numInName": 1,
                "url": "https://media.blooket.com/image/upload/v1634087694/BlookParts/eyebrows1.svg"
            }, {
                "id": 2,
                "numInName": 2,
                "url": "https://media.blooket.com/image/upload/v1634087695/BlookParts/eyebrows2.svg"
            }, {
                "id": 3,
                "numInName": 3,
                "url": "https://media.blooket.com/image/upload/v1634087695/BlookParts/eyebrows3.svg"
            }, {
                "id": 4,
                "numInName": 4,
                "url": "https://media.blooket.com/image/upload/v1634087695/BlookParts/eyebrows4.svg"
            }, {
                "id": 5,
                "numInName": 5,
                "url": "https://media.blooket.com/image/upload/v1634087706/BlookParts/eyebrows5.svg"
            }, {
                "id": 6,
                "numInName": 6,
                "url": "https://media.blooket.com/image/upload/v1664326438/BlookParts/eyebrows6.svg"
            }, {
                "id": 7,
                "numInName": 7,
                "url": "https://media.blooket.com/image/upload/v1664326438/BlookParts/eyebrows7.svg"
            }, {
                "id": 8,
                "numInName": 8,
                "url": "https://media.blooket.com/image/upload/v1664334112/BlookParts/eyebrows8.svg"
            }, {
                "id": 9,
                "numInName": 9,
                "url": "https://media.blooket.com/image/upload/v1664334112/BlookParts/eyebrows9.svg"
            }, {
                "id": 10,
                "numInName": 10,
                "url": "https://media.blooket.com/image/upload/v1678767661/BlookParts/eyebrows10.svg"
            }, {
                "id": 11,
                "numInName": 11,
                "url": "https://media.blooket.com/image/upload/v1696372289/BlookParts/eyebrows11.svg"
            }, {
                "id": 12,
                "numInName": 12,
                "url": "https://media.blooket.com/image/upload/v1726105773/BlookParts/eyebrows12.svg"
            }, {
                "id": 13,
                "numInName": 13,
                "url": "https://media.blooket.com/image/upload/v1758008857/BlookParts/eyebrows13.svg"
            }],
            "unknown": [{
                "id": 1,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg"
            }, {
                "id": 2,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg"
            }, {
                "id": 3,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg"
            }, {
                "id": 4,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg"
            }, {
                "id": 5,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg"
            }, {
                "id": 6,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg"
            }, {
                "id": 7,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg"
            }, {
                "id": 8,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg"
            }, {
                "id": 9,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg"
            }, {
                "id": 10,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg"
            }, {
                "id": 11,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg"
            }, {
                "id": 12,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg"
            }, {
                "id": 13,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg"
            }, {
                "id": 14,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg"
            }, {
                "id": 15,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg"
            }, {
                "id": 16,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg"
            }, {
                "id": 17,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg"
            }, {
                "id": 18,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg"
            }, {
                "id": 19,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg"
            }, {
                "id": 20,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg"
            }, {
                "id": 21,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg"
            }, {
                "id": 22,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg"
            }, {
                "id": 23,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg"
            }, {
                "id": 24,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg"
            }, {
                "id": 25,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg"
            }, {
                "id": 26,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg"
            }, {
                "id": 27,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg"
            }, {
                "id": 28,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg"
            }, {
                "id": 29,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg"
            }, {
                "id": 30,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg"
            }, {
                "id": 31,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg"
            }, {
                "id": 32,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg"
            }, {
                "id": 33,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg"
            }, {
                "id": 34,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg"
            }, {
                "id": 35,
                "numInName": null,
                "url": "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg"
            }]
        };

        function getPartUrl(category, numInName) {
            const list = partsData[category];
            if (!list) return null;
            const item = list.find(p => p.numInName === numInName);
            return item ? item.url : null;
        }

        function getPartList(category) {
            return (partsData[category] || []).slice().sort((a, b) => a.numInName - b.numInName);
        }
        const PART_CONFIG = {
            base: {
                label: "Base"
            },
            clothing: {
                label: "Clothing"
            },
            eyes: {
                label: "Eyes"
            },
            glasses: {
                label: "Glasses"
            },
            hair: {
                label: "Hair"
            },
            hat: {
                label: "Hat"
            },
            item: {
                label: "Item"
            },
            mouth: {
                label: "Mouth"
            },
            nose: {
                label: "Nose"
            },
            cheeks: {
                label: "Cheeks"
            },
            eyebrows: {
                label: "Eyebrows"
            }
        };
        const RENDER_ORDER = ["base", "clothing", "cheeks", "nose", "eyes", "eyebrows", "mouth", "glasses", "hair", "hat", "item"];
        const state = {
            base: 0,
            clothing: 0,
            eyes: 0,
            glasses: 0,
            hair: 0,
            hairColor: 0,
            hat: 0,
            item: 0,
            mouth: 0,
            nose: 0,
            cheeks: 0,
            eyebrows: 0,
            eyebrowsColor: 0,
            blookName: "",
            presets: JSON.parse(localStorage.getItem('blookPresets') || '[]')
        };
        const partIcons = {
            base: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',
            hair: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c-4 0-7 3-7 7v3h14V9c0-4-3-7-7-7z"/><path d="M5 12v6h14v-6"/></svg>',
            nose: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v8M10 14l2 2 2-2"/></svg>',
            cheeks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/></svg>',
            mouth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 13c0 3 2 5 5 5s5-2 5-5"/></svg>',
            item: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>',
            hat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l9-7 9 7v2H3v-2z"/><path d="M5 14h14v2H5z"/></svg>',
            eyebrows: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9c2-2 4-2 6 0M14 9c2-2 4-2 6 0"/></svg>',
            eyes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="8" cy="12" r="1" fill="currentColor"/><circle cx="16" cy="12" r="1" fill="currentColor"/></svg>',
            glasses: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M10 12h4"/></svg>',
            clothing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3l4 4v14H4V7l4-4M8 3v4M16 3v4"/></svg>',
            none: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/></svg>',
            save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>',
            clear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
            code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
            palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>'
        };
        const editorLayout = document.createElement("div");
        editorLayout.className = "editorLayout";
        const nameInputRow = document.createElement("div");
        nameInputRow.className = "nameInputRow";
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.className = "nameInput";
        nameInput.placeholder = "Enter Blook Name...";
        nameInput.value = state.blookName;
        nameInput.addEventListener("input", (e) => {
            state.blookName = e.target.value;
            updateCodeDisplay();
        });
        nameInputRow.appendChild(nameInput);
        const leftColumn = document.createElement("div");
        leftColumn.className = "leftColumn";
        ["base", "hair", "nose", "cheeks", "mouth"].forEach(part => {
            leftColumn.appendChild(createPartButton(part));
        });
        const topSection = document.createElement("div");
        topSection.className = "topSection";
        const previewCenter = document.createElement("div");
        previewCenter.className = "previewCenter";
        const previewBox = document.createElement("div");
        previewBox.className = "previewBox";
        const previewStack = document.createElement("div");
        previewStack.className = "previewStack";
        previewBox.appendChild(previewStack);
        const actionButtons = document.createElement("div");
        actionButtons.className = "actionButtons";
        const saveButton = document.createElement("button");
        saveButton.className = "blookBtn save";
        saveButton.textContent = 'Apply';
        saveButton.onclick = saveBlook;
        const clearButton = document.createElement("button");
        clearButton.className = "blookBtn clear";
        clearButton.textContent = 'Clear';
        clearButton.onclick = clearBlook;
        const savePresetButton = document.createElement("button");
        savePresetButton.className = "blookBtn preset";
        savePresetButton.textContent = 'Save as Preset';
        savePresetButton.onclick = savePreset;
        actionButtons.append(saveButton, clearButton, savePresetButton);
        previewCenter.append(previewBox, actionButtons);
        topSection.insertBefore(nameInput, topSection.firstChild);
        topSection.appendChild(previewCenter);
        const rightColumn = document.createElement("div");
        rightColumn.className = "rightColumn";
        ["item", "eyebrows", "eyes", "glasses", "hat", "clothing"].forEach(part => {
            rightColumn.appendChild(createPartButton(part));
        });
        editorLayout.append(nameInputRow, leftColumn, topSection, rightColumn);
        blookPage.appendChild(editorLayout);
        const importSection = document.createElement("div");
        importSection.className = "importSection";
        const importWrapper = document.createElement("div");
        importWrapper.className = "blook-section";
        const importLabel = document.createElement("div");
        importLabel.className = "blook-section-title";
        importLabel.textContent = "Import / Export";
        importWrapper.appendChild(importLabel);
        const importInputGroup = document.createElement("div");
        importInputGroup.className = "blook-input-group";
        const importInput = document.createElement("input");
        importInput.type = "text";
        importInput.className = "blook-input";
        importInput.placeholder = "Paste blook code to import";
        const importButtonGroup = document.createElement("div");
        importButtonGroup.className = "button-group";
        importButtonGroup.style.cssText = "display:flex;gap:6px;flex-wrap:nowrap;width:100%;box-sizing:border-box;";
        const importButton = document.createElement("button");
        importButton.className = "blookBtn import";
        importButton.textContent = "Import";
        importButton.style.cssText = "flex:1 1 0;min-width:0;width:0;padding:0 4px;font-size:12px;box-sizing:border-box;";
        importButton.onclick = () => {
            const code = importInput.value.trim();
            if (!code) {
                Swal.fire({
                    title: "No Code",
                    text: "Please paste a blook code first",
                    icon: "warning",
                    confirmButtonColor: "#5b4bdb"
                });
                return;
            }
            try {
                loadFromCode(code);
                importInput.value = "";
                Swal.fire({
                    title: "Imported!",
                    text: "Blook loaded successfully.",
                    icon: "success",
                    confirmButtonColor: "#5b4bdb"
                });
            } catch (err) {
                Swal.fire({
                    title: "Error",
                    text: "Invalid blook code format",
                    icon: "error",
                    confirmButtonColor: "#5b4bdb"
                });
            }
        };
        const exportButton = document.createElement("button");
        exportButton.className = "blookBtn export";
        exportButton.textContent = "Export";
        exportButton.style.cssText = "flex:1 1 0;min-width:0;width:0;padding:0 4px;font-size:12px;box-sizing:border-box;";
        exportButton.onclick = () => {
            const code = getBlookCode();
            const name = state.blookName || "Unnamed";
            const fullCode = `${name}-${code}`;
            importInput.value = fullCode;
            navigator.clipboard.writeText(fullCode).then(() => {
                exportButton.textContent = "Copied!";
                setTimeout(() => {
                    exportButton.textContent = "Export";
                }, 1500);
            }).catch(() => {
                importInput.select();
                document.execCommand('copy');
            });
        };
        const copyImportBtn = document.createElement("button");
        copyImportBtn.className = "blookBtn copy";
        copyImportBtn.style.cssText = "flex:1 1 0;min-width:0;width:0;padding:0 4px;font-size:12px;box-sizing:border-box;";
        const copyIcon = '<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;flex-shrink:0;"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
        const checkIcon = '<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;flex-shrink:0;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
        copyImportBtn.innerHTML = `${copyIcon} Copy`;
        copyImportBtn.onclick = () => {
            const code = importInput.value.trim();
            if (!code) return;
            navigator.clipboard.writeText(code).then(() => {
                copyImportBtn.innerHTML = `${checkIcon} Copied!`;
                setTimeout(() => {
                    copyImportBtn.innerHTML = `${copyIcon} Copy`;
                }, 1500);
            });
        };
        importButtonGroup.append(importButton, exportButton, copyImportBtn);
        importInputGroup.append(importInput, importButtonGroup);
        importWrapper.appendChild(importInputGroup);
        importSection.appendChild(importWrapper);
        blookPage.appendChild(importSection);
        const presetSection = document.createElement("div");
        presetSection.className = "presetSection";
        const presetWrapper = document.createElement("div");
        presetWrapper.className = "blook-section";
        const presetLabel = document.createElement("div");
        presetLabel.className = "blook-section-title";
        presetLabel.textContent = "Saved Presets";
        presetWrapper.appendChild(presetLabel);
        const presetList = document.createElement("div");
        presetList.className = "presetList";
        presetWrapper.appendChild(presetList);
        presetSection.appendChild(presetWrapper);
        blookPage.appendChild(presetSection);

        function getBlookCode() {
            const v = [
                state.base, state.clothing, state.eyes, state.glasses, state.hair,
                state.hairColor, state.hat, state.item, state.mouth, state.nose,
                state.cheeks, state.eyebrows, state.eyebrowsColor
            ];
            return `${v[0]}#${v[1]}#${v[2]}#${v[3]}#${v[4]}${v[5]}#${v[6]}#${v[7]}#${v[8]}#${v[9]}#${v[10]}#${v[11]}${v[12]}`;
        }

        function loadFromCode(code) {
            const parts = code.split(/- ?/);
            let blookCode;
            if (parts.length === 2) {
                state.blookName = parts[0];
                nameInput.value = parts[0];
                blookCode = parts[1];
            } else {
                blookCode = code;
                state.blookName = "";
                nameInput.value = "";
            }
            const values = blookCode.split('#');
            if (values.length < 11) throw new Error("Invalid code format");
            state.base = parseInt(values[0]) || 0;
            state.clothing = parseInt(values[1]) || 0;
            state.eyes = parseInt(values[2]) || 0;
            state.glasses = parseInt(values[3]) || 0;
            const hairVal = values[4];
            if (hairVal.length >= 2) {
                state.hair = parseInt(hairVal.slice(0, -1)) || 0;
                state.hairColor = parseInt(hairVal.slice(-1)) || 0;
            } else {
                state.hair = parseInt(hairVal) || 0;
                state.hairColor = 0;
            }
            state.hat = parseInt(values[5]) || 0;
            state.item = parseInt(values[6]) || 0;
            state.mouth = parseInt(values[7]) || 0;
            state.nose = parseInt(values[8]) || 0;
            state.cheeks = parseInt(values[9]) || 0;
            const eyebrowsVal = values[10];
            if (eyebrowsVal.length >= 2) {
                state.eyebrows = parseInt(eyebrowsVal.slice(0, -1)) || 0;
                state.eyebrowsColor = parseInt(eyebrowsVal.slice(-1)) || 0;
            } else {
                state.eyebrows = parseInt(eyebrowsVal) || 0;
                state.eyebrowsColor = 0;
            }
            renderStack();
            updateCodeDisplay();
        }

        function savePreset() {
            const name = state.blookName || "Unnamed Preset";
            const code = getBlookCode();
            const preset = {
                id: Date.now(),
                name: name,
                code: code,
                timestamp: new Date().toISOString()
            };
            state.presets.push(preset);
            localStorage.setItem('blookPresets', JSON.stringify(state.presets));
            renderBlookEditorPresets();
            Swal.fire({
                toast: true,
                position: "bottom",
                icon: "success",
                title: `"${name}" saved!`,
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });
        }

        function loadPreset(presetId) {
            const preset = state.presets.find(p => p.id === presetId);
            if (!preset) return;
            try {
                loadFromCode(`${preset.name}-${preset.code}`);
                Swal.fire({
                    toast: true,
                    position: "bottom",
                    icon: "success",
                    title: `"${preset.name}" loaded!`,
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true
                });
            } catch (err) {
                Swal.fire({
                    title: "Error",
                    text: "Failed to load preset",
                    icon: "error",
                    confirmButtonColor: "#5b4bdb"
                });
            }
        }

        function deletePreset(presetId) {
            Swal.fire({
                title: "Delete Preset?",
                text: "This cannot be undone.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#ef4444",
                cancelButtonColor: "#5b4bdb",
                confirmButtonText: "Delete",
                cancelButtonText: "Cancel"
            }).then(result => {
                if (!result.isConfirmed) return;
                state.presets = state.presets.filter(p => p.id !== presetId);
                localStorage.setItem('blookPresets', JSON.stringify(state.presets));
                renderBlookEditorPresets();
            });
        }

        function renderBlookEditorPresets() {
            const presetListElement = blookPage.querySelector('.presetList');
            if (!presetListElement) return;
            presetListElement.innerHTML = '';
            if (state.presets.length === 0) {
                const emptyMsg = document.createElement('div');
                emptyMsg.className = 'empty-state';
                emptyMsg.innerHTML = `
            <div>No saved presets yet</div>
            <div style="font-size: 14px; margin-top: 8px;">Create and save your first custom blook</div>
        `;
                presetListElement.appendChild(emptyMsg);
                return;
            }
            state.presets.forEach(preset => {
                const item = document.createElement('div');
                item.className = 'presetItem';
                const imgWrapper = document.createElement('div');
                imgWrapper.className = 'preset-img-wrapper';
                const blookStack = document.createElement('div');
                blookStack.className = 'preset-blook-stack';
                try {
                    const values = preset.code.split('#');
                    const presetState = {
                        base: parseInt(values[0]) || 0,
                        clothing: parseInt(values[1]) || 0,
                        eyes: parseInt(values[2]) || 0,
                        glasses: parseInt(values[3]) || 0,
                        hair: values[4] ? parseInt(values[4].slice(0, -1)) || 0 : 0,
                        hat: parseInt(values[5]) || 0,
                        item: parseInt(values[6]) || 0,
                        mouth: parseInt(values[7]) || 0,
                        nose: parseInt(values[8]) || 0,
                        cheeks: parseInt(values[9]) || 0,
                        eyebrows: values[10] ? parseInt(values[10].slice(0, -1)) || 0 : 0
                    };
                    RENDER_ORDER.forEach(part => {
                        const numInName = presetState[part];
                        const config = PART_CONFIG[part];
                        if (!config) return;
                        if (part === "base") {
                            if (numInName < 0) return;
                        } else {
                            if (numInName <= 0) return;
                        }
                        const url = getPartUrl(part, numInName);
                        if (!url) return;
                        const img = document.createElement("img");
                        img.src = url;
                        img.onerror = () => img.remove();
                        blookStack.appendChild(img);
                    });
                } catch (e) {}
                imgWrapper.appendChild(blookStack);
                const name = document.createElement('div');
                name.className = 'presetName';
                name.textContent = preset.name;
                const code = document.createElement('div');
                code.className = 'presetCode';
                code.textContent = preset.code;
                const actions = document.createElement('div');
                actions.className = 'presetItemActions';
                const loadBtn = document.createElement('button');
                loadBtn.className = 'presetLoadBtn';
                loadBtn.textContent = 'Load';
                loadBtn.onclick = (e) => {
                    e.stopPropagation();
                    loadPreset(preset.id);
                };
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'presetDeleteBtn';
                deleteBtn.textContent = 'Delete';
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    deletePreset(preset.id);
                };
                actions.appendChild(loadBtn);
                actions.appendChild(deleteBtn);
                item.appendChild(imgWrapper);
                item.appendChild(name);
                item.appendChild(code);
                item.appendChild(actions);
                presetListElement.appendChild(item);
            });
        }

        function updateCodeDisplay() {}

        function clearBlook() {
            state.base = 0;
            state.clothing = 0;
            state.eyes = 0;
            state.glasses = 0;
            state.hair = 0;
            state.hairColor = 0;
            state.hat = 0;
            state.item = 0;
            state.mouth = 0;
            state.nose = 0;
            state.cheeks = 0;
            state.eyebrows = 0;
            state.eyebrowsColor = 0;
            state.blookName = "";
            nameInput.value = "";
            renderStack();
            updateCodeDisplay();
        }

        function createPartButton(partKey) {
            const config = PART_CONFIG[partKey];
            const btn = document.createElement("div");
            btn.className = "partButton";
            const iconDiv = document.createElement("div");
            iconDiv.className = "partIcon";
            iconDiv.innerHTML = partIcons[partKey] || partIcons.base;
            const label = document.createElement("div");
            label.className = "partLabel";
            label.textContent = config.label;
            btn.appendChild(iconDiv);
            btn.appendChild(label);
            btn.onclick = () => openInlineSelector(partKey);
            return btn;
        }

        function openInlineSelector(partKey) {
            const config = PART_CONFIG[partKey];
            const existing = previewBox.querySelector('.selectorView');
            if (existing) existing.remove();
            const selectorView = document.createElement("div");
            selectorView.className = "selectorView";
            const header = document.createElement("div");
            header.className = "selectorViewHeader";
            const title = document.createElement("div");
            title.className = "selectorViewTitle";
            title.textContent = "Choose " + config.label;
            const closeBtn = document.createElement("button");
            closeBtn.className = "selectorViewClose";
            closeBtn.textContent = "✕";
            closeBtn.onclick = () => selectorView.remove();
            header.appendChild(title);
            header.appendChild(closeBtn);
            const grid = document.createElement("div");
            grid.className = "selectorViewGrid";
            const noneOption = document.createElement("div");
            noneOption.className = `selectorViewItem none ${state[partKey] === 0 ? 'selected' : ''}`;
            noneOption.innerHTML = partIcons.none;
            noneOption.onclick = () => {
                state[partKey] = 0;
                selectorView.remove();
                renderStack();
                updateCodeDisplay();
            };
            grid.appendChild(noneOption);
            const items = getPartList(partKey);
            items.forEach(item => {
                if (partKey !== "base" && item.numInName === 0) return;
                const option = document.createElement("div");
                option.className = `selectorViewItem ${state[partKey] === item.numInName ? 'selected' : ''}`;
                const img = document.createElement("img");
                img.src = item.url;
                img.onerror = () => option.style.display = "none";
                option.appendChild(img);
                option.onclick = () => {
                    state[partKey] = item.numInName;
                    selectorView.remove();
                    renderStack();
                    updateCodeDisplay();
                };
                grid.appendChild(option);
            });
            selectorView.appendChild(header);
            selectorView.appendChild(grid);
            previewBox.appendChild(selectorView);
        }

        function renderStack() {
            const existingSelector = previewBox.querySelector('.selectorView');
            if (existingSelector) existingSelector.remove();
            previewStack.innerHTML = "";
            RENDER_ORDER.forEach(part => {
                const numInName = state[part];
                const config = PART_CONFIG[part];
                if (!config) return;
                if (part === "base") {
                    if (numInName < 0) return;
                } else {
                    if (numInName <= 0) return;
                }
                const url = getPartUrl(part, numInName);
                if (!url) return;
                const img = document.createElement("img");
                img.src = url;
                img.onerror = () => img.remove();
                previewStack.appendChild(img);
            });
        }

        function saveBlook() {
            const blook = getBlookCode();
            try {
                let t = Object.values(function e(t = document.querySelector("body>div")) {
                    return Object.values(t)[1]?.children?.[0]?._owner?.stateNode ?
                        t : e(t.querySelector(":scope>div"));
                }())[1].children[0]._owner.stateNode;
                if (!t.state.unlocks) t.props.client.blook = blook;
                t.props.liveGameController.setVal({
                    path: `c/${t.props.client.name}/b`,
                    val: blook
                });
                Swal.fire({
                    title: "Applied!",
                    text: "Blook applied successfully.",
                    icon: "success",
                    confirmButtonColor: "#5b4bdb"
                });
            } catch (err) {
                Swal.fire({
                    title: "Error",
                    text: "Failed to apply blook",
                    icon: "error",
                    confirmButtonColor: "#5b4bdb"
                });
            }
        }
        renderStack();
        updateCodeDisplay();
        renderBlookEditorPresets();
        const clientPage = document.createElement("div");
        clientPage.className = classes.favoritesPage || "favoritesPage";
        Object.assign(clientPage.style, {
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "32px 24px",
            maxWidth: "1400px",
            margin: "0 auto",
            overflowY: "auto"
        });
        const clientStyle = document.createElement("style");
        clientStyle.textContent = `
.blook-header {
    text-align: center;
    margin-bottom: 8px;
}
.blook-title {
    font-size: 2.2em;
    font-weight: 800;
    color: #fff;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}
.blook-subtitle {
    color: #9ca3af;
    font-size: 0.95em;
}
.blook-main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: start;
}
@media (max-width: 1100px) {
    .blook-main-grid {
        grid-template-columns: 1fr;
    }
}
.blook-section {
    background: var(--background2);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0,0,0,.2);
}
.blook-section-full {
    grid-column: 1 / -1;
}
.blook-section-title {
    font-size: 1.05em;
    font-weight: 700;
    color: #fff;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
}
.blook-input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.blook-input {
    width: 100%;
    height: 42px;
    padding: 0 14px;
    background: rgba(0,0,0,.3);
    color: #fff;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 10px;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
    transition: all .2s ease;
}
.blook-input:focus {
    border-color: #8b5cf6;
    background: rgba(0,0,0,.4);
}
.blook-input::placeholder {
    color: #6b7280;
}
.color-input-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
}
.color-input-wrapper input[type="text"] {
    flex: 1;
}
.color-input-wrapper input[type="color"] {
    width: 42px;
    height: 42px;
    padding: 4px;
    cursor: pointer;
}
.blook-btn {
    height: 42px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    transition: all .2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
.blook-btn:active {
    transform: scale(0.98);
}
.blook-btn-primary {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    box-shadow: 0 4px 12px rgba(139,92,246,.3);
}
.blook-btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(139,92,246,.4);
}
.blook-btn-secondary {
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.15);
}
.blook-btn-secondary:hover {
    background: rgba(255,255,255,.12);
    border-color: rgba(255,255,255,.25);
}
.blook-btn-success {
    background: linear-gradient(135deg, #10b981, #059669);
}
.blook-btn-success:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(16,185,129,.3);
}
.preset-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    max-height: 500px;
    overflow-y: auto;
    padding-right: 4px;
}
.preset-grid::-webkit-scrollbar {
    width: 6px;
}
.preset-grid::-webkit-scrollbar-track {
    background: rgba(0,0,0,.2);
    border-radius: 10px;
}
.preset-grid::-webkit-scrollbar-thumb {
    background: rgba(139,92,246,.4);
    border-radius: 10px;
}
.preset-grid::-webkit-scrollbar-thumb:hover {
    background: rgba(139,92,246,.6);
}
.preset-card {
    background: rgba(0,0,0,.3);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 12px;
    padding: 14px;
    cursor: pointer;
    transition: all .2s ease;
    text-align: center;
}
.preset-card:hover {
    background: rgba(0,0,0,.4);
    border-color: #8b5cf6;
    transform: translateY(0px);
    box-shadow: 0 4px 12px rgba(139,92,246,.2);
}
.preset-img {
    width: 70px;
    height: 70px;
    object-fit: contain;
    margin: 0 auto 10px;
    display: block;
}
.preset-img-failed {
    display: none !important;
}
.preset-card-text-only {
    min-height: 180px;
}
.preset-card-text-only .preset-name {
    font-size: 16px;
    margin-bottom: 8px;
}
.preset-card-text-only .preset-rarity {
    font-size: 14px;
    margin-bottom: 12px;
}
.preset-name {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.preset-rarity {
    font-size: 12px;
    opacity: .8;
    margin-bottom: 10px;
}
.preset-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
}
.preset-btn {
    height: 30px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    font-size: 11px;
    font-weight: 600;
    transition: all .2s ease;
}
.preset-btn:active {
    transform: scale(0.95);
}
.preset-btn-load {
    background: #8b5cf6;
    color: #fff;
}
.preset-btn-load:hover {
    background: #7c3aed;
}
.preset-btn-delete {
    background: rgba(239,68,68,.2);
    color: #ef4444;
    border: 1px solid rgba(239,68,68,.3);
}
.preset-btn-delete:hover {
    background: rgba(239,68,68,.3);
}
.empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #6b7280;
}
.empty-state-icon {
    margin-bottom: 12px;
}
.icon-svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
}
.preview-box {
    background: linear-gradient(135deg, rgba(139,92,246,.08), rgba(124,58,237,.05));
    border: 1px solid rgba(139,92,246,.2);
    border-radius: 12px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    min-height: 220px;
    justify-content: center;
    position: relative;
    overflow: hidden;
}
.preview-blook {
    width: 110px;
    height: 110px;
    object-fit: contain;
}
.preview-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: none;
    z-index: 0;
}
.preview-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.preview-info {
    text-align: center;
    z-index: 1;
    position: relative;
}
.preview-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.12;
    border-radius: 12px;
    top: 0;
    left: 0;
}
.preview-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.preview-info {
    text-align: center;
}
.preview-name {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 6px;
}
.preview-rarity {
    font-size: 15px;
    font-weight: 600;
}
.preview-empty {
    color: #6b7280;
    font-size: 14px;
}
.button-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
.seed-display {
    background: rgba(0,0,0,.3);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 10px;
    padding: 12px;
    color: #9ca3af;
    font-size: 12px;
    word-break: break-all;
    max-height: 100px;
    overflow-y: auto;
    font-family: monospace;
}
.seed-display::-webkit-scrollbar {
    width: 4px;
}
.seed-display::-webkit-scrollbar-track {
    background: rgba(0,0,0,.2);
    border-radius: 10px;
}
.seed-display::-webkit-scrollbar-thumb {
    background: rgba(139,92,246,.4);
    border-radius: 10px;
}
.preview-seed-box {
    background: rgba(0,0,0,.3);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 10px;
    padding: 10px 12px;
    margin-top: 12px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 8px;
}
.preview-seed-label {
    font-size: 11px;
    font-weight: 600;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex-shrink: 0;
}
.preview-seed-text {
    font-size: 11px;
    color: #d1d5db;
    font-family: monospace;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
}
.preview-seed-copy {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: rgba(139,92,246,.15);
    border: 1px solid rgba(139,92,246,.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .2s ease;
    flex-shrink: 0;
}
.preview-seed-copy:hover {
    background: rgba(139,92,246,.25);
    border-color: rgba(139,92,246,.5);
    transform: scale(1.05);
}
.preview-seed-copy:active {
    transform: scale(0.95);
}
.preview-seed-copy svg {
    width: 16px;
    height: 16px;
    fill: #8b5cf6;
    transition: opacity 0.2s ease;
}
.preview-seed-copy.copied {
    background: rgba(16,185,129,.2);
    border-color: rgba(16,185,129,.4);
}
.preview-seed-copy.copied svg {
    fill: #10b981;
}
.url-display {
    background: rgba(0,0,0,.3);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 10px;
    padding: 12px;
    color: #9ca3af;
    font-size: 12px;
    word-break: break-all;
    max-height: 100px;
    overflow-y: auto;
    font-family: monospace;
}
.url-display::-webkit-scrollbar {
    width: 4px;
}
.url-display::-webkit-scrollbar-track {
    background: rgba(0,0,0,.2);
    border-radius: 10px;
}
.url-display::-webkit-scrollbar-thumb {
    background: rgba(139,92,246,.4);
    border-radius: 10px;
}
`;
        document.head.appendChild(clientStyle);
        const icons = {
            puzzle: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>`,
            edit: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
            save: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>`,
            palette: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
            code: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
            upload: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>`,
            eye: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,
            copy: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`,
            check: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`
        };
        const header = document.createElement("div");
        header.className = "blook-header";
        header.innerHTML = `
    <div class="blook-title">
        ${icons.puzzle}
        Blook Customizer
    </div>
    <div class="blook-subtitle">Create and manage custom blook presets</div>
`;
        const mainGrid = document.createElement("div");
        mainGrid.className = "blook-main-grid";
        const editorSection = document.createElement("div");
        editorSection.className = "blook-section";
        const editorTitle = document.createElement("div");
        editorTitle.className = "blook-section-title";
        editorTitle.innerHTML = `${icons.edit} Editor`;
        const inputGroup = document.createElement("div");
        inputGroup.className = "blook-input-group";
        const imgIn = document.createElement("input");
        imgIn.className = "blook-input";
        imgIn.placeholder = "Blook Image URL";
        const bgIn = document.createElement("input");
        bgIn.className = "blook-input";
        bgIn.placeholder = "Background URL";
        const nameIn = document.createElement("input");
        nameIn.className = "blook-input";
        nameIn.placeholder = "Blook Name";
        const rareIn = document.createElement("input");
        rareIn.className = "blook-input";
        rareIn.placeholder = "Rarity Name";
        const colorWrapper = document.createElement("div");
        colorWrapper.className = "color-input-wrapper";
        const colTextIn = document.createElement("input");
        colTextIn.type = "text";
        colTextIn.className = "blook-input";
        colTextIn.placeholder = "#ffffff or rgb(255,255,255)";
        colTextIn.value = "#ffffff";
        const colIn = document.createElement("input");
        colIn.type = "color";
        colIn.className = "blook-input";
        colIn.value = "#ffffff";
        colorWrapper.append(colTextIn, colIn);
        const actionButtonGroup = document.createElement("div");
        actionButtonGroup.className = "button-group";
        const applyBtn = document.createElement("button");
        applyBtn.className = "blook-btn blook-btn-primary";
        applyBtn.textContent = "Apply to Blook";
        const saveBtn = document.createElement("button");
        saveBtn.className = "blook-btn blook-btn-primary";
        saveBtn.textContent = "Save as Preset";
        actionButtonGroup.append(applyBtn, saveBtn);
        inputGroup.append(imgIn, bgIn, nameIn, rareIn, colorWrapper, actionButtonGroup);
        editorSection.append(editorTitle, inputGroup);
        const previewSection = document.createElement("div");
        previewSection.className = "blook-section";
        const previewTitle = document.createElement("div");
        previewTitle.className = "blook-section-title";
        previewTitle.innerHTML = `${icons.palette} Preview`;
        const previewBoxEl = document.createElement("div");
        previewBoxEl.className = "preview-box";
        previewBoxEl.innerHTML = `<div class="preview-empty">Preview will appear here</div>`;
        const previewSeedBox = document.createElement("div");
        previewSeedBox.className = "preview-seed-box";
        previewSeedBox.innerHTML = `
    <div class="preview-seed-label">Seed:</div>
    <div class="preview-seed-text" id="currentSeedText">-</div>
    <div class="preview-seed-copy" id="copySeedBtn">${icons.copy}</div>
`;
        const attachCopyListener = () => {
            const copySeedBtn = previewSeedBox.querySelector('#copySeedBtn');
            if (copySeedBtn) {
                copySeedBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const seedTextEl = previewSeedBox.querySelector('#currentSeedText');
                    if (!seedTextEl) return;
                    const seedText = seedTextEl.textContent;
                    if (seedText && seedText !== '-') {
                        navigator.clipboard.writeText(seedText).then(() => {
                            const originalHTML = copySeedBtn.innerHTML;
                            copySeedBtn.innerHTML = icons.check;
                            copySeedBtn.classList.add('copied');
                            setTimeout(() => {
                                copySeedBtn.innerHTML = originalHTML;
                                copySeedBtn.classList.remove('copied');
                            }, 1500);
                        }).catch((err) => {
                            console.error('Failed to copy:', err);
                            const textArea = document.createElement('textarea');
                            textArea.value = seedText;
                            textArea.style.position = 'fixed';
                            textArea.style.left = '-999999px';
                            document.body.appendChild(textArea);
                            textArea.select();
                            try {
                                document.execCommand('copy');
                                const originalHTML = copySeedBtn.innerHTML;
                                copySeedBtn.innerHTML = icons.check;
                                copySeedBtn.classList.add('copied');
                                setTimeout(() => {
                                    copySeedBtn.innerHTML = originalHTML;
                                    copySeedBtn.classList.remove('copied');
                                }, 1500);
                            } catch (e) {
                                console.error('Fallback copy failed:', e);
                            }
                            document.body.removeChild(textArea);
                        });
                    }
                });
            }
        };
        attachCopyListener();
        previewSection.append(previewTitle, previewBoxEl, previewSeedBox);
        const uploadSection = document.createElement("div");
        uploadSection.className = "blook-section blook-section-full";
        const uploadTitle = document.createElement("div");
        uploadTitle.className = "blook-section-title";
        uploadTitle.innerHTML = `${icons.upload} Upload to Blooket`;
        const uploadGroup = document.createElement("div");
        uploadGroup.className = "blook-input-group";
        const uploadButtonGroup = document.createElement("div");
        uploadButtonGroup.className = "button-group";
        uploadButtonGroup.style.gridTemplateColumns = "1fr 1fr";
        const uploadImageBtn = document.createElement("button");
        uploadImageBtn.className = "blook-btn blook-btn-primary";
        uploadImageBtn.textContent = "Upload Image";
        const copyUrlBtn = document.createElement("button");
        copyUrlBtn.className = "blook-btn blook-btn-secondary";
        copyUrlBtn.innerHTML = `${icons.copy} Copy URL`;
        uploadButtonGroup.append(uploadImageBtn, copyUrlBtn);
        const urlDisplay = document.createElement("div");
        urlDisplay.className = "url-display";
        urlDisplay.textContent = "Upload an image to see the URL here";
        uploadGroup.append(uploadButtonGroup, urlDisplay);
        uploadSection.append(uploadTitle, uploadGroup);
        const seedSection = document.createElement("div");
        seedSection.className = "blook-section blook-section-full";
        const seedTitle = document.createElement("div");
        seedTitle.className = "blook-section-title";
        seedTitle.innerHTML = `${icons.code} Import / Export`;
        const seedGroup = document.createElement("div");
        seedGroup.className = "blook-input-group";
        const seedIn = document.createElement("input");
        seedIn.className = "blook-input";
        seedIn.placeholder = "Paste seed to import";
        const seedButtonGroup = document.createElement("div");
        seedButtonGroup.className = "button-group";
        seedButtonGroup.style.gridTemplateColumns = "1fr 1fr 1fr";
        const loadSeedBtn = document.createElement("button");
        loadSeedBtn.className = "blook-btn blook-btn-primary";
        loadSeedBtn.textContent = "Import";
        const exportSeedBtn = document.createElement("button");
        exportSeedBtn.className = "blook-btn blook-btn-secondary";
        exportSeedBtn.textContent = "Export";
        const copySeedDisplayBtn = document.createElement("button");
        copySeedDisplayBtn.className = "blook-btn blook-btn-secondary";
        copySeedDisplayBtn.innerHTML = `${icons.copy} Copy`;
        seedButtonGroup.append(loadSeedBtn, exportSeedBtn, copySeedDisplayBtn);
        const seedDisplay = document.createElement("div");
        seedDisplay.className = "seed-display";
        seedDisplay.textContent = "Decoded seed will appear here";
        seedGroup.append(seedIn, seedButtonGroup, seedDisplay);
        seedSection.append(seedTitle, seedGroup);
        const presetsSection = document.createElement("div");
        presetsSection.className = "blook-section blook-section-full";
        const presetsTitle = document.createElement("div");
        presetsTitle.className = "blook-section-title";
        presetsTitle.innerHTML = `${icons.save} Saved Presets`;
        const presetGrid = document.createElement("div");
        presetGrid.className = "preset-grid";
        presetsSection.append(presetsTitle, presetGrid);
        mainGrid.append(editorSection, previewSection, uploadSection, seedSection, presetsSection);
        clientPage.append(header, mainGrid);
        const syncColors = (fromPicker) => {
            if (fromPicker) {
                colTextIn.value = colIn.value;
            } else {
                const text = colTextIn.value.trim();
                if (text.startsWith('#')) {
                    colIn.value = text;
                } else if (text.startsWith('rgb')) {
                    const match = text.match(/\d+/g);
                    if (match && match.length >= 3) {
                        const hex = '#' + match.slice(0, 3).map(x => {
                            const h = parseInt(x).toString(16);
                            return h.length === 1 ? '0' + h : h;
                        }).join('');
                        colIn.value = hex;
                        colTextIn.value = hex;
                    }
                }
            }
            updatePreview();
        };
        colIn.addEventListener('input', () => syncColors(true));
        colTextIn.addEventListener('input', () => syncColors(false));
        const updatePreview = () => {
            const img = imgIn.value.trim();
            const bg = bgIn.value.trim();
            const name = nameIn.value.trim();
            const rare = rareIn.value.trim();
            const col = colIn.value;
            if (!img && !name && !rare) {
                previewBoxEl.innerHTML = `<div class="preview-empty">Preview will appear here</div>`;
                document.getElementById('currentSeedText').textContent = '-';
                return;
            }
            let imageLoadFailed = false;
            previewBoxEl.innerHTML = `
        <div class="preview-wrapper">
            ${bg ? `<img class="preview-bg" src="${bg}" alt="bg" onerror="this.style.display='none'">` : ''}
            ${img ? `<img class="preview-blook" src="${img}" alt="blook" onerror="this.parentElement.parentElement.innerHTML='<div class=preview-empty>Images failed to load</div>'">` : ''}
        </div>
        <div class="preview-info">
            ${name ? `<div class="preview-name">${name}</div>` : ''}
            ${rare ? `<div class="preview-rarity" style="color: ${col}">${rare}</div>` : ''}
        </div>
    `;
            const data = {
                img: imgIn.value,
                bg: bgIn.value,
                name: nameIn.value,
                rare: rareIn.value,
                col: colIn.value
            };
            const seed = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
            const currentSeedTextEl = document.getElementById('currentSeedText');
            if (currentSeedTextEl) {
                currentSeedTextEl.textContent = seed;
                currentSeedTextEl.dataset.seed = seed;
            }
        };
        [imgIn, bgIn, nameIn, rareIn].forEach(input => {
            input.addEventListener('input', updatePreview);
        });
        const setPresetCookie = typeof setCookie !== 'undefined' ? setCookie :
            (name, value, days = 365) => {
                const expires = new Date(Date.now() + days * 864e5).toUTCString();
                document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; domain=.blooket.com; SameSite=Lax`;
            };
        const getPresetCookie = typeof getCookie !== 'undefined' ? getCookie :
            (name) => {
                const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                return match ? decodeURIComponent(match[2]) : null;
            };
        const loadPresets = () => {
            try {
                const data = getPresetCookie('blook_presets');
                return data ? JSON.parse(data) : [];
            } catch {
                return [];
            }
        };
        const savePresets = (presets) => {
            try {
                setPresetCookie('blook_presets', JSON.stringify(presets));
            } catch (e) {
                console.error("Failed to save presets:", e);
            }
        };
        const renderPresets = () => {
            const presets = loadPresets();
            if (presets.length === 0) {
                presetGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1">
                <div class="empty-state-icon">${icons.palette}</div>
                <div>No saved presets yet</div>
                <div style="font-size: 13px; margin-top: 8px">Create and save your first custom blook</div>
            </div>
        `;
                return;
            }
            presetGrid.innerHTML = "";
            presets.forEach((preset, idx) => {
                const card = document.createElement("div");
                card.className = "preset-card";
                const img = document.createElement("img");
                img.className = "preset-img";
                img.src = preset.img || '';
                img.alt = preset.name;
                img.onerror = () => {
                    img.classList.add('preset-img-failed');
                    card.classList.add('preset-card-text-only');
                    nameDiv.style.fontSize = '16px';
                    nameDiv.style.marginBottom = '8px';
                    rarityDiv.style.fontSize = '14px';
                    rarityDiv.style.marginBottom = '12px';
                };
                const nameDiv = document.createElement("div");
                nameDiv.className = "preset-name";
                nameDiv.textContent = preset.name || 'Unnamed';
                const rarityDiv = document.createElement("div");
                rarityDiv.className = "preset-rarity";
                rarityDiv.style.color = preset.col || '#fff';
                rarityDiv.textContent = preset.rare || 'Common';
                const actions = document.createElement("div");
                actions.className = "preset-actions";
                const loadBtn = document.createElement("button");
                loadBtn.className = "preset-btn preset-btn-load";
                loadBtn.textContent = "Load";
                loadBtn.onclick = (e) => {
                    e.stopPropagation();
                    loadFromData(preset);
                    Swal.fire({
                        toast: true,
                        position: "bottom",
                        icon: "success",
                        title: `"${preset.name}" loaded!`,
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true
                    });
                };
                const deleteBtn = document.createElement("button");
                deleteBtn.className = "preset-btn preset-btn-delete";
                deleteBtn.textContent = "Delete";
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    Swal.fire({
                        title: "Delete Preset?",
                        text: `"${preset.name}" will be permanently deleted.`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#ef4444",
                        cancelButtonColor: "#5b4bdb",
                        confirmButtonText: "Delete",
                        cancelButtonText: "Cancel"
                    }).then(result => {
                        if (!result.isConfirmed) return;
                        const updated = presets.filter((_, i) => i !== idx);
                        savePresets(updated);
                        renderPresets();
                    });
                };
                actions.append(loadBtn, deleteBtn);
                card.append(img, nameDiv, rarityDiv, actions);
                presetGrid.appendChild(card);
            });
        };
        const updateBlook = (img, bg, name, rare, col) => {
            const b = document.querySelector('img[class*="blook"]');
            const g = document.querySelector('img[class*="_rightBackground"]');
            const n = document.querySelector('div[style*="white-space: nowrap"]');
            const r = document.querySelector('div[class*="Rarity"]');
            if (b && img) b.src = img;
            if (g && bg) g.src = bg;
            if (r) {
                if (rare) r.textContent = rare;
                if (col) r.style.color = col;
            }
            if (n && name) {
                n.textContent = name;
                let s = 39;
                n.style.fontSize = s + "px";
                while (n.scrollWidth > n.parentElement.clientWidth && s > 1) {
                    n.style.fontSize = --s + "px";
                }
            }
        };
        const loadFromData = (data) => {
            imgIn.value = data.img || '';
            bgIn.value = data.bg || '';
            nameIn.value = data.name || '';
            rareIn.value = data.rare || '';
            colIn.value = data.col || '#ffffff';
            colTextIn.value = data.col || '#ffffff';
            updatePreview();
        };
        applyBtn.onclick = () => {
            try {
                updateBlook(imgIn.value, bgIn.value, nameIn.value, rareIn.value, colIn.value);
                Swal.fire({
                    toast: true,
                    position: "bottom",
                    icon: "success",
                    title: "Blook applied!",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true
                });
            } catch (err) {
                Swal.fire({
                    title: "Failed to apply blook",
                    text: err.message || "Something went wrong.",
                    icon: "error",
                    confirmButtonColor: "#5b4bdb"
                });
            }
        };
        saveBtn.onclick = () => {
            if (!nameIn.value.trim()) {
                Swal.fire({
                    title: "Please enter a blook name",
                    icon: "warning",
                    confirmButtonColor: "#5b4bdb"
                });
                return;
            }
            const preset = {
                img: imgIn.value,
                bg: bgIn.value,
                name: nameIn.value,
                rare: rareIn.value,
                col: colIn.value
            };
            const presets = loadPresets();
            presets.push(preset);
            savePresets(presets);
            renderPresets();
            Swal.fire({
                toast: true,
                position: "bottom",
                icon: "success",
                title: `"${nameIn.value.trim()}" saved!`,
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });
        };
        uploadImageBtn.onclick = async () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.onchange = async (e) => {
                const file = e.target.files[0];
                if (!file) return;
                try {
                    urlDisplay.textContent = "Uploading...";
                    const imgForm = new FormData();
                    imgForm.set("upload_preset", "normal");
                    imgForm.set("timestamp", Math.floor(Date.now() / 1000));
                    imgForm.set("file", file);
                    const imgResp = await fetch(
                        "https://api.cloudinary.com/v1_1/blooket/image/upload", {
                            method: "POST",
                            body: imgForm
                        }
                    );
                    if (!imgResp.ok) throw new Error("Upload failed");
                    const imgJson = await imgResp.json();
                    const uploadedUrl = "https://media.blooket.com/image/upload/" + imgJson.public_id;
                    urlDisplay.textContent = uploadedUrl;
                    Swal.fire({
                        toast: true,
                        position: "bottom",
                        icon: "success",
                        title: "Image uploaded!",
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true
                    });
                } catch (err) {
                    Swal.fire({
                        title: "Failed To Upload Image",
                        text: err.message || "Something went wrong uploading the image.",
                        icon: "error",
                        confirmButtonColor: "#8b5cf6"
                    });
                    console.error("Upload failed:", err);
                    urlDisplay.textContent = "Upload an image to see the URL here";
                }
            };
            fileInput.click();
        };
        copyUrlBtn.onclick = () => {
            const url = urlDisplay.textContent.trim();
            if (!url || url === "Upload an image to see the URL here" || url === "Uploading...") {
                return;
            }
            navigator.clipboard.writeText(url).then(() => {
                const originalHTML = copyUrlBtn.innerHTML;
                copyUrlBtn.innerHTML = `${icons.check} Copied`;
                copyUrlBtn.style.background = 'rgba(16,185,129,.2)';
                copyUrlBtn.style.borderColor = 'rgba(16,185,129,.3)';
                setTimeout(() => {
                    copyUrlBtn.innerHTML = originalHTML;
                    copyUrlBtn.style.background = '';
                    copyUrlBtn.style.borderColor = '';
                }, 1500);
            });
        };
        loadSeedBtn.onclick = () => {
            const seed = seedIn.value.trim();
            if (!seed) {
                Swal.fire({
                    title: "No Seed",
                    text: "Please paste a seed first.",
                    icon: "warning",
                    confirmButtonColor: "#8b5cf6"
                });
                return;
            }
            try {
                let decoded;
                try {
                    decoded = JSON.parse(seed);
                } catch {
                    decoded = JSON.parse(decodeURIComponent(escape(atob(seed))));
                }
                loadFromData(decoded);
                seedIn.value = "";
                seedDisplay.textContent = JSON.stringify(decoded, null, 2);
                Swal.fire({
                    toast: true,
                    position: "bottom",
                    icon: "success",
                    title: "Seed imported!",
                    showConfirmButton: false,
                    timer: 1800,
                    timerProgressBar: true
                });
            } catch {
                Swal.fire({
                    title: "Invalid Seed",
                    text: "The seed format is not valid. Please try again.",
                    icon: "error",
                    confirmButtonColor: "#8b5cf6"
                });
            }
        };
        exportSeedBtn.onclick = () => {
            const data = {
                img: imgIn.value,
                bg: bgIn.value,
                name: nameIn.value,
                rare: rareIn.value,
                col: colIn.value
            };
            const seed = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
            seedDisplay.textContent = JSON.stringify(data, null, 2);
            seedIn.value = seed;
            navigator.clipboard.writeText(seed).catch(() => {
                seedIn.select();
                document.execCommand('copy');
            });
        };
        copySeedDisplayBtn.onclick = () => {
            let seed = seedIn.value.trim();
            if (!seed) {
                const data = {
                    img: imgIn.value,
                    bg: bgIn.value,
                    name: nameIn.value,
                    rare: rareIn.value,
                    col: colIn.value
                };
                seed = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
            }
            if (!seed) {
                return;
            }
            navigator.clipboard.writeText(seed).then(() => {
                const originalHTML = copySeedDisplayBtn.innerHTML;
                copySeedDisplayBtn.innerHTML = `${icons.check} Copied`;
                copySeedDisplayBtn.style.background = 'rgba(16,185,129,.2)';
                copySeedDisplayBtn.style.borderColor = 'rgba(16,185,129,.3)';
                setTimeout(() => {
                    copySeedDisplayBtn.innerHTML = originalHTML;
                    copySeedDisplayBtn.style.background = '';
                    copySeedDisplayBtn.style.borderColor = '';
                }, 1500);
            });
        };
        seedIn.addEventListener('input', () => {
            const seed = seedIn.value.trim();
            if (!seed) {
                seedDisplay.textContent = "Decoded seed will appear here";
                return;
            }
            try {
                let decoded;
                try {
                    decoded = JSON.parse(seed);
                } catch {
                    decoded = JSON.parse(decodeURIComponent(escape(atob(seed))));
                }
                seedDisplay.textContent = JSON.stringify(decoded, null, 2);
            } catch {
                seedDisplay.textContent = "Invalid seed format";
            }
        });
        renderPresets();
        const modulePage = document.createElement("div");
        modulePage.className = classes.favoritesPage || "favoritesPage";

        function minifyJS(code) {
            try {
                return code
                    .replace(/\/\/.*$/gm, '')
                    .replace(/\/\*[\s\S]*?\*\//g, '')
                    .replace(/\s+/g, ' ')
                    .replace(/\s*([{}();,:<>!=+\-*/%&|?])\s*/g, '$1')
                    .replace(/\b(return|var|let|const|if|else|for|while|function|class)\s+/g, '$1 ')
                    .trim();
            } catch (e) {
                console.error('Minification error:', e);
                return code;
            }
        }
        Object.assign(modulePage.style, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "28px",
            padding: "40px 20px",
            overflowY: "auto",
            overflowX: "hidden",
            boxSizing: "border-box"
        });
        const moduleStyle = document.createElement("style");
        moduleStyle.textContent = `
.moduleCard {
    background: linear-gradient(135deg, rgba(30, 25, 50, 0.8), rgba(20, 18, 35, 0.9));
    border-radius: 18px;
    padding: 36px;
    box-shadow: 0 8px 24px rgba(0,0,0,.25);
    border: 1px solid rgba(143,107,255,.15);
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 650px;
}
.moduleBtn {
    padding: 15px 36px;
    border-radius: 10px;
    font-size: 1.05em;
    font-weight: 700;
    cursor: pointer;
    border: none;
    color: #fff;
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    box-shadow: 0 4px 12px rgba(99,102,241,.3);
    transition: all .2s ease;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.moduleBtn:hover {
    background: linear-gradient(135deg, #4f46e5, #4338ca);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(99,102,241,.4);
}
.moduleBtn:active {
    transform: translateY(0);
}
.moduleSecondaryBtn {
    background: linear-gradient(135deg, #374151, #1f2937);
    border: 1px solid rgba(255,255,255,.1);
    box-shadow: 0 4px 12px rgba(0,0,0,.2);
}
.moduleSecondaryBtn:hover {
    background: linear-gradient(135deg, #4b5563, #374151);
    border-color: rgba(255,255,255,.15);
}
.moduleDangerBtn {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    box-shadow: 0 4px 12px rgba(239,68,68,.3);
}
.moduleDangerBtn:hover {
    background: linear-gradient(135deg, #dc2626, #b91c1c);
    box-shadow: 0 6px 16px rgba(239,68,68,.4);
}
.buttonGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 14px;
    width: 100%;
}
.buttonGrid.centered {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
}
.clearAllContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 4px;
}
.clearAllBtn {
    max-width: 300px;
}
.moduleManageBtn {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    box-shadow: 0 4px 12px rgba(139,92,246,.3);
}
.moduleManageBtn:hover {
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    box-shadow: 0 6px 16px rgba(139,92,246,.4);
}
.swal2-popup {
    background: #1a1625 !important;
    border: 1px solid rgba(143,107,255,.2) !important;
}
.swal2-title {
    color: #fff !important;
}
.swal2-html-container {
    color: rgba(255,255,255,.85) !important;
}
.swal2-container .moduleItemCard {
    background: linear-gradient(135deg, rgba(40, 35, 60, 0.6), rgba(30, 25, 50, 0.8));
    border: 1px solid rgba(143,107,255,.2);
    border-radius: 14px;
    padding: 22px;
    margin-bottom: 14px;
    transition: all .2s ease;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}
.swal2-container .moduleItemCard:hover {
    border-color: rgba(143,107,255,.4);
    background: linear-gradient(135deg, rgba(50, 45, 70, 0.7), rgba(40, 35, 60, 0.9));
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0,0,0,.3);
}
.swal2-container .moduleItemInfo {
    flex: 1;
}
.swal2-container .moduleItemActions {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
}
.swal2-container .moduleActionBtn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease;
}
.swal2-container .moduleEditBtn {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    box-shadow: 0 2px 8px rgba(99,102,241,.3);
}
.swal2-container .moduleEditBtn:hover {
    background: linear-gradient(135deg, #4f46e5, #4338ca);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99,102,241,.4);
}
.swal2-container .moduleDeleteBtn {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    box-shadow: 0 2px 8px rgba(239,68,68,.3);
}
.swal2-container .moduleDeleteBtn:hover {
    background: linear-gradient(135deg, #dc2626, #b91c1c);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(239,68,68,.4);
}
.swal2-container .moduleItemTitle {
    font-size: 1.15em;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
}
.swal2-container .moduleItemDesc {
    color: rgba(255,255,255,.65);
    font-size: 0.92em;
    line-height: 1.5;
    margin-bottom: 10px;
}
.swal2-container .moduleItemType {
    display: inline-block;
    padding: 5px 12px;
    background: rgba(99,102,241,.2);
    border: 1px solid rgba(99,102,241,.35);
    border-radius: 14px;
    font-size: 0.78em;
    font-weight: 700;
    color: #a5b4fc;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.swal2-confirm, .swal2-deny, .swal2-cancel {
    font-weight: 600 !important;
    padding: 10px 24px !important;
    border-radius: 8px !important;
}
.swal2-select {
    color: #000 !important;
    background: #fff !important;
}
.helpBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(99,102,241,.15);
    border: 1.5px solid rgba(99,102,241,.3);
    color: #a5b4fc;
    font-size: 1em;
    font-weight: 700;
    cursor: pointer;
    transition: all .2s ease;
    margin-left: 10px;
    vertical-align: middle;
}
.helpBtn:hover {
    background: rgba(99,102,241,.25);
    border-color: rgba(99,102,241,.5);
    transform: scale(1.1);
}
.docContainer {
    max-height: 500px;
    overflow-y: auto;
    text-align: left;
    padding: 20px;
    background: rgba(20, 18, 35, 0.4);
    border-radius: 12px;
    margin-bottom: 20px;
}
.docSection {
    margin-bottom: 24px;
}
.docTitle {
    font-size: 1.3em;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
}
.docSubtitle {
    font-size: 1.1em;
    font-weight: 600;
    color: #a5b4fc;
    margin-bottom: 8px;
    margin-top: 16px;
}
.docText {
    color: rgba(255,255,255,.75);
    line-height: 1.6;
    margin-bottom: 12px;
}
.docCode {
    background: rgba(0,0,0,.3);
    border: 1px solid rgba(99,102,241,.2);
    border-radius: 8px;
    padding: 12px;
    font-family: monospace;
    font-size: 0.9em;
    color: #e0e7ff;
    overflow-x: auto;
    margin: 8px 0;
}
.docHighlight {
    color: #a5b4fc;
    font-weight: 600;
}
.docList {
    margin-left: 20px;
    color: rgba(255,255,255,.75);
    line-height: 1.8;
}
`;
        document.head.appendChild(moduleStyle);
        const modTitle = document.createElement("div");
        modTitle.innerHTML = `
    <div style="
        font-size:2.5em;
        font-weight:800;
        text-align:center;
        color:#fff;
        margin-bottom: 10px;
        text-shadow: 0 2px 8px rgba(143,107,255,.3);
    ">Custom Module Manager</div>
    <div style="
        opacity:.7;
        font-weight:600;
        text-align:center;
        font-size:1.05em;
        color:rgba(255,255,255,.85);
    ">
        Create and manage your custom modules.<br>
        Refresh to update custom modules.
    </div>
`;
        const buttonGrid = document.createElement("div");
        buttonGrid.className = "buttonGrid";
        const updateButtonGrid = () => {
            const moduleCount = (CookieHelper.getCookie('custom_modules_list') || []).length;
            const buttonCount = moduleCount > 0 ? 3 : 3;
            if (buttonCount <= 3) {
                buttonGrid.classList.add('centered');
            } else {
                buttonGrid.classList.remove('centered');
            }
        };
        const createBtn = document.createElement("button");
        createBtn.className = "moduleBtn";
        createBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
    Create Module
`;
        createBtn.onclick = async () => {
            const {
                value: formValues,
                isDismissed
            } = await Sweetalert2.fire({
                title: '<span>Create New Module</span><button class="helpBtn" id="help-btn" type="button">?</button>',
                html: '<input id="swal-name" class="swal2-input" placeholder="Module Name" style="margin-bottom: 10px;">' +
                    '<textarea id="swal-desc" class="swal2-textarea" placeholder="Description (optional)" style="height: 80px; margin-bottom: 10px;"></textarea>' +
                    '<select id="swal-type" class="swal2-select" style="background: #1a1625 !important; border: 1px solid #fff !important; color: rgba(255,255,255,.75) !important; padding: 10px 15px; border-radius: 8px; line-height: 1.6;"><option value="execute" style="background: #1a1625; color: #e0e7ff;">Execute Button</option><option value="toggle" style="background: #1a1625; color: #e0e7ff;">Toggle</option><option value="edit" style="background: #1a1625; color: #e0e7ff; margin-bottom: 10px;">Value Edit</option></select>' +
                    '<textarea id="swal-code" class="swal2-textarea" placeholder="JavaScript Code" style="height: 150px; font-family: monospace;"></textarea>',
                focusConfirm: false,
                width: '600px',
                didOpen: () => {
                    const helpBtn = document.getElementById('help-btn');
                    if (helpBtn) {
                        helpBtn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            Sweetalert2.close();
                            showDocumentation();
                        });
                    }
                },
                preConfirm: () => {
                    const name = document.getElementById('swal-name').value;
                    const code = document.getElementById('swal-code').value;
                    if (!name || !code) {
                        Sweetalert2.showValidationMessage('Name and code are required');
                        return false;
                    }
                    return {
                        name: name,
                        description: document.getElementById('swal-desc').value,
                        type: document.getElementById('swal-type').value,
                        code: minifyJS(code)
                    };
                }
            });
            if (formValues) {
                const saved = CookieHelper.getCookie('custom_modules_list') || [];
                saved.push(formValues);
                CookieHelper.setCookie('custom_modules_list', saved);
                updateButtonGrid();
                refreshClearButton();
                refreshCustomModulesUI();
                Sweetalert2.fire('Success', 'Module created successfully', 'success');
            }
        };
        const manageBtn = document.createElement("button");
        manageBtn.className = "moduleBtn moduleManageBtn";
        manageBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
    Manage Modules
`;
        manageBtn.onclick = () => {
            showModuleManager();
        };
        const importBtn = document.createElement("button");
        importBtn.className = "moduleBtn moduleSecondaryBtn";
        importBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Import
`;
        importBtn.onclick = async () => {
            const {
                value: code
            } = await Sweetalert2.fire({
                title: 'Import Module(s)',
                input: 'textarea',
                inputPlaceholder: 'Paste your module JSON here...',
                width: '600px',
                inputAttributes: {
                    style: 'font-family: monospace; height: 200px;'
                }
            });
            if (code) {
                try {
                    const parsed = JSON.parse(code);
                    const saved = CookieHelper.getCookie('custom_modules_list') || [];
                    if (Array.isArray(parsed)) saved.push(...parsed);
                    else saved.push(parsed);
                    CookieHelper.setCookie('custom_modules_list', saved);
                    updateButtonGrid();
                    refreshClearButton();
                    Sweetalert2.fire('Success', 'Module(s) imported successfully', 'success');
                    refreshCustomModulesUI();
                } catch (e) {
                    Sweetalert2.fire('Error', 'Invalid JSON format', 'error');
                }
            }
        };
        const exportBtn = document.createElement("button");
        exportBtn.className = "moduleBtn moduleSecondaryBtn";
        exportBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
    Export
`;
        exportBtn.onclick = () => {
            const modules = JSON.stringify(CookieHelper.getCookie('custom_modules_list') || []);
            Sweetalert2.fire({
                title: 'Export Your Modules',
                input: 'textarea',
                inputValue: modules,
                width: '600px',
                inputAttributes: {
                    style: 'font-family: monospace; height: 200px;',
                    readonly: true
                },
                showCancelButton: true,
                confirmButtonText: 'Copy to Clipboard',
                preConfirm: () => {
                    navigator.clipboard.writeText(modules);
                    return true;
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Sweetalert2.fire('Copied', 'Modules copied to clipboard', 'success');
                }
            });
        };
        buttonGrid.append(createBtn, manageBtn, importBtn, exportBtn);
        const clearAllContainer = document.createElement("div");
        clearAllContainer.className = "clearAllContainer";
        const clearBtn = document.createElement("button");
        clearBtn.className = "moduleBtn moduleDangerBtn clearAllBtn";
        clearBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
    Clear All Modules
`;
        clearBtn.onclick = async () => {
            const result = await Sweetalert2.fire({
                title: 'Delete All Modules?',
                text: 'This action cannot be undone',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ef4444',
                cancelButtonColor: '#4b5563',
                confirmButtonText: 'Delete All'
            });
            if (result.isConfirmed) {
                CookieHelper.setCookie('custom_modules_list', []);
                updateButtonGrid();
                clearAllContainer.style.display = 'none';
                Sweetalert2.fire('Deleted', 'All modules have been removed', 'success');
            }
        };

        function refreshClearButton() {
            const modules = CookieHelper.getCookie('custom_modules_list') || [];
            if (modules.length > 0) {
                clearAllContainer.style.display = 'flex';
            } else {
                clearAllContainer.style.display = 'none';
            }
        }
        clearAllContainer.appendChild(clearBtn);

        function refreshCustomModulesUI() {
            const customModules = CookieHelper.getCookie('custom_modules_list') || [];
            const customCheats = customModules.map((module, index) => {
                const defaultDescription = module.description || `Custom Module #${index + 1}`;
                if (module.type === 'execute') {
                    return {
                        name: module.name,
                        description: defaultDescription,
                        run: createFunctionFromCode(module.code)
                    };
                } else if (module.type === 'toggle') {
                    return {
                        name: module.name,
                        description: defaultDescription,
                        type: 'toggle',
                        enabled: false,
                        data: null,
                        run: createFunctionFromCode(module.code)
                    };
                } else if (module.type === 'edit') {
                    return {
                        name: module.name,
                        description: defaultDescription,
                        inputs: [{
                            name: 'Value',
                            type: 'string'
                        }],
                        run: createFunctionFromCode(module.code, 'value')
                    };
                }
            });
            cheats.custom_modules.cheats = customCheats;
            if (customModulesPageRef && customModulesCheatsList) {
                customModulesCheatsList.innerHTML = '';
                for (const cheat of customCheats) {
                    const cheatElement = document.createElement("div");
                    const cheatTop = document.createElement("div");
                    cheatTop.className = classes.cheatTop;
                    const cheatInfo = document.createElement("div");
                    cheatInfo.className = classes.cheatInfo;
                    const cheatName = document.createElement("span");
                    cheatName.innerText = cheat.name;
                    cheatName.className = classes.cheatName;
                    const cheatDescription = document.createElement("span");
                    cheatDescription.innerText = cheat.description;
                    cheatDescription.className = classes.cheatDescription;
                    cheatInfo.append(cheatName, cheatDescription);
                    cheatElement.append(cheatTop);
                    const inputs = [];
                    if (Array.isArray(cheat.inputs)) {
                        const cheatInputs = document.createElement("div");
                        cheatInputs.className = classes.cheatInputs;
                        for (const input of cheat.inputs) {
                            const inputElement = document.createElement("div");
                            const inputName = document.createElement("span");
                            inputName.innerText = input.name;
                            inputElement.append(inputName);
                            cheatInputs.append(inputElement);
                            if (input.type == "options") {
                                const inputField = document.createElement("select");
                                inputField.dataset[datasets.type] = "options";
                                inputElement.append(inputField);
                                inputs.push(inputField);
                                let curField = inputField;
                                const updateOptions = () => {
                                    let choose = input.options;
                                    const newInputField = document.createElement("select");
                                    newInputField.dataset[datasets.type] = "options";
                                    inputs[inputs.indexOf(curField)] = newInputField;
                                    curField.replaceWith(newInputField);
                                    curField = newInputField;
                                    if (typeof choose == "function")
                                        try {
                                            choose = choose();
                                        } catch {
                                            choose = []
                                        }
                                    if (choose instanceof Promise) {
                                        const waiting = document.createElement("option");
                                        waiting.value = '""';
                                        waiting.innerHTML = "Loading Options...";
                                        curField.append(waiting);
                                        choose.then((choices) => {
                                            if (choices?.length > 0) {
                                                curField.innerHTML = "";
                                                for (const choice of choices) {
                                                    const option = document.createElement("option");
                                                    option.value = JSON.stringify(choice?.value ?? choice);
                                                    option.innerHTML = choice?.name || choice;
                                                    curField.append(option);
                                                }
                                            } else {
                                                const newInputField = document.createElement("input");
                                                inputs[inputs.indexOf(curField)] = newInputField;
                                                curField.replaceWith(newInputField);
                                                newInputField.dataset[datasets.type] = "string";
                                                newInputField.placeholder = input.name;
                                                curField = newInputField;
                                            }
                                        });
                                    } else {
                                        if (choose?.length > 0) {
                                            for (const choice of choose) {
                                                const option = document.createElement("option");
                                                option.value = JSON.stringify(choice?.value ?? choice);
                                                option.innerHTML = choice?.name || choice;
                                                curField.append(option);
                                            }
                                        } else {
                                            const newInputField = document.createElement("input");
                                            inputs[inputs.indexOf(curField)] = newInputField;
                                            curField.replaceWith(newInputField);
                                            newInputField.dataset[datasets.type] = "string";
                                            newInputField.placeholder = input.name;
                                            curField = newInputField;
                                        }
                                    }
                                };
                                updateOptions();
                            } else {
                                const inputField = document.createElement("input");
                                inputField.dataset[datasets.type] = input.type;
                                if (input.type == "number") {
                                    inputField.type = "number";
                                    inputField.min = input.min;
                                    inputField.max = input.max;
                                    inputField.value = input.value || (input.min ?? 0);
                                }
                                inputField.placeholder = input.name;
                                inputElement.append(inputField);
                                inputs.push(inputField);
                            }
                        }
                        cheatElement.append(cheatInputs);
                    }
                    cheatTop.append(cheatInfo);
                    const runButton = document.createElement("div");
                    runButton.className = classes.runCheat;
                    if (cheat.type == "toggle") {
                        runButton.innerText = "Toggle On";
                        runButton.classList.add(classes.toggleCheat);
                    } else {
                        runButton.innerText = "Execute";
                    }
                    runButton.onclick = () => {
                        try {
                            cheat.run.apply(
                                cheat,
                                inputs.map((x) => (x.dataset[datasets.type] == "number" ? parseFloat("0" + x.value) : x.dataset[datasets.type] == "options" ? JSON.parse(x.value) : x.value))
                            );
                            if (cheat.type == "toggle") {
                                cheat.enabled = !cheat.enabled;
                                runButton.innerText = "Toggle " + (cheat.enabled ? "Off" : "On");
                                runButton.classList.toggle(classes.active, cheat.enabled);
                                Logs.addLog(`Toggled "${cheat.name}" ${cheat.enabled ? "on" : "off"}`, cheat.enabled ? "var(--toggleOn)" : "var(--toggleOff)");
                            } else {
                                Logs.addLog(`Ran "${cheat.name}"`, "var(--highlight)");
                            }
                        } catch (err) {
                            Logs.addLog(`Error running "${cheat.name}": ${err.message}`, "var(--error)");
                        }
                    };
                    cheatTop.append(runButton);
                    customModulesCheatsList.append(cheatElement);
                }
            }
        }

        function showDocumentation(editIndex = null) {
            const docHTML = `
        <div class="docContainer">
            <div class="docSection">
                <div class="docTitle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    Custom Module Documentation
                </div>
                <div class="docText">
                    Learn how to create custom modules for your cheat menu. There are three types of modules available:
                </div>
            </div>
            <div class="docSection">
                <div class="docSubtitle">1. Execute Button</div>
                <div class="docText">
                    A simple button that runs code once when clicked. Perfect for one-time actions.
                </div>
                <div class="docText"><span class="docHighlight">Key points:</span></div>
                <ul class="docList">
                    <li>Code runs immediately when button is clicked</li>
                    <li>No state management needed</li>
                    <li>Use for instant actions like toggling dark mode or showing alerts</li>
                </ul>
                <div class="docCode">
function() {
    let darkMode = document.getElementById('nightify');
    if (darkMode) {
        darkMode.remove();
    } else {
        let style = document.createElement('style');
        style.id = 'nightify';
        style.textContent = 'html { filter: invert(100%) hue-rotate(180deg); }';
        document.head.appendChild(style);
    }
}</div>
            </div>
            <div class="docSection">
                <div class="docSubtitle">2. Toggle</div>
                <div class="docText">
                    A button that can be turned on and off. Great for continuous actions or intervals.
                </div>
                <div class="docText"><span class="docHighlight">Important properties:</span></div>
                <ul class="docList">
                    <li><span class="docHighlight">this.enabled</span> - Boolean indicating if toggle is on/off</li>
                    <li><span class="docHighlight">this.data</span> - Store data like intervals or timers</li>
                    <li>Check <span class="docHighlight">this.enabled</span> to determine current state</li>
                    <li>Set <span class="docHighlight">this.enabled</span> to true when turning on</li>
                    <li>Set <span class="docHighlight">this.enabled</span> to false when turning off</li>
                    <li>Clean up intervals/timers when disabled</li>
                </ul>
                <div class="docCode">
function() {
    if (!this.enabled) {
        this.enabled = true;
        this.data = setInterval(() => {
            console.log('Running...');
        }, 100);
    } else {
        this.enabled = false;
        clearInterval(this.data);
        this.data = null;
    }
}</div>
            </div>
            <div class="docSection">
                <div class="docSubtitle">3. Value Edit</div>
                <div class="docText">
                    A module that accepts user input before running. Perfect for setting custom values.
                </div>
                <div class="docText"><span class="docHighlight">Usage:</span></div>
                <ul class="docList">
                    <li><span class="docHighlight">function(parameterName)</span> - Your function receives the user's input as a parameter</li>
                    <li><span class="docHighlight">parameterName</span> - Can be any name you choose (e.g., amount, value, number)</li>
                    <li>User enters a value in a prompt before the module executes</li>
                    <li>The entered value is passed directly to your function</li>
                </ul>
                <div class="docText"><span class="docHighlight">Key points:</span></div>
                <ul class="docList">
                    <li>Great for setting game values, amounts, or custom settings</li>
                    <li>Parameter can be used anywhere in your function code</li>
                    <li>Input type is determined by module configuration (number, string, etc.)</li>
                </ul>
                <div class="docCode">
function(amount) {
    let stateNode = getStateNode();
    stateNode.setState({
        crypto: amount,
        crypto2: amount
    });
    stateNode.props.liveGameController.setVal({
        path: \`c/\${stateNode.props.client.name}/cr\`,
        val: amount
    });
}</div>
            </div>
            <div class="docSection">
                <div class="docSubtitle">Code Format Options</div>
                <div class="docText">
                    You can write your code in any of these formats:
                </div>
                <ul class="docList">
                    <li><span class="docHighlight">Function declaration:</span> function() { /* code */ } or function(param) { /* code */ }</li>
                    <li><span class="docHighlight">Arrow function:</span> () => { /* code */ } or (param) => { /* code */ }</li>
                    <li><span class="docHighlight">Function body only:</span> Just write the code without function wrapper</li>
                </ul>
                <div class="docText">
                    All three formats work equally well - choose whichever you prefer!
                </div>
            </div>
            <div class="docSection">
                <div class="docSubtitle">Tips & Best Practices</div>
                <ul class="docList">
                    <li>Test your modules in a safe environment first</li>
                    <li>Always clean up intervals and timers in toggle modules</li>
                    <li>Use descriptive names and descriptions for your modules</li>
                    <li>For toggles, always check <span class="docHighlight">this.enabled</span> first</li>
                    <li>Store interval IDs in <span class="docHighlight">this.data</span> for toggle modules</li>
                </ul>
            </div>
        </div>
    `;
            Sweetalert2.fire({
                title: 'Module Documentation',
                html: docHTML,
                width: '750px',
                showConfirmButton: true,
                confirmButtonText: 'Back',
                confirmButtonColor: '#6366f1',
                customClass: {
                    popup: 'doc-popup'
                }
            }).then(() => {
                if (editIndex !== null) {
                    editModule(editIndex);
                } else {
                    createBtn.click();
                }
            });
        }

        function showModuleManager() {
            const modules = CookieHelper.getCookie('custom_modules_list') || [];
            if (modules.length === 0) {
                Sweetalert2.fire({
                    title: 'No Modules',
                    text: 'You haven\'t created any modules yet',
                    icon: 'info',
                    confirmButtonColor: '#6366f1'
                });
                return;
            }
            let moduleListHTML = '<div style="max-height: 450px; overflow-y: auto; padding-right: 8px;">';
            modules.forEach((module, index) => {
                const escapedName = module.name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const escapedDesc = (module.description || 'No description').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                moduleListHTML += `
            <div class="moduleItemCard">
                <div class="moduleItemInfo">
                    <div class="moduleItemTitle">${escapedName}</div>
                    <div class="moduleItemDesc">${escapedDesc}</div>
                    <span class="moduleItemType">${module.type}</span>
                </div>
                <div class="moduleItemActions">
                    <button class="moduleActionBtn moduleEditBtn" data-index="${index}" data-action="edit">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button class="moduleActionBtn moduleDeleteBtn" data-index="${index}" data-action="delete">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
            });
            moduleListHTML += '</div>';
            Sweetalert2.fire({
                title: 'Manage Modules',
                html: moduleListHTML,
                width: '700px',
                showConfirmButton: false,
                showCloseButton: true,
                confirmButtonColor: '#6366f1',
                didOpen: () => {
                    const actionBtns = document.querySelectorAll('.moduleActionBtn');
                    actionBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const index = parseInt(btn.dataset.index);
                            const action = btn.dataset.action;
                            if (action === 'edit') {
                                editModule(index);
                            } else if (action === 'delete') {
                                deleteModule(index);
                            }
                        });
                    });
                }
            });
        }
        async function editModule(index) {
            const modules = CookieHelper.getCookie('custom_modules_list') || [];
            const module = modules[index];
            const {
                value: formValues,
                isDismissed
            } = await Sweetalert2.fire({
                title: '<span>Edit Module</span><button class="helpBtn" id="help-btn-edit" type="button">?</button>',
                html: `<input id="swal-name" class="swal2-input" placeholder="Module Name" value="${module.name.replace(/"/g, '&quot;')}" style="margin-bottom: 10px;">` +
                    `<textarea id="swal-desc" class="swal2-textarea" placeholder="Description (optional)" style="height: 80px; margin-bottom: 10px;">${module.description || ''}</textarea>` +
                    `<select id="swal-type" class="swal2-select" style="margin-bottom: 10px;">
                <option value="execute" ${module.type === 'execute' ? 'selected' : ''}>Execute Button</option>
                <option value="toggle" ${module.type === 'toggle' ? 'selected' : ''}>Toggle</option>
                <option value="edit" ${module.type === 'edit' ? 'selected' : ''}>Value Edit</option>
            </select>` +
                    `<textarea id="swal-code" class="swal2-textarea" placeholder="JavaScript Code" style="height: 150px; font-family: monospace;">${module.code}</textarea>`,
                focusConfirm: false,
                width: '600px',
                confirmButtonColor: '#6366f1',
                didOpen: () => {
                    const helpBtn = document.getElementById('help-btn-edit');
                    if (helpBtn) {
                        helpBtn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            Sweetalert2.close();
                            showDocumentation(index);
                        });
                    }
                },
                preConfirm: () => {
                    const name = document.getElementById('swal-name').value;
                    const code = document.getElementById('swal-code').value;
                    if (!name || !code) {
                        Sweetalert2.showValidationMessage('Name and code are required');
                        return false;
                    }
                    return {
                        name: name,
                        description: document.getElementById('swal-desc').value,
                        type: document.getElementById('swal-type').value,
                        code: minifyJS(code)
                    };
                }
            });
            if (formValues) {
                modules[index] = formValues;
                CookieHelper.setCookie('custom_modules_list', modules);
                refreshCustomModulesUI();
                await Sweetalert2.fire({
                    title: 'Updated',
                    text: 'Module updated successfully',
                    icon: 'success',
                    confirmButtonColor: '#6366f1'
                });
                showModuleManager();
            } else if (isDismissed) {
                showModuleManager();
            }
        }
        async function deleteModule(index) {
            const modules = CookieHelper.getCookie('custom_modules_list') || [];
            const module = modules[index];
            const confirm = await Sweetalert2.fire({
                title: 'Delete Module?',
                text: `Are you sure you want to delete "${module.name}"?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ef4444',
                cancelButtonColor: '#4b5563',
                confirmButtonText: 'Delete'
            });
            if (confirm.isConfirmed) {
                modules.splice(index, 1);
                CookieHelper.setCookie('custom_modules_list', modules);
                refreshCustomModulesUI();
                updateButtonGrid();
                refreshClearButton();
                await Sweetalert2.fire({
                    title: 'Deleted',
                    text: 'Module has been removed',
                    icon: 'success',
                    confirmButtonColor: '#6366f1'
                });
                showModuleManager();
            } else {
                showModuleManager();
            }
        }
        updateButtonGrid();
        refreshClearButton();
        const deprecatedBanner = document.createElement("div");
        Object.assign(deprecatedBanner.style, {
            width: "100%",
            maxWidth: "650px",
            padding: "14px 18px",
            borderRadius: "10px",
            background: "rgba(239,68,68,0.12)",
            border: "1.5px solid rgba(239,68,68,0.5)",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            alignSelf: "center",
        });
        deprecatedBanner.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
         stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"
         stroke-linejoin="round" style="flex-shrink:0;margin-top:2px">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
    <div>
        <div style="color:#ef4444;font-weight:800;font-size:1em;margin-bottom:4px;">
            Deprecated
        </div>
        <div style="color:rgba(255,255,255,0.7);font-size:0.88em;line-height:1.6;">
            Custom Modules is deprecated feature and will no longer recieve updates.
            Please do not report bugs, provide suggestions, or request support.
        </div>
    </div>
`;
        modulePage.append(modTitle, buttonGrid, clearAllContainer, deprecatedBanner);
        const licenseMessage = document.createElement("div");
        licenseMessage.className = classes.licenseMessage;
        licenseMessage.innerHTML = `<i class="fas fa-file-alt" style="line-height: 1;aspect-ratio: 1 / 1;height: 20px;display: inline-grid;place-items: center;"></i> This script is licensed under <a style="color: var(--highlight);" target="_blank" href="https://www.gnu.org/licenses/agpl-3.0.en.html">AGPL-3.0</a>`;
        const copyrightTag = document.createElement("span");
        copyrightTag.className = classes.copyrightTag;
        copyrightTag.innerText = `Copyright © ${new Date().getFullYear()} Xenostopic`;
        const codingCredits = document.createElement("ul");
        codingCredits.className = classes.codingCredits;
        codingCredits.append(createCredit("Owner", "Xenostopic"));
        codingCredits.append(createCredit("Founder", "Xenostopic"));
        codingCredits.append(createCredit("Full GUI Dev", "Cathead+Xenostopic"));
        codingCredits.append(createCredit("Module Dev", "Xenostopic+Xenostopic+Lil Skittle"));
        codingCredits.append(createCredit("Design Dev", "Lil Skittle+Xenostopic"));
        codingCredits.append(createCredit("Contributor", "DannyDan"));
        codingCredits.append(createCredit("Original Blooket Cheats", 'gliz <i class="fas fa-long-arrow-alt-right"></i> Minesraft2 <i class="fas fa-long-arrow-alt-right"></i> Xenostopic'));
        const creditLinks = document.createElement("ul");
        creditLinks.className = classes.creditLinks;
        creditLinks.append(createCredit("Our Github", '<a target="_blank" href="https://x-gui.netlify.app">Xenostopic CHEATS/GITHUB</a>'));
        creditLinks.append(createCredit("Our Website", '<a target="_blank" href="#">More Info/Website</a>'));
        creditLinks.append(createCredit("Discord", '<a target="_blank" href="https://discord.gg/Xenostopic">JOIN THE SERVER</a>'));

        function parseTime(d) {
            const hour = d.getHours() % 12 == 0 ? 12 : d.getHours() % 12;
            const minutes = d.getMinutes().toString().padStart(2, "0");
            return `${hour}:${minutes} ${d.getHours() >= 12 ? "PM" : "AM"}`;
        }

        function parseDate(d) {
            const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][d.getMonth()];
            return `${month} ${d.getDate()}${getOrdinal(d.getDate())}, ${d.getFullYear()} - ${parseTime(d)}`;
        }
        const uploadDates = document.createElement("ul");
        uploadDates.className = classes.uploadDates;
        try {
            let currentDate = new Date(null),
                latestDate = new Date(null);
            if (latestProcess != -1) uploadDates.append(createCredit("", parseDate(null)));
            if (currentDate < latestDate) {
                const warning = document.createElement("");
                warning.className = classes.warning;
                warning.innerText = "";
                uploadDates.append(warning);
            }
        } catch {
            const warning = document.createElement("");
            warning.className = classes.warning;
            warning.innerText = "";
            uploadDates.append(warning);
        }
        creditsPage.append(licenseMessage, codingCredits, creditLinks, uploadDates, copyrightTag);

        function getOrdinal(n) {
            if (n % 10 == 1 && n % 100 != 11) return "st";
            if (n % 10 == 2 && n % 100 != 12) return "nd";
            if (n % 10 == 3 && n % 100 != 13) return "rd";
            return "th";
        }

        function createCredit(contribution, html) {
            const listItem = document.createElement("li");
            const contributionText = document.createElement("strong");
            contributionText.innerText = contribution + ":";
            const right = document.createElement("span");
            right.innerHTML = html;
            listItem.append(contributionText, right);
            return listItem;
        }

        function resetGuiPos() {
            gui.style.left = (window.innerWidth / 2 - 400) + "px";
            gui.style.top = (window.innerHeight / 2 - 250) + "px";
        }
        const settingsPage = document.createElement("div");
        settingsPage.className = classes.noScroll + " " + classes.settingsPage;
        const searchResultSeparator = document.createElement("div");
        searchResultSeparator.onclick = () => path.push("Settings", settingsPage);
        searchResultSeparator.className = classes.searchResultSeparator;
        searchResultSeparator.innerText = "Settings";
        searchResultSeparator.dataset[datasets.name] = "settings";
        gamemodeResults.settings = searchResultSeparator;
        searchResults.append(searchResultSeparator);
        const settingRefresh = [];

        function addSetting(name, description, input, onUpdate) {
            const settingElement = document.createElement("div");
            const searchResult = document.createElement("div");
            searchResult.className = classes.searchResult;
            const searchResultInfo = document.createElement("div");
            searchResultInfo.className = classes.searchResultInfo;
            const searchResultName = document.createElement("div");
            searchResultName.className = classes.searchResultName;
            searchResult.dataset[datasets.name] = (searchResultName.innerText = name).toLowerCase();
            searchResult.dataset[datasets.mode] = "settings";
            const searchResultDescription = document.createElement("div");
            searchResultDescription.className = classes.searchResultDescription;
            searchResult.dataset[datasets.description] = (searchResultDescription.innerText = description).toLowerCase();
            searchResultInfo.append(searchResultName, searchResultDescription);
            searchResult.onclick = () => {
                path.push(name, settingsPage);
                settingElement.scrollIntoView();
                settingElement.animate(
                    [{
                            color: "var(--textColor)",
                            textShadow: "0 0 0px var(--highlight)",
                        },
                        {
                            color: "var(--highlight)",
                            textShadow: "0 0 5px var(--highlight)",
                            offset: 0.25,
                        },
                        {
                            color: "var(--textColor)",
                            textShadow: "0 0 0px var(--highlight)",
                        },
                    ],
                    1500
                );
            };
            searchResult.append(searchResultInfo);
            searchResults.append(searchResult);
            const settingTop = document.createElement("div");
            settingTop.className = classes.cheatTop;
            const settingInfo = document.createElement("div");
            settingInfo.className = classes.cheatInfo;
            const settingName = document.createElement("span");
            settingName.innerText = name;
            settingName.className = classes.cheatName;
            const settingDescription = document.createElement("span");
            settingDescription.innerText = description;
            settingDescription.className = classes.cheatDescription;
            settingInfo.append(settingName, settingDescription);
            settingElement.append(settingTop);
            const settingInputs = document.createElement("div");
            settingInputs.className = classes.cheatInputs;
            const inputElement = document.createElement("div");
            const inputName = document.createElement("span");
            inputName.innerText = input.name;
            inputElement.append(inputName);
            settingInputs.append(inputElement);
            let inputField = document.createElement("input");
            inputField.dataset[datasets.type] = input.type;
            if (input.type == "keybind") {
                inputField.readOnly = true;
                let locked = false;
                inputField.data = input.data;
                inputField.onclick = async () => {
                    if (locked) return;
                    inputField.value = "Waiting for input...";
                    locked = true;
                    inputField.data = await input.listen((e) => (inputField.value = e + "..."));
                    locked = false;
                    inputField.value = inputField.value.slice(0, -3);
                };
                (settingRefresh[settingRefresh.length] = () => (inputField.value = input.value()))();
            } else if (input.type == "options") {
                inputField = document.createElement("select");
                inputField.dataset[datasets.type] = "options";
                const defaultOption = document.createElement("option");
                defaultOption.value = "{}";
                defaultOption.innerHTML = "Select a Theme";
                (settingRefresh[settingRefresh.length] = () => (defaultOption.selected = true))();
                inputField.append(defaultOption);
                for (const choice of input.options) {
                    const option = document.createElement("option");
                    option.value = JSON.stringify(choice?.value ?? choice);
                    option.innerHTML = choice?.name || choice;
                    inputField.append(option);
                }
            } else if (input.type == "toggle") {
                inputField = null;
                settingInputs.style.display = "none";
            } else {
                if (input.type == "number") {
                    inputField.type = "number";
                    inputField.min = input.min;
                    inputField.max = input.max;
                }
                (settingRefresh[settingRefresh.length] = () => (inputField.value = input.value()))();
                inputField.placeholder = input.name;
            }
            if (inputField) {
                inputElement.append(inputField);
            }
            settingElement.append(settingInputs);
            settingTop.append(settingInfo);
            const runButton = document.createElement("div");
            runButton.className = classes.runCheat;
            if (input.type == "toggle") {
                runButton.classList.add(classes.toggleCheat);
                runButton.innerText = input.enabled ? "Toggle Off" : "Toggle On";
                runButton.classList.toggle(classes.active, input.enabled);
                runButton.style.width = "20%";
                runButton.style.margin = "10px auto";
                runButton.onclick = () => {
                    input.enabled = !input.enabled;
                    runButton.innerText = input.enabled ? "Toggle Off" : "Toggle On";
                    runButton.classList.toggle(classes.active, input.enabled);
                    onUpdate(input.enabled);
                };
                (settingRefresh[settingRefresh.length] = () => {
                    const currentEnabled = input.value();
                    input.enabled = currentEnabled;
                    runButton.innerText = currentEnabled ? "Toggle Off" : "Toggle On";
                    runButton.classList.toggle(classes.active, currentEnabled);
                })();
            } else {
                runButton.innerText = "Update";
                runButton.onclick = () =>
                    onUpdate(inputField.dataset[datasets.type] == "number" ? parseFloat("0" + inputField.value) : inputField.dataset[datasets.type] == "options" ? JSON.parse(inputField.value) : inputField.data ?? inputField.value);
            }
            settingTop.append(runButton);
            settingsPage.append(settingElement);
        }

        function setCookie(name, value, days = 365) {
            const expireDate = new Date();
            expireDate.setTime(expireDate.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${encodeURIComponent(value)}; domain=.blooket.com; expires=${expireDate.toUTCString()}; path=/`;
        }
        settingsPage.onPath = () => settingRefresh.forEach((x) => x());
        addSetting(
            "Hide Keybind",
            "Shortcut to hide to GUI", {
                type: "keybind",
                name: "Shortcut",
                data: defaultHideKey,
                value: () => parseKeybind(Settings.data.hideKey),
                listen: (change) => createKeybindListener((keys) => change(parseKeybind(keys))),
            },
            (x) => {
                Settings.setItem("hideKey", x);
            }
        );
        addSetting(
            "Close Keybind",
            "Shortcut to disable all toggles and close GUI", {
                type: "keybind",
                name: "Shortcut",
                data: defaultCloseKey,
                value: () => parseKeybind(Settings.data.closeKey),
                listen: (change) => createKeybindListener((keys) => change(parseKeybind(keys))),
            },
            (x) => {
                Settings.setItem("closeKey", x);
            }
        );
        addSetting(
            "Reset Gui Position Keybind",
            "Shortcut to reset gui position", {
                type: "keybind",
                name: "Shortcut",
                data: defaultresetPosKey,
                value: () => parseKeybind(Settings.data.resetPosKey),
                listen: (change) => createKeybindListener((keys) => change(parseKeybind(keys))),
            },
            (x) => {
                Settings.setItem("resetPosKey", x);
            }
        );
        addSetting(
            "Toggle Animations",
            "Enable or disable smooth animations", {
                type: "toggle",
                name: "Animations",
                enabled: (() => {
                    const cookieValue = getCookie("animationsEnabled");
                    return cookieValue === null ? true : cookieValue === "true";
                })(),
                value: () => {
                    const cookieValue = getCookie("animationsEnabled");
                    return cookieValue === null ? true : cookieValue === "true";
                },
            },
            (enabled) => {
                setCookie("animationsEnabled", enabled.toString(), 365);
                window.XenostopicAnimationsEnabled = enabled;
            }
        );
        addSetting(
            "Toggle Sweet Alerts",
            "Toggles sweet alerts on and off", {
                type: "toggle",
                name: "Sweet Alerts",
                enabled: true,
                value: () => {
                    const cookieValue = getCookie("sweetAlertsEnabled");
                    return cookieValue === null ? true : cookieValue === "true";
                },
            },
            (enabled) => {
                setCookie("sweetAlertsEnabled", enabled.toString(), 365);
            }
        );
        addSetting(
            "Theme",
            "A preset look for Xenostopic", {
                type: "options",
                name: "Preset",
                options: [{
                        name: "Xenostopic Default",
                        value: {
                            highlight: variables["--highlight"],
                            highlight2: variables["--highlight2"],
                            background: variables["--background"],
                            background2: variables["--background2"],
                            textColor: variables["--textColor"],
                            textColor2: variables["--textColor2"],
                            toggleOff: variables["--toggleOff"],
                            toggleOn: variables["--toggleOn"],
                        },
                    },
                    {
                        name: "Cyber Blue",
                        value: {
                            highlight: "#00bfff",
                            highlight2: "#0077aa",
                            background: "radial-gradient(circle at top, #0f2027, #000000)",
                            background2: "#020b14",
                            toggleOn: "#00ffcc",
                            toggleOff: "#ff4d4d",
                            textColor: "#e6f7ff",
                            textColor2: "#00bfff",
                        },
                    },
                    {
                        name: "Inferno",
                        value: {
                            highlight: "#ff6a00",
                            highlight2: "#c0392b",
                            background: "linear-gradient(135deg, #2b0000, #7a1c00)",
                            background2: "#3a0f0f",
                            toggleOn: "#ff9f1a",
                            toggleOff: "#5c1a1a",
                            textColor: "#fff2e6",
                            textColor2: "#ff6a00",
                        },
                    },
                    {
                        name: "Emerald Night",
                        value: {
                            highlight: "#2ecc71",
                            highlight2: "#1e824c",
                            background: "linear-gradient(180deg, #051f14, #020b08)",
                            background2: "#03140c",
                            toggleOn: "#2ecc71",
                            toggleOff: "#8b1e1e",
                            textColor: "#eafff3",
                            textColor2: "#2ecc71",
                        },
                    },
                    {
                        name: "Midnight Purple",
                        value: {
                            highlight: "#8e44ad",
                            highlight2: "#5e3370",
                            background: "linear-gradient(160deg, #120018, #000000)",
                            background2: "#1a0022",
                            toggleOn: "#bb6bd9",
                            toggleOff: "#7a1a1a",
                            textColor: "#f5e6ff",
                            textColor2: "#bb6bd9",
                        },
                    },
                    {
                        name: "Frozen Ice",
                        value: {
                            highlight: "#7ed6df",
                            highlight2: "#22a6b3",
                            background: "linear-gradient(180deg, #e8f9ff, #b8ecff)",
                            background2: "#dff6ff",
                            toggleOn: "#22a6b3",
                            toggleOff: "#be2edd",
                            textColor: "#003344",
                            textColor2: "#22a6b3",
                        },
                    },
                    {
                        name: "Crimson Void",
                        value: {
                            highlight: "#e74c3c",
                            highlight2: "#96281b",
                            background: "radial-gradient(circle, #2b0000, #000000)",
                            background2: "#1a0000",
                            toggleOn: "#ff7675",
                            toggleOff: "#3d0000",
                            textColor: "#ffecec",
                            textColor2: "#e74c3c",
                        },
                    },
                    {
                        name: "Matrix",
                        value: {
                            highlight: "#00ff41",
                            highlight2: "#00aa2a",
                            background: "radial-gradient(circle, #003300, #000000)",
                            background2: "#001a00",
                            toggleOn: "#00ff41",
                            toggleOff: "#660000",
                            textColor: "#ccffcc",
                            textColor2: "#00ff41",
                        },
                    },
                    {
                        name: "Sunset Vapor",
                        value: {
                            highlight: "#ff77aa",
                            highlight2: "#ffb347",
                            background: "linear-gradient(135deg, #ff5f6d, #845ec2)",
                            background2: "#2a1a40",
                            toggleOn: "#ffb347",
                            toggleOff: "#5a1a1a",
                            textColor: "#fff0f7",
                            textColor2: "#ff77aa",
                        },
                    },
                    {
                        name: "Neon Purple",
                        value: {
                            highlight: "#9a49aa",
                            highlight2: "#7a039d",
                            background: "rgb(11, 194, 207)",
                            background2: "rgb(64, 17, 95)",
                            toggleOn: "#47A547",
                            toggleOff: "#A02626",
                            textColor: "white",
                            textColor2: "#9a49aa",
                        },
                    },
                    {
                        name: "Landscapes (Random)",
                        value: {
                            highlight: "rgba(0,0,0,0.3)",
                            highlight2: "rgba(0,0,0,0.3)",
                            background: "url(https://source.unsplash.com/1600x900/?landscape)",
                            background2: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                            toggleOn: "linear-gradient(rgba(0,128,0,0.3), rgba(0,128,0,0.3))",
                            toggleOff: "linear-gradient(rgba(225,0,0,0.3), rgba(225,0,0,0.3))",
                            textColor: "white",
                            textColor2: "white",
                        },
                    },
                    {
                        name: "Blacket",
                        value: {
                            highlight: "#2f2f2f",
                            highlight2: "#3f3f3f",
                            background: "#4f4f4f",
                            background2: "#2f2f2f",
                            toggleOn: "#00c20c",
                            toggleOff: "#eb6234",
                            textColor: "white",
                            textColor2: "white",
                        },
                    },
                    {
                        name: "Ploopit",
                        value: {
                            highlight: "#204DD0",
                            highlight2: "#3C75F5",
                            background: "url(https://i.ibb.co/6vvdq3f/ploopit.png)",
                            background2: "#3C75F5",
                            toggleOn: "#47A547",
                            toggleOff: "#A02626",
                            textColor: "white",
                            textColor2: "#3C75F5",
                        },
                    },
                    {
                        name: "Midnight Bloom",
                        value: {
                            highlight: "#bb2d5b",
                            highlight2: "#682c44",
                            background: "linear-gradient(135deg, #1b1b2f, #2a2a45)",
                            background2: "#3e3e5c",
                            toggleOn: "#bb2d5b",
                            toggleOff: "#682c44",
                            textColor: "#e0e0e0",
                            textColor2: "#bb2d5b",
                        },
                    },
                    {
                        name: "Silver Horizon",
                        value: {
                            highlight: "#d1d1d1",
                            highlight2: "#b0b0b0",
                            background: "linear-gradient(135deg, #4e4e5d, #2f2f38)",
                            background2: "#3c3c44",
                            toggleOn: "#d1d1d1",
                            toggleOff: "#5a5a60",
                            textColor: "#ffffff",
                            textColor2: "#d1d1d1",
                        },
                    },
                    {
                        name: "Deep Ocean",
                        value: {
                            highlight: "#006994",
                            highlight2: "#003b57",
                            background: "linear-gradient(180deg, #003b57, #011c2a)",
                            background2: "#002433",
                            toggleOn: "#006994",
                            toggleOff: "#004d6a",
                            textColor: "#cce7ff",
                            textColor2: "#006994",
                        },
                    },
                    {
                        name: "Rustic Copper",
                        value: {
                            highlight: "#a65c5c",
                            highlight2: "#7b4b4b",
                            background: "linear-gradient(135deg, #e57c73, #7b4b4b)",
                            background2: "#9e6e6e",
                            toggleOn: "#a65c5c",
                            toggleOff: "#5e2f2f",
                            textColor: "#ffffff",
                            textColor2: "#a65c5c",
                        },
                    },
                    {
                        name: "Frostbite",
                        value: {
                            highlight: "#85c7e0",
                            highlight2: "#6d9db1",
                            background: "linear-gradient(135deg, #2a4d6f, #1f3e50)",
                            background2: "#3e5a70",
                            toggleOn: "#85c7e0",
                            toggleOff: "#3e5a70",
                            textColor: "#ffffff",
                            textColor2: "#85c7e0",
                        },
                    },
                    {
                        name: "Citrus Mist",
                        value: {
                            highlight: "#f6a500",
                            highlight2: "#f67f1e",
                            background: "linear-gradient(135deg, #f0a500, #ff6600)",
                            background2: "#d05f20",
                            toggleOn: "#f6a500",
                            toggleOff: "#a34317",
                            textColor: "#ffffff",
                            textColor2: "#f6a500",
                        },
                    },
                    {
                        name: "Mossy Forest",
                        value: {
                            highlight: "#728c5f",
                            highlight2: "#3d6c3d",
                            background: "linear-gradient(180deg, #3d6c3d, #2b4d2b)",
                            background2: "#4f7037",
                            toggleOn: "#728c5f",
                            toggleOff: "#4f7037",
                            textColor: "#ffffff",
                            textColor2: "#728c5f",
                        },
                    },
                    {
                        name: "Astral Journey",
                        value: {
                            highlight: "#a0a2d0",
                            highlight2: "#6b6c9f",
                            background: "linear-gradient(135deg, #2c3e5c, #1b2a3b)",
                            background2: "#3e4b72",
                            toggleOn: "#a0a2d0",
                            toggleOff: "#4d5176",
                            textColor: "#ffffff",
                            textColor2: "#a0a2d0",
                        },
                    },
                    {
                        name: "Crimson Ember",
                        value: {
                            highlight: "#ff4c4c",
                            highlight2: "#b73838",
                            background: "linear-gradient(135deg, #ff4c4c, #b73838)",
                            background2: "#8f3030",
                            toggleOn: "#ff4c4c",
                            toggleOff: "#8f3030",
                            textColor: "#ffffff",
                            textColor2: "#ff4c4c",
                        },
                    },
                    {
                        name: "Obsidian Wave",
                        value: {
                            highlight: "#4e5d6b",
                            highlight2: "#2c3e4f",
                            background: "linear-gradient(135deg, #2c3e4f, #1b2a35)",
                            background2: "#3e4b5a",
                            toggleOn: "#4e5d6b",
                            toggleOff: "#2c3e4f",
                            textColor: "#ffffff",
                            textColor2: "#4e5d6b",
                        },
                    },
                    {
                        name: "Twilight Ember",
                        value: {
                            highlight: "#ff7f50",
                            highlight2: "#f14d27",
                            background: "linear-gradient(135deg, #ff7f50, #f14d27)",
                            background2: "#d24020",
                            toggleOn: "#ff7f50",
                            toggleOff: "#d24020",
                            textColor: "#ffffff",
                            textColor2: "#ff7f50",
                        },
                    },
                    {
                        name: "Garnet Eclipse",
                        value: {
                            highlight: "#9b2d20",
                            highlight2: "#6b1f14",
                            background: "linear-gradient(135deg, #9b2d20, #6b1f14)",
                            background2: "#6f2923",
                            toggleOn: "#9b2d20",
                            toggleOff: "#6f2923",
                            textColor: "#ffffff",
                            textColor2: "#9b2d20",
                        },
                    },
                    {
                        name: "Sapphire Twilight",
                        value: {
                            highlight: "#0f4b73",
                            highlight2: "#006282",
                            background: "linear-gradient(135deg, #0f4b73, #006282)",
                            background2: "#003e5d",
                            toggleOn: "#0f4b73",
                            toggleOff: "#003e5d",
                            textColor: "#ffffff",
                            textColor2: "#0f4b73",
                        },
                    },
                    {
                        name: "Betastar",
                        value: {
                            highlight: "#282828",
                            highlight2: "gray",
                            background: "url(https://i.ibb.co/8bkDpCn/GIFMaker-me.gif)",
                            background2: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                            toggleOn: "#013220",
                            toggleOff: "#9D0000",
                            textColor: "black",
                            textColor2: "black",
                        },
                    },
                    {
                        name: "Skool.lol",
                        value: {
                            highlight: "#36393e",
                            highlight2: "#1e2124",
                            background: "linear-gradient(90deg, rgba(104,45,140,1) 220px, rgba(237,30,121,1) 100%)",
                            background2: "#292929",
                            toggleOn: "#9c9a9a",
                            toggleOff: "#171717",
                            textColor: "white",
                            textColor2: "white",
                        },
                    },
                    {
                        name: "Crypto Hack",
                        value: {
                            highlight: "rgb(88 175 88)",
                            toggleOn: "#0b601b",
                            background: "radial-gradient(#11581e,#041607)",
                            background2: "#1a1a1a",
                            toggleOff: "#A02626",
                            highlight2: "#49d149",
                            textColor2: "#49d149",
                        },
                    },
                    {
                        name: "Deceptive Dinos",
                        value: {
                            highlight: "#af8942",
                            toggleOn: "#2fb62f",
                            background: "radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.4)), url(https://ac.blooket.com/play/111cb7e0ee6607ac3d1a13d534c0e0f1.png), #ead49a",
                            background2: "radial-gradient(rgba(1,104,162,.6),rgba(24,55,110,.5)),radial-gradient(#2783b4 1.5px,#18376e 0) center / 24px 24px",
                            toggleOff: "#A02626",
                            highlight2: "rgb(0 0 0 / 25%)",
                            textColor2: "#FFFFFF",
                        },
                    },
                    {
                        name: "Blook Rush",
                        value: {
                            highlight: "#888",
                            toggleOn: "#47A547",
                            background: "repeating-linear-gradient(45deg,white,white 8%,#e6e6e6 0,#e6e6e6 16%)",
                            background2: "#36c",
                            toggleOff: "#A02626",
                            highlight2: "rgb(0 0 0 / 25%)",
                            textColor2: "#FFFFFF",
                        },
                    },
                    {
                        name: "Factory",
                        value: {
                            highlight: "#1563bf",
                            toggleOn: "rgb(75, 194, 46)",
                            background: "#3a3a3a",
                            background2: "#2d313d",
                            toggleOff: "#9a49aa",
                            highlight2: "rgb(0 0 0 / 25%)",
                            textColor2: "#a5aabe",
                        },
                    },
                    {
                        name: "Cafe",
                        value: {
                            highlight: "#0bc2cf",
                            toggleOn: "#47A547",
                            background: "linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0) center / 50px 50px,linear-gradient(rgba(200,0,0,0.5) 50%,transparent 0) white center / 50px 50px",
                            background2: "rgb(64, 64, 64)",
                            toggleOff: "#A02626",
                            highlight2: "rgb(0 0 0 / 25%)",
                            textColor2: "#ac7339",
                            textColor: "#FFFFFF",
                        },
                    },
                    {
                        name: "Tower of Doom",
                        value: {
                            highlight: "#9a49aa",
                            toggleOn: "#4bc22e",
                            background: "rgb(41 41 41)",
                            background2: "#404040",
                            toggleOff: "rgb(151, 15, 5)",
                            highlight2: "rgb(0 0 0 / 25%)",
                            textColor2: "#9a49aa",
                            textColor: "#FFFFFF",
                        },
                    },
                    {
                        name: "Monster Brawl",
                        value: {
                            highlight: "#2966a6",
                            toggleOn: "#47A547",
                            background: "rgb(45, 51, 67)",
                            background2: "#374154",
                            toggleOff: "#A02626",
                            highlight2: "#264d99",
                            textColor2: "#264d99",
                            textColor: "#FFFFFF",
                        },
                    },
                    {
                        name: "Tower Defense 2",
                        value: {
                            highlight: "#40b1d8",
                            toggleOn: "#47A547",
                            background: "url(https://media.blooket.com/image/upload/v1676164454/Media/defense/backgroundTd1-02.svg) center / cover",
                            background2: "#293c82",
                            toggleOff: "#A02626",
                            highlight2: "rgb(0 0 0 / 25%)",
                            textColor2: "#a33c22",
                            textColor: "#FFFFFF",
                        },
                    },
                ],
            },
            (x) => {
                Settings.setItem("theme", {
                    ...Settings.data.theme,
                    ...x
                });
                for (const prop in x) gui.style.setProperty(`--${prop}`, x[prop]);
                path.updatePath();
            }
        );
        addSetting("Highlight 1", "Hover color, sub-text color, button color, and input outlines", {
                type: "string",
                name: "CSS Value",
                value: () => gui.style.getPropertyValue("--highlight")
            }, (x) =>
            gui.style.setProperty("--highlight", Settings.setItem("theme.highlight", x || variables["--highlight"]))
        );
        addSetting("Highlight 2", "Credits page's warning message color", {
                type: "string",
                name: "CSS Value",
                value: () => gui.style.getPropertyValue("--highlight2")
            }, (x) =>
            gui.style.setProperty("--highlight2", Settings.setItem("theme.highlight2", x || variables["--highlight2"]))
        );
        addSetting("Background", "Main GUI background color", {
                type: "string",
                name: "CSS Value",
                value: () => gui.style.getPropertyValue("--background")
            }, (x) =>
            gui.style.setProperty("--background", Settings.setItem("theme.background", x || variables["--background"]))
        );
        addSetting("Background 2", "Secondary GUI background color", {
                type: "string",
                name: "CSS Value",
                value: () => gui.style.getPropertyValue("--background2")
            }, (x) =>
            gui.style.setProperty("--background2", Settings.setItem("theme.background2", x || variables["--background2"]))
        );
        addSetting("Text Color", "Main text color", {
                type: "string",
                name: "CSS Value",
                value: () => gui.style.getPropertyValue("--textColor")
            }, (x) =>
            gui.style.setProperty("--textColor", Settings.setItem("theme.textColor", x || variables["--textColor"]))
        );
        addSetting("Text Color 2", "Credit page's contributor color", {
                type: "string",
                name: "CSS Value",
                value: () => gui.style.getPropertyValue("--textColor2")
            }, (x) =>
            gui.style.setProperty("--textColor2", Settings.setItem("theme.textColor2", x || variables["--textColor2"]))
        );
        addSetting("Toggle (On)", "Enabled toggle button color", {
                type: "string",
                name: "CSS Value",
                value: () => gui.style.getPropertyValue("--toggleOn")
            }, (x) =>
            gui.style.setProperty("--toggleOn", Settings.setItem("theme.toggleOn", x || variables["--toggleOn"]))
        );
        addSetting("Toggle (Off)", "Disabled toggle button color", {
                type: "string",
                name: "CSS Value",
                value: () => gui.style.getPropertyValue("--toggleOff")
            }, (x) =>
            gui.style.setProperty("--toggleOff", Settings.setItem("theme.toggleOff", x || variables["--toggleOff"]))
        );
        const sidebarPaths = document.createElement("div");
        sidebarPaths.className = classes.sidebarPaths;

        function createSidebarPath(name, iconKey, page) {
            const sidebarPath = document.createElement("div");
            sidebarPath.className = classes.sidebarPath;
            sidebarPath.style.display = "flex";
            sidebarPath.style.alignItems = "center";
            sidebarPath.style.gap = "12px";
            sidebarPath.style.cursor = "pointer";
            const iconWrapper = document.createElement("div");
            iconWrapper.style.width = "50px";
            iconWrapper.style.height = "50px";
            iconWrapper.style.display = "flex";
            iconWrapper.style.alignItems = "center";
            iconWrapper.style.justifyContent = "center";
            iconWrapper.style.flexShrink = "0";
            iconWrapper.style.fontSize = "1.5em";
            const svgMap = {
                search: `
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24" width="1em" height="1em"
           fill="none" stroke="currentColor"
           stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7"/>
        <line x1="16.5" y1="16.5" x2="21" y2="21"/>
      </svg>`,
                gamepad: `
    <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" width="1em" height="1em"
       fill="none" stroke="currentColor"
       stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19.07 1.29l-1.41 1.41 1.11 1.11-2.22 2.22-3.84-3.84-1.41 1.42 1.11 1.11L2.2 14.93l6.14 6.14 10.21-10.2 1.11 1.11 1.41-1.41-3.84-3.84 2.22-2.22 1.11 1.11 1.41-1.41-2.83-2.83z"/>
    <line x1="1.29" y1="21.29" x2="4.22" y2="18.36"/>
    <line x1="7.66" y1="16.34" x2="5.64" y2="14.32"/>
    <line x1="9.48" y1="14.52" x2="7.05" y2="12.09"/>
    <line x1="11.29" y1="12.71" x2="9.88" y2="11.29"/>
    <line x1="13.11" y1="10.89" x2="11.7" y2="9.48"/>
  </svg>
`,
                star: `
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24" width="1em" height="1em"
           fill="none" stroke="currentColor"
           stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2l3.2 6.7L22 9.3l-5 4.3L18.4 22 12 18.3 5.6 22 7 13.6 2 9.3l6.8-.6L12 2z"/>
      </svg>`,
                trophy: `
        <svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 20 26" width="1em" height="1em"
     fill="none" stroke="currentColor"
     stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7 3h6a2 2 0 012 2v6a4 4 0 01-4 4h-2a4 4 0 01-4-4V5a2 2 0 012-2z"/>
  <path d="M5 6H3a2 2 0 00-2 2v2a3 3 0 003 3"/>
  <path d="M15 6h2a2 2 0 012 2v2a3 3 0 01-3 3"/>
  <path d="M7 23h6M7 19v4M13 19v4"/>
  <path d="M10 15v4"/>
</svg>`,
                alt: `
    <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" width="1em" height="1em"
       fill="none" stroke="currentColor"
       stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="5.8" cy="16.32" r="2.39"/>
    <path d="M1.5,23.48V23a4.3,4.3,0,0,1,4.3-4.3h0A4.3,4.3,0,0,1,10.09,23v.48"/>
    <circle cx="18.2" cy="3.91" r="2.39"/>
    <path d="M13.91,11.07v-.48A4.29,4.29,0,0,1,18.2,6.3h0a4.29,4.29,0,0,1,4.3,4.29v.48"/>
    <polyline points="15.7 15.72 18.68 12.75 21.66 15.72"/>
    <path d="M18.68,13v2.86A5.73,5.73,0,0,1,13,21.57h0"/>
    <polyline points="8.3 8.32 5.32 11.3 2.34 8.32"/>
    <path d="M5.32,11.07V8.2a5.72,5.72,0,0,1,5.73-5.72h0"/>
  </svg>
`,
                client: `
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     width="1em" height="1em"
     fill="none"
     stroke="currentColor"
     stroke-width="1.8"
     stroke-linecap="round"
     stroke-linejoin="round">
  <path d="M14.5 3a4.5 4.5 0 00-3.8 6.8l-7.3 7.3a2 2 0 102.8 2.8l7.3-7.3A4.5 4.5 0 0019.5 7l-3 3-4-4 3-3z"/>
</svg>
`,
                editor: `
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     width="1em" height="1em"
     fill="none"
     stroke="currentColor"
     stroke-width="1.8"
     stroke-linecap="round"
     stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="4" ry="4"/>
  <circle cx="8" cy="10" r="1.2"/>
  <circle cx="16" cy="10" r="1.2"/>
  <path d="M7 15c1.5 1.5 4.5 1.5 6 0"/>
</svg>
`,
                terminal: `
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24" width="1em" height="1em"
           fill="none" stroke="currentColor"
           stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" y1="19" x2="20" y2="19"/>
      </svg>`,
                cog: `
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" width="1em" height="1em"
       fill="none" stroke="currentColor"
       stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z"/>
  </svg>
`,
                mobile: `
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24" width="1em" height="1em"
           fill="none" stroke="currentColor"
           stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2"></rect>
        <circle cx="12" cy="18" r="1" fill="currentColor"></circle>
      </svg>`,
                info: `
       <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" width="1em" height="1em"
       fill="none" stroke="currentColor"
       stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <line x1="12" y1="11" x2="12" y2="17"/>
    <circle cx="12" cy="8" r="0.5" fill="currentColor"/>
  </svg>`,
                changelog: `
      <svg xmlns="http://www.w3.org/2000/svg"
           width="1em" height="1em"
           viewBox="0 0 24 24"
           fill="none" stroke="currentColor"
           stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="14" height="18" rx="2"/>
        <path d="M7 7h6M7 11h6M7 15h4"/>
        <polyline points="17 3 21 3 21 7"/>
        <line x1="21" y1="3" x2="17" y2="7"/>
      </svg>
    `,
                default: `
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24" width="1em" height="1em"
           fill="currentColor">
        <circle cx="12" cy="12" r="8"/>
      </svg>`,
                module: `
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 16 16"
     width="1em" height="1em"
     fill="currentColor"
     preserveAspectRatio="xMidYMid meet">
  <path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z"></path>
  <path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z"></path>
  <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z"></path>
</svg>
`
            };
            iconWrapper.innerHTML = svgMap[iconKey] || svgMap.default;
            const svg = iconWrapper.querySelector("svg");
            if (svg) {
                svg.style.display = "block";
            }
            const label = document.createElement("span");
            label.innerText = name;
            sidebarPath.append(iconWrapper, label);
            sidebarPath.onclick = () => path.sidebar(name, page);
            sidebarPaths.append(sidebarPath);
            return sidebarPath;
        }
        createSidebarPath("Search", "search", searchPage);
        createSidebarPath("Gamemodes", "gamepad", gamemodesPage);
        createSidebarPath("Favorites", "star", favoritesPage);
        createSidebarPath("Leaderboard", "trophy", leaderboardPage);
        createSidebarPath("Logs", "terminal", logsPage);
        createSidebarPath("Alt Manager", "alt", altPage);
        createSidebarPath("Blook Editor", "editor", blookPage);
        createSidebarPath("Client Blooks", "client", clientPage);
        createSidebarPath("Custom Modules", "module", modulePage);
        createSidebarPath("Changelog", "changelog", changelogPage);
        createSidebarPath("Settings", "cog", settingsPage);
        createSidebarPath("Info/Credits", "info", creditsPage);
        sidebar.append(sidebarPaths);
        const bigTextContainer = document.createElement("div");
        bigTextContainer.className = classes.bigTextContainer;
        const dummyK = document.createElement("span");
        dummyK.innerText = "X";
        dummyK.style.opacity = "0";
        const bigText = document.createElement("span");
        bigText.className = classes.bigText;
        bigText.innerText = "-GUI";
        const logo = document.createElement("span");
        logo.className = classes.logo;
        logo.innerHTML = "X";
        bigTextContainer.append(logo, dummyK, bigText);
        sidebar.prepend(bigTextContainer);
        const refreshControl = document.createElement("div");
        refreshControl.className = classes.refreshControl;
        refreshControl.innerHTML = `
<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"
     xmlns="http://www.w3.org/2000/svg" style="display:block;">
  <path d="M4,12a1,1,0,0,1-2,0A9.983,9.983,0,0,1,18.242,4.206V2.758a1,1,0,1,1,2,0v4a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h1.743A7.986,7.986,0,0,0,4,12Zm17-1a1,1,0,0,0-1,1A7.986,7.986,0,0,1,7.015,18.242H8.757a1,1,0,1,0,0-2h-4a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V19.794A9.984,9.984,0,0,0,22,12,1,1,0,0,0,21,11Z"/>
</svg>
`;
        refreshControl.onclick = () => {
            refreshControl.animate(
                [{
                    transform: "rotate(0deg)"
                }, {
                    transform: "rotate(360deg)"
                }], {
                    duration: 600,
                    easing: "ease"
                }
            );
            path.updatePath();
        };
        gui.append(controls, guiTopBar, sidebar, guiContent, pathText, refreshControl);
        path.updatePath();
        document.body.appendChild(gui);
        async function detectCSP() {
            try {
                const s = document.createElement('script');
                s.textContent = 'window.__csp=true';
                document.head.appendChild(s);
                document.head.removeChild(s);
            } catch (e) {}
            const blocked = !window.__csp;
            delete window.__csp;
            const meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
            return blocked || !!meta?.content.includes('script-src');
        }

        function createCSPOverlay(targetPage) {
            if (!targetPage || targetPage.querySelector?.('.Xenostopic-csp-notice')) return;

            const pageStyle = getComputedStyle(targetPage);
            if (pageStyle.position === "static") {
                targetPage.style.position = "relative";
            }

            targetPage.style.overflow = "visible";

            const blurWrap = document.createElement("div");
            blurWrap.className = "Xenostopic-csp-blur";
            blurWrap.style.cssText = `
        width:100%;
        height:100%;
        filter:blur(8px);
        pointer-events:none;
        user-select:none;
    `;

            while (targetPage.firstChild) {
                blurWrap.appendChild(targetPage.firstChild);
            }
            targetPage.appendChild(blurWrap);

            const overlay = document.createElement("div");
            overlay.className = "Xenostopic-csp-notice";
            overlay.style.cssText = `
        position:absolute;
        inset:0;
        display:flex;
        align-items:flex-start;
        justify-content:center;
        z-index:2000;
        padding-top:10px;
        box-sizing:border-box;
        pointer-events:none;
        overflow:visible;
    `;

            const card = document.createElement("div");
            card.style.cssText = `
        max-width:380px;
        width:100%;
        padding:40px 35px;
        border-radius:20px;
        text-align:center;
        backdrop-filter:blur(24px) saturate(180%);
        -webkit-backdrop-filter:blur(24px) saturate(180%);
        background:linear-gradient(145deg,rgba(138,43,226,.15),rgba(75,0,130,.1));
        border:1.5px solid rgba(255,255,255,.15);
        box-shadow:0 10px 40px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.08) inset,0 25px 70px rgba(138,43,226,.2);
        pointer-events:auto;
    `;

            card.innerHTML = `
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style="color:#fff;filter:drop-shadow(0 4px 16px rgba(255,255,255,.3));margin-bottom:20px">
            <path d="M12 2L4 6V11C4 16 7 20 12 22C17 20 20 16 20 11V6L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <div style="color:#fff;font-size:32px;font-weight:800;letter-spacing:-.5px;margin-bottom:16px;text-shadow:0 2px 20px rgba(138,43,226,.6)">CSP Detected</div>
        <div style="color:#fff;font-size:15px;line-height:1.6;margin-bottom:30px">This is not supported on your version. Please use the extension version or get the CSP unblock extension.</div>
    `;

            const btn = document.createElement("a");
            btn.href = "https://x-gui.netlify.app/extension";
            btn.target = "_blank";
            btn.rel = "noopener noreferrer";
            btn.textContent = "Get Extension";
            btn.style.cssText = `
        display:inline-flex;
        align-items:center;
        justify-content:center;
        background:linear-gradient(135deg,#5865F2,#4752C4);
        color:#fff;
        font-size:15px;
        font-weight:600;
        padding:14px 32px;
        border-radius:12px;
        text-decoration:none;
        box-shadow:0 6px 20px rgba(88,101,242,.4);
        transition:transform .3s ease, box-shadow .3s ease;
    `;
            btn.onmouseenter = () => {
                btn.style.transform = "translateY(-3px) scale(1.02)";
                btn.style.boxShadow = "0 10px 30px rgba(88,101,242,.6)";
            };
            btn.onmouseleave = () => {
                btn.style.transform = "";
                btn.style.boxShadow = "0 6px 20px rgba(88,101,242,.4)";
            };

            card.appendChild(btn);
            overlay.appendChild(card);
            targetPage.appendChild(overlay);
        }
        if (await detectCSP()) {
            Logs.addLog("CSP Detected - Custom modules disabled", "red");
            createCSPOverlay(modulePage);
        }
        Logs.addLog("Opened Xenostopic!");
        /* Anti-Suspend By CryptoDude3 */
        if (window.fetch.call.toString() == "function call() { [native code] }") {
            const call = window.fetch.call;
            window.fetch.call = function() {
                if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
                Logs.addLog("Blocked Suspension API!", "red");
            };
            Logs.addLog("Enabled Anti-BAN!");
        }
        if (gui.querySelector("i").clientHeight == 0) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "https://ka-f.fontawesome.com/releases/v6.5.1/css/pro.min.css";
            gui.prepend(link);
        }

        function randString(length) {
            return Array.from({
                length
            }, () => String.fromCharCode(Math.floor(Math.random() * 25) + 97)).reduce((a) => a + String.fromCharCode(Math.floor(Math.random() * 25) + 97), "");
        }

        function dragElement(element, parent) {
            var pos1 = 0,
                pos2 = 0,
                pos3 = 0,
                pos4 = 0;
            element.onpointerdown = function(e = window.event) {
                element.style.cursor = "grabbing";
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onpointerup = function() {
                    element.style.cursor = "grab";
                    document.onpointerup = null;
                    document.onpointermove = null;
                };
                document.onpointermove = function(e = window.event) {
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    parent.style.top = parent.offsetTop - pos2 + "px";
                    parent.style.left = parent.offsetLeft - pos1 + "px";
                };
            };
        }
        const keys = ["shift", "control", "alt", "meta"];

        function createKeybindListener(onpress, element = window) {
            return new Promise((resolve) => {
                const pressed = new Set();
                let shift, ctrl, alt, key;
                const keydown = (e) => {
                    e.preventDefault();
                    pressed.add(e.code);
                    shift ||= e.shiftKey;
                    ctrl ||= e.ctrlKey;
                    alt ||= e.altKey;
                    if (!keys.includes(e.key.toLowerCase())) key = e.key.toLowerCase();
                    onpress?.({
                        shift,
                        ctrl,
                        alt,
                        key
                    });
                };
                const keyup = (e) => {
                    pressed.delete(e.code);
                    if (pressed.size > 0) return;
                    element.removeEventListener("keydown", keydown);
                    element.removeEventListener("keyup", keyup);
                    resolve({
                        shift,
                        ctrl,
                        alt,
                        key
                    });
                };
                element.addEventListener("keydown", keydown);
                element.addEventListener("keyup", keyup);
            });
        }

        function parseKeybind({
            shift,
            ctrl,
            alt,
            key
        }) {
            return [ctrl && "Ctrl", shift && "Shift", alt && "Alt", key && key.toUpperCase()].filter(Boolean).join(" + ");
        }

        function compareKeybind(keybind, event) {
            return keybind.ctrl == event.ctrlKey && keybind.shift == event.shiftKey && keybind.alt == event.altKey && event.key.toLowerCase() == keybind.key;
        }

        function keydown(e) {
            if (compareKeybind(Settings.data.hideKey ?? defaultHideKey, e)) {
                e.preventDefault();
                const isHiding = gui.style.display === "block";
                if (window.XenostopicAnimationsEnabled) {
                    const animationDuration = 0.1;
                    if (isHiding) {
                        gui.style.animation = `guiFadeOut ${animationDuration}s ease-out`;
                        setTimeout(() => {
                            gui.style.display = "none";
                            gui.style.animation = "";
                        }, animationDuration * 1000);
                    } else {
                        gui.style.display = "block";
                        gui.style.animation = `guiFadeIn ${animationDuration}s ease-out`;
                        setTimeout(() => {
                            gui.style.animation = "";
                        }, animationDuration * 0.1);
                    }
                } else {
                    gui.style.animation = "none";
                    gui.style.display = isHiding ? "none" : "block";
                }
                return;
            }
            if (compareKeybind(Settings.data.closeKey ?? defaultCloseKey, e)) {
                e.preventDefault();
                close();
            }
            if (compareKeybind(Settings.data.resetPosKey ?? defaultresetPosKey, e)) {
                e.preventDefault();
                resetGuiPos()
            }
        }

        function close() {
            const animationsEnabled = getCookieValue("animationsEnabled");
            if (animationsEnabled) {
                const animationDuration = 0.3;
                gui.style.animation = `guiFadeOut ${animationDuration}s ease-out forwards`;
                gui.style.pointerEvents = 'none';
                setTimeout(() => {
                    gui.remove();
                    clearInterval(Logs.interval);
                    for (const category in cheats)
                        for (const cheat of cheats[category].cheats)
                            if (cheat.enabled) cheat.run();
                    window.removeEventListener("keydown", keydown);
                }, animationDuration * 1000);
            } else {
                gui.remove();
                clearInterval(Logs.interval);
                for (const category in cheats)
                    for (const cheat of cheats[category].cheats)
                        if (cheat.enabled) cheat.run();
                window.removeEventListener("keydown", keydown);
            }
        }

        function getStateNode(mode) {
            const root = document.querySelector('#app') || document.body;
            const rKey = Object.keys(root).find(k => k.startsWith('__reactFiber'));
            if (!rKey && mode && mode !== 'factory') return null;
            if (mode === 'cafe') {
                let result = null;

                function traverse(node) {
                    if (result || !node) return;
                    let hook = node.memoizedState;
                    while (hook) {
                        const val = hook.memoizedState;
                        if (val && typeof val === 'object' && !Array.isArray(val)) {
                            const keys = Object.keys(val);
                            if (keys.some(k => ['Toast', 'Burger', 'Pizza', 'Soda', 'Fries', 'Donut'].includes(k)) ||
                                (val.cash !== undefined && keys.length > 10)) {
                                result = node;
                                return;
                            }
                        }
                        hook = hook.next;
                    }
                    traverse(node.child);
                    traverse(node.sibling);
                }
                traverse(root[rKey]);
                return result;
            }
            if (mode === 'defense' || mode === 'tower') {
                let result = null;

                function traverse(node) {
                    if (result || !node) return;
                    if (node.stateNode?.state?.roundCompleted !== undefined) {
                        result = node.stateNode;
                        return;
                    }
                    traverse(node.child);
                    traverse(node.sibling);
                }
                if (rKey) traverse(root[rKey]);
                return result;
            }
            if (mode === 'factory') {
                let factory = null,
                    tower = null;

                function scanDeep(obj, depth = 0) {
                    if (depth > 8 || (factory && tower)) return;
                    if (!obj || typeof obj !== 'object') return;
                    if (!factory && obj.factories && Array.isArray(obj.factories)) {
                        if (obj.factories.length > 0) {
                            const sample = obj.factories[0];
                            if (sample.price && Array.isArray(sample.price) && sample.level !== undefined) {
                                factory = obj;
                            }
                        } else if (typeof obj.addCash === 'function' && obj.cash !== undefined) {
                            factory = obj;
                        }
                    }
                    if (!tower && obj.roundCompleted !== undefined) {
                        tower = obj;
                    }
                    if (Array.isArray(obj)) {
                        obj.forEach(item => scanDeep(item, depth + 1));
                    } else {
                        if (obj.props) scanDeep(obj.props, depth + 1);
                        if (obj.children) scanDeep(obj.children, depth + 1);
                        if (obj.memoizedProps) scanDeep(obj.memoizedProps, depth + 1);
                        if (obj.memoizedState) scanDeep(obj.memoizedState, depth + 1);
                    }
                }

                function traverseDOM(node) {
                    if (factory && tower) return;
                    const k = Object.keys(node).find(key => key.startsWith('__reactFiber'));
                    if (k) scanDeep(node[k]);
                    for (const child of node.children) traverseDOM(child);
                }
                traverseDOM(root);
                let defaultResult = null;
                try {
                    defaultResult = Object.values(
                        (function react(r = document.querySelector("body>div")) {
                            return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"));
                        })()
                    )[1].children[0]._owner.stateNode;
                } catch (e) {}
                return {
                    factory,
                    tower,
                    default: defaultResult
                };
            }
            try {
                return Object.values(
                    (function react(r = document.querySelector("body>div")) {
                        return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"));
                    })()
                )[1].children[0]._owner.stateNode;
            } catch (e) {
                return null;
            }
        }

        function getPlayerOptions() {
            try {
                let stateNode = getStateNode();
                return stateNode?.props?.liveGameController?._liveApp ?
                    new Promise((res) => stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players)))) : [];
            } catch {
                return [];
            }
        }

        function getHook(node, index) {
            let hook = node.memoizedState;
            let i = 0;
            while (hook && i < index) {
                hook = hook.next;
                i++;
            }
            return hook;
        }

        function GetPhaser() {
            if (!window.Phaser) {
                alert("Phaser not found!");
                return null;
            }
            window._groups ??= new Set();
            window._sprites ??= new Set();
            if (!window._phaserSceneHooked) {
                const SceneManager = window.Phaser.Scenes.SceneManager.prototype;
                const originalUpdate = SceneManager.update;
                SceneManager.update = function(time, delta) {
                    originalUpdate.call(this, time, delta);
                    window._SCENE = this.scenes.find(s => s.sys?.isActive() && s.sys?.settings?.key !== 'Boot');
                };
                window._phaserSceneHooked = true;
            }
            if (!window._phaserGroupHooked && window.Phaser.GameObjects?.Group?.prototype) {
                const Group = window.Phaser.GameObjects.Group.prototype;
                const originalUpdate = Group.preUpdate || Group.update;
                if (originalUpdate) {
                    Group.preUpdate = function(...args) {
                        window._groups.add(this);
                        return originalUpdate?.apply(this, args);
                    };
                }
                window._phaserGroupHooked = true;
            }
            if (!window._phaserSpriteHooked && window.Phaser.GameObjects?.Sprite?.prototype) {
                const Sprite = window.Phaser.GameObjects.Sprite.prototype;
                const originalUpdate = Sprite.preUpdate;
                Sprite.preUpdate = function(time, delta) {
                    window._sprites.add(this);
                    const key = this.texture?.key;
                    if (key?.includes('player') || key?.includes('blook') || this.name?.includes('player')) {
                        window._player = this;
                    }
                    return originalUpdate?.apply(this, arguments);
                };
                window._phaserSpriteHooked = true;
            }
            if (!window._phaserBodyHooked && window.Phaser.Physics?.Arcade?.Body?.prototype) {
                const Body = window.Phaser.Physics.Arcade.Body.prototype;
                const originalUpdate = Body.preUpdate;
                Body.preUpdate = function() {
                    const key = this.gameObject?.texture?.key;
                    if (key?.includes('player') || key?.includes('blook')) {
                        window._playerBody = this;
                    }
                    return originalUpdate?.apply(this, arguments);
                };
                window._phaserBodyHooked = true;
            }
            if (!window._phaserWorldHooked && window.Phaser.Physics?.Arcade?.World?.prototype) {
                const World = window.Phaser.Physics.Arcade.World.prototype;
                const checkInvincibility = (body1, body2) =>
                    window._invincibilityActive && (body1 === window._playerBody || body2 === window._playerBody);
                if (World.collideObjects) {
                    const originalCollide = World.collideObjects;
                    World.collideObjects = function(body1, body2, ...args) {
                        return checkInvincibility(body1, body2) ? false : originalCollide.apply(this, [body1, body2, ...args]);
                    };
                }
                if (World.separate) {
                    const originalSeparate = World.separate;
                    World.separate = function(body1, body2, ...args) {
                        return checkInvincibility(body1, body2) ? false : originalSeparate.apply(this, [body1, body2, ...args]);
                    };
                }
                window._phaserWorldHooked = true;
            }
            if (!window._SCENE) {
                const scenes = window.Phaser.Scene.SceneManager?.prototype?.scenes || [];
                window._SCENE = scenes.find(s => s?.sys?.isActive?.() && s.sys?.settings?.key !== 'Boot');
            }
            if (!window._SCENE) return null;
            return new Proxy(window._SCENE, {
                get(target, prop) {
                    const accessors = {
                        groups: window._groups,
                        sprites: window._sprites,
                        player: window._player,
                        playerBody: window._playerBody,
                        scene: target
                    };
                    return accessors[prop] ?? target[prop];
                }
            });
        }
        const getSystem = (() => {
            const F = new Set(["cryptohack.blooket.com", "goldquest.blooket.com", "fishing.blooket.com"])
            const s = () =>
                location.pathname.includes("solo") ||
                location.pathname.includes("practice") ||
                window.game?.settings?.solo === true ||
                window.game?.solo === true
            return () => {
                const h = location.hostname
                if (h === "play.blooket.com" || h === "dashboard.blooket.com" || !h.endsWith(".blooket.com")) return "menu"
                if (F.has(h)) return "firebase"
                return s() ? "colyseus-solo" : "colyseus"
            }
        })()
        window.addEventListener("keydown", keydown);
    });
    cheat()
})();
