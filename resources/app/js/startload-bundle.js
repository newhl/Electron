!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=451)}({126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMacInfo=function(){var e=r.networkInterfaces();for(var t in e)-1==t.toLowerCase().indexOf("loopback")||delete e[t];var n="";for(var t in e)e[t].forEach(function(e){"IPV6"!=e.family.toUpperCase()&&(n+=e.mac)});return n},t.getComputerName=function(){return r.hostname()},t.getCPUInfo=function(){return r.cpus()};var r=n(72)},18:function(e,t){e.exports=require("path")},20:function(e,t){e.exports=require("fs")},31:function(e,t){e.exports=require("events")},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remove=void 0;var r,i,o=d(n(36)),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=t.remove=(r=o.default.mark(function e(t){var n,r;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!=(n=h.indexOf(t))){e.next=3;break}return e.abrupt("return",console.warn("pages.remove() called for missing page",t));case 3:for(r in t.isActive&&(p=null,h.length>1&&w(h[n+1]||h[n-1])),h.splice(n,1),m.removeChild(t.webviewEl),g.emit("remove",t),g.emit("update"),t)t[r]=null;case 9:case"end":return e.stop()}},e,this)}),i=function(){var e=r.apply(this,arguments);return new Promise(function(t,n){return function r(i,o){try{var a=e[i](o),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});t(u)}("next")})},function(e){return i.apply(this,arguments)});t.on=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];g.on.apply(g,t)},t.getAll=function(){return h},t.get=function(e){return h[e]},t.create=v,t.setActive=w,t.reorderTab=function(e,t){if(t>1||t<-1)return console.warn("reorderTabBy isnt allowed to offset more than -1 or 1; this is a coding error");var n=h.indexOf(e),r=n+t,i=h[r];if(!i)return!1;return h[n]=i,h[r]=e,g.emit("update"),!0},t.changeActiveBy=function(e){if(h.length>1){var t=h.indexOf(p);if(-1===t)return console.warn("Active page is not in the pages list! THIS SHOULD NOT HAPPEN!");(t+=e)<0&&(t=h.length-1),t>=h.length&&(t=0),w(h[t])}},t.changeActiveTo=function(e){e>=0&&e<h.length&&w(h[e])},t.changeActiveToLast=function(){w(h[h.length-1])},t.getActive=function(){return p},t.getAdjacentPage=function(e,t){if(h.length>1){var n=h.indexOf(e);return-1===n?null:h[n+t]}},t.getByWebview=b,t.getByWebContentsID=function(e){for(var t=0;t<h.length;t++)if(h[t].wcID===e)return h[t];return null},t.getById=x,t.openNewPage=function(e,t){for(var n=0;n<h.length;n++)if(h[n].url==e)return void w(h[n]);var r={};r.url=e,r.title=t,w(v(r))},t.executeFun=function(e,t,n){var r=x(e);r&&r.webviewEl.executeJavaScript(t+"('"+n+"')")},t.refreshPage=function(e){var t=x(e);t&&t.webviewEl.reload()},t.createWebviewEl=j;var c=n(4),l=d(n(31)),s=d(n(18));function d(e){return e&&e.__esModule?e:{default:e}}var f=c.remote.getGlobal("backgroundparam").rootpath,h=[],p=null,g=new l.default,m=document.getElementById("webviews");function v(e){var t="",n="";e&&"object"===(void 0===e?"undefined":a(e))?(t=e.url,n=e.title):"string"==typeof e?(t=e,e={}):e={};var r=(1e3*Math.random()|0)+Date.now(),i={id:r,wcID:null,webviewEl:j(r,t),_url:t,get url(){return this._url},set url(e){this._url=e},loadingURL:t,title:n,manuallyTrackedIsLoading:!0,isWebviewReady:!1,isActive:!1,isTabDragging:!1,tabDragOffset:0,getURL:function(){return this.url},getTitle:function(){return this.title},isLoading:function(){return i.manuallyTrackedIsLoading}};return h.push(i),O(i),m.appendChild(i.webviewEl),g.emit("add",i),i.webviewEl.addEventListener("dom-ready",L),i.webviewEl.addEventListener("crashed",E),i.webviewEl.addEventListener("new-window",y),i.webviewEl.addEventListener("did-start-loading",P),i.webviewEl.addEventListener("did-stop-loading",_),i.webviewEl.addEventListener("close",R),i.webviewEl.addEventListener("did-start-loading",I),i.webviewEl.addEventListener("did-stop-loading",I),p||w(i),i}function y(e){var t=b(e.target);if(t&&t.isActive){var n=v(e.url);"foreground-tab"!==e.disposition&&"new-window"!==e.disposition||w(n)}}function w(e){p&&(O(p),p.isActive=!1),p=e,function(e){console.log(e),e.webviewEl.classList.remove("hidden"),c.ipcRenderer.send("mainpage:command","show-modal-page",e.id)}(e),e.isActive=1,e.webviewEl.focus(),g.emit("set-active",e)}function b(e){return x(e.dataset.id)}function x(e){for(var t=0;t<h.length;t++)if(h[t].id==e)return h[t];return null}function E(e){var t=b(e.target),r=n(20),i=new Date,o=(i.toLocaleDateString(),i.toLocaleDateString()+" "+i.toLocaleTimeString()+":"+t.loadingURL+"\r\n");r.appendFile(c.remote.getGlobal("backgroundparam").rootpath+"\\log\\log.txt",o,function(e){})}function L(e){var t=b(e.target);t&&(t.isWebviewReady=!0,t.wcID||(t.wcID=e.target.getWebContents().id)),t.webviewEl.executeJavaScript('let tabpageid="'+t.id+'"')}function P(e){var t=b(e.target);t&&(t.manuallyTrackedIsLoading=!0)}function _(e){var t=b(e.target);t&&(t.loadingURL&&(t.url=t.loadingURL),t.loadingURL=!1,t.manuallyTrackedIsLoading=!1)}function R(e){var t=b(e.target);t&&u(t)}function O(e){e.webviewEl.classList.add("hidden"),c.ipcRenderer.send("mainpage:command","hide-modal-page",e.id)}function j(e,t){var n=document.createElement("webview");return n.dataset.id=e,n.setAttribute("preload","file://"+s.default.join(f,"/js/common-bundle.js")),n.setAttribute("webpreferences","allowDisplayingInsecureContent,contentIsolation,defaultEncoding=utf-8"),n.setAttribute("src",t),n}function I(e){g.emit(e.type,b(e.target),e)}},36:function(e,t,n){e.exports=n(37)},37:function(e,t,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(38),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},38:function(e,t){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"==typeof e,s=t.regeneratorRuntime;if(s)l&&(e.exports=s);else{(s=t.regeneratorRuntime=l?e.exports:{}).wrap=b;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",g={},m={};m[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==r&&i.call(y,a)&&(m=y);var w=P.prototype=E.prototype=Object.create(m);L.prototype=w.constructor=P,P.constructor=L,P[c]=L.displayName="GeneratorFunction",s.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===L||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,P):(e.__proto__=P,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(w),e},s.awrap=function(e){return{__await:e}},_(R.prototype),R.prototype[u]=function(){return this},s.AsyncIterator=R,s.async=function(e,t,n,r){var i=new R(b(e,t,n,r));return s.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},_(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},s.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=S,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return u.type="throw",u.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function b(e,t,n,r){var i=t&&t.prototype instanceof E?t:E,o=Object.create(i.prototype),a=new T(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return D()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=x(e,t,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function x(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function E(){}function L(){}function P(){}function _(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function R(e){var t;this._invoke=function(n,r){function o(){return new Promise(function(t,o){!function t(n,r,o,a){var u=x(e[n],e,r);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(e){t("next",e,o,a)},function(e){t("throw",e,o,a)}):Promise.resolve(l).then(function(e){c.value=e,o(c)},a)}a(u.arg)}(n,r,t,o)})}return t=t?t.then(o,o):o()}}function O(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method))return g;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=x(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:D}}function D(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},4:function(e,t){e.exports=require("electron")},451:function(e,t,n){"use strict";var r=n(4),i=o(n(59));o(n(126));function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(4).remote.dialog;r.ipcRenderer.sendSync("getlocalparam"),r.ipcRenderer.send("hidestartload"),i.openPage("loginpage")},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="123.123.123";null!==document.getElementById(n)&&document.body.removeChild(document.getElementById(n));var r=document.createElement("canvas");r.width=t.w||420,r.height=t.h||230;var i=r.getContext("2d");i.rotate(-20*Math.PI/180),i.font="20px Vedana",i.fillStyle="rgba(200, 200, 200, 0.40)",i.textAlign="left",i.textBaseline="Middle",i.fillText(e,r.width/8,r.height/10*9);var o=document.createElement("div");return o.id=n,o.style.pointerEvents="none",o.style.top=t.top||"1px",o.style.left=t.left||"80px",o.style.position="fixed",o.style.zIndex="100000",o.style.width=t.width||document.documentElement.clientWidth+"px",o.style.height=t.height||document.documentElement.clientHeight+"px",o.style.background="url("+r.toDataURL("image/png")+") left top repeat",document.body.appendChild(o),n};r.set=function(e){var t=i(e);setInterval(function(){null===document.getElementById(t)&&(t=i(e))},500),window.onresize=function(){i(e)}},t.default=r},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openPage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=void 0;switch(e){case"mainpage":o=n(4).remote.screen,a=o?o.getPrimaryDisplay().bounds:{width:800,height:600},u=Math.max(800,Math.min(1800,a.width-50)),c=Math.max(600,Math.min(1200,a.height-50)),r={x:(a.width-u)/2,y:(a.height-c)/2,width:u,height:c,name:"mainpage",path:"shell-window.html"};break;case"registerpage":r=function(){var e=n(4).remote.screen,t=e?e.getPrimaryDisplay().bounds:{width:800,height:600};return{x:(t.width-500)/2,y:(t.height-390)/2,width:500,height:390,resizable:!1,name:"registerpage",path:"register.html"}}();break;case"loginpage":r=function(){var e=n(4).remote.screen,t=e?e.getPrimaryDisplay().bounds:{width:800,height:600};return{x:(t.width-880)/2,y:(t.height-500)/2,width:880,height:500,resizable:!1,name:"loginpage",path:"login.html"}}();break;case"modifypassword":r=function(e){var t=n(4).remote.screen,r=t?t.getPrimaryDisplay().bounds:{width:800,height:600};return{x:(r.width-400)/2,y:(r.height-200)/2,width:400,height:200,resizable:!1,name:"modifypassword",path:"modifypass.html?userId="+e}}(t)}var o,a,u,c;i.ipcRenderer.send("openpage",r)},t.openModalPage=function(e,t,r,o,a){var u=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",l=function(e,t,r,i,o,a,u){var c=n(4).remote.screen,l=c?c.getPrimaryDisplay().bounds:{width:800,height:600};return{x:(l.width-r)/2,y:(l.height-i)/2,width:r,height:i,name:"modalpage",path:"modalpage.html",weburl:e,title:t,tabpageid:o,closeFlag:a,closeTip:u}}(e,t,r,o,a,u,c);i.ipcRenderer.send("mainpage:command","open-modal-page",l)},t.openModalPage2=function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=u(e,t,n,r,o,a);i.ipcRenderer.send("mainpage:command","open-modal-page2",c)},t.openModalPage3=function(e,t,n,r){var o=u(e,t,n,r,!1,"");i.ipcRenderer.send("mainpage:command","open-modal-page3",o)},t.refreshModalPage=function(e,t,n,r){var o=u(e,t,n,r);i.ipcRenderer.send("mainpage:command","refresh-modal-page",o)},t.executeParentPageFun=function(e,t,n){var r={funName:e,funParam:t};i.ipcRenderer.send("mainpage:command","execute-parentpageFun",r)},t.executeTabPageFun=function(e,t,n){var r={funName:e,funParam:t};i.ipcRenderer.send("mainpage:command","execute-tabpageFun",r)},t.refreshTabPage=function(){i.ipcRenderer.send("mainpage:command","refresh-tab-page")},t.setCloseValid=function(){i.ipcRenderer.send("mainpage:command","setCloseValid")},t.CloseDialogAndRefresh=function(){i.ipcRenderer.send("mainpage:command","CloseDialogAndRefresh")},t.changeTitle=function(e){i.ipcRenderer.send("mainpage:command","changeTitle",e)},t.openImageUploadPage=function(){var e=(t=n(4).remote.screen,r=t?t.getPrimaryDisplay().bounds:{width:800,height:600},{x:(r.width-800)/2,y:(r.height-600)/2,width:800,height:600,name:"imageuploadpage",path:"imageupload.html"});var t,r;i.ipcRenderer.send("open-imageupload-page",e)},t.closePageBySelf=function(){i.ipcRenderer.send("closepagebyself",a)};var r,i=n(4),o=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(34)),n(46));(r=o)&&r.__esModule;var a="";function u(e,t,r,i,o,a){var u=n(4).remote.screen,c=u?u.getPrimaryDisplay().bounds:{width:800,height:600};return{x:(c.width-r)/2,y:(c.height-i)/2,width:r,height:i,name:"modalpage",path:"modalpage.html",weburl:e,title:t,closeFlag:o,closeTip:a}}i.ipcRenderer.on("receivepageID",function(e,t){a=t})},72:function(e,t){e.exports=require("os")}});