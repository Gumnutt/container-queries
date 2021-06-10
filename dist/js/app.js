/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _click_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./click-event */ \"./src/js/click-event.js\");\n/* harmony import */ var _click_event__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_click_event__WEBPACK_IMPORTED_MODULE_1__);\n\n/* Your JS Code goes here */\n\n/* Demo JS */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9hcHAuanM/OTBlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQTs7QUFFQSIsImZpbGUiOiIuL3NyYy9qcy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnXG5cbi8qIFlvdXIgSlMgQ29kZSBnb2VzIGhlcmUgKi9cblxuLyogRGVtbyBKUyAqL1xuaW1wb3J0ICcuL2NsaWNrLWV2ZW50J1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/click-event.js":
/*!*******************************!*\
  !*** ./src/js/click-event.js ***!
  \*******************************/
/***/ (() => {

eval("const aside = document.getElementsByTagName('aside')[0];\ndocument.addEventListener('click', function (event) {\n  const current_day = event.target.closest('.day');\n  if (!event.target.closest('.day')) return;\n\n  if (aside.childNodes.length = 0) {\n    aside.appendChild(current_day.cloneNode(true));\n    current_day.classList.add('active');\n  } else {\n    aside.innerHTML = '';\n    aside.appendChild(current_day.cloneNode(true));\n    current_day.classList.add('active');\n  }\n}, false);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9jbGljay1ldmVudC5qcz8xMzU1Il0sIm5hbWVzIjpbImFzaWRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnRfZGF5IiwidGFyZ2V0IiwiY2xvc2VzdCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLG9CQUFULENBQThCLE9BQTlCLEVBQXVDLENBQXZDLENBQWQ7QUFDQUQsUUFBUSxDQUFDRSxnQkFBVCxDQUNFLE9BREYsRUFFRSxVQUFVQyxLQUFWLEVBQWlCO0FBQ2YsUUFBTUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsT0FBYixDQUFxQixNQUFyQixDQUFwQjtBQUNBLE1BQUksQ0FBQ0gsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBTCxFQUFtQzs7QUFFbkMsTUFBS1AsS0FBSyxDQUFDUSxVQUFOLENBQWlCQyxNQUFqQixHQUEwQixDQUEvQixFQUFtQztBQUNqQ1QsSUFBQUEsS0FBSyxDQUFDVSxXQUFOLENBQWtCTCxXQUFXLENBQUNNLFNBQVosQ0FBc0IsSUFBdEIsQ0FBbEI7QUFDQU4sSUFBQUEsV0FBVyxDQUFDTyxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixRQUExQjtBQUNELEdBSEQsTUFHTztBQUNMYixJQUFBQSxLQUFLLENBQUNjLFNBQU4sR0FBa0IsRUFBbEI7QUFDQWQsSUFBQUEsS0FBSyxDQUFDVSxXQUFOLENBQWtCTCxXQUFXLENBQUNNLFNBQVosQ0FBc0IsSUFBdEIsQ0FBbEI7QUFDQU4sSUFBQUEsV0FBVyxDQUFDTyxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixRQUExQjtBQUNEO0FBQ0YsQ0FkSCxFQWVFLEtBZkYiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhc2lkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhc2lkZScpWzBdXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAnY2xpY2snLFxuICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBjdXJyZW50X2RheSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGF5JylcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGF5JykpIHJldHVyblxuXG4gICAgaWYgKChhc2lkZS5jaGlsZE5vZGVzLmxlbmd0aCA9IDApKSB7XG4gICAgICBhc2lkZS5hcHBlbmRDaGlsZChjdXJyZW50X2RheS5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgICBjdXJyZW50X2RheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhc2lkZS5pbm5lckhUTUwgPSAnJ1xuICAgICAgYXNpZGUuYXBwZW5kQ2hpbGQoY3VycmVudF9kYXkuY2xvbmVOb2RlKHRydWUpKVxuICAgICAgY3VycmVudF9kYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH0sXG4gIGZhbHNlXG4pXG4iXSwiZmlsZSI6Ii4vc3JjL2pzL2NsaWNrLWV2ZW50LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/click-event.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vc3JjL3Njc3MvYXBwLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;