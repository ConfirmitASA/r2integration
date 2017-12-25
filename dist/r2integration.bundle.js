/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(require("./hierarchy/hierarchy"), require("./navigation/menu-transformer"), require("./main.css"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(global.hierarchy, global.menuTransformer, global.main);
	    global.main = mod.exports;
	  }
	})(this, function (_hierarchy, _menuTransformer) {
	  "use strict";
	
	  var _hierarchy2 = _interopRequireDefault(_hierarchy);
	
	  var _menuTransformer2 = _interopRequireDefault(_menuTransformer);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  window.Reportal = window.Reportal || {};
	  window.Reportal.TransformMenuAt = _menuTransformer2.default;
	  window.Reportal.hierarchyUpgrade = _hierarchy2.default.upgrade;
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.hierarchy = mod.exports;
	  }
	})(this, function (exports) {
	  'use strict';
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  var MDHierarchy = function () {
	    function MDHierarchy() {
	      _classCallCheck(this, MDHierarchy);
	    }
	
	    _createClass(MDHierarchy, [{
	      key: 'upgrade',
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
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(5), __webpack_require__(7), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("../side-nav/side-nav"), require("media-query"), require("../r2/header-scroller"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.sideNav, global.mediaQuery, global.headerScroller);
	    global.menuTransformer = mod.exports;
	  }
	})(this, function (exports, _sideNav, _mediaQuery, _headerScroller) {
	  "use strict";
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	
	  var _sideNav2 = _interopRequireDefault(_sideNav);
	
	  var _mediaQuery2 = _interopRequireDefault(_mediaQuery);
	
	  var _headerScroller2 = _interopRequireDefault(_headerScroller);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
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
	      var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 768;
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      _classCallCheck(this, TransformMenuAt);
	
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
	        this.headerScrollerInst = this.makeHeaderRespondToIframeScroll();
	      }
	      this.handleBreakpointMatch = this.handleBreakpointMatch.bind(this);
	      this.sidenav = new _sideNav2.default();
	      this.mediaQuery = new _mediaQuery2.default({ query: "max-width:" + breakpoint + "px" }, this.handleBreakpointMatch, this);
	    }
	
	    _createClass(TransformMenuAt, [{
	      key: "swapHeaderAndIframe",
	      value: function swapHeaderAndIframe() {
	        document.querySelector('.body-wrapper').classList.add('integration-mode');
	      }
	    }, {
	      key: "handleBreakpointMatch",
	      value: function handleBreakpointMatch(belowBreakpoint) {
	        if (!belowBreakpoint) {
	          this.swapHeader(this.desktopHeaderEl);
	          this.sidenav.removeEventListeners();
	        } else {
	          this.swapHeader(this.mobileHeaderEl);
	          this.sidenav.addEventListeners();
	        }
	      }
	    }, {
	      key: "makeHeaderRespondToIframeScroll",
	      value: function makeHeaderRespondToIframeScroll() {
	        var _this = this;
	
	        return new Promise(function (resolve) {
	          if (!_this.isIframeURLEmpty) {
	            resolve(_this.makeHeaderScrollable(_this.iframeEl.contentWindow));
	          } else {
	            _this.iframeEl.addEventListener('load', function (e) {
	              return resolve(_this.makeHeaderScrollable(e.target.contentWindow));
	            });
	          }
	        });
	      }
	    }, {
	      key: "makeHeaderScrollable",
	      value: function makeHeaderScrollable(iframeContentWindow) {
	        return this.currentHeader && new _headerScroller2.default(iframeContentWindow, this.currentHeader);
	      }
	    }, {
	      key: "swapHeader",
	      value: function swapHeader(newHeader) {
	        this.currentHeader = newHeader;
	        if (this.iframeEl && this.headerScrollerInst) {
	          this.headerScrollerInst.then(function (headerScroller) {
	            return headerScroller.header = newHeader;
	          });
	        }
	      }
	    }, {
	      key: "isIntegrationMode",
	      get: function get() {
	        return !!this.iframeEl;
	      }
	    }, {
	      key: "isIframeURLEmpty",
	      get: function get() {
	        return this.iframeEl.contentWindow.location.href === 'about:blank';
	      }
	    }]);
	
	    return TransformMenuAt;
	  }();
	
	  exports.default = TransformMenuAt;
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.headerScroller = mod.exports;
	  }
	})(this, function (exports) {
	  'use strict';
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
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
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.detabinator = mod.exports;
	  }
	})(this, function (exports) {
	  'use strict';
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
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
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('./detabinator'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.detabinator);
	    global.sideNav = mod.exports;
	  }
	})(this, function (exports, _detabinator) {
	  'use strict';
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	
	  var _detabinator2 = _interopRequireDefault(_detabinator);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
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
	
	      this.startX = 0;
	      this.currentX = 0;
	      this.touchingSideNav = false;
	      this.supportsPassive = null;
	
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
	    }
	
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
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by IvanP on 13.12.2016.
	 */
	/**
	 * `MediaQuery` helps perform actions when CSS query is matched instead of polling the window width, when it's not so important to get exact width, only checking matching the query.
	 *
	 * ``` javascript
	 * function onMatch(matches){
	 *  if(matches){
	 *    // do what you need when the mediaquery is matched
	 *  } else {
	 *     // do what you need when the media query is not matched
	 *  }
	 * }
	 *
	 *  var mq = new MediaQuery({query:"max-width:760px"},onMatch,this);
	 *
	 *  //at any time you may check whether it matches the query:
	 *
	 *  mq.matches //true or false
	 * ```
	 *
	 * @param {Object} options
	 * @param {Object} options.query - The CSS media query to evaluate.
	 * @param {Boolean} [options.full=false] - If true, the query attribute is assumed to be a complete media query string rather than a single media feature.
	 * @param {Function} callback - function to execute when matching is evaluated
	 * @param {Object|Function} [context=this] - context in which the `callback` function needs to be executed
	 *
	 * @property {Boolean} matches - whether the query matches the window width. Readonly.
	 * @property {Boolean} full - If true, the query attribute is assumed to be a complete media query string rather than a single media feature.
	 * @property {String} query - The CSS media query to evaluate.
	 * */
	class MediaQuery{
	  constructor(options,callback,context=this){
	    let {query,full=false} = options;
	    this._matches = false;
	    this.full = full;
	    this._mq = null;
	    this._callback = callback;
	    this._context = context;
	    this._bound = this._onMatch.bind(this);
	    this.query=query;
	  }
	
	  _onMatch(mq){
	    this._matches = mq.matches;
	    return this._callback.call(this._context,mq.matches)
	  }
	
	  get matches(){
	    return this._matches;
	  }
	
	  get query(){
	    return this._query;
	  }
	
	  set query(val){
	    this._query = val;
	    this.constructor.remove(this._mq,this._bound);
	    let query = this.query;
	    if (!query) {
	      return;
	    }
	    if (!this.full && query[0] !== '(') {
	      query = '(' + query + ')';
	    }
	    this._mq = window.matchMedia(query);
	    this._onMatch(this._mq);
	    this.constructor.add(this._mq,this._bound);
	  }
	
	  static add(mq,bound){
	    if (mq) {
	      mq.addListener(bound);
	    }
	  }
	
	  static remove(mq,bound) {
	    if (mq) {
	      mq.removeListener(bound);
	    }
	    mq = null;
	  }
	}
	export default MediaQuery


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjcxNWNjMjEwZDc2NmMzN2E0MDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hpZXJhcmNoeS9oaWVyYXJjaHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdmlnYXRpb24vbWVudS10cmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcjIvaGVhZGVyLXNjcm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaWRlLW5hdi9kZXRhYmluYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2lkZS1uYXYvc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy8uL34vbWVkaWEtcXVlcnkvc3JjL21haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiUmVwb3J0YWwiLCJUcmFuc2Zvcm1NZW51QXQiLCJoaWVyYXJjaHlVcGdyYWRlIiwidXBncmFkZSIsIk1ESGllcmFyY2h5IiwiaGllcmFyY2h5QnV0dG9uIiwiaGllcmFyY2h5VG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZXJhcmNoeVRvZ2dsZUNsaWNrSGFuZGxlciIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwiaGllcmFyY2h5Q2hyb21lIiwicmVzb2x2ZSIsImFzeW5jSGllcmFyY2h5Q2hyb21lIiwiZGV0YWNoSGllcmFyY2h5VG9nZ2xlQ2xpY2tMaXN0ZW5lciIsImRpc2FibGVQYWdlU2Nyb2xsIiwidGhlbiIsImF0dGFjaENocm9tZUNsb3NlTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DaHJvbWVDbG9zZSIsImV2ZW50IiwiY2FuY2VsIiwiY2FuY2VsQnV0dG9uIiwiYXBwbHkiLCJhcHBseUJ1dHRvbiIsImNocm9tZSIsImNsaWNrZWRFbCIsInBhdGgiLCJpbmRleE9mIiwiY2xpY2siLCJlbmFibGVQYWdlU2Nyb2xsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyZW50Tm9kZSIsImJyZWFrcG9pbnQiLCJvcHRpb25zIiwiaWZyYW1lQ2xhc3NOYW1lIiwiZGVza3RvcEhlYWRlckNsYXNzTmFtZSIsIm1vYmlsZUhlYWRlckNsYXNzTmFtZSIsImlmcmFtZUVsIiwiZGVza3RvcEhlYWRlckVsIiwibW9iaWxlSGVhZGVyRWwiLCJjdXJyZW50SGVhZGVyIiwiaXNJbnRlZ3JhdGlvbk1vZGUiLCJzd2FwSGVhZGVyQW5kSWZyYW1lIiwiaGVhZGVyU2Nyb2xsZXJJbnN0IiwibWFrZUhlYWRlclJlc3BvbmRUb0lmcmFtZVNjcm9sbCIsImhhbmRsZUJyZWFrcG9pbnRNYXRjaCIsImJpbmQiLCJzaWRlbmF2IiwibWVkaWFRdWVyeSIsInF1ZXJ5IiwiY2xhc3NMaXN0IiwiYWRkIiwiYmVsb3dCcmVha3BvaW50Iiwic3dhcEhlYWRlciIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJpc0lmcmFtZVVSTEVtcHR5IiwibWFrZUhlYWRlclNjcm9sbGFibGUiLCJjb250ZW50V2luZG93IiwiZSIsInRhcmdldCIsImlmcmFtZUNvbnRlbnRXaW5kb3ciLCJuZXdIZWFkZXIiLCJoZWFkZXJTY3JvbGxlciIsImhlYWRlciIsImxvY2F0aW9uIiwiaHJlZiIsIkhlYWRlclNjcm9sbGVyIiwicmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudCIsIl9zY3JvbGxGaXhlZCIsIl9tZXRhIiwibGFzdFNjcm9sbFkiLCJwYWdlWU9mZnNldCIsInJlcXVlc3RUaWNrIiwiX3Njcm9sbENhbGxiYWNrIiwib2Zmc2V0Iiwic3R5bGUiLCJ0b3AiLCJ0aWNraW5nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0b3BPZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJhdHRhY2hMaXN0ZW5lcnMiLCJyZW1vdmUiLCJpZnJhbWVCb2R5IiwicGFkZGluZ1RvcCIsImNhbGxiYWNrIiwiaGVhZGVyRWxlbWVudCIsImhlYWRlclRvcE9mZnNldCIsIl9yZXNldEhlYWRlciIsIl9jb25maWd1cmVIZWFkZXIiLCJfc2V0SGVhZGVyT2Zmc2V0SW5JZnJhbWUiLCJEZXRhYmluYXRvciIsImVsZW1lbnQiLCJFcnJvciIsIl9pbmVydCIsIl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyIsIl9mb2N1c2FibGVFbGVtZW50cyIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpc0luZXJ0IiwiZm9yRWFjaCIsImNoaWxkIiwiaGFzQXR0cmlidXRlIiwiX19zYXZlZFRhYmluZGV4IiwidGFiSW5kZXgiLCJTaWRlTmF2Iiwic2hvd0J1dHRvbkVsIiwiaGlkZUJ1dHRvbkVsIiwic2lkZU5hdkVsIiwic2lkZU5hdkNvbnRhaW5lckVsIiwic3RhcnRYIiwiY3VycmVudFgiLCJ0b3VjaGluZ1NpZGVOYXYiLCJzdXBwb3J0c1Bhc3NpdmUiLCJvblRvdWNoU3RhcnQiLCJldnQiLCJjb250YWlucyIsInRvdWNoZXMiLCJwYWdlWCIsInVwZGF0ZSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsInRyYW5zbGF0ZVgiLCJNYXRoIiwibWluIiwidHJhbnNmb3JtIiwiaGlkZVNpZGVOYXYiLCJibG9ja0NsaWNrcyIsInN0b3BQcm9wYWdhdGlvbiIsIm9uVHJhbnNpdGlvbkVuZCIsInNob3dTaWRlTmF2Iiwib3ZlcmZsb3ciLCJkZXRhYmluYXRvciIsImluZXJ0IiwicGFzc2l2ZSIsImlzU3VwcG9ydGVkIiwiYXBwbHlQYXNzaXZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFD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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicjJpbnRlZ3JhdGlvbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmNzE1Y2MyMTBkNzY2YzM3YTQwOSIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgTURIaWVyYXJjaHkgZnJvbSBcIi4vaGllcmFyY2h5L2hpZXJhcmNoeVwiO1xuaW1wb3J0IFRyYW5zZm9ybU1lbnVBdCBmcm9tIFwiLi9uYXZpZ2F0aW9uL21lbnUtdHJhbnNmb3JtZXJcIjtcblxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xud2luZG93LlJlcG9ydGFsLlRyYW5zZm9ybU1lbnVBdCA9IFRyYW5zZm9ybU1lbnVBdDtcbndpbmRvdy5SZXBvcnRhbC5oaWVyYXJjaHlVcGdyYWRlID0gTURIaWVyYXJjaHkudXBncmFkZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTURIaWVyYXJjaHkge1xuICBnZXQgaGllcmFyY2h5VG9nZ2xlKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGQtdGFyZ2V0LWJ1dHRvbicpO1xuICB9XG5cbiAgZ2V0IGhpZXJhcmNoeUNocm9tZSgpIHtcbiAgICByZXR1cm4gdGhpcy5oaWVyYXJjaHlUb2dnbGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZGQtZHJpbGxkb3duJylcbiAgfVxuXG4gIGdldCBjYW5jZWxCdXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaGllcmFyY2h5Q2hyb21lLnF1ZXJ5U2VsZWN0b3IoJy5kZC1jYW5jZWwnKVxuICB9XG5cbiAgZ2V0IGFwcGx5QnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLmhpZXJhcmNoeUNocm9tZS5xdWVyeVNlbGVjdG9yKCcuZGQtYnV0dG9uLXNlbGVjdCcpXG4gIH1cblxuICAvKipcbiAgICogYXR0YWNoZXMgYSBsaXN0ZW5lciB0byBhIGhpZXJhcmNoeSBwb3B1cCB3aGVuIGl0J3MgaW5pdGlhbGlzZWQgdG8gYmUgYWJsZSB0byBjbG9zZSBpdCBvbiBjbGljay1vdXRzaWRlXG4gICAqICovXG4gIHVwZ3JhZGUoKSB7XG4gICAgY29uc3QgaGllcmFyY2h5QnV0dG9uID0gdGhpcy5oaWVyYXJjaHlUb2dnbGU7XG4gICAgaGllcmFyY2h5QnV0dG9uICYmIGhpZXJhcmNoeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGllcmFyY2h5VG9nZ2xlQ2xpY2tIYW5kbGVyKVxuICB9XG5cbiAgYXN5bmNIaWVyYXJjaHlDaHJvbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGhpZXJhcmNoeUNocm9tZSA9IHRoaXMuaGllcmFyY2h5Q2hyb21lO1xuICAgICAgICAgIGhpZXJhcmNoeUNocm9tZSA/IHJlc29sdmUoaGllcmFyY2h5Q2hyb21lKSA6IHJlc29sdmUodGhpcy5hc3luY0hpZXJhcmNoeUNocm9tZSgpKVxuICAgICAgICB9LFxuICAgICAgICAzMDApXG4gICAgKVxuICB9XG5cbiAgaGllcmFyY2h5VG9nZ2xlQ2xpY2tIYW5kbGVyKCkge1xuICAgIHRoaXMuZGV0YWNoSGllcmFyY2h5VG9nZ2xlQ2xpY2tMaXN0ZW5lcigpO1xuICAgIHRoaXMuZGlzYWJsZVBhZ2VTY3JvbGwoKTtcbiAgICBsZXQgaGllcmFyY2h5Q2hyb21lID0gdGhpcy5oaWVyYXJjaHlDaHJvbWU7XG4gICAgaWYgKCFoaWVyYXJjaHlDaHJvbWUpIHtcbiAgICAgIGhpZXJhcmNoeUNocm9tZSA9IHRoaXMuYXN5bmNIaWVyYXJjaHlDaHJvbWUoKTtcbiAgICAgIGhpZXJhcmNoeUNocm9tZS50aGVuKHRoaXMuYXR0YWNoQ2hyb21lQ2xvc2VMaXN0ZW5lcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdHRhY2hDaHJvbWVDbG9zZUxpc3RlbmVyKGhpZXJhcmNoeUNocm9tZSlcbiAgICB9XG4gIH1cblxuICBkZXRhY2hIaWVyYXJjaHlUb2dnbGVDbGlja0xpc3RlbmVyKCkge1xuICAgIHRoaXMuaGllcmFyY2h5VG9nZ2xlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWVyYXJjaHlUb2dnbGVDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgYXR0YWNoQ2hyb21lQ2xvc2VMaXN0ZW5lcihoaWVyYXJjaHlDaHJvbWUpIHtcbiAgICBoaWVyYXJjaHlDaHJvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2hyb21lQ2xvc2UpXG4gIH1cblxuICBvbkNocm9tZUNsb3NlKGV2ZW50KSB7XG4gICAgY29uc3QgY2FuY2VsID0gdGhpcy5jYW5jZWxCdXR0b24sXG4gICAgICBhcHBseSA9IHRoaXMuYXBwbHlCdXR0b24sXG4gICAgICBjaHJvbWUgPSB0aGlzLmhpZXJhcmNoeUNocm9tZSxcbiAgICAgIGNsaWNrZWRFbCA9IGV2ZW50LnBhdGhbMF07XG5cbiAgICBpZiAoW2Nocm9tZSwgY2FuY2VsLCBhcHBseV0uaW5kZXhPZihjbGlja2VkRWwpID4gLTEpIHtcbiAgICAgIGlmIChjbGlja2VkRWwgPT0gY2hyb21lKSB7XG4gICAgICAgIGNhbmNlbC5jbGljaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbmFibGVQYWdlU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzYWJsZVBhZ2VTY3JvbGwoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnb3ZlcmZsb3c6aGlkZGVuICFpbXBvcnRhbnQnKTtcbiAgfVxuXG4gIGVuYWJsZVBhZ2VTY3JvbGwoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGllcmFyY2h5L2hpZXJhcmNoeS5qcyIsImltcG9ydCBTaWRlTmF2IGZyb20gXCIuLi9zaWRlLW5hdi9zaWRlLW5hdlwiO1xuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSBcIm1lZGlhLXF1ZXJ5XCI7XG5pbXBvcnQgSGVhZGVyU2Nyb2xsZXIgZnJvbSBcIi4uL3IyL2hlYWRlci1zY3JvbGxlclwiO1xuXG5cbmNsYXNzIFRyYW5zZm9ybU1lbnVBdCB7XG4gIC8qKlxuICAgKiBUaGlzIGNsYXNzIHNldHMgdXAgYSBsaXN0ZW5lciB0byBkZXRlY3Qgd2hldGhlciB0aGUgdmlld3BvcnQgbWF0Y2hlcyB0aGUgbWF4LXdpZHRoIHNldCB1cCBpbiBgYnJlYWtwb2ludGAgYW5kIGJhc2VkIG9uIGV4aXN0ZW5jZSBvZiBhbiBpbnRlZ3JhdGlvbi1pZnJhbWVFbFxuICAgKiBzZXRzIHVwIGhlYWRlIHNjcm9sbGVycyBvciBqdXN0IHN3YXBzIHRoZSBoZWFkZXIgaW50byBob3Jpem9udGFsIG9yIHNpZGViYXIgbmF2aWdhdGlvbiBtb2Rlc1xuICAgKiBAcGFyYW0ge051bWJlcn0gW2JyZWFrcG9pbnQ9NzY4XSAtIG1heC13aWR0aCBvZiBkZXZpY2Ugdmlld3BvcnQgdGhhdCBpcyBjb25zaWRlcmVkIHRvIGJlIGEgbW9iaWxlIGRldmljZSBhbmQgaG9zdHMgYSBtb2JpbGUgc2lkZWJhci5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWZyYW1lQ2xhc3NOYW1lXSAtIHIyaW50ZWdyYXRpb24gaWZyYW1lIENTUyBjbGFzc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZGVza3RvcEhlYWRlckNsYXNzTmFtZV0gLSBDU1MgY2xhc3Mgb2YgaGVhZGVyIHRvIGRpc3BsYXkgYWJvdmUgYGJyZWFrcG9pbnRgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5tb2JpbGVIZWFkZXJDbGFzc05hbWVdIC0gQ1NTIGNsYXNzIG9mIGhlYWRlciB0byBkaXNwbGF5IGJlbG93IGBicmVha3BvaW50YFxuICAgKiBAcmVxdWlyZXMgTWVkaWFRdWVyeVxuICAgKiBAcmVxdWlyZXMgU2lkZU5hdlxuICAgKiBAcmVxdWlyZXMgSGVhZGVyU2Nyb2xsZXJcbiAgICogKi9cbiAgY29uc3RydWN0b3IoYnJlYWtwb2ludCA9IDc2OCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGlmcmFtZUNsYXNzTmFtZSAgICAgICAgPSAnLnIyZGFzaGJvYXJkJyxcbiAgICAgICAgICAgIGRlc2t0b3BIZWFkZXJDbGFzc05hbWUgPSAnLnJlcG9ydGFsLWJhcicsXG4gICAgICAgICAgICBtb2JpbGVIZWFkZXJDbGFzc05hbWUgID0gJy5yZXBvcnRhbC1oZWFkZXInLFxuICAgICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgdGhpcy5pZnJhbWVFbCAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlmcmFtZUNsYXNzTmFtZSk7XG4gICAgdGhpcy5kZXNrdG9wSGVhZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRlc2t0b3BIZWFkZXJDbGFzc05hbWUpO1xuICAgIHRoaXMubW9iaWxlSGVhZGVyRWwgID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2JpbGVIZWFkZXJDbGFzc05hbWUpO1xuICAgIHRoaXMuY3VycmVudEhlYWRlciA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5pc0ludGVncmF0aW9uTW9kZSl7Ly8gaWYgaXQncyBpbnRlZ3JhdGlvbiBwYWdlIC0gZG8gc2Nyb2xsaW5nXG4gICAgICB0aGlzLnN3YXBIZWFkZXJBbmRJZnJhbWUoKTtcbiAgICAgIHRoaXMuaGVhZGVyU2Nyb2xsZXJJbnN0ID0gdGhpcy5tYWtlSGVhZGVyUmVzcG9uZFRvSWZyYW1lU2Nyb2xsKCk7XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQnJlYWtwb2ludE1hdGNoID0gdGhpcy5oYW5kbGVCcmVha3BvaW50TWF0Y2guYmluZCh0aGlzKTtcbiAgICB0aGlzLnNpZGVuYXYgPSBuZXcgU2lkZU5hdigpO1xuICAgIHRoaXMubWVkaWFRdWVyeSA9IG5ldyBNZWRpYVF1ZXJ5KHtxdWVyeTogYG1heC13aWR0aDoke2JyZWFrcG9pbnR9cHhgfSwgdGhpcy5oYW5kbGVCcmVha3BvaW50TWF0Y2gsIHRoaXMpO1xuICB9XG5cbiAgZ2V0IGlzSW50ZWdyYXRpb25Nb2RlKCl7XG4gICAgcmV0dXJuICEhdGhpcy5pZnJhbWVFbFxuICB9XG5cbiAgc3dhcEhlYWRlckFuZElmcmFtZSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LXdyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdpbnRlZ3JhdGlvbi1tb2RlJyk7XG4gIH1cblxuICBoYW5kbGVCcmVha3BvaW50TWF0Y2goYmVsb3dCcmVha3BvaW50KSB7XG4gICAgaWYgKCFiZWxvd0JyZWFrcG9pbnQpIHtcbiAgICAgIHRoaXMuc3dhcEhlYWRlcih0aGlzLmRlc2t0b3BIZWFkZXJFbCk7XG4gICAgICB0aGlzLnNpZGVuYXYucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zd2FwSGVhZGVyKHRoaXMubW9iaWxlSGVhZGVyRWwpO1xuICAgICAgdGhpcy5zaWRlbmF2LmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUhlYWRlclJlc3BvbmRUb0lmcmFtZVNjcm9sbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNJZnJhbWVVUkxFbXB0eSkge1xuICAgICAgICByZXNvbHZlKHRoaXMubWFrZUhlYWRlclNjcm9sbGFibGUodGhpcy5pZnJhbWVFbC5jb250ZW50V2luZG93KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+e1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMubWFrZUhlYWRlclNjcm9sbGFibGUoZS50YXJnZXQuY29udGVudFdpbmRvdykpXG5cbiAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbWFrZUhlYWRlclNjcm9sbGFibGUoaWZyYW1lQ29udGVudFdpbmRvdykge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRIZWFkZXIgJiYgbmV3IEhlYWRlclNjcm9sbGVyKGlmcmFtZUNvbnRlbnRXaW5kb3csIHRoaXMuY3VycmVudEhlYWRlcik7XG4gIH1cblxuICBnZXQgaXNJZnJhbWVVUkxFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5pZnJhbWVFbC5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWYgPT09ICdhYm91dDpibGFuaydcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGB0aGlzLmN1cnJlbnRIZWFkZXJgIHRvIGEgbmV3IEhUTUxFbGVtZW50IGFuZCBkb2VzIHRoZSBzYW1lIGZvciBgSGVhZGVyU2Nyb2xsZXIuaGVhZGVyYFxuICAgKiAqL1xuICBzd2FwSGVhZGVyKG5ld0hlYWRlcikge1xuICAgIHRoaXMuY3VycmVudEhlYWRlciA9IG5ld0hlYWRlcjtcbiAgICBpZiAodGhpcy5pZnJhbWVFbCAmJiB0aGlzLmhlYWRlclNjcm9sbGVySW5zdCkge1xuICAgICAgdGhpcy5oZWFkZXJTY3JvbGxlckluc3QudGhlbihoZWFkZXJTY3JvbGxlciA9PiBoZWFkZXJTY3JvbGxlci5oZWFkZXIgPSBuZXdIZWFkZXIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm1NZW51QXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmF2aWdhdGlvbi9tZW51LXRyYW5zZm9ybWVyLmpzIiwiY2xhc3MgSGVhZGVyU2Nyb2xsZXIge1xuICAvKipcbiAgICogYEhlYWRlclNjcm9sbGVyYCBpcyBhIGNsYXNzIHRoYXQgbGlzdGVucyB0byBgaWZyYW1lRWxgJ3MgY29udGVudFdpbmRvdyBzY3JvbGwgZXZlbnQgYW5kIHNjcm9sbHMgdGhlIGByZXBvcnRhbEhlYWRlckhUTUxFbGVtZW50YCB3aGVuIHRoZSBpZnJhbWVFbCBpcyBzY3JvbGxlZFxuICAgKiBAcGFyYW0ge1dpbmRvd30gY29udGVudFdpbmRvdyAtIGlmcmFtZUVsLmNvbnRlbnRXaW5kb3dcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudCAtIHJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnQgZWxlbWVudCB0aGF0IG5lZWRzIHRvIGJlIHNjcm9sbGVkXG4gICAqICovXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnRXaW5kb3csIHJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnQpIHtcbiAgICBjb250ZW50V2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICBjb250ZW50V2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgfHwgY29udGVudFdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgIHx8IGNvbnRlbnRXaW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICB8fCBjb250ZW50V2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG4gICAgdGhpcy5fbWV0YSA9IHtcbiAgICAgIHRvcE9mZnNldDogbnVsbCxcbiAgICAgIHRpY2tpbmc6IGZhbHNlLFxuICAgICAgb2Zmc2V0SGVpZ2h0OiBudWxsLFxuICAgICAgaGVhZGVyOiBudWxsLFxuICAgICAgbGFzdFNjcm9sbFk6IDAsXG4gICAgICBjb250ZW50V2luZG93OiBjb250ZW50V2luZG93XG4gICAgfTtcbiAgICB0aGlzLmhlYWRlciA9IHJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5hdHRhY2hMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGEuaGVhZGVyO1xuICB9XG5cbiAgc2V0IGhlYWRlcihoZWFkZXJFbGVtZW50KSB7XG4gICAgbGV0IG9mZnNldDtcbiAgICBpZiAodGhpcy5oZWFkZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fbWV0YS50b3BPZmZzZXQgPSB0aGlzLmhlYWRlclRvcE9mZnNldDtcbiAgICAgIHRoaXMuX3Jlc2V0SGVhZGVyKCk7XG4gICAgfVxuICAgIHRoaXMuX21ldGEuaGVhZGVyID0gaGVhZGVyRWxlbWVudDtcbiAgICB0aGlzLl9tZXRhLm9mZnNldEhlaWdodCA9IGhlYWRlckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuX2NvbmZpZ3VyZUhlYWRlcigpO1xuICAgIHRoaXMuX3NldEhlYWRlck9mZnNldEluSWZyYW1lKCk7XG4gIH1cblxuICBnZXQgaGVhZGVyVG9wT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmhlYWRlci5zdHlsZS50b3A7XG4gIH1cblxuICBfcmVzZXRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGFibGUtaGVhZGVyJyk7XG4gICAgaGVhZGVyLnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgLy8gdGhpcy5kZXRhY2hMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIF9jb25maWd1cmVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUtaGVhZGVyJyk7XG4gICAgaGVhZGVyLnN0eWxlLnRvcCA9IHRoaXMuX21ldGEudG9wT2Zmc2V0O1xuICB9XG5cbiAgX3NldEhlYWRlck9mZnNldEluSWZyYW1lKCkge1xuICAgIGNvbnN0IGlmcmFtZUJvZHkgPSB0aGlzLl9tZXRhLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGlmcmFtZUJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IHRoaXMuX21ldGEub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuICB9XG5cbiAgcmVxdWVzdFRpY2soY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX21ldGEudGlja2luZykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMuX21ldGEudGlja2luZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21ldGEuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX3Njcm9sbEZpeGVkLCBmYWxzZSk7XG4gIH1cblxuICBkZXRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbWV0YS5jb250ZW50V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5fc2Nyb2xsRml4ZWQpO1xuICB9XG5cbiAgX3Njcm9sbEZpeGVkPSgpPT57XG4gICAgdGhpcy5fbWV0YS5sYXN0U2Nyb2xsWSA9IHRoaXMuX21ldGEuY29udGVudFdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB0aGlzLnJlcXVlc3RUaWNrKHRoaXMuX3Njcm9sbENhbGxiYWNrKTtcbiAgfTtcblxuICBfc2Nyb2xsQ2FsbGJhY2s9KCk9PntcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fbWV0YS5sYXN0U2Nyb2xsWTtcbiAgICB0aGlzLmhlYWRlci5zdHlsZS50b3AgPSAtb2Zmc2V0ICsgJ3B4JztcbiAgICB0aGlzLl9tZXRhLnRpY2tpbmcgPSBmYWxzZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyU2Nyb2xsZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yMi9oZWFkZXItc2Nyb2xsZXIuanMiLCIvKipcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cbmNsYXNzIERldGFiaW5hdG9yIHtcbiAgLyoqXG4gICAqIEhlbHBzIHRvIG1haW50YWluIGEgaGVhbHRoeSB0YWJ1bGF0aW9uIHdpdGhpbiB0aGUgc2lkZWJhciB3aGVuIGl0J3Mgb3BlbiwgcmF0aGVyIHRoYW4gdGFidWxhdGUgdGhlIHdob2xlIHBhZ2VcbiAgICogVXNhZ2U6XG4gICAqXG4gICAqIGBgYCBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGRldGFiaW5hdG9yID0gbmV3IERldGFiaW5hdG9yKGVsZW1lbnQpO1xuICAgKiBkZXRhYmluYXRvci5pbmVydCA9IHRydWU7ICAvLyBTZXRzIGFsbCBmb2N1c2FibGUgY2hpbGRyZW4gb2YgZWxlbWVudCB0byB0YWJpbmRleD0tMVxuICAgKiBkZXRhYmluYXRvci5pbmVydCA9IGZhbHNlOyAvLyBSZXN0b3JlcyBhbGwgZm9jdXNhYmxlIGNoaWxkcmVuIG9mIGVsZW1lbnRcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudC4gbmV3IERldGFiaW5hdG9yIG5lZWRzIGFuIGVsZW1lbnQgcmVmZXJlbmNlJyk7XG4gICAgfVxuICAgIHRoaXMuX2luZXJ0ID0gZmFsc2U7XG4gICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSAnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4XSwgW2NvbnRlbnRlZGl0YWJsZV0nO1xuICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKTtcbiAgfVxuXG4gIGdldCBpbmVydCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5lcnQ7XG4gIH1cblxuICBzZXQgaW5lcnQoaXNJbmVydCkge1xuICAgIGlmICh0aGlzLl9pbmVydCA9PT0gaXNJbmVydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2luZXJ0ID0gaXNJbmVydDtcblxuICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnRzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoaXNJbmVydCkge1xuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaGFzIGFuIGV4cGxpY3QgdGFiaW5kZXggc2F2ZSBpdFxuICAgICAgICBpZiAoY2hpbGQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgY2hpbGQuX19zYXZlZFRhYmluZGV4ID0gY2hpbGQudGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IEFMTCBmb2N1c2FibGUgY2hpbGRyZW4gdG8gdGFiaW5kZXggLTFcbiAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSBjaGlsZCBoYXMgYSBzYXZlZCB0YWJpbmRleCwgcmVzdG9yZSBpdFxuICAgICAgICAvLyBCZWNhdXNlIHRoZSB2YWx1ZSBjb3VsZCBiZSAwLCBleHBsaWNpdGx5IGNoZWNrIHRoYXQgaXQncyBub3QgZmFsc2VcbiAgICAgICAgaWYgKGNoaWxkLl9fc2F2ZWRUYWJpbmRleCA9PT0gMCB8fCBjaGlsZC5fX3NhdmVkVGFiaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIGNoaWxkLl9fc2F2ZWRUYWJpbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIHRhYmluZGV4IGZyb20gQU5ZIFJFTUFJTklORyBjaGlsZHJlblxuICAgICAgICAgIGNoaWxkLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBEZXRhYmluYXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaWRlLW5hdi9kZXRhYmluYXRvci5qcyIsIi8qKlxuICpcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBEZXRhYmluYXRvciBmcm9tIFwiLi9kZXRhYmluYXRvclwiO1xuXG5jbGFzcyBTaWRlTmF2IHtcbiAgLyoqXG4gICAqIEEgY2xhc3MgdGhhdCBzZXRzIHVwIGEgc2lkZWJhciB0aGF0IGlzIGRpc21pc3NlZCBvbiBzY3JpbS1jbGljayBvciBvbiBzd2lwZSBhbmQgaXMgb3BlbmQgb24gaGFtYnVyZ2VyLWljb24gY2xpY2tcbiAgICogKi9cbiAgY29uc3RydWN0b3Ioe1xuICAgICAgICAgICAgICAgIHNob3dCdXR0b25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tZW51LXNob3cnKSxcbiAgICAgICAgICAgICAgICBoaWRlQnV0dG9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbWVudS1oaWRlJyksXG4gICAgICAgICAgICAgICAgc2lkZU5hdkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNpZGUtbmF2JyksXG4gICAgICAgICAgICAgICAgc2lkZU5hdkNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNpZGUtbmF2LWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgIH0gPSB7fSkge1xuICAgIHRoaXMuc2hvd0J1dHRvbkVsID0gc2hvd0J1dHRvbkVsO1xuICAgIHRoaXMuaGlkZUJ1dHRvbkVsID0gaGlkZUJ1dHRvbkVsO1xuICAgIHRoaXMuc2lkZU5hdkVsID0gc2lkZU5hdkVsO1xuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsID0gc2lkZU5hdkNvbnRhaW5lckVsO1xuICAgIC8vIENvbnRyb2wgd2hldGhlciB0aGUgY29udGFpbmVyJ3MgY2hpbGRyZW4gY2FuIGJlIGZvY3VzZWRcbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZSB0byBpbmVydCBzaW5jZSB0aGUgZHJhd2VyIGlzIG9mZnNjcmVlblxuICAgIHRoaXMuZGV0YWJpbmF0b3IgPSBuZXcgRGV0YWJpbmF0b3IodGhpcy5zaWRlTmF2Q29udGFpbmVyRWwpO1xuICAgIHRoaXMuZGV0YWJpbmF0b3IuaW5lcnQgPSB0cnVlO1xuICB9XG5cbiAgc3RhcnRYID0gMDtcbiAgY3VycmVudFggPSAwO1xuICB0b3VjaGluZ1NpZGVOYXYgPSBmYWxzZTtcbiAgc3VwcG9ydHNQYXNzaXZlID0gbnVsbDtcblxuICAvLyBhcHBseSBwYXNzaXZlIGV2ZW50IGxpc3RlbmluZyBpZiBpdCdzIHN1cHBvcnRlZFxuICBhcHBseVBhc3NpdmUoKSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydHNQYXNzaXZlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1cHBvcnRzUGFzc2l2ZSA/IHtwYXNzaXZlOiB0cnVlfSA6IGZhbHNlO1xuICAgIH1cbiAgICAvLyBmZWF0dXJlIGRldGVjdFxuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge1xuICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gICAgdGhpcy5zdXBwb3J0c1Bhc3NpdmUgPSBpc1N1cHBvcnRlZDtcbiAgICByZXR1cm4gdGhpcy5hcHBseVBhc3NpdmUoKTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuc2hvd0J1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93U2lkZU5hdik7XG4gICAgdGhpcy5oaWRlQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVTaWRlTmF2KTtcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZVNpZGVOYXYpO1xuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ibG9ja0NsaWNrcyk7XG5cbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMuYXBwbHlQYXNzaXZlKCkpO1xuICAgIHRoaXMuc2lkZU5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMuYXBwbHlQYXNzaXZlKCkpO1xuICAgIHRoaXMuc2lkZU5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuc2hvd0J1dHRvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93U2lkZU5hdik7XG4gICAgdGhpcy5oaWRlQnV0dG9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVTaWRlTmF2KTtcbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZVNpZGVOYXYpO1xuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ibG9ja0NsaWNrcyk7XG5cbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgIHRoaXMuc2lkZU5hdkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgIHRoaXMuc2lkZU5hdkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kKTtcbiAgfVxuXG4gIG9uVG91Y2hTdGFydCA9IChldnQpID0+IHtcbiAgICBpZiAoIXRoaXMuc2lkZU5hdkVsLmNsYXNzTGlzdC5jb250YWlucygnc2lkZS1uYXYtLXZpc2libGUnKSlcbiAgICAgIHJldHVybjtcbiAgICAvL1RPRE86c3VwcG9ydCBzaWRlYmFyIHNjcm9sbGluZyBhcyB3ZWxsXG4gICAgdGhpcy5zdGFydFggPSBldnQudG91Y2hlc1swXS5wYWdlWDtcbiAgICB0aGlzLmN1cnJlbnRYID0gdGhpcy5zdGFydFg7XG5cbiAgICB0aGlzLnRvdWNoaW5nU2lkZU5hdiA9IHRydWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICBvblRvdWNoTW92ZSA9IChldnQpID0+IHtcbiAgICBpZiAoIXRoaXMudG91Y2hpbmdTaWRlTmF2KSByZXR1cm47XG5cbiAgICB0aGlzLmN1cnJlbnRYID0gZXZ0LnRvdWNoZXNbMF0ucGFnZVg7XG4gIH07XG5cbiAgb25Ub3VjaEVuZCA9IChldnQpID0+IHtcbiAgICBpZiAoIXRoaXMudG91Y2hpbmdTaWRlTmF2KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy50b3VjaGluZ1NpZGVOYXYgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZVggPSBNYXRoLm1pbigwLCB0aGlzLmN1cnJlbnRYIC0gdGhpcy5zdGFydFgpO1xuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgaWYgKHRyYW5zbGF0ZVggPCAwKSB7XG4gICAgICB0aGlzLmhpZGVTaWRlTmF2KCk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudG91Y2hpbmdTaWRlTmF2KVxuICAgICAgcmV0dXJuO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZVggPSBNYXRoLm1pbigwLCB0aGlzLmN1cnJlbnRYIC0gdGhpcy5zdGFydFgpO1xuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgO1xuICB9O1xuXG4gIGJsb2NrQ2xpY2tzID0gKGV2dCkgPT4ge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBvblRyYW5zaXRpb25FbmQgPSAoZXZ0KSA9PiB7XG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS1uYXYtLWFuaW1hdGFibGUnKTtcbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmQpO1xuICB9O1xuXG4gIHNob3dTaWRlTmF2ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LmFkZCgnc2lkZS1uYXYtLWFuaW1hdGFibGUnKTtcbiAgICB0aGlzLnNpZGVOYXZFbC5jbGFzc0xpc3QuYWRkKCdzaWRlLW5hdi0tdmlzaWJsZScpO1xuICAgIHRoaXMuZGV0YWJpbmF0b3IuaW5lcnQgPSBmYWxzZTtcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmQpO1xuICB9O1xuXG4gIGhpZGVTaWRlTmF2ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgIHRoaXMuc2lkZU5hdkVsLmNsYXNzTGlzdC5hZGQoJ3NpZGUtbmF2LS1hbmltYXRhYmxlJyk7XG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS1uYXYtLXZpc2libGUnKTtcbiAgICB0aGlzLmRldGFiaW5hdG9yLmluZXJ0ID0gdHJ1ZTtcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXZcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NpZGUtbmF2L3NpZGUtbmF2LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMy4xMi4yMDE2LlxyXG4gKi9cclxuLyoqXHJcbiAqIGBNZWRpYVF1ZXJ5YCBoZWxwcyBwZXJmb3JtIGFjdGlvbnMgd2hlbiBDU1MgcXVlcnkgaXMgbWF0Y2hlZCBpbnN0ZWFkIG9mIHBvbGxpbmcgdGhlIHdpbmRvdyB3aWR0aCwgd2hlbiBpdCdzIG5vdCBzbyBpbXBvcnRhbnQgdG8gZ2V0IGV4YWN0IHdpZHRoLCBvbmx5IGNoZWNraW5nIG1hdGNoaW5nIHRoZSBxdWVyeS5cclxuICpcclxuICogYGBgIGphdmFzY3JpcHRcclxuICogZnVuY3Rpb24gb25NYXRjaChtYXRjaGVzKXtcclxuICogIGlmKG1hdGNoZXMpe1xyXG4gKiAgICAvLyBkbyB3aGF0IHlvdSBuZWVkIHdoZW4gdGhlIG1lZGlhcXVlcnkgaXMgbWF0Y2hlZFxyXG4gKiAgfSBlbHNlIHtcclxuICogICAgIC8vIGRvIHdoYXQgeW91IG5lZWQgd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgbm90IG1hdGNoZWRcclxuICogIH1cclxuICogfVxyXG4gKlxyXG4gKiAgdmFyIG1xID0gbmV3IE1lZGlhUXVlcnkoe3F1ZXJ5OlwibWF4LXdpZHRoOjc2MHB4XCJ9LG9uTWF0Y2gsdGhpcyk7XHJcbiAqXHJcbiAqICAvL2F0IGFueSB0aW1lIHlvdSBtYXkgY2hlY2sgd2hldGhlciBpdCBtYXRjaGVzIHRoZSBxdWVyeTpcclxuICpcclxuICogIG1xLm1hdGNoZXMgLy90cnVlIG9yIGZhbHNlXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5xdWVyeSAtIFRoZSBDU1MgbWVkaWEgcXVlcnkgdG8gZXZhbHVhdGUuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZnVsbD1mYWxzZV0gLSBJZiB0cnVlLCB0aGUgcXVlcnkgYXR0cmlidXRlIGlzIGFzc3VtZWQgdG8gYmUgYSBjb21wbGV0ZSBtZWRpYSBxdWVyeSBzdHJpbmcgcmF0aGVyIHRoYW4gYSBzaW5nbGUgbWVkaWEgZmVhdHVyZS5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gbWF0Y2hpbmcgaXMgZXZhbHVhdGVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBbY29udGV4dD10aGlzXSAtIGNvbnRleHQgaW4gd2hpY2ggdGhlIGBjYWxsYmFja2AgZnVuY3Rpb24gbmVlZHMgdG8gYmUgZXhlY3V0ZWRcclxuICpcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBtYXRjaGVzIC0gd2hldGhlciB0aGUgcXVlcnkgbWF0Y2hlcyB0aGUgd2luZG93IHdpZHRoLiBSZWFkb25seS5cclxuICogQHByb3BlcnR5IHtCb29sZWFufSBmdWxsIC0gSWYgdHJ1ZSwgdGhlIHF1ZXJ5IGF0dHJpYnV0ZSBpcyBhc3N1bWVkIHRvIGJlIGEgY29tcGxldGUgbWVkaWEgcXVlcnkgc3RyaW5nIHJhdGhlciB0aGFuIGEgc2luZ2xlIG1lZGlhIGZlYXR1cmUuXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBxdWVyeSAtIFRoZSBDU1MgbWVkaWEgcXVlcnkgdG8gZXZhbHVhdGUuXHJcbiAqICovXHJcbmNsYXNzIE1lZGlhUXVlcnl7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucyxjYWxsYmFjayxjb250ZXh0PXRoaXMpe1xyXG4gICAgbGV0IHtxdWVyeSxmdWxsPWZhbHNlfSA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLl9tYXRjaGVzID0gZmFsc2U7XHJcbiAgICB0aGlzLmZ1bGwgPSBmdWxsO1xyXG4gICAgdGhpcy5fbXEgPSBudWxsO1xyXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5fYm91bmQgPSB0aGlzLl9vbk1hdGNoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnF1ZXJ5PXF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgX29uTWF0Y2gobXEpe1xyXG4gICAgdGhpcy5fbWF0Y2hlcyA9IG1xLm1hdGNoZXM7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2suY2FsbCh0aGlzLl9jb250ZXh0LG1xLm1hdGNoZXMpXHJcbiAgfVxyXG5cclxuICBnZXQgbWF0Y2hlcygpe1xyXG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgcXVlcnkoKXtcclxuICAgIHJldHVybiB0aGlzLl9xdWVyeTtcclxuICB9XHJcblxyXG4gIHNldCBxdWVyeSh2YWwpe1xyXG4gICAgdGhpcy5fcXVlcnkgPSB2YWw7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLnJlbW92ZSh0aGlzLl9tcSx0aGlzLl9ib3VuZCk7XHJcbiAgICBsZXQgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xyXG4gICAgaWYgKCFxdWVyeSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuZnVsbCAmJiBxdWVyeVswXSAhPT0gJygnKSB7XHJcbiAgICAgIHF1ZXJ5ID0gJygnICsgcXVlcnkgKyAnKSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tcSA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcclxuICAgIHRoaXMuX29uTWF0Y2godGhpcy5fbXEpO1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5hZGQodGhpcy5fbXEsdGhpcy5fYm91bmQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZChtcSxib3VuZCl7XHJcbiAgICBpZiAobXEpIHtcclxuICAgICAgbXEuYWRkTGlzdGVuZXIoYm91bmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZShtcSxib3VuZCkge1xyXG4gICAgaWYgKG1xKSB7XHJcbiAgICAgIG1xLnJlbW92ZUxpc3RlbmVyKGJvdW5kKTtcclxuICAgIH1cclxuICAgIG1xID0gbnVsbDtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWVkaWFRdWVyeVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWVkaWEtcXVlcnkvc3JjL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==