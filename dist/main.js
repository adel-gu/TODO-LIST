(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),s=n(645),o=n.n(s)()(a());o.push([e.id,'/* Reset */\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: #f6f6f6;\r\n  display: grid;\r\n  place-content: center;\r\n  min-height: 100%;\r\n  font-family: "Lato", sans-serif;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n/* Utilities */\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.align-center {\r\n  align-items: center;\r\n}\r\n\r\n.grow-1 {\r\n  flex-grow: 0;\r\n}\r\n\r\n.grow-2 {\r\n  flex-grow: 1;\r\n}\r\n\r\n.border {\r\n  border-bottom: 1px solid #f6f6f6;\r\n}\r\n\r\n.border-none {\r\n  border: none;\r\n}\r\n\r\n.p {\r\n  padding: 1em;\r\n}\r\n\r\n.pe {\r\n  padding-right: 1em;\r\n}\r\n\r\n.px {\r\n  padding-inline: 1em;\r\n}\r\n\r\n.ms {\r\n  margin-left: 0.25em;\r\n}\r\n\r\n.w-100 {\r\n  width: 100%;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.pos-r {\r\n  position: relative;\r\n}\r\n\r\n.pos-a {\r\n  position: absolute;\r\n}\r\n\r\n/* Main Styling */\r\n.todo-app {\r\n  width: 600px;\r\n  max-width: 60%;\r\n  margin-inline: auto;\r\n  background: #fff;\r\n  box-shadow: 10px 15px 16px -10px rgba(185, 185, 185, 0.5);\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n  color: #b9b9b9;\r\n}\r\n\r\n.bg {\r\n  background: #fffeca;\r\n}\r\n\r\n.task-description {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n/* Buttons */\r\n.btn {\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  background: none;\r\n  border: none;\r\n  padding-inline: 5px;\r\n}\r\n\r\n.clear {\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  width: 100%;\r\n  border: none;\r\n  background: #f6f6f6;\r\n}\r\n\r\n/* Interactions */\r\n.btn:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.clear:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.border-none:active,\r\n.border-none:focus {\r\n  outline: none;\r\n}\r\n\r\n.task-description:focus {\r\n  outline: none;\r\n}\r\n',""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},o=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],l=s[d]||0,u="".concat(d," ").concat(l);s[d]=l+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}o.push(u)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var s=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var i=n(s[o]);t[i].references--}for(var c=r(e,a),d=0;d<s.length;d++){var l=n(s[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{static getTasks=()=>{let e=[];return localStorage.getItem("Tasks")&&(e=JSON.parse(localStorage.getItem("Tasks"))),e};static setTasks=e=>{localStorage.setItem("Tasks",JSON.stringify(e))}}class t{static#e=e=>e?"checked":"";static#t=(e,n)=>{const r=`\n    <li class="list_todo-item flex justify-between ${t.#e(e.completed)}-item align-center border px" data-index="${e.index}">\n      <div class="flex align-center grow-2">\n        <input type="checkbox" name="check" id="check" ${t.#e(e.completed)} data-index="${e.index}"/>\n        <div class="pos-r w-100">\n          <input type="text" value="${e.description}" class="task-description ${t.#e(e.completed)} w-100 p" contenteditable="true"/>\n        </div>\n      </div>\n      <div class="item-icons flex align-center grow-1">\n        <button class="btn btn-tool delete-btn" data-index="${e.index}">\n          &#x1F5D1;\n        </button>\n      </div>\n    </li>\n  `;n.innerHTML+=r};static#n=t=>{const n=e.getTasks();n.push(t),e.setTasks(n)};static task=(n,r)=>{const a={description:n,completed:!1,index:e.getTasks().length+1};t.#t(a,r),t.#n(a)};static tasks=n=>{e.getTasks().forEach((e=>{t.#t(e,n)}))}}class r{static#r=e=>{e.remove()};static#a=t=>{let n=e.getTasks();n=n.filter((e=>e.index!==parseInt(t.getAttribute("data-index"),10))),e.setTasks(n)};static#s=e=>{let t=1;[...e].forEach((e=>{e.setAttribute("data-index",`${t}`),t+=1}))};static#o=()=>{const t=e.getTasks();let n=1;t.forEach((e=>{e.index=n,n+=1})),e.setTasks(t)};static task=e=>{r.#a(e),r.#r(e)};static updateIndexes=e=>{r.#s(e),r.#o()}}class a{static#i(t,n){const r=e.getTasks();r.forEach(((e,a)=>{a===parseInt(t.getAttribute("data-index")-1,10)&&(r[a].description=n.value)})),e.setTasks(r)}static task(e,t){a.#i(e,t)}}class s{static#c=(e,t,n)=>{t?(n.classList.add("checked"),e.classList.add("checked-item")):(n.classList.remove("checked"),e.classList.remove("checked-item"))};static#d=(t,n)=>{const r=e.getTasks();r.forEach((e=>{e.index===parseInt(t.getAttribute("data-index"),10)&&(e.completed=n)})),e.setTasks(r)};static task=(e,t,n)=>{s.#c(e,t,n),s.#d(e,t)}}var o=n(379),i=n.n(o),c=n(795),d=n.n(c),l=n(569),u=n.n(l),p=n(565),f=n.n(p),m=n(216),g=n.n(m),v=n(589),h=n.n(v),b=n(426),k={};k.styleTagTransform=h(),k.setAttributes=f(),k.insert=u().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=g(),i()(b.Z,k),b.Z&&b.Z.locals&&b.Z.locals;const x=document.forms[0],y=x.task,E=document.querySelector(".todo_body_list"),T=document.querySelector(".clear");var w,S;w=y,S=E,x.addEventListener("submit",(e=>{e.preventDefault(),""!==w.value&&t.task(w.value,S),(e=>{e.value=""})(w)})),(e=>{e.addEventListener("click",(t=>{if(t.target.classList.contains("delete-btn")){const n=t.target,a=e.querySelector(`li[data-index= "${n.getAttribute("data-index")}"]`);r.task(a);const s=document.getElementsByClassName("list_todo-item"),o=document.getElementsByClassName("delete-btn");r.updateIndexes(s),r.updateIndexes(o)}}))})(E),(e=>{e.addEventListener("click",(e=>{e.target.classList.contains("task-description")&&e.target.parentElement.parentElement.parentElement.classList.add("bg")})),e.addEventListener("focusout",(e=>{if(e.target.classList.contains("task-description")){const t=e.target,n=t.parentElement.parentElement.parentElement;a.task(n,t),n.classList.remove("bg")}}))})(E),(e=>{document.addEventListener("DOMContentLoaded",(()=>{t.tasks(e)}))})(E),(e=>{e.addEventListener("change",(e=>{const t=e.target;if("checkbox"===t.getAttribute("type")){const e=t.checked,n=t.parentElement.parentElement,r=n.querySelector(".task-description");s.task(n,e,r)}}))})(E),((e,t)=>{t.addEventListener("click",(()=>{[...e.getElementsByClassName("checked-item")].forEach((e=>{r.task(e)}));const t=document.getElementsByClassName("list_todo-item"),n=e.getElementsByClassName("delete-btn");r.updateIndexes(t),r.updateIndexes(n)}))})(E,T)})()})();