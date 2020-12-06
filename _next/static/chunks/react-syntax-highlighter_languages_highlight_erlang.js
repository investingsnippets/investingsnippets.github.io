(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_erlang"],{

/***/ "./node_modules/highlight.js/lib/languages/erlang.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/erlang.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Erlang\nDescription: Erlang is a general-purpose functional language, with strict evaluation, single assignment, and dynamic typing.\nAuthor: Nikolay Zakharov <nikolay.desh@gmail.com>, Dmitry Kovega <arhibot@gmail.com>\nWebsite: https://www.erlang.org\nCategory: functional\n*/\n\nfunction erlang(hljs) {\n  var BASIC_ATOM_RE = '[a-z\\'][a-zA-Z0-9_\\']*';\n  var FUNCTION_NAME_RE = '(' + BASIC_ATOM_RE + ':' + BASIC_ATOM_RE + '|' + BASIC_ATOM_RE + ')';\n  var ERLANG_RESERVED = {\n    keyword:\n      'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if ' +\n      'let not of orelse|10 query receive rem try when xor',\n    literal:\n      'false true'\n  };\n\n  var COMMENT = hljs.COMMENT('%', '$');\n  var NUMBER = {\n    className: 'number',\n    begin: '\\\\b(\\\\d+(_\\\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\\\d+(_\\\\d+)*(\\\\.\\\\d+(_\\\\d+)*)?([eE][-+]?\\\\d+)?)',\n    relevance: 0\n  };\n  var NAMED_FUN = {\n    begin: 'fun\\\\s+' + BASIC_ATOM_RE + '/\\\\d+'\n  };\n  var FUNCTION_CALL = {\n    begin: FUNCTION_NAME_RE + '\\\\(', end: '\\\\)',\n    returnBegin: true,\n    relevance: 0,\n    contains: [\n      {\n        begin: FUNCTION_NAME_RE, relevance: 0\n      },\n      {\n        begin: '\\\\(', end: '\\\\)', endsWithParent: true,\n        returnEnd: true,\n        relevance: 0\n        // \"contains\" defined later\n      }\n    ]\n  };\n  var TUPLE = {\n    begin: '{', end: '}',\n    relevance: 0\n    // \"contains\" defined later\n  };\n  var VAR1 = {\n    begin: '\\\\b_([A-Z][A-Za-z0-9_]*)?',\n    relevance: 0\n  };\n  var VAR2 = {\n    begin: '[A-Z][a-zA-Z0-9_]*',\n    relevance: 0\n  };\n  var RECORD_ACCESS = {\n    begin: '#' + hljs.UNDERSCORE_IDENT_RE,\n    relevance: 0,\n    returnBegin: true,\n    contains: [\n      {\n        begin: '#' + hljs.UNDERSCORE_IDENT_RE,\n        relevance: 0\n      },\n      {\n        begin: '{', end: '}',\n        relevance: 0\n        // \"contains\" defined later\n      }\n    ]\n  };\n\n  var BLOCK_STATEMENTS = {\n    beginKeywords: 'fun receive if try case', end: 'end',\n    keywords: ERLANG_RESERVED\n  };\n  BLOCK_STATEMENTS.contains = [\n    COMMENT,\n    NAMED_FUN,\n    hljs.inherit(hljs.APOS_STRING_MODE, {className: ''}),\n    BLOCK_STATEMENTS,\n    FUNCTION_CALL,\n    hljs.QUOTE_STRING_MODE,\n    NUMBER,\n    TUPLE,\n    VAR1, VAR2,\n    RECORD_ACCESS\n  ];\n\n  var BASIC_MODES = [\n    COMMENT,\n    NAMED_FUN,\n    BLOCK_STATEMENTS,\n    FUNCTION_CALL,\n    hljs.QUOTE_STRING_MODE,\n    NUMBER,\n    TUPLE,\n    VAR1, VAR2,\n    RECORD_ACCESS\n  ];\n  FUNCTION_CALL.contains[1].contains = BASIC_MODES;\n  TUPLE.contains = BASIC_MODES;\n  RECORD_ACCESS.contains[1].contains = BASIC_MODES;\n\n  var PARAMS = {\n    className: 'params',\n    begin: '\\\\(', end: '\\\\)',\n    contains: BASIC_MODES\n  };\n  return {\n    name: 'Erlang',\n    aliases: ['erl'],\n    keywords: ERLANG_RESERVED,\n    illegal: '(</|\\\\*=|\\\\+=|-=|/\\\\*|\\\\*/|\\\\(\\\\*|\\\\*\\\\))',\n    contains: [\n      {\n        className: 'function',\n        begin: '^' + BASIC_ATOM_RE + '\\\\s*\\\\(', end: '->',\n        returnBegin: true,\n        illegal: '\\\\(|#|//|/\\\\*|\\\\\\\\|:|;',\n        contains: [\n          PARAMS,\n          hljs.inherit(hljs.TITLE_MODE, {begin: BASIC_ATOM_RE})\n        ],\n        starts: {\n          end: ';|\\\\.',\n          keywords: ERLANG_RESERVED,\n          contains: BASIC_MODES\n        }\n      },\n      COMMENT,\n      {\n        begin: '^-', end: '\\\\.',\n        relevance: 0,\n        excludeEnd: true,\n        returnBegin: true,\n        keywords: {\n          $pattern: '-' + hljs.IDENT_RE,\n          keyword: '-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn ' +\n          '-import -include -include_lib -compile -define -else -endif -file -behaviour ' +\n          '-behavior -spec'\n        },\n        contains: [PARAMS]\n      },\n      NUMBER,\n      hljs.QUOTE_STRING_MODE,\n      RECORD_ACCESS,\n      VAR1, VAR2,\n      TUPLE,\n      {begin: /\\.$/} // relevance booster\n    ]\n  };\n}\n\nmodule.exports = erlang;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VybGFuZy5qcz9iM2M1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSx5Q0FBeUMscUJBQXFCO0FBQzlEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sYUFBYTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZXJsYW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBFcmxhbmdcbkRlc2NyaXB0aW9uOiBFcmxhbmcgaXMgYSBnZW5lcmFsLXB1cnBvc2UgZnVuY3Rpb25hbCBsYW5ndWFnZSwgd2l0aCBzdHJpY3QgZXZhbHVhdGlvbiwgc2luZ2xlIGFzc2lnbm1lbnQsIGFuZCBkeW5hbWljIHR5cGluZy5cbkF1dGhvcjogTmlrb2xheSBaYWtoYXJvdiA8bmlrb2xheS5kZXNoQGdtYWlsLmNvbT4sIERtaXRyeSBLb3ZlZ2EgPGFyaGlib3RAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cuZXJsYW5nLm9yZ1xuQ2F0ZWdvcnk6IGZ1bmN0aW9uYWxcbiovXG5cbmZ1bmN0aW9uIGVybGFuZyhobGpzKSB7XG4gIHZhciBCQVNJQ19BVE9NX1JFID0gJ1thLXpcXCddW2EtekEtWjAtOV9cXCddKic7XG4gIHZhciBGVU5DVElPTl9OQU1FX1JFID0gJygnICsgQkFTSUNfQVRPTV9SRSArICc6JyArIEJBU0lDX0FUT01fUkUgKyAnfCcgKyBCQVNJQ19BVE9NX1JFICsgJyknO1xuICB2YXIgRVJMQU5HX1JFU0VSVkVEID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnYWZ0ZXIgYW5kIGFuZGFsc298MTAgYmFuZCBiZWdpbiBibm90IGJvciBic2wgYnpyIGJ4b3IgY2FzZSBjYXRjaCBjb25kIGRpdiBlbmQgZnVuIGlmICcgK1xuICAgICAgJ2xldCBub3Qgb2Ygb3JlbHNlfDEwIHF1ZXJ5IHJlY2VpdmUgcmVtIHRyeSB3aGVuIHhvcicsXG4gICAgbGl0ZXJhbDpcbiAgICAgICdmYWxzZSB0cnVlJ1xuICB9O1xuXG4gIHZhciBDT01NRU5UID0gaGxqcy5DT01NRU5UKCclJywgJyQnKTtcbiAgdmFyIE5VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiAnXFxcXGIoXFxcXGQrKF9cXFxcZCspKiNbYS1mQS1GMC05XSsoX1thLWZBLUYwLTldKykqfFxcXFxkKyhfXFxcXGQrKSooXFxcXC5cXFxcZCsoX1xcXFxkKykqKT8oW2VFXVstK10/XFxcXGQrKT8pJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgdmFyIE5BTUVEX0ZVTiA9IHtcbiAgICBiZWdpbjogJ2Z1blxcXFxzKycgKyBCQVNJQ19BVE9NX1JFICsgJy9cXFxcZCsnXG4gIH07XG4gIHZhciBGVU5DVElPTl9DQUxMID0ge1xuICAgIGJlZ2luOiBGVU5DVElPTl9OQU1FX1JFICsgJ1xcXFwoJywgZW5kOiAnXFxcXCknLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogRlVOQ1RJT05fTkFNRV9SRSwgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknLCBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgLy8gXCJjb250YWluc1wiIGRlZmluZWQgbGF0ZXJcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHZhciBUVVBMRSA9IHtcbiAgICBiZWdpbjogJ3snLCBlbmQ6ICd9JyxcbiAgICByZWxldmFuY2U6IDBcbiAgICAvLyBcImNvbnRhaW5zXCIgZGVmaW5lZCBsYXRlclxuICB9O1xuICB2YXIgVkFSMSA9IHtcbiAgICBiZWdpbjogJ1xcXFxiXyhbQS1aXVtBLVphLXowLTlfXSopPycsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHZhciBWQVIyID0ge1xuICAgIGJlZ2luOiAnW0EtWl1bYS16QS1aMC05X10qJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgdmFyIFJFQ09SRF9BQ0NFU1MgPSB7XG4gICAgYmVnaW46ICcjJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcjJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ3snLCBlbmQ6ICd9JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIC8vIFwiY29udGFpbnNcIiBkZWZpbmVkIGxhdGVyXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBCTE9DS19TVEFURU1FTlRTID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICdmdW4gcmVjZWl2ZSBpZiB0cnkgY2FzZScsIGVuZDogJ2VuZCcsXG4gICAga2V5d29yZHM6IEVSTEFOR19SRVNFUlZFRFxuICB9O1xuICBCTE9DS19TVEFURU1FTlRTLmNvbnRhaW5zID0gW1xuICAgIENPTU1FTlQsXG4gICAgTkFNRURfRlVOLFxuICAgIGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtjbGFzc05hbWU6ICcnfSksXG4gICAgQkxPQ0tfU1RBVEVNRU5UUyxcbiAgICBGVU5DVElPTl9DQUxMLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgTlVNQkVSLFxuICAgIFRVUExFLFxuICAgIFZBUjEsIFZBUjIsXG4gICAgUkVDT1JEX0FDQ0VTU1xuICBdO1xuXG4gIHZhciBCQVNJQ19NT0RFUyA9IFtcbiAgICBDT01NRU5ULFxuICAgIE5BTUVEX0ZVTixcbiAgICBCTE9DS19TVEFURU1FTlRTLFxuICAgIEZVTkNUSU9OX0NBTEwsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBOVU1CRVIsXG4gICAgVFVQTEUsXG4gICAgVkFSMSwgVkFSMixcbiAgICBSRUNPUkRfQUNDRVNTXG4gIF07XG4gIEZVTkNUSU9OX0NBTEwuY29udGFpbnNbMV0uY29udGFpbnMgPSBCQVNJQ19NT0RFUztcbiAgVFVQTEUuY29udGFpbnMgPSBCQVNJQ19NT0RFUztcbiAgUkVDT1JEX0FDQ0VTUy5jb250YWluc1sxXS5jb250YWlucyA9IEJBU0lDX01PREVTO1xuXG4gIHZhciBQQVJBTVMgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknLFxuICAgIGNvbnRhaW5zOiBCQVNJQ19NT0RFU1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdFcmxhbmcnLFxuICAgIGFsaWFzZXM6IFsnZXJsJ10sXG4gICAga2V5d29yZHM6IEVSTEFOR19SRVNFUlZFRCxcbiAgICBpbGxlZ2FsOiAnKDwvfFxcXFwqPXxcXFxcKz18LT18L1xcXFwqfFxcXFwqL3xcXFxcKFxcXFwqfFxcXFwqXFxcXCkpJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luOiAnXicgKyBCQVNJQ19BVE9NX1JFICsgJ1xcXFxzKlxcXFwoJywgZW5kOiAnLT4nLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFwofCN8Ly98L1xcXFwqfFxcXFxcXFxcfDp8OycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgUEFSQU1TLFxuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogQkFTSUNfQVRPTV9SRX0pXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogJzt8XFxcXC4nLFxuICAgICAgICAgIGtleXdvcmRzOiBFUkxBTkdfUkVTRVJWRUQsXG4gICAgICAgICAgY29udGFpbnM6IEJBU0lDX01PREVTXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDT01NRU5ULFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ14tJywgZW5kOiAnXFxcXC4nLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICRwYXR0ZXJuOiAnLScgKyBobGpzLklERU5UX1JFLFxuICAgICAgICAgIGtleXdvcmQ6ICctbW9kdWxlIC1yZWNvcmQgLXVuZGVmIC1leHBvcnQgLWlmZGVmIC1pZm5kZWYgLWF1dGhvciAtY29weXJpZ2h0IC1kb2MgLXZzbiAnICtcbiAgICAgICAgICAnLWltcG9ydCAtaW5jbHVkZSAtaW5jbHVkZV9saWIgLWNvbXBpbGUgLWRlZmluZSAtZWxzZSAtZW5kaWYgLWZpbGUgLWJlaGF2aW91ciAnICtcbiAgICAgICAgICAnLWJlaGF2aW9yIC1zcGVjJ1xuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogW1BBUkFNU11cbiAgICAgIH0sXG4gICAgICBOVU1CRVIsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgUkVDT1JEX0FDQ0VTUyxcbiAgICAgIFZBUjEsIFZBUjIsXG4gICAgICBUVVBMRSxcbiAgICAgIHtiZWdpbjogL1xcLiQvfSAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcmxhbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/erlang.js\n");

/***/ })

}]);