/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhexagon_board"] = self["webpackChunkhexagon_board"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  overflow: hidden;\\n}\\n\\n#app {\\n  width: 100%;\\n  min-height: 100vh;\\n}\\n\\n#app canvas {\\n  width: 100%;\\n  height: 100%;\\n  background-color: black;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hexagon-board/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://hexagon-board/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hexagon-board/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hexagon-board/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hexagon-board/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hexagon-board/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hexagon-board/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hexagon-board/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hexagon-board/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hexagon-board/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/algorithm/Hexagon.ts":
/*!**********************************!*\
  !*** ./src/algorithm/Hexagon.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar axialDirectionVector = [\n    { q: +1, r: 0 }, { q: +1, r: -1 }, { q: 0, r: -1 },\n    { q: -1, r: 0 }, { q: -1, r: +1 }, { q: 0, r: +1 }\n];\nvar axialDirection = function (dir) {\n    return axialDirectionVector[dir];\n};\nvar axialAdd = function (hex, vec) {\n    return {\n        q: hex.q + vec.q,\n        r: hex.r + vec.r\n    };\n};\nvar axialSubtract = function (a, b) {\n    return {\n        q: a.q - b.q,\n        r: a.r - b.r\n    };\n};\nvar axialNeighbor = function (hex, dir) {\n    return axialAdd(hex, axialDirection(dir));\n};\nvar axialDistance = function (hexStart, hexEnd) {\n    var vec = axialSubtract(hexStart, hexEnd);\n    return (Math.abs(vec.q) + Math.abs(vec.q + vec.r) + Math.abs(vec.r)) / 2;\n};\nvar getAxialNeighbors = function (hex) {\n    var neighbors = [];\n    for (var i = 0; i < 6; i++) {\n        neighbors.push(axialNeighbor(hex, i));\n    }\n    return neighbors;\n};\nvar getHexSize = function () { return HEX_SIZE * cam.zoom; };\nvar cubeToAxial = function (cube) {\n    var q = cube.q;\n    var r = cube.r;\n    return { q: q, r: r };\n};\nvar axialToCube = function (hex) {\n    var q = hex.q;\n    var r = hex.r;\n    var s = -q - r;\n    return { q: q, r: r, s: s };\n};\nvar cubeRound = function (cube) {\n    var q = Math.round(cube.q);\n    var r = Math.round(cube.r);\n    var s = Math.round(cube.s);\n    var q_diff = Math.abs(q - cube.q);\n    var r_diff = Math.abs(r - cube.r);\n    var s_diff = Math.abs(s - cube.s);\n    if (q_diff > r_diff && q_diff > s_diff) {\n        q = -r - s;\n    }\n    else if (r_diff > s_diff) {\n        r = -q - s;\n    }\n    else {\n        s = -q - r;\n    }\n    return { q: q, r: r, s: s };\n};\nvar axialRound = function (hex) {\n    return cubeToAxial(cubeRound(axialToCube(hex)));\n};\nvar pixelToHex = function (pointer) {\n    var q = (Math.sqrt(3) / 3 * pointer.x - 1. / 3 * pointer.y) / getHexSize();\n    var r = (2. / 3 * pointer.y) / getHexSize();\n    return axialRound({ q: q, r: r });\n};\nvar axialToStore = function (hex) {\n    return {\n        r: hex.r,\n        q: hex.q + Math.floor(hex.r / 2)\n    };\n};\nvar Hexagon = {\n    axialDistance: axialDistance,\n    axialNeighbor: axialNeighbor,\n    getAxialNeighbors: getAxialNeighbors,\n    cubeToAxial: cubeToAxial,\n    axialToCube: axialToCube,\n    cubeRound: cubeRound,\n    axialRound: axialRound,\n    pixelToHex: pixelToHex,\n    axialToStore: axialToStore,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hexagon);\n\n\n//# sourceURL=webpack://hexagon-board/./src/algorithm/Hexagon.ts?");

/***/ }),

