webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Subscribe.js":
/*!*********************************!*\
  !*** ./components/Subscribe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/app/components/Subscribe.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Subscribe = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Subscribe, _Component);\n\n  var _super = _createSuper(Subscribe);\n\n  function Subscribe(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Subscribe);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"submitForm\", function (e) {\n      e.preventDefault(); // window.open('https://tinyletter.com/investingsnippets', 'popupwindow', 'scrollbars=yes,width=800,height=600');\n\n      return true;\n    });\n\n    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Subscribe, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"content\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 7\n        }\n      }, __jsx(\"h5\", {\n        className: \"font-semibold text-lg uppercase text-gray-700 mb-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }\n      }, \" Subscribe \"), __jsx(\"p\", {\n        className: \"text-gray-600\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }\n      }, \"Receive the next blog article directly to your email!\"), __jsx(\"form\", {\n        action: \"https://tinyletter.com/investingsnippets\",\n        method: \"post\",\n        target: \"popupwindow\",\n        onSubmit: this.submitForm,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }\n      }, __jsx(\"input\", {\n        type: \"email\",\n        name: \"email\",\n        id: \"tlemail\",\n        title: \"Email\",\n        required: true,\n        placeholder: \"your email address\",\n        className: \"text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border outline-none\" // disabled\n        ,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }\n      }), __jsx(\"input\", {\n        type: \"hidden\",\n        value: \"1\",\n        name: \"embed\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }\n      }), __jsx(\"button\", {\n        type: \"submit\",\n        className: \"px-4 py-2 bg-orange-600 text-gray-200 rounded-b w-full capitalize tracking-wide\" // disabled\n        ,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }\n      }, \"Subscribe\")), __jsx(\"p\", {\n        className: \"text-gray-600 pt-2 text-xs text-center\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }\n      }, \"or, follow the\", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"/feed.xml\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 34\n        }\n      }, \"RSS feed\")), \"!\"));\n    }\n  }]);\n\n  return Subscribe;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subscribe);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWJzY3JpYmUuanM/YTZjZCJdLCJuYW1lcyI6WyJTdWJzY3JpYmUiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEZvcm0iLCJiaW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUdNQSxTOzs7OztBQUNKLHFCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOOztBQURrQixxTkFLUCxVQUFBQyxDQUFDLEVBQUk7QUFDaEJBLE9BQUMsQ0FBQ0MsY0FBRixHQURnQixDQUVoQjs7QUFDQSxhQUFPLElBQVA7QUFDRCxLQVRtQjs7QUFFbEIsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQix5R0FBbEI7QUFGa0I7QUFHbkI7Ozs7NkJBUVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsb0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUVBRkYsRUFLRTtBQUNFLGNBQU0sRUFBQywwQ0FEVDtBQUVFLGNBQU0sRUFBQyxNQUZUO0FBR0UsY0FBTSxFQUFDLGFBSFQ7QUFJRSxnQkFBUSxFQUFFLEtBQUtELFVBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNRTtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsWUFBSSxFQUFDLE9BRlA7QUFHRSxVQUFFLEVBQUMsU0FITDtBQUlFLGFBQUssRUFBQyxPQUpSO0FBS0UsZ0JBQVEsTUFMVjtBQU1FLG1CQUFXLEVBQUMsb0JBTmQ7QUFPRSxpQkFBUyxFQUFDLDRGQVBaLENBUUU7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkYsRUFnQkU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUMsR0FBM0I7QUFBK0IsWUFBSSxFQUFDLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFoQkYsRUFpQkU7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFTLEVBQUMsaUZBRlosQ0FHRTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJGLENBTEYsRUE4QkU7QUFBRyxpQkFBUyxFQUFDLHdDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUcsR0FGSCxFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXZCLENBSEYsTUE5QkYsQ0FERjtBQXVDRDs7OztFQXBEcUJFLCtDOztBQXVEVE4sd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1YnNjcmliZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5cbmNsYXNzIFN1YnNjcmliZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3VibWl0Rm9ybSA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyB3aW5kb3cub3BlbignaHR0cHM6Ly90aW55bGV0dGVyLmNvbS9pbnZlc3RpbmdzbmlwcGV0cycsICdwb3B1cHdpbmRvdycsICdzY3JvbGxiYXJzPXllcyx3aWR0aD04MDAsaGVpZ2h0PTYwMCcpO1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Y29udGVudD5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1sZyB1cHBlcmNhc2UgdGV4dC1ncmF5LTcwMCBtYi0yXCI+IFN1YnNjcmliZSA8L2g1PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgUmVjZWl2ZSB0aGUgbmV4dCBibG9nIGFydGljbGUgZGlyZWN0bHkgdG8geW91ciBlbWFpbCFcbiAgICAgICAgPC9wPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vdGlueWxldHRlci5jb20vaW52ZXN0aW5nc25pcHBldHNcIlxuICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgIHRhcmdldD1cInBvcHVwd2luZG93XCJcbiAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwidGxlbWFpbFwiXG4gICAgICAgICAgICB0aXRsZT1cIkVtYWlsXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXIgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGJnLWdyYXktMTAwIHJvdW5kZWQtdCBob3ZlcjpvdXRsaW5lLW5vbmUgcC0yIHctZnVsbCBtdC00IGJvcmRlciBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgLy8gZGlzYWJsZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIxXCIgbmFtZT1cImVtYmVkXCIgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1vcmFuZ2UtNjAwIHRleHQtZ3JheS0yMDAgcm91bmRlZC1iIHctZnVsbCBjYXBpdGFsaXplIHRyYWNraW5nLXdpZGVcIlxuICAgICAgICAgICAgLy8gZGlzYWJsZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJzY3JpYmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHB0LTIgdGV4dC14cyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIG9yLCBmb2xsb3cgdGhlIFxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9mZWVkLnhtbFwiPjxhPlJTUyBmZWVkPC9hPjwvTGluaz5cbiAgICAgICAgICAhXG4gICAgICAgIDwvcD5cbiAgICAgIDwvY29udGVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Subscribe.js\n");

/***/ })

})