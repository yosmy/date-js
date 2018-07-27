"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));

require("dayjs/locale/es");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dayjs["default"].locale('es');

var _default = function _default(date) {
  _dayjs["default"].extend(_relativeTime["default"]);

  return (0, _dayjs["default"])(date).fromNow().valueOf();
};

exports["default"] = _default;