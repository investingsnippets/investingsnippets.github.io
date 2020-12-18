webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! disqus-react */ \"./node_modules/disqus-react/lib/index.js\");\n/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/helpers */ \"./utils/helpers.js\");\n/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! remark-math */ \"./node_modules/remark-math/index.js\");\n/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remark_math__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_katex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-katex */ \"./node_modules/react-katex/dist/react-katex.js\");\n/* harmony import */ var react_katex__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_katex__WEBPACK_IMPORTED_MODULE_9__);\nvar _this = undefined,\n    _jsxFileName = \"/app/pages/post/[slug].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable import/no-dynamic-require */\n\n/* eslint-disable global-require */\n\n/* eslint-disable react/prop-types */\n\n\n\n\n\n\n\n\n\n\nvar CodeBlock = function CodeBlock(_ref) {\n  var language = _ref.language,\n      value = _ref.value;\n  return __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"Prism\"], {\n    language: language,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 10\n    }\n  }, value);\n};\n\n_c = CodeBlock;\nvar __N_SSG = true;\nfunction Post(_ref2) {\n  var _this2 = this;\n\n  var postData = _ref2.postData,\n      tags = _ref2.tags,\n      sortedTopics = _ref2.sortedTopics,\n      allTopics = _ref2.allTopics,\n      slug = _ref2.slug;\n\n  var _getSiteMetaData = Object(utils_helpers__WEBPACK_IMPORTED_MODULE_7__[\"getSiteMetaData\"])(),\n      siteUrl = _getSiteMetaData.siteUrl,\n      disqus = _getSiteMetaData.disqus;\n\n  var post = postData.post,\n      frontmatter = postData.frontmatter,\n      nextPost = postData.nextPost,\n      previousPost = postData.previousPost;\n  var disqusShortname = disqus.hostname;\n  var disqusConfig = {\n    url: siteUrl,\n    identifier: slug,\n    title: frontmatter.title\n  };\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    tags: tags,\n    sortedTopics: sortedTopics,\n    allTopics: allTopics,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(components_Seo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: frontmatter.title,\n    description: frontmatter.description || post.excerpt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"mb-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    className: \"text-sm mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    key: \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"\",\n    key: \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, \"Home\")), ' > ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/topic/[topic]\",\n    as: \"/topic/\".concat(frontmatter.topic.id),\n    key: frontmatter.topic.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"\",\n    key: frontmatter.topic.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, frontmatter.topic.name)), ' > '), __jsx(\"h1\", {\n    className: \"mb-2 text-3xl lg:text-4xl leading-none font-display font-semibold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, frontmatter.title), __jsx(\"p\", {\n    className: \"text-sm mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, frontmatter.date, ' ', \"by\", ' ', frontmatter.author.name), __jsx(\"div\", {\n    className: \"flex justify-end mt-2 mr-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, frontmatter.tags.map(function (_ref3) {\n    var id = _ref3.id,\n        icon = _ref3.icon,\n        name = _ref3.name;\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/tag/[tag]\",\n      as: \"/tag/\".concat(id),\n      key: id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      className: \"text-gray-600\",\n      key: id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      className: \"filter-orange-700 h-4 w-4 m-1 inline-block\",\n      alt: \"\".concat(name),\n      src: \"\".concat(siteUrl, \"/static/\").concat(icon),\n      \"data-srcset\": \"\".concat(siteUrl, \"/static/\").concat(icon),\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 19\n      }\n    }), name));\n  })), frontmatter.colab && __jsx(\"div\", {\n    className: \"flex justify-end mt-2 mr-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"\".concat(frontmatter.colab),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"https://colab.research.google.com/assets/colab-badge.svg\",\n    alt: \"Open In Colab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  })))), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"mb-4 prose-lg prose sm:prose lg:prose-lg\",\n    escapeHtml: false,\n    source: post.content,\n    plugins: [remark_math__WEBPACK_IMPORTED_MODULE_8___default.a],\n    renderers: {\n      code: CodeBlock,\n      image: utils_helpers__WEBPACK_IMPORTED_MODULE_7__[\"MarkdownImage\"],\n      // math: ({ value }) => `math: ${value}`,\n      // inlineMath: ({ value }) => `inlineMath: ${value}`\n      math: function math(_ref4) {\n        var value = _ref4.value;\n        return __jsx(react_katex__WEBPACK_IMPORTED_MODULE_9__[\"BlockMath\"], {\n          math: value,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 34\n          }\n        });\n      },\n      inlineMath: function inlineMath(_ref5) {\n        var value = _ref5.value;\n        return __jsx(react_katex__WEBPACK_IMPORTED_MODULE_9__[\"InlineMath\"], {\n          math: value,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 40\n          }\n        });\n      },\n      link: function link(_ref6) {\n        var children = _ref6.children,\n            href = _ref6.href;\n        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: href,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 22\n          }\n        }, __jsx(\"a\", {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 40\n          }\n        }, children));\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }), __jsx(\"hr\", {\n    className: \"mt-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }), __jsx(\"footer\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  })), __jsx(\"nav\", {\n    className: \"flex flex-wrap justify-between mb-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, previousPost ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/post/[slug]\",\n    as: \"/post/\".concat(previousPost.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"text-lg font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, \"\\u2190\", ' ', previousPost.frontmatter.title)) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }), nextPost ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/post/[slug]\",\n    as: \"/post/\".concat(nextPost.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"text-lg font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  }, nextPost.frontmatter.title, ' ', \"\\u2192\")) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  })), __jsx(disqus_react__WEBPACK_IMPORTED_MODULE_4___default.a.DiscussionEmbed, {\n    shortname: disqusShortname,\n    config: disqusConfig,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }\n  }));\n}\n_c2 = Post;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CodeBlock\");\n$RefreshReg$(_c2, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/NTM1NCJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJsYW5ndWFnZSIsInZhbHVlIiwiUG9zdCIsInBvc3REYXRhIiwidGFncyIsInNvcnRlZFRvcGljcyIsImFsbFRvcGljcyIsInNsdWciLCJnZXRTaXRlTWV0YURhdGEiLCJzaXRlVXJsIiwiZGlzcXVzIiwicG9zdCIsImZyb250bWF0dGVyIiwibmV4dFBvc3QiLCJwcmV2aW91c1Bvc3QiLCJkaXNxdXNTaG9ydG5hbWUiLCJob3N0bmFtZSIsImRpc3F1c0NvbmZpZyIsInVybCIsImlkZW50aWZpZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZXhjZXJwdCIsInRvcGljIiwiaWQiLCJuYW1lIiwiZGF0ZSIsImF1dGhvciIsIm1hcCIsImljb24iLCJjb2xhYiIsImNvbnRlbnQiLCJSZW1hcmtNYXRoUGx1Z2luIiwiY29kZSIsImltYWdlIiwiTWFya2Rvd25JbWFnZSIsIm1hdGgiLCJpbmxpbmVNYXRoIiwibGluayIsImNoaWxkcmVuIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXlCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN6QyxTQUFPLE1BQUMsOERBQUQ7QUFBbUIsWUFBUSxFQUFFRCxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDQyxLQUF4QyxDQUFQO0FBQ0QsQ0FGRDs7S0FBTUYsUzs7QUFJUyxTQUFTRyxJQUFULFFBQStEO0FBQUE7O0FBQUEsTUFBaERDLFFBQWdELFNBQWhEQSxRQUFnRDtBQUFBLE1BQXRDQyxJQUFz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QUNQLElBQXhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUcsR0FGSCxFQUdHTyxZQUFZLENBQUNGLFdBQWIsQ0FBeUJRLEtBSDVCLENBREYsQ0FEVyxHQVNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVlHUCxRQUFRLEdBQ1AsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLE1BQUUsa0JBQVdBLFFBQVEsQ0FBQ04sSUFBcEIsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR00sUUFBUSxDQUFDRCxXQUFULENBQXFCUSxLQUR4QixFQUVHLEdBRkgsV0FERixDQURPLEdBU1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSixDQXZFRixFQStGRSxNQUFDLG1EQUFELENBQVEsZUFBUjtBQUNFLGFBQVMsRUFBRUwsZUFEYjtBQUVFLFVBQU0sRUFBRUUsWUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0ZGLENBREY7QUFzR0Q7TUEvR3VCZixJIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdC9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcbmltcG9ydCBEaXNxdXMgZnJvbSBcImRpc3F1cy1yZWFjdFwiXG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgU0VPIGZyb20gXCJjb21wb25lbnRzL1Nlb1wiO1xuaW1wb3J0IHsgZ2V0UG9zdEJ5U2x1ZywgZ2V0UG9zdHNTbHVncyB9IGZyb20gXCJ1dGlscy9wb3N0c1wiO1xuaW1wb3J0IHsgZ2V0U29ydGVkVGFncyB9IGZyb20gXCJ1dGlscy90YWdzXCI7XG5pbXBvcnQgeyBnZXRTb3J0ZWRUb3BpY3MsIGdldEFsbFRvcGljcyB9IGZyb20gXCJ1dGlscy90b3BpY3NcIjtcbmltcG9ydCB7IE1hcmtkb3duSW1hZ2UsIGdldFNpdGVNZXRhRGF0YSB9IGZyb20gXCJ1dGlscy9oZWxwZXJzXCI7XG5pbXBvcnQgUmVtYXJrTWF0aFBsdWdpbiBmcm9tICdyZW1hcmstbWF0aCc7XG5pbXBvcnQgeyBCbG9ja01hdGgsIElubGluZU1hdGggfSBmcm9tICdyZWFjdC1rYXRleCc7XG5cbmNvbnN0IENvZGVCbG9jayA9ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XG4gIHJldHVybiA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2U9e2xhbmd1YWdlfT57dmFsdWV9PC9TeW50YXhIaWdobGlnaHRlcj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtwb3N0RGF0YSwgdGFncywgc29ydGVkVG9waWNzLCBhbGxUb3BpY3MsIHNsdWd9KSB7XG4gIGNvbnN0IHsgc2l0ZVVybCwgZGlzcXVzIH0gPSBnZXRTaXRlTWV0YURhdGEoKTtcbiAgY29uc3QgeyBwb3N0LCBmcm9udG1hdHRlciwgbmV4dFBvc3QsIHByZXZpb3VzUG9zdCB9ID0gcG9zdERhdGE7XG4gIGNvbnN0IGRpc3F1c1Nob3J0bmFtZSA9IGRpc3F1cy5ob3N0bmFtZVxuICBjb25zdCBkaXNxdXNDb25maWcgPSB7XG4gICAgdXJsOiBzaXRlVXJsLFxuICAgIGlkZW50aWZpZXI6IHNsdWcsXG4gICAgdGl0bGU6IGZyb250bWF0dGVyLnRpdGxlXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRhZ3M9e3RhZ3N9IHNvcnRlZFRvcGljcz17c29ydGVkVG9waWNzfSBhbGxUb3BpY3M9e2FsbFRvcGljc30+XG4gICAgICA8U0VPXG4gICAgICAgIHRpdGxlPXtmcm9udG1hdHRlci50aXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Zyb250bWF0dGVyLmRlc2NyaXB0aW9uIHx8IHBvc3QuZXhjZXJwdH1cbiAgICAgIC8+XG5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1iLTJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIga2V5PSdob21lJz5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPScnIGtleT0naG9tZSc+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHsnID4gJ31cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdG9waWMvW3RvcGljXVwiIGFzPXtgL3RvcGljLyR7ZnJvbnRtYXR0ZXIudG9waWMuaWR9YH0ga2V5PXtmcm9udG1hdHRlci50b3BpYy5pZH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nJyBrZXk9e2Zyb250bWF0dGVyLnRvcGljLmlkfT57ZnJvbnRtYXR0ZXIudG9waWMubmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7JyA+ICd9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0yIHRleHQtM3hsIGxnOnRleHQtNHhsIGxlYWRpbmctbm9uZSBmb250LWRpc3BsYXkgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAge2Zyb250bWF0dGVyLnRpdGxlfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtYi0yXCI+XG4gICAgICAgICAgICB7ZnJvbnRtYXR0ZXIuZGF0ZX1cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBieSBcbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICB7ZnJvbnRtYXR0ZXIuYXV0aG9yLm5hbWV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtdC0yIG1yLTVcIj5cbiAgICAgICAgICAgIHtmcm9udG1hdHRlci50YWdzLm1hcCgoe2lkLCBpY29uLCBuYW1lfSkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RhZy9bdGFnXVwiIGFzPXtgL3RhZy8ke2lkfWB9IGtleT17aWR9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLW9yYW5nZS03MDAgaC00IHctNCBtLTEgaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtuYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7c2l0ZVVybH0vc3RhdGljLyR7aWNvbn1gfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNyY3NldD17YCR7c2l0ZVVybH0vc3RhdGljLyR7aWNvbn1gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICB7ZnJvbnRtYXR0ZXIuY29sYWIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIG10LTIgbXItNVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtgJHtmcm9udG1hdHRlci5jb2xhYn1gfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY29sYWIucmVzZWFyY2guZ29vZ2xlLmNvbS9hc3NldHMvY29sYWItYmFkZ2Uuc3ZnXCIgYWx0PVwiT3BlbiBJbiBDb2xhYlwiLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItNCBwcm9zZS1sZyBwcm9zZSBzbTpwcm9zZSBsZzpwcm9zZS1sZ1wiXG4gICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XG4gICAgICAgICAgc291cmNlPXtwb3N0LmNvbnRlbnR9XG4gICAgICAgICAgcGx1Z2lucz17W1JlbWFya01hdGhQbHVnaW5dfVxuICAgICAgICAgIHJlbmRlcmVycz17eyBcbiAgICAgICAgICAgIGNvZGU6IENvZGVCbG9jayxcbiAgICAgICAgICAgIGltYWdlOiBNYXJrZG93bkltYWdlLFxuICAgICAgICAgICAgLy8gbWF0aDogKHsgdmFsdWUgfSkgPT4gYG1hdGg6ICR7dmFsdWV9YCxcbiAgICAgICAgICAgIC8vIGlubGluZU1hdGg6ICh7IHZhbHVlIH0pID0+IGBpbmxpbmVNYXRoOiAke3ZhbHVlfWBcbiAgICAgICAgICAgIG1hdGg6ICh7IHZhbHVlIH0pID0+IDxCbG9ja01hdGggbWF0aD17dmFsdWV9IC8+LFxuICAgICAgICAgICAgaW5saW5lTWF0aDogKHsgdmFsdWUgfSkgPT4gPElubGluZU1hdGggbWF0aD17dmFsdWV9IC8+LFxuICAgICAgICAgICAgbGluazogKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17aHJlZn0+PGE+e2NoaWxkcmVufTwvYT48L0xpbms+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTRcIiAvPlxuICAgICAgICA8Zm9vdGVyIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBtYi0xMFwiPlxuICAgICAgICB7cHJldmlvdXNQb3N0ID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7cHJldmlvdXNQb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICDihpAgXG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHtwcmV2aW91c1Bvc3QuZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKX1cbiAgICAgICAge25leHRQb3N0ID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7bmV4dFBvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIHtuZXh0UG9zdC5mcm9udG1hdHRlci50aXRsZX1cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAg4oaSXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvbmF2PlxuICAgICAgPERpc3F1cy5EaXNjdXNzaW9uRW1iZWRcbiAgICAgICAgc2hvcnRuYW1lPXtkaXNxdXNTaG9ydG5hbWV9XG4gICAgICAgIGNvbmZpZz17ZGlzcXVzQ29uZmlnfVxuICAgICAgLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldFBvc3RzU2x1Z3MoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XG4gIGNvbnN0IHBvc3REYXRhID0gZ2V0UG9zdEJ5U2x1ZyhzbHVnKTtcblxuICBpZiAoIXBvc3REYXRhLnByZXZpb3VzUG9zdCkge1xuICAgIHBvc3REYXRhLnByZXZpb3VzUG9zdCA9IG51bGw7XG4gIH1cblxuICBpZiAoIXBvc3REYXRhLm5leHRQb3N0KSB7XG4gICAgcG9zdERhdGEubmV4dFBvc3QgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgdGFncyA9IGdldFNvcnRlZFRhZ3MoKTtcbiAgY29uc3Qgc29ydGVkVG9waWNzID0gZ2V0U29ydGVkVG9waWNzKCk7XG4gIGNvbnN0IGFsbFRvcGljcyA9IGdldEFsbFRvcGljcygpO1xuXG4gIHJldHVybiB7IFxuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YSxcbiAgICAgIHRhZ3MsXG4gICAgICBzb3J0ZWRUb3BpY3MsXG4gICAgICBhbGxUb3BpY3MsXG4gICAgICBzbHVnXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})