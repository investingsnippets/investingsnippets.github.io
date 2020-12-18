webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! disqus-react */ \"./node_modules/disqus-react/lib/index.js\");\n/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/helpers */ \"./utils/helpers.js\");\n/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! remark-math */ \"./node_modules/remark-math/index.js\");\n/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remark_math__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_katex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-katex */ \"./node_modules/react-katex/dist/react-katex.js\");\n/* harmony import */ var react_katex__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_katex__WEBPACK_IMPORTED_MODULE_9__);\nvar _this = undefined,\n    _jsxFileName = \"/app/pages/post/[slug].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable import/no-dynamic-require */\n\n/* eslint-disable global-require */\n\n/* eslint-disable react/prop-types */\n\n\n\n\n\n\n\n\n\n\nvar CodeBlock = function CodeBlock(_ref) {\n  var language = _ref.language,\n      value = _ref.value;\n  return __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"Prism\"], {\n    language: language,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 10\n    }\n  }, value);\n};\n\n_c = CodeBlock;\nvar __N_SSG = true;\nfunction Post(_ref2) {\n  var _this2 = this;\n\n  var postData = _ref2.postData,\n      tags = _ref2.tags,\n      sortedTopics = _ref2.sortedTopics,\n      allTopics = _ref2.allTopics,\n      slug = _ref2.slug;\n\n  var _getSiteMetaData = Object(utils_helpers__WEBPACK_IMPORTED_MODULE_7__[\"getSiteMetaData\"])(),\n      siteUrl = _getSiteMetaData.siteUrl,\n      disqus = _getSiteMetaData.disqus;\n\n  var post = postData.post,\n      frontmatter = postData.frontmatter,\n      nextPost = postData.nextPost,\n      previousPost = postData.previousPost;\n  var disqusShortname = disqus.hostname;\n  var disqusConfig = {\n    url: siteUrl,\n    identifier: slug,\n    title: frontmatter.title\n  };\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    tags: tags,\n    sortedTopics: sortedTopics,\n    allTopics: allTopics,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(components_Seo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: frontmatter.title,\n    description: frontmatter.description || post.excerpt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"mb-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    className: \"text-sm mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    key: \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"\",\n    key: \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, \"Home\")), ' > ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/topic/[topic]\",\n    as: \"/topic/\".concat(frontmatter.topic.id),\n    key: frontmatter.topic.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"\",\n    key: frontmatter.topic.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, frontmatter.topic.name)), ' > '), __jsx(\"h1\", {\n    className: \"mb-2 text-3xl lg:text-4xl leading-none font-display font-semibold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, frontmatter.title), __jsx(\"p\", {\n    className: \"text-sm mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, frontmatter.date, ' ', \"by\", ' ', frontmatter.author.name), __jsx(\"div\", {\n    className: \"flex justify-end mt-2 mr-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, frontmatter.tags.map(function (_ref3) {\n    var id = _ref3.id,\n        icon = _ref3.icon,\n        name = _ref3.name;\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/tag/[tag]\",\n      as: \"/tag/\".concat(id),\n      key: id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      className: \"text-gray-600\",\n      key: id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      className: \"filter-orange-700 h-4 w-4 m-1 inline-block\",\n      alt: \"\".concat(name),\n      src: \"\".concat(siteUrl, \"/static/\").concat(icon),\n      \"data-srcset\": \"\".concat(siteUrl, \"/static/\").concat(icon),\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 19\n      }\n    }), name));\n  })), frontmatter.colab && __jsx(\"div\", {\n    className: \"flex justify-end mt-2 mr-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"\".concat(frontmatter.colab),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"https://colab.research.google.com/assets/colab-badge.svg\",\n    alt: \"Open In Colab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  })))), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"mb-4 prose-lg\",\n    escapeHtml: false,\n    source: post.content,\n    plugins: [remark_math__WEBPACK_IMPORTED_MODULE_8___default.a],\n    renderers: {\n      code: CodeBlock,\n      image: utils_helpers__WEBPACK_IMPORTED_MODULE_7__[\"MarkdownImage\"],\n      // math: ({ value }) => `math: ${value}`,\n      // inlineMath: ({ value }) => `inlineMath: ${value}`\n      math: function math(_ref4) {\n        var value = _ref4.value;\n        return __jsx(react_katex__WEBPACK_IMPORTED_MODULE_9__[\"BlockMath\"], {\n          math: value,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 34\n          }\n        });\n      },\n      inlineMath: function inlineMath(_ref5) {\n        var value = _ref5.value;\n        return __jsx(react_katex__WEBPACK_IMPORTED_MODULE_9__[\"InlineMath\"], {\n          math: value,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 40\n          }\n        });\n      },\n      link: function link(_ref6) {\n        var children = _ref6.children,\n            href = _ref6.href;\n        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: href,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 22\n          }\n        }, __jsx(\"a\", {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 40\n          }\n        }, children));\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }), __jsx(\"hr\", {\n    className: \"mt-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }), __jsx(\"footer\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  })), __jsx(\"nav\", {\n    className: \"flex flex-wrap justify-between mb-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, previousPost ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/post/[slug]\",\n    as: \"/post/\".concat(previousPost.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"text-lg font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, \"\\u2190\", ' ', previousPost.frontmatter.title)) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }), nextPost ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/post/[slug]\",\n    as: \"/post/\".concat(nextPost.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"text-lg font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  }, nextPost.frontmatter.title, ' ', \"\\u2192\")) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  })), __jsx(disqus_react__WEBPACK_IMPORTED_MODULE_4___default.a.DiscussionEmbed, {\n    shortname: disqusShortname,\n    config: disqusConfig,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }\n  }));\n}\n_c2 = Post;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CodeBlock\");\n$RefreshReg$(_c2, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/NTM1NCJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJsYW5ndWFnZSIsInZhbHVlIiwiUG9zdCIsInBvc3REYXRhIiwidGFncyIsInNvcnRlZFRvcGljcyIsImFsbFRvcGljcyIsInNsdWciLCJnZXRTaXRlTWV0YURhdGEiLCJzaXRlVXJsIiwiZGlzcXVzIiwicG9zdCIsImZyb250bWF0dGVyIiwibmV4dFBvc3QiLCJwcmV2aW91c1Bvc3QiLCJkaXNxdXNTaG9ydG5hbWUiLCJob3N0bmFtZSIsImRpc3F1c0NvbmZpZyIsInVybCIsImlkZW50aWZpZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZXhjZXJwdCIsInRvcGljIiwiaWQiLCJuYW1lIiwiZGF0ZSIsImF1dGhvciIsIm1hcCIsImljb24iLCJjb2xhYiIsImNvbnRlbnQiLCJSZW1hcmtNYXRoUGx1Z2luIiwiY29kZSIsImltYWdlIiwiTWFya2Rvd25JbWFnZSIsIm1hdGgiLCJpbmxpbmVNYXRoIiwibGluayIsImNoaWxkcmVuIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXlCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN6QyxTQUFPLE1BQUMsOERBQUQ7QUFBbUIsWUFBUSxFQUFFRCxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDQyxLQUF4QyxDQUFQO0FBQ0QsQ0FGRDs7S0FBTUYsUzs7QUFJUyxTQUFTRyxJQUFULFFBQStEO0FBQUE7O0FBQUEsTUFBaERDLFFBQWdELFNBQWhEQSxRQUFnRDtBQUFBLE1BQXRDQyxJQUFz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Q1AsSUFBeEIsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFRyxHQUZILEVBR0dPLFlBQVksQ0FBQ0YsV0FBYixDQUF5QlEsS0FINUIsQ0FERixDQURXLEdBU1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBWUdQLFFBQVEsR0FDUCxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsTUFBRSxrQkFBV0EsUUFBUSxDQUFDTixJQUFwQixDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTSxRQUFRLENBQUNELFdBQVQsQ0FBcUJRLEtBRHhCLEVBRUcsR0FGSCxXQURGLENBRE8sR0FTUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJKLENBdkVGLEVBK0ZFLE1BQUMsbURBQUQsQ0FBUSxlQUFSO0FBQ0UsYUFBUyxFQUFFTCxlQURiO0FBRUUsVUFBTSxFQUFFRSxZQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvRkYsQ0FERjtBQXNHRDtNQS9HdUJmLEkiLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1keW5hbWljLXJlcXVpcmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IERpc3F1cyBmcm9tIFwiZGlzcXVzLXJlYWN0XCJcblxuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBTRU8gZnJvbSBcImNvbXBvbmVudHMvU2VvXCI7XG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRQb3N0c1NsdWdzIH0gZnJvbSBcInV0aWxzL3Bvc3RzXCI7XG5pbXBvcnQgeyBnZXRTb3J0ZWRUYWdzIH0gZnJvbSBcInV0aWxzL3RhZ3NcIjtcbmltcG9ydCB7IGdldFNvcnRlZFRvcGljcywgZ2V0QWxsVG9waWNzIH0gZnJvbSBcInV0aWxzL3RvcGljc1wiO1xuaW1wb3J0IHsgTWFya2Rvd25JbWFnZSwgZ2V0U2l0ZU1ldGFEYXRhIH0gZnJvbSBcInV0aWxzL2hlbHBlcnNcIjtcbmltcG9ydCBSZW1hcmtNYXRoUGx1Z2luIGZyb20gJ3JlbWFyay1tYXRoJztcbmltcG9ydCB7IEJsb2NrTWF0aCwgSW5saW5lTWF0aCB9IGZyb20gJ3JlYWN0LWthdGV4JztcblxuY29uc3QgQ29kZUJsb2NrID0gKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcbiAgcmV0dXJuIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT17bGFuZ3VhZ2V9Pnt2YWx1ZX08L1N5bnRheEhpZ2hsaWdodGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe3Bvc3REYXRhLCB0YWdzLCBzb3J0ZWRUb3BpY3MsIGFsbFRvcGljcywgc2x1Z30pIHtcbiAgY29uc3QgeyBzaXRlVXJsLCBkaXNxdXMgfSA9IGdldFNpdGVNZXRhRGF0YSgpO1xuICBjb25zdCB7IHBvc3QsIGZyb250bWF0dGVyLCBuZXh0UG9zdCwgcHJldmlvdXNQb3N0IH0gPSBwb3N0RGF0YTtcbiAgY29uc3QgZGlzcXVzU2hvcnRuYW1lID0gZGlzcXVzLmhvc3RuYW1lXG4gIGNvbnN0IGRpc3F1c0NvbmZpZyA9IHtcbiAgICB1cmw6IHNpdGVVcmwsXG4gICAgaWRlbnRpZmllcjogc2x1ZyxcbiAgICB0aXRsZTogZnJvbnRtYXR0ZXIudGl0bGVcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFncz17dGFnc30gc29ydGVkVG9waWNzPXtzb3J0ZWRUb3BpY3N9IGFsbFRvcGljcz17YWxsVG9waWNzfT5cbiAgICAgIDxTRU9cbiAgICAgICAgdGl0bGU9e2Zyb250bWF0dGVyLnRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZnJvbnRtYXR0ZXIuZGVzY3JpcHRpb24gfHwgcG9zdC5leGNlcnB0fVxuICAgICAgLz5cblxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWItMlwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBrZXk9J2hvbWUnPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9Jycga2V5PSdob21lJz5Ib21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgeycgPiAnfVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90b3BpYy9bdG9waWNdXCIgYXM9e2AvdG9waWMvJHtmcm9udG1hdHRlci50b3BpYy5pZH1gfSBrZXk9e2Zyb250bWF0dGVyLnRvcGljLmlkfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPScnIGtleT17ZnJvbnRtYXR0ZXIudG9waWMuaWR9Pntmcm9udG1hdHRlci50b3BpYy5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHsnID4gJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0zeGwgbGc6dGV4dC00eGwgbGVhZGluZy1ub25lIGZvbnQtZGlzcGxheSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7ZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1iLTJcIj5cbiAgICAgICAgICAgIHtmcm9udG1hdHRlci5kYXRlfVxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIGJ5IFxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtmcm9udG1hdHRlci5hdXRob3IubmFtZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIG10LTIgbXItNVwiPlxuICAgICAgICAgICAge2Zyb250bWF0dGVyLnRhZ3MubWFwKCh7aWQsIGljb24sIG5hbWV9KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGFnL1t0YWddXCIgYXM9e2AvdGFnLyR7aWR9YH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiIGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItb3JhbmdlLTcwMCBoLTQgdy00IG0tMSBpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake25hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtzaXRlVXJsfS9zdGF0aWMvJHtpY29ufWB9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc3Jjc2V0PXtgJHtzaXRlVXJsfS9zdGF0aWMvJHtpY29ufWB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgIHtmcm9udG1hdHRlci5jb2xhYiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgbXQtMiBtci01XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2Ake2Zyb250bWF0dGVyLmNvbGFifWB9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2xhYi5yZXNlYXJjaC5nb29nbGUuY29tL2Fzc2V0cy9jb2xhYi1iYWRnZS5zdmdcIiBhbHQ9XCJPcGVuIEluIENvbGFiXCIvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHByb3NlLWxnXCJcbiAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cbiAgICAgICAgICBzb3VyY2U9e3Bvc3QuY29udGVudH1cbiAgICAgICAgICBwbHVnaW5zPXtbUmVtYXJrTWF0aFBsdWdpbl19XG4gICAgICAgICAgcmVuZGVyZXJzPXt7IFxuICAgICAgICAgICAgY29kZTogQ29kZUJsb2NrLFxuICAgICAgICAgICAgaW1hZ2U6IE1hcmtkb3duSW1hZ2UsXG4gICAgICAgICAgICAvLyBtYXRoOiAoeyB2YWx1ZSB9KSA9PiBgbWF0aDogJHt2YWx1ZX1gLFxuICAgICAgICAgICAgLy8gaW5saW5lTWF0aDogKHsgdmFsdWUgfSkgPT4gYGlubGluZU1hdGg6ICR7dmFsdWV9YFxuICAgICAgICAgICAgbWF0aDogKHsgdmFsdWUgfSkgPT4gPEJsb2NrTWF0aCBtYXRoPXt2YWx1ZX0gLz4sXG4gICAgICAgICAgICBpbmxpbmVNYXRoOiAoeyB2YWx1ZSB9KSA9PiA8SW5saW5lTWF0aCBtYXRoPXt2YWx1ZX0gLz4sXG4gICAgICAgICAgICBsaW5rOiAoeyBjaGlsZHJlbiwgaHJlZiB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXtocmVmfT48YT57Y2hpbGRyZW59PC9hPjwvTGluaz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtNFwiIC8+XG4gICAgICAgIDxmb290ZXIgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIG1iLTEwXCI+XG4gICAgICAgIHtwcmV2aW91c1Bvc3QgPyAoXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtwcmV2aW91c1Bvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIOKGkCBcbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAge3ByZXZpb3VzUG9zdC5mcm9udG1hdHRlci50aXRsZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiAvPlxuICAgICAgICApfVxuICAgICAgICB7bmV4dFBvc3QgPyAoXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtuZXh0UG9zdC5zbHVnfWB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAge25leHRQb3N0LmZyb250bWF0dGVyLnRpdGxlfVxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICDihpJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiAvPlxuICAgICAgICApfVxuICAgICAgPC9uYXY+XG4gICAgICA8RGlzcXVzLkRpc2N1c3Npb25FbWJlZFxuICAgICAgICBzaG9ydG5hbWU9e2Rpc3F1c1Nob3J0bmFtZX1cbiAgICAgICAgY29uZmlnPXtkaXNxdXNDb25maWd9XG4gICAgICAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gZ2V0UG9zdHNTbHVncygpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcbiAgY29uc3QgcG9zdERhdGEgPSBnZXRQb3N0QnlTbHVnKHNsdWcpO1xuXG4gIGlmICghcG9zdERhdGEucHJldmlvdXNQb3N0KSB7XG4gICAgcG9zdERhdGEucHJldmlvdXNQb3N0ID0gbnVsbDtcbiAgfVxuXG4gIGlmICghcG9zdERhdGEubmV4dFBvc3QpIHtcbiAgICBwb3N0RGF0YS5uZXh0UG9zdCA9IG51bGw7XG4gIH1cblxuICBjb25zdCB0YWdzID0gZ2V0U29ydGVkVGFncygpO1xuICBjb25zdCBzb3J0ZWRUb3BpY3MgPSBnZXRTb3J0ZWRUb3BpY3MoKTtcbiAgY29uc3QgYWxsVG9waWNzID0gZ2V0QWxsVG9waWNzKCk7XG5cbiAgcmV0dXJuIHsgXG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3REYXRhLFxuICAgICAgdGFncyxcbiAgICAgIHNvcnRlZFRvcGljcyxcbiAgICAgIGFsbFRvcGljcyxcbiAgICAgIHNsdWdcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})