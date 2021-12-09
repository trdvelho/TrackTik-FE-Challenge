!function(){function e(e,t,n,i,r,a,s){try{var o=e[a](s),u=o.value}catch(c){return void n(c)}o.done?t(u):Promise.resolve(u).then(i,r)}function t(t){return function(){var n=this,i=arguments;return new Promise(function(r,a){var s=t.apply(n,i);function o(t){e(s,r,a,o,u,"next",t)}function u(t){e(s,r,a,o,u,"throw",t)}o(void 0)})}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(self.webpackChunkTracktikFeTest=self.webpackChunkTracktikFeTest||[]).push([[7802],{7802:function(e,i,a){"use strict";a.r(i),a.d(i,{ion_tab:function(){return u},ion_tabs:function(){return c}});var s=a(3150),o=a(7330),u=function(){function e(t){n(this,e),(0,s.r)(this,t),this.loaded=!1,this.active=!1}var i,a;return r(e,[{key:"componentWillLoad",value:(a=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.active,!e.t0){e.next=4;break}return e.next=4,this.setActive();case 4:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"setActive",value:(i=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.prepareLazyLoaded();case 2:this.active=!0;case 3:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"changeActive",value:function(e){e&&this.prepareLazyLoaded()}},{key:"prepareLazyLoaded",value:function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,o.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}},{key:"render",value:function(){var e=this.tab,t=this.active,n=this.component;return(0,s.h)(s.H,{role:"tabpanel","aria-hidden":t?null:"true","aria-labelledby":"tab-button-".concat(e),class:{"ion-page":void 0===n,"tab-hidden":!t}},(0,s.h)("slot",null))}},{key:"el",get:function(){return(0,s.i)(this)}}],[{key:"watchers",get:function(){return{active:["changeActive"]}}}]),e}();u.style=":host(.tab-hidden){display:none !important}";var c=function(){function e(t){var i=this;n(this,e),(0,s.r)(this,t),this.ionNavWillLoad=(0,s.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,s.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,s.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(e){var t=e.detail,n=t.href,r=t.tab;if(i.useRouter&&void 0!==n){var a=document.querySelector("ion-router");a&&a.push(n)}else i.select(r)}}var i,a,o,u,c;return r(e,[{key:"componentWillLoad",value:(c=t(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter){e.next=6;break}if(t=this.tabs,e.t0=t.length>0,!e.t0){e.next=6;break}return e.next=6,this.select(t[0]);case 6:this.ionNavWillLoad.emit();case 7:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"componentWillRender",value:function(){var e=this.el.querySelector("ion-tab-bar");e&&(e.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}},{key:"select",value:(u=t(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l(this.tabs,t),e.t0=!!this.shouldSwitch(n),!e.t0){e.next=9;break}return e.next=5,this.setActive(n);case 5:return e.next=7,this.notifyRouter();case 7:this.tabSwitch(),e.t0=!0;case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}},e,this)})),function(e){return u.apply(this,arguments)})},{key:"getTab",value:(o=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l(this.tabs,t));case 1:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})},{key:"getSelected",value:function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}},{key:"setRouteId",value:(a=t(regeneratorRuntime.mark(function e(t){var n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l(this.tabs,t),!this.shouldSwitch(n)){e.next=7;break}return e.next=4,this.setActive(n);case 4:e.t0={changed:!0,element:this.selectedTab,markVisible:function(){return i.tabSwitch()}},e.next=8;break;case 7:e.t0={changed:!1,element:this.selectedTab};case 8:return e.abrupt("return",e.t0);case 9:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})},{key:"getRouteId",value:(i=t(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.selectedTab&&this.selectedTab.tab,e.abrupt("return",void 0!==t?{id:t,element:this.selectedTab}:void 0);case 2:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"setActive",value:function(e){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=e,this.ionTabsWillChange.emit({tab:e.tab}),e.active=!0,Promise.resolve())}},{key:"tabSwitch",value:function(){var e=this.selectedTab,t=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,e&&t!==e&&(t&&(t.active=!1),this.ionTabsDidChange.emit({tab:e.tab}))}},{key:"notifyRouter",value:function(){if(this.useRouter){var e=document.querySelector("ion-router");if(e)return e.navChanged("forward")}return Promise.resolve(!1)}},{key:"shouldSwitch",value:function(e){return void 0!==e&&e!==this.selectedTab&&!this.transitioning}},{key:"tabs",get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))}},{key:"render",value:function(){return(0,s.h)(s.H,{onIonTabButtonClick:this.onTabClicked},(0,s.h)("slot",{name:"top"}),(0,s.h)("div",{class:"tabs-inner"},(0,s.h)("slot",null)),(0,s.h)("slot",{name:"bottom"}))}},{key:"el",get:function(){return(0,s.i)(this)}}]),e}(),l=function(e,t){var n="string"==typeof t?e.find(function(e){return e.tab===t}):t;return n||console.error('tab with id: "'.concat(n,'" does not exist')),n};c.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}])}();