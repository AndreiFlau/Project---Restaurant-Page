(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),s=t.n(c),d=new URL(t(123),t.b),u=i()(r()),l=s()(d);u.push([n.id,`html {\n    background: no-repeat url(${l});\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    background-attachment: fixed;\n    height: 100%;\n    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.coconut {\n    display: flex;\n    align-items: center;\n}\n\n.coconut img {\n    height: 50px;\n}\n\n\ndiv#content {\n    min-width: 50vw;\n    margin-top: 40px;\n    background-color: khaki;\n    border-radius: 20px;\n    padding: 20px;\n    margin-bottom: 100px;\n}\n\ndiv#content div:not(.coconut) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\ndiv#content li {\n    list-style: none;\n}\n\ndiv#content ul {\n    padding: 30px;\n}\n\ndiv#content p,\ndiv#content li {\n    color: rgb(255, 115, 0);\n}\n\n#contact {\n    text-align: center;\n}\n\n.drinks,\n.snacks,\n.desserts,\n.kiosk,\n.hours,\n.at,\n.john,\n.mario,\n.x01,\n#contact {\n    background-color: beige;\n    border: 1px solid rgb(255, 174, 0);\n    width: 80%;\n    padding: 10px;\n}\n\n#home {\n    color: blue;\n}\n\nfooter {\n    display: flex;\n    gap: 20px;\n    margin-top: auto;\n    width: 100vw;\n    justify-content: center;\n    background-color: antiquewhite;\n}`,""]);const p=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var m=r(h,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var u=t(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},123:(n,e,t)=>{n.exports=t.p+"181e27fc868d8cd62d9b.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),c=t(56),s=t.n(c),d=t(540),u=t.n(d),l=t(113),p=t.n(l),h=t(365),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),e()(h.A,m),h.A&&h.A.locals&&h.A.locals;const f=t.p+"ef68a5ad968441e22ace.svg";function v(){const n=document.createElement("div"),e=document.createElement("div");e.classList.add("coconut");const t=document.createElement("div");t.classList.add("kiosk");const o=document.createElement("h1"),r=document.createElement("p");o.appendChild(r);const a=document.createElement("h2"),i=document.createElement("ul"),c=document.createElement("div");c.classList.add("hours"),c.appendChild(a),c.appendChild(i);const s=document.createElement("h2"),d=document.createElement("p"),u=document.createElement("div");u.classList.add("at"),u.appendChild(s),u.appendChild(d);const l=new Image;return l.src=f,o.textContent="Tropical Kiosk",r.innerHTML="This is our simple kiosk by the beach. <br> Come and enjoy our tropical drinks and delicious meals!",a.textContent="Hours",[{day:"Sunday",time:"10 A.M - 10 P.M",num:1},{day:"Monday",time:"10 A.M - 10 P.M",num:2},{day:"Tuesday",time:"10 A.M - 10 P.M",num:3},{day:"Wednesday",time:"10 A.M - 10 P.M",num:4},{day:"Thursday",time:"10 A.M - 10 P.M",num:5},{day:"Friday",time:"12 A.M - 12 P.M",num:6},{day:"Saturday",time:"12 A.M - 12 P.M",num:7}].forEach((n=>{const e=document.createElement("li"),t=document.createElement("p");e.classList.add(`day-${n.num}`),t.textContent=`${n.day} - ${n.time}`,e.appendChild(t),i.appendChild(e)})),s.textContent="At",d.textContent="Fictional Beach - Somewhere in the world",e.appendChild(l),e.appendChild(o),t.appendChild(e),t.appendChild(r),n.appendChild(t),n.appendChild(c),n.appendChild(u),n}const y=document.querySelector("div#content"),g=document.querySelector("#home"),b=document.querySelector("#menu"),x=document.querySelector("#about");function C(n,e){n.addEventListener("click",(()=>{for(;y.firstChild;)y.removeChild(y.firstChild);y.appendChild(e())}))}C(g,v),C(b,(function(){const n=document.createElement("div");return n.innerHTML='\n    <div class="drinks">\n    <h1>Drinks</h1>\n    <h2>Coconut Water</h2>\n    <p>The classic beach drink... Plain coconut water!</p>\n    \n    <h2>Tropical Smoothie</h2>\n    <p>A delicious blend of strawberries, papaya, and bananas</p>\n    </div>\n    \n    <div class="snacks">\n    <h1>Snacks</h1>\n    <h2>Grilled Shrimp</h2>\n    <p>A portion of crispy and yummy shrimps!</p>\n    \n    <h2>Beach Burger</h2>\n    <p>A delicious grilled hamburger made with a juicy fish patty!</p>\n    </div>\n    \n    <div class="desserts">\n    <h1>Desserts</h1>\n    <h2>Ice Cream</h2>\n    <p>A variety of creamy ice cream flavors to cool your body!</p>\n    \n    <h2>Fruit Salad</h2>\n    <p>A chilly fruit salad of delicious tropical fruits!</p></div>',n})),C(x,(function(){const n=document.createElement("div");return n.innerHTML='\n    <h1 id="contact">Contact Us</h1>\n    <div class="john">\n    <h2>John Doe</h2>\n    <p>Ceo</p>\n    <p>Phone Number: 123-456-789</p>\n    </div>\n    \n    <div class="mario">\n    <h2>Mario</h2>\n    <p>Plumber</p>\n    <p>Phone Number: 000-000-000</p>\n    </div>\n    \n    <div class="x01">\n    <h2>Waitress-X01</h2>\n    <p>Robot Waitress</p>\n    <p>Doesn\'t have a phone number</p></div>',n})),y.appendChild(v()),document.body.appendChild(function(){const n=document.createElement("footer"),e=document.createElement("p"),t=document.createElement("a");t.href="https://www.flaticon.com/free-icons/coconut",t.title="coconut icons",t.textContent="Coconut icons created by designbydai - Flaticon",e.appendChild(t);const o=document.createElement("p");return o.innerHTML='\n     Photo by <a\n        href="https://unsplash.com/@kenrickmills?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kenrick\n        Mills</a> on <a\n        href="https://unsplash.com/photos/green-coconut-trees-qPsAJhHVbvM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',n.appendChild(e),n.appendChild(o),n}()),console.log("a")})()})();