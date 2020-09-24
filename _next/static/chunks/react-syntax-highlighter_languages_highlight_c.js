(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_c"],{

/***/ "./node_modules/highlight.js/lib/languages/c.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/c.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: C\nCategory: common, system\nWebsite: https://en.wikipedia.org/wiki/C_(programming_language)\nRequires: c-like.js\n*/\n\n/** @type LanguageFn */\nfunction c(hljs) {\n  var lang = hljs.requireLanguage('c-like').rawDefinition();\n  // Until C is actually different than C++ there is no reason to auto-detect C\n  // as it's own language since it would just fail auto-detect testing or\n  // simply match with C++.\n  //\n  // See further comments in c-like.js.\n\n  // lang.disableAutodetect = false;\n  lang.name = 'C';\n  lang.aliases = ['c', 'h'];\n  return lang;\n}\n\nmodule.exports = c;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2MuanM/MWZlNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENcbkNhdGVnb3J5OiBjb21tb24sIHN5c3RlbVxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ18ocHJvZ3JhbW1pbmdfbGFuZ3VhZ2UpXG5SZXF1aXJlczogYy1saWtlLmpzXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYyhobGpzKSB7XG4gIHZhciBsYW5nID0gaGxqcy5yZXF1aXJlTGFuZ3VhZ2UoJ2MtbGlrZScpLnJhd0RlZmluaXRpb24oKTtcbiAgLy8gVW50aWwgQyBpcyBhY3R1YWxseSBkaWZmZXJlbnQgdGhhbiBDKysgdGhlcmUgaXMgbm8gcmVhc29uIHRvIGF1dG8tZGV0ZWN0IENcbiAgLy8gYXMgaXQncyBvd24gbGFuZ3VhZ2Ugc2luY2UgaXQgd291bGQganVzdCBmYWlsIGF1dG8tZGV0ZWN0IHRlc3Rpbmcgb3JcbiAgLy8gc2ltcGx5IG1hdGNoIHdpdGggQysrLlxuICAvL1xuICAvLyBTZWUgZnVydGhlciBjb21tZW50cyBpbiBjLWxpa2UuanMuXG5cbiAgLy8gbGFuZy5kaXNhYmxlQXV0b2RldGVjdCA9IGZhbHNlO1xuICBsYW5nLm5hbWUgPSAnQyc7XG4gIGxhbmcuYWxpYXNlcyA9IFsnYycsICdoJ107XG4gIHJldHVybiBsYW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/c.js\n");

/***/ })

}]);