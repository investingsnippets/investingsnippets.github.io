(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_clojureRepl"],{

/***/ "./node_modules/highlight.js/lib/languages/clojure-repl.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/clojure-repl.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Clojure REPL\nDescription: Clojure REPL sessions\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nRequires: clojure.js\nWebsite: https://clojure.org\nCategory: lisp\n*/\n\n/** @type LanguageFn */\nfunction clojureRepl(hljs) {\n  return {\n    name: 'Clojure REPL',\n    contains: [\n      {\n        className: 'meta',\n        begin: /^([\\w.-]+|\\s*#_)?=>/,\n        starts: {\n          end: /$/,\n          subLanguage: 'clojure'\n        }\n      }\n    ]\n  }\n}\n\nmodule.exports = clojureRepl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nsb2p1cmUtcmVwbC5qcz8xNDlkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY2xvanVyZS1yZXBsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBDbG9qdXJlIFJFUExcbkRlc2NyaXB0aW9uOiBDbG9qdXJlIFJFUEwgc2Vzc2lvbnNcbkF1dGhvcjogSXZhbiBTYWdhbGFldiA8bWFuaWFjQHNvZnR3YXJlbWFuaWFjcy5vcmc+XG5SZXF1aXJlczogY2xvanVyZS5qc1xuV2Vic2l0ZTogaHR0cHM6Ly9jbG9qdXJlLm9yZ1xuQ2F0ZWdvcnk6IGxpc3BcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjbG9qdXJlUmVwbChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0Nsb2p1cmUgUkVQTCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAvXihbXFx3Li1dK3xcXHMqI18pPz0+LyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6ICdjbG9qdXJlJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvanVyZVJlcGw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/clojure-repl.js\n");

/***/ })

}]);