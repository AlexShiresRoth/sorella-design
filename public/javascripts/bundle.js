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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Navigation */ \"./src/js/views/Navigation.js\");\n\n\n\nconst loadJS = () => {\n    \n    //initialize navmenu toggle\n    Object(_views_Navigation__WEBPACK_IMPORTED_MODULE_0__[\"toggleNav\"])();\n};\n\n//wait for media and DOM to be ready\nif(document.readyState == 'loading'){\n    document.addEventListener(\"DOMContentLoaded\", loadJS);\n}\nelse {\n    loadJS();\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Selectors.js":
/*!************************************!*\
  !*** ./src/js/models/Selectors.js ***!
  \************************************/
/*! exports provided: Selectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Selectors\", function() { return Selectors; });\n\nconst Selectors = {\n    nav: document.querySelector('nav')\n};\n\n//# sourceURL=webpack:///./src/js/models/Selectors.js?");

/***/ }),

/***/ "./src/js/views/Navigation.js":
/*!************************************!*\
  !*** ./src/js/views/Navigation.js ***!
  \************************************/
/*! exports provided: toggleNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleNav\", function() { return toggleNav; });\n/* harmony import */ var _models_Selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Selectors */ \"./src/js/models/Selectors.js\");\n\n\n//toggling the nav menu\n\nconst toggleNav = () => {\n    if(!document.querySelector('.menu')){\n        _models_Selectors__WEBPACK_IMPORTED_MODULE_0__[\"Selectors\"].nav.addEventListener('mouseenter', () => {\n            console.log(`You hovered the ${_models_Selectors__WEBPACK_IMPORTED_MODULE_0__[\"Selectors\"].nav}`);\n            setTimeout(() => {\n                addMenu();    \n            },150);\n        });\n    }\n    else if(document.queryselector('.menu')){\n        console.log(true);\n        _models_Selectors__WEBPACK_IMPORTED_MODULE_0__[\"Selectors\"].nav.addEventListener('mouseleave', () => {\n            document.querySelector('.menu').style.background = 'red';\n        });\n    }\n    \n};\n\nconst addMenu = () => {\n    \n        let menu = `\n               <div class=\"menu\">\n                  <a><p>About</p></a>\n                  <a><p>Gallery</p></a>\n                  <a><p>Contact</p></a>\n                <div>`;\n        \n                \n        _models_Selectors__WEBPACK_IMPORTED_MODULE_0__[\"Selectors\"].nav.insertAdjacentHTML(\"afterbegin\", menu);        \n};\n\n//# sourceURL=webpack:///./src/js/views/Navigation.js?");

/***/ })

/******/ });