!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=177)}({177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OpenModalDialog_house=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:600;window.external.OpenWebModalDialog_house(e,t,n,r)},t.OpenModalDialog_oa=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:600;window.external.OpenWebModalDialog_oa(e,t,n,r)},t.OpenModalDialog=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:600;e=i(e),e=r.remote.getGlobal("backgroundparam").sysPathList.house+e,o.openModalPage3(e,t,n,a)};var r=n(4),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(59));function i(e){return r.remote.getGlobal("backgroundparam").islocal?e.substring(e.lastIndexOf("/")+1):e}window.external.openExternal=function(e){r.shell.openExternal(e)},window.external.getToken=function(){return r.remote.getGlobal("backgroundparam").token},window.external.OpenWebTab=function(e,t){window.external.OpenWebTab_house(e,t)},window.external.OpenWebTab_house=function(e,t){e=i(e);var n={weburl:e=r.remote.getGlobal("backgroundparam").sysPathList.house+e,title:t};r.ipcRenderer.send("mainpage:command","open-tab-page",n)},window.external.OpenWebTab_OA=function(e,t){e=i(e);var n={weburl:e=r.remote.getGlobal("backgroundparam").sysPathList.oa+e,title:t};r.ipcRenderer.send("mainpage:command","open-tab-page",n)},window.external.OpenWebTab_Forum=function(e,t){var n={weburl:e,title:t};r.ipcRenderer.send("mainpage:command","open-tab-page",n)},window.external.OpenWebModalDialog=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:600;window.external.OpenWebModalDialog_house(e,t,n,r)},window.external.OpenWebModalDialogForData=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:800,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:600;arguments[3],arguments[4];window.external.OpenWebModalDialog_house(e,"",t,n)},window.external.OpenWebModalDialog_house=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:600,l=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";e=i(e),e=r.remote.getGlobal("backgroundparam").sysPathList.house+e,o.openModalPage(e,t,n,a,tabpageid,l,u)},window.external.setCloseValid=function(){o.setCloseValid()},window.external.OpenWebModalDialog_oa=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:600;e=i(e),e=r.remote.getGlobal("backgroundparam").sysPathList.oa+e,o.openModalPage(e,t,n,a,tabpageid)},window.external.GetHouseDictionary=function(){return r.remote.getGlobal("backgroundparam").estatelib},window.external.print=function(e){e=i(e),e=r.remote.getGlobal("backgroundparam").sysPathList.house+e,r.ipcRenderer.send("mainpage:command","print-silent",e)},window.external.getclientparam=function(){return r.remote.getGlobal("backgroundparam")},window.external.saveclientparam=function(e){r.ipcRenderer.send("saveGlobalParam",e)},window.external.getJSPath=function(){return"file://"+r.remote.getGlobal("backgroundparam").rootpath+"/js/Dll.js"},window.external.getdllJs=function(){return a};var a=function(){}},18:function(e,t){e.exports=require("path")},20:function(e,t){e.exports=require("fs")},31:function(e,t){e.exports=require("events")},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remove=void 0;var r,o,i=s(n(36)),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=t.remove=(r=i.default.mark(function e(t){var n,r;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!=(n=h.indexOf(t))){e.next=3;break}return e.abrupt("return",console.warn("pages.remove() called for missing page",t));case 3:for(r in t.isActive&&(g=null,h.length>1&&y(h[n+1]||h[n-1])),h.splice(n,1),m.removeChild(t.webviewEl),p.emit("remove",t),p.emit("update"),t)t[r]=null;case 9:case"end":return e.stop()}},e,this)}),o=function(){var e=r.apply(this,arguments);return new Promise(function(t,n){return function r(o,i){try{var a=e[o](i),l=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});t(l)}("next")})},function(e){return o.apply(this,arguments)});t.on=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];p.on.apply(p,t)},t.getAll=function(){return h},t.get=function(e){return h[e]},t.create=v,t.setActive=y,t.reorderTab=function(e,t){if(t>1||t<-1)return console.warn("reorderTabBy isnt allowed to offset more than -1 or 1; this is a coding error");var n=h.indexOf(e),r=n+t,o=h[r];if(!o)return!1;return h[n]=o,h[r]=e,p.emit("update"),!0},t.changeActiveBy=function(e){if(h.length>1){var t=h.indexOf(g);if(-1===t)return console.warn("Active page is not in the pages list! THIS SHOULD NOT HAPPEN!");(t+=e)<0&&(t=h.length-1),t>=h.length&&(t=0),y(h[t])}},t.changeActiveTo=function(e){e>=0&&e<h.length&&y(h[e])},t.changeActiveToLast=function(){y(h[h.length-1])},t.getActive=function(){return g},t.getAdjacentPage=function(e,t){if(h.length>1){var n=h.indexOf(e);return-1===n?null:h[n+t]}},t.getByWebview=b,t.getByWebContentsID=function(e){for(var t=0;t<h.length;t++)if(h[t].wcID===e)return h[t];return null},t.getById=x,t.openNewPage=function(e,t){for(var n=0;n<h.length;n++)if(h[n].url==e)return void y(h[n]);var r={};r.url=e,r.title=t,y(v(r))},t.executeFun=function(e,t,n){var r=x(e);r&&r.webviewEl.executeJavaScript(t+"('"+n+"')")},t.refreshPage=function(e){var t=x(e);t&&t.webviewEl.reload()},t.createWebviewEl=D;var u=n(4),c=s(n(31)),d=s(n(18));function s(e){return e&&e.__esModule?e:{default:e}}var f=u.remote.getGlobal("backgroundparam").rootpath,h=[],g=null,p=new c.default,m=document.getElementById("webviews");function v(e){var t="",n="";e&&"object"===(void 0===e?"undefined":a(e))?(t=e.url,n=e.title):"string"==typeof e?(t=e,e={}):e={};var r=(1e3*Math.random()|0)+Date.now(),o={id:r,wcID:null,webviewEl:D(r,t),_url:t,get url(){return this._url},set url(e){this._url=e},loadingURL:t,title:n,manuallyTrackedIsLoading:!0,isWebviewReady:!1,isActive:!1,isTabDragging:!1,tabDragOffset:0,getURL:function(){return this.url},getTitle:function(){return this.title},isLoading:function(){return o.manuallyTrackedIsLoading}};return h.push(o),R(o),m.appendChild(o.webviewEl),p.emit("add",o),o.webviewEl.addEventListener("dom-ready",L),o.webviewEl.addEventListener("crashed",E),o.webviewEl.addEventListener("new-window",w),o.webviewEl.addEventListener("did-start-loading",P),o.webviewEl.addEventListener("did-stop-loading",O),o.webviewEl.addEventListener("close",_),o.webviewEl.addEventListener("did-start-loading",M),o.webviewEl.addEventListener("did-stop-loading",M),g||y(o),o}function w(e){var t=b(e.target);if(t&&t.isActive){var n=v(e.url);"foreground-tab"!==e.disposition&&"new-window"!==e.disposition||y(n)}}function y(e){g&&(R(g),g.isActive=!1),g=e,function(e){console.log(e),e.webviewEl.classList.remove("hidden"),u.ipcRenderer.send("mainpage:command","show-modal-page",e.id)}(e),e.isActive=1,e.webviewEl.focus(),p.emit("set-active",e)}function b(e){return x(e.dataset.id)}function x(e){for(var t=0;t<h.length;t++)if(h[t].id==e)return h[t];return null}function E(e){var t=b(e.target),r=n(20),o=new Date,i=(o.toLocaleDateString(),o.toLocaleDateString()+" "+o.toLocaleTimeString()+":"+t.loadingURL+"\r\n");r.appendFile(u.remote.getGlobal("backgroundparam").rootpath+"\\log\\log.txt",i,function(e){})}function L(e){var t=b(e.target);t&&(t.isWebviewReady=!0,t.wcID||(t.wcID=e.target.getWebContents().id)),t.webviewEl.executeJavaScript('let tabpageid="'+t.id+'"')}function P(e){var t=b(e.target);t&&(t.manuallyTrackedIsLoading=!0)}function O(e){var t=b(e.target);t&&(t.loadingURL&&(t.url=t.loadingURL),t.loadingURL=!1,t.manuallyTrackedIsLoading=!1)}function _(e){var t=b(e.target);t&&l(t)}function R(e){e.webviewEl.classList.add("hidden"),u.ipcRenderer.send("mainpage:command","hide-modal-page",e.id)}function D(e,t){var n=document.createElement("webview");return n.dataset.id=e,n.setAttribute("preload","file://"+d.default.join(f,"/js/common-bundle.js")),n.setAttribute("webpreferences","allowDisplayingInsecureContent,contentIsolation,defaultEncoding=utf-8"),n.setAttribute("src",t),n}function M(e){p.emit(e.type,b(e.target),e)}},36:function(e,t,n){e.exports=n(37)},37:function(e,t,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(38),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},38:function(e,t){!function(t){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"==typeof e,d=t.regeneratorRuntime;if(d)c&&(e.exports=d);else{(d=t.regeneratorRuntime=c?e.exports:{}).wrap=b;var s="suspendedStart",f="suspendedYield",h="executing",g="completed",p={},m={};m[a]=function(){return this};var v=Object.getPrototypeOf,w=v&&v(v(T([])));w&&w!==r&&o.call(w,a)&&(m=w);var y=P.prototype=E.prototype=Object.create(m);L.prototype=y.constructor=P,P.constructor=L,P[u]=L.displayName="GeneratorFunction",d.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===L||"GeneratorFunction"===(t.displayName||t.name))},d.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,P):(e.__proto__=P,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(y),e},d.awrap=function(e){return{__await:e}},O(_.prototype),_.prototype[l]=function(){return this},d.AsyncIterator=_,d.async=function(e,t,n,r){var o=new _(b(e,t,n,r));return d.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},O(y),y[u]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},d.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},d.values=T,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return l.type="throw",l.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function b(e,t,n,r){var o=t&&t.prototype instanceof E?t:E,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(e,t,n){var r=s;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===g){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=R(a,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=x(e,t,n);if("normal"===u.type){if(r=n.done?g:f,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=g,n.method="throw",n.arg=u.arg)}}}(e,n,a),i}function x(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function E(){}function L(){}function P(){}function O(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function _(e){var t;this._invoke=function(n,r){function i(){return new Promise(function(t,i){!function t(n,r,i,a){var l=x(e[n],e,r);if("throw"!==l.type){var u=l.arg,c=u.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(c).then(function(e){u.value=e,i(u)},a)}a(l.arg)}(n,r,t,i)})}return t=t?t.then(i,i):i()}}function R(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,R(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=x(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function T(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}return{next:j}}function j(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},4:function(e,t){e.exports=require("electron")},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="123.123.123";null!==document.getElementById(n)&&document.body.removeChild(document.getElementById(n));var r=document.createElement("canvas");r.width=t.w||420,r.height=t.h||230;var o=r.getContext("2d");o.rotate(-20*Math.PI/180),o.font="20px Vedana",o.fillStyle="rgba(200, 200, 200, 0.40)",o.textAlign="left",o.textBaseline="Middle",o.fillText(e,r.width/8,r.height/10*9);var i=document.createElement("div");return i.id=n,i.style.pointerEvents="none",i.style.top=t.top||"1px",i.style.left=t.left||"80px",i.style.position="fixed",i.style.zIndex="100000",i.style.width=t.width||document.documentElement.clientWidth+"px",i.style.height=t.height||document.documentElement.clientHeight+"px",i.style.background="url("+r.toDataURL("image/png")+") left top repeat",document.body.appendChild(i),n};r.set=function(e){var t=o(e);setInterval(function(){null===document.getElementById(t)&&(t=o(e))},500),window.onresize=function(){o(e)}},t.default=r},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openPage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=void 0;switch(e){case"mainpage":i=n(4).remote.screen,a=i?i.getPrimaryDisplay().bounds:{width:800,height:600},l=Math.max(800,Math.min(1800,a.width-50)),u=Math.max(600,Math.min(1200,a.height-50)),r={x:(a.width-l)/2,y:(a.height-u)/2,width:l,height:u,name:"mainpage",path:"shell-window.html"};break;case"registerpage":r=function(){var e=n(4).remote.screen,t=e?e.getPrimaryDisplay().bounds:{width:800,height:600};return{x:(t.width-500)/2,y:(t.height-390)/2,width:500,height:390,resizable:!1,name:"registerpage",path:"register.html"}}();break;case"loginpage":r=function(){var e=n(4).remote.screen,t=e?e.getPrimaryDisplay().bounds:{width:800,height:600};return{x:(t.width-880)/2,y:(t.height-500)/2,width:880,height:500,resizable:!1,name:"loginpage",path:"login.html"}}();break;case"modifypassword":r=function(e){var t=n(4).remote.screen,r=t?t.getPrimaryDisplay().bounds:{width:800,height:600};return{x:(r.width-400)/2,y:(r.height-200)/2,width:400,height:200,resizable:!1,name:"modifypassword",path:"modifypass.html?userId="+e}}(t)}var i,a,l,u;o.ipcRenderer.send("openpage",r)},t.openModalPage=function(e,t,r,i,a){var l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=function(e,t,r,o,i,a,l){var u=n(4).remote.screen,c=u?u.getPrimaryDisplay().bounds:{width:800,height:600};return{x:(c.width-r)/2,y:(c.height-o)/2,width:r,height:o,name:"modalpage",path:"modalpage.html",weburl:e,title:t,tabpageid:i,closeFlag:a,closeTip:l}}(e,t,r,i,a,l,u);o.ipcRenderer.send("mainpage:command","open-modal-page",c)},t.openModalPage2=function(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=l(e,t,n,r,i,a);o.ipcRenderer.send("mainpage:command","open-modal-page2",u)},t.openModalPage3=function(e,t,n,r){var i=l(e,t,n,r,!1,"");o.ipcRenderer.send("mainpage:command","open-modal-page3",i)},t.refreshModalPage=function(e,t,n,r){var i=l(e,t,n,r);o.ipcRenderer.send("mainpage:command","refresh-modal-page",i)},t.executeParentPageFun=function(e,t,n){var r={funName:e,funParam:t};o.ipcRenderer.send("mainpage:command","execute-parentpageFun",r)},t.executeTabPageFun=function(e,t,n){var r={funName:e,funParam:t};o.ipcRenderer.send("mainpage:command","execute-tabpageFun",r)},t.refreshTabPage=function(){o.ipcRenderer.send("mainpage:command","refresh-tab-page")},t.setCloseValid=function(){o.ipcRenderer.send("mainpage:command","setCloseValid")},t.CloseDialogAndRefresh=function(){o.ipcRenderer.send("mainpage:command","CloseDialogAndRefresh")},t.changeTitle=function(e){o.ipcRenderer.send("mainpage:command","changeTitle",e)},t.openImageUploadPage=function(){var e=(t=n(4).remote.screen,r=t?t.getPrimaryDisplay().bounds:{width:800,height:600},{x:(r.width-800)/2,y:(r.height-600)/2,width:800,height:600,name:"imageuploadpage",path:"imageupload.html"});var t,r;o.ipcRenderer.send("open-imageupload-page",e)},t.closePageBySelf=function(){o.ipcRenderer.send("closepagebyself",a)};var r,o=n(4),i=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(34)),n(46));(r=i)&&r.__esModule;var a="";function l(e,t,r,o,i,a){var l=n(4).remote.screen,u=l?l.getPrimaryDisplay().bounds:{width:800,height:600};return{x:(u.width-r)/2,y:(u.height-o)/2,width:r,height:o,name:"modalpage",path:"modalpage.html",weburl:e,title:t,closeFlag:i,closeTip:a}}o.ipcRenderer.on("receivepageID",function(e,t){a=t})}});