/***/ "./src/algorithm/PathFinding.ts":
/*!**************************************!*\
  !*** ./src/algorithm/PathFinding.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Hexagon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hexagon */ \"./src/algorithm/Hexagon.ts\");\n\nvar AStar = {\n    init: function (grid) {\n        for (var x = 0; x < grid.length; x++) {\n            for (var y = 0; y < grid[x].length; y++) {\n                grid[x][y].f = 0;\n                grid[x][y].g = 0;\n                grid[x][y].h = 0;\n                grid[x][y].debug = 0;\n                grid[x][y].parent = null;\n                grid[x][y].neighbors = [];\n            }\n        }\n        for (var x = 0; x < grid.length; x++) {\n            for (var y = 0; y < grid[x].length; y++) {\n                var _neighbors = _Hexagon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAxialNeighbors(grid[x][y]);\n                for (var _i = 0, _neighbors_1 = _neighbors; _i < _neighbors_1.length; _i++) {\n                    var neighbor = _neighbors_1[_i];\n                    var _a = _Hexagon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].axialToStore(neighbor), r = _a.r, q = _a.q;\n                    if (r < 0 || r >= grid.length || q >= grid[x].length || q < 0)\n                        continue;\n                    if (!grid[r][q].block) {\n                        grid[x][y].neighbors.push(grid[r][q]);\n                    }\n                }\n            }\n        }\n        return grid;\n    },\n    search: function (board, _start, _end) {\n        var grid = AStar.init(board);\n        var _a = _Hexagon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].axialToStore(_start), rStart = _a.r, qStart = _a.q;\n        var _b = _Hexagon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].axialToStore(_end), rEnd = _b.r, qEnd = _b.q;\n        var start = grid[rStart][qStart];\n        var end = grid[rEnd][qEnd];\n        var openList = [];\n        var closedList = [];\n        var path = [];\n        openList.push(start);\n        while (openList.length) {\n            var lowestIndex = 0;\n            for (var i = 0; i < openList.length; i++) {\n                if (openList[i].f < openList[lowestIndex].f) {\n                    lowestIndex = i;\n                }\n            }\n            var current = openList[lowestIndex];\n            if (current === end) {\n                var temp = current;\n                path.push(temp);\n                while (temp.parent) {\n                    path.push(temp.parent);\n                    temp = temp.parent;\n                }\n                return path.reverse();\n            }\n            openList.splice(lowestIndex, 1);\n            closedList.push(current);\n            var neighbors = current.neighbors;\n            for (var i = 0; i < neighbors.length; i++) {\n                var neighbor = neighbors[i];\n                if (!closedList.includes(neighbor)) {\n                    var possibleG = current.g + 1;\n                    if (!openList.includes(neighbor)) {\n                        openList.push(neighbor);\n                    }\n                    else if (possibleG >= neighbor.g) {\n                        continue;\n                    }\n                    neighbor.g = possibleG;\n                    neighbor.h = _Hexagon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].axialDistance(neighbor, end);\n                    neighbor.f = neighbor.g + neighbor.h;\n                    neighbor.parent = current;\n                }\n            }\n        }\n        return [];\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AStar);\n\n\n//# sourceURL=webpack://hexagon-board/./src/algorithm/PathFinding.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ (() => {

