!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t){const n=["ruleName","matchURL","matchURLMode","prefix","suffix"],r=document.getElementById("rules");chrome.storage.sync.get("rules",e=>{e.rules.map(e=>{const t=document.createElement("li");n.forEach(n=>{const r=document.createElement("input");r.value=e[n],t.appendChild(r)}),r.appendChild(t)})}),document.getElementById("add-rule-button").addEventListener("click",()=>{const e=document.getElementById("match-url-mode"),t={ruleName:document.getElementById("rule-name").value,matchURL:document.getElementById("match-url").value,matchURLMode:e.options[e.selectedIndex].value,prefix:document.getElementById("prefix").value,suffix:document.getElementById("suffix").value};chrome.storage.sync.get("rules",e=>{e.rules.push(t),chrome.storage.sync.set({rules:e.rules})})})}]);
//# sourceMappingURL=options.js.map