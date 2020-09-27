webpackHotUpdate_N_E("pages/topic/[slug]",{

/***/ "./pages/topic/[slug].js":
/*!*******************************!*\
  !*** ./pages/topic/[slug].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Topic; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Image */ \"./components/Image.js\");\n/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var components_PostCardPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/PostCardPagination */ \"./components/PostCardPagination.js\");\nvar _jsxFileName = \"/app/pages/topic/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar __N_SSG = true;\nfunction Topic(_ref) {\n  var topic = _ref.topic,\n      posts = _ref.posts,\n      topics = _ref.topics;\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    topics: topics,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(components_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: topic.name,\n    description: topic.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    className: \"mb-5 text-5xl leading-none font-display font-semibold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, topic.name), __jsx(components_Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"mb-2\",\n    src: __webpack_require__(\"./content/assets sync recursive ^\\\\.\\\\/.*$?7de8\")(\"./\".concat(topic.image)),\n    previewSrc: __webpack_require__(\"./content/assets sync recursive ^\\\\.\\\\/.*$?8949\")(\"./\".concat(topic.image, \"\")),\n    alt: \"Automation\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }), __jsx(\"p\", {\n    className: \"mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, topic.description), __jsx(components_PostCardPagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    total: posts.length,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, posts));\n}\n_c = Topic;\n\nvar _c;\n\n$RefreshReg$(_c, \"Topic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9waWMvW3NsdWddLmpzPzU2NGEiXSwibmFtZXMiOlsiVG9waWMiLCJ0b3BpYyIsInBvc3RzIiwidG9waWNzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicmVxdWlyZSIsImltYWdlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFLZSxTQUFTQSxLQUFULE9BQXVDO0FBQUEsTUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLE1BQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxNQUFUQyxNQUFTLFFBQVRBLE1BQVM7QUFDcEQsU0FDRSxNQUFDLHlEQUFEO0FBQVEsVUFBTSxFQUFFQSxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLFNBQUssRUFBRUYsS0FBSyxDQUFDRyxJQURmO0FBRUUsZUFBVyxFQUFFSCxLQUFLLENBQUNJLFdBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUksYUFBUyxFQUFDLHVEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUVKLEtBQUssQ0FBQ0csSUFBN0UsQ0FMRixFQU1FLE1BQUMsd0RBQUQ7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLE9BQUcsRUFBRUUsdUVBQVEsWUFBd0JMLEtBQUssQ0FBQ00sS0FBL0IsRUFGZDtBQUdFLGNBQVUsRUFBRUQsdUVBQVEsWUFBd0JMLEtBQUssQ0FBQ00sS0FBL0IsTUFIckI7QUFJRSxPQUFHLEVBQUMsWUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFhRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sS0FBSyxDQUFDSSxXQURULENBYkYsRUFpQkUsTUFBQyxxRUFBRDtBQUFvQixTQUFLLEVBQUVILEtBQUssQ0FBQ00sTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixLQURILENBakJGLENBREY7QUF1QkQ7S0F4QnVCRixLIiwiZmlsZSI6Ii4vcGFnZXMvdG9waWMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiY29tcG9uZW50cy9JbWFnZVwiO1xuaW1wb3J0IFNFTyBmcm9tIFwiY29tcG9uZW50cy9TZW9cIjtcbmltcG9ydCBQb3N0Q2FyZFBhZ2luYXRpb24gZnJvbSBcImNvbXBvbmVudHMvUG9zdENhcmRQYWdpbmF0aW9uXCJcbmltcG9ydCB7IGdldFBvc3RzQnlUb3BpYyB9IGZyb20gXCJ1dGlscy9wb3N0c1wiO1xuaW1wb3J0IHsgZ2V0U29ydGVkVG9waWNzLCBnZXRUb3BpY3NTbHVncywgZ2V0VG9waWNCeVNsdWcgfSBmcm9tIFwidXRpbHMvdG9waWNzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9waWMoe3RvcGljLCBwb3N0cywgdG9waWNzfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdG9waWNzPXt0b3BpY3N9PlxuICAgICAgPFNFT1xuICAgICAgICB0aXRsZT17dG9waWMubmFtZX1cbiAgICAgICAgZGVzY3JpcHRpb249e3RvcGljLmRlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtNXhsIGxlYWRpbmctbm9uZSBmb250LWRpc3BsYXkgZm9udC1zZW1pYm9sZFwiPnt0b3BpYy5uYW1lfTwvaDE+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgY2xhc3NOYW1lPVwibWItMlwiXG4gICAgICAgIHNyYz17cmVxdWlyZShgLi4vLi4vY29udGVudC9hc3NldHMvJHt0b3BpYy5pbWFnZX1gKX1cbiAgICAgICAgcHJldmlld1NyYz17cmVxdWlyZShgLi4vLi4vY29udGVudC9hc3NldHMvJHt0b3BpYy5pbWFnZX0/bHFpcGApfVxuICAgICAgICBhbHQ9XCJBdXRvbWF0aW9uXCJcbiAgICAgIC8+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAge3RvcGljLmRlc2NyaXB0aW9ufVxuICAgICAgPC9wPiAgXG5cbiAgICAgIDxQb3N0Q2FyZFBhZ2luYXRpb24gdG90YWw9e3Bvc3RzLmxlbmd0aH0+XG4gICAgICAgIHtwb3N0c31cbiAgICAgIDwvUG9zdENhcmRQYWdpbmF0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gZ2V0VG9waWNzU2x1Z3MoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XG4gIGNvbnN0IHRvcGljID0gZ2V0VG9waWNCeVNsdWcoc2x1Zyk7XG4gIGNvbnN0IHBvc3RzID0gZ2V0UG9zdHNCeVRvcGljKHNsdWcpO1xuICBjb25zdCB0b3BpY3MgPSBnZXRTb3J0ZWRUb3BpY3MoKTtcblxuICByZXR1cm4geyBcbiAgICBwcm9wczoge1xuICAgICAgdG9waWMsXG4gICAgICBwb3N0cyxcbiAgICAgIHRvcGljc1xuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/topic/[slug].js\n");

/***/ })

})