eval("HEX_SIZE = 50;\n\n\n//# sourceURL=webpack://hexagon-board/./src/constants.ts?");

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"objFilterNaN\": () => (/* binding */ objFilterNaN)\n/* harmony export */ });\nvar objFilterNaN = function (obj) {\n    if (typeof obj !== 'object')\n        return obj;\n    Object.keys(obj).forEach(function (key) {\n        if (obj[key] === undefined || Number.isNaN(obj[key])) {\n            delete obj[key];\n        }\n    });\n    return obj;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    objFilterNaN: objFilterNaN\n});\n\n\n//# sourceURL=webpack://hexagon-board/./src/helpers/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Battle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Battle */ \"./src/modules/Battle.ts\");\n/* harmony import */ var _modules_Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Camera */ \"./src/modules/Camera.ts\");\n/* harmony import */ var _modules_Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Canvas */ \"./src/modules/Canvas.ts\");\n/* harmony import */ var _modules_Draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Draw */ \"./src/modules/Draw.ts\");\n/* harmony import */ var _modules_Hex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Hex */ \"./src/modules/Hex.ts\");\n/* harmony import */ var _modules_Keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Keyboard */ \"./src/modules/Keyboard.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\nvar CANVAS = document.createElement(\"canvas\");\n__webpack_require__.g.canvas = CANVAS;\n__webpack_require__.g.ctx = CANVAS.getContext(\"2d\");\n__webpack_require__.g.cameraSpeed = 1000;\nvar APP = document.createElement(\"div\");\nAPP.id = \"app\";\nAPP.appendChild(CANVAS);\ndocument.body.appendChild(APP);\nvar battle = new _modules_Battle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([]);\nfor (var r = 0; r < 10; r++) {\n    if (battle.board.length < r + 1) {\n        battle.board.push([]);\n    }\n    for (var q = 0; q < 10; q++) {\n        battle.board[r].push(new _modules_Hex__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({ r: r, q: q - Math.floor(r / 2) }));\n    }\n}\nvar render = function () {\n    _modules_Draw__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clearScreen();\n    ctx.font = '30px Arial';\n    ctx.strokeStyle = 'white';\n    ctx.strokeText(\"FPS: \".concat(Math.floor(__webpack_require__.g.deltaTime / 1000 * 3600)), 10, 40);\n    battle.render();\n};\nvar control = function () {\n    var xAxis = +_modules_Keyboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isPress(_modules_Keyboard__WEBPACK_IMPORTED_MODULE_5__.Key.RIGHT) - +_modules_Keyboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isPress(_modules_Keyboard__WEBPACK_IMPORTED_MODULE_5__.Key.LEFT);\n    var yAxis = +_modules_Keyboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isPress(_modules_Keyboard__WEBPACK_IMPORTED_MODULE_5__.Key.DOWN) - +_modules_Keyboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isPress(_modules_Keyboard__WEBPACK_IMPORTED_MODULE_5__.Key.TOP);\n    if (xAxis || yAxis) {\n        var speed = cameraSpeed * __webpack_require__.g.deltaTime / 1000 / __webpack_require__.g.cam.zoom;\n        _modules_Camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"].move({ x: xAxis * speed, y: yAxis * speed });\n    }\n};\nvar loop = function () {\n    var now = new Date().getTime();\n    __webpack_require__.g.deltaTime = (now - __webpack_require__.g.prev);\n    __webpack_require__.g.prev = now;\n    control();\n    render();\n    window.requestAnimationFrame(loop);\n};\nvar init = function () {\n    __webpack_require__.g.prev = new Date().getTime();\n    // Resize canvas and focus to center\n    _modules_Canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resize();\n    _modules_Camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"].focus({ x: 0 + 300, y: 0 + 200 });\n    _modules_Keyboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"].bindEvent();\n    window.addEventListener(\"resize\", _modules_Canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resize);\n    window.addEventListener(\"wheel\", function (event) {\n        _modules_Camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"].zoom(event);\n    });\n    window.requestAnimationFrame(loop);\n};\ninit();\n\n\n//# sourceURL=webpack://hexagon-board/./src/index.ts?");

/***/ }),

/***/ "./src/modules/Battle.ts":
/*!*******************************!*\
  !*** ./src/modules/Battle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _algorithm_Hexagon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithm/Hexagon */ \"./src/algorithm/Hexagon.ts\");\n/* harmony import */ var _algorithm_PathFinding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../algorithm/PathFinding */ \"./src/algorithm/PathFinding.ts\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera */ \"./src/modules/Camera.ts\");\n/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Draw */ \"./src/modules/Draw.ts\");\n\n\n\n\nvar Battle = /** @class */ (function () {\n    function Battle(board) {\n        this.path = [];\n        this.board = board;\n        canvas.addEventListener('click', this.mouseClickHandler.bind(this));\n        canvas.addEventListener('mousemove', this.mouseMoveHandler.bind(this));\n    }\n    Battle.prototype.mouseClickHandler = function (event) {\n        var shiftKey = event.shiftKey;\n        var _a = _Camera__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mouseCam(event), x = _a.x, y = _a.y;\n        var hex = _algorithm_Hexagon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pixelToHex({ x: x, y: y });\n        var _b = _algorithm_Hexagon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].axialToStore(hex), r = _b.r, q = _b.q;\n        if (r >= this.board.length || r < 0)\n            return;\n        if (!shiftKey && !this.board[r][q].block) {\n            this.select = this.board[r][q];\n        }\n        else {\n            this.board[r][q].block = true;\n        }\n    };\n    Battle.prototype.mouseMoveHandler = function (event) {\n        if (!this.select)\n            return;\n        var _a = _Camera__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mouseCam(event), x = _a.x, y = _a.y;\n        var hex = _algorithm_Hexagon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pixelToHex({ x: x, y: y });\n        var _b = _algorithm_Hexagon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].axialToStore(hex), r = _b.r, q = _b.q;\n        if (r >= this.board.length || r < 0)\n            return;\n        var _hover = this.board[r][q];\n        if (_hover !== this.hover) {\n            this.hover = _hover;\n            if (this.select) {\n                this.path = _algorithm_PathFinding__WEBPACK_IMPORTED_MODULE_1__[\"default\"].search(this.board, this.select, this.hover);\n            }\n        }\n    };\n    Battle.prototype.render = function () {\n        var _this = this;\n        var _a;\n        (_a = this.board) === null || _a === void 0 ? void 0 : _a.map(function (row) {\n            row === null || row === void 0 ? void 0 : row.map(function (hex) {\n                var x = HEX_SIZE * (Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r);\n                var y = HEX_SIZE * ((3 / 2) * hex.r);\n                var color = hex.color;\n                if (_this.select) {\n                    for (var i = 0; i < 6; i++) {\n                        var neighbor = _algorithm_Hexagon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].axialNeighbor(_this.select, i);\n                        if (neighbor) {\n                            if (hex.q === neighbor.q && hex.r === neighbor.r)\n                                color = 'lightyellow';\n                        }\n                    }\n                }\n                if (_this.select === hex)\n                    color = 'green';\n                if (_this.target === hex)\n                    color = 'red';\n                if (hex.block)\n                    color = 'gray';\n                _Draw__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawHex({ x: x, y: y, size: HEX_SIZE }, color);\n                if (_this.path.length) {\n                    if (_this.path.some(function (x) { return x.r === hex.r && x.q === hex.q; })) {\n                        color = 'yellow';\n                        _Draw__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawHex({ x: x, y: y, size: HEX_SIZE * 0.3 }, color);\n                    }\n                }\n                // Draw.drawText(`[${hex.r}, ${hex.q}]`, { x: x - 25, y: y + 10 })\n            });\n        });\n    };\n    return Battle;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Battle);\n\n\n//# sourceURL=webpack://hexagon-board/./src/modules/Battle.ts?");

