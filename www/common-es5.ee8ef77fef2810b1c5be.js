!function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n,e,r,i,o,c){try{var a=t[o](c),u=a.value}catch(s){return void e(s)}a.done?n(u):Promise.resolve(u).then(r,i)}function r(t){return function(){var n=this,r=arguments;return new Promise(function(i,o){var c=t.apply(n,r);function a(t){e(c,i,o,a,u,"next",t)}function u(t){e(c,i,o,a,u,"throw",t)}a(void 0)})}}(self.webpackChunkTracktikFeTest=self.webpackChunkTracktikFeTest||[]).push([[8592],{8225:function(t,n,e){"use strict";e.d(n,{c:function(){return c}});var r=e(3150),i=e(2954),o=e(9461),c=function(t,n){var e,c,a=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(s(),u(o,i)):s()}},u=function(t,n){e=t,c||(c=e);var i=e;(0,r.c)(function(){return i.classList.add("ion-activated")}),n()},s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;(0,r.c)(function(){return n.classList.remove("ion-activated")}),t&&c!==e&&e.click(),e=void 0}};return(0,o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return a(t.currentX,t.currentY,i.a)},onMove:function(t){return a(t.currentX,t.currentY,i.b)},onEnd:function(){s(!0),(0,i.h)(),c=void 0}})}},7330:function(t,n,e){"use strict";e.d(n,{a:function(){return o},d:function(){return c}});var i=e(2377),o=function(){var t=r(regeneratorRuntime.mark(function t(n,e,r,o,c){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,r,c,o));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:return a="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,o&&o.forEach(function(t){return a.classList.add(t)}),c&&Object.assign(a,c),e.appendChild(a),t.next=10,new Promise(function(t){return(0,i.c)(a,t)});case 10:return t.abrupt("return",a);case 11:case"end":return t.stop()}},t)}));return function(n,e,r,i,o){return t.apply(this,arguments)}}(),c=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},2954:function(t,n,e){"use strict";e.d(n,{a:function(){return o},b:function(){return c},c:function(){return i},d:function(){return u},h:function(){return a}});var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},c=function(){r.selectionChanged()},a=function(){r.selectionEnd()},u=function(t){r.impact(t)}},6575:function(t,e,r){"use strict";r.d(e,{s:function(){return i}});var i=function(t){try{if(t instanceof function(){return function t(e){n(this,t),this.value=e}}())return t.value;if(!a()||"string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),r=document.createElement("div");e.appendChild(r),r.innerHTML=t,s.forEach(function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var i=n[r];i.parentNode?i.parentNode.removeChild(i):e.removeChild(i);for(var a=c(i),u=0;u<a.length;u++)o(a[u])}});for(var i=c(e),u=0;u<i.length;u++)o(i[u]);var l=document.createElement("div");l.appendChild(e);var f=l.querySelector("div");return null!==f?f.innerHTML:l.innerHTML}catch(p){return console.error(p),""}},o=function t(n){if(!n.nodeType||1===n.nodeType){for(var e=n.attributes.length-1;e>=0;e--){var r=n.attributes.item(e),i=r.name;if(u.includes(i.toLowerCase())){var o=r.value;null!=o&&o.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}else n.removeAttribute(i)}for(var a=c(n),s=0;s<a.length;s++)t(a[s])}},c=function(t){return null!=t.children?t.children:t.childNodes},a=function(){var t=window,n=t&&t.Ionic&&t.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},u=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},408:function(t,n,e){"use strict";e.d(n,{S:function(){return r}});var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},1269:function(t,n,e){"use strict";e.d(n,{c:function(){return o},g:function(){return c},h:function(){return i},o:function(){return u}});var i=function(t,n){return null!==n.closest(t)},o=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((e={"ion-color":!0},r="ion-color-".concat(t),i=!0,r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e),n):n;var e,r,i},c=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n},a=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=r(regeneratorRuntime.mark(function t(n,e,r,i){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||a.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)}));return function(n,e,r,i){return t.apply(this,arguments)}}()},4419:function(e,r,i){"use strict";i.d(r,{p:function(){return u}});var o=i(1841),c=i(639),a="https://tracktik-challenge.staffr.com",u=function(){var e=function(){function e(t){n(this,e),this.httpClient=t,this.httpOptions={headers:new o.WM({"Content-Type":"application/json"})}}var r,i,c;return r=e,(i=[{key:"getSitesList",value:function(t,n,e){var r="";return console.log(e),e&&e.title&&(r+="&title=".concat(this.capitalizeFirstLetter(e.title)),console.log(r)),e&&e.firstName&&(r+="&contacts.main.firstName=".concat(e.contactFirstName)),this.httpClient.get("".concat(a,"/sites?_page=").concat(t).concat(r||""),{observe:"response"}).toPromise()}},{key:"getSiteDetail",value:function(t){return this.httpClient.get("".concat(a,"/sites/").concat(t)).toPromise()}},{key:"updateSite",value:function(t,n){return this.httpClient.patch("".concat(a,"/sites/").concat(t),{contacts:{main:n}},this.httpOptions).toPromise()}},{key:"deleteSite",value:function(t){return this.httpClient.delete("".concat(a,"/sites/").concat(t),this.httpOptions).toPromise()}},{key:"addSite",value:function(t){return this.httpClient.post("".concat(a,"/sites"),t,this.httpOptions).toPromise()}},{key:"capitalizeFirstLetter",value:function(t){return t.trim().toLowerCase().replace(/\w\S*/g,function(t){return t.replace(/^\w/,function(t){return t.toUpperCase()})})}}])&&t(r.prototype,i),c&&t(r,c),e}();return e.\u0275fac=function(t){return new(t||e)(c.LFG(o.eN))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();