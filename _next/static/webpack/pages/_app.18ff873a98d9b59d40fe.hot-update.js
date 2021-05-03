webpackHotUpdate_N_E("pages/_app",{

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: getSiteMetaData, MarkdownImage, AppIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSiteMetaData\", function() { return getSiteMetaData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarkdownImage\", function() { return MarkdownImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppIcon\", function() { return AppIcon; });\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Image */ \"./components/Image.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../site.config */ \"./site.config.js\");\n\n\nvar _jsxFileName = \"/app/utils/helpers.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n/* eslint-disable import/no-dynamic-require */\n\n/* eslint-disable global-require */\n\n/* eslint-disable react/prop-types */\n\n\n\nfunction getSiteMetaData() {\n  return _site_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].siteMetadata;\n}\nfunction MarkdownImage(_ref) {\n  var alt = _ref.alt,\n      src = _ref.src;\n\n  if (src.startsWith('https')) {\n    return __jsx(components_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      alt: alt,\n      src: src,\n      className: \"w-full mx-auto\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 7\n      }\n    });\n  }\n\n  return __jsx(components_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    alt: alt,\n    src: __webpack_require__(\"./content/assets sync recursive ^\\\\.\\\\/.*$?7de8\")(\"./\".concat(src)),\n    previewSrc: __webpack_require__(\"./content/assets sync recursive ^\\\\.\\\\/.*$?8949\")(\"./\".concat(src, \"\")),\n    className: \"w-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  });\n}\n_c = MarkdownImage;\nfunction AppIcon(props) {\n  // eslint-disable-next-line react/prop-types\n  var link = props.link,\n      icon = props.icon,\n      width = props.width,\n      moreProps = Object(_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, [\"link\", \"icon\", \"width\"]);\n\n  return __jsx(\"a\", {\n    href: link,\n    className: \"inline-block hover:text-blue-700 no-label px-2\",\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__[\"FontAwesomeIcon\"], Object(_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    width: width,\n    icon: icon\n  }, moreProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  })));\n}\n_c2 = AppIcon;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MarkdownImage\");\n$RefreshReg$(_c2, \"AppIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaGVscGVycy5qcz8yMDVmIl0sIm5hbWVzIjpbImdldFNpdGVNZXRhRGF0YSIsIlNpdGVDb25maWciLCJzaXRlTWV0YWRhdGEiLCJNYXJrZG93bkltYWdlIiwiYWx0Iiwic3JjIiwic3RhcnRzV2l0aCIsInJlcXVpcmUiLCJBcHBJY29uIiwicHJvcHMiLCJsaW5rIiwiaWNvbiIsIndpZHRoIiwibW9yZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsZUFBVCxHQUEyQjtBQUNoQyxTQUFPQyxvREFBVSxDQUFDQyxZQUFsQjtBQUNEO0FBRU0sU0FBU0MsYUFBVCxPQUFxQztBQUFBLE1BQVpDLEdBQVksUUFBWkEsR0FBWTtBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFDMUMsTUFBSUEsR0FBRyxDQUFDQyxVQUFKLENBQWUsT0FBZixDQUFKLEVBQTZCO0FBQzNCLFdBQ0UsTUFBQyx3REFBRDtBQUNFLFNBQUcsRUFBRUYsR0FEUDtBQUVFLFNBQUcsRUFBRUMsR0FGUDtBQUdFLGVBQVMsRUFBQyxnQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFPRDs7QUFDRCxTQUNFLE1BQUMsd0RBQUQ7QUFDRSxPQUFHLEVBQUVELEdBRFA7QUFFRSxPQUFHLEVBQUVHLHVFQUFRLFlBQXFCRixHQUF0QixFQUZkO0FBR0UsY0FBVSxFQUFFRSx1RUFBUSxZQUFxQkYsR0FBdEIsTUFIckI7QUFJRSxhQUFTLEVBQUMsUUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFRRDtLQWxCZUYsYTtBQW9CVCxTQUFTSyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUM3QjtBQUQ2QixNQUVyQkMsSUFGcUIsR0FFZUQsS0FGZixDQUVyQkMsSUFGcUI7QUFBQSxNQUVmQyxJQUZlLEdBRWVGLEtBRmYsQ0FFZkUsSUFGZTtBQUFBLE1BRVRDLEtBRlMsR0FFZUgsS0FGZixDQUVURyxLQUZTO0FBQUEsTUFFQ0MsU0FGRCx1SEFFZUosS0FGZjs7QUFHN0IsU0FDRTtBQUNFLFFBQUksRUFBRUMsSUFEUjtBQUVFLGFBQVMsRUFBQyxnREFGWjtBQUdFLFVBQU0sRUFBQyxRQUhUO0FBSUUsT0FBRyxFQUFDLFlBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsOEVBQUQ7QUFBaUIsU0FBSyxFQUFFRSxLQUF4QjtBQUErQixRQUFJLEVBQUVEO0FBQXJDLEtBQStDRSxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkYsQ0FERjtBQVVEO01BYmVMLE8iLCJmaWxlIjoiLi91dGlscy9oZWxwZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWR5bmFtaWMtcmVxdWlyZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBJbWFnZSBmcm9tIFwiY29tcG9uZW50cy9JbWFnZVwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IFNpdGVDb25maWcgZnJvbSBcIi4uL3NpdGUuY29uZmlnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXRlTWV0YURhdGEoKSB7XG4gIHJldHVybiBTaXRlQ29uZmlnLnNpdGVNZXRhZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1hcmtkb3duSW1hZ2UoeyBhbHQsIHNyYyB9KSB7XG4gIGlmIChzcmMuc3RhcnRzV2l0aCgnaHR0cHMnKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SW1hZ2VcbiAgICAgICAgYWx0PXthbHR9XG4gICAgICAgIHNyYz17c3JjfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0b1wiXG4gICAgICAvPlxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxJbWFnZVxuICAgICAgYWx0PXthbHR9XG4gICAgICBzcmM9e3JlcXVpcmUoYC4uL2NvbnRlbnQvYXNzZXRzLyR7c3JjfWApfVxuICAgICAgcHJldmlld1NyYz17cmVxdWlyZShgLi4vY29udGVudC9hc3NldHMvJHtzcmN9P2xxaXBgKX1cbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwSWNvbihwcm9wcykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICBjb25zdCB7IGxpbmssIGljb24sIHdpZHRoLCAuLi5tb3JlUHJvcHMgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGhyZWY9e2xpbmt9XG4gICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaG92ZXI6dGV4dC1ibHVlLTcwMCBuby1sYWJlbCBweC0yXCJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICByZWw9J25vcmVmZXJyZXInXG4gICAgPlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiB3aWR0aD17d2lkdGh9IGljb249e2ljb259IHsuLi5tb3JlUHJvcHN9IC8+XG4gICAgPC9hPlxuICApO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/helpers.js\n");

/***/ })

})