/***/ }),

/***/ "./src/modules/Camera.ts":
/*!*******************************!*\
  !*** ./src/modules/Camera.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar focus = function (center) {\n    var width = canvas.width, height = canvas.height;\n    __webpack_require__.g.cam = {\n        x: center.x - width / 2,\n        y: center.y - height / 2,\n        zoom: 1,\n        width: width,\n        height: height,\n    };\n};\nvar move = function (vector) {\n    __webpack_require__.g.cam = __assign(__assign({}, __webpack_require__.g.cam), { x: __webpack_require__.g.cam.x + vector.x, y: __webpack_require__.g.cam.y + vector.y });\n};\nvar zoom = function (event) {\n    var x = event.offsetX, y = event.offsetY, deltaY = event.deltaY;\n    var zoom = cam.zoom * (1 + 5 / 100 * Math.sign(deltaY));\n    __webpack_require__.g.cam = __assign(__assign({}, __webpack_require__.g.cam), { zoom: zoom });\n};\nvar inCam = function (res) {\n    if (typeof res === 'number') {\n        return (res * cam.zoom);\n    }\n    var _a = res, x = _a.x, y = _a.y, width = _a.width, height = _a.height, size = _a.size;\n    var target = {\n        x: (x - cam.x) * cam.zoom,\n        y: (y - cam.y) * cam.zoom,\n        width: width * cam.zoom,\n        height: height * cam.zoom,\n        size: size * cam.zoom\n    };\n    return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.objFilterNaN)(target);\n};\nvar mouseCam = function (event) {\n    return __assign(__assign({}, event), { x: (event.offsetX + cam.x * cam.zoom), y: (event.offsetY + cam.y * cam.zoom) });\n};\nvar Camera = {\n    focus: focus,\n    move: move,\n    zoom: zoom,\n    inCam: inCam,\n    mouseCam: mouseCam\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Camera);\n\n\n//# sourceURL=webpack://hexagon-board/./src/modules/Camera.ts?");

/***/ }),

/***/ "./src/modules/Canvas.ts":
/*!*******************************!*\
  !*** ./src/modules/Canvas.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getCenter\": () => (/* binding */ getCenter),\n/* harmony export */   \"resize\": () => (/* binding */ resize)\n/* harmony export */ });\nvar resize = function () {\n    var parent = canvas.parentElement;\n    if (parent) {\n        var _a = parent.getBoundingClientRect(), width = _a.width, height = _a.height;\n        canvas.width = width;\n        canvas.height = height;\n    }\n};\nvar getCenter = function () {\n    return {\n        x: canvas.width / 2,\n        y: canvas.height / 2\n    };\n};\nvar Canvas = {\n    resize: resize,\n    getCenter: getCenter\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);\n\n\n//# sourceURL=webpack://hexagon-board/./src/modules/Canvas.ts?");

/***/ }),

