webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ \"./node_modules/react-markdown/with-html.js\");\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Image */ \"./components/Image.js\");\n/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Seo */ \"./components/Seo.js\");\nvar _this = undefined,\n    _jsxFileName = \"/app/pages/post/[slug].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/prop-types */\n\n\n\n\n\n\n\nvar CodeBlock = function CodeBlock(_ref) {\n  var language = _ref.language,\n      value = _ref.value;\n  return __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"Prism\"], {\n    language: language,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 10\n    }\n  }, value);\n};\n\n_c = CodeBlock;\n\nvar MarkdownImage = function MarkdownImage(_ref2) {\n  var alt = _ref2.alt,\n      src = _ref2.src;\n  return __jsx(components_Image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    alt: alt,\n    src: __webpack_require__(\"./content/assets sync recursive ^\\\\.\\\\/.*$?7de8\")(\"./\".concat(src)),\n    previewSrc: __webpack_require__(\"./content/assets sync recursive ^\\\\.\\\\/.*$?8949\")(\"./\".concat(src, \"\")),\n    className: \"w-full\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  });\n};\n\n_c2 = MarkdownImage;\nvar __N_SSG = true;\nfunction Post(_ref3) {\n  var _this2 = this;\n\n  var postData = _ref3.postData,\n      topics = _ref3.topics;\n  var post = postData.post,\n      frontmatter = postData.frontmatter,\n      nextPost = postData.nextPost,\n      previousPost = postData.previousPost;\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    topics: topics,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(components_Seo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: frontmatter.title,\n    description: frontmatter.description || post.excerpt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"mb-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"mb-2 text-3xl lg:text-4xl leading-none font-display font-semibold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, frontmatter.title), __jsx(\"p\", {\n    className: \"text-sm mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, frontmatter.date, ' ', \"by\", ' ', frontmatter.author.name), frontmatter.topics.map(function (_ref4) {\n    var id = _ref4.id,\n        name = _ref4.name;\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/topic/[topic]\",\n      as: \"/topic/\".concat(id),\n      key: id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-600 mr-2 my-2\",\n      key: id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 15\n      }\n    }, name));\n  })), __jsx(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"mb-4 prose-sm prose sm:prose lg:prose-lg\",\n    escapeHtml: false,\n    source: post.content,\n    renderers: {\n      code: CodeBlock,\n      image: MarkdownImage\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx(\"hr\", {\n    className: \"mt-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(\"footer\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  })), __jsx(\"nav\", {\n    className: \"flex flex-wrap justify-between mb-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, previousPost ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/post/[slug]\",\n    as: \"/post/\".concat(previousPost.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"text-lg font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"\\u2190\", ' ', previousPost.frontmatter.title)) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }), nextPost ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/post/[slug]\",\n    as: \"/post/\".concat(nextPost.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"text-lg font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, nextPost.frontmatter.title, ' ', \"\\u2192\")) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  })));\n}\n_c3 = Post;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CodeBlock\");\n$RefreshReg$(_c2, \"MarkdownImage\");\n$RefreshReg$(_c3, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/NTM1NCJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJsYW5ndWFnZSIsInZhbHVlIiwiTWFya2Rvd25JbWFnZSIsImFsdCIsInNyYyIsInJlcXVpcmUiLCJQb3N0IiwicG9zdERhdGEiLCJ0b3BpY3MiLCJwb3N0IiwiZnJvbnRtYXR0ZXIiLCJuZXh0UG9zdCIsInByZXZpb3VzUG9zdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJleGNlcnB0IiwiZGF0ZSIsImF1dGhvciIsIm5hbWUiLCJtYXAiLCJpZCIsImNvbnRlbnQiLCJjb2RlIiwiaW1hZ2UiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBeUI7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3pDLFNBQU8sTUFBQyw4REFBRDtBQUFtQixZQUFRLEVBQUVELFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NDLEtBQXhDLENBQVA7QUFDRCxDQUZEOztLQUFNRixTOztBQUlOLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSxNQUFRQyxHQUFSLFNBQVFBLEdBQVI7QUFBQSxTQUNwQixNQUFDLHdEQUFEO0FBQ0UsT0FBRyxFQUFFRCxHQURQO0FBRUUsT0FBRyxFQUFFRSx1RUFBUSxZQUF3QkQsR0FBekIsRUFGZDtBQUdFLGNBQVUsRUFBRUMsdUVBQVEsWUFBd0JELEdBQXpCLE1BSHJCO0FBSUUsYUFBUyxFQUFDLFFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURvQjtBQUFBLENBQXRCOztNQUFNRixhOztBQVNT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QUFBQTtBQUFBO0FBQUEsSUFWSixFQVlHRixRQUFRLEdBQ1AsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLE1BQUUsa0JBQVdBLFFBQVEsQ0FBQ2EsSUFBcEIsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2IsUUFBUSxDQUFDRCxXQUFULENBQXFCRyxLQUR4QixFQUVHLEdBRkgsV0FERixDQURPLEdBU1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSixDQWpDRixDQURGO0FBNEREO01BOUR1QlAsSSIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duL3dpdGgtaHRtbFwiO1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcImNvbXBvbmVudHMvSW1hZ2VcIjtcbmltcG9ydCBTRU8gZnJvbSBcImNvbXBvbmVudHMvU2VvXCI7XG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRQb3N0c1NsdWdzIH0gZnJvbSBcInV0aWxzL3Bvc3RzXCI7XG5pbXBvcnQgeyBnZXRTb3J0ZWRUb3BpY3MgfSBmcm9tIFwidXRpbHMvdG9waWNzXCI7XG5cbmNvbnN0IENvZGVCbG9jayA9ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XG4gIHJldHVybiA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2U9e2xhbmd1YWdlfT57dmFsdWV9PC9TeW50YXhIaWdobGlnaHRlcj47XG59O1xuXG5jb25zdCBNYXJrZG93bkltYWdlID0gKHsgYWx0LCBzcmMgfSkgPT4gKFxuICA8SW1hZ2VcbiAgICBhbHQ9e2FsdH1cbiAgICBzcmM9e3JlcXVpcmUoYC4uLy4uL2NvbnRlbnQvYXNzZXRzLyR7c3JjfWApfVxuICAgIHByZXZpZXdTcmM9e3JlcXVpcmUoYC4uLy4uL2NvbnRlbnQvYXNzZXRzLyR7c3JjfT9scWlwYCl9XG4gICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe3Bvc3REYXRhLCB0b3BpY3N9KSB7XG4gIGNvbnN0IHsgcG9zdCwgZnJvbnRtYXR0ZXIsIG5leHRQb3N0LCBwcmV2aW91c1Bvc3QgfSA9IHBvc3REYXRhO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdG9waWNzPXt0b3BpY3N9PlxuICAgICAgPFNFT1xuICAgICAgICB0aXRsZT17ZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtmcm9udG1hdHRlci5kZXNjcmlwdGlvbiB8fCBwb3N0LmV4Y2VycHR9XG4gICAgICAvPlxuXG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0zeGwgbGc6dGV4dC00eGwgbGVhZGluZy1ub25lIGZvbnQtZGlzcGxheSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7ZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1iLTJcIj5cbiAgICAgICAgICAgIHtmcm9udG1hdHRlci5kYXRlfVxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIGJ5IFxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtmcm9udG1hdHRlci5hdXRob3IubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAge2Zyb250bWF0dGVyLnRvcGljcy5tYXAoKHtpZCwgbmFtZX0pID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdG9waWMvW3RvcGljXVwiIGFzPXtgL3RvcGljLyR7aWR9YH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgcHgtMyBweS0xIHRleHQtc20gdGV4dC1ncmF5LTYwMCBtci0yIG15LTJcIiBrZXk9e2lkfT57bmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgcHJvc2Utc20gcHJvc2Ugc206cHJvc2UgbGc6cHJvc2UtbGdcIlxuICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxuICAgICAgICAgIHNvdXJjZT17cG9zdC5jb250ZW50fVxuICAgICAgICAgIHJlbmRlcmVycz17eyBjb2RlOiBDb2RlQmxvY2ssIGltYWdlOiBNYXJrZG93bkltYWdlIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC00XCIgLz5cbiAgICAgICAgPGZvb3RlciAvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW4gbWItMTBcIj5cbiAgICAgICAge3ByZXZpb3VzUG9zdCA/IChcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3ByZXZpb3VzUG9zdC5zbHVnfWB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAg4oaQIFxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICB7cHJldmlvdXNQb3N0LmZyb250bWF0dGVyLnRpdGxlfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtuZXh0UG9zdCA/IChcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke25leHRQb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICB7bmV4dFBvc3QuZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIOKGklxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICl9XG4gICAgICA8L25hdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldFBvc3RzU2x1Z3MoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XG4gIGNvbnN0IHBvc3REYXRhID0gZ2V0UG9zdEJ5U2x1ZyhzbHVnKTtcblxuICBpZiAoIXBvc3REYXRhLnByZXZpb3VzUG9zdCkge1xuICAgIHBvc3REYXRhLnByZXZpb3VzUG9zdCA9IG51bGw7XG4gIH1cblxuICBpZiAoIXBvc3REYXRhLm5leHRQb3N0KSB7XG4gICAgcG9zdERhdGEubmV4dFBvc3QgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgdG9waWNzID0gZ2V0U29ydGVkVG9waWNzKCk7XG5cbiAgcmV0dXJuIHsgXG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3REYXRhLFxuICAgICAgdG9waWNzXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})