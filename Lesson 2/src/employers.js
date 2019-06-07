'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']; // Filter the array to drop null or zero-length names

employers = employers.filter(function (name) {
  return name.length > 0 && name.length != '';
}); // Change the array to lowercase all the elements

employers = employers.map(function (name) {
  return name.toLowerCase().trim();
});
var _default = employers;
exports["default"] = _default;