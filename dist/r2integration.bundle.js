(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	__webpack_require__(7);
	
	var _hierarchy = __webpack_require__(2);
	
	var _hierarchy2 = _interopRequireDefault(_hierarchy);
	
	var _menuTransformer = __webpack_require__(3);
	
	var _menuTransformer2 = _interopRequireDefault(_menuTransformer);
	
	var _sideNav = __webpack_require__(1);
	
	var _sideNav2 = _interopRequireDefault(_sideNav);
	
	var _sendFilters = __webpack_require__(5);
	
	var _sendFilters2 = _interopRequireDefault(_sendFilters);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.Reportal = _extends({}, window.Reportal || {}, {
	  TransformMenuAt: _menuTransformer2.default,
	  SideNav: _sideNav2.default,
	  hierarchyUpgrade: _hierarchy2.default.upgrade,
	  sendFilters: _sendFilters2.default
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc. All rights reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _detabinator = __webpack_require__(6);
	
	var _detabinator2 = _interopRequireDefault(_detabinator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SideNav = function () {
	  /**
	   * A class that sets up a sidebar that is dismissed on scrim-click or on swipe and is opend on hamburger-icon click
	   * */
	  function SideNav() {
	    var _this = this;
	
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$showButtonEl = _ref.showButtonEl,
	        showButtonEl = _ref$showButtonEl === undefined ? document.querySelector('.js-menu-show') : _ref$showButtonEl,
	        _ref$hideButtonEl = _ref.hideButtonEl,
	        hideButtonEl = _ref$hideButtonEl === undefined ? document.querySelector('.js-menu-hide') : _ref$hideButtonEl,
	        _ref$sideNavEl = _ref.sideNavEl,
	        sideNavEl = _ref$sideNavEl === undefined ? document.querySelector('.js-side-nav') : _ref$sideNavEl,
	        _ref$sideNavContainer = _ref.sideNavContainerEl,
	        sideNavContainerEl = _ref$sideNavContainer === undefined ? document.querySelector('.js-side-nav-container') : _ref$sideNavContainer;
	
	    _classCallCheck(this, SideNav);
	
	    this.onTouchStart = function (evt) {
	      if (!_this.sideNavEl.classList.contains('side-nav--visible')) return;
	      //TODO:support sidebar scrolling as well
	      _this.startX = evt.touches[0].pageX;
	      _this.currentX = _this.startX;
	
	      _this.touchingSideNav = true;
	      requestAnimationFrame(_this.update);
	    };
	
	    this.onTouchMove = function (evt) {
	      if (!_this.touchingSideNav) return;
	
	      _this.currentX = evt.touches[0].pageX;
	    };
	
	    this.onTouchEnd = function (evt) {
	      if (!_this.touchingSideNav) return;
	
	      _this.touchingSideNav = false;
	
	      var translateX = Math.min(0, _this.currentX - _this.startX);
	      _this.sideNavContainerEl.style.transform = '';
	
	      if (translateX < 0) {
	        _this.hideSideNav();
	      }
	    };
	
	    this.update = function () {
	      if (!_this.touchingSideNav) return;
	
	      requestAnimationFrame(_this.update);
	
	      var translateX = Math.min(0, _this.currentX - _this.startX);
	      _this.sideNavContainerEl.style.transform = 'translateX(' + translateX + 'px)';
	    };
	
	    this.blockClicks = function (evt) {
	      evt.stopPropagation();
	    };
	
	    this.onTransitionEnd = function (evt) {
	      _this.sideNavEl.classList.remove('side-nav--animatable');
	      _this.sideNavEl.removeEventListener('transitionend', _this.onTransitionEnd);
	    };
	
	    this.showSideNav = function () {
	      document.querySelector('body').style.overflow = "hidden";
	      _this.sideNavEl.classList.add('side-nav--animatable');
	      _this.sideNavEl.classList.add('side-nav--visible');
	      _this.detabinator.inert = false;
	      _this.sideNavEl.addEventListener('transitionend', _this.onTransitionEnd);
	    };
	
	    this.hideSideNav = function () {
	      document.querySelector('body').style.overflow = "auto";
	      _this.sideNavEl.classList.add('side-nav--animatable');
	      _this.sideNavEl.classList.remove('side-nav--visible');
	      _this.detabinator.inert = true;
	      _this.sideNavEl.addEventListener('transitionend', _this.onTransitionEnd);
	    };
	
	    this.showButtonEl = showButtonEl;
	    this.hideButtonEl = hideButtonEl;
	    this.sideNavEl = sideNavEl;
	    this.sideNavContainerEl = sideNavContainerEl;
	    // Control whether the container's children can be focused
	    // Set initial state to inert since the drawer is offscreen
	    this.detabinator = new _detabinator2.default(this.sideNavContainerEl);
	    this.detabinator.inert = true;
	    this.startX = 0;
	    this.currentX = 0;
	    this.touchingSideNav = false;
	    this.supportsPassive = null;
	  }
	
	  // apply passive event listening if it's supported
	
	
	  _createClass(SideNav, [{
	    key: 'applyPassive',
	    value: function applyPassive() {
	      if (this.supportsPassive != null) {
	        return this.supportsPassive ? { passive: true } : false;
	      }
	      // feature detect
	      var isSupported = false;
	      try {
	        document.addEventListener('test', null, {
	          get passive() {
	            isSupported = true;
	          }
	        });
	      } catch (e) {}
	      this.supportsPassive = isSupported;
	      return this.applyPassive();
	    }
	  }, {
	    key: 'addEventListeners',
	    value: function addEventListeners() {
	      this.showButtonEl.addEventListener('click', this.showSideNav);
	      this.hideButtonEl.addEventListener('click', this.hideSideNav);
	      this.sideNavEl.addEventListener('click', this.hideSideNav);
	      this.sideNavContainerEl.addEventListener('click', this.blockClicks);
	
	      this.sideNavEl.addEventListener('touchstart', this.onTouchStart, this.applyPassive());
	      this.sideNavEl.addEventListener('touchmove', this.onTouchMove, this.applyPassive());
	      this.sideNavEl.addEventListener('touchend', this.onTouchEnd);
	    }
	  }, {
	    key: 'removeEventListeners',
	    value: function removeEventListeners() {
	      this.showButtonEl.removeEventListener('click', this.showSideNav);
	      this.hideButtonEl.removeEventListener('click', this.hideSideNav);
	      this.sideNavEl.removeEventListener('click', this.hideSideNav);
	      this.sideNavContainerEl.removeEventListener('click', this.blockClicks);
	
	      this.sideNavEl.removeEventListener('touchstart', this.onTouchStart);
	      this.sideNavEl.removeEventListener('touchmove', this.onTouchMove);
	      this.sideNavEl.removeEventListener('touchend', this.onTouchEnd);
	    }
	  }]);
	
	  return SideNav;
	}();
	
	exports.default = SideNav;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MDHierarchy = function () {
	  function MDHierarchy() {
	    _classCallCheck(this, MDHierarchy);
	  }
	
	  _createClass(MDHierarchy, [{
	    key: 'upgrade',
	
	
	    /**
	     * attaches a listener to a hierarchy popup when it's initialised to be able to close it on click-outside
	     * */
	    value: function upgrade() {
	      var hierarchyButton = this.hierarchyToggle;
	      hierarchyButton && hierarchyButton.addEventListener('click', this.hierarchyToggleClickHandler);
	    }
	  }, {
	    key: 'asyncHierarchyChrome',
	    value: function asyncHierarchyChrome() {
	      var _this = this;
	
	      return new Promise(function (resolve) {
	        return setTimeout(function () {
	          var hierarchyChrome = _this.hierarchyChrome;
	          hierarchyChrome ? resolve(hierarchyChrome) : resolve(_this.asyncHierarchyChrome());
	        }, 300);
	      });
	    }
	  }, {
	    key: 'hierarchyToggleClickHandler',
	    value: function hierarchyToggleClickHandler() {
	      this.detachHierarchyToggleClickListener();
	      this.disablePageScroll();
	      var hierarchyChrome = this.hierarchyChrome;
	      if (!hierarchyChrome) {
	        hierarchyChrome = this.asyncHierarchyChrome();
	        hierarchyChrome.then(this.attachChromeCloseListener);
	      } else {
	        this.attachChromeCloseListener(hierarchyChrome);
	      }
	    }
	  }, {
	    key: 'detachHierarchyToggleClickListener',
	    value: function detachHierarchyToggleClickListener() {
	      this.hierarchyToggle.removeEventListener('click', this.hierarchyToggleClickHandler);
	    }
	  }, {
	    key: 'attachChromeCloseListener',
	    value: function attachChromeCloseListener(hierarchyChrome) {
	      hierarchyChrome.addEventListener('click', this.onChromeClose);
	    }
	  }, {
	    key: 'onChromeClose',
	    value: function onChromeClose(event) {
	      var cancel = this.cancelButton,
	          apply = this.applyButton,
	          chrome = this.hierarchyChrome,
	          clickedEl = event.path[0];
	
	      if ([chrome, cancel, apply].indexOf(clickedEl) > -1) {
	        if (clickedEl == chrome) {
	          cancel.click();
	        } else {
	          this.enablePageScroll();
	        }
	      }
	    }
	  }, {
	    key: 'disablePageScroll',
	    value: function disablePageScroll() {
	      document.querySelector('body').setAttribute('style', 'overflow:hidden !important');
	    }
	  }, {
	    key: 'enablePageScroll',
	    value: function enablePageScroll() {
	      document.querySelector('body').removeAttribute('style');
	    }
	  }, {
	    key: 'hierarchyToggle',
	    get: function get() {
	      return document.querySelector('.dd-target-button');
	    }
	  }, {
	    key: 'hierarchyChrome',
	    get: function get() {
	      return this.hierarchyToggle.parentNode.querySelector('.dd-drilldown');
	    }
	  }, {
	    key: 'cancelButton',
	    get: function get() {
	      return this.hierarchyChrome.querySelector('.dd-cancel');
	    }
	  }, {
	    key: 'applyButton',
	    get: function get() {
	      return this.hierarchyChrome.querySelector('.dd-button-select');
	    }
	  }]);
	
	  return MDHierarchy;
	}();
	
	exports.default = MDHierarchy;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _sideNav = __webpack_require__(1);
	
	var _sideNav2 = _interopRequireDefault(_sideNav);
	
	var _mediaQuery = __webpack_require__(8);
	
	var _mediaQuery2 = _interopRequireDefault(_mediaQuery);
	
	var _headerScroller = __webpack_require__(4);
	
	var _headerScroller2 = _interopRequireDefault(_headerScroller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TransformMenuAt = function () {
	  /**
	   * This class sets up a listener to detect whether the viewport matches the max-width set up in `breakpoint` and based on existence of an integration-iframeEl
	   * sets up heade scrollers or just swaps the header into horizontal or sidebar navigation modes
	   * @param {Number} [breakpoint=768] - max-width of device viewport that is considered to be a mobile device and hosts a mobile sidebar.
	   * @param {Object} [options]
	   * @param {String} [options.iframeClassName] - r2integration iframe CSS class
	   * @param {String} [options.desktopHeaderClassName] - CSS class of header to display above `breakpoint`
	   * @param {String} [options.mobileHeaderClassName] - CSS class of header to display below `breakpoint`
	   * @requires MediaQuery
	   * @requires SideNav
	   * @requires HeaderScroller
	   * */
	  function TransformMenuAt() {
	    var _this = this;
	
	    var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 768;
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, TransformMenuAt);
	
	    this.handleBreakpointMatch = function (belowBreakpoint) {
	      if (!belowBreakpoint) {
	        console.log('above breakpoint');
	        // this.swapHeader(this.desktopHeaderEl);
	        _this.sidenav.removeEventListeners();
	      } else {
	        console.log('below breakpoint');
	
	        // this.swapHeader(this.mobileHeaderEl);
	        _this.sidenav.addEventListeners();
	      }
	    };
	
	    var _options$iframeClassN = options.iframeClassName,
	        iframeClassName = _options$iframeClassN === undefined ? '.r2dashboard' : _options$iframeClassN,
	        _options$desktopHeade = options.desktopHeaderClassName,
	        desktopHeaderClassName = _options$desktopHeade === undefined ? '.reportal-bar' : _options$desktopHeade,
	        _options$mobileHeader = options.mobileHeaderClassName,
	        mobileHeaderClassName = _options$mobileHeader === undefined ? '.reportal-header' : _options$mobileHeader;
	
	
	    this.iframeEl = document.querySelector(iframeClassName);
	    this.desktopHeaderEl = document.querySelector(desktopHeaderClassName);
	    this.mobileHeaderEl = document.querySelector(mobileHeaderClassName);
	    this.currentHeader = null;
	
	    if (this.isIntegrationMode) {
	      // if it's integration page - do scrolling
	      this.swapHeaderAndIframe();
	      // this.headerScrollerInst = this.makeHeaderRespondToIframeScroll();
	    }
	    this.sidenav = new _sideNav2.default();
	    this.mediaQuery = new _mediaQuery2.default({ query: 'max-width:' + breakpoint + 'px' }, this.handleBreakpointMatch, this);
	  }
	
	  _createClass(TransformMenuAt, [{
	    key: 'swapHeaderAndIframe',
	
	
	    /*
	      makeHeaderRespondToIframeScroll() {
	        return new Promise(resolve => {
	          if (!this.isIframeURLEmpty) {
	            resolve(this.makeHeaderScrollable(this.iframeEl.contentWindow));
	          } else {
	            this.iframeEl.addEventListener('load', e => {
	                return resolve(this.makeHeaderScrollable(e.target.contentWindow))
	    
	              },
	            );
	          }
	        });
	      }
	    */
	
	    /*
	      makeHeaderScrollable(iframeContentWindow) {
	        return this.currentHeader && new HeaderScroller(iframeContentWindow, this.currentHeader);
	      }
	    */
	
	    // get isIframeURLEmpty() {
	    //   return this.iframeEl.contentWindow.location.href === 'about:blank'
	    // }
	
	    /**
	     * Sets `this.currentHeader` to a new HTMLElement and does the same for `HeaderScroller.header`
	     * */
	    /*
	      swapHeader(newHeader) {
	        this.currentHeader = newHeader;
	        if (this.iframeEl && this.headerScrollerInst) {
	          this.headerScrollerInst.then(headerScroller => headerScroller.header = newHeader);
	        }
	      }
	    */
	    value: function swapHeaderAndIframe() {
	      document.querySelector('.body-wrapper').classList.add('integration-mode');
	    }
	  }, {
	    key: 'isIntegrationMode',
	    get: function get() {
	      return !!this.iframeEl;
	    }
	  }]);
	
	  return TransformMenuAt;
	}();
	
	exports.default = TransformMenuAt;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HeaderScroller = function () {
	  /**
	   * `HeaderScroller` is a class that listens to `iframeEl`'s contentWindow scroll event and scrolls the `reportalHeaderHTMLElement` when the iframeEl is scrolled
	   * @param {Window} contentWindow - iframeEl.contentWindow
	   * @param {HTMLElement} reportalHeaderHTMLElement - reportalHeaderHTMLElement element that needs to be scrolled
	   * */
	  function HeaderScroller(contentWindow, reportalHeaderHTMLElement) {
	    var _this = this;
	
	    _classCallCheck(this, HeaderScroller);
	
	    this._scrollFixed = function () {
	      _this._meta.lastScrollY = _this._meta.contentWindow.pageYOffset;
	      _this.requestTick(_this._scrollCallback);
	    };
	
	    this._scrollCallback = function () {
	      var offset = _this._meta.lastScrollY;
	      _this.header.style.top = -offset + 'px';
	      _this._meta.ticking = false;
	    };
	
	    contentWindow.requestAnimationFrame = contentWindow.requestAnimationFrame || contentWindow.mozRequestAnimationFrame || contentWindow.webkitRequestAnimationFrame || contentWindow.msRequestAnimationFrame;
	
	    this._meta = {
	      topOffset: null,
	      ticking: false,
	      offsetHeight: null,
	      header: null,
	      lastScrollY: 0,
	      contentWindow: contentWindow
	    };
	    this.header = reportalHeaderHTMLElement;
	    this.attachListeners();
	  }
	
	  _createClass(HeaderScroller, [{
	    key: '_resetHeader',
	    value: function _resetHeader() {
	      var header = this.header;
	      header.classList.remove('scrollable-header');
	      header.style.top = "";
	      // this.detachListeners();
	    }
	  }, {
	    key: '_configureHeader',
	    value: function _configureHeader() {
	      var header = this.header;
	      header.classList.add('scrollable-header');
	      header.style.top = this._meta.topOffset;
	    }
	  }, {
	    key: '_setHeaderOffsetInIframe',
	    value: function _setHeaderOffsetInIframe() {
	      var iframeBody = this._meta.contentWindow.document.querySelector('body');
	      iframeBody.style.paddingTop = this._meta.offsetHeight + "px";
	    }
	  }, {
	    key: 'requestTick',
	    value: function requestTick(callback) {
	      if (!this._meta.ticking) {
	        requestAnimationFrame(callback);
	        this._meta.ticking = true;
	      }
	    }
	  }, {
	    key: 'attachListeners',
	    value: function attachListeners() {
	      this._meta.contentWindow.addEventListener("scroll", this._scrollFixed, false);
	    }
	  }, {
	    key: 'detachListeners',
	    value: function detachListeners() {
	      this._meta.contentWindow.removeEventListener("scroll", this._scrollFixed);
	    }
	  }, {
	    key: 'header',
	    get: function get() {
	      return this._meta.header;
	    },
	    set: function set(headerElement) {
	      var offset = void 0;
	      if (this.header != null) {
	        this._meta.topOffset = this.headerTopOffset;
	        this._resetHeader();
	      }
	      this._meta.header = headerElement;
	      this._meta.offsetHeight = headerElement.offsetHeight;
	      this._configureHeader();
	      this._setHeaderOffsetInIframe();
	    }
	  }, {
	    key: 'headerTopOffset',
	    get: function get() {
	      return this.header.style.top;
	    }
	  }]);
	
	  return HeaderScroller;
	}();
	
	exports.default = HeaderScroller;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = sendFilters;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function locationDeserialize() {
	  var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location;
	
	  var o = {
	    path: location.origin + location.pathname,
	    query: {}
	  };
	  location.search.substring(1).split(/&/).forEach(function (pair) {
	    var aPair = pair.split(/=/);
	    o.query[aPair[0].toLowerCase()] = aPair[1];
	  });
	  return o;
	}
	
	function promiseRequest(URL) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', URL, true);
	    xhr.onload = function () {
	      xhr.status == 200 ? resolve(xhr.responseText) : reject(Error(xhr.status + ': ' + xhr.statusText));
	    };
	    xhr.onerror = function () {
	      reject(Error('Network Error'));
	    };
	    xhr.send();
	  });
	};
	
	/**
	 * Turns a `location` object (result of `locationDeserialize`) into a URL
	 * @param {{path:String, query:Object}} location - an object with params and a url
	 * @returns {String} - a URL string
	 * */
	function locationSerialize(location) {
	  var query = [];
	  for (var key in location.query) {
	    query.push([key, location.query[key]].join('='));
	  }
	  return location.path + '?' + query.join('&');
	}
	
	function getOriginalConfig() {
	  try {
	    var scripts = document.querySelectorAll('script');
	    if (scripts) {
	      var i = scripts.length;
	      var cfg = /(Y\.FilterContainer,)\s(.*?)\)/gi;
	      while (i--) {
	        var script = scripts[i].text;
	        if (script.indexOf('Y.FilterContainer,') > -1) {
	          var exec = cfg.exec(script);
	          return exec != null && exec[2] ? JSON.parse(exec[2]) : {}; // eslint-disable-line
	        }
	      }
	    } else {
	      return undefined;
	    }
	  } catch (err) {
	    console.error(err);
	  }
	}
	
	function getInternalValue(nodeId) {
	  var node = document.querySelector(nodeId);
	  return node ? node.value : undefined;
	}
	
	function getProperURL(url) {
	  var _url$split = url.split('?'),
	      _url$split2 = _slicedToArray(_url$split, 2),
	      pathname = _url$split2[0],
	      search = _url$split2[1];
	
	  var location = locationDeserialize({
	    pathname: pathname,
	    search: search,
	    origin: window.location.origin
	  });
	  location.query.pagestateid = getInternalValue('#PageStateId');
	  location.query.pageid = getInternalValue('#CurrentPageId');
	  return locationSerialize(location);
	}
	
	function getFilterConfiguration() {
	  var config = getOriginalConfig();
	  if (config && config.ServiceUrl) {
	    return promiseRequest(getProperURL(config.ServiceUrl));
	  }
	  return Promise.resolve();
	}
	
	var payload = {
	  externalFilters: [{
	    function: 'InHierarchy', //optional
	    variable: 'crmdata.accounts:Region',
	    value: ['Top']
	  }]
	};
	
	function createFilterPayload(_ref, pNumber) {
	  var Type = _ref.Type,
	      Id = _ref.Id,
	      Value1 = _ref.Value1;
	
	  return Type === 'hierarchy' ? {
	    variable: Id,
	    value: Value1,
	    function: 'InHierarchy'
	  } : {
	    variable: pNumber + '.responseId:' + Id,
	    value: Value1
	  };
	}
	
	function updateConfigWithValues(_ref2) {
	  var _ref2$configuration = _ref2.configuration,
	      configuration = _ref2$configuration === undefined ? {} : _ref2$configuration,
	      _ref2$hierarchyConfig = _ref2.hierarchyConfig,
	      hierarchyConfig = _ref2$hierarchyConfig === undefined ? {} : _ref2$hierarchyConfig,
	      _ref2$values = _ref2.values;
	  _ref2$values = _ref2$values === undefined ? {} : _ref2$values;
	  var filterPanel = _ref2$values.filterPanel,
	      hierarchy = _ref2$values.hierarchy;
	
	  var configWithModifiedValues = _extends({}, configuration, {
	    Items: [].concat(_toConsumableArray((configuration.Items || []).map(function (item) {
	      return _extends({}, item, {
	        Value1: (filterPanel ? filterPanel[item.Id] || {} : {}).Precodes || null
	      });
	    })))
	  });
	
	  if (hierarchyConfig.values && hierarchyConfig.values.length > 0) {
	    configWithModifiedValues.Items.push({
	      Id: hierarchyConfig.question,
	      Type: 'hierarchy',
	      Value1: (hierarchy ? hierarchy.map(function (selected) {
	        return selected.NodeId;
	      }) : hierarchyConfig.values.map(function (selected) {
	        return selected.level;
	      })) || null
	    });
	  }
	
	  return configWithModifiedValues;
	}
	
	function eventPromise(element, eventName, callback) {
	  return new Promise(function (resolve) {
	    element.addEventListener(eventName, wrappedCallback, false);
	
	    function wrappedCallback(e) {
	      element.removeEventListener(eventName, wrappedCallback);
	      resolve(callback(e));
	    }
	  });
	}
	
	function getUpdateQuery(filterInfo) {
	  var search = decodeURIComponent(filterInfo);
	
	  var _JSON$parse = JSON.parse(JSON.stringify(locationDeserialize({ search: search }))),
	      query = _JSON$parse.query;
	
	  return query;
	}
	
	function sendFilters() {
	  var targetOrigin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://r2.firmglobal.com';
	
	  var externalConfig = window.studioIntegrationConfig;
	  if (!externalConfig) {
	    //eventPromise(document,'textNodeLoaded', ()=>{externalConfig=window.studioIntegrationConfig})
	  }
	
	  var pNumber = externalConfig.pNumber,
	      hierarchyConfig = externalConfig.hierarchyConfig;
	
	
	  function parseConfig(_ref3) {
	    var _ref3$Items = _ref3.Items,
	        Items = _ref3$Items === undefined ? [] : _ref3$Items;
	
	    var externalFilters = Items.reduce(function (result, filterItem) {
	      if (filterItem.Value1) {
	        result.push(createFilterPayload(filterItem, pNumber));
	      }
	      return result;
	    }, []);
	    return { externalFilters: externalFilters };
	  }
	
	  function postMessage(payload) {
	    var r2 = document.querySelector('.r2dashboard');
	    console.debug('will send filters to appstudio', payload);
	    if (r2 == null) {
	      console.warn('appStudio is not found on this page, please check if you\'ve loaded it correctly or it exists');
	      return;
	    }
	    return !r2.contentWindow ? eventPromise(r2, 'load', function (e) {
	      return sendPayload(e.target.contentWindow, payload);
	    }) : sendPayload(r2.contentWindow, payload);
	  }
	
	  function sendPayload(target, payload) {
	    target.postMessage(payload, targetOrigin);
	  }
	
	  function setupDataListener(configuration) {
	    if (Y && Y.Global) {
	      Y.Global.on('reportcontroller:viewModeDataUpdate', function (filterInfo) {
	        var _getUpdateQuery = getUpdateQuery(filterInfo),
	            customfilters = _getUpdateQuery.customfilters,
	            persnodes = _getUpdateQuery.persnodes;
	
	        var filterPanel = customfilters ? JSON.parse(customfilters) : undefined;
	        var hierarchy = persnodes ? JSON.parse(persnodes) : undefined;
	        var config = updateConfigWithValues({
	          configuration: configuration,
	          hierarchyConfig: hierarchyConfig,
	          values: { filterPanel: filterPanel, hierarchy: hierarchy }
	        });
	        var payload = parseConfig(config);
	        return postMessage(payload);
	      });
	    } else {
	      console.error('YUI is not defined or accessible, cannot set up a "reportcontroller:viewModeDataUpdate" listener');
	    }
	    return configuration;
	  }
	
	  // execute function
	  getFilterConfiguration().then(function (configuration) {
	    if (configuration) {
	      return JSON.parse(configuration);
	    }
	    console.warn('filter panel doesn\'t exist on page, skip it from sending filters to appStudio');
	    return;
	  }).then(setupDataListener).then(function (configuration) {
	    return updateConfigWithValues({ configuration: configuration, hierarchyConfig: hierarchyConfig });
	  }).then(parseConfig).then(postMessage).catch(function (e) {
	    return console.error(e);
	  });
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 *
	 * Copyright 2016 Google Inc. All rights reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var Detabinator = function () {
	  /**
	   * Helps to maintain a healthy tabulation within the sidebar when it's open, rather than tabulate the whole page
	   * Usage:
	   *
	   * ``` javascript
	   * const detabinator = new Detabinator(element);
	   * detabinator.inert = true;  // Sets all focusable children of element to tabindex=-1
	   * detabinator.inert = false; // Restores all focusable children of element
	   * ```
	   * @param {HTMLElement} element
	   */
	  function Detabinator(element) {
	    _classCallCheck(this, Detabinator);
	
	    if (!element) {
	      throw new Error('Missing required argument. new Detabinator needs an element reference');
	    }
	    this._inert = false;
	    this._focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
	    this._focusableElements = [].slice.call(element.querySelectorAll(this._focusableElementsString));
	  }
	
	  _createClass(Detabinator, [{
	    key: 'inert',
	    get: function get() {
	      return this._inert;
	    },
	    set: function set(isInert) {
	      if (this._inert === isInert) {
	        return;
	      }
	
	      this._inert = isInert;
	
	      this._focusableElements.forEach(function (child) {
	        if (isInert) {
	          // If the child has an explict tabindex save it
	          if (child.hasAttribute('tabindex')) {
	            child.__savedTabindex = child.tabIndex;
	          }
	          // Set ALL focusable children to tabindex -1
	          child.setAttribute('tabindex', -1);
	        } else {
	          // If the child has a saved tabindex, restore it
	          // Because the value could be 0, explicitly check that it's not false
	          if (child.__savedTabindex === 0 || child.__savedTabindex) {
	            return child.setAttribute('tabindex', child.__savedTabindex);
	          } else {
	            // Remove tabindex from ANY REMAINING children
	            child.removeAttribute('tabindex');
	          }
	        }
	      });
	    }
	  }]);
	
	  return Detabinator;
	}();
	
	exports.default = Detabinator;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	!function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;n(this,t);var o=e.query,s=e.full,u=void 0!==s&&s;this._matches=!1,this.full=u,this._mq=null,this._callback=i,this._context=r,this._bound=this._onMatch.bind(this),this.query=o}return i(t,[{key:"_onMatch",value:function(t){return this._matches=t.matches,this._callback.call(this._context,t.matches)}},{key:"matches",get:function(){return this._matches}},{key:"query",get:function(){return this._query},set:function(t){this._query=t,this.constructor.remove(this._mq,this._bound);var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._onMatch(this._mq),this.constructor.add(this._mq,this._bound))}}],[{key:"add",value:function(t,e){t&&t.addListener(e)}},{key:"remove",value:function(t,e){t&&t.removeListener(e),t=null}}]),t}();e.default=r}])});
	//# sourceMappingURL=media-query.bundle.js.map

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5YTRlYzRmOTM3Njg5OTcwODI2ZCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2lkZS1uYXYvc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hpZXJhcmNoeS9oaWVyYXJjaHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdmlnYXRpb24vbWVudS10cmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcjIvaGVhZGVyLXNjcm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yMi9zZW5kRmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2lkZS1uYXYvZGV0YWJpbmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy8uL34vbWVkaWEtcXVlcnkvZGlzdC9tZWRpYS1xdWVyeS5idW5kbGUuanMiXSwibmFtZXMiOlsid2luZG93IiwiUmVwb3J0YWwiLCJUcmFuc2Zvcm1NZW51QXQiLCJTaWRlTmF2IiwiaGllcmFyY2h5VXBncmFkZSIsInVwZ3JhZGUiLCJzZW5kRmlsdGVycyIsInNob3dCdXR0b25FbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhpZGVCdXR0b25FbCIsInNpZGVOYXZFbCIsInNpZGVOYXZDb250YWluZXJFbCIsIm9uVG91Y2hTdGFydCIsImV2dCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3RhcnRYIiwidG91Y2hlcyIsInBhZ2VYIiwiY3VycmVudFgiLCJ0b3VjaGluZ1NpZGVOYXYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJ0cmFuc2xhdGVYIiwiTWF0aCIsIm1pbiIsInN0eWxlIiwidHJhbnNmb3JtIiwiaGlkZVNpZGVOYXYiLCJibG9ja0NsaWNrcyIsInN0b3BQcm9wYWdhdGlvbiIsIm9uVHJhbnNpdGlvbkVuZCIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93U2lkZU5hdiIsIm92ZXJmbG93IiwiYWRkIiwiZGV0YWJpbmF0b3IiLCJpbmVydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdXBwb3J0c1Bhc3NpdmUiLCJwYXNzaXZlIiwiaXNTdXBwb3J0ZWQiLCJlIiwiYXBwbHlQYXNzaXZlIiwiTURIaWVyYXJjaHkiLCJoaWVyYXJjaHlCdXR0b24iLCJoaWVyYXJjaHlUb2dnbGUiLCJoaWVyYXJjaHlUb2dnbGVDbGlja0hhbmRsZXIiLCJQcm9taXNlIiwic2V0VGltZW91dCIsImhpZXJhcmNoeUNocm9tZSIsInJlc29sdmUiLCJhc3luY0hpZXJhcmNoeUNocm9tZSIsImRldGFjaEhpZXJhcmNoeVRvZ2dsZUNsaWNrTGlzdGVuZXIiLCJkaXNhYmxlUGFnZVNjcm9sbCIsInRoZW4iLCJhdHRhY2hDaHJvbWVDbG9zZUxpc3RlbmVyIiwib25DaHJvbWVDbG9zZSIsImV2ZW50IiwiY2FuY2VsIiwiY2FuY2VsQnV0dG9uIiwiYXBwbHkiLCJhcHBseUJ1dHRvbiIsImNocm9tZSIsImNsaWNrZWRFbCIsInBhdGgiLCJpbmRleE9mIiwiY2xpY2siLCJlbmFibGVQYWdlU2Nyb2xsIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyZW50Tm9kZSIsImJyZWFrcG9pbnQiLCJvcHRpb25zIiwiaGFuZGxlQnJlYWtwb2ludE1hdGNoIiwiYmVsb3dCcmVha3BvaW50IiwiY29uc29sZSIsImxvZyIsInNpZGVuYXYiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaWZyYW1lQ2xhc3NOYW1lIiwiZGVza3RvcEhlYWRlckNsYXNzTmFtZSIsIm1vYmlsZUhlYWRlckNsYXNzTmFtZSIsImlmcmFtZUVsIiwiZGVza3RvcEhlYWRlckVsIiwibW9iaWxlSGVhZGVyRWwiLCJjdXJyZW50SGVhZGVyIiwiaXNJbnRlZ3JhdGlvbk1vZGUiLCJzd2FwSGVhZGVyQW5kSWZyYW1lIiwibWVkaWFRdWVyeSIsInF1ZXJ5IiwiSGVhZGVyU2Nyb2xsZXIiLCJjb250ZW50V2luZG93IiwicmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudCIsIl9zY3JvbGxGaXhlZCIsIl9tZXRhIiwibGFzdFNjcm9sbFkiLCJwYWdlWU9mZnNldCIsInJlcXVlc3RUaWNrIiwiX3Njcm9sbENhbGxiYWNrIiwib2Zmc2V0IiwiaGVhZGVyIiwidG9wIiwidGlja2luZyIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidG9wT2Zmc2V0Iiwib2Zmc2V0SGVpZ2h0IiwiYXR0YWNoTGlzdGVuZXJzIiwiaWZyYW1lQm9keSIsInBhZGRpbmdUb3AiLCJjYWxsYmFjayIsImhlYWRlckVsZW1lbnQiLCJoZWFkZXJUb3BPZmZzZXQiLCJfcmVzZXRIZWFkZXIiLCJfY29uZmlndXJlSGVhZGVyIiwiX3NldEhlYWRlck9mZnNldEluSWZyYW1lIiwibG9jYXRpb25EZXNlcmlhbGl6ZSIsImxvY2F0aW9uIiwibyIsIm9yaWdpbiIsInBhdGhuYW1lIiwic2VhcmNoIiwic3Vic3RyaW5nIiwic3BsaXQiLCJmb3JFYWNoIiwiYVBhaXIiLCJwYWlyIiwidG9Mb3dlckNhc2UiLCJwcm9taXNlUmVxdWVzdCIsIlVSTCIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsIkVycm9yIiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwibG9jYXRpb25TZXJpYWxpemUiLCJrZXkiLCJwdXNoIiwiam9pbiIsImdldE9yaWdpbmFsQ29uZmlnIiwic2NyaXB0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiY2ZnIiwic2NyaXB0IiwidGV4dCIsImV4ZWMiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJlcnIiLCJlcnJvciIsImdldEludGVybmFsVmFsdWUiLCJub2RlSWQiLCJub2RlIiwidmFsdWUiLCJnZXRQcm9wZXJVUkwiLCJ1cmwiLCJwYWdlc3RhdGVpZCIsInBhZ2VpZCIsImdldEZpbHRlckNvbmZpZ3VyYXRpb24iLCJjb25maWciLCJTZXJ2aWNlVXJsIiwicGF5bG9hZCIsImV4dGVybmFsRmlsdGVycyIsImZ1bmN0aW9uIiwidmFyaWFibGUiLCJjcmVhdGVGaWx0ZXJQYXlsb2FkIiwicE51bWJlciIsIlR5cGUiLCJJZCIsIlZhbHVlMSIsInVwZGF0ZUNvbmZpZ1dpdGhWYWx1ZXMiLCJjb25maWd1cmF0aW9uIiwiaGllcmFyY2h5Q29uZmlnIiwidmFsdWVzIiwiZmlsdGVyUGFuZWwiLCJoaWVyYXJjaHkiLCJjb25maWdXaXRoTW9kaWZpZWRWYWx1ZXMiLCJJdGVtcyIsIm1hcCIsIml0ZW0iLCJQcmVjb2RlcyIsInF1ZXN0aW9uIiwic2VsZWN0ZWQiLCJOb2RlSWQiLCJsZXZlbCIsImV2ZW50UHJvbWlzZSIsImVsZW1lbnQiLCJldmVudE5hbWUiLCJ3cmFwcGVkQ2FsbGJhY2siLCJnZXRVcGRhdGVRdWVyeSIsImZpbHRlckluZm8iLCJkZWNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnkiLCJ0YXJnZXRPcmlnaW4iLCJleHRlcm5hbENvbmZpZyIsInN0dWRpb0ludGVncmF0aW9uQ29uZmlnIiwicGFyc2VDb25maWciLCJyZWR1Y2UiLCJyZXN1bHQiLCJmaWx0ZXJJdGVtIiwicG9zdE1lc3NhZ2UiLCJyMiIsImRlYnVnIiwid2FybiIsInNlbmRQYXlsb2FkIiwidGFyZ2V0Iiwic2V0dXBEYXRhTGlzdGVuZXIiLCJZIiwiR2xvYmFsIiwib24iLCJjdXN0b21maWx0ZXJzIiwicGVyc25vZGVzIiwiY2F0Y2giLCJEZXRhYmluYXRvciIsIl9pbmVydCIsIl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyIsIl9mb2N1c2FibGVFbGVtZW50cyIsInNsaWNlIiwiY2FsbCIsImlzSW5lcnQiLCJjaGlsZCIsImhhc0F0dHJpYnV0ZSIsIl9fc2F2ZWRUYWJpbmRleCIsInRhYkluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdENBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsUUFBT0MsUUFBUCxnQkFDTUQsT0FBT0MsUUFBUCxJQUFtQixFQUR6QjtBQUVFQyw2Q0FGRjtBQUdFQyw2QkFIRjtBQUlFQyxxQkFBa0Isb0JBQVlDLE9BSmhDO0FBS0VDO0FBTEYsSTs7Ozs7Ozs7Ozs7O3NqQkNOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7O0tBRU1ILE87QUFDSjs7O0FBR0Esc0JBS29CO0FBQUE7O0FBQUEsb0ZBQUosRUFBSTtBQUFBLGtDQUpOSSxZQUlNO0FBQUEsU0FKTkEsWUFJTSxxQ0FKU0MsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUlUO0FBQUEsa0NBSE5DLFlBR007QUFBQSxTQUhOQSxZQUdNLHFDQUhTRixTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBR1Q7QUFBQSwrQkFGTkUsU0FFTTtBQUFBLFNBRk5BLFNBRU0sa0NBRk1ILFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FFTjtBQUFBLHNDQURORyxrQkFDTTtBQUFBLFNBRE5BLGtCQUNNLHlDQURlSixTQUFTQyxhQUFULENBQXVCLHdCQUF2QixDQUNmOztBQUFBOztBQUFBLFVBeURwQkksWUF6RG9CLEdBeURMLFVBQUNDLEdBQUQsRUFBUztBQUN0QixXQUFJLENBQUMsTUFBS0gsU0FB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QkFBdUIsd0NBQXdDLGdCQUFnQixnQkFBZ0Isa0VBQWtFLFVBQVUsdUNBQXVDLDhIQUE4SCxhQUFhLGlDQUFpQyw2RUFBNkUsRUFBRSw2QkFBNkIsc0JBQXNCLEVBQUUsMkJBQTJCLG1CQUFtQixpQkFBaUIsNERBQTRELGlCQUFpQiw0SUFBNEksSUFBSSw4QkFBOEIscUJBQXFCLEVBQUUsaUNBQWlDLCtCQUErQixLQUFLLEdBQUcsWUFBWSxHQUFHO0FBQ3hzRCwrQyIsImZpbGUiOiJyMmludGVncmF0aW9uLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWE0ZWM0ZjkzNzY4OTk3MDgyNmQiLCJpbXBvcnQgJy4vbWFpbi5jc3MnO1xuaW1wb3J0IE1ESGllcmFyY2h5IGZyb20gJy4vaGllcmFyY2h5L2hpZXJhcmNoeSc7XG5pbXBvcnQgVHJhbnNmb3JtTWVudUF0IGZyb20gJy4vbmF2aWdhdGlvbi9tZW51LXRyYW5zZm9ybWVyJztcbmltcG9ydCBTaWRlTmF2IGZyb20gJy4vc2lkZS1uYXYvc2lkZS1uYXYnO1xuaW1wb3J0IHNlbmRGaWx0ZXJzIGZyb20gJy4vcjIvc2VuZEZpbHRlcnMnO1xuXG53aW5kb3cuUmVwb3J0YWwgPSB7XG4gIC4uLih3aW5kb3cuUmVwb3J0YWwgfHwge30pLFxuICBUcmFuc2Zvcm1NZW51QXQsXG4gIFNpZGVOYXYsXG4gIGhpZXJhcmNoeVVwZ3JhZGU6IE1ESGllcmFyY2h5LnVwZ3JhZGUsXG4gIHNlbmRGaWx0ZXJzLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwiLyoqXG4gKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IERldGFiaW5hdG9yIGZyb20gXCIuL2RldGFiaW5hdG9yXCI7XG5cbmNsYXNzIFNpZGVOYXYge1xuICAvKipcbiAgICogQSBjbGFzcyB0aGF0IHNldHMgdXAgYSBzaWRlYmFyIHRoYXQgaXMgZGlzbWlzc2VkIG9uIHNjcmltLWNsaWNrIG9yIG9uIHN3aXBlIGFuZCBpcyBvcGVuZCBvbiBoYW1idXJnZXItaWNvbiBjbGlja1xuICAgKiAqL1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgICAgICAgICAgc2hvd0J1dHRvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1lbnUtc2hvdycpLFxuICAgICAgICAgICAgICAgIGhpZGVCdXR0b25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tZW51LWhpZGUnKSxcbiAgICAgICAgICAgICAgICBzaWRlTmF2RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2lkZS1uYXYnKSxcbiAgICAgICAgICAgICAgICBzaWRlTmF2Q29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2lkZS1uYXYtY29udGFpbmVyJylcbiAgICAgICAgICAgICAgfSA9IHt9KSB7XG4gICAgdGhpcy5zaG93QnV0dG9uRWwgPSBzaG93QnV0dG9uRWw7XG4gICAgdGhpcy5oaWRlQnV0dG9uRWwgPSBoaWRlQnV0dG9uRWw7XG4gICAgdGhpcy5zaWRlTmF2RWwgPSBzaWRlTmF2RWw7XG4gICAgdGhpcy5zaWRlTmF2Q29udGFpbmVyRWwgPSBzaWRlTmF2Q29udGFpbmVyRWw7XG4gICAgLy8gQ29udHJvbCB3aGV0aGVyIHRoZSBjb250YWluZXIncyBjaGlsZHJlbiBjYW4gYmUgZm9jdXNlZFxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlIHRvIGluZXJ0IHNpbmNlIHRoZSBkcmF3ZXIgaXMgb2Zmc2NyZWVuXG4gICAgdGhpcy5kZXRhYmluYXRvciA9IG5ldyBEZXRhYmluYXRvcih0aGlzLnNpZGVOYXZDb250YWluZXJFbCk7XG4gICAgdGhpcy5kZXRhYmluYXRvci5pbmVydCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSAwO1xuICAgIHRoaXMuY3VycmVudFggPSAwO1xuICAgIHRoaXMudG91Y2hpbmdTaWRlTmF2ID0gZmFsc2U7XG4gICAgdGhpcy5zdXBwb3J0c1Bhc3NpdmUgPSBudWxsO1xuICB9XG5cblxuICAvLyBhcHBseSBwYXNzaXZlIGV2ZW50IGxpc3RlbmluZyBpZiBpdCdzIHN1cHBvcnRlZFxuICBhcHBseVBhc3NpdmUoKSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydHNQYXNzaXZlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1cHBvcnRzUGFzc2l2ZSA/IHtwYXNzaXZlOiB0cnVlfSA6IGZhbHNlO1xuICAgIH1cbiAgICAvLyBmZWF0dXJlIGRldGVjdFxuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge1xuICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gICAgdGhpcy5zdXBwb3J0c1Bhc3NpdmUgPSBpc1N1cHBvcnRlZDtcbiAgICByZXR1cm4gdGhpcy5hcHBseVBhc3NpdmUoKTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuc2hvd0J1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93U2lkZU5hdik7XG4gICAgdGhpcy5oaWRlQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVTaWRlTmF2KTtcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZVNpZGVOYXYpO1xuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ibG9ja0NsaWNrcyk7XG5cbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMuYXBwbHlQYXNzaXZlKCkpO1xuICAgIHRoaXMuc2lkZU5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMuYXBwbHlQYXNzaXZlKCkpO1xuICAgIHRoaXMuc2lkZU5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuc2hvd0J1dHRvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93U2lkZU5hdik7XG4gICAgdGhpcy5oaWRlQnV0dG9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVTaWRlTmF2KTtcbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZVNpZGVOYXYpO1xuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ibG9ja0NsaWNrcyk7XG5cbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgIHRoaXMuc2lkZU5hdkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgIHRoaXMuc2lkZU5hdkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kKTtcbiAgfVxuXG4gIG9uVG91Y2hTdGFydCA9IChldnQpID0+IHtcbiAgICBpZiAoIXRoaXMuc2lkZU5hdkVsLmNsYXNzTGlzdC5jb250YWlucygnc2lkZS1uYXYtLXZpc2libGUnKSlcbiAgICAgIHJldHVybjtcbiAgICAvL1RPRE86c3VwcG9ydCBzaWRlYmFyIHNjcm9sbGluZyBhcyB3ZWxsXG4gICAgdGhpcy5zdGFydFggPSBldnQudG91Y2hlc1swXS5wYWdlWDtcbiAgICB0aGlzLmN1cnJlbnRYID0gdGhpcy5zdGFydFg7XG5cbiAgICB0aGlzLnRvdWNoaW5nU2lkZU5hdiA9IHRydWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICBvblRvdWNoTW92ZSA9IChldnQpID0+IHtcbiAgICBpZiAoIXRoaXMudG91Y2hpbmdTaWRlTmF2KSByZXR1cm47XG5cbiAgICB0aGlzLmN1cnJlbnRYID0gZXZ0LnRvdWNoZXNbMF0ucGFnZVg7XG4gIH07XG5cbiAgb25Ub3VjaEVuZCA9IChldnQpID0+IHtcbiAgICBpZiAoIXRoaXMudG91Y2hpbmdTaWRlTmF2KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy50b3VjaGluZ1NpZGVOYXYgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZVggPSBNYXRoLm1pbigwLCB0aGlzLmN1cnJlbnRYIC0gdGhpcy5zdGFydFgpO1xuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgaWYgKHRyYW5zbGF0ZVggPCAwKSB7XG4gICAgICB0aGlzLmhpZGVTaWRlTmF2KCk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudG91Y2hpbmdTaWRlTmF2KVxuICAgICAgcmV0dXJuO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZVggPSBNYXRoLm1pbigwLCB0aGlzLmN1cnJlbnRYIC0gdGhpcy5zdGFydFgpO1xuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgO1xuICB9O1xuXG4gIGJsb2NrQ2xpY2tzID0gKGV2dCkgPT4ge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBvblRyYW5zaXRpb25FbmQgPSAoZXZ0KSA9PiB7XG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS1uYXYtLWFuaW1hdGFibGUnKTtcbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmQpO1xuICB9O1xuXG4gIHNob3dTaWRlTmF2ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LmFkZCgnc2lkZS1uYXYtLWFuaW1hdGFibGUnKTtcbiAgICB0aGlzLnNpZGVOYXZFbC5jbGFzc0xpc3QuYWRkKCdzaWRlLW5hdi0tdmlzaWJsZScpO1xuICAgIHRoaXMuZGV0YWJpbmF0b3IuaW5lcnQgPSBmYWxzZTtcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmQpO1xuICB9O1xuXG4gIGhpZGVTaWRlTmF2ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgIHRoaXMuc2lkZU5hdkVsLmNsYXNzTGlzdC5hZGQoJ3NpZGUtbmF2LS1hbmltYXRhYmxlJyk7XG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS1uYXYtLXZpc2libGUnKTtcbiAgICB0aGlzLmRldGFiaW5hdG9yLmluZXJ0ID0gdHJ1ZTtcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXZcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NpZGUtbmF2L3NpZGUtbmF2LmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTURIaWVyYXJjaHkge1xyXG4gIGdldCBoaWVyYXJjaHlUb2dnbGUoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRkLXRhcmdldC1idXR0b24nKTtcclxuICB9XHJcblxyXG4gIGdldCBoaWVyYXJjaHlDaHJvbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oaWVyYXJjaHlUb2dnbGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZGQtZHJpbGxkb3duJylcclxuICB9XHJcblxyXG4gIGdldCBjYW5jZWxCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oaWVyYXJjaHlDaHJvbWUucXVlcnlTZWxlY3RvcignLmRkLWNhbmNlbCcpXHJcbiAgfVxyXG5cclxuICBnZXQgYXBwbHlCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oaWVyYXJjaHlDaHJvbWUucXVlcnlTZWxlY3RvcignLmRkLWJ1dHRvbi1zZWxlY3QnKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYXR0YWNoZXMgYSBsaXN0ZW5lciB0byBhIGhpZXJhcmNoeSBwb3B1cCB3aGVuIGl0J3MgaW5pdGlhbGlzZWQgdG8gYmUgYWJsZSB0byBjbG9zZSBpdCBvbiBjbGljay1vdXRzaWRlXHJcbiAgICogKi9cclxuICB1cGdyYWRlKCkge1xyXG4gICAgY29uc3QgaGllcmFyY2h5QnV0dG9uID0gdGhpcy5oaWVyYXJjaHlUb2dnbGU7XHJcbiAgICBoaWVyYXJjaHlCdXR0b24gJiYgaGllcmFyY2h5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWVyYXJjaHlUb2dnbGVDbGlja0hhbmRsZXIpXHJcbiAgfVxyXG5cclxuICBhc3luY0hpZXJhcmNoeUNocm9tZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaGllcmFyY2h5Q2hyb21lID0gdGhpcy5oaWVyYXJjaHlDaHJvbWU7XHJcbiAgICAgICAgICBoaWVyYXJjaHlDaHJvbWUgPyByZXNvbHZlKGhpZXJhcmNoeUNocm9tZSkgOiByZXNvbHZlKHRoaXMuYXN5bmNIaWVyYXJjaHlDaHJvbWUoKSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIDMwMClcclxuICAgIClcclxuICB9XHJcblxyXG4gIGhpZXJhcmNoeVRvZ2dsZUNsaWNrSGFuZGxlcigpIHtcclxuICAgIHRoaXMuZGV0YWNoSGllcmFyY2h5VG9nZ2xlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy5kaXNhYmxlUGFnZVNjcm9sbCgpO1xyXG4gICAgbGV0IGhpZXJhcmNoeUNocm9tZSA9IHRoaXMuaGllcmFyY2h5Q2hyb21lO1xyXG4gICAgaWYgKCFoaWVyYXJjaHlDaHJvbWUpIHtcclxuICAgICAgaGllcmFyY2h5Q2hyb21lID0gdGhpcy5hc3luY0hpZXJhcmNoeUNocm9tZSgpO1xyXG4gICAgICBoaWVyYXJjaHlDaHJvbWUudGhlbih0aGlzLmF0dGFjaENocm9tZUNsb3NlTGlzdGVuZXIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF0dGFjaENocm9tZUNsb3NlTGlzdGVuZXIoaGllcmFyY2h5Q2hyb21lKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGV0YWNoSGllcmFyY2h5VG9nZ2xlQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuaGllcmFyY2h5VG9nZ2xlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWVyYXJjaHlUb2dnbGVDbGlja0hhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoQ2hyb21lQ2xvc2VMaXN0ZW5lcihoaWVyYXJjaHlDaHJvbWUpIHtcclxuICAgIGhpZXJhcmNoeUNocm9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DaHJvbWVDbG9zZSlcclxuICB9XHJcblxyXG4gIG9uQ2hyb21lQ2xvc2UoZXZlbnQpIHtcclxuICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2FuY2VsQnV0dG9uLFxyXG4gICAgICBhcHBseSA9IHRoaXMuYXBwbHlCdXR0b24sXHJcbiAgICAgIGNocm9tZSA9IHRoaXMuaGllcmFyY2h5Q2hyb21lLFxyXG4gICAgICBjbGlja2VkRWwgPSBldmVudC5wYXRoWzBdO1xyXG5cclxuICAgIGlmIChbY2hyb21lLCBjYW5jZWwsIGFwcGx5XS5pbmRleE9mKGNsaWNrZWRFbCkgPiAtMSkge1xyXG4gICAgICBpZiAoY2xpY2tlZEVsID09IGNocm9tZSkge1xyXG4gICAgICAgIGNhbmNlbC5jbGljaygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlUGFnZVNjcm9sbCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlUGFnZVNjcm9sbCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ292ZXJmbG93OmhpZGRlbiAhaW1wb3J0YW50Jyk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVQYWdlU2Nyb2xsKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oaWVyYXJjaHkvaGllcmFyY2h5LmpzIiwiaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi4vc2lkZS1uYXYvc2lkZS1uYXYnO1xuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSAnbWVkaWEtcXVlcnknO1xuaW1wb3J0IEhlYWRlclNjcm9sbGVyIGZyb20gJy4uL3IyL2hlYWRlci1zY3JvbGxlcic7XG5cbmNsYXNzIFRyYW5zZm9ybU1lbnVBdCB7XG4gIC8qKlxuICAgKiBUaGlzIGNsYXNzIHNldHMgdXAgYSBsaXN0ZW5lciB0byBkZXRlY3Qgd2hldGhlciB0aGUgdmlld3BvcnQgbWF0Y2hlcyB0aGUgbWF4LXdpZHRoIHNldCB1cCBpbiBgYnJlYWtwb2ludGAgYW5kIGJhc2VkIG9uIGV4aXN0ZW5jZSBvZiBhbiBpbnRlZ3JhdGlvbi1pZnJhbWVFbFxuICAgKiBzZXRzIHVwIGhlYWRlIHNjcm9sbGVycyBvciBqdXN0IHN3YXBzIHRoZSBoZWFkZXIgaW50byBob3Jpem9udGFsIG9yIHNpZGViYXIgbmF2aWdhdGlvbiBtb2Rlc1xuICAgKiBAcGFyYW0ge051bWJlcn0gW2JyZWFrcG9pbnQ9NzY4XSAtIG1heC13aWR0aCBvZiBkZXZpY2Ugdmlld3BvcnQgdGhhdCBpcyBjb25zaWRlcmVkIHRvIGJlIGEgbW9iaWxlIGRldmljZSBhbmQgaG9zdHMgYSBtb2JpbGUgc2lkZWJhci5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWZyYW1lQ2xhc3NOYW1lXSAtIHIyaW50ZWdyYXRpb24gaWZyYW1lIENTUyBjbGFzc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZGVza3RvcEhlYWRlckNsYXNzTmFtZV0gLSBDU1MgY2xhc3Mgb2YgaGVhZGVyIHRvIGRpc3BsYXkgYWJvdmUgYGJyZWFrcG9pbnRgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5tb2JpbGVIZWFkZXJDbGFzc05hbWVdIC0gQ1NTIGNsYXNzIG9mIGhlYWRlciB0byBkaXNwbGF5IGJlbG93IGBicmVha3BvaW50YFxuICAgKiBAcmVxdWlyZXMgTWVkaWFRdWVyeVxuICAgKiBAcmVxdWlyZXMgU2lkZU5hdlxuICAgKiBAcmVxdWlyZXMgSGVhZGVyU2Nyb2xsZXJcbiAgICogKi9cbiAgY29uc3RydWN0b3IoYnJlYWtwb2ludCA9IDc2OCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgaWZyYW1lQ2xhc3NOYW1lID0gJy5yMmRhc2hib2FyZCcsXG4gICAgICBkZXNrdG9wSGVhZGVyQ2xhc3NOYW1lID0gJy5yZXBvcnRhbC1iYXInLFxuICAgICAgbW9iaWxlSGVhZGVyQ2xhc3NOYW1lID0gJy5yZXBvcnRhbC1oZWFkZXInLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgdGhpcy5pZnJhbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWZyYW1lQ2xhc3NOYW1lKTtcbiAgICB0aGlzLmRlc2t0b3BIZWFkZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGVza3RvcEhlYWRlckNsYXNzTmFtZSk7XG4gICAgdGhpcy5tb2JpbGVIZWFkZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9iaWxlSGVhZGVyQ2xhc3NOYW1lKTtcbiAgICB0aGlzLmN1cnJlbnRIZWFkZXIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuaXNJbnRlZ3JhdGlvbk1vZGUpIHsvLyBpZiBpdCdzIGludGVncmF0aW9uIHBhZ2UgLSBkbyBzY3JvbGxpbmdcbiAgICAgIHRoaXMuc3dhcEhlYWRlckFuZElmcmFtZSgpO1xuICAgICAgLy8gdGhpcy5oZWFkZXJTY3JvbGxlckluc3QgPSB0aGlzLm1ha2VIZWFkZXJSZXNwb25kVG9JZnJhbWVTY3JvbGwoKTtcbiAgICB9XG4gICAgdGhpcy5zaWRlbmF2ID0gbmV3IFNpZGVOYXYoKTtcbiAgICB0aGlzLm1lZGlhUXVlcnkgPSBuZXcgTWVkaWFRdWVyeSh7cXVlcnk6IGBtYXgtd2lkdGg6JHticmVha3BvaW50fXB4YH0sIHRoaXMuaGFuZGxlQnJlYWtwb2ludE1hdGNoLCB0aGlzKTtcbiAgfVxuXG4gIGdldCBpc0ludGVncmF0aW9uTW9kZSgpIHtcbiAgICByZXR1cm4gISF0aGlzLmlmcmFtZUVsXG4gIH1cblxuICBzd2FwSGVhZGVyQW5kSWZyYW1lKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LXdyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdpbnRlZ3JhdGlvbi1tb2RlJyk7XG4gIH1cblxuICBoYW5kbGVCcmVha3BvaW50TWF0Y2ggPSAoYmVsb3dCcmVha3BvaW50KSA9PiB7XG4gICAgaWYgKCFiZWxvd0JyZWFrcG9pbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhYm92ZSBicmVha3BvaW50JylcbiAgICAgIC8vIHRoaXMuc3dhcEhlYWRlcih0aGlzLmRlc2t0b3BIZWFkZXJFbCk7XG4gICAgICB0aGlzLnNpZGVuYXYucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2JlbG93IGJyZWFrcG9pbnQnKVxuXG4gICAgICAvLyB0aGlzLnN3YXBIZWFkZXIodGhpcy5tb2JpbGVIZWFkZXJFbCk7XG4gICAgICB0aGlzLnNpZGVuYXYuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuLypcbiAgbWFrZUhlYWRlclJlc3BvbmRUb0lmcmFtZVNjcm9sbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNJZnJhbWVVUkxFbXB0eSkge1xuICAgICAgICByZXNvbHZlKHRoaXMubWFrZUhlYWRlclNjcm9sbGFibGUodGhpcy5pZnJhbWVFbC5jb250ZW50V2luZG93KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMubWFrZUhlYWRlclNjcm9sbGFibGUoZS50YXJnZXQuY29udGVudFdpbmRvdykpXG5cbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4qL1xuXG4vKlxuICBtYWtlSGVhZGVyU2Nyb2xsYWJsZShpZnJhbWVDb250ZW50V2luZG93KSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEhlYWRlciAmJiBuZXcgSGVhZGVyU2Nyb2xsZXIoaWZyYW1lQ29udGVudFdpbmRvdywgdGhpcy5jdXJyZW50SGVhZGVyKTtcbiAgfVxuKi9cblxuICAvLyBnZXQgaXNJZnJhbWVVUkxFbXB0eSgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5pZnJhbWVFbC5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWYgPT09ICdhYm91dDpibGFuaydcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBTZXRzIGB0aGlzLmN1cnJlbnRIZWFkZXJgIHRvIGEgbmV3IEhUTUxFbGVtZW50IGFuZCBkb2VzIHRoZSBzYW1lIGZvciBgSGVhZGVyU2Nyb2xsZXIuaGVhZGVyYFxuICAgKiAqL1xuLypcbiAgc3dhcEhlYWRlcihuZXdIZWFkZXIpIHtcbiAgICB0aGlzLmN1cnJlbnRIZWFkZXIgPSBuZXdIZWFkZXI7XG4gICAgaWYgKHRoaXMuaWZyYW1lRWwgJiYgdGhpcy5oZWFkZXJTY3JvbGxlckluc3QpIHtcbiAgICAgIHRoaXMuaGVhZGVyU2Nyb2xsZXJJbnN0LnRoZW4oaGVhZGVyU2Nyb2xsZXIgPT4gaGVhZGVyU2Nyb2xsZXIuaGVhZGVyID0gbmV3SGVhZGVyKTtcbiAgICB9XG4gIH1cbiovXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybU1lbnVBdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uYXZpZ2F0aW9uL21lbnUtdHJhbnNmb3JtZXIuanMiLCJjbGFzcyBIZWFkZXJTY3JvbGxlciB7XHJcbiAgLyoqXHJcbiAgICogYEhlYWRlclNjcm9sbGVyYCBpcyBhIGNsYXNzIHRoYXQgbGlzdGVucyB0byBgaWZyYW1lRWxgJ3MgY29udGVudFdpbmRvdyBzY3JvbGwgZXZlbnQgYW5kIHNjcm9sbHMgdGhlIGByZXBvcnRhbEhlYWRlckhUTUxFbGVtZW50YCB3aGVuIHRoZSBpZnJhbWVFbCBpcyBzY3JvbGxlZFxyXG4gICAqIEBwYXJhbSB7V2luZG93fSBjb250ZW50V2luZG93IC0gaWZyYW1lRWwuY29udGVudFdpbmRvd1xyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnQgLSByZXBvcnRhbEhlYWRlckhUTUxFbGVtZW50IGVsZW1lbnQgdGhhdCBuZWVkcyB0byBiZSBzY3JvbGxlZFxyXG4gICAqICovXHJcbiAgY29uc3RydWN0b3IoY29udGVudFdpbmRvdywgcmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudCkge1xyXG4gICAgY29udGVudFdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxyXG4gICAgICBjb250ZW50V2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICB8fCBjb250ZW50V2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICB8fCBjb250ZW50V2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICB8fCBjb250ZW50V2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5cclxuICAgIHRoaXMuX21ldGEgPSB7XHJcbiAgICAgIHRvcE9mZnNldDogbnVsbCxcclxuICAgICAgdGlja2luZzogZmFsc2UsXHJcbiAgICAgIG9mZnNldEhlaWdodDogbnVsbCxcclxuICAgICAgaGVhZGVyOiBudWxsLFxyXG4gICAgICBsYXN0U2Nyb2xsWTogMCxcclxuICAgICAgY29udGVudFdpbmRvdzogY29udGVudFdpbmRvd1xyXG4gICAgfTtcclxuICAgIHRoaXMuaGVhZGVyID0gcmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21ldGEuaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgc2V0IGhlYWRlcihoZWFkZXJFbGVtZW50KSB7XHJcbiAgICBsZXQgb2Zmc2V0O1xyXG4gICAgaWYgKHRoaXMuaGVhZGVyICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5fbWV0YS50b3BPZmZzZXQgPSB0aGlzLmhlYWRlclRvcE9mZnNldDtcclxuICAgICAgdGhpcy5fcmVzZXRIZWFkZXIoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX21ldGEuaGVhZGVyID0gaGVhZGVyRWxlbWVudDtcclxuICAgIHRoaXMuX21ldGEub2Zmc2V0SGVpZ2h0ID0gaGVhZGVyRWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0aGlzLl9jb25maWd1cmVIZWFkZXIoKTtcclxuICAgIHRoaXMuX3NldEhlYWRlck9mZnNldEluSWZyYW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVhZGVyVG9wT2Zmc2V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyLnN0eWxlLnRvcDtcclxuICB9XHJcblxyXG4gIF9yZXNldEhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGFibGUtaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuc3R5bGUudG9wID0gXCJcIjtcclxuICAgIC8vIHRoaXMuZGV0YWNoTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBfY29uZmlndXJlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYWJsZS1oZWFkZXInKTtcclxuICAgIGhlYWRlci5zdHlsZS50b3AgPSB0aGlzLl9tZXRhLnRvcE9mZnNldDtcclxuICB9XHJcblxyXG4gIF9zZXRIZWFkZXJPZmZzZXRJbklmcmFtZSgpIHtcclxuICAgIGNvbnN0IGlmcmFtZUJvZHkgPSB0aGlzLl9tZXRhLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgaWZyYW1lQm9keS5zdHlsZS5wYWRkaW5nVG9wID0gdGhpcy5fbWV0YS5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0VGljayhjYWxsYmFjaykge1xyXG4gICAgaWYgKCF0aGlzLl9tZXRhLnRpY2tpbmcpIHtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcclxuICAgICAgdGhpcy5fbWV0YS50aWNraW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX21ldGEuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX3Njcm9sbEZpeGVkLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBkZXRhY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9tZXRhLmNvbnRlbnRXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLl9zY3JvbGxGaXhlZCk7XHJcbiAgfVxyXG5cclxuICBfc2Nyb2xsRml4ZWQ9KCk9PntcclxuICAgIHRoaXMuX21ldGEubGFzdFNjcm9sbFkgPSB0aGlzLl9tZXRhLmNvbnRlbnRXaW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICB0aGlzLnJlcXVlc3RUaWNrKHRoaXMuX3Njcm9sbENhbGxiYWNrKTtcclxuICB9O1xyXG5cclxuICBfc2Nyb2xsQ2FsbGJhY2s9KCk9PntcclxuICAgIGxldCBvZmZzZXQgPSB0aGlzLl9tZXRhLmxhc3RTY3JvbGxZO1xyXG4gICAgdGhpcy5oZWFkZXIuc3R5bGUudG9wID0gLW9mZnNldCArICdweCc7XHJcbiAgICB0aGlzLl9tZXRhLnRpY2tpbmcgPSBmYWxzZTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJTY3JvbGxlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcjIvaGVhZGVyLXNjcm9sbGVyLmpzIiwiZnVuY3Rpb24gbG9jYXRpb25EZXNlcmlhbGl6ZShsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbikge1xuICBsZXQgbyA9IHtcbiAgICBwYXRoOiBsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICBxdWVyeToge30sXG4gIH07XG4gIGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoLyYvKS5mb3JFYWNoKHBhaXIgPT4ge1xuICAgIGxldCBhUGFpciA9IHBhaXIuc3BsaXQoLz0vKTtcbiAgICBvLnF1ZXJ5W2FQYWlyWzBdLnRvTG93ZXJDYXNlKCldID0gYVBhaXJbMV1cbiAgfSk7XG4gIHJldHVybiBvXG59XG5cbmZ1bmN0aW9uIHByb21pc2VSZXF1ZXN0KFVSTCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbignR0VUJywgVVJMLCB0cnVlKTtcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgeGhyLnN0YXR1cyA9PSAyMDAgPyByZXNvbHZlKHhoci5yZXNwb25zZVRleHQpIDogcmVqZWN0KEVycm9yKGAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fWApKTtcbiAgICB9XG4gICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZWplY3QoRXJyb3IoJ05ldHdvcmsgRXJyb3InKSk7XG4gICAgfVxuICAgIHhoci5zZW5kKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUdXJucyBhIGBsb2NhdGlvbmAgb2JqZWN0IChyZXN1bHQgb2YgYGxvY2F0aW9uRGVzZXJpYWxpemVgKSBpbnRvIGEgVVJMXG4gKiBAcGFyYW0ge3twYXRoOlN0cmluZywgcXVlcnk6T2JqZWN0fX0gbG9jYXRpb24gLSBhbiBvYmplY3Qgd2l0aCBwYXJhbXMgYW5kIGEgdXJsXG4gKiBAcmV0dXJucyB7U3RyaW5nfSAtIGEgVVJMIHN0cmluZ1xuICogKi9cbmZ1bmN0aW9uIGxvY2F0aW9uU2VyaWFsaXplKGxvY2F0aW9uKSB7XG4gIGxldCBxdWVyeSA9IFtdO1xuICBmb3IgKGxldCBrZXkgaW4gbG9jYXRpb24ucXVlcnkpIHtcbiAgICBxdWVyeS5wdXNoKFtrZXksIGxvY2F0aW9uLnF1ZXJ5W2tleV1dLmpvaW4oJz0nKSk7XG4gIH1cbiAgcmV0dXJuIGxvY2F0aW9uLnBhdGggKyAnPycgKyBxdWVyeS5qb2luKCcmJyk7XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbmFsQ29uZmlnKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgICBpZiAoc2NyaXB0cykge1xuICAgICAgbGV0IGkgPSBzY3JpcHRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNmZyA9IC8oWVxcLkZpbHRlckNvbnRhaW5lciwpXFxzKC4qPylcXCkvZ2k7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IHNjcmlwdHNbaV0udGV4dDtcbiAgICAgICAgaWYgKHNjcmlwdC5pbmRleE9mKCdZLkZpbHRlckNvbnRhaW5lciwnKSA+IC0xKSB7XG4gICAgICAgICAgY29uc3QgZXhlYyA9IGNmZy5leGVjKHNjcmlwdCk7XG4gICAgICAgICAgcmV0dXJuIChleGVjICE9IG51bGwgJiYgZXhlY1syXSkgPyBKU09OLnBhcnNlKGV4ZWNbMl0pIDoge307IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludGVybmFsVmFsdWUobm9kZUlkKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5vZGVJZCk7XG4gIHJldHVybiBub2RlID8gbm9kZS52YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVyVVJMKHVybCkge1xuICBjb25zdCBbcGF0aG5hbWUsIHNlYXJjaF0gPSB1cmwuc3BsaXQoJz8nKTtcbiAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvbkRlc2VyaWFsaXplKHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2gsXG4gICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICB9KTtcbiAgbG9jYXRpb24ucXVlcnkucGFnZXN0YXRlaWQgPSBnZXRJbnRlcm5hbFZhbHVlKCcjUGFnZVN0YXRlSWQnKTtcbiAgbG9jYXRpb24ucXVlcnkucGFnZWlkID0gZ2V0SW50ZXJuYWxWYWx1ZSgnI0N1cnJlbnRQYWdlSWQnKTtcbiAgcmV0dXJuIGxvY2F0aW9uU2VyaWFsaXplKGxvY2F0aW9uKTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsdGVyQ29uZmlndXJhdGlvbigpIHtcbiAgY29uc3QgY29uZmlnID0gZ2V0T3JpZ2luYWxDb25maWcoKTtcbiAgaWYgKGNvbmZpZyAmJiBjb25maWcuU2VydmljZVVybCkge1xuICAgIHJldHVybiBwcm9taXNlUmVxdWVzdChnZXRQcm9wZXJVUkwoY29uZmlnLlNlcnZpY2VVcmwpKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG5cbmNvbnN0IHBheWxvYWQgPSB7XG4gIGV4dGVybmFsRmlsdGVyczogW3tcbiAgICBmdW5jdGlvbjogJ0luSGllcmFyY2h5JywgLy9vcHRpb25hbFxuICAgIHZhcmlhYmxlOiAnY3JtZGF0YS5hY2NvdW50czpSZWdpb24nLFxuICAgIHZhbHVlOiBbJ1RvcCddLFxuICB9XSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbHRlclBheWxvYWQoe1R5cGUsIElkLCBWYWx1ZTF9LCBwTnVtYmVyKSB7XG4gIHJldHVybiBUeXBlID09PSAnaGllcmFyY2h5JyA/IHtcbiAgICB2YXJpYWJsZTogSWQsXG4gICAgdmFsdWU6IFZhbHVlMSxcbiAgICBmdW5jdGlvbjogJ0luSGllcmFyY2h5JyxcbiAgfSA6IHtcbiAgICB2YXJpYWJsZTogYCR7cE51bWJlcn0ucmVzcG9uc2VJZDoke0lkfWAsXG4gICAgdmFsdWU6IFZhbHVlMSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29uZmlnV2l0aFZhbHVlcyh7Y29uZmlndXJhdGlvbiA9IHt9LCBoaWVyYXJjaHlDb25maWcgPSB7fSwgdmFsdWVzOiB7ZmlsdGVyUGFuZWwsIGhpZXJhcmNoeX0gPSB7fX0pIHtcbiAgY29uc3QgY29uZmlnV2l0aE1vZGlmaWVkVmFsdWVzID0ge1xuICAgIC4uLmNvbmZpZ3VyYXRpb24sXG4gICAgSXRlbXM6IFtcbiAgICAgIC4uLihjb25maWd1cmF0aW9uLkl0ZW1zIHx8IFtdKS5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBWYWx1ZTE6IChmaWx0ZXJQYW5lbCA/IGZpbHRlclBhbmVsW2l0ZW0uSWRdIHx8IHt9IDoge30pLlByZWNvZGVzIHx8IG51bGwsXG4gICAgICB9KSksXG4gICAgXSxcbiAgfTtcblxuICBpZiAoaGllcmFyY2h5Q29uZmlnLnZhbHVlcyAmJiBoaWVyYXJjaHlDb25maWcudmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWdXaXRoTW9kaWZpZWRWYWx1ZXMuSXRlbXMucHVzaCh7XG4gICAgICBJZDogaGllcmFyY2h5Q29uZmlnLnF1ZXN0aW9uLFxuICAgICAgVHlwZTogJ2hpZXJhcmNoeScsXG4gICAgICBWYWx1ZTE6IChcbiAgICAgICAgaGllcmFyY2h5XG4gICAgICAgICAgPyBoaWVyYXJjaHkubWFwKHNlbGVjdGVkID0+IHNlbGVjdGVkLk5vZGVJZClcbiAgICAgICAgICA6IGhpZXJhcmNoeUNvbmZpZy52YWx1ZXMubWFwKHNlbGVjdGVkID0+IHNlbGVjdGVkLmxldmVsKVxuICAgICAgKSB8fCBudWxsLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY29uZmlnV2l0aE1vZGlmaWVkVmFsdWVzXG59XG5cbmZ1bmN0aW9uIGV2ZW50UHJvbWlzZShlbGVtZW50LCBldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwcGVkQ2FsbGJhY2ssIGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIHdyYXBwZWRDYWxsYmFjayhlKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwcGVkQ2FsbGJhY2spO1xuICAgICAgcmVzb2x2ZShjYWxsYmFjayhlKSk7XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRVcGRhdGVRdWVyeShmaWx0ZXJJbmZvKSB7XG4gIGNvbnN0IHNlYXJjaCA9IGRlY29kZVVSSUNvbXBvbmVudChmaWx0ZXJJbmZvKTtcbiAgY29uc3Qge3F1ZXJ5fSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobG9jYXRpb25EZXNlcmlhbGl6ZSh7c2VhcmNofSkpKTtcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbmRGaWx0ZXJzKHRhcmdldE9yaWdpbiA9ICdodHRwOi8vcjIuZmlybWdsb2JhbC5jb20nKSB7XG4gIGxldCBleHRlcm5hbENvbmZpZyA9IHdpbmRvdy5zdHVkaW9JbnRlZ3JhdGlvbkNvbmZpZztcbiAgaWYgKCFleHRlcm5hbENvbmZpZykge1xuICAgIC8vZXZlbnRQcm9taXNlKGRvY3VtZW50LCd0ZXh0Tm9kZUxvYWRlZCcsICgpPT57ZXh0ZXJuYWxDb25maWc9d2luZG93LnN0dWRpb0ludGVncmF0aW9uQ29uZmlnfSlcbiAgfVxuXG4gIGNvbnN0IHtwTnVtYmVyLCBoaWVyYXJjaHlDb25maWd9ID0gZXh0ZXJuYWxDb25maWc7XG5cbiAgZnVuY3Rpb24gcGFyc2VDb25maWcoe0l0ZW1zID0gW119KSB7XG4gICAgY29uc3QgZXh0ZXJuYWxGaWx0ZXJzID0gSXRlbXMucmVkdWNlKChyZXN1bHQsIGZpbHRlckl0ZW0pID0+IHtcbiAgICAgIGlmIChmaWx0ZXJJdGVtLlZhbHVlMSkge1xuICAgICAgICByZXN1bHQucHVzaChjcmVhdGVGaWx0ZXJQYXlsb2FkKGZpbHRlckl0ZW0sIHBOdW1iZXIpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge2V4dGVybmFsRmlsdGVyc31cbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKHBheWxvYWQpIHtcbiAgICBjb25zdCByMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yMmRhc2hib2FyZCcpO1xuICAgIGNvbnNvbGUuZGVidWcoJ3dpbGwgc2VuZCBmaWx0ZXJzIHRvIGFwcHN0dWRpbycsIHBheWxvYWQpO1xuICAgIGlmKHIyPT1udWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2FwcFN0dWRpbyBpcyBub3QgZm91bmQgb24gdGhpcyBwYWdlLCBwbGVhc2UgY2hlY2sgaWYgeW91XFwndmUgbG9hZGVkIGl0IGNvcnJlY3RseSBvciBpdCBleGlzdHMnKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gIXIyLmNvbnRlbnRXaW5kb3dcbiAgICAgID8gZXZlbnRQcm9taXNlKHIyLCAnbG9hZCcsIGUgPT4gc2VuZFBheWxvYWQoZS50YXJnZXQuY29udGVudFdpbmRvdywgcGF5bG9hZCkpXG4gICAgICA6IHNlbmRQYXlsb2FkKHIyLmNvbnRlbnRXaW5kb3csIHBheWxvYWQpO1xuXG4gIH1cblxuICBmdW5jdGlvbiBzZW5kUGF5bG9hZCh0YXJnZXQsIHBheWxvYWQpIHtcbiAgICB0YXJnZXQucG9zdE1lc3NhZ2UocGF5bG9hZCwgdGFyZ2V0T3JpZ2luKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBEYXRhTGlzdGVuZXIoY29uZmlndXJhdGlvbikge1xuICAgIGlmIChZICYmIFkuR2xvYmFsKSB7XG4gICAgICBZLkdsb2JhbC5vbigncmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGUnLCBmaWx0ZXJJbmZvID0+IHtcbiAgICAgICAgY29uc3Qge2N1c3RvbWZpbHRlcnMsIHBlcnNub2Rlc30gPSBnZXRVcGRhdGVRdWVyeShmaWx0ZXJJbmZvKTtcbiAgICAgICAgY29uc3QgZmlsdGVyUGFuZWwgPSBjdXN0b21maWx0ZXJzID8gSlNPTi5wYXJzZShjdXN0b21maWx0ZXJzKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaGllcmFyY2h5ID0gcGVyc25vZGVzID8gSlNPTi5wYXJzZShwZXJzbm9kZXMpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBjb25maWcgPSB1cGRhdGVDb25maWdXaXRoVmFsdWVzKHtcbiAgICAgICAgICBjb25maWd1cmF0aW9uLFxuICAgICAgICAgIGhpZXJhcmNoeUNvbmZpZyxcbiAgICAgICAgICB2YWx1ZXM6IHtmaWx0ZXJQYW5lbCwgaGllcmFyY2h5fSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBwYXJzZUNvbmZpZyhjb25maWcpO1xuICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2UocGF5bG9hZCk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdZVUkgaXMgbm90IGRlZmluZWQgb3IgYWNjZXNzaWJsZSwgY2Fubm90IHNldCB1cCBhIFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiBsaXN0ZW5lcicpO1xuICAgIH1cbiAgICByZXR1cm4gY29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vIGV4ZWN1dGUgZnVuY3Rpb25cbiAgZ2V0RmlsdGVyQ29uZmlndXJhdGlvbigpXG4gICAgLnRoZW4oY29uZmlndXJhdGlvbiA9PiB7XG4gICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjb25maWd1cmF0aW9uKVxuICAgICAgfVxuICAgICAgY29uc29sZS53YXJuKCdmaWx0ZXIgcGFuZWwgZG9lc25cXCd0IGV4aXN0IG9uIHBhZ2UsIHNraXAgaXQgZnJvbSBzZW5kaW5nIGZpbHRlcnMgdG8gYXBwU3R1ZGlvJyk7XG4gICAgICByZXR1cm47XG4gICAgfSlcbiAgICAudGhlbihzZXR1cERhdGFMaXN0ZW5lcilcbiAgICAudGhlbihjb25maWd1cmF0aW9uID0+IHVwZGF0ZUNvbmZpZ1dpdGhWYWx1ZXMoe2NvbmZpZ3VyYXRpb24sIGhpZXJhcmNoeUNvbmZpZ30pKVxuICAgIC50aGVuKHBhcnNlQ29uZmlnKVxuICAgIC50aGVuKHBvc3RNZXNzYWdlKVxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yMi9zZW5kRmlsdGVycy5qcyIsIi8qKlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5cclxuY2xhc3MgRGV0YWJpbmF0b3Ige1xyXG4gIC8qKlxyXG4gICAqIEhlbHBzIHRvIG1haW50YWluIGEgaGVhbHRoeSB0YWJ1bGF0aW9uIHdpdGhpbiB0aGUgc2lkZWJhciB3aGVuIGl0J3Mgb3BlbiwgcmF0aGVyIHRoYW4gdGFidWxhdGUgdGhlIHdob2xlIHBhZ2VcclxuICAgKiBVc2FnZTpcclxuICAgKlxyXG4gICAqIGBgYCBqYXZhc2NyaXB0XHJcbiAgICogY29uc3QgZGV0YWJpbmF0b3IgPSBuZXcgRGV0YWJpbmF0b3IoZWxlbWVudCk7XHJcbiAgICogZGV0YWJpbmF0b3IuaW5lcnQgPSB0cnVlOyAgLy8gU2V0cyBhbGwgZm9jdXNhYmxlIGNoaWxkcmVuIG9mIGVsZW1lbnQgdG8gdGFiaW5kZXg9LTFcclxuICAgKiBkZXRhYmluYXRvci5pbmVydCA9IGZhbHNlOyAvLyBSZXN0b3JlcyBhbGwgZm9jdXNhYmxlIGNoaWxkcmVuIG9mIGVsZW1lbnRcclxuICAgKiBgYGBcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudC4gbmV3IERldGFiaW5hdG9yIG5lZWRzIGFuIGVsZW1lbnQgcmVmZXJlbmNlJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pbmVydCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSAnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4XSwgW2NvbnRlbnRlZGl0YWJsZV0nO1xyXG4gICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGluZXJ0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luZXJ0O1xyXG4gIH1cclxuXHJcbiAgc2V0IGluZXJ0KGlzSW5lcnQpIHtcclxuICAgIGlmICh0aGlzLl9pbmVydCA9PT0gaXNJbmVydCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5faW5lcnQgPSBpc0luZXJ0O1xyXG5cclxuICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnRzLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgIGlmIChpc0luZXJ0KSB7XHJcbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGhhcyBhbiBleHBsaWN0IHRhYmluZGV4IHNhdmUgaXRcclxuICAgICAgICBpZiAoY2hpbGQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XHJcbiAgICAgICAgICBjaGlsZC5fX3NhdmVkVGFiaW5kZXggPSBjaGlsZC50YWJJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2V0IEFMTCBmb2N1c2FibGUgY2hpbGRyZW4gdG8gdGFiaW5kZXggLTFcclxuICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIHRoZSBjaGlsZCBoYXMgYSBzYXZlZCB0YWJpbmRleCwgcmVzdG9yZSBpdFxyXG4gICAgICAgIC8vIEJlY2F1c2UgdGhlIHZhbHVlIGNvdWxkIGJlIDAsIGV4cGxpY2l0bHkgY2hlY2sgdGhhdCBpdCdzIG5vdCBmYWxzZVxyXG4gICAgICAgIGlmIChjaGlsZC5fX3NhdmVkVGFiaW5kZXggPT09IDAgfHwgY2hpbGQuX19zYXZlZFRhYmluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4gY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIGNoaWxkLl9fc2F2ZWRUYWJpbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFJlbW92ZSB0YWJpbmRleCBmcm9tIEFOWSBSRU1BSU5JTkcgY2hpbGRyZW5cclxuICAgICAgICAgIGNoaWxkLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZXRhYmluYXRvcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NpZGUtbmF2L2RldGFiaW5hdG9yLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIhZnVuY3Rpb24odCxlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7dmFyIG49ZSgpO2Zvcih2YXIgaSBpbiBuKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOnQpW2ldPW5baV19fSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoaSl7aWYobltpXSlyZXR1cm4gbltpXS5leHBvcnRzO3ZhciByPW5baV09e2V4cG9ydHM6e30saWQ6aSxsb2FkZWQ6ITF9O3JldHVybiB0W2ldLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLGUpLHIubG9hZGVkPSEwLHIuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gZS5tPXQsZS5jPW4sZS5wPVwiXCIsZSgwKX0oW2Z1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBpPWVbbl07aS5lbnVtZXJhYmxlPWkuZW51bWVyYWJsZXx8ITEsaS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gaSYmKGkud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkua2V5LGkpfX1yZXR1cm4gZnVuY3Rpb24oZSxuLGkpe3JldHVybiBuJiZ0KGUucHJvdG90eXBlLG4pLGkmJnQoZSxpKSxlfX0oKSxyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLGkpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp0aGlzO24odGhpcyx0KTt2YXIgbz1lLnF1ZXJ5LHM9ZS5mdWxsLHU9dm9pZCAwIT09cyYmczt0aGlzLl9tYXRjaGVzPSExLHRoaXMuZnVsbD11LHRoaXMuX21xPW51bGwsdGhpcy5fY2FsbGJhY2s9aSx0aGlzLl9jb250ZXh0PXIsdGhpcy5fYm91bmQ9dGhpcy5fb25NYXRjaC5iaW5kKHRoaXMpLHRoaXMucXVlcnk9b31yZXR1cm4gaSh0LFt7a2V5OlwiX29uTWF0Y2hcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbWF0Y2hlcz10Lm1hdGNoZXMsdGhpcy5fY2FsbGJhY2suY2FsbCh0aGlzLl9jb250ZXh0LHQubWF0Y2hlcyl9fSx7a2V5OlwibWF0Y2hlc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9tYXRjaGVzfX0se2tleTpcInF1ZXJ5XCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3F1ZXJ5fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5fcXVlcnk9dCx0aGlzLmNvbnN0cnVjdG9yLnJlbW92ZSh0aGlzLl9tcSx0aGlzLl9ib3VuZCk7dmFyIGU9dGhpcy5xdWVyeTtlJiYodGhpcy5mdWxsfHxcIihcIj09PWVbMF18fChlPVwiKFwiK2UrXCIpXCIpLHRoaXMuX21xPXdpbmRvdy5tYXRjaE1lZGlhKGUpLHRoaXMuX29uTWF0Y2godGhpcy5fbXEpLHRoaXMuY29uc3RydWN0b3IuYWRkKHRoaXMuX21xLHRoaXMuX2JvdW5kKSl9fV0sW3trZXk6XCJhZGRcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3QmJnQuYWRkTGlzdGVuZXIoZSl9fSx7a2V5OlwicmVtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt0JiZ0LnJlbW92ZUxpc3RlbmVyKGUpLHQ9bnVsbH19XSksdH0oKTtlLmRlZmF1bHQ9cn1dKX0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZWRpYS1xdWVyeS5idW5kbGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21lZGlhLXF1ZXJ5L2Rpc3QvbWVkaWEtcXVlcnkuYnVuZGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=