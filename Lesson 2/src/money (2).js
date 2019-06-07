'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.money = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

var calcCash = function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var cash = arguments.length > 1 ? arguments[1] : undefined;

  var everyCash = _toConsumableArray(cash);

  return everyCash.reduce(function (acc, cash) {
    return acc + cash;
  }, own);
};

var money = calcCash(null, sponsors.cash);
exports.money = money;
var _default = sponsors;
exports["default"] = _default;