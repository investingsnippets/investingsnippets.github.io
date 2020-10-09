webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ \"./node_modules/react-markdown/with-html.js\");\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! disqus-react */ \"./node_modules/disqus-react/lib/index.js\");\n/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/helpers */ \"./utils/helpers.js\");\nvar _this = undefined,\n    _jsxFileName = \"/app/pages/post/[slug].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable import/no-dynamic-require */\n\n/* eslint-disable global-require */\n\n/* eslint-disable react/prop-types */\n\n\n\n\n\n\n\n\nvar CodeBlock = function CodeBlock(_ref) {\n  var language = _ref.language,\n      value = _ref.value;\n  return __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"Prism\"], {\n    language: language,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }\n  }, value);\n};\n\n_c = CodeBlock;\nvar __N_SSG = true;\nfunction Post(_ref2) {\n  var _this2 = this;\n\n  var postData = _ref2.postData,\n      tags = _ref2.tags,\n      sortedTopics = _ref2.sortedTopics,\n      allTopics = _ref2.allTopics,\n      slug = _ref2.slug;\n\n  var _getSiteMetaData = Object(utils_helpers__WEBPACK_IMPORTED_MODULE_7__[\"getSiteMetaData\"])(),\n      siteUrl = _getSiteMetaData.siteUrl,\n      disqus = _getSiteMetaData.disqus;\n\n  var post = postData.post,\n      frontmatter = postData.frontmatter,\n      nextPost = postData.nextPost,\n      previousPost = postData.previousPost;\n  var disqusShortname = disqus.hostname;\n  var disqusConfig = {\n    url: siteUrl,\n    identifier: slug,\n    title: frontmatter.title\n  };\n  var prod = false;\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    tags: tags,\n    sortedTopics: sortedTopics,\n    allTopics: allTopics,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(components_Seo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: frontmatter.title,\n    description: frontmatter.description || post.excerpt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"mb-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"mb-2 text-3xl lg:text-4xl leading-none font-display font-semibold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, frontmatter.title), __jsx(\"p\", {\n    className: \"text-sm mb-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, frontmatter.date, ' ', \"by\", ' ', frontmatter.author.name, ' ', \"under\", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/topic/[topic]\",\n    as: \"/topic/\".concat(frontmatter.topic.id),\n    key: frontmatter.topic.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"\",\n    key: frontmatter.topic.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 15\n    }\n  }, frontmatter.topic.name))), frontmatter.tags.map(function (_ref3) {\n    var id = _ref3.id,\n        color = _ref3.color,\n        name = _ref3.name;\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/tag/[tag]\",\n      as: \"/tag/\".concat(id),\n      key: id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      className: \"inline-block \".concat(color, \" rounded-full px-3 py-1 text-sm text-gray-600 mr-2 my-2\"),\n      key: id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }\n    }, name));\n  }), \"----\", prod, \"----\"), __jsx(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"mb-4 prose-sm prose sm:prose lg:prose-lg\",\n    escapeHtml: false,\n    source: post.content,\n    renderers: {\n      code: CodeBlock,\n      image: utils_helpers__WEBPACK_IMPORTED_MODULE_7__[\"MarkdownImage\"]\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }), __jsx(\"hr\", {\n    className: \"mt-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }), __jsx(\"footer\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  })), __jsx(\"nav\", {\n    className: \"flex flex-wrap justify-between mb-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, previousPost ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/post/[slug]\",\n    as: \"/post/\".concat(previousPost.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"text-lg font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"\\u2190\", ' ', previousPost.frontmatter.title)) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }), nextPost ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/post/[slug]\",\n    as: \"/post/\".concat(nextPost.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"text-lg font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, nextPost.frontmatter.title, ' ', \"\\u2192\")) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  })), __jsx(disqus_react__WEBPACK_IMPORTED_MODULE_4___default.a.DiscussionEmbed, {\n    shortname: disqusShortname,\n    config: disqusConfig,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }));\n}\n_c2 = Post;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CodeBlock\");\n$RefreshReg$(_c2, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/NTM1NCJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJsYW5ndWFnZSIsInZhbHVlIiwiUG9zdCIsInBvc3REYXRhIiwidGFncyIsInNvcnRlZFRvcGljcyIsImFsbFRvcGljcyIsInNsdWciLCJnZXRTaXRlTWV0YURhdGEiLCJzaXRlVXJsIiwiZGlzcXVzIiwicG9zdCIsImZyb250bWF0dGVyIiwibmV4dFBvc3QiLCJwcmV2aW91c1Bvc3QiLCJkaXNxdXNTaG9ydG5hbWUiLCJob3N0bmFtZSIsImRpc3F1c0NvbmZpZyIsInVybCIsImlkZW50aWZpZXIiLCJ0aXRsZSIsInByb2QiLCJkZXNjcmlwdGlvbiIsImV4Y2VycHQiLCJkYXRlIiwiYXV0aG9yIiwibmFtZSIsInRvcGljIiwiaWQiLCJtYXAiLCJjb2xvciIsImNvbnRlbnQiLCJjb2RlIiwiaW1hZ2UiLCJNYXJrZG93bkltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXlCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN6QyxTQUFPLE1BQUMsOERBQUQ7QUFBbUIsWUFBUSxFQUFFRCxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDQyxLQUF4QyxDQUFQO0FBQ0QsQ0FGRDs7S0FBTUYsUzs7QUFJUyxTQUFTRyxJQUFULFFBQStEO0FBQUE7O0FBQUEsTUFBaERDLFFBQWdELFNBQWhEQSxRQUFnRDtBQUFBLE1BQXRDQyxJQUFzQyxTQUF0Q0EsSUFBc0M7QUFBQSxNQUFoQ0MsWUFBZ0MsU0FBaENBLFlBQWdDO0FBQUEsTUFBbEJDLFNBQWtCLFNBQWxCQSxTQUFrQjtBQUFBLE1BQVBDLElBQU8sU0FBUEEsSUFBTzs7QUFBQSx5QkFDaERDLHFFQUFlLEVBRGlDO0FBQUEsTUFDcEVDLE9BRG9FLG9CQUNwRUEsT0FEb0U7QUFBQSxNQUMzREMsTUFEMkQsb0JBQzNEQSxNQUQyRDs7QUFBQSxNQUVwRUMsSUFGb0UsR0FFdEJSLFFBRnNCLENBRXBFUSxJQUZvRTtBQUFBLE1BRTlEQyxXQUY4RCxHQUV0QlQsUUFGc0IsQ0FFOURTLFdBRjhEO0FBQUEsTUFFakRDLFFBRmlELEdBRXRCVixRQUZzQixDQUVqRFUsUUFGaUQ7QUFBQSxNQUV2Q0MsWUFGdUMsR0FFdEJYLFFBRnNCLENBRXZDVyxZQUZ1QztBQUc1RSxNQUFNQyxlQUFlLEdBQUdMLE1BQU0sQ0FBQ00sUUFBL0I7QUFDQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLE9BQUcsRUFBRVQsT0FEYztBQUVuQlUsY0FBVSxFQUFFWixJQUZPO0FBR25CYSxTQUFLLEVBQUVSLFdBQVcsQ0FBQ1E7QUFIQSxHQUFyQjtBQUtBLE1BQU1DLElBQUksUUFBVjtBQUNBLFNBQ0UsTUFBQyx5REFBRDtBQUFRLFFBQUksRUFBRWpCLElBQWQ7QUFBb0IsZ0JBQVksRUFBRUMsWUFBbEM7QUFBZ0QsYUFBUyxFQUFFQyxTQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLFNBQUssRUFBRU0sV0FBVyxDQUFDUSxLQURyQjtBQUVFLGVBQVcsRUFBRVIsV0FBVyxDQUFDVSxXQUFaLElBQTJCWCxJQUFJLENBQUNZLE9BRi9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsbUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxXQUFXLENBQUNRLEtBRGYsQ0FERixFQUlFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixXQUFXLENBQUNZLElBRGYsRUFFRyxHQUZILFFBSUcsR0FKSCxFQUtHWixXQUFXLENBQUNhLE1BQVosQ0FBbUJDLElBTHRCLEVBTUcsR0FOSCxXQVFHLEdBUkgsRUFTRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGdCQUFYO0FBQTRCLE1BQUUsbUJBQVlkLFdBQVcsQ0FBQ2UsS0FBWixDQUFrQkMsRUFBOUIsQ0FBOUI7QUFBa0UsT0FBRyxFQUFFaEIsV0FBVyxDQUFDZSxLQUFaLENBQWtCQyxFQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsRUFBYjtBQUFnQixPQUFHLEVBQUVoQixXQUFXLENBQUNlLEtBQVosQ0FBa0JDLEVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNENoQixXQUFXLENBQUNlLEtBQVosQ0FBa0JELElBQTlELENBREYsQ0FURixDQUpGLEVBaUJHZCxXQUFXLENBQUNSLElBQVosQ0FBaUJ5QixHQUFqQixDQUFxQjtBQUFBLFFBQUVELEVBQUYsU0FBRUEsRUFBRjtBQUFBLFFBQU1FLEtBQU4sU0FBTUEsS0FBTjtBQUFBLFFBQWFKLElBQWIsU0FBYUEsSUFBYjtBQUFBLFdBQ3BCLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsWUFBWDtBQUF3QixRQUFFLGlCQUFVRSxFQUFWLENBQTFCO0FBQTBDLFNBQUcsRUFBRUEsRUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyx5QkFBa0JFLEtBQWxCLDREQUFaO0FBQThGLFNBQUcsRUFBRUYsRUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3R0YsSUFBeEcsQ0FERixDQURvQjtBQUFBLEdBQXJCLENBakJILFVBc0JPTCxJQXRCUCxTQURGLEVBeUJFLE1BQUMsK0RBQUQ7QUFDRSxhQUFTLEVBQUMsMENBRFo7QUFFRSxjQUFVLEVBQUUsS0FGZDtBQUdFLFVBQU0sRUFBRVYsSUFBSSxDQUFDb0IsT0FIZjtBQUlFLGFBQVMsRUFBRTtBQUFFQyxVQUFJLEVBQUVqQyxTQUFSO0FBQW1Ca0MsV0FBSyxFQUFFQywyREFBYUE7QUFBdkMsS0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekJGLEVBK0JFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CRixFQWdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaENGLENBTkYsRUF3Q0U7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHcEIsWUFBWSxHQUNYLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixNQUFFLGtCQUFXQSxZQUFZLENBQUNQLElBQXhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUcsR0FGSCxFQUdHTyxZQUFZLENBQUNGLFdBQWIsQ0FBeUJRLEtBSDVCLENBREYsQ0FEVyxHQVNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVlHUCxRQUFRLEdBQ1AsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLE1BQUUsa0JBQVdBLFFBQVEsQ0FBQ04sSUFBcEIsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR00sUUFBUSxDQUFDRCxXQUFULENBQXFCUSxLQUR4QixFQUVHLEdBRkgsV0FERixDQURPLEdBU1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSixDQXhDRixFQWdFRSxNQUFDLG1EQUFELENBQVEsZUFBUjtBQUNFLGFBQVMsRUFBRUwsZUFEYjtBQUVFLFVBQU0sRUFBRUUsWUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEVGLENBREY7QUF1RUQ7TUFqRnVCZixJIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdC9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duL3dpdGgtaHRtbFwiO1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5pbXBvcnQgRGlzcXVzIGZyb20gXCJkaXNxdXMtcmVhY3RcIlxuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFNFTyBmcm9tIFwiY29tcG9uZW50cy9TZW9cIjtcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldFBvc3RzU2x1Z3MgfSBmcm9tIFwidXRpbHMvcG9zdHNcIjtcbmltcG9ydCB7IGdldFNvcnRlZFRhZ3MgfSBmcm9tIFwidXRpbHMvdGFnc1wiO1xuaW1wb3J0IHsgZ2V0U29ydGVkVG9waWNzLCBnZXRBbGxUb3BpY3MgfSBmcm9tIFwidXRpbHMvdG9waWNzXCI7XG5pbXBvcnQgeyBNYXJrZG93bkltYWdlLCBnZXRTaXRlTWV0YURhdGEgfSBmcm9tIFwidXRpbHMvaGVscGVyc1wiO1xuXG5jb25zdCBDb2RlQmxvY2sgPSAoeyBsYW5ndWFnZSwgdmFsdWUgfSkgPT4ge1xuICByZXR1cm4gPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPXtsYW5ndWFnZX0+e3ZhbHVlfTwvU3ludGF4SGlnaGxpZ2h0ZXI+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7cG9zdERhdGEsIHRhZ3MsIHNvcnRlZFRvcGljcywgYWxsVG9waWNzLCBzbHVnfSkge1xuICBjb25zdCB7IHNpdGVVcmwsIGRpc3F1cyB9ID0gZ2V0U2l0ZU1ldGFEYXRhKCk7XG4gIGNvbnN0IHsgcG9zdCwgZnJvbnRtYXR0ZXIsIG5leHRQb3N0LCBwcmV2aW91c1Bvc3QgfSA9IHBvc3REYXRhO1xuICBjb25zdCBkaXNxdXNTaG9ydG5hbWUgPSBkaXNxdXMuaG9zdG5hbWVcbiAgY29uc3QgZGlzcXVzQ29uZmlnID0ge1xuICAgIHVybDogc2l0ZVVybCxcbiAgICBpZGVudGlmaWVyOiBzbHVnLFxuICAgIHRpdGxlOiBmcm9udG1hdHRlci50aXRsZVxuICB9XG4gIGNvbnN0IHByb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0YWdzPXt0YWdzfSBzb3J0ZWRUb3BpY3M9e3NvcnRlZFRvcGljc30gYWxsVG9waWNzPXthbGxUb3BpY3N9PlxuICAgICAgPFNFT1xuICAgICAgICB0aXRsZT17ZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtmcm9udG1hdHRlci5kZXNjcmlwdGlvbiB8fCBwb3N0LmV4Y2VycHR9XG4gICAgICAvPlxuXG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0zeGwgbGc6dGV4dC00eGwgbGVhZGluZy1ub25lIGZvbnQtZGlzcGxheSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7ZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1iLTJcIj5cbiAgICAgICAgICAgIHtmcm9udG1hdHRlci5kYXRlfVxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIGJ5IFxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtmcm9udG1hdHRlci5hdXRob3IubmFtZX1cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICB1bmRlclxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdG9waWMvW3RvcGljXVwiIGFzPXtgL3RvcGljLyR7ZnJvbnRtYXR0ZXIudG9waWMuaWR9YH0ga2V5PXtmcm9udG1hdHRlci50b3BpYy5pZH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nJyBrZXk9e2Zyb250bWF0dGVyLnRvcGljLmlkfT57ZnJvbnRtYXR0ZXIudG9waWMubmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHtmcm9udG1hdHRlci50YWdzLm1hcCgoe2lkLCBjb2xvciwgbmFtZX0pID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGFnL1t0YWddXCIgYXM9e2AvdGFnLyR7aWR9YH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayAke2NvbG9yfSByb3VuZGVkLWZ1bGwgcHgtMyBweS0xIHRleHQtc20gdGV4dC1ncmF5LTYwMCBtci0yIG15LTJgfSBrZXk9e2lkfT57bmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgLS0tLXtwcm9kfS0tLS1cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItNCBwcm9zZS1zbSBwcm9zZSBzbTpwcm9zZSBsZzpwcm9zZS1sZ1wiXG4gICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XG4gICAgICAgICAgc291cmNlPXtwb3N0LmNvbnRlbnR9XG4gICAgICAgICAgcmVuZGVyZXJzPXt7IGNvZGU6IENvZGVCbG9jaywgaW1hZ2U6IE1hcmtkb3duSW1hZ2UgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTRcIiAvPlxuICAgICAgICA8Zm9vdGVyIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBtYi0xMFwiPlxuICAgICAgICB7cHJldmlvdXNQb3N0ID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7cHJldmlvdXNQb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICDihpAgXG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHtwcmV2aW91c1Bvc3QuZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKX1cbiAgICAgICAge25leHRQb3N0ID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7bmV4dFBvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIHtuZXh0UG9zdC5mcm9udG1hdHRlci50aXRsZX1cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAg4oaSXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvbmF2PlxuICAgICAgPERpc3F1cy5EaXNjdXNzaW9uRW1iZWRcbiAgICAgICAgc2hvcnRuYW1lPXtkaXNxdXNTaG9ydG5hbWV9XG4gICAgICAgIGNvbmZpZz17ZGlzcXVzQ29uZmlnfVxuICAgICAgLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldFBvc3RzU2x1Z3MoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XG4gIGNvbnN0IHBvc3REYXRhID0gZ2V0UG9zdEJ5U2x1ZyhzbHVnKTtcblxuICBpZiAoIXBvc3REYXRhLnByZXZpb3VzUG9zdCkge1xuICAgIHBvc3REYXRhLnByZXZpb3VzUG9zdCA9IG51bGw7XG4gIH1cblxuICBpZiAoIXBvc3REYXRhLm5leHRQb3N0KSB7XG4gICAgcG9zdERhdGEubmV4dFBvc3QgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgdGFncyA9IGdldFNvcnRlZFRhZ3MoKTtcbiAgY29uc3Qgc29ydGVkVG9waWNzID0gZ2V0U29ydGVkVG9waWNzKCk7XG4gIGNvbnN0IGFsbFRvcGljcyA9IGdldEFsbFRvcGljcygpO1xuXG4gIHJldHVybiB7IFxuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YSxcbiAgICAgIHRhZ3MsXG4gICAgICBzb3J0ZWRUb3BpY3MsXG4gICAgICBhbGxUb3BpY3MsXG4gICAgICBzbHVnXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})