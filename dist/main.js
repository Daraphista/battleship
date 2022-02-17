/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  /* height: 100%; */\\n}\\n \\nbody {\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  height: fit-content;\\n}\\n\\n/* ----------------------------- MAIN ----------------------------- */\\n\\nmain {\\n  height: 100%;\\n  width: 80%;\\n}\\n\\nmain .gameboard-container {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n\\n.square {\\n  height: 2rem;\\n  width: 2rem;\\n}\\n\\n.gameboard {\\n  border-collapse: collapse;\\n  border: 1px solid rgb(138, 138, 138);\\n}\\n\\n.gameboard-container .square {\\n  position: relative;\\n  border: 1px solid rgb(138, 138, 138);\\n  cursor: pointer;\\n}\\n\\n.gameboard-container .square.filled {\\n  background-color: rgb(63, 63, 63);\\n  border: none;\\n}\\n\\n.gameboard .square:hover {\\n  box-shadow: inset 0px 0px 0px 1px black;\\n}\\n\\n.gameboard .square:active {\\n  box-shadow: inset 0px 0px 0px 2px black;\\n}\\n\\n.gameboard .square.hit {\\n  box-shadow: inset 0px 0px 0px 1px rgb(255, 86, 86);\\n  pointer-events: none;\\n}\\n\\n.gameboard .square.drag-over {\\n  background-color: rgb(87, 87, 87);\\n}\\n\\n.ships {\\n  width: 5rem;\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: .5rem;\\n  flex-basis: auto;\\n}\\n\\n.ship {\\n  background-color: rgb(63, 63, 63);\\n}\\n\\n.ship.placed {\\n  position: absolute;\\n  top: -.1rem;\\n  /* z-index: -1; */\\n}\\n\\n.ship .square {\\n  border: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DOM = (() => {\n  const loadGameBoard = (gameboard, elementSelector) => {\n    const gameboardContainer = document.querySelector(elementSelector);\n    gameboard.squares.forEach(arr => {\n      const row = document.createElement('tr');\n      gameboardContainer.appendChild(row);\n      arr.forEach(squareObj => {\n        const square = document.createElement('th');\n        row.appendChild(square);\n        square.classList.add('square');\n        square.squareObj = squareObj;\n        square.dataset.x = squareObj.x;\n        square.dataset.y = squareObj.y;\n        square.gameboardObj = gameboard;\n      });\n    });\n  };\n  const displayShipsOnGameboard = (squares) => {\n    squares.forEach(square => {\n      if (square.squareObj.shipSquare !== null) {\n        square.classList.add('filled');\n      }\n    });\n  };\n  const clickAttacks = () => {\n    const squares = Array.from(document.querySelectorAll('.gameboard .square'));\n    squares.forEach(square => square.addEventListener('click', () => {\n      const {x} = square.dataset;\n      const {y} = square.dataset;\n      square.gameboardObj.recieveAttack(x, y);\n      square.classList.add('hit');\n    }));\n  };\n  const displayShips = (ships, elementSelector) => {\n    const container = document.querySelector(elementSelector);\n    Object.keys(ships).forEach(key => {\n      const table = document.createElement('table');\n      container.appendChild(table);\n      table.classList.add('ship');\n      table.dataset.length = ships[key].shipLength;\n      table.id = key.toLowerCase();\n      table.shipObj = ships[key];\n      \n      ships[key].squares.forEach(() => {\n        const shipRow = document.createElement('tr');\n        table.appendChild(shipRow);\n        const shipSquare = document.createElement('th');\n        shipRow.appendChild(shipSquare);\n        shipSquare.classList.add('square');\n      });\n    });\n  };\n  const shipFits = (shipLength, shipPosition) => (shipLength - 1) + shipPosition <= 9;\n  const noShipNearby = (ship, x, y) => {\n    const adjacentSquares = [];\n    \n    const shipLength = Number(ship.dataset.length);\n    let index = -1;\n    while (index <= shipLength) {\n      adjacentSquares.push(document.querySelector(`[data-x=\"${x + index}\"][data-y=\"${y - 1}\"]`));\n      if(index === -1 || index === shipLength) {\n        adjacentSquares.push(document.querySelector(`[data-x=\"${x + index}\"][data-y=\"${y}\"]`));\n      }\n      adjacentSquares.push(document.querySelector(`[data-x=\"${x + index}\"][data-y=\"${y + 1}\"]`));\n      index += 1;\n    }\n\n    return adjacentSquares.every(adjacentSquare => {\n      let result;\n      if(adjacentSquare === null) {\n        result = true;\n      } else if(adjacentSquare !== null) {\n        result = !adjacentSquare.classList.contains('filled');\n      }\n      return result;\n    });\n  };\n  const handleDragAndDrop = () => {\n    const shipElements = Array.from(document.querySelectorAll('.ship'));\n    shipElements.forEach(shipElement => {\n      shipElement.draggable = 'true';\n      shipElement.addEventListener('dragstart', e => {\n        const selector = `.${shipElement.parentElement.classList[1]} #${shipElement.id}`;\n        e.dataTransfer.setData('text', selector);\n        e.currentTarget.style.opacity = '0.4';\n      });\n      shipElement.addEventListener('dragend', e => {\n        e.currentTarget.style.opacity = '1';\n      });\n    });\n\n    const squareElements = Array.from(document.querySelectorAll('.gameboard .square'));\n    squareElements.forEach(squareElement => {\n      squareElement.addEventListener('dragover', e => {\n        e.target.classList.add('drag-over');\n        e.preventDefault();\n      });\n      squareElement.addEventListener('dragleave', e => {\n        e.target.classList.remove('drag-over');\n      });\n      squareElement.addEventListener('drop', e => {\n        e.target.classList.remove('drag-over');\n        e.preventDefault();\n\n        const selector = e.dataTransfer.getData('text');\n        const ship = document.querySelector(selector);\n        const {gameboardObj} = squareElement;\n        const x = Number(squareElement.dataset.x);\n        const y = Number(squareElement.dataset.y);\n        \n        const shipLength = Number(ship.dataset.length);\n        const shipPosition = Number(squareElement.dataset.x);\n        \n        if (shipFits(shipLength, shipPosition) && noShipNearby(ship, x, y)) { // vertically\n          e.target.appendChild(ship);\n          ship.classList.add('placed');\n          const {shipObj} = ship;\n          gameboardObj.placeShip(shipObj, x, y);\n          displayShipsOnGameboard(squareElements);\n        }\n        \n      });\n    });\n  };\n  const load = (GameboardObj1, GameboardObj2, ships1, ships2) => {\n    loadGameBoard(GameboardObj1, '.gameboard.player1');\n    loadGameBoard(GameboardObj2, '.gameboard.player2');\n\n    displayShips(ships1, '.ships.player1');\n    handleDragAndDrop();\n\n    clickAttacks();\n  };\n\n  return { load };\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\n\n//# sourceURL=webpack://battleship/./src/DOM.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Square = (x, y) => {\n  const ShipObj = null;\n  const shipSquare = null;\n  const isHit = false;\n  return { ShipObj, shipSquare, isHit, x, y };\n};\nconst createGameboardSquares = (width, height) => {\n  const arr = [];\n  let i = 0;\n  while ( i < width ) {\n    const heightArr = [];\n    arr.push(heightArr);\n    let j = 0;\n    while ( j < height ) {\n      heightArr.push(Square(i, j));\n      j += 1;\n    }\n    i += 1;\n  }\n  return arr;\n};\n\nconst Gameboard = () => {\n  const squares = createGameboardSquares(10, 10);\n  const ships = [];\n\n  const placeShip = (Ship, x, y) => {\n    ships.push(Ship);\n\n    squares[x][y].ShipObj = Ship;\n    const shipSquare = Ship.squares[0];\n    squares[x][y].shipSquare = shipSquare;\n\n    let index = 1;\n    let squareIndex = x;\n    while ( index < Ship.shipLength ) {\n      squareIndex += 1;\n      squares[squareIndex][y].shipSquare = Ship.squares[index];\n      index += 1;\n    }\n  };\n\n  const recieveAttack = (x, y) => {\n    const square = squares[x][y];\n    square.isHit = true;\n\n    if(square.ShipObj !== null) {\n      const {ShipObj} = square;\n      const index = ShipObj.squares.indexOf(square.shipSquare);\n      ShipObj.hit(index);\n    }\n  };\n\n  const checkShip = (ship) => (ship.isSunk);\n  const allSunk = () => ships.every(checkShip);\n\n  return { squares, placeShip, recieveAttack, allSunk};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ \"./src/players.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\n\n\n\nconst createShips = () => {\n  const Carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(5);\n  const Battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(4);\n  const Cruiser = (0,_ships__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3);\n  const Submarine = (0,_ships__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3);\n  const Destroyer = (0,_ships__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(2);\n\n  return { Carrier, Battleship, Cruiser, Submarine, Destroyer };\n};\n\nconst ships1 = createShips();\nconst ships2 = createShips();\n\nconst Gameboard1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst Gameboard2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst Player1 = (0,_players__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Gameboard2);\nconst Player2 = (0,_players__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Gameboard1);\n\n_DOM__WEBPACK_IMPORTED_MODULE_4__[\"default\"].load(Gameboard1, Gameboard2, ships1);\n\n// const gameLoop = () => {\n//   const populateGame();\n//   const playGame();\n//   const displayWinner();\n// }\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Robot\": () => (/* binding */ Robot),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (enemyGameboard) => {\n  const attacks = [];\n\n  const sendAttack = (x, y) => {\n    let result;\n    const attack = [x, y];\n    if( !attacks.includes(attack) ) {\n      enemyGameboard.recieveAttack(x, y);\n      attacks.push(attack);\n      result = 0;\n    } \n    if (attacks.includes(attack)) {\n      result = 1;\n    }\n    return result;\n  };\n\n  return {enemyGameboard, sendAttack};\n};\n\nconst Robot = (enemyGameboard) => {\n  const attacks = [];\n  const randomNumber = (max) => Math.floor(Math.random() * max);\n  const sendAttack = () => {\n    let result;\n    const x = randomNumber(10);\n    const y = randomNumber(10);\n    const attack = [x, y];\n    if(!attacks.includes(attack)) {\n      enemyGameboard.recieveAttack(x, y);\n      attacks.push(attack);\n      result = 0;\n    } \n    if (attacks.includes(attack)) {\n      result = 1;\n    }\n    return result;\n  };\n\n  return { enemyGameboard, sendAttack };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/players.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst shipSquare = () => {\n  const isHit = false;\n  const isShipSquare = true;\n  return { isHit, isShipSquare };\n};\n\nconst createSquares = (length) => {\n  let i = length;\n  const squares = [];\n    while (i > 0) {\n      squares.push(shipSquare());\n      i -= 1;\n    }\n    return squares;\n};\n\nconst Ship = (length) => {\n  const squares = createSquares(length);\n\n  const shipLength = squares.length;\n\n  const hit = (squareNumber) => {\n    const square = squares[squareNumber];\n    square.isHit = true;\n    return 0;\n  };\n\n  const isSunk = () => squares.every(square => square.isHit === true);\n\nreturn { shipLength, squares, hit, isSunk };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;