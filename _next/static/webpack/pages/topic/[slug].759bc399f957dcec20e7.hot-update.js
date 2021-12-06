webpackHotUpdate_N_E("pages/topic/[slug]",{

/***/ "./pages/topic/[slug].js":
/*!*******************************!*\
  !*** ./pages/topic/[slug].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Topic; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Image */ \"./components/Image.js\");\n/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_PostCardPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/PostCardPagination */ \"./components/PostCardPagination.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/app/pages/topic/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/prop-types */\n\n/* eslint-disable import/no-dynamic-require */\n\n/* eslint-disable global-require */\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Topic(_ref) {\n  var topic = _ref.topic,\n      posts = _ref.posts,\n      tags = _ref.tags,\n      sortedTopics = _ref.sortedTopics,\n      allTopics = _ref.allTopics;\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    tags: tags,\n    sortedTopics: sortedTopics,\n    allTopics: allTopics,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(components_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: topic.name,\n    description: topic.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(\"p\", {\n    className: \"text-sm mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/\",\n    key: \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"\",\n    key: \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"Home\")), ' > ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/topic/\".concat(topic.id),\n    key: topic.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"\",\n    key: topic.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, topic.name))), __jsx(\"div\", {\n    className: \"mb-4 flex text-center content-center flex-wrap place-items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: \"mx-auto\",\n    src: __webpack_require__(\"./content/assets sync recursive ^\\\\.\\\\/.*$?7de8\")(\"./\".concat(topic.image)),\n    alt: \"Topic Image - \".concat(topic.name),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  })), __jsx(\"p\", {\n    className: \"mb-3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, topic.description), __jsx(\"div\", {\n    className: \"border border-white mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }), __jsx(components_PostCardPagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    total: posts.length,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, posts));\n}\n_c = Topic;\n\nvar _c;\n\n$RefreshReg$(_c, \"Topic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9waWMvW3NsdWddLmpzPzU2NGEiXSwibmFtZXMiOlsiVG9waWMiLCJ0b3BpYyIsInBvc3RzIiwidGFncyIsInNvcnRlZFRvcGljcyIsImFsbFRvcGljcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImlkIiwicmVxdWlyZSIsImltYWdlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1lLFNBQVNBLEtBQVQsT0FBOEQ7QUFBQSxNQUE5Q0MsS0FBOEMsUUFBOUNBLEtBQThDO0FBQUEsTUFBdkNDLEtBQXVDLFFBQXZDQSxLQUF1QztBQUFBLE1BQWhDQyxJQUFnQyxRQUFoQ0EsSUFBZ0M7QUFBQSxNQUExQkMsWUFBMEIsUUFBMUJBLFlBQTBCO0FBQUEsTUFBWkMsU0FBWSxRQUFaQSxTQUFZO0FBQzNFLFNBQ0UsTUFBQyx5REFBRDtBQUFRLFFBQUksRUFBRUYsSUFBZDtBQUFvQixnQkFBWSxFQUFFQyxZQUFsQztBQUFnRCxhQUFTLEVBQUVDLFNBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsU0FBSyxFQUFFSixLQUFLLENBQUNLLElBRGY7QUFFRSxlQUFXLEVBQUVMLEtBQUssQ0FBQ00sV0FGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsT0FBRyxFQUFDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxFQUFiO0FBQWdCLE9BQUcsRUFBQyxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixFQUlHLEtBSkgsRUFLRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxtQkFBWU4sS0FBSyxDQUFDTyxFQUFsQixDQUFWO0FBQWtDLE9BQUcsRUFBRVAsS0FBSyxDQUFDTyxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsRUFBYjtBQUFnQixPQUFHLEVBQUVQLEtBQUssQ0FBQ08sRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ1AsS0FBSyxDQUFDSyxJQUF0QyxDQURGLENBTEYsQ0FORixFQWdCRTtBQUFLLGFBQVMsRUFBQyxtRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGFBQVMsRUFBQyxTQURaO0FBRUUsT0FBRyxFQUFFRyx1RUFBUSxZQUF3QlIsS0FBSyxDQUFDUyxLQUEvQixFQUZkO0FBR0UsT0FBRywwQkFBbUJULEtBQUssQ0FBQ0ssSUFBekIsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsRUE4QkU7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLEtBQUssQ0FBQ00sV0FEVCxDQTlCRixFQWtDRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENGLEVBb0NFLE1BQUMscUVBQUQ7QUFBb0IsU0FBSyxFQUFFTCxLQUFLLENBQUNTLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsS0FESCxDQXBDRixDQURGO0FBMENEO0tBM0N1QkYsSyIsImZpbGUiOiIuL3BhZ2VzL3RvcGljL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1keW5hbWljLXJlcXVpcmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJjb21wb25lbnRzL0ltYWdlXCI7XG5pbXBvcnQgU0VPIGZyb20gXCJjb21wb25lbnRzL1Nlb1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFBvc3RDYXJkUGFnaW5hdGlvbiBmcm9tIFwiY29tcG9uZW50cy9Qb3N0Q2FyZFBhZ2luYXRpb25cIlxuaW1wb3J0IHtkZWZhdWx0IGFzIE5leHRJbWFnZX0gZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBnZXRTb3J0ZWRUYWdzIH0gZnJvbSBcInV0aWxzL3RhZ3NcIjtcbmltcG9ydCB7IGdldFBvc3RzQnlUb3BpYyB9IGZyb20gXCJ1dGlscy9wb3N0c1wiO1xuaW1wb3J0IHsgZ2V0U29ydGVkVG9waWNzLCBnZXRUb3BpY1NsdWdzLCBnZXRUb3BpY0J5U2x1ZywgZ2V0QWxsVG9waWNzIH0gZnJvbSBcInV0aWxzL3RvcGljc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcGljKHt0b3BpYywgcG9zdHMsIHRhZ3MsIHNvcnRlZFRvcGljcywgYWxsVG9waWNzfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFncz17dGFnc30gc29ydGVkVG9waWNzPXtzb3J0ZWRUb3BpY3N9IGFsbFRvcGljcz17YWxsVG9waWNzfT5cbiAgICAgIDxTRU9cbiAgICAgICAgdGl0bGU9e3RvcGljLm5hbWV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXt0b3BpYy5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWItNFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGtleT0naG9tZSc+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPScnIGtleT0naG9tZSc+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7JyA+ICd9XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvdG9waWMvJHt0b3BpYy5pZH1gfSBrZXk9e3RvcGljLmlkfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9Jycga2V5PXt0b3BpYy5pZH0+e3RvcGljLm5hbWV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IHRleHQtY2VudGVyIGNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcCBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPE5leHRJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG9cIlxuICAgICAgICAgIHNyYz17cmVxdWlyZShgLi4vLi4vY29udGVudC9hc3NldHMvJHt0b3BpYy5pbWFnZX1gKX1cbiAgICAgICAgICBhbHQ9e2BUb3BpYyBJbWFnZSAtICR7dG9waWMubmFtZX1gfVxuICAgICAgICAvPlxuICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0b1wiXG4gICAgICAgICAgc3JjPXtyZXF1aXJlKGAuLi8uLi9jb250ZW50L2Fzc2V0cy8ke3RvcGljLmltYWdlfWApfVxuICAgICAgICAgIHByZXZpZXdTcmM9e3JlcXVpcmUoYC4uLy4uL2NvbnRlbnQvYXNzZXRzLyR7dG9waWMuaW1hZ2V9P2xxaXBgKX1cbiAgICAgICAgICBhbHQ9e2BUb3BpYyBJbWFnZSAtICR7dG9waWMubmFtZX1gfVxuICAgICAgICAvPiAqL31cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIHt0b3BpYy5kZXNjcmlwdGlvbn1cbiAgICAgIDwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXdoaXRlIG1iLTRcIiAvPlxuXG4gICAgICA8UG9zdENhcmRQYWdpbmF0aW9uIHRvdGFsPXtwb3N0cy5sZW5ndGh9PlxuICAgICAgICB7cG9zdHN9XG4gICAgICA8L1Bvc3RDYXJkUGFnaW5hdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldFRvcGljU2x1Z3MoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XG4gIGNvbnN0IHRvcGljID0gZ2V0VG9waWNCeVNsdWcoc2x1Zyk7XG4gIGNvbnN0IHBvc3RzID0gZ2V0UG9zdHNCeVRvcGljKHNsdWcpO1xuICBcbiAgY29uc3QgdGFncyA9IGdldFNvcnRlZFRhZ3MoKTtcbiAgY29uc3Qgc29ydGVkVG9waWNzID0gZ2V0U29ydGVkVG9waWNzKCk7XG4gIGNvbnN0IGFsbFRvcGljcyA9IGdldEFsbFRvcGljcygpO1xuXG4gIHJldHVybiB7IFxuICAgIHByb3BzOiB7XG4gICAgICB0b3BpYyxcbiAgICAgIHBvc3RzLFxuICAgICAgdGFncyxcbiAgICAgIHNvcnRlZFRvcGljcyxcbiAgICAgIGFsbFRvcGljc1xuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/topic/[slug].js\n");

/***/ })

})