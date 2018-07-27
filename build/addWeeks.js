"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

require("dayjs/locale/es");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dayjs["default"].locale('es');

var _default = function _default(date, amount) {
  return (0, _dayjs["default"])(date).add(amount, 'week').valueOf();
};

exports["default"] = _default;