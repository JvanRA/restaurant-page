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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFooter\": () => (/* binding */ loadFooter)\n/* harmony export */ });\nfunction createFooter() {\n    const footer = document.createElement('footer');\n    const creator = document.createElement('p');\n    const credit = document.createElement('p');\n    creator.classList.add('creator');\n    credit.classList.add('credit');\n    creator.textContent = 'Created by Ivan Añora';\n    credit.textContent = 'Image from Unsplash by Hement Latawa ';\n    footer.append(creator);\n    footer.append(credit);\n\n    return footer;\n}\n\nfunction loadFooter() {\n    const content = document.querySelector('#content');\n    content.append(createFooter());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction createHome() {\n    const main1 = document.createElement('main');\n    main1.classList.add('main-left');\n    const restaurantName = document.createElement('h1');\n    restaurantName.textContent = 'Welcome to The Pizzeria';\n    main1.append(restaurantName);\n    const description  = document.createElement('p');\n    description.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error minima hic beatae cum incidunt fuga eos molestiae ipsum rem nulla sunt, atque voluptates molestias. Nisi sit placeat beatae voluptatibus maxime. Illum laborum, aut tenetur sequi explicabo distinctio, minima ex cumque aperiam at, eos cum ab suscipit eveniet magnam nihil nemo quis impedit sapiente assumenda commodi officia nisi! Facere, perspiciatis sint.'\n    main1.append(description);\n\n    return main1;\n}\n\nfunction loadHome() {\n    const main = document.querySelector('.main');\n    main.append(createHome());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\nfunction createHeader() {\n    const header = document.createElement('header');\n    const restaurantName = document.createElement('h1');\n    const div = document.createElement('div');\n    const menu = document.createElement('p');\n    const contact = document.createElement('p');\n\n    restaurantName.textContent = 'The Pizzeria';\n    menu.textContent = 'Menu';\n    contact.textContent = 'Contact';\n    header.append(restaurantName);\n    header.append(div);\n    div.append(menu);\n    div.append(contact);\n\n    return header;\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.classList.add('main');\n\n    return main;\n}\n\nfunction startWebsite() {\n    const content = document.getElementById('content');\n    content.append(createHeader());\n    content.append(createMain());\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n    (0,_footer_js__WEBPACK_IMPORTED_MODULE_0__.loadFooter)();\n}\n\nstartWebsite();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 			// no module.id needed
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