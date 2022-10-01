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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_application_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/application.css */ "./app/javascript/src/application.css");
/* harmony import */ var _src_application_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_application_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _flashMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flashMessages */ "./app/javascript/packs/flashMessages.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./app/javascript/packs/modal.js");
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./likes */ "./app/javascript/packs/likes.js");
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_likes__WEBPACK_IMPORTED_MODULE_6__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.







_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_1__["start"]();

/***/ }),

/***/ "./app/javascript/packs/flashMessages.js":
/*!***********************************************!*\
  !*** ./app/javascript/packs/flashMessages.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


document.addEventListener('DOMContentLoaded', function () {
  var backgroundColors = {
    notice: "#009688",
    alert: "#f44336",
    error: "#f44336"
  };
  JSON.parse(document.body.dataset.flashMessages).forEach(function (flashMessage) {
    var _flashMessage = _slicedToArray(flashMessage, 2),
        type = _flashMessage[0],
        message = _flashMessage[1];

    toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
      text: message,
      duration: 3000,
      close: true,
      backgroundColor: backgroundColors[type],
      stopOnFocus: true
    }).showToast();
  });
});

/***/ }),

/***/ "./app/javascript/packs/likes.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/likes.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var token = document.querySelector("meta[name='csrf-token']").content;
var headers = {
  "Content-Type": "application/json",
  "X-CSRF-Token": token
};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(".actions .like").forEach(function (button) {
    button.addEventListener("click", like);
  });
  document.querySelectorAll(".actions .dislike").forEach(function (button) {
    button.addEventListener("click", dislike);
  });
});

function like(event) {
  var actionElement = event.target.closest(".action");
  fetch("/likes", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      like: {
        post_id: actionElement.dataset.postId
      }
    })
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    return handleLikeFeatureCallback(_objectSpread(_objectSpread({}, json), {}, {
      actionElement: actionElement
    }));
  })["catch"](function (error) {
    return console.log("parsing failed", error);
  });
}

function dislike(event) {
  var actionElement = event.target.closest(".action");
  fetch("/likes/".concat(actionElement.dataset.likeId), {
    method: "DELETE",
    headers: headers
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    return handleLikeFeatureCallback(_objectSpread(_objectSpread({}, json), {}, {
      actionElement: actionElement
    }));
  })["catch"](function (error) {
    return console.log("parsing failed", error);
  });
}

function handleLikeFeatureCallback(_ref) {
  var id = _ref.id,
      successful = _ref.successful,
      actionElement = _ref.actionElement;

  if (successful) {
    actionElement.dataset.likeId = id;
    actionElement.querySelectorAll(".like, .dislike").forEach(function (div) {
      div.classList.toggle("hidden");
    });
  }
}

/***/ }),

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

