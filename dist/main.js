/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function createHeader() {\n    const header = document.createElement('header');\n    const restaurantName = document.createElement('h1');\n    const div = document.createElement('div');\n    const menu = document.createElement('p');\n    const contact = document.createElement('p');\n\n    restaurantName.textContent = 'Pizzeria';\n    menu.textContent = 'Menu';\n    contact.textContent = 'Contact';\n    header.appendChild(restaurantName);\n    header.appendChild(div);\n    div.appendChild(menu);\n    div.appendChild(contact);\n\n    return header;\n}\n\nfunction startWebsite() {\n    const content = document.getElementById('content');\n    content.append(createHeader());\n}\n\nstartWebsite();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;