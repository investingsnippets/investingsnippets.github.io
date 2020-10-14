(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_bnf"],{

/***/ "./node_modules/highlight.js/lib/languages/bnf.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/bnf.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Backus–Naur Form\nWebsite: https://en.wikipedia.org/wiki/Backus–Naur_form\nAuthor: Oleg Efimov <efimovov@gmail.com>\n*/\n\n/** @type LanguageFn */\nfunction bnf(hljs) {\n  return {\n    name: 'Backus–Naur Form',\n    contains: [\n      // Attribute\n      {\n        className: 'attribute',\n        begin: /</, end: />/\n      },\n      // Specific\n      {\n        begin: /::=/,\n        end: /$/,\n        contains: [\n          {\n            begin: /</, end: />/\n          },\n          // Common\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          hljs.APOS_STRING_MODE,\n          hljs.QUOTE_STRING_MODE\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = bnf;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2JuZi5qcz83NWRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2JuZi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQmFja3Vz4oCTTmF1ciBGb3JtXG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYWNrdXPigJNOYXVyX2Zvcm1cbkF1dGhvcjogT2xlZyBFZmltb3YgPGVmaW1vdm92QGdtYWlsLmNvbT5cbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBibmYoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdCYWNrdXPigJNOYXVyIEZvcm0nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAvLyBBdHRyaWJ1dGVcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgYmVnaW46IC88LywgZW5kOiAvPi9cbiAgICAgIH0sXG4gICAgICAvLyBTcGVjaWZpY1xuICAgICAge1xuICAgICAgICBiZWdpbjogLzo6PS8sXG4gICAgICAgIGVuZDogLyQvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvPC8sIGVuZDogLz4vXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBDb21tb25cbiAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJuZjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/bnf.js\n");

/***/ })

}]);