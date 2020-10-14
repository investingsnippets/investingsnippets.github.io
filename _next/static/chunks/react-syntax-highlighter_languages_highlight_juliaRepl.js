(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_juliaRepl"],{

/***/ "./node_modules/highlight.js/lib/languages/julia-repl.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/julia-repl.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Julia REPL\nDescription: Julia REPL sessions\nAuthor: Morten Piibeleht <morten.piibeleht@gmail.com>\nWebsite: https://julialang.org\nRequires: julia.js\n\nThe Julia REPL code blocks look something like the following:\n\n  julia> function foo(x)\n             x + 1\n         end\n  foo (generic function with 1 method)\n\nThey start on a new line with \"julia>\". Usually there should also be a space after this, but\nwe also allow the code to start right after the > character. The code may run over multiple\nlines, but the additional lines must start with six spaces (i.e. be indented to match\n\"julia>\"). The rest of the code is assumed to be output from the executed code and will be\nleft un-highlighted.\n\nUsing simply spaces to identify line continuations may get a false-positive if the output\nalso prints out six spaces, but such cases should be rare.\n*/\n\nfunction juliaRepl(hljs) {\n  return {\n    name: 'Julia REPL',\n    contains: [\n      {\n        className: 'meta',\n        begin: /^julia>/,\n        relevance: 10,\n        starts: {\n          // end the highlighting if we are on a new line and the line does not have at\n          // least six spaces in the beginning\n          end: /^(?![ ]{6})/,\n          subLanguage: 'julia'\n      },\n      // jldoctest Markdown blocks are used in the Julia manual and package docs indicate\n      // code snippets that should be verified when the documentation is built. They can be\n      // either REPL-like or script-like, but are usually REPL-like and therefore we apply\n      // julia-repl highlighting to them. More information can be found in Documenter's\n      // manual: https://juliadocs.github.io/Documenter.jl/latest/man/doctests.html\n      aliases: ['jldoctest']\n      }\n    ]\n  }\n}\n\nmodule.exports = juliaRepl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2p1bGlhLXJlcGwuanM/YjdhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixFQUFFO0FBQzFCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2p1bGlhLXJlcGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEp1bGlhIFJFUExcbkRlc2NyaXB0aW9uOiBKdWxpYSBSRVBMIHNlc3Npb25zXG5BdXRob3I6IE1vcnRlbiBQaWliZWxlaHQgPG1vcnRlbi5waWliZWxlaHRAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9qdWxpYWxhbmcub3JnXG5SZXF1aXJlczoganVsaWEuanNcblxuVGhlIEp1bGlhIFJFUEwgY29kZSBibG9ja3MgbG9vayBzb21ldGhpbmcgbGlrZSB0aGUgZm9sbG93aW5nOlxuXG4gIGp1bGlhPiBmdW5jdGlvbiBmb28oeClcbiAgICAgICAgICAgICB4ICsgMVxuICAgICAgICAgZW5kXG4gIGZvbyAoZ2VuZXJpYyBmdW5jdGlvbiB3aXRoIDEgbWV0aG9kKVxuXG5UaGV5IHN0YXJ0IG9uIGEgbmV3IGxpbmUgd2l0aCBcImp1bGlhPlwiLiBVc3VhbGx5IHRoZXJlIHNob3VsZCBhbHNvIGJlIGEgc3BhY2UgYWZ0ZXIgdGhpcywgYnV0XG53ZSBhbHNvIGFsbG93IHRoZSBjb2RlIHRvIHN0YXJ0IHJpZ2h0IGFmdGVyIHRoZSA+IGNoYXJhY3Rlci4gVGhlIGNvZGUgbWF5IHJ1biBvdmVyIG11bHRpcGxlXG5saW5lcywgYnV0IHRoZSBhZGRpdGlvbmFsIGxpbmVzIG11c3Qgc3RhcnQgd2l0aCBzaXggc3BhY2VzIChpLmUuIGJlIGluZGVudGVkIHRvIG1hdGNoXG5cImp1bGlhPlwiKS4gVGhlIHJlc3Qgb2YgdGhlIGNvZGUgaXMgYXNzdW1lZCB0byBiZSBvdXRwdXQgZnJvbSB0aGUgZXhlY3V0ZWQgY29kZSBhbmQgd2lsbCBiZVxubGVmdCB1bi1oaWdobGlnaHRlZC5cblxuVXNpbmcgc2ltcGx5IHNwYWNlcyB0byBpZGVudGlmeSBsaW5lIGNvbnRpbnVhdGlvbnMgbWF5IGdldCBhIGZhbHNlLXBvc2l0aXZlIGlmIHRoZSBvdXRwdXRcbmFsc28gcHJpbnRzIG91dCBzaXggc3BhY2VzLCBidXQgc3VjaCBjYXNlcyBzaG91bGQgYmUgcmFyZS5cbiovXG5cbmZ1bmN0aW9uIGp1bGlhUmVwbChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0p1bGlhIFJFUEwnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogL15qdWxpYT4vLFxuICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAvLyBlbmQgdGhlIGhpZ2hsaWdodGluZyBpZiB3ZSBhcmUgb24gYSBuZXcgbGluZSBhbmQgdGhlIGxpbmUgZG9lcyBub3QgaGF2ZSBhdFxuICAgICAgICAgIC8vIGxlYXN0IHNpeCBzcGFjZXMgaW4gdGhlIGJlZ2lubmluZ1xuICAgICAgICAgIGVuZDogL14oPyFbIF17Nn0pLyxcbiAgICAgICAgICBzdWJMYW5ndWFnZTogJ2p1bGlhJ1xuICAgICAgfSxcbiAgICAgIC8vIGpsZG9jdGVzdCBNYXJrZG93biBibG9ja3MgYXJlIHVzZWQgaW4gdGhlIEp1bGlhIG1hbnVhbCBhbmQgcGFja2FnZSBkb2NzIGluZGljYXRlXG4gICAgICAvLyBjb2RlIHNuaXBwZXRzIHRoYXQgc2hvdWxkIGJlIHZlcmlmaWVkIHdoZW4gdGhlIGRvY3VtZW50YXRpb24gaXMgYnVpbHQuIFRoZXkgY2FuIGJlXG4gICAgICAvLyBlaXRoZXIgUkVQTC1saWtlIG9yIHNjcmlwdC1saWtlLCBidXQgYXJlIHVzdWFsbHkgUkVQTC1saWtlIGFuZCB0aGVyZWZvcmUgd2UgYXBwbHlcbiAgICAgIC8vIGp1bGlhLXJlcGwgaGlnaGxpZ2h0aW5nIHRvIHRoZW0uIE1vcmUgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIERvY3VtZW50ZXInc1xuICAgICAgLy8gbWFudWFsOiBodHRwczovL2p1bGlhZG9jcy5naXRodWIuaW8vRG9jdW1lbnRlci5qbC9sYXRlc3QvbWFuL2RvY3Rlc3RzLmh0bWxcbiAgICAgIGFsaWFzZXM6IFsnamxkb2N0ZXN0J11cbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqdWxpYVJlcGw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/julia-repl.js\n");

/***/ })

}]);