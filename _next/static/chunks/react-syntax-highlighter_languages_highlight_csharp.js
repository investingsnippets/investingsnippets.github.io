(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_csharp"],{

/***/ "./node_modules/highlight.js/lib/languages/csharp.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/csharp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: C#\nAuthor: Jason Diamond <jason@diamond.name>\nContributor: Nicolas LLOBERA <nllobera@gmail.com>, Pieter Vantorre <pietervantorre@gmail.com>\nWebsite: https://docs.microsoft.com/en-us/dotnet/csharp/\nCategory: common\n*/\n\n/** @type LanguageFn */\nfunction csharp(hljs) {\n  var KEYWORDS = {\n    keyword:\n      // Normal keywords.\n      'abstract as base bool break byte case catch char checked const continue decimal ' +\n      'default delegate do double enum event explicit extern finally fixed float ' +\n      'for foreach goto if implicit in init int interface internal is lock long ' +\n      'object operator out override params private protected public readonly ref sbyte ' +\n      'sealed short sizeof stackalloc static string struct switch this try typeof ' +\n      'uint ulong unchecked unsafe ushort using virtual void volatile while ' +\n      // Contextual keywords.\n      'add alias ascending async await by descending dynamic equals from get global group into join ' +\n      'let nameof on orderby partial remove select set value var when where yield',\n    literal:\n      'null false true'\n  };\n  var TITLE_MODE = hljs.inherit(hljs.TITLE_MODE, {begin: '[a-zA-Z](\\\\.?\\\\w)*'});\n  var NUMBERS = {\n    className: 'number',\n    variants: [\n      { begin: '\\\\b(0b[01\\']+)' },\n      { begin: '(-?)\\\\b([\\\\d\\']+(\\\\.[\\\\d\\']*)?|\\\\.[\\\\d\\']+)(u|U|l|L|ul|UL|f|F|b|B)' },\n      { begin: '(-?)(\\\\b0[xX][a-fA-F0-9\\']+|(\\\\b[\\\\d\\']+(\\\\.[\\\\d\\']*)?|\\\\.[\\\\d\\']+)([eE][-+]?[\\\\d\\']+)?)' }\n    ],\n    relevance: 0\n  };\n  var VERBATIM_STRING = {\n    className: 'string',\n    begin: '@\"', end: '\"',\n    contains: [{begin: '\"\"'}]\n  };\n  var VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, {illegal: /\\n/});\n  var SUBST = {\n    className: 'subst',\n    begin: '{', end: '}',\n    keywords: KEYWORDS\n  };\n  var SUBST_NO_LF = hljs.inherit(SUBST, {illegal: /\\n/});\n  var INTERPOLATED_STRING = {\n    className: 'string',\n    begin: /\\$\"/, end: '\"',\n    illegal: /\\n/,\n    contains: [{begin: '{{'}, {begin: '}}'}, hljs.BACKSLASH_ESCAPE, SUBST_NO_LF]\n  };\n  var INTERPOLATED_VERBATIM_STRING = {\n    className: 'string',\n    begin: /\\$@\"/, end: '\"',\n    contains: [{begin: '{{'}, {begin: '}}'}, {begin: '\"\"'}, SUBST]\n  };\n  var INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {\n    illegal: /\\n/,\n    contains: [{begin: '{{'}, {begin: '}}'}, {begin: '\"\"'}, SUBST_NO_LF]\n  });\n  SUBST.contains = [\n    INTERPOLATED_VERBATIM_STRING,\n    INTERPOLATED_STRING,\n    VERBATIM_STRING,\n    hljs.APOS_STRING_MODE,\n    hljs.QUOTE_STRING_MODE,\n    NUMBERS,\n    hljs.C_BLOCK_COMMENT_MODE\n  ];\n  SUBST_NO_LF.contains = [\n    INTERPOLATED_VERBATIM_STRING_NO_LF,\n    INTERPOLATED_STRING,\n    VERBATIM_STRING_NO_LF,\n    hljs.APOS_STRING_MODE,\n    hljs.QUOTE_STRING_MODE,\n    NUMBERS,\n    hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, {illegal: /\\n/})\n  ];\n  var STRING = {\n    variants: [\n      INTERPOLATED_VERBATIM_STRING,\n      INTERPOLATED_STRING,\n      VERBATIM_STRING,\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE\n    ]\n  };\n\n  var GENERIC_MODIFIER = {\n    begin: \"<\",\n    end: \">\",\n    contains: [ \n      { beginKeywords: \"in out\"},\n      TITLE_MODE \n    ]\n  };\n  var TYPE_IDENT_RE = hljs.IDENT_RE + '(<' + hljs.IDENT_RE + '(\\\\s*,\\\\s*' + hljs.IDENT_RE + ')*>)?(\\\\[\\\\])?';\n  var AT_IDENTIFIER = {\n    // prevents expressions like `@class` from incorrect flagging\n    // `class` as a keyword\n    begin: \"@\" + hljs.IDENT_RE,\n    relevance: 0\n  };\n\n  return {\n    name: 'C#',\n    aliases: ['cs', 'c#'],\n    keywords: KEYWORDS,\n    illegal: /::/,\n    contains: [\n      hljs.COMMENT(\n        '///',\n        '$',\n        {\n          returnBegin: true,\n          contains: [\n            {\n              className: 'doctag',\n              variants: [\n                {\n                  begin: '///', relevance: 0\n                },\n                {\n                  begin: '<!--|-->'\n                },\n                {\n                  begin: '</?', end: '>'\n                }\n              ]\n            }\n          ]\n        }\n      ),\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        className: 'meta',\n        begin: '#', end: '$',\n        keywords: {\n          'meta-keyword': 'if else elif endif define undef warning error line region endregion pragma checksum'\n        }\n      },\n      STRING,\n      NUMBERS,\n      {\n        beginKeywords: 'class interface', end: /[{;=]/,\n        illegal: /[^\\s:,]/,\n        contains: [\n          { beginKeywords: \"where class\" },\n          TITLE_MODE,\n          GENERIC_MODIFIER,\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE\n        ]\n      },\n      {\n        beginKeywords: 'namespace', end: /[{;=]/,\n        illegal: /[^\\s:]/,\n        contains: [\n          TITLE_MODE,\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE\n        ]\n      },\n      {\n        beginKeywords: 'record', end: /[{;=]/,\n        illegal: /[^\\s:]/,\n        contains: [\n          TITLE_MODE,\n          GENERIC_MODIFIER,\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE\n        ]\n      },\n      {\n        // [Attributes(\"\")]\n        className: 'meta',\n        begin: '^\\\\s*\\\\[', excludeBegin: true, end: '\\\\]', excludeEnd: true,\n        contains: [\n          {className: 'meta-string', begin: /\"/, end: /\"/}\n        ]\n      },\n      {\n        // Expression keywords prevent 'keyword Name(...)' from being\n        // recognized as a function definition\n        beginKeywords: 'new return throw await else',\n        relevance: 0\n      },\n      {\n        className: 'function',\n        begin: '(' + TYPE_IDENT_RE + '\\\\s+)+' + hljs.IDENT_RE + '\\\\s*(\\\\<.+\\\\>)?\\\\s*\\\\(', returnBegin: true,\n        end: /\\s*[{;=]/, excludeEnd: true,\n        keywords: KEYWORDS,\n        contains: [\n          {\n            begin: hljs.IDENT_RE + '\\\\s*(\\\\<.+\\\\>)?\\\\s*\\\\(', returnBegin: true,\n            contains: [\n              hljs.TITLE_MODE,\n              GENERIC_MODIFIER\n            ],\n            relevance: 0\n          },\n          {\n            className: 'params',\n            begin: /\\(/, end: /\\)/,\n            excludeBegin: true,\n            excludeEnd: true,\n            keywords: KEYWORDS,\n            relevance: 0,\n            contains: [\n              STRING,\n              NUMBERS,\n              hljs.C_BLOCK_COMMENT_MODE\n            ]\n          },\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE\n        ]\n      },\n      AT_IDENTIFIER\n    ]\n  };\n}\n\nmodule.exports = csharp;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NzaGFycC5qcz85OGFmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNEJBQTRCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sOEVBQThFO0FBQ3JGLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVUsRUFBRSxHQUFHLFVBQVUsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixVQUFVLEVBQUUsR0FBRyxVQUFVLEVBQUUsR0FBRyxZQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixVQUFVLEVBQUUsR0FBRyxVQUFVLEVBQUUsR0FBRyxZQUFZO0FBQzFELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5QkFBeUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsV0FBVywrQkFBK0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jc2hhcnAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEMjXG5BdXRob3I6IEphc29uIERpYW1vbmQgPGphc29uQGRpYW1vbmQubmFtZT5cbkNvbnRyaWJ1dG9yOiBOaWNvbGFzIExMT0JFUkEgPG5sbG9iZXJhQGdtYWlsLmNvbT4sIFBpZXRlciBWYW50b3JyZSA8cGlldGVydmFudG9ycmVAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2NzaGFycC9cbkNhdGVnb3J5OiBjb21tb25cbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjc2hhcnAoaGxqcykge1xuICB2YXIgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgIC8vIE5vcm1hbCBrZXl3b3Jkcy5cbiAgICAgICdhYnN0cmFjdCBhcyBiYXNlIGJvb2wgYnJlYWsgYnl0ZSBjYXNlIGNhdGNoIGNoYXIgY2hlY2tlZCBjb25zdCBjb250aW51ZSBkZWNpbWFsICcgK1xuICAgICAgJ2RlZmF1bHQgZGVsZWdhdGUgZG8gZG91YmxlIGVudW0gZXZlbnQgZXhwbGljaXQgZXh0ZXJuIGZpbmFsbHkgZml4ZWQgZmxvYXQgJyArXG4gICAgICAnZm9yIGZvcmVhY2ggZ290byBpZiBpbXBsaWNpdCBpbiBpbml0IGludCBpbnRlcmZhY2UgaW50ZXJuYWwgaXMgbG9jayBsb25nICcgK1xuICAgICAgJ29iamVjdCBvcGVyYXRvciBvdXQgb3ZlcnJpZGUgcGFyYW1zIHByaXZhdGUgcHJvdGVjdGVkIHB1YmxpYyByZWFkb25seSByZWYgc2J5dGUgJyArXG4gICAgICAnc2VhbGVkIHNob3J0IHNpemVvZiBzdGFja2FsbG9jIHN0YXRpYyBzdHJpbmcgc3RydWN0IHN3aXRjaCB0aGlzIHRyeSB0eXBlb2YgJyArXG4gICAgICAndWludCB1bG9uZyB1bmNoZWNrZWQgdW5zYWZlIHVzaG9ydCB1c2luZyB2aXJ0dWFsIHZvaWQgdm9sYXRpbGUgd2hpbGUgJyArXG4gICAgICAvLyBDb250ZXh0dWFsIGtleXdvcmRzLlxuICAgICAgJ2FkZCBhbGlhcyBhc2NlbmRpbmcgYXN5bmMgYXdhaXQgYnkgZGVzY2VuZGluZyBkeW5hbWljIGVxdWFscyBmcm9tIGdldCBnbG9iYWwgZ3JvdXAgaW50byBqb2luICcgK1xuICAgICAgJ2xldCBuYW1lb2Ygb24gb3JkZXJieSBwYXJ0aWFsIHJlbW92ZSBzZWxlY3Qgc2V0IHZhbHVlIHZhciB3aGVuIHdoZXJlIHlpZWxkJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ251bGwgZmFsc2UgdHJ1ZSdcbiAgfTtcbiAgdmFyIFRJVExFX01PREUgPSBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46ICdbYS16QS1aXShcXFxcLj9cXFxcdykqJ30pO1xuICB2YXIgTlVNQkVSUyA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAnXFxcXGIoMGJbMDFcXCddKyknIH0sXG4gICAgICB7IGJlZ2luOiAnKC0/KVxcXFxiKFtcXFxcZFxcJ10rKFxcXFwuW1xcXFxkXFwnXSopP3xcXFxcLltcXFxcZFxcJ10rKSh1fFV8bHxMfHVsfFVMfGZ8RnxifEIpJyB9LFxuICAgICAgeyBiZWdpbjogJygtPykoXFxcXGIwW3hYXVthLWZBLUYwLTlcXCddK3woXFxcXGJbXFxcXGRcXCddKyhcXFxcLltcXFxcZFxcJ10qKT98XFxcXC5bXFxcXGRcXCddKykoW2VFXVstK10/W1xcXFxkXFwnXSspPyknIH1cbiAgICBdLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICB2YXIgVkVSQkFUSU1fU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdAXCInLCBlbmQ6ICdcIicsXG4gICAgY29udGFpbnM6IFt7YmVnaW46ICdcIlwiJ31dXG4gIH07XG4gIHZhciBWRVJCQVRJTV9TVFJJTkdfTk9fTEYgPSBobGpzLmluaGVyaXQoVkVSQkFUSU1fU1RSSU5HLCB7aWxsZWdhbDogL1xcbi99KTtcbiAgdmFyIFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogJ3snLCBlbmQ6ICd9JyxcbiAgICBrZXl3b3JkczogS0VZV09SRFNcbiAgfTtcbiAgdmFyIFNVQlNUX05PX0xGID0gaGxqcy5pbmhlcml0KFNVQlNULCB7aWxsZWdhbDogL1xcbi99KTtcbiAgdmFyIElOVEVSUE9MQVRFRF9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1xcJFwiLywgZW5kOiAnXCInLFxuICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgIGNvbnRhaW5zOiBbe2JlZ2luOiAne3snfSwge2JlZ2luOiAnfX0nfSwgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBTVUJTVF9OT19MRl1cbiAgfTtcbiAgdmFyIElOVEVSUE9MQVRFRF9WRVJCQVRJTV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1xcJEBcIi8sIGVuZDogJ1wiJyxcbiAgICBjb250YWluczogW3tiZWdpbjogJ3t7J30sIHtiZWdpbjogJ319J30sIHtiZWdpbjogJ1wiXCInfSwgU1VCU1RdXG4gIH07XG4gIHZhciBJTlRFUlBPTEFURURfVkVSQkFUSU1fU1RSSU5HX05PX0xGID0gaGxqcy5pbmhlcml0KElOVEVSUE9MQVRFRF9WRVJCQVRJTV9TVFJJTkcsIHtcbiAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICBjb250YWluczogW3tiZWdpbjogJ3t7J30sIHtiZWdpbjogJ319J30sIHtiZWdpbjogJ1wiXCInfSwgU1VCU1RfTk9fTEZdXG4gIH0pO1xuICBTVUJTVC5jb250YWlucyA9IFtcbiAgICBJTlRFUlBPTEFURURfVkVSQkFUSU1fU1RSSU5HLFxuICAgIElOVEVSUE9MQVRFRF9TVFJJTkcsXG4gICAgVkVSQkFUSU1fU1RSSU5HLFxuICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIE5VTUJFUlMsXG4gICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICBdO1xuICBTVUJTVF9OT19MRi5jb250YWlucyA9IFtcbiAgICBJTlRFUlBPTEFURURfVkVSQkFUSU1fU1RSSU5HX05PX0xGLFxuICAgIElOVEVSUE9MQVRFRF9TVFJJTkcsXG4gICAgVkVSQkFUSU1fU1RSSU5HX05PX0xGLFxuICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIE5VTUJFUlMsXG4gICAgaGxqcy5pbmhlcml0KGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsIHtpbGxlZ2FsOiAvXFxuL30pXG4gIF07XG4gIHZhciBTVFJJTkcgPSB7XG4gICAgdmFyaWFudHM6IFtcbiAgICAgIElOVEVSUE9MQVRFRF9WRVJCQVRJTV9TVFJJTkcsXG4gICAgICBJTlRFUlBPTEFURURfU1RSSU5HLFxuICAgICAgVkVSQkFUSU1fU1RSSU5HLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgIF1cbiAgfTtcblxuICB2YXIgR0VORVJJQ19NT0RJRklFUiA9IHtcbiAgICBiZWdpbjogXCI8XCIsXG4gICAgZW5kOiBcIj5cIixcbiAgICBjb250YWluczogWyBcbiAgICAgIHsgYmVnaW5LZXl3b3JkczogXCJpbiBvdXRcIn0sXG4gICAgICBUSVRMRV9NT0RFIFxuICAgIF1cbiAgfTtcbiAgdmFyIFRZUEVfSURFTlRfUkUgPSBobGpzLklERU5UX1JFICsgJyg8JyArIGhsanMuSURFTlRfUkUgKyAnKFxcXFxzKixcXFxccyonICsgaGxqcy5JREVOVF9SRSArICcpKj4pPyhcXFxcW1xcXFxdKT8nO1xuICB2YXIgQVRfSURFTlRJRklFUiA9IHtcbiAgICAvLyBwcmV2ZW50cyBleHByZXNzaW9ucyBsaWtlIGBAY2xhc3NgIGZyb20gaW5jb3JyZWN0IGZsYWdnaW5nXG4gICAgLy8gYGNsYXNzYCBhcyBhIGtleXdvcmRcbiAgICBiZWdpbjogXCJAXCIgKyBobGpzLklERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0MjJyxcbiAgICBhbGlhc2VzOiBbJ2NzJywgJ2MjJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGlsbGVnYWw6IC86Oi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJy8vLycsXG4gICAgICAgICckJyxcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46ICcvLy8nLCByZWxldmFuY2U6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnPCEtLXwtLT4nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJzwvPycsIGVuZDogJz4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnIycsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICdtZXRhLWtleXdvcmQnOiAnaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiB3YXJuaW5nIGVycm9yIGxpbmUgcmVnaW9uIGVuZHJlZ2lvbiBwcmFnbWEgY2hlY2tzdW0nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBTVFJJTkcsXG4gICAgICBOVU1CRVJTLFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJywgZW5kOiAvW3s7PV0vLFxuICAgICAgICBpbGxlZ2FsOiAvW15cXHM6LF0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHsgYmVnaW5LZXl3b3JkczogXCJ3aGVyZSBjbGFzc1wiIH0sXG4gICAgICAgICAgVElUTEVfTU9ERSxcbiAgICAgICAgICBHRU5FUklDX01PRElGSUVSLFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICduYW1lc3BhY2UnLCBlbmQ6IC9bezs9XS8sXG4gICAgICAgIGlsbGVnYWw6IC9bXlxcczpdLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBUSVRMRV9NT0RFLFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdyZWNvcmQnLCBlbmQ6IC9bezs9XS8sXG4gICAgICAgIGlsbGVnYWw6IC9bXlxcczpdLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBUSVRMRV9NT0RFLFxuICAgICAgICAgIEdFTkVSSUNfTU9ESUZJRVIsXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gW0F0dHJpYnV0ZXMoXCJcIildXG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxccypcXFxcWycsIGV4Y2x1ZGVCZWdpbjogdHJ1ZSwgZW5kOiAnXFxcXF0nLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsIGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi99XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIEV4cHJlc3Npb24ga2V5d29yZHMgcHJldmVudCAna2V5d29yZCBOYW1lKC4uLiknIGZyb20gYmVpbmdcbiAgICAgICAgLy8gcmVjb2duaXplZCBhcyBhIGZ1bmN0aW9uIGRlZmluaXRpb25cbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25ldyByZXR1cm4gdGhyb3cgYXdhaXQgZWxzZScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogJygnICsgVFlQRV9JREVOVF9SRSArICdcXFxccyspKycgKyBobGpzLklERU5UX1JFICsgJ1xcXFxzKihcXFxcPC4rXFxcXD4pP1xcXFxzKlxcXFwoJywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGVuZDogL1xccypbezs9XS8sIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogaGxqcy5JREVOVF9SRSArICdcXFxccyooXFxcXDwuK1xcXFw+KT9cXFxccypcXFxcKCcsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgaGxqcy5USVRMRV9NT0RFLFxuICAgICAgICAgICAgICBHRU5FUklDX01PRElGSUVSXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICAgICAgTlVNQkVSUyxcbiAgICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIEFUX0lERU5USUZJRVJcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3NoYXJwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/csharp.js\n");

/***/ })

}]);