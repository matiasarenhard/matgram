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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/authentication.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/authentication.js":
/*!************************************************!*\
  !*** ./app/javascript/packs/authentication.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_authentication_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/authentication.css */ "./app/javascript/src/authentication.css");
/* harmony import */ var _src_authentication_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_authentication_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flashMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flashMessages */ "./app/javascript/packs/flashMessages.js");



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

/***/ "./app/javascript/src/authentication.css":
/*!***********************************************!*\
  !*** ./app/javascript/src/authentication.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!./authentication.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/src/authentication.css");

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/src/authentication.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./app/javascript/src/authentication.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* @import \"toastify-js/src/toastify.css\"; */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --color-gray-darker: #262626;\n  --color-gray-dark: #999;\n  --color-gray: #aaa;\n  --color-gray-light: #ccc;\n  --color-gray-lighter: #dbdbdb;\n  --color-white-bis: #fafafa;\n  --color-blue: #3897f0;\n}\n\nform .field {\n  margin-top: 1rem;\n}\n\nform .field input {\n  width: 100%;\n  padding: 0.75rem;\n  background-color: #fafafa;\n  background-color: var(--color-white-bis);\n  border: 1px solid #dbdbdb;\n  border: 1px solid var(--color-gray-lighter);\n  border-radius: 3px;\n  font-size: 14px;\n}\n\nform .field input:focus {\n  outline: 0;\n  border: 1px solid #262626;\n  border: 1px solid var(--color-gray-darker);\n}\n\nform .actions {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\nform .actions input[type='submit'] {\n  font-size: 14px;\n  background-color: #3897f0;\n  background-color: var(--color-blue);\n  color: white;\n  width: 100%;\n  border-radius: 4px;\n  border: none;\n  padding: 0.5rem;\n}\n\nform.new-post, form.edit-profile {\n  margin: 1rem auto 0;\n  padding: 1rem;\n  max-width: 500px;\n  border-radius: 3px;\n  background-color: white;\n  border: 1px solid #dbdbdb;\n  border: 1px solid var(--color-gray-lighter);\n}\n\nbody {\n  background-color: #fafafa;\n  background-color: var(--color-white-bis);\n  font-family: -apple-system, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n  color: #262626;\n  color: var(--color-gray-darker);\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  padding: 0 0.5rem;\n}\n\n.hero {\n  background-color: white;\n  border: 1px solid #dbdbdb;\n  border: 1px solid var(--color-gray-lighter);\n  border-radius: 3px;\n  padding: 2rem;\n  width: 400px;\n}\n\n.hero .logo {\n  display: flex;\n  justify-content: center;\n}\n\n.hero img {\n  width: 40%;\n}\n\n.hero h2 {\n  color: #999;\n  color: var(--color-gray-dark);\n  font-weight: normal;\n  text-align: center;\n}\n\n.hero .help-links {\n  margin-top: 2rem;\n  border-top: 1px solid #dbdbdb;\n  border-top: 1px solid var(--color-gray-lighter);\n  padding-top: 1rem;\n  text-align: center;\n}\n\n.hero .help-links a {\n  display: block;\n  margin-top: 0.25rem;\n  text-decoration: none;\n  color: #3897f0;\n  color: var(--color-blue);\n  font-weight: bold;\n  font-size: 14px;\n}\n", "",{"version":3,"sources":["authentication.css","reset.css","variables.css","form.css"],"names":[],"mappings":"AAAA,4CAA4C;;ACA5C;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;ACJA;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,kBAAkB;EAClB,wBAAwB;EACxB,6BAA6B;EAC7B,0BAA0B;EAC1B,qBAAqB;AACvB;;ACRA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,yBAAwC;EAAxC,wCAAwC;EACxC,yBAA2C;EAA3C,2CAA2C;EAC3C,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,yBAA0C;EAA1C,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,yBAAmC;EAAnC,mCAAmC;EACnC,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,yBAA2C;EAA3C,2CAA2C;AAC7C;;AHnCA;EACE,yBAAwC;EAAxC,wCAAwC;EACxC,uFAAuF;EACvF,cAA+B;EAA/B,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,yBAA2C;EAA3C,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAA6B;EAA7B,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,6BAA+C;EAA/C,+CAA+C;EAC/C,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,qBAAqB;EACrB,cAAwB;EAAxB,wBAAwB;EACxB,iBAAiB;EACjB,eAAe;AACjB","file":"authentication.css","sourcesContent":["/* @import \"toastify-js/src/toastify.css\"; */\n\n@import \"./reset.css\";\n@import \"./variables.css\";\n@import \"./form.css\";\n\nbody {\n  background-color: var(--color-white-bis);\n  font-family: -apple-system, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n  color: var(--color-gray-darker);\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  padding: 0 0.5rem;\n}\n\n.hero {\n  background-color: white;\n  border: 1px solid var(--color-gray-lighter);\n  border-radius: 3px;\n  padding: 2rem;\n  width: 400px;\n}\n\n.hero .logo {\n  display: flex;\n  justify-content: center;\n}\n\n.hero img {\n  width: 40%;\n}\n\n.hero h2 {\n  color: var(--color-gray-dark);\n  font-weight: normal;\n  text-align: center;\n}\n\n.hero .help-links {\n  margin-top: 2rem;\n  border-top: 1px solid var(--color-gray-lighter);\n  padding-top: 1rem;\n  text-align: center;\n}\n\n.hero .help-links a {\n  display: block;\n  margin-top: 0.25rem;\n  text-decoration: none;\n  color: var(--color-blue);\n  font-weight: bold;\n  font-size: 14px;\n}\n","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n",":root {\n  --color-gray-darker: #262626;\n  --color-gray-dark: #999;\n  --color-gray: #aaa;\n  --color-gray-light: #ccc;\n  --color-gray-lighter: #dbdbdb;\n  --color-white-bis: #fafafa;\n  --color-blue: #3897f0;\n}\n","form .field {\n  margin-top: 1rem;\n}\n\nform .field input {\n  width: 100%;\n  padding: 0.75rem;\n  background-color: var(--color-white-bis);\n  border: 1px solid var(--color-gray-lighter);\n  border-radius: 3px;\n  font-size: 14px;\n}\n\nform .field input:focus {\n  outline: 0;\n  border: 1px solid var(--color-gray-darker);\n}\n\nform .actions {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\nform .actions input[type='submit'] {\n  font-size: 14px;\n  background-color: var(--color-blue);\n  color: white;\n  width: 100%;\n  border-radius: 4px;\n  border: none;\n  padding: 0.5rem;\n}\n\nform.new-post, form.edit-profile {\n  margin: 1rem auto 0;\n  padding: 1rem;\n  max-width: 500px;\n  border-radius: 3px;\n  background-color: white;\n  border: 1px solid var(--color-gray-lighter);\n}\n"]}]);
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
//# sourceMappingURL=authentication-49d31312f0ec28351937.js.map