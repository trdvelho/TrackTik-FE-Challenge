(self.webpackChunkTracktikFeTest=self.webpackChunkTracktikFeTest||[]).push([[1296],{1296:function(e,t,n){"use strict";n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return y},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return d},setKeyboardClose:function(){return f},setKeyboardOpen:function(){return c},startKeyboardAssist:function(){return u},trackViewportChanges:function(){return l}});const i="ionKeyboardDidShow",o="ionKeyboardDidHide";let r={},s={},a=!1;const d=()=>{r={},s={},a=!1},u=e=>{h(e),e.visualViewport&&(s=y(e.visualViewport),e.visualViewport.onresize=()=>{l(e),p()||b(e)?c(e):g(e)&&f(e)})},h=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>f(e))},c=(e,t)=>{k(e,t),a=!0},f=e=>{w(e),a=!1},p=()=>!a&&r.width===s.width&&(r.height-s.height)*s.scale>150,b=e=>a&&!g(e),g=e=>a&&s.height===e.innerHeight,k=(e,t)=>{const n=new CustomEvent(i,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-s.height}});e.dispatchEvent(n)},w=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},l=e=>{r=Object.assign({},s),s=y(e.visualViewport)},y=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);