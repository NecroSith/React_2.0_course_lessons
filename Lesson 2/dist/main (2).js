!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n,o=(n=r(1))&&n.__esModule?n:{default:n},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(2));function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}new(function(){function e(t,r,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.owner=t,this.director=r,this.cash=n,this.emp=o}var t,r,n;return t=e,(r=[{key:"makeReport",value:function(){this.owner,this.director="Victor",this.cash,this.emp;var e=i.default.eu,t=i.default.rus,r=[].concat(a(e),a(t),["unexpected sponsor"]);console.log("We have a business. Owner: ".concat(this.owner,", director: ").concat(this.director,". Our budget: ").concat(this.cash,".And our employers: ").concat(this.emp,".\n    And we have a sponsors: \n    ").concat(a(r),"\n    Note. Be careful with ").concat(e[0],". It's a huge risk."))}}])&&u(t.prototype,r),n&&u(t,n),e}())("Sam",null,i.money,o.default).makeReport()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=["Alex","","ludmila","Viktor","","oleg","iNna","Ivan","Alex","Olga"," Ann"],o=n=(n=n.filter(function(e){return e.length>0&&""!=e.length})).map(function(e){return e.toLowerCase().trim()});t.default=o},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.money=void 0;var o={cash:[4e4,5e3,30400,12e3],eu:["SRL","PLO","J&K"],rus:["RusAuto","SBO"]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return n(arguments.length>1?arguments[1]:void 0).reduce(function(e,t){return e+t},e)}(null,o.cash);t.money=i;var u=o;t.default=u}]);