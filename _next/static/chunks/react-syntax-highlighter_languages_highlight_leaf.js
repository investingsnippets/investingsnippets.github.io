(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_leaf"],{

/***/ "./node_modules/highlight.js/lib/languages/leaf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/leaf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Leaf\nAuthor: Hale Chan <halechan@qq.com>\nDescription: Based on the Leaf reference from https://vapor.github.io/documentation/guide/leaf.html.\n*/\n\nfunction leaf (hljs) {\n  return {\n    name: 'Leaf',\n    contains: [\n      {\n        className: 'function',\n        begin: '#+' + '[A-Za-z_0-9]*' + '\\\\(',\n        end:' {',\n        returnBegin: true,\n        excludeEnd: true,\n        contains : [\n          {\n            className: 'keyword',\n            begin: '#+'\n          },\n          {\n            className: 'title',\n            begin: '[A-Za-z_][A-Za-z_0-9]*'\n          },\n          {\n            className: 'params',\n            begin: '\\\\(', end: '\\\\)',\n            endsParent: true,\n            contains: [\n              {\n                className: 'string',\n                begin: '\"',\n                end: '\"'\n              },\n              {\n                className: 'variable',\n                begin: '[A-Za-z_][A-Za-z_0-9]*'\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = leaf;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xlYWYuanM/MmU5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbGVhZi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTGVhZlxuQXV0aG9yOiBIYWxlIENoYW4gPGhhbGVjaGFuQHFxLmNvbT5cbkRlc2NyaXB0aW9uOiBCYXNlZCBvbiB0aGUgTGVhZiByZWZlcmVuY2UgZnJvbSBodHRwczovL3ZhcG9yLmdpdGh1Yi5pby9kb2N1bWVudGF0aW9uL2d1aWRlL2xlYWYuaHRtbC5cbiovXG5cbmZ1bmN0aW9uIGxlYWYgKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTGVhZicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogJyMrJyArICdbQS1aYS16XzAtOV0qJyArICdcXFxcKCcsXG4gICAgICAgIGVuZDonIHsnLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnMgOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICBiZWdpbjogJyMrJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgYmVnaW46ICdbQS1aYS16X11bQS1aYS16XzAtOV0qJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsXG4gICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgYmVnaW46ICdcIicsXG4gICAgICAgICAgICAgICAgZW5kOiAnXCInXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICAgICAgYmVnaW46ICdbQS1aYS16X11bQS1aYS16XzAtOV0qJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxlYWY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/leaf.js\n");

/***/ })

}]);