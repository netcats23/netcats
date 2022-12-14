/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_scroll_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/scroll-width */ \"./js/utils/scroll-width.js\");\n/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ios-vh-fix */ \"./js/utils/ios-vh-fix.js\");\n/* harmony import */ var _modules_shadow_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shadow-show */ \"./js/modules/shadow-show.js\");\n/* harmony import */ var _modules_powers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/powers */ \"./js/modules/powers.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_circle_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/circle-content */ \"./js/modules/circle-content.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/burger */ \"./js/modules/burger.js\");\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  Object(_utils_scroll_width__WEBPACK_IMPORTED_MODULE_0__[\"setScrollWidth\"])();\n  Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__[\"iosVhFix\"])();\n});\n\n// в load следует добавить скрипты, не участвующие в работе первого экрана\nwindow.addEventListener('load', () => {\n  Object(_modules_shadow_show__WEBPACK_IMPORTED_MODULE_2__[\"shadowShow\"])();\n  Object(_modules_powers__WEBPACK_IMPORTED_MODULE_3__[\"powers\"])();\n  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"slider\"])();\n  Object(_modules_circle_content__WEBPACK_IMPORTED_MODULE_5__[\"circleContent\"])();\n  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_6__[\"burger\"])();\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/*! exports provided: burger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"burger\", function() { return burger; });\nfunction burger() {\n  const toggle = document.querySelector('.third-button');\n  const icon = document.querySelector('.animated-icon');\n  const nav = document.querySelector('.header__nav');\n  toggle.addEventListener('click', () => {\n    icon.classList.toggle('open');\n    nav.classList.toggle('open');\n  });\n}\n\n\n//# sourceURL=webpack:///./js/modules/burger.js?");

/***/ }),

/***/ "./js/modules/circle-content.js":
/*!**************************************!*\
  !*** ./js/modules/circle-content.js ***!
  \**************************************/
/*! exports provided: circleContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"circleContent\", function() { return circleContent; });\nfunction circleContent() {\n  const header = document.querySelector('.description__circles-header');\n  const subheader = document.querySelector('.description__circles-subheader');\n  const contentLoad = () => {\n    setTimeout(() => {\n      header.textContent = \"2+\";\n      subheader.textContent = \"years of expirience\";\n    }, 0);\n    setTimeout(() => {\n      header.textContent = \"30+\";\n      subheader.textContent = \"successfully completed projects\";\n    }, 5000);\n    setTimeout(() => {\n      header.textContent = \"94%\";\n      subheader.textContent = \"of my clients recommend me\";\n    }, 10000);\n  };\n  contentLoad();\n  setInterval(contentLoad, 15000);\n}\n\n\n//# sourceURL=webpack:///./js/modules/circle-content.js?");

/***/ }),

/***/ "./js/modules/powers.js":
/*!******************************!*\
  !*** ./js/modules/powers.js ***!
  \******************************/
/*! exports provided: powers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"powers\", function() { return powers; });\nfunction powers() {\n  const items = document.querySelectorAll('.powers__item'),\n    bg = document.querySelectorAll('.powers__bg'),\n    headers = document.querySelectorAll('.powers__header');\n  items.forEach(item => {\n    item.addEventListener('mouseover', () => {\n      item.classList.add('active');\n      headers.forEach(header => {\n        header.style.color = '#ffffff';\n      });\n      bg.forEach(item => {\n        item.style.opacity = '0';\n      });\n      if (item.contains(document.getElementById('1'))) {\n        document.querySelector('.pic1').style.visibility = \"visible\";\n        document.querySelector('.pic1').classList.add('active');\n      }\n      if (item.contains(document.getElementById('2'))) {\n        document.querySelector('.pic2').style.visibility = \"visible\";\n        document.querySelector('.pic2').classList.add('active');\n      }\n      if (item.contains(document.getElementById('3'))) {\n        document.querySelector('.pic3').style.visibility = \"visible\";\n        document.querySelector('.pic3').classList.add('active');\n      }\n      if (item.contains(document.getElementById('4'))) {\n        document.querySelector('.pic4').style.visibility = \"visible\";\n        document.querySelector('.pic4').classList.add('active');\n      }\n      if (item.contains(document.getElementById('5'))) {\n        document.querySelector('.pic5').style.visibility = \"visible\";\n        document.querySelector('.pic5').classList.add('active');\n      }\n      if (item.contains(document.getElementById('6'))) {\n        document.querySelector('.pic6').style.visibility = \"visible\";\n        document.querySelector('.pic6').classList.add('active');\n      }\n      if (item.contains(document.getElementById('7'))) {\n        document.querySelector('.pic7').style.visibility = \"visible\";\n        document.querySelector('.pic7').classList.add('active');\n      }\n      if (item.contains(document.getElementById('8'))) {\n        document.querySelector('.pic8').style.visibility = \"visible\";\n        document.querySelector('.pic8').classList.add('active');\n      }\n    });\n    item.addEventListener('mouseout', () => {\n      item.classList.remove('active');\n      bg.forEach(item => {\n        item.style.opacity = '1';\n      });\n      if (item.contains(document.getElementById('1'))) {\n        document.querySelector('.pic1').style.visibility = \"hidden\";\n        document.querySelector('.pic1').classList.remove('active');\n      }\n      if (item.contains(document.getElementById('2'))) {\n        document.querySelector('.pic2').style.visibility = \"hidden\";\n        document.querySelector('.pic2').classList.remove('active');\n      }\n      if (item.contains(document.getElementById('3'))) {\n        document.querySelector('.pic3').style.visibility = \"hidden\";\n        document.querySelector('.pic3').classList.remove('active');\n      }\n      if (item.contains(document.getElementById('4'))) {\n        document.querySelector('.pic4').style.visibility = \"hidden\";\n        document.querySelector('.pic4').classList.remove('active');\n      }\n      if (item.contains(document.getElementById('5'))) {\n        document.querySelector('.pic5').style.visibility = \"hidden\";\n        document.querySelector('.pic5').classList.remove('active');\n      }\n      if (item.contains(document.getElementById('6'))) {\n        document.querySelector('.pic6').style.visibility = \"hidden\";\n        document.querySelector('.pic6').classList.remove('active');\n      }\n      if (item.contains(document.getElementById('7'))) {\n        document.querySelector('.pic7').style.visibility = \"hidden\";\n        document.querySelector('.pic7').classList.remove('active');\n      }\n      if (item.contains(document.getElementById('8'))) {\n        document.querySelector('.pic8').style.visibility = \"hidden\";\n        document.querySelector('.pic8').classList.remove('active');\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack:///./js/modules/powers.js?");

/***/ }),

