!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r={cash:[4e4,5e3,30400,12e3],eu:["SRL","PLO","J&K"],rus:["RusAuto","SBO"]},o=e=>(...t)=>e(...t.map(e=>null===e?void 0:e));let i=new class{constructor(e){this.input=e}optimize(){return this.input=this.input.filter(e=>e.length>0&&""!=e.length),this.input=this.input.map(e=>e.toLowerCase().trim()),this.input}}(["Alex","","ludmila","Viktor","","oleg","iNna","Ivan","Alex","Olga"," Ann"]);new class{constructor(e,t,n,r=0,o){this.owner=e,this.director=t,this.emp=n,this.own=r,this.budget=o}calcCash(){return[...this.budget].reduce((e,t)=>e+t,this.own)}makeReport(){o(this.owner,this.director="Victor",this.emp,this.own=0,this.budget);const{eu:e,rus:t}=r,n=[...e,...t,"unexpected sponsor"];console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.calcCash()}.And our employers: ${this.emp}.\n        And we have a sponsors: \n        ${[...n]}\n        Note. Be careful with ${e[0]}. It's a huge risk.`)}}("Sam",null,i=i.optimize(),null,r.cash).makeReport()}]);