/***/ "./app/javascript/src/application.css":
/*!********************************************!*\
  !*** ./app/javascript/src/application.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!./application.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/src/application.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
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

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function (event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function () {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function (options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function (options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function (response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function (e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function (element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function (element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function (element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function (form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function (element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function (form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function (element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function (event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function (element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function (xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if ( true && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/src/application.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./app/javascript/src/application.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: -moz-fit-content;\n        max-width: fit-content;\n    }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --color-gray-darker: #262626;\n  --color-gray-dark: #999;\n  --color-gray: #aaa;\n  --color-gray-light: #ccc;\n  --color-gray-lighter: #dbdbdb;\n  --color-white-bis: #fafafa;\n  --color-blue: #3897f0;\n}\n\nform .field {\n  margin-top: 1rem;\n}\n\nform .field input {\n  width: 100%;\n  padding: 0.75rem;\n  background-color: #fafafa;\n  background-color: var(--color-white-bis);\n  border: 1px solid #dbdbdb;\n  border: 1px solid var(--color-gray-lighter);\n  border-radius: 3px;\n  font-size: 14px;\n}\n\nform .field input:focus {\n  outline: 0;\n  border: 1px solid #262626;\n  border: 1px solid var(--color-gray-darker);\n}\n\nform .actions {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\nform .actions input[type='submit'] {\n  font-size: 14px;\n  background-color: #3897f0;\n  background-color: var(--color-blue);\n  color: white;\n  width: 100%;\n  border-radius: 4px;\n  border: none;\n  padding: 0.5rem;\n}\n\nform.new-post, form.edit-profile {\n  margin: 1rem auto 0;\n  padding: 1rem;\n  max-width: 500px;\n  border-radius: 3px;\n  background-color: white;\n  border: 1px solid #dbdbdb;\n  border: 1px solid var(--color-gray-lighter);\n}\n\n.modal {\n  display: none;\n}\n\n.instagram-modal {\n  background: rgba(0, 0, 0, .6);\n}\n\n.instagram-modal .tingle-modal-box {\n  width: auto;\n  margin: auto 1rem;\n  border-radius: 12px;\n}\n\n.instagram-modal .tingle-modal-box__content {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n\n.instagram-modal .user-action {\n  padding: 1rem;\n  text-align: center;\n}\n\n.instagram-modal .user-action:not(:first-of-type) {\n  border-top: 1px solid #dbdbdb;\n  border-top: 1px solid var(--color-gray-lighter);\n}\n\n.instagram-modal a {\n  text-decoration: none;\n  color: #262626;\n  color: var(--color-gray-darker);\n}\n\n@media screen and (min-width: 700px) {\n  .instagram-modal .user-action {\n    padding: 1rem 8rem;\n  }\n}\n\n/*@import \"trix/dist/trix\";*/\n\n.trix-button-group.trix-button-group--block-tools,\n.trix-button-group.trix-button-group--file-tools,\n.trix-button-group.trix-button-group--history-tools {\n  display: none;\n}\n\nmain.posts-page.has-comments {\n  grid-template-areas:\n    'posts'\n    'sidebar';\n}\n\nmain.posts-page.has-comments aside {\n  display: block;\n}\n\n.comments {\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid #dbdbdb;\n  border: 1px solid var(--color-gray-lighter);\n}\n\n.comment {\n  display: grid;\n  grid-template-columns: 50px auto;\n  grid-column-gap: 1rem;\n  grid-template-areas:\n    'avatar comment-body'\n    'avatar comment-created-at'\n    '.      comment-created-at';\n}\n\n.comment:not(:first-of-type) {\n  margin-top: 1rem;\n}\n\n.comment .avatar {\n  grid-area: avatar;\n}\n\n.comment .avatar .photo {\n  width: 100%;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  border: 1px solid var(--color-gray-light);\n  padding: 3px;\n}\n\n.comment .body {\n  grid-area: comment-body;\n}\n\n.comment .created-at {\n  grid-area: comment-created-at;\n  margin-top: 0.5rem;\n  color: #999;\n  color: var(--color-gray-dark);\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\nform.new-comment {\n  margin-top: 2rem;\n}\n\n@media screen and (min-width: 700px) {\n  main.posts-page.has-comments {\n    grid-template-areas: 'posts sidebar';\n  }\n\n  .comments {\n    margin-top: 0;\n  }\n}\n\nbody {\n  background-color: #fafafa;\n  background-color: var(--color-white-bis);\n  font-family: -apple-system, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n  color: #262626;\n  color: var(--color-gray-darker);\n}\n\nbody > header {\n  height: 77px;\n  background-color: white;\n  border-bottom: 1px solid #dbdbdb;\n  border-bottom: 1px solid var(--color-gray-lighter);\n}\n\nbody > header nav {\n  display: flex;\n}\n\nbody > header .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n}\n\nbody > header .logo-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 1rem;\n}\n\nbody > header .logo-text {\n  width: 45%;\n  border-left: 1px solid #aaa;\n  border-left: 1px solid var(--color-gray);\n  padding-left: 1rem;\n}\n\nbody > header .logo-text img {\n  width: 100%;\n  margin-top: 7px;\n}\n\nbody > header .actions a:not(:first-of-type) {\n  padding-left: 1rem;\n}\n\n.hidden {\n  display: none !important;\n}\n\nmain.posts-page {\n  display: grid;\n  grid-template-areas: 'posts';\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.container {\n  max-width: 935px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 1rem;\n}\n\n.posts {\n  grid-area: posts;\n}\n\n.post {\n  border-radius: 3px;\n  background-color: white;\n  border: 1px solid #dbdbdb;\n  border: 1px solid var(--color-gray-lighter);\n}\n\n.post:not(:first-of-type) {\n  margin-top: 15px;\n}\n\n.post header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n  padding: 0 1rem;\n}\n\n.post header nav {\n  display: flex;\n  align-items: center;\n}\n\n.post header nav h4 {\n  margin-left: 0.5rem;\n}\n\n.post header .photo {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n\n.post .image {\n  display: flex;\n  align-items: center;\n  min-height: 500px;\n}\n\n.post .image img {\n  width: 100%;\n}\n\n.post .details section {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  font-size: 14px;\n}\n\n.post .actions .action {\n  cursor: pointer;\n}\n\n.post .actions .action,\n.post .actions .action .like,\n.post .actions .action .dislike {\n  display: inline;\n}\n\n.post .actions .action a {\n  text-decoration: none;\n}\n\n.post .details .actions .action:not(:first-of-type) {\n  margin-left: 0.75rem;\n}\n\n.post .details .created-at {\n  color: #999;\n  color: var(--color-gray-dark);\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\naside, footer {\n  display: none;\n}\n\n@media screen and (min-width: 700px) {\n  main.posts-page {\n    grid-template-columns: 600px auto;\n    grid-column-gap: 2rem;\n    grid-template-areas:\n      'posts sidebar'\n      'posts footer'\n      'posts .';\n    margin-top: 60px;\n  }\n\n  .post:not(:first-of-type) {\n    margin-top: 60px;\n  }\n\n  aside {\n    grid-area: sidebar;\n    display: block;\n  }\n\n  aside .profile {\n    display: grid;\n    grid-template-columns: 50px auto;\n    grid-column-gap: 1rem;\n    grid-template-areas:\n      'photo .'\n      'photo username'\n      'photo full-name'\n      'photo .';\n\n    color: #262626;\n\n    color: var(--color-gray-darker);\n    text-decoration: none;\n  }\n\n  aside .profile .photo {\n    grid-area: photo;\n    width: 100%;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    border: 1px solid var(--color-gray-light);\n    padding: 3px;\n  }\n\n  aside .profile .username {\n    grid-area: username;\n  }\n\n  aside .profile .full-name {\n    grid-area: full-name;\n    color: #999;\n    color: var(--color-gray-dark);\n    font-size: 14px;\n  }\n\n  aside .suggestions {\n    margin-top: 1rem;\n    padding: 0.75rem;\n    border-radius: 3px;\n    background-color: white;\n    border: 1px solid #dbdbdb;\n    border: 1px solid var(--color-gray-lighter);\n  }\n\n  aside .suggestions h4 {\n    color: #999;\n    color: var(--color-gray-dark);\n    font-size: 14px;\n  }\n\n  aside .suggestions .profile:first-of-type {\n    margin-top: 1rem;\n  }\n\n  aside .suggestions .profile {\n    margin-top: 0.5rem;\n    grid-template-columns: 40px auto;\n  }\n\n  aside .suggestions .photo {\n    padding: 0;\n  }\n\n  footer {\n    grid-area: footer;\n    display: block;\n    margin-top: 1rem;\n    color: #ccc;\n    color: var(--color-gray-light);\n    font-size: 14px;\n  }\n}\n", "",{"version":3,"sources":["../../../node_modules/toastify-js/src/toastify.css","reset.css","variables.css","form.css","modal.css","comments.css","application.css"],"names":[],"mappings":"AAAA;;;;;;EAME;;AAEF;IACI,kBAAkB;IAClB,cAAc;IACd,qBAAqB;IACrB,uFAAuF;IAEvF,qDAAqD;IACrD,eAAe;IACf,UAAU;IACV,wDAAwD;IACxD,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI;QACI,iBAAiB;QACjB,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,2BAAsB;QAAtB,sBAAsB;IAC1B;AACJ;;ACpFA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;ACJA;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,kBAAkB;EAClB,wBAAwB;EACxB,6BAA6B;EAC7B,0BAA0B;EAC1B,qBAAqB;AACvB;;ACRA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,yBAAwC;EAAxC,wCAAwC;EACxC,yBAA2C;EAA3C,2CAA2C;EAC3C,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,yBAA0C;EAA1C,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,yBAAmC;EAAnC,mCAAmC;EACnC,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,yBAA2C;EAA3C,2CAA2C;AAC7C;;ACzCA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,6BAA+C;EAA/C,+CAA+C;AACjD;;AAEA;EACE,qBAAqB;EACrB,cAA+B;EAA/B,+BAA+B;AACjC;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;ACtCA,4BAA4B;;AAE5B;;;EAGE,aAAa;AACf;;AAEA;EACE;;aAEW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,yBAA2C;EAA3C,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,qBAAqB;EACrB;;;+BAG6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,sBAAyC;EAAzC,yCAAyC;EACzC,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,WAA6B;EAA7B,6BAA6B;EAC7B,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,oCAAoC;EACtC;;EAEA;IACE,aAAa;EACf;AACF;;AClEA;EACE,yBAAwC;EAAxC,wCAAwC;EACxC,uFAAuF;EACvF,cAA+B;EAA/B,+BAA+B;AACjC;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,gCAAkD;EAAlD,kDAAkD;AACpD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,2BAAwC;EAAxC,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,yBAA2C;EAA3C,2CAA2C;AAC7C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAA6B;EAA7B,6BAA6B;EAC7B,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,iCAAiC;IACjC,qBAAqB;IACrB;;;eAGW;IACX,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,gCAAgC;IAChC,qBAAqB;IACrB;;;;eAIW;;IAEX,cAA+B;;IAA/B,+BAA+B;IAC/B,qBAAqB;EACvB;;EAEA;IACE,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,sBAAyC;IAAzC,yCAAyC;IACzC,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,oBAAoB;IACpB,WAA6B;IAA7B,6BAA6B;IAC7B,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;IACvB,yBAA2C;IAA3C,2CAA2C;EAC7C;;EAEA;IACE,WAA6B;IAA7B,6BAA6B;IAC7B,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,gCAAgC;EAClC;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,WAA8B;IAA9B,8BAA8B;IAC9B,eAAe;EACjB;AACF","file":"application.css","sourcesContent":["/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n",":root {\n  --color-gray-darker: #262626;\n  --color-gray-dark: #999;\n  --color-gray: #aaa;\n  --color-gray-light: #ccc;\n  --color-gray-lighter: #dbdbdb;\n  --color-white-bis: #fafafa;\n  --color-blue: #3897f0;\n}\n","form .field {\n  margin-top: 1rem;\n}\n\nform .field input {\n  width: 100%;\n  padding: 0.75rem;\n  background-color: var(--color-white-bis);\n  border: 1px solid var(--color-gray-lighter);\n  border-radius: 3px;\n  font-size: 14px;\n}\n\nform .field input:focus {\n  outline: 0;\n  border: 1px solid var(--color-gray-darker);\n}\n\nform .actions {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\nform .actions input[type='submit'] {\n  font-size: 14px;\n  background-color: var(--color-blue);\n  color: white;\n  width: 100%;\n  border-radius: 4px;\n  border: none;\n  padding: 0.5rem;\n}\n\nform.new-post, form.edit-profile {\n  margin: 1rem auto 0;\n  padding: 1rem;\n  max-width: 500px;\n  border-radius: 3px;\n  background-color: white;\n  border: 1px solid var(--color-gray-lighter);\n}\n",".modal {\n  display: none;\n}\n\n.instagram-modal {\n  background: rgba(0, 0, 0, .6);\n}\n\n.instagram-modal .tingle-modal-box {\n  width: auto;\n  margin: auto 1rem;\n  border-radius: 12px;\n}\n\n.instagram-modal .tingle-modal-box__content {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n\n.instagram-modal .user-action {\n  padding: 1rem;\n  text-align: center;\n}\n\n.instagram-modal .user-action:not(:first-of-type) {\n  border-top: 1px solid var(--color-gray-lighter);\n}\n\n.instagram-modal a {\n  text-decoration: none;\n  color: var(--color-gray-darker);\n}\n\n@media screen and (min-width: 700px) {\n  .instagram-modal .user-action {\n    padding: 1rem 8rem;\n  }\n}\n","/*@import \"trix/dist/trix\";*/\n\n.trix-button-group.trix-button-group--block-tools,\n.trix-button-group.trix-button-group--file-tools,\n.trix-button-group.trix-button-group--history-tools {\n  display: none;\n}\n\nmain.posts-page.has-comments {\n  grid-template-areas:\n    'posts'\n    'sidebar';\n}\n\nmain.posts-page.has-comments aside {\n  display: block;\n}\n\n.comments {\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid var(--color-gray-lighter);\n}\n\n.comment {\n  display: grid;\n  grid-template-columns: 50px auto;\n  grid-column-gap: 1rem;\n  grid-template-areas:\n    'avatar comment-body'\n    'avatar comment-created-at'\n    '.      comment-created-at';\n}\n\n.comment:not(:first-of-type) {\n  margin-top: 1rem;\n}\n\n.comment .avatar {\n  grid-area: avatar;\n}\n\n.comment .avatar .photo {\n  width: 100%;\n  border-radius: 50%;\n  border: 1px solid var(--color-gray-light);\n  padding: 3px;\n}\n\n.comment .body {\n  grid-area: comment-body;\n}\n\n.comment .created-at {\n  grid-area: comment-created-at;\n  margin-top: 0.5rem;\n  color: var(--color-gray-dark);\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\nform.new-comment {\n  margin-top: 2rem;\n}\n\n@media screen and (min-width: 700px) {\n  main.posts-page.has-comments {\n    grid-template-areas: 'posts sidebar';\n  }\n\n  .comments {\n    margin-top: 0;\n  }\n}\n","@import \"toastify-js/src/toastify.css\";\n\n@import \"./reset.css\";\n@import \"./variables.css\";\n@import \"./form.css\";\n@import \"./modal.css\";\n@import \"./comments.css\";\n\nbody {\n  background-color: var(--color-white-bis);\n  font-family: -apple-system, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n  color: var(--color-gray-darker);\n}\n\nbody > header {\n  height: 77px;\n  background-color: white;\n  border-bottom: 1px solid var(--color-gray-lighter);\n}\n\nbody > header nav {\n  display: flex;\n}\n\nbody > header .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n}\n\nbody > header .logo-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 1rem;\n}\n\nbody > header .logo-text {\n  width: 45%;\n  border-left: 1px solid var(--color-gray);\n  padding-left: 1rem;\n}\n\nbody > header .logo-text img {\n  width: 100%;\n  margin-top: 7px;\n}\n\nbody > header .actions a:not(:first-of-type) {\n  padding-left: 1rem;\n}\n\n.hidden {\n  display: none !important;\n}\n\nmain.posts-page {\n  display: grid;\n  grid-template-areas: 'posts';\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.container {\n  max-width: 935px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 1rem;\n}\n\n.posts {\n  grid-area: posts;\n}\n\n.post {\n  border-radius: 3px;\n  background-color: white;\n  border: 1px solid var(--color-gray-lighter);\n}\n\n.post:not(:first-of-type) {\n  margin-top: 15px;\n}\n\n.post header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n  padding: 0 1rem;\n}\n\n.post header nav {\n  display: flex;\n  align-items: center;\n}\n\n.post header nav h4 {\n  margin-left: 0.5rem;\n}\n\n.post header .photo {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n\n.post .image {\n  display: flex;\n  align-items: center;\n  min-height: 500px;\n}\n\n.post .image img {\n  width: 100%;\n}\n\n.post .details section {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  font-size: 14px;\n}\n\n.post .actions .action {\n  cursor: pointer;\n}\n\n.post .actions .action,\n.post .actions .action .like,\n.post .actions .action .dislike {\n  display: inline;\n}\n\n.post .actions .action a {\n  text-decoration: none;\n}\n\n.post .details .actions .action:not(:first-of-type) {\n  margin-left: 0.75rem;\n}\n\n.post .details .created-at {\n  color: var(--color-gray-dark);\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\naside, footer {\n  display: none;\n}\n\n@media screen and (min-width: 700px) {\n  main.posts-page {\n    grid-template-columns: 600px auto;\n    grid-column-gap: 2rem;\n    grid-template-areas:\n      'posts sidebar'\n      'posts footer'\n      'posts .';\n    margin-top: 60px;\n  }\n\n  .post:not(:first-of-type) {\n    margin-top: 60px;\n  }\n\n  aside {\n    grid-area: sidebar;\n    display: block;\n  }\n\n  aside .profile {\n    display: grid;\n    grid-template-columns: 50px auto;\n    grid-column-gap: 1rem;\n    grid-template-areas:\n      'photo .'\n      'photo username'\n      'photo full-name'\n      'photo .';\n\n    color: var(--color-gray-darker);\n    text-decoration: none;\n  }\n\n  aside .profile .photo {\n    grid-area: photo;\n    width: 100%;\n    border-radius: 50%;\n    border: 1px solid var(--color-gray-light);\n    padding: 3px;\n  }\n\n  aside .profile .username {\n    grid-area: username;\n  }\n\n  aside .profile .full-name {\n    grid-area: full-name;\n    color: var(--color-gray-dark);\n    font-size: 14px;\n  }\n\n  aside .suggestions {\n    margin-top: 1rem;\n    padding: 0.75rem;\n    border-radius: 3px;\n    background-color: white;\n    border: 1px solid var(--color-gray-lighter);\n  }\n\n  aside .suggestions h4 {\n    color: var(--color-gray-dark);\n    font-size: 14px;\n  }\n\n  aside .suggestions .profile:first-of-type {\n    margin-top: 1rem;\n  }\n\n  aside .suggestions .profile {\n    margin-top: 0.5rem;\n    grid-template-columns: 40px auto;\n  }\n\n  aside .suggestions .photo {\n    padding: 0;\n  }\n\n  footer {\n    grid-area: footer;\n    display: block;\n    margin-top: 1rem;\n    color: var(--color-gray-light);\n    font-size: 14px;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


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

/***/ }),

