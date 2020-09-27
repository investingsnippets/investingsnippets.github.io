webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/app/components/PostCard.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction PostCard(_ref) {\n  var _this = this;\n\n  var title = _ref.title,\n      description = _ref.description,\n      img = _ref.img,\n      author = _ref.author,\n      date = _ref.date,\n      topics = _ref.topics,\n      slug = _ref.slug;\n  return __jsx(\"article\", {\n    className: \"rounded w-full lg:flex mb-10\",\n    key: slug,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75\",\n    style: {\n      backgroundImage: \"url('\".concat(img, \"')\")\n    },\n    title: \"deit is very important\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"bg-white rounded px-4 flex flex-col justify-between leading-normal w-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"header\", {\n    className: \"mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/post/[slug]\",\n    as: \"/post/\".concat(slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"text-3xl lg:text-4xl font-bold text-orange-600 font-display\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 15\n    }\n  }, title))), __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: \"text-gray-700 text-base\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, description))), __jsx(\"div\", {\n    className: \"flex mt-3 flex-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"\".concat(author.image),\n    className: \"h-10 w-10 rounded-full mr-2 object-cover\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: \"font-semibold text-gray-700 text-sm capitalize\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, ' ', author.name, ' '), __jsx(\"p\", {\n    className: \"text-gray-600 text-xs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, ' ', date, ' ')), __jsx(\"div\", {\n    className: \"ml-10 mr-3 lg:flex flex-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, topics.map(function (_ref2) {\n    var id = _ref2.id,\n        name = _ref2.name;\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/topic/[topic]\",\n      as: \"/topic/\".concat(id),\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-600 mr-2 my-2\",\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }\n    }, name));\n  })))));\n}\n_c = PostCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcz85MWRiIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZyIsImF1dGhvciIsImRhdGUiLCJ0b3BpY3MiLCJzbHVnIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2UiLCJuYW1lIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsUUFBVCxPQUEyRTtBQUFBOztBQUFBLE1BQXZEQyxLQUF1RCxRQUF2REEsS0FBdUQ7QUFBQSxNQUFoREMsV0FBZ0QsUUFBaERBLFdBQWdEO0FBQUEsTUFBbkNDLEdBQW1DLFFBQW5DQSxHQUFtQztBQUFBLE1BQTlCQyxNQUE4QixRQUE5QkEsTUFBOEI7QUFBQSxNQUF0QkMsSUFBc0IsUUFBdEJBLElBQXNCO0FBQUEsTUFBaEJDLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUV4RixTQUNFO0FBQVMsYUFBUyxFQUFDLDhCQUFuQjtBQUFrRCxPQUFHLEVBQUVBLElBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyx3RUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxpQkFBVUwsR0FBVjtBQUFqQixLQUZUO0FBR0UsU0FBSyxFQUFDLHdCQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUssYUFBUyxFQUFDLDJFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsb0RBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsTUFBRSxrQkFBV0ksSUFBWCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsNkRBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixLQURILENBREYsQ0FERixDQURGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsV0FESCxDQURGLENBUkYsQ0FERixFQWVFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsWUFBS0UsTUFBTSxDQUFDSyxLQUFaLENBREw7QUFFRSxhQUFTLEVBQUMsMENBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGdEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxHQURILEVBRUdMLE1BQU0sQ0FBQ00sSUFGVixFQUdHLEdBSEgsQ0FERixFQU1FO0FBQUcsYUFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxHQURILEVBRUdMLElBRkgsRUFHRyxHQUhILENBTkYsQ0FMRixFQWlCRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXO0FBQUEsUUFBRUMsRUFBRixTQUFFQSxFQUFGO0FBQUEsUUFBTUYsSUFBTixTQUFNQSxJQUFOO0FBQUEsV0FDVixNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGdCQUFYO0FBQTRCLFFBQUUsbUJBQVlFLEVBQVosQ0FBOUI7QUFBZ0QsU0FBRyxFQUFFQSxFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsaUZBQWI7QUFBK0YsU0FBRyxFQUFFQSxFQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXlHRixJQUF6RyxDQURGLENBRFU7QUFBQSxHQUFYLENBREgsQ0FqQkYsQ0FmRixDQU5GLENBREY7QUFrREQ7S0FwRHVCVixRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdENhcmQoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGltZywgYXV0aG9yLCBkYXRlLCB0b3BpY3MsIHNsdWcgfSkge1xuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwicm91bmRlZCB3LWZ1bGwgbGc6ZmxleCBtYi0xMFwiIGtleT17c2x1Z30+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImgtNDggbGc6dy00OCBmbGV4LW5vbmUgYmctY292ZXIgdGV4dC1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIG9wYWNpdHktNzVcIlxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7aW1nfScpYH19XG4gICAgICAgIHRpdGxlPVwiZGVpdCBpcyB2ZXJ5IGltcG9ydGFudFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkIHB4LTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gbGVhZGluZy1ub3JtYWwgdy1mdWxsXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtdC0zIG1kOm10LTAgdGV4dC1ncmF5LTcwMCBmb250LWJvbGQgdGV4dC0yeGwgbWItMlwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnfWB9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNjAwIGZvbnQtZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0zIGZsZXgtcm93XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtgJHthdXRob3IuaW1hZ2V9YH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgbXItMiBvYmplY3QtY292ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGNhcGl0YWxpemVcIj4gXG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHthdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC14c1wiPiBcbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAge2RhdGV9XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBtci0zIGxnOmZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgIHt0b3BpY3MubWFwKCh7aWQsIG5hbWV9KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdG9waWMvW3RvcGljXVwiIGFzPXtgL3RvcGljLyR7aWR9YH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1zbSB0ZXh0LWdyYXktNjAwIG1yLTIgbXktMlwiIGtleT17aWR9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ })

})