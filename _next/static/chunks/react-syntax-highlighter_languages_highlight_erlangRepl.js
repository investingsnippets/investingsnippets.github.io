(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_erlangRepl"],{

/***/ "./node_modules/highlight.js/lib/languages/erlang-repl.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/erlang-repl.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Erlang REPL\nAuthor: Sergey Ignatov <sergey@ignatov.spb.su>\nWebsite: https://www.erlang.org\nCategory: functional\n*/\n\nfunction erlangRepl(hljs) {\n  return {\n    name: 'Erlang REPL',\n    keywords: {\n      built_in:\n        'spawn spawn_link self',\n      keyword:\n        'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if ' +\n        'let not of or orelse|10 query receive rem try when xor'\n    },\n    contains: [\n      {\n        className: 'meta', begin: '^[0-9]+> ',\n        relevance: 10\n      },\n      hljs.COMMENT('%', '$'),\n      {\n        className: 'number',\n        begin: '\\\\b(\\\\d+(_\\\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\\\d+(_\\\\d+)*(\\\\.\\\\d+(_\\\\d+)*)?([eE][-+]?\\\\d+)?)',\n        relevance: 0\n      },\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      {\n        begin: '\\\\?(::)?([A-Z]\\\\w*(::)?)+'\n      },\n      {\n        begin: '->'\n      },\n      {\n        begin: 'ok'\n      },\n      {\n        begin: '!'\n      },\n      {\n        begin: '(\\\\b[a-z\\'][a-zA-Z0-9_\\']*:[a-z\\'][a-zA-Z0-9_\\']*)|(\\\\b[a-z\\'][a-zA-Z0-9_\\']*)',\n        relevance: 0\n      },\n      {\n        begin: '[A-Z][a-zA-Z0-9_\\']*',\n        relevance: 0\n      }\n    ]\n  };\n}\n\nmodule.exports = erlangRepl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VybGFuZy1yZXBsLmpzP2Y0OTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9lcmxhbmctcmVwbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRXJsYW5nIFJFUExcbkF1dGhvcjogU2VyZ2V5IElnbmF0b3YgPHNlcmdleUBpZ25hdG92LnNwYi5zdT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LmVybGFuZy5vcmdcbkNhdGVnb3J5OiBmdW5jdGlvbmFsXG4qL1xuXG5mdW5jdGlvbiBlcmxhbmdSZXBsKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRXJsYW5nIFJFUEwnLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ3NwYXduIHNwYXduX2xpbmsgc2VsZicsXG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnYWZ0ZXIgYW5kIGFuZGFsc298MTAgYmFuZCBiZWdpbiBibm90IGJvciBic2wgYnNyIGJ4b3IgY2FzZSBjYXRjaCBjb25kIGRpdiBlbmQgZnVuIGlmICcgK1xuICAgICAgICAnbGV0IG5vdCBvZiBvciBvcmVsc2V8MTAgcXVlcnkgcmVjZWl2ZSByZW0gdHJ5IHdoZW4geG9yJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsIGJlZ2luOiAnXlswLTldKz4gJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnJScsICckJyksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoXFxcXGQrKF9cXFxcZCspKiNbYS1mQS1GMC05XSsoX1thLWZBLUYwLTldKykqfFxcXFxkKyhfXFxcXGQrKSooXFxcXC5cXFxcZCsoX1xcXFxkKykqKT8oW2VFXVstK10/XFxcXGQrKT8pJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcPyg6Oik/KFtBLVpdXFxcXHcqKDo6KT8pKydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnLT4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ29rJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICchJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcoXFxcXGJbYS16XFwnXVthLXpBLVowLTlfXFwnXSo6W2EtelxcJ11bYS16QS1aMC05X1xcJ10qKXwoXFxcXGJbYS16XFwnXVthLXpBLVowLTlfXFwnXSopJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1tBLVpdW2EtekEtWjAtOV9cXCddKicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcmxhbmdSZXBsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/erlang-repl.js\n");

/***/ })

}]);