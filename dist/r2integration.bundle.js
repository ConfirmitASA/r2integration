!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(7);var o=n(2),a=r(o),s=n(3),u=r(s),c=n(1),l=r(c),d=n(5),h=r(d);window.Reportal=i({},window.Reportal||{},{TransformMenuAt:u.default,SideNav:l.default,hierarchyUpgrade:a.default.upgrade,sendFilters:h.default})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(6),s=r(a),u=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.showButtonEl,o=void 0===r?document.querySelector(".js-menu-show"):r,a=n.hideButtonEl,u=void 0===a?document.querySelector(".js-menu-hide"):a,c=n.sideNavEl,l=void 0===c?document.querySelector(".js-side-nav"):c,d=n.sideNavContainerEl,h=void 0===d?document.querySelector(".js-side-nav-container"):d;i(this,e),this.onTouchStart=function(e){t.sideNavEl.classList.contains("side-nav--visible")&&(t.startX=e.touches[0].pageX,t.currentX=t.startX,t.touchingSideNav=!0,requestAnimationFrame(t.update))},this.onTouchMove=function(e){t.touchingSideNav&&(t.currentX=e.touches[0].pageX)},this.onTouchEnd=function(e){if(t.touchingSideNav){t.touchingSideNav=!1;var n=Math.min(0,t.currentX-t.startX);t.sideNavContainerEl.style.transform="",n<0&&t.hideSideNav()}},this.update=function(){if(t.touchingSideNav){requestAnimationFrame(t.update);var e=Math.min(0,t.currentX-t.startX);t.sideNavContainerEl.style.transform="translateX("+e+"px)"}},this.blockClicks=function(e){e.stopPropagation()},this.onTransitionEnd=function(e){t.sideNavEl.classList.remove("side-nav--animatable"),t.sideNavEl.removeEventListener("transitionend",t.onTransitionEnd)},this.showSideNav=function(){document.querySelector("body").style.overflow="hidden",t.sideNavEl.classList.add("side-nav--animatable"),t.sideNavEl.classList.add("side-nav--visible"),t.detabinator.inert=!1,t.sideNavEl.addEventListener("transitionend",t.onTransitionEnd)},this.hideSideNav=function(){document.querySelector("body").style.overflow="auto",t.sideNavEl.classList.add("side-nav--animatable"),t.sideNavEl.classList.remove("side-nav--visible"),t.detabinator.inert=!0,t.sideNavEl.addEventListener("transitionend",t.onTransitionEnd)},this.showButtonEl=o,this.hideButtonEl=u,this.sideNavEl=l,this.sideNavContainerEl=h,this.detabinator=new s.default(this.sideNavContainerEl),this.detabinator.inert=!0,this.startX=0,this.currentX=0,this.touchingSideNav=!1,this.supportsPassive=null}return o(e,[{key:"applyPassive",value:function(){if(null!=this.supportsPassive)return!!this.supportsPassive&&{passive:!0};var e=!1;try{document.addEventListener("test",null,{get passive(){e=!0}})}catch(e){}return this.supportsPassive=e,this.applyPassive()}},{key:"addEventListeners",value:function(){this.showButtonEl.addEventListener("click",this.showSideNav),this.hideButtonEl.addEventListener("click",this.hideSideNav),this.sideNavEl.addEventListener("click",this.hideSideNav),this.sideNavContainerEl.addEventListener("click",this.blockClicks),this.sideNavEl.addEventListener("touchstart",this.onTouchStart,this.applyPassive()),this.sideNavEl.addEventListener("touchmove",this.onTouchMove,this.applyPassive()),this.sideNavEl.addEventListener("touchend",this.onTouchEnd)}},{key:"removeEventListeners",value:function(){this.showButtonEl.removeEventListener("click",this.showSideNav),this.hideButtonEl.removeEventListener("click",this.hideSideNav),this.sideNavEl.removeEventListener("click",this.hideSideNav),this.sideNavContainerEl.removeEventListener("click",this.blockClicks),this.sideNavEl.removeEventListener("touchstart",this.onTouchStart),this.sideNavEl.removeEventListener("touchmove",this.onTouchMove),this.sideNavEl.removeEventListener("touchend",this.onTouchEnd)}}]),e}();t.default=u},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){n(this,e)}return r(e,[{key:"upgrade",value:function(){var e=this.hierarchyToggle;e&&e.addEventListener("click",this.hierarchyToggleClickHandler)}},{key:"asyncHierarchyChrome",value:function(){var e=this;return new Promise(function(t){return setTimeout(function(){var n=e.hierarchyChrome;t(n?n:e.asyncHierarchyChrome())},300)})}},{key:"hierarchyToggleClickHandler",value:function(){this.detachHierarchyToggleClickListener(),this.disablePageScroll();var e=this.hierarchyChrome;e?this.attachChromeCloseListener(e):(e=this.asyncHierarchyChrome(),e.then(this.attachChromeCloseListener))}},{key:"detachHierarchyToggleClickListener",value:function(){this.hierarchyToggle.removeEventListener("click",this.hierarchyToggleClickHandler)}},{key:"attachChromeCloseListener",value:function(e){e.addEventListener("click",this.onChromeClose)}},{key:"onChromeClose",value:function(e){var t=this.cancelButton,n=this.applyButton,r=this.hierarchyChrome,i=e.path[0];[r,t,n].indexOf(i)>-1&&(i==r?t.click():this.enablePageScroll())}},{key:"disablePageScroll",value:function(){document.querySelector("body").setAttribute("style","overflow:hidden !important")}},{key:"enablePageScroll",value:function(){document.querySelector("body").removeAttribute("style")}},{key:"hierarchyToggle",get:function(){return document.querySelector(".dd-target-button")}},{key:"hierarchyChrome",get:function(){return this.hierarchyToggle.parentNode.querySelector(".dd-drilldown")}},{key:"cancelButton",get:function(){return this.hierarchyChrome.querySelector(".dd-cancel")}},{key:"applyButton",get:function(){return this.hierarchyChrome.querySelector(".dd-button-select")}}]),e}();t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),s=r(a),u=n(8),c=r(u),l=n(4),d=(r(l),function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:768,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.handleBreakpointMatch=function(e){e?(console.log("below breakpoint"),t.sidenav.addEventListeners()):(console.log("above breakpoint"),t.sidenav.removeEventListeners())};var o=r.iframeClassName,a=void 0===o?".r2dashboard":o,u=r.desktopHeaderClassName,l=void 0===u?".reportal-bar":u,d=r.mobileHeaderClassName,h=void 0===d?".reportal-header":d;this.iframeEl=document.querySelector(a),this.desktopHeaderEl=document.querySelector(l),this.mobileHeaderEl=document.querySelector(h),this.currentHeader=null,this.isIntegrationMode&&this.swapHeaderAndIframe(),this.sidenav=new s.default,this.mediaQuery=new c.default({query:"max-width:"+n+"px"},this.handleBreakpointMatch,this)}return o(e,[{key:"swapHeaderAndIframe",value:function(){document.querySelector(".body-wrapper").classList.add("integration-mode")}},{key:"isIntegrationMode",get:function(){return!!this.iframeEl}}]),e}());t.default=d},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,r){var i=this;n(this,e),this._scrollFixed=function(){i._meta.lastScrollY=i._meta.contentWindow.pageYOffset,i.requestTick(i._scrollCallback)},this._scrollCallback=function(){var e=i._meta.lastScrollY;i.header.style.top=-e+"px",i._meta.ticking=!1},t.requestAnimationFrame=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame,this._meta={topOffset:null,ticking:!1,offsetHeight:null,header:null,lastScrollY:0,contentWindow:t},this.header=r,this.attachListeners()}return r(e,[{key:"_resetHeader",value:function(){var e=this.header;e.classList.remove("scrollable-header"),e.style.top=""}},{key:"_configureHeader",value:function(){var e=this.header;e.classList.add("scrollable-header"),e.style.top=this._meta.topOffset}},{key:"_setHeaderOffsetInIframe",value:function(){var e=this._meta.contentWindow.document.querySelector("body");e.style.paddingTop=this._meta.offsetHeight+"px"}},{key:"requestTick",value:function(e){this._meta.ticking||(requestAnimationFrame(e),this._meta.ticking=!0)}},{key:"attachListeners",value:function(){this._meta.contentWindow.addEventListener("scroll",this._scrollFixed,!1)}},{key:"detachListeners",value:function(){this._meta.contentWindow.removeEventListener("scroll",this._scrollFixed)}},{key:"header",get:function(){return this._meta.header},set:function(e){null!=this.header&&(this._meta.topOffset=this.headerTopOffset,this._resetHeader()),this._meta.header=e,this._meta.offsetHeight=e.offsetHeight,this._configureHeader(),this._setHeaderOffsetInIframe()}},{key:"headerTopOffset",get:function(){return this.header.style.top}}]),e}();t.default=i},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location,t={path:e.origin+e.pathname,query:{}};return e.search.substring(1).split(/&/).forEach(function(e){var n=e.split(/=/);t.query[n[0].toLowerCase()]=n[1]}),t}function o(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.onload=function(){200==r.status?t(r.responseText):n(Error(r.status+": "+r.statusText))},r.onerror=function(){n(Error("Network Error"))},r.send()})}function a(e){var t=[];for(var n in e.query)t.push([n,e.query[n]].join("="));return e.path+"?"+t.join("&")}function s(){try{var e=document.querySelectorAll("script");if(!e)return;for(var t=e.length,n=/(Y\.FilterContainer,)\s(.*?)\)/gi;t--;){var r=e[t].text;if(r.indexOf("Y.FilterContainer,")>-1){var i=n.exec(r);return null!=i&&i[2]?JSON.parse(i[2]):{}}}}catch(e){console.error(e)}}function u(e){var t=document.querySelector(e);return t?t.value:void 0}function c(e){var t=e.split("?"),n=p(t,2),r=n[0],o=n[1],s=i({pathname:r,search:o,origin:window.location.origin});return s.query.pagestateid=u("#PageStateId"),s.query.pageid=u("#CurrentPageId"),a(s)}function l(){var e=s();return e&&e.ServiceUrl?o(c(e.ServiceUrl)):Promise.resolve()}function d(e){var t=e.Id,n=e.Value1;return r({},t,n)}function h(e){var t=e.configuration,r=void 0===t?{}:t,i=e.hierarchyConfig,o=void 0===i?{}:i,a=e.values;a=void 0===a?{}:a;var s=a.filterPanel,u=a.hierarchy,c=y({},r,{Items:[].concat(n((r.Items||[]).map(function(e){return y({},e,{Value1:(s?s[e.Id]||{}:{}).Precodes||null})})))});return o.values&&o.values.length>0&&c.Items.push({Id:o.question,Type:"hierarchy",Value1:(u?u.map(function(e){return e.NodeId}):o.values.map(function(e){return e.level}))||null}),c}function f(e,t,n){return new Promise(function(r){function i(o){e.removeEventListener(t,i),r(n(o))}e.addEventListener(t,i,!1)})}function v(e){var t=decodeURIComponent(e),n=JSON.parse(JSON.stringify(i({search:t}))),r=n.query;return r}function m(){function e(e){var t=e.Items,n=void 0===t?[]:t,r=n.reduce(function(e,t){return t.Value1?Object.assign({},e,d(t)):e},{});return{studioFilters:r}}function t(e){var t=document.querySelector(".r2dashboard");return console.debug("will send filters to appstudio",e),null==t?void console.warn("appStudio is not found on this page, please check if you've loaded it correctly or it exists"):t.contentWindow?n(t.contentWindow,e):f(t,"load",function(t){return n(t.target.contentWindow,e)})}function n(e,t){e.postMessage(t,i)}function r(n){return Y&&Y.Global?Y.Global.on("reportcontroller:viewModeDataUpdate",function(r){var i=v(r),a=i.customfilters,u=i.persnodes,c=a?JSON.parse(a):void 0,l=u?JSON.parse(u):void 0,d=h({configuration:n,hierarchyConfig:s,values:{filterPanel:c,hierarchy:l}}),f=e(d);setTimeout(function(){console.log("sendFilters: sending filters after timeout"),t(f)},o)}):console.error('YUI is not defined or accessible, cannot set up a "reportcontroller:viewModeDataUpdate" listener'),n}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://r2.firmglobal.com",o=arguments[1],a=window.studioIntegrationConfig,s=(a.pNumber,a.hierarchyConfig);l().then(function(e){return e?JSON.parse(e):void console.warn("filter panel doesn't exist on page, skip it from sending filters to appStudio")}).then(r).then(function(e){return h({configuration:e,hierarchyConfig:s})}).then(e).then(function(e){return new Promise(function(t){console.log("sendFilters: setting timeout",o),setTimeout(function(){console.log("sendFilters: sending filters after timeout"),t(e)},o)})}).then(t).catch(function(e){return console.error(e)})}Object.defineProperty(t,"__esModule",{value:!0});var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=m},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){if(n(this,e),!t)throw new Error("Missing required argument. new Detabinator needs an element reference");this._inert=!1,this._focusableElementsString="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]",this._focusableElements=[].slice.call(t.querySelectorAll(this._focusableElementsString))}return r(e,[{key:"inert",get:function(){return this._inert},set:function(e){this._inert!==e&&(this._inert=e,this._focusableElements.forEach(function(t){if(e)t.hasAttribute("tabindex")&&(t.__savedTabindex=t.tabIndex),t.setAttribute("tabindex",-1);else{if(0===t.__savedTabindex||t.__savedTabindex)return t.setAttribute("tabindex",t.__savedTabindex);t.removeAttribute("tabindex")}}))}}]),e}();t.default=i},function(e,t){},function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;n(this,e);var o=t.query,a=t.full,s=void 0!==a&&a;this._matches=!1,this.full=s,this._mq=null,this._callback=r,this._context=i,this._bound=this._onMatch.bind(this),this.query=o}return r(e,[{key:"_onMatch",value:function(e){return this._matches=e.matches,this._callback.call(this._context,e.matches)}},{key:"matches",get:function(){return this._matches}},{key:"query",get:function(){return this._query},set:function(e){this._query=e,this.constructor.remove(this._mq,this._bound);var t=this.query;t&&(this.full||"("===t[0]||(t="("+t+")"),this._mq=window.matchMedia(t),this._onMatch(this._mq),this.constructor.add(this._mq,this._bound))}}],[{key:"add",value:function(e,t){e&&e.addListener(t)}},{key:"remove",value:function(e,t){e&&e.removeListener(t),e=null}}]),e}();t.default=i}])})}])});
//# sourceMappingURL=r2integration.bundle.js.map