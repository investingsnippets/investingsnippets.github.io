webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ \"./components/Image.js\");\n/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/helpers */ \"./utils/helpers.js\");\nvar _jsxFileName = \"/app/components/PostCard.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction PostCard(_ref) {\n  var _this = this;\n\n  var title = _ref.title,\n      description = _ref.description,\n      img = _ref.img,\n      author = _ref.author,\n      date = _ref.date,\n      tags = _ref.tags,\n      topic = _ref.topic,\n      slug = _ref.slug;\n\n  var _getSiteMetaData = Object(utils_helpers__WEBPACK_IMPORTED_MODULE_4__[\"getSiteMetaData\"])(),\n      siteUrl = _getSiteMetaData.siteUrl;\n\n  return __jsx(\"article\", {\n    className: \"rounded w-full lg:flex mb-10\",\n    key: slug,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"h-48 lg:w-48 flex-none bg-cover overflow-hidden opacity-75\",\n    style: {\n      backgroundImage: \"url('\".concat(img, \"')\")\n    },\n    title: \"\".concat(title),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"relative -bottom-4/5 z-20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/topic/[slug]\",\n    as: \"/topic/\".concat(topic.id),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"ml-2 px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, topic.name)))), __jsx(\"div\", {\n    className: \"bg-white rounded px-4 flex flex-col justify-between leading-normal w-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"header\", {\n    className: \"mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/post/[slug]\",\n    as: \"/post/\".concat(slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"text-2xl lg:text-3xl font-bold font-display\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, title))), __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: \"text-gray-700 text-base\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, description))), __jsx(\"div\", {\n    className: \"flex mt-3 flex-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    alt: \"\".concat(author.name),\n    src: \"\".concat(author.image),\n    previewSrc: \"\".concat(author.image),\n    className: \"h-10 w-10 rounded-full mr-2 object-cover\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: \"font-semibold text-gray-700 text-sm capitalize\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, ' ', author.name, ' '), __jsx(\"p\", {\n    className: \"text-gray-600 text-xs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, ' ', date, ' ')), __jsx(\"div\", {\n    className: \"ml-10 mr-3 lg:flex flex-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, tags.map(function (_ref2) {\n    var id = _ref2.id,\n        icon = _ref2.icon,\n        name = _ref2.name;\n    return __jsx(\"div\", {\n      className: \"bg-gray-200 pr-1 text-sm mr-2 my-3 flex justify-items-center\",\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/tag/[tag]\",\n      as: \"/tag/\".concat(id),\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      className: \"text-gray-600\",\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      className: \"filter-orange-700 h-4 w-4 m-1 inline-block\",\n      alt: \"\".concat(name),\n      src: \"static/\".concat(icon),\n      \"data-srcset\": \"static/\".concat(icon),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 21\n      }\n    }), name)));\n  })))));\n}\n_c = PostCard;\nPostCard.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  img: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  }).isRequired,\n  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,\n  topic: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  }).isRequired,\n  slug: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PostCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcz85MWRiIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZyIsImF1dGhvciIsImRhdGUiLCJ0YWdzIiwidG9waWMiLCJzbHVnIiwiZ2V0U2l0ZU1ldGFEYXRhIiwic2l0ZVVybCIsImJhY2tncm91bmRJbWFnZSIsImlkIiwibmFtZSIsImltYWdlIiwibWFwIiwiaWNvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsT0FBZ0Y7QUFBQTs7QUFBQSxNQUE1REMsS0FBNEQsUUFBNURBLEtBQTREO0FBQUEsTUFBckRDLFdBQXFELFFBQXJEQSxXQUFxRDtBQUFBLE1BQXhDQyxHQUF3QyxRQUF4Q0EsR0FBd0M7QUFBQSxNQUFuQ0MsTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEseUJBQ3pFQyxxRUFBZSxFQUQwRDtBQUFBLE1BQ3JGQyxPQURxRixvQkFDckZBLE9BRHFGOztBQUc3RixTQUNFO0FBQVMsYUFBUyxFQUFDLDhCQUFuQjtBQUFrRCxPQUFHLEVBQUVGLElBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyw0REFEWjtBQUVFLFNBQUssRUFBRTtBQUFFRyxxQkFBZSxpQkFBVVIsR0FBVjtBQUFqQixLQUZUO0FBR0UsU0FBSyxZQUFLRixLQUFMLENBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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WixDQUhMO0FBSUUsc0NBQXVCQSxJQUF2QixDQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU9HSCxJQVBILENBREYsQ0FERixDQURRO0FBQUEsR0FBVCxDQURILENBbkJGLENBZkYsQ0FkRixDQURGO0FBc0VEO0tBekV1QmIsUTtBQTJFeEJBLFFBQVEsQ0FBQ2lCLFNBQVQsR0FBcUI7QUFDbkJoQixPQUFLLEVBQUVpQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURMO0FBRW5CbEIsYUFBVyxFQUFFZ0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGWDtBQUduQmpCLEtBQUcsRUFBRWUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFISDtBQUluQmhCLFFBQU0sRUFBRWMsaURBQVMsQ0FBQ0csS0FBVixDQUFnQjtBQUN0QlIsUUFBSSxFQUFFSyxpREFBUyxDQUFDQyxNQURNO0FBRXRCTCxTQUFLLEVBQUVJLGlEQUFTLENBQUNDO0FBRkssR0FBaEIsRUFHTEMsVUFQZ0I7QUFRbkJmLE1BQUksRUFBRWEsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFSSjtBQVNuQmQsTUFBSSxFQUFFWSxpREFBUyxDQUFDSSxPQUFWLENBQWtCSixpREFBUyxDQUFDSyxNQUE1QixFQUFvQ0gsVUFUdkI7QUFVbkJiLE9BQUssRUFBRVcsaURBQVMsQ0FBQ0csS0FBVixDQUFnQjtBQUNyQlQsTUFBRSxFQUFFTSxpREFBUyxDQUFDQyxNQURPO0FBRXJCTixRQUFJLEVBQUVLLGlEQUFTLENBQUNDO0FBRkssR0FBaEIsRUFHSkMsVUFiZ0I7QUFjbkJaLE1BQUksRUFBRVUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFkSixDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdENhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcblxuaW1wb3J0IHsgZ2V0U2l0ZU1ldGFEYXRhIH0gZnJvbSBcInV0aWxzL2hlbHBlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdENhcmQoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGltZywgYXV0aG9yLCBkYXRlLCB0YWdzLCB0b3BpYywgc2x1ZyB9KSB7XG4gIGNvbnN0IHsgc2l0ZVVybCB9ID0gZ2V0U2l0ZU1ldGFEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJyb3VuZGVkIHctZnVsbCBsZzpmbGV4IG1iLTEwXCIga2V5PXtzbHVnfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiaC00OCBsZzp3LTQ4IGZsZXgtbm9uZSBiZy1jb3ZlciBvdmVyZmxvdy1oaWRkZW4gb3BhY2l0eS03NVwiXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtpbWd9JylgfX1cbiAgICAgICAgdGl0bGU9e2Ake3RpdGxlfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgLWJvdHRvbS00LzUgei0yMFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdG9waWMvW3NsdWddXCIgYXM9e2AvdG9waWMvJHt0b3BpYy5pZH1gfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1sLTIgcHgtNCBweS0xIGJnLWJsYWNrIHRleHQtZ3JheS0yMDAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIHt0b3BpYy5uYW1lfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZCBweC00IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGxlYWRpbmctbm9ybWFsIHctZnVsbFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibXQtMyBtZDptdC0wIHRleHQtZ3JheS03MDAgZm9udC1ib2xkIHRleHQtMnhsIG1iLTJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC0yeGwgbGc6dGV4dC0zeGwgZm9udC1ib2xkIGZvbnQtZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0zIGZsZXgtcm93XCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBhbHQ9e2Ake2F1dGhvci5uYW1lfWB9XG4gICAgICAgICAgICBzcmM9e2Ake2F1dGhvci5pbWFnZX1gfVxuICAgICAgICAgICAgcHJldmlld1NyYz17YCR7YXV0aG9yLmltYWdlfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsIG1yLTIgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgdGV4dC1zbSBjYXBpdGFsaXplXCI+IFxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICB7YXV0aG9yLm5hbWV9XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQteHNcIj4gXG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTAgbXItMyBsZzpmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICB7dGFncy5tYXAoKHtpZCwgaWNvbiwgbmFtZX0pID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwci0xIHRleHQtc20gbXItMiBteS0zIGZsZXgganVzdGlmeS1pdGVtcy1jZW50ZXJcIiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RhZy9bdGFnXVwiIGFzPXtgL3RhZy8ke2lkfWB9IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiIGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLW9yYW5nZS03MDAgaC00IHctNCBtLTEgaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake25hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BzdGF0aWMvJHtpY29ufWB9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmNzZXQ9e2BzdGF0aWMvJHtpY29ufWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59XG5cblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGF1dGhvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGFnczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbiAgdG9waWM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9KS5pc1JlcXVpcmVkLFxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ })

})