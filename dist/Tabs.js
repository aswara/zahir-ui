"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StyledTabs = (0, _styles.withStyles)({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 30,
      width: '100%',
      backgroundColor: '#0078B0',
      height: 3,
      borderRadius: 2
    }
  }
})(function (props) {
  return _react["default"].createElement(_Tabs["default"], _extends({}, props, {
    TabIndicatorProps: {
      children: _react["default"].createElement("div", null)
    }
  }));
});
var _default = StyledTabs;
exports["default"] = _default;