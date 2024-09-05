(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(354),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([e.id,"/* styles.css */\n/* From: Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n    isolation: isolate;\n}\n\n/* -------------------------------------------------------------------------\n*/\n\n:root {\n    font-size: 16px;\n    --page-width: 750px;\n\n    color: rgb(29, 29, 181);\n}\n\nheader{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 30px;\n    gap: 20px;\n    /* height: 100vh; */\n}\n\n#eras {\n    height: 40px;\n}\n\n#eras option {\n    height: 40px;\n}\n\n#eras option:first-child {\n    text-align: center;\n}\n\n.nav-filled {\n    background-color: black;\n}\n\n\n\n@media (max-width: 425px) {\n    :root {\n        font-size: 12px;\n    }\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA,eAAe;AACf;;CAEC;AACD;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA;;;;;IAKI,cAAc;IACd,eAAe;AACnB;;AAEA;;;;IAII,aAAa;AACjB;;AAEA;;;;;;;IAOI,yBAAyB;AAC7B;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;CACC;;AAED;IACI,eAAe;IACf,mBAAmB;;IAEnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;AAC3B;;;;AAIA;IACI;QACI,eAAe;IACnB;AACJ",sourcesContent:["/* styles.css */\n/* From: Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n    isolation: isolate;\n}\n\n/* -------------------------------------------------------------------------\n*/\n\n:root {\n    font-size: 16px;\n    --page-width: 750px;\n\n    color: rgb(29, 29, 181);\n}\n\nheader{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 30px;\n    gap: 20px;\n    /* height: 100vh; */\n}\n\n#eras {\n    height: 40px;\n}\n\n#eras option {\n    height: 40px;\n}\n\n#eras option:first-child {\n    text-align: center;\n}\n\n.nav-filled {\n    background-color: black;\n}\n\n\n\n@media (max-width: 425px) {\n    :root {\n        font-size: 12px;\n    }\n}"],sourceRoot:""}]);const s=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(A);else{var f=r(A,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=o(e,r),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;const o=t.p+"e53897ddc03966de68bf.png",r=t.p+"12b60e88eda28e9d0272.jpeg",i=t.p+"c6bdb696a257cc53bed1.png",a=t.p+"f41cbeb54102499c5ad1.jpg",s=t.p+"bc3ada2b6cb7126fa946.png",c=t.p+"ddfcbad32486e9c41640.png",l=t.p+"16558bf5aa385e2b371d.png",d=t.p+"654774b07898bd5a8b47.png",p=[o,r,i,a],u=['Louis II, "the Younger", King of Italy',"Rastislav of Moravia","Rhodri ap Merfyn, King of Wales","Charles the Bald, King of West Francia"],A=[s,c,l,d],f=["Leonardo Da Vinci","Sir Isaac Newton",'Suleiman, "The Magnificent"',"Vasco de Gama"];let h=0;const m=500;function y(e,n,t){const o=document.querySelector(e),r=document.createElement("div");o.appendChild(r);const i=document.createElement("div");r.appendChild(i),r.style.position="relative",r.style.border="2px solid black",r.style.width="500px",r.style.height="600px",r.style.overflowX="hidden",r.style.overflowY="hidden",r.classList.add("carousel-window"),i.style.width="2000px",i.style.height="600px",i.style.display="grid",i.style.position="absolute",i.classList.add("wide-slide");let a="";for(let e=0;e<4;e++){a+="500px ";const o=document.createElement("div");i.appendChild(o),o.style.width="500px ",o.style.display="flex",o.style.flexDirection="column",o.style.justifyContent="center",o.style.alignItems="center";const r=document.createElement("img");r.style.maxWidth="300px ",r.style.maxHeight="400px ",r.src=n[e],o.appendChild(r);const s=document.createElement("p");o.appendChild(s),s.textContent=`${e+1}: ${t[e]}`,s.style.textAlign="center"}i.style.gridTemplateColumns=a,v("left",n.length,m),v("right",n.length,m),function(){const e=document.querySelector(".carousel-window"),n=e.offsetWidth,t=e.offsetHeight,o=document.createElement("div");e.appendChild(o),o.classList.add("nav-dots-container"),o.style.position="absolute";o.style.gap="5px";o.style.height="40px",o.style.top=t-40-15+"px",o.style.left=n/2-37.5+"px",o.style.display="flex",o.style.justifyContent="space-around",o.style.alignItems="center";for(let e=0;e<4;e++){const n=document.createElement("button");o.appendChild(n),n.style.borderRadius="50%",n.id=`btn${e}`,n.style.width="15px",n.style.height="15px",n.style.color="green",0===e&&n.classList.add("nav-filled"),n.addEventListener("click",(()=>{h=e,C(e,m,4)}))}}(),function(){const e=document.querySelector(".carousel-window"),n=document.createElement("button");e.appendChild(n),n.classList.add("slideshow-button"),n.style.position="absolute",n.style.left="35%",n.style.top="85%",n.style.width="170px",n.style.height="40px",n.textContent="Click to Start Slideshow",n.addEventListener("click",(()=>{var e;""===window.name?(window.name=setInterval((()=>(g(4),void C(h,m,4))),3e3),n.textContent="Click to Stop Slideshow"):(e=window.name,clearInterval(e),window.name="",n.textContent="Click to Start Slideshow")}))}()}function v(e,n,t){const o=document.querySelector(".carousel-window"),r=document.createElement("button");r.style.position="absolute",r.style.top="49%",r.id=`${e}btn`,o.appendChild(r),"left"===e?(r.textContent="Back",r.style.left="5%"):(r.textContent="Forward",r.style.left="85%"),r.addEventListener("click",(()=>{"left"===e?function(e){h=h-1>-1?h-1:e-1}(n):g(n),C(h,t,n)}))}function g(e){h=h+1<e?h+1:0}function C(e,n,t){const o=e*n;document.querySelector(".wide-slide").style.left=`-${o}px`,document.querySelector(`#btn${e}`).classList.add("nav-filled");for(let n=0;n<t;n++)n!==e&&document.querySelector(`#btn${n}`).classList.remove("nav-filled")}var b=t(72),x=t.n(b),w=t(825),I=t.n(w),B=t(659),E=t.n(B),S=t(56),k=t.n(S),j=t(540),L=t.n(j),T=t(113),M=t.n(T),R=t(365),q={};q.styleTagTransform=M(),q.setAttributes=k(),q.insert=E().bind(null,"head"),q.domAPI=I(),q.insertStyleElement=L(),x()(R.A,q),R.A&&R.A.locals&&R.A.locals,function(e,n,t,o,r){const i=document.querySelector("header"),a=document.createElement("h1");a.textContent="Cool Historical Pictures",i.appendChild(a);const s=document.createElement("select"),c=document.querySelector(".content");i.appendChild(s),s.setAttribute("name","eras-return"),s.setAttribute("id","eras");for(let e=0;e<o.length;e++){const n=document.createElement("option");s.appendChild(n),n.value=o[e],n.textContent=r[e]}s.addEventListener("click",(()=>{"medieval"===s.value?(c.innerHTML="",y(".content",p,u)):"earlymodern"===s.value&&(c.innerHTML="",y(".content",A,f)),""!==window.name&&(clearInterval(window.name),window.name="")}))}(0,0,0,["noneselected","medieval","earlymodern"],["-----   Select An Option   -----","Medieval","Early Modern"])})();
//# sourceMappingURL=main.js.map