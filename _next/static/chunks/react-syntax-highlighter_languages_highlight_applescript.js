(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_applescript"],{

/***/ "./node_modules/highlight.js/lib/languages/applescript.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/applescript.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: AppleScript\nAuthors: Nathan Grigg <nathan@nathanamy.org>, Dr. Drang <drdrang@gmail.com>\nCategory: scripting\nWebsite: https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html\n*/\n\n/** @type LanguageFn */\nfunction applescript(hljs) {\n  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: ''});\n  var PARAMS = {\n    className: 'params',\n    begin: '\\\\(', end: '\\\\)',\n    contains: ['self', hljs.C_NUMBER_MODE, STRING]\n  };\n  var COMMENT_MODE_1 = hljs.COMMENT('--', '$');\n  var COMMENT_MODE_2 = hljs.COMMENT(\n    '\\\\(\\\\*',\n    '\\\\*\\\\)',\n    {\n      contains: ['self', COMMENT_MODE_1] //allow nesting\n    }\n  );\n  var COMMENTS = [\n    COMMENT_MODE_1,\n    COMMENT_MODE_2,\n    hljs.HASH_COMMENT_MODE\n  ];\n\n  return {\n    name: 'AppleScript',\n    aliases: ['osascript'],\n    keywords: {\n      keyword:\n        'about above after against and around as at back before beginning ' +\n        'behind below beneath beside between but by considering ' +\n        'contain contains continue copy div does eighth else end equal ' +\n        'equals error every exit fifth first for fourth from front ' +\n        'get given global if ignoring in into is it its last local me ' +\n        'middle mod my ninth not of on onto or over prop property put ref ' +\n        'reference repeat returning script second set seventh since ' +\n        'sixth some tell tenth that the|0 then third through thru ' +\n        'timeout times to transaction try until where while whose with ' +\n        'without',\n      literal:\n        'AppleScript false linefeed return pi quote result space tab true',\n      built_in:\n        'alias application boolean class constant date file integer list ' +\n        'number real record string text ' +\n        'activate beep count delay launch log offset read round ' +\n        'run say summarize write ' +\n        'character characters contents day frontmost id item length ' +\n        'month name paragraph paragraphs rest reverse running time version ' +\n        'weekday word words year'\n    },\n    contains: [\n      STRING,\n      hljs.C_NUMBER_MODE,\n      {\n        className: 'built_in',\n        begin:\n          '\\\\b(clipboard info|the clipboard|info for|list (disks|folder)|' +\n          'mount volume|path to|(close|open for) access|(get|set) eof|' +\n          'current date|do shell script|get volume settings|random number|' +\n          'set volume|system attribute|system info|time to GMT|' +\n          '(load|run|store) script|scripting components|' +\n          'ASCII (character|number)|localized string|' +\n          'choose (application|color|file|file name|' +\n          'folder|from list|remote application|URL)|' +\n          'display (alert|dialog))\\\\b|^\\\\s*return\\\\b'\n      },\n      {\n        className: 'literal',\n        begin:\n          '\\\\b(text item delimiters|current application|missing value)\\\\b'\n      },\n      {\n        className: 'keyword',\n        begin:\n          '\\\\b(apart from|aside from|instead of|out of|greater than|' +\n          \"isn't|(doesn't|does not) (equal|come before|come after|contain)|\" +\n          '(greater|less) than( or equal)?|(starts?|ends|begins?) with|' +\n          'contained by|comes (before|after)|a (ref|reference)|POSIX file|' +\n          'POSIX path|(date|time) string|quoted form)\\\\b'\n      },\n      {\n        beginKeywords: 'on',\n        illegal: '[${=;\\\\n]',\n        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]\n      }\n    ].concat(COMMENTS),\n    illegal: '//|->|=>|\\\\[\\\\['\n  };\n}\n\nmodule.exports = applescript;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FwcGxlc2NyaXB0LmpzPzdiYzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQsWUFBWTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQixFQUFFO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9hcHBsZXNjcmlwdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQXBwbGVTY3JpcHRcbkF1dGhvcnM6IE5hdGhhbiBHcmlnZyA8bmF0aGFuQG5hdGhhbmFteS5vcmc+LCBEci4gRHJhbmcgPGRyZHJhbmdAZ21haWwuY29tPlxuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuV2Vic2l0ZTogaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvYXJjaGl2ZS9kb2N1bWVudGF0aW9uL0FwcGxlU2NyaXB0L0NvbmNlcHR1YWwvQXBwbGVTY3JpcHRMYW5nR3VpZGUvaW50cm9kdWN0aW9uL0FTTFJfaW50cm8uaHRtbFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGFwcGxlc2NyaXB0KGhsanMpIHtcbiAgdmFyIFNUUklORyA9IGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7aWxsZWdhbDogJyd9KTtcbiAgdmFyIFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsXG4gICAgY29udGFpbnM6IFsnc2VsZicsIGhsanMuQ19OVU1CRVJfTU9ERSwgU1RSSU5HXVxuICB9O1xuICB2YXIgQ09NTUVOVF9NT0RFXzEgPSBobGpzLkNPTU1FTlQoJy0tJywgJyQnKTtcbiAgdmFyIENPTU1FTlRfTU9ERV8yID0gaGxqcy5DT01NRU5UKFxuICAgICdcXFxcKFxcXFwqJyxcbiAgICAnXFxcXCpcXFxcKScsXG4gICAge1xuICAgICAgY29udGFpbnM6IFsnc2VsZicsIENPTU1FTlRfTU9ERV8xXSAvL2FsbG93IG5lc3RpbmdcbiAgICB9XG4gICk7XG4gIHZhciBDT01NRU5UUyA9IFtcbiAgICBDT01NRU5UX01PREVfMSxcbiAgICBDT01NRU5UX01PREVfMixcbiAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFXG4gIF07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQXBwbGVTY3JpcHQnLFxuICAgIGFsaWFzZXM6IFsnb3Nhc2NyaXB0J10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhYm91dCBhYm92ZSBhZnRlciBhZ2FpbnN0IGFuZCBhcm91bmQgYXMgYXQgYmFjayBiZWZvcmUgYmVnaW5uaW5nICcgK1xuICAgICAgICAnYmVoaW5kIGJlbG93IGJlbmVhdGggYmVzaWRlIGJldHdlZW4gYnV0IGJ5IGNvbnNpZGVyaW5nICcgK1xuICAgICAgICAnY29udGFpbiBjb250YWlucyBjb250aW51ZSBjb3B5IGRpdiBkb2VzIGVpZ2h0aCBlbHNlIGVuZCBlcXVhbCAnICtcbiAgICAgICAgJ2VxdWFscyBlcnJvciBldmVyeSBleGl0IGZpZnRoIGZpcnN0IGZvciBmb3VydGggZnJvbSBmcm9udCAnICtcbiAgICAgICAgJ2dldCBnaXZlbiBnbG9iYWwgaWYgaWdub3JpbmcgaW4gaW50byBpcyBpdCBpdHMgbGFzdCBsb2NhbCBtZSAnICtcbiAgICAgICAgJ21pZGRsZSBtb2QgbXkgbmludGggbm90IG9mIG9uIG9udG8gb3Igb3ZlciBwcm9wIHByb3BlcnR5IHB1dCByZWYgJyArXG4gICAgICAgICdyZWZlcmVuY2UgcmVwZWF0IHJldHVybmluZyBzY3JpcHQgc2Vjb25kIHNldCBzZXZlbnRoIHNpbmNlICcgK1xuICAgICAgICAnc2l4dGggc29tZSB0ZWxsIHRlbnRoIHRoYXQgdGhlfDAgdGhlbiB0aGlyZCB0aHJvdWdoIHRocnUgJyArXG4gICAgICAgICd0aW1lb3V0IHRpbWVzIHRvIHRyYW5zYWN0aW9uIHRyeSB1bnRpbCB3aGVyZSB3aGlsZSB3aG9zZSB3aXRoICcgK1xuICAgICAgICAnd2l0aG91dCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnQXBwbGVTY3JpcHQgZmFsc2UgbGluZWZlZWQgcmV0dXJuIHBpIHF1b3RlIHJlc3VsdCBzcGFjZSB0YWIgdHJ1ZScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ2FsaWFzIGFwcGxpY2F0aW9uIGJvb2xlYW4gY2xhc3MgY29uc3RhbnQgZGF0ZSBmaWxlIGludGVnZXIgbGlzdCAnICtcbiAgICAgICAgJ251bWJlciByZWFsIHJlY29yZCBzdHJpbmcgdGV4dCAnICtcbiAgICAgICAgJ2FjdGl2YXRlIGJlZXAgY291bnQgZGVsYXkgbGF1bmNoIGxvZyBvZmZzZXQgcmVhZCByb3VuZCAnICtcbiAgICAgICAgJ3J1biBzYXkgc3VtbWFyaXplIHdyaXRlICcgK1xuICAgICAgICAnY2hhcmFjdGVyIGNoYXJhY3RlcnMgY29udGVudHMgZGF5IGZyb250bW9zdCBpZCBpdGVtIGxlbmd0aCAnICtcbiAgICAgICAgJ21vbnRoIG5hbWUgcGFyYWdyYXBoIHBhcmFncmFwaHMgcmVzdCByZXZlcnNlIHJ1bm5pbmcgdGltZSB2ZXJzaW9uICcgK1xuICAgICAgICAnd2Vla2RheSB3b3JkIHdvcmRzIHllYXInXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgU1RSSU5HLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOlxuICAgICAgICAgICdcXFxcYihjbGlwYm9hcmQgaW5mb3x0aGUgY2xpcGJvYXJkfGluZm8gZm9yfGxpc3QgKGRpc2tzfGZvbGRlcil8JyArXG4gICAgICAgICAgJ21vdW50IHZvbHVtZXxwYXRoIHRvfChjbG9zZXxvcGVuIGZvcikgYWNjZXNzfChnZXR8c2V0KSBlb2Z8JyArXG4gICAgICAgICAgJ2N1cnJlbnQgZGF0ZXxkbyBzaGVsbCBzY3JpcHR8Z2V0IHZvbHVtZSBzZXR0aW5nc3xyYW5kb20gbnVtYmVyfCcgK1xuICAgICAgICAgICdzZXQgdm9sdW1lfHN5c3RlbSBhdHRyaWJ1dGV8c3lzdGVtIGluZm98dGltZSB0byBHTVR8JyArXG4gICAgICAgICAgJyhsb2FkfHJ1bnxzdG9yZSkgc2NyaXB0fHNjcmlwdGluZyBjb21wb25lbnRzfCcgK1xuICAgICAgICAgICdBU0NJSSAoY2hhcmFjdGVyfG51bWJlcil8bG9jYWxpemVkIHN0cmluZ3wnICtcbiAgICAgICAgICAnY2hvb3NlIChhcHBsaWNhdGlvbnxjb2xvcnxmaWxlfGZpbGUgbmFtZXwnICtcbiAgICAgICAgICAnZm9sZGVyfGZyb20gbGlzdHxyZW1vdGUgYXBwbGljYXRpb258VVJMKXwnICtcbiAgICAgICAgICAnZGlzcGxheSAoYWxlcnR8ZGlhbG9nKSlcXFxcYnxeXFxcXHMqcmV0dXJuXFxcXGInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgYmVnaW46XG4gICAgICAgICAgJ1xcXFxiKHRleHQgaXRlbSBkZWxpbWl0ZXJzfGN1cnJlbnQgYXBwbGljYXRpb258bWlzc2luZyB2YWx1ZSlcXFxcYidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjpcbiAgICAgICAgICAnXFxcXGIoYXBhcnQgZnJvbXxhc2lkZSBmcm9tfGluc3RlYWQgb2Z8b3V0IG9mfGdyZWF0ZXIgdGhhbnwnICtcbiAgICAgICAgICBcImlzbid0fChkb2Vzbid0fGRvZXMgbm90KSAoZXF1YWx8Y29tZSBiZWZvcmV8Y29tZSBhZnRlcnxjb250YWluKXxcIiArXG4gICAgICAgICAgJyhncmVhdGVyfGxlc3MpIHRoYW4oIG9yIGVxdWFsKT98KHN0YXJ0cz98ZW5kc3xiZWdpbnM/KSB3aXRofCcgK1xuICAgICAgICAgICdjb250YWluZWQgYnl8Y29tZXMgKGJlZm9yZXxhZnRlcil8YSAocmVmfHJlZmVyZW5jZSl8UE9TSVggZmlsZXwnICtcbiAgICAgICAgICAnUE9TSVggcGF0aHwoZGF0ZXx0aW1lKSBzdHJpbmd8cXVvdGVkIGZvcm0pXFxcXGInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnb24nLFxuICAgICAgICBpbGxlZ2FsOiAnWyR7PTtcXFxcbl0nLFxuICAgICAgICBjb250YWluczogW2hsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLCBQQVJBTVNdXG4gICAgICB9XG4gICAgXS5jb25jYXQoQ09NTUVOVFMpLFxuICAgIGlsbGVnYWw6ICcvL3wtPnw9PnxcXFxcW1xcXFxbJ1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGxlc2NyaXB0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/applescript.js\n");

/***/ })

}]);