/***/ "./js/modules/shadow-show.js":
/*!***********************************!*\
  !*** ./js/modules/shadow-show.js ***!
  \***********************************/
/*! exports provided: shadowShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shadowShow\", function() { return shadowShow; });\nfunction shadowShow() {\n  function onEntry(entry) {\n    entry.forEach(change => {\n      if (change.isIntersecting) {\n        change.target.classList.add('show');\n      }\n    });\n  }\n  function onExit(item) {\n    let options = {\n      threshold: [0.5]\n    };\n    let observer = new IntersectionObserver(onEntry, options);\n    let element = document.querySelector(item);\n    observer.observe(element);\n  }\n  onExit('.tagline__header');\n  setTimeout(onExit, 700, '.tagline__subheader');\n  setTimeout(onExit, 900, '.tagline__circle');\n  setTimeout(onExit, 1100, '.tagline__img');\n}\n\n\n//# sourceURL=webpack:///./js/modules/shadow-show.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\nfunction slider() {\n  var swiper = new Swiper('.swiper-container', {\n    effect: 'coverflow',\n    grabCursor: true,\n    centeredSlides: true,\n    loop: true,\n    speed: 800,\n    slidesPerView: '2',\n    coverflowEffect: {\n      rotate: 50,\n      stretch: 0,\n      depth: 100,\n      modifier: 1,\n      slideShadows: false\n    },\n    // If we need pagination\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    },\n    // Navigation arrows\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    },\n    // And if we need scrollbar\n    scrollbar: {\n      el: '.swiper-scrollbar'\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./js/modules/slider.js?");

/***/ }),

/***/ "./js/utils/ios-checker.js":
/*!*********************************!*\
  !*** ./js/utils/ios-checker.js ***!
  \*********************************/
/*! exports provided: iosChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iosChecker\", function() { return iosChecker; });\nconst iosChecker = () => {\n  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform)\n  // iPad on iOS 13 detection\n  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;\n};\n\n//# sourceURL=webpack:///./js/utils/ios-checker.js?");

/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iosVhFix\", function() { return iosVhFix; });\n/* harmony import */ var _ios_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker */ \"./js/utils/ios-checker.js\");\n\nconst iosVhFix = () => {\n  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {\n    if (Object(_ios_checker__WEBPACK_IMPORTED_MODULE_0__[\"iosChecker\"])()) {\n      let vh = window.innerHeight * 0.01;\n      document.documentElement.style.setProperty('--vh', `${vh}px`);\n      window.addEventListener('resize', function () {\n        vh = window.innerHeight * 0.01;\n        document.documentElement.style.setProperty('--vh', `${vh}px`);\n      });\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./js/utils/ios-vh-fix.js?");

/***/ }),

/***/ "./js/utils/scroll-width.js":
/*!**********************************!*\
  !*** ./js/utils/scroll-width.js ***!
  \**********************************/
/*! exports provided: setScrollWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScrollWidth\", function() { return setScrollWidth; });\nconst setScrollWidth = () => {\n  return document.documentElement.style.setProperty('--scroll-width', `${getScrollbarWidth()}px`);\n};\nfunction getScrollbarWidth() {\n  const outer = document.createElement(\"div\");\n  outer.style.visibility = \"hidden\";\n  outer.style.width = \"100px\";\n  outer.style.msOverflowStyle = \"scrollbar\"; // needed for WinJS apps\n\n  document.body.appendChild(outer);\n  const widthNoScroll = outer.offsetWidth;\n  outer.style.overflow = \"scroll\";\n\n  // add innerdiv\n  const inner = document.createElement(\"div\");\n  inner.style.width = \"100%\";\n  outer.appendChild(inner);\n  const widthWithScroll = inner.offsetWidth;\n\n  // remove divs\n  outer.parentNode.removeChild(outer);\n  return widthNoScroll - widthWithScroll;\n}\n\n\n//# sourceURL=webpack:///./js/utils/scroll-width.js?");

/***/ })

/******/ });