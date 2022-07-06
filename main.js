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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadAbout\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction createAbout() {\n    const main3 = document.createElement('main');\n    main3.classList.add('main-about');\n    const restaurantContact = document.createElement('h1');\n    restaurantContact.textContent = 'Contact us';\n    main3.append(restaurantContact);\n    const restaurantAddress = document.createElement('div');\n    restaurantAddress.classList.add('restaurant-address');\n    restaurantAddress.innerHTML = \n    `<div class=\"contact\">\n        <p>Manhattan, NY 10036, United States</p>\n        <p>Mon-Fri: 8am-8pm<br>Fri-Sun: 8am-11pm</p>\n        <p>(111)-222-333</p>\n    </div>\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11632.015290779787!2d-73.993836691507!3d40.75828457138387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sph!4v1657092336992!5m2!1sen!2sph\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>`;\n    main3.append(restaurantAddress);\n\n    return main3;\n}\n\nfunction loadAbout() {\n    const main = document.querySelector('.main');\n    main.textContent = '';\n    main.appendChild(createAbout());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction createHome() {\n    const main1 = document.createElement('main');\n    main1.classList.add('main-left');\n    const restaurantName = document.createElement('h1');\n    restaurantName.textContent = 'Welcome to The Pizzeria';\n    main1.append(restaurantName);\n    const description  = document.createElement('p');\n    description.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error minima hic beatae cum incidunt fuga eos molestiae ipsum rem nulla sunt, atque voluptates molestias. Nisi sit placeat beatae voluptatibus maxime. Illum laborum, aut tenetur sequi explicabo distinctio, minima ex cumque aperiam at, eos cum ab suscipit eveniet magnam nihil nemo quis impedit sapiente assumenda commodi officia nisi! Facere, perspiciatis sint.'\n    main1.append(description);\n\n    return main1;\n}\n\nfunction loadHome() {\n    const main = document.querySelector('.main');\n    main.textContent = '';\n    main.appendChild(createHome());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement('header');\n    const restaurantName = document.createElement('h1');\n    restaurantName.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__.loadHome);\n    const div = document.createElement('div');\n    const menu = document.createElement('p');\n    menu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu);\n    const about = document.createElement('p');\n    about.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_3__.loadAbout);\n    restaurantName.textContent = 'The Pizzeria';\n    menu.textContent = 'Menu';\n    about.textContent = 'About';\n    header.append(restaurantName);\n    header.append(div);\n    div.append(menu);\n    div.append(about);\n\n    return header;\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.classList.add('main');\n\n    return main;\n}\n\nfunction startWebsite() {\n    const content = document.getElementById('content');\n    content.append(createHeader());\n    content.append(createMain());\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n    (0,_footer__WEBPACK_IMPORTED_MODULE_0__.loadFooter)();\n}\n\nstartWebsite();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction createItem() {\n    const item = document.createElement('div');\n    item.classList.add('item');\n    const itemName = document.createElement('h1');\n    itemName.classList.add('item-name');\n    itemName.textContent = 'Lorem Ipsum Pizza';\n    item.append(itemName);\n    const description  = document.createElement('p');\n    description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';\n    item.append(description);\n\n    return item;\n}\n\nfunction createMenu() {\n    const main2 = document.createElement('main');\n    main2.classList.add('main-menu');\n    const restaurantMenu = document.createElement('h1');\n    restaurantMenu.textContent = 'Menu';\n    main2.append(restaurantMenu);\n    const bestSellers = document.createElement('div');\n    bestSellers.classList.add('best-sellers');\n    main2.append(bestSellers);\n    for(let i = 0; i < 6; i++) {\n        bestSellers.append(createItem());\n    }\n\n    return main2;\n}\n\nfunction loadMenu() {\n    const main = document.querySelector('.main');\n    main.textContent = '';\n    main.appendChild(createMenu());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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