/***/ "./node_modules/toastify-js/src/toastify.js":
/*!**************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function (root, factory) {
  if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.Toastify = factory();
  }
})(this, function (global) {
  // Object initialization
  var Toastify = function (options) {
    // Returning a new init object
    return new Toastify.lib.init(options);
  },
      // Library version
  version = "1.12.0"; // Set the default global options


  Toastify.defaults = {
    oldestFirst: true,
    text: "Toastify is awesome!",
    node: undefined,
    duration: 3000,
    selector: undefined,
    callback: function () {},
    destination: undefined,
    newWindow: false,
    close: false,
    gravity: "toastify-top",
    positionLeft: false,
    position: '',
    backgroundColor: '',
    avatar: "",
    className: "",
    stopOnFocus: true,
    onClick: function () {},
    offset: {
      x: 0,
      y: 0
    },
    escapeMarkup: true,
    ariaLive: 'polite',
    style: {
      background: ''
    }
  }; // Defining the prototype of the object

  Toastify.lib = Toastify.prototype = {
    toastify: version,
    constructor: Toastify,
    // Initializing the object with required parameters
    init: function (options) {
      // Verifying and validating the input object
      if (!options) {
        options = {};
      } // Creating the options object


      this.options = {};
      this.toastElement = null; // Validating the options

      this.options.text = options.text || Toastify.defaults.text; // Display message

      this.options.node = options.node || Toastify.defaults.node; // Display content as node

      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration

      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector

      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display

      this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination

      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window

      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon

      this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom

      this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right

      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right

      this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color

      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path

      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast

      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus

      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click

      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset

      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
      this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
      this.options.style = options.style || Toastify.defaults.style;

      if (options.backgroundColor) {
        this.options.style.background = options.backgroundColor;
      } // Returning the current object for chaining functions


      return this;
    },
    // Building the DOM element
    buildToast: function () {
      // Validating if the options are defined
      if (!this.options) {
        throw "Toastify is not initialized";
      } // Creating the DOM object


      var divElement = document.createElement("div");
      divElement.className = "toastify on " + this.options.className; // Positioning toast to left or right or center

      if (!!this.options.position) {
        divElement.className += " toastify-" + this.options.position;
      } else {
        // To be depreciated in further versions
        if (this.options.positionLeft === true) {
          divElement.className += " toastify-left";
          console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.');
        } else {
          // Default position
          divElement.className += " toastify-right";
        }
      } // Assigning gravity of element


      divElement.className += " " + this.options.gravity;

      if (this.options.backgroundColor) {
        // This is being deprecated in favor of using the style HTML DOM property
        console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
      } // Loop through our style object and apply styles to divElement


      for (var property in this.options.style) {
        divElement.style[property] = this.options.style[property];
      } // Announce the toast to screen readers


      if (this.options.ariaLive) {
        divElement.setAttribute('aria-live', this.options.ariaLive);
      } // Adding the toast message/node


      if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
        // If we have a valid node, we insert it
        divElement.appendChild(this.options.node);
      } else {
        if (this.options.escapeMarkup) {
          divElement.innerText = this.options.text;
        } else {
          divElement.innerHTML = this.options.text;
        }

        if (this.options.avatar !== "") {
          var avatarElement = document.createElement("img");
          avatarElement.src = this.options.avatar;
          avatarElement.className = "toastify-avatar";

          if (this.options.position == "left" || this.options.positionLeft === true) {
            // Adding close icon on the left of content
            divElement.appendChild(avatarElement);
          } else {
            // Adding close icon on the right of content
            divElement.insertAdjacentElement("afterbegin", avatarElement);
          }
        }
      } // Adding a close icon to the toast


      if (this.options.close === true) {
        // Create a span for close element
        var closeElement = document.createElement("button");
        closeElement.type = "button";
        closeElement.setAttribute("aria-label", "Close");
        closeElement.className = "toast-close";
        closeElement.innerHTML = "&#10006;"; // Triggering the removal of toast from DOM on close click

        closeElement.addEventListener("click", function (event) {
          event.stopPropagation();
          this.removeElement(this.toastElement);
          window.clearTimeout(this.toastElement.timeOutValue);
        }.bind(this)); //Calculating screen width

        var width = window.innerWidth > 0 ? window.innerWidth : screen.width; // Adding the close icon to the toast element
        // Display on the right if screen width is less than or equal to 360px

        if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
          // Adding close icon on the left of content
          divElement.insertAdjacentElement("afterbegin", closeElement);
        } else {
          // Adding close icon on the right of content
          divElement.appendChild(closeElement);
        }
      } // Clear timeout while toast is focused


      if (this.options.stopOnFocus && this.options.duration > 0) {
        var self = this; // stop countdown

        divElement.addEventListener("mouseover", function (event) {
          window.clearTimeout(divElement.timeOutValue);
        }); // add back the timeout

        divElement.addEventListener("mouseleave", function () {
          divElement.timeOutValue = window.setTimeout(function () {
            // Remove the toast from DOM
            self.removeElement(divElement);
          }, self.options.duration);
        });
      } // Adding an on-click destination path


      if (typeof this.options.destination !== "undefined") {
        divElement.addEventListener("click", function (event) {
          event.stopPropagation();

          if (this.options.newWindow === true) {
            window.open(this.options.destination, "_blank");
          } else {
            window.location = this.options.destination;
          }
        }.bind(this));
      }

      if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
        divElement.addEventListener("click", function (event) {
          event.stopPropagation();
          this.options.onClick();
        }.bind(this));
      } // Adding offset


      if (typeof this.options.offset === "object") {
        var x = getAxisOffsetAValue("x", this.options);
        var y = getAxisOffsetAValue("y", this.options);
        var xOffset = this.options.position == "left" ? x : "-" + x;
        var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
        divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
      } // Returning the generated element


      return divElement;
    },
    // Displaying the toast
    showToast: function () {
      // Creating the DOM object for the toast
      this.toastElement = this.buildToast(); // Getting the root element to with the toast needs to be added

      var rootElement;

      if (typeof this.options.selector === "string") {
        rootElement = document.getElementById(this.options.selector);
      } else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot) {
        rootElement = this.options.selector;
      } else {
        rootElement = document.body;
      } // Validating if root element is present in DOM


      if (!rootElement) {
        throw "Root element is not defined";
      } // Adding the DOM element


      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
      rootElement.insertBefore(this.toastElement, elementToInsert); // Repositioning the toasts in case multiple toasts are present

      Toastify.reposition();

      if (this.options.duration > 0) {
        this.toastElement.timeOutValue = window.setTimeout(function () {
          // Remove the toast from DOM
          this.removeElement(this.toastElement);
        }.bind(this), this.options.duration); // Binding `this` for function invocation
      } // Supporting function chaining


      return this;
    },
    hideToast: function () {
      if (this.toastElement.timeOutValue) {
        clearTimeout(this.toastElement.timeOutValue);
      }

      this.removeElement(this.toastElement);
    },
    // Removing the element from the DOM
    removeElement: function (toastElement) {
      // Hiding the element
      // toastElement.classList.remove("on");
      toastElement.className = toastElement.className.replace(" on", ""); // Removing the element from DOM after transition end

      window.setTimeout(function () {
        // remove options node if any
        if (this.options.node && this.options.node.parentNode) {
          this.options.node.parentNode.removeChild(this.options.node);
        } // Remove the element from the DOM, only when the parent node was not removed before.


        if (toastElement.parentNode) {
          toastElement.parentNode.removeChild(toastElement);
        } // Calling the callback function


        this.options.callback.call(toastElement); // Repositioning the toasts again

        Toastify.reposition();
      }.bind(this), 400); // Binding `this` for function invocation
    }
  }; // Positioning the toasts on the DOM

  Toastify.reposition = function () {
    // Top margins with gravity
    var topLeftOffsetSize = {
      top: 15,
      bottom: 15
    };
    var topRightOffsetSize = {
      top: 15,
      bottom: 15
    };
    var offsetSize = {
      top: 15,
      bottom: 15
    }; // Get all toast messages on the DOM

    var allToasts = document.getElementsByClassName("toastify");
    var classUsed; // Modifying the position of each toast element

    for (var i = 0; i < allToasts.length; i++) {
      // Getting the applied gravity
      if (containsClass(allToasts[i], "toastify-top") === true) {
        classUsed = "toastify-top";
      } else {
        classUsed = "toastify-bottom";
      }

      var height = allToasts[i].offsetHeight;
      classUsed = classUsed.substr(9, classUsed.length - 1); // Spacing between toasts

      var offset = 15;
      var width = window.innerWidth > 0 ? window.innerWidth : screen.width; // Show toast in center if screen with less than or equal to 360px

      if (width <= 360) {
        // Setting the position
        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
        offsetSize[classUsed] += height + offset;
      } else {
        if (containsClass(allToasts[i], "toastify-left") === true) {
          // Setting the position
          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
          topLeftOffsetSize[classUsed] += height + offset;
        } else {
          // Setting the position
          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
          topRightOffsetSize[classUsed] += height + offset;
        }
      }
    } // Supporting function chaining


    return this;
  }; // Helper function to get offset.


  function getAxisOffsetAValue(axis, options) {
    if (options.offset[axis]) {
      if (isNaN(options.offset[axis])) {
        return options.offset[axis];
      } else {
        return options.offset[axis] + 'px';
      }
    }

    return '0px';
  }

  function containsClass(elem, yourClass) {
    if (!elem || typeof yourClass !== "string") {
      return false;
    } else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
      return true;
    } else {
      return false;
    }
  } // Setting up the prototype for the init object


  Toastify.lib.init.prototype = Toastify.lib; // Returning the Toastify function to be assigned to the window object/module

  return Toastify;
});

/***/ })

/******/ });
//# sourceMappingURL=application-07a46fb4cefec29e6dd5.js.map