/***/ "./src/modules/Draw.ts":
/*!*****************************!*\
  !*** ./src/modules/Draw.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearScreen\": () => (/* binding */ clearScreen),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"drawHex\": () => (/* binding */ drawHex),\n/* harmony export */   \"drawRect\": () => (/* binding */ drawRect),\n/* harmony export */   \"drawText\": () => (/* binding */ drawText)\n/* harmony export */ });\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera */ \"./src/modules/Camera.ts\");\n\nvar A = (2 * Math.PI) / 6;\nvar clearScreen = function () {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n};\nvar drawHex = function (hex, color) {\n    if (color === void 0) { color = \"white\"; }\n    var _a = _Camera__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inCam(hex), x = _a.x, y = _a.y, size = _a.size;\n    ctx.beginPath();\n    for (var i = 0; i < 6; i++) {\n        ctx.lineTo(x + size * Math.sin(A * i), y + size * Math.cos(A * i));\n    }\n    ctx.closePath();\n    ctx.fillStyle = color;\n    ctx.fill();\n};\nvar drawRect = function (rect) {\n    var _a = _Camera__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inCam(rect), x = _a.x, y = _a.y, width = _a.width, height = _a.height;\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(x, y, width, height);\n};\nvar drawText = function (text, pos, color) {\n    if (color === void 0) { color = 'black'; }\n    var _a = _Camera__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inCam(pos), x = _a.x, y = _a.y;\n    ctx.font = '20px Arial';\n    ctx.fillStyle = color;\n    ctx.fillText(text, x, y);\n};\nvar Draw = {\n    clearScreen: clearScreen,\n    drawHex: drawHex,\n    drawRect: drawRect,\n    drawText: drawText\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draw);\n\n\n//# sourceURL=webpack://hexagon-board/./src/modules/Draw.ts?");

/***/ }),

/***/ "./src/modules/Hex.ts":
/*!****************************!*\
  !*** ./src/modules/Hex.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Hex = /** @class */ (function () {\n    function Hex(_a) {\n        var q = _a.q, r = _a.r, _b = _a.owner, owner = _b === void 0 ? null : _b, _c = _a.block, block = _c === void 0 ? false : _c;\n        this.q = q;\n        this.r = r;\n        this.owner = owner;\n        this.block = block;\n    }\n    return Hex;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hex);\n\n\n//# sourceURL=webpack://hexagon-board/./src/modules/Hex.ts?");

/***/ }),

/***/ "./src/modules/Keyboard.ts":
/*!*********************************!*\
  !*** ./src/modules/Keyboard.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Key\": () => (/* binding */ Key),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _a, _b;\nvar Key;\n(function (Key) {\n    Key[\"TOP\"] = \"top\";\n    Key[\"LEFT\"] = \"left\";\n    Key[\"RIGHT\"] = \"right\";\n    Key[\"DOWN\"] = \"down\";\n})(Key || (Key = {}));\nvar defaultKeyboardStatus = (_a = {},\n    _a[Key.TOP] = { isPress: false },\n    _a[Key.LEFT] = { isPress: false },\n    _a[Key.RIGHT] = { isPress: false },\n    _a[Key.DOWN] = { isPress: false },\n    _a);\nvar defaultKeyboardMapping = (_b = {},\n    _b[Key.TOP] = ['KeyW'],\n    _b[Key.LEFT] = ['KeyA'],\n    _b[Key.RIGHT] = ['KeyD'],\n    _b[Key.DOWN] = ['KeyS'],\n    _b);\nvar Keyboard = /** @class */ (function () {\n    function Keyboard() {\n    }\n    Keyboard.isPress = function (key) {\n        return this.keyboardStatus[key].isPress;\n    };\n    Keyboard.bindEvent = function () {\n        window.addEventListener('keydown', this.bindKey);\n        window.addEventListener('keyup', this.bindKey);\n    };\n    Keyboard.unbindEvent = function () {\n        window.removeEventListener('keydown', this.bindKey);\n        window.removeEventListener('keyup', this.bindKey);\n    };\n    Keyboard.bindKey = function (event) {\n        var type = event.type, keyCode = event.code;\n        var _key = Object.entries(Keyboard.keyboardMapping).find(function (_a) {\n            var _ = _a[0], value = _a[1];\n            return value.includes(keyCode);\n        });\n        if (_key) {\n            Keyboard.keyboardStatus[_key[0]].isPress = type === 'keydown';\n        }\n    };\n    Keyboard.keyboardMapping = defaultKeyboardMapping;\n    Keyboard.keyboardStatus = defaultKeyboardStatus;\n    return Keyboard;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);\n\n\n//# sourceURL=webpack://hexagon-board/./src/modules/Keyboard.ts?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);