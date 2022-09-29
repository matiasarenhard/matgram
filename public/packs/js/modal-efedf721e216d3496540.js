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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/modal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/modal.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/modal.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tingle.js */ "./node_modules/tingle.js/dist/tingle.min.js");
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tingle_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tingle_js_src_tingle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tingle.js/src/tingle.css */ "./node_modules/tingle.js/src/tingle.css");
/* harmony import */ var tingle_js_src_tingle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tingle_js_src_tingle_css__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll("[data-modal-id]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var modal = new tingle_js__WEBPACK_IMPORTED_MODULE_0___default.a.modal({
        closeMethods: ['overlay', 'escape'],
        cssClass: ['instagram-modal']
      });
      var modalContent = document.querySelector("#".concat(button.dataset.modalId)).innerHTML;
      modal.setContent(modalContent);
      modal.open();
    });
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/tingle.js/src/tingle.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/tingle.js/src/tingle.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".tingle-modal * {\n  box-sizing: border-box;\n}\n\n.tingle-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  display: flex;\n  visibility: hidden;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  background: rgba(0, 0, 0, .9);\n  opacity: 0;\n  cursor: url(\"data:image/svg+xml,%3Csvg width='19' height='19' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.514.535l-6.42 6.42L2.677.536a1.517 1.517 0 00-2.14 0 1.517 1.517 0 000 2.14l6.42 6.419-6.42 6.419a1.517 1.517 0 000 2.14 1.517 1.517 0 002.14 0l6.419-6.42 6.419 6.42a1.517 1.517 0 002.14 0 1.517 1.517 0 000-2.14l-6.42-6.42 6.42-6.418a1.517 1.517 0 000-2.14 1.516 1.516 0 00-2.14 0z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\"), auto;\n}\n\n@supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {\n  .tingle-modal {\n    -webkit-backdrop-filter: blur(12px);\n            backdrop-filter: blur(12px);\n  }\n}\n\n/* confirm and alerts\n-------------------------------------------------------------- */\n\n.tingle-modal--confirm .tingle-modal-box {\n  text-align: center;\n}\n\n/* modal\n-------------------------------------------------------------- */\n\n.tingle-modal--noOverlayClose {\n  cursor: default;\n}\n\n.tingle-modal--noClose .tingle-modal__close {\n  display: none;\n}\n\n.tingle-modal__close {\n  position: fixed;\n  top: 2.5rem;\n  right: 2.5rem;\n  z-index: 1000;\n  padding: 0;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background-color: transparent;\n  color: #fff;\n  cursor: pointer;\n}\n\n.tingle-modal__close svg * {\n  fill: currentColor;\n}\n\n.tingle-modal__closeLabel {\n  display: none;\n}\n\n.tingle-modal__close:hover {\n  color: #fff;\n}\n\n.tingle-modal-box {\n  position: relative;\n  flex-shrink: 0;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 60%;\n  border-radius: 4px;\n  background: #fff;\n  opacity: 1;\n  cursor: auto;\n  will-change: transform, opacity;\n}\n\n.tingle-modal-box__content {\n  padding: 3rem 3rem;\n}\n\n.tingle-modal-box__footer {\n  padding: 1.5rem 2rem;\n  width: auto;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #f5f5f5;\n  cursor: auto;\n}\n\n.tingle-modal-box__footer::after {\n  display: table;\n  clear: both;\n  content: \"\";\n}\n\n.tingle-modal-box__footer--sticky {\n  position: fixed;\n  bottom: -200px; /* TODO : find a better way */\n  z-index: 10001;\n  opacity: 1;\n  transition: bottom .3s ease-in-out .3s;\n}\n\n/* state\n-------------------------------------------------------------- */\n\n.tingle-enabled {\n  position: fixed;\n  right: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.tingle-modal--visible .tingle-modal-box__footer {\n  bottom: 0;\n}\n\n.tingle-modal--visible {\n  visibility: visible;\n  opacity: 1;\n}\n\n.tingle-modal--visible .tingle-modal-box {\n  animation: scale .2s cubic-bezier(.68, -.55, .265, 1.55) forwards;\n}\n\n.tingle-modal--overflow {\n  overflow-y: scroll;\n  padding-top: 8vh;\n}\n\n/* btn\n-------------------------------------------------------------- */\n\n.tingle-btn {\n  display: inline-block;\n  margin: 0 .5rem;\n  padding: 1rem 2rem;\n  border: none;\n  background-color: grey;\n  box-shadow: none;\n  color: #fff;\n  vertical-align: middle;\n  text-decoration: none;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: normal;\n  cursor: pointer;\n  transition: background-color .4s ease;\n}\n\n.tingle-btn--primary {\n  background-color: #3498db;\n}\n\n.tingle-btn--danger {\n  background-color: #e74c3c;\n}\n\n.tingle-btn--default {\n  background-color: #34495e;\n}\n\n.tingle-btn--pull-left {\n  float: left;\n}\n\n.tingle-btn--pull-right {\n  float: right;\n}\n\n/* responsive\n-------------------------------------------------------------- */\n\n@media (max-width : 540px) {\n  .tingle-modal {\n    top: 0px;\n    display: block;\n    padding-top: 60px;\n    width: 100%;\n  }\n\n  .tingle-modal-box {\n    width: auto;\n    border-radius: 0;\n  }\n\n  .tingle-modal-box__content {\n    overflow-y: scroll;\n  }\n\n  .tingle-modal--noClose {\n    top: 0;\n  }\n\n  .tingle-modal--noOverlayClose {\n    padding-top: 0;\n  }\n\n  .tingle-modal-box__footer .tingle-btn {\n    display: block;\n    float: none;\n    margin-bottom: 1rem;\n    width: 100%;\n  }\n\n  .tingle-modal__close {\n    top: 0;\n    right: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 60px;\n    border: none;\n    background-color: #2c3e50;\n    box-shadow: none;\n    color: #fff;\n  }\n\n  .tingle-modal__closeLabel {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 1.6rem;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  }\n\n  .tingle-modal__closeIcon {\n    display: inline-block;\n    margin-right: .8rem;\n    width: 1.6rem;\n    vertical-align: middle;\n    font-size: 0;\n  }\n}\n\n/* animations\n-------------------------------------------------------------- */\n\n@keyframes scale {\n  0% {\n    opacity: 0;\n    transform: scale(.9);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n", "",{"version":3,"sources":["tingle.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;EACjC,6BAA6B;EAC7B,UAAU;EACV,ocAAoc;AACtc;;AAEA;EACE;IACE,mCAA2B;YAA3B,2BAA2B;EAC7B;AACF;;AAEA;gEACgE;;AAEhE;EACE,kBAAkB;AACpB;;AAEA;gEACgE;;AAEhE;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,aAAa;EACb,UAAU;EACV,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,6BAA6B;EAC7B,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,+BAA+B;EAC/B,8BAA8B;EAC9B,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,WAAW;EACX,WAAW;AACb;;AAEA;EACE,eAAe;EACf,cAAc,EAAE,6BAA6B;EAC7C,cAAc;EACd,UAAU;EACV,sCAAsC;AACxC;;AAEA;gEACgE;;AAEhE;EACE,eAAe;EACf,QAAQ;EACR,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,iEAAiE;AACnE;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;gEACgE;;AAEhE;EACE,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;EACf,qCAAqC;AACvC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;gEACgE;;AAEhE;EACE;IACE,QAAQ;IACR,cAAc;IACd,iBAAiB;IACjB,WAAW;EACb;;EAEA;IACE,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,MAAM;EACR;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,WAAW;EACb;;EAEA;IACE,MAAM;IACN,QAAQ;IACR,OAAO;IACP,cAAc;IACd,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,qBAAqB;IACrB,sBAAsB;IACtB,iBAAiB;IACjB,8JAA8J;EAChK;;EAEA;IACE,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,YAAY;EACd;AACF;;AAEA;gEACgE;;AAEhE;EACE;IACE,UAAU;IACV,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF","file":"tingle.css","sourcesContent":[".tingle-modal * {\n  box-sizing: border-box;\n}\n\n.tingle-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  display: flex;\n  visibility: hidden;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  background: rgba(0, 0, 0, .9);\n  opacity: 0;\n  cursor: url(\"data:image/svg+xml,%3Csvg width='19' height='19' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.514.535l-6.42 6.42L2.677.536a1.517 1.517 0 00-2.14 0 1.517 1.517 0 000 2.14l6.42 6.419-6.42 6.419a1.517 1.517 0 000 2.14 1.517 1.517 0 002.14 0l6.419-6.42 6.419 6.42a1.517 1.517 0 002.14 0 1.517 1.517 0 000-2.14l-6.42-6.42 6.42-6.418a1.517 1.517 0 000-2.14 1.516 1.516 0 00-2.14 0z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E\"), auto;\n}\n\n@supports (backdrop-filter: blur(12px)) {\n  .tingle-modal {\n    backdrop-filter: blur(12px);\n  }\n}\n\n/* confirm and alerts\n-------------------------------------------------------------- */\n\n.tingle-modal--confirm .tingle-modal-box {\n  text-align: center;\n}\n\n/* modal\n-------------------------------------------------------------- */\n\n.tingle-modal--noOverlayClose {\n  cursor: default;\n}\n\n.tingle-modal--noClose .tingle-modal__close {\n  display: none;\n}\n\n.tingle-modal__close {\n  position: fixed;\n  top: 2.5rem;\n  right: 2.5rem;\n  z-index: 1000;\n  padding: 0;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background-color: transparent;\n  color: #fff;\n  cursor: pointer;\n}\n\n.tingle-modal__close svg * {\n  fill: currentColor;\n}\n\n.tingle-modal__closeLabel {\n  display: none;\n}\n\n.tingle-modal__close:hover {\n  color: #fff;\n}\n\n.tingle-modal-box {\n  position: relative;\n  flex-shrink: 0;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 60%;\n  border-radius: 4px;\n  background: #fff;\n  opacity: 1;\n  cursor: auto;\n  will-change: transform, opacity;\n}\n\n.tingle-modal-box__content {\n  padding: 3rem 3rem;\n}\n\n.tingle-modal-box__footer {\n  padding: 1.5rem 2rem;\n  width: auto;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #f5f5f5;\n  cursor: auto;\n}\n\n.tingle-modal-box__footer::after {\n  display: table;\n  clear: both;\n  content: \"\";\n}\n\n.tingle-modal-box__footer--sticky {\n  position: fixed;\n  bottom: -200px; /* TODO : find a better way */\n  z-index: 10001;\n  opacity: 1;\n  transition: bottom .3s ease-in-out .3s;\n}\n\n/* state\n-------------------------------------------------------------- */\n\n.tingle-enabled {\n  position: fixed;\n  right: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.tingle-modal--visible .tingle-modal-box__footer {\n  bottom: 0;\n}\n\n.tingle-modal--visible {\n  visibility: visible;\n  opacity: 1;\n}\n\n.tingle-modal--visible .tingle-modal-box {\n  animation: scale .2s cubic-bezier(.68, -.55, .265, 1.55) forwards;\n}\n\n.tingle-modal--overflow {\n  overflow-y: scroll;\n  padding-top: 8vh;\n}\n\n/* btn\n-------------------------------------------------------------- */\n\n.tingle-btn {\n  display: inline-block;\n  margin: 0 .5rem;\n  padding: 1rem 2rem;\n  border: none;\n  background-color: grey;\n  box-shadow: none;\n  color: #fff;\n  vertical-align: middle;\n  text-decoration: none;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: normal;\n  cursor: pointer;\n  transition: background-color .4s ease;\n}\n\n.tingle-btn--primary {\n  background-color: #3498db;\n}\n\n.tingle-btn--danger {\n  background-color: #e74c3c;\n}\n\n.tingle-btn--default {\n  background-color: #34495e;\n}\n\n.tingle-btn--pull-left {\n  float: left;\n}\n\n.tingle-btn--pull-right {\n  float: right;\n}\n\n/* responsive\n-------------------------------------------------------------- */\n\n@media (max-width : 540px) {\n  .tingle-modal {\n    top: 0px;\n    display: block;\n    padding-top: 60px;\n    width: 100%;\n  }\n\n  .tingle-modal-box {\n    width: auto;\n    border-radius: 0;\n  }\n\n  .tingle-modal-box__content {\n    overflow-y: scroll;\n  }\n\n  .tingle-modal--noClose {\n    top: 0;\n  }\n\n  .tingle-modal--noOverlayClose {\n    padding-top: 0;\n  }\n\n  .tingle-modal-box__footer .tingle-btn {\n    display: block;\n    float: none;\n    margin-bottom: 1rem;\n    width: 100%;\n  }\n\n  .tingle-modal__close {\n    top: 0;\n    right: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 60px;\n    border: none;\n    background-color: #2c3e50;\n    box-shadow: none;\n    color: #fff;\n  }\n\n  .tingle-modal__closeLabel {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 1.6rem;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  }\n\n  .tingle-modal__closeIcon {\n    display: inline-block;\n    margin-right: .8rem;\n    width: 1.6rem;\n    vertical-align: middle;\n    font-size: 0;\n  }\n}\n\n/* animations\n-------------------------------------------------------------- */\n\n@keyframes scale {\n  0% {\n    opacity: 0;\n    transform: scale(.9);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/tingle.js/dist/tingle.min.js":
/*!***************************************************!*\
  !*** ./node_modules/tingle.js/dist/tingle.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function (t, o) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  var o = !1;

  function t(t) {
    this.opts = function () {
      for (var t = 1; t < arguments.length; t++) for (var o in arguments[t]) arguments[t].hasOwnProperty(o) && (arguments[0][o] = arguments[t][o]);

      return arguments[0];
    }({}, {
      onClose: null,
      onOpen: null,
      beforeOpen: null,
      beforeClose: null,
      stickyFooter: !1,
      footer: !1,
      cssClass: [],
      closeLabel: "Close",
      closeMethods: ["overlay", "button", "escape"]
    }, t), this.init();
  }

  function e() {
    this.modalBoxFooter && (this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px", this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px");
  }

  return t.prototype.init = function () {
    if (!this.modal) return function () {
      this.modal = document.createElement("div"), this.modal.classList.add("tingle-modal"), 0 !== this.opts.closeMethods.length && -1 !== this.opts.closeMethods.indexOf("overlay") || this.modal.classList.add("tingle-modal--noOverlayClose");
      this.modal.style.display = "none", this.opts.cssClass.forEach(function (t) {
        "string" == typeof t && this.modal.classList.add(t);
      }, this), -1 !== this.opts.closeMethods.indexOf("button") && (this.modalCloseBtn = document.createElement("button"), this.modalCloseBtn.type = "button", this.modalCloseBtn.classList.add("tingle-modal__close"), this.modalCloseBtnIcon = document.createElement("span"), this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"), this.modalCloseBtnIcon.innerHTML = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>', this.modalCloseBtnLabel = document.createElement("span"), this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"), this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel, this.modalCloseBtn.appendChild(this.modalCloseBtnIcon), this.modalCloseBtn.appendChild(this.modalCloseBtnLabel));
      this.modalBox = document.createElement("div"), this.modalBox.classList.add("tingle-modal-box"), this.modalBoxContent = document.createElement("div"), this.modalBoxContent.classList.add("tingle-modal-box__content"), this.modalBox.appendChild(this.modalBoxContent), -1 !== this.opts.closeMethods.indexOf("button") && this.modal.appendChild(this.modalCloseBtn);
      this.modal.appendChild(this.modalBox);
    }.call(this), function () {
      this._events = {
        clickCloseBtn: this.close.bind(this),
        clickOverlay: function (t) {
          var o = this.modal.offsetWidth - this.modal.clientWidth,
              e = t.clientX >= this.modal.offsetWidth - 15,
              s = this.modal.scrollHeight !== this.modal.offsetHeight;
          if ("MacIntel" === navigator.platform && 0 == o && e && s) return;
          -1 !== this.opts.closeMethods.indexOf("overlay") && !function (t, o) {
            for (; (t = t.parentElement) && !t.classList.contains(o););

            return t;
          }(t.target, "tingle-modal") && t.clientX < this.modal.clientWidth && this.close();
        }.bind(this),
        resize: this.checkOverflow.bind(this),
        keyboardNav: function (t) {
          -1 !== this.opts.closeMethods.indexOf("escape") && 27 === t.which && this.isOpen() && this.close();
        }.bind(this)
      }, -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.addEventListener("click", this._events.clickCloseBtn);
      this.modal.addEventListener("mousedown", this._events.clickOverlay), window.addEventListener("resize", this._events.resize), document.addEventListener("keydown", this._events.keyboardNav);
    }.call(this), document.body.appendChild(this.modal, document.body.firstChild), this.opts.footer && this.addFooter(), this;
  }, t.prototype._busy = function (t) {
    o = t;
  }, t.prototype._isBusy = function () {
    return o;
  }, t.prototype.destroy = function () {
    null !== this.modal && (this.isOpen() && this.close(!0), function () {
      -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.removeEventListener("click", this._events.clickCloseBtn);
      this.modal.removeEventListener("mousedown", this._events.clickOverlay), window.removeEventListener("resize", this._events.resize), document.removeEventListener("keydown", this._events.keyboardNav);
    }.call(this), this.modal.parentNode.removeChild(this.modal), this.modal = null);
  }, t.prototype.isOpen = function () {
    return !!this.modal.classList.contains("tingle-modal--visible");
  }, t.prototype.open = function () {
    if (!this._isBusy()) {
      this._busy(!0);

      var t = this;
      return "function" == typeof t.opts.beforeOpen && t.opts.beforeOpen(), this.modal.style.removeProperty ? this.modal.style.removeProperty("display") : this.modal.style.removeAttribute("display"), document.getSelection().removeAllRanges(), this._scrollPosition = window.pageYOffset, document.body.classList.add("tingle-enabled"), document.body.style.top = -this._scrollPosition + "px", this.setStickyFooter(this.opts.stickyFooter), this.modal.classList.add("tingle-modal--visible"), "function" == typeof t.opts.onOpen && t.opts.onOpen.call(t), t._busy(!1), this.checkOverflow(), this;
    }
  }, t.prototype.close = function (t) {
    if (!this._isBusy()) {
      if (this._busy(!0), !1, "function" == typeof this.opts.beforeClose) if (!this.opts.beforeClose.call(this)) return void this._busy(!1);
      document.body.classList.remove("tingle-enabled"), document.body.style.top = null, window.scrollTo({
        top: this._scrollPosition,
        behavior: "instant"
      }), this.modal.classList.remove("tingle-modal--visible");
      var o = this;
      o.modal.style.display = "none", "function" == typeof o.opts.onClose && o.opts.onClose.call(this), o._busy(!1);
    }
  }, t.prototype.setContent = function (t) {
    return "string" == typeof t ? this.modalBoxContent.innerHTML = t : (this.modalBoxContent.innerHTML = "", this.modalBoxContent.appendChild(t)), this.isOpen() && this.checkOverflow(), this;
  }, t.prototype.getContent = function () {
    return this.modalBoxContent;
  }, t.prototype.addFooter = function () {
    return function () {
      this.modalBoxFooter = document.createElement("div"), this.modalBoxFooter.classList.add("tingle-modal-box__footer"), this.modalBox.appendChild(this.modalBoxFooter);
    }.call(this), this;
  }, t.prototype.setFooterContent = function (t) {
    return this.modalBoxFooter.innerHTML = t, this;
  }, t.prototype.getFooterContent = function () {
    return this.modalBoxFooter;
  }, t.prototype.setStickyFooter = function (t) {
    return this.isOverflow() || (t = !1), t ? this.modalBox.contains(this.modalBoxFooter) && (this.modalBox.removeChild(this.modalBoxFooter), this.modal.appendChild(this.modalBoxFooter), this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"), e.call(this), this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter.clientHeight + 20 + "px") : this.modalBoxFooter && (this.modalBox.contains(this.modalBoxFooter) || (this.modal.removeChild(this.modalBoxFooter), this.modalBox.appendChild(this.modalBoxFooter), this.modalBoxFooter.style.width = "auto", this.modalBoxFooter.style.left = "", this.modalBoxContent.style["padding-bottom"] = "", this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))), this;
  }, t.prototype.addFooterBtn = function (t, o, e) {
    var s = document.createElement("button");
    return s.innerHTML = t, s.addEventListener("click", e), "string" == typeof o && o.length && o.split(" ").forEach(function (t) {
      s.classList.add(t);
    }), this.modalBoxFooter.appendChild(s), s;
  }, t.prototype.resize = function () {
    console.warn("Resize is deprecated and will be removed in version 1.0");
  }, t.prototype.isOverflow = function () {
    return window.innerHeight <= this.modalBox.clientHeight;
  }, t.prototype.checkOverflow = function () {
    this.modal.classList.contains("tingle-modal--visible") && (this.isOverflow() ? this.modal.classList.add("tingle-modal--overflow") : this.modal.classList.remove("tingle-modal--overflow"), !this.isOverflow() && this.opts.stickyFooter ? this.setStickyFooter(!1) : this.isOverflow() && this.opts.stickyFooter && (e.call(this), this.setStickyFooter(!0)));
  }, {
    modal: t
  };
});

/***/ }),

/***/ "./node_modules/tingle.js/src/tingle.css":
/*!***********************************************!*\
  !*** ./node_modules/tingle.js/src/tingle.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-1!../../postcss-loader/src??ref--5-2!./tingle.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/tingle.js/src/tingle.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=modal-efedf721e216d3496540.js.map