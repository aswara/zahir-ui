"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ButtonGroup = _interopRequireDefault(require("@material-ui/core/ButtonGroup"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = function styles(theme) {
  return {
    moreButton: {
      minWidth: 36,
      padding: 0
    },
    paper: {
      marginBottom: 10
    }
  };
};

exports.styles = styles;
var useStyles = (0, _styles.makeStyles)(styles);

function SplitButton(props) {
  var _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      title = props.title,
      children = props.children,
      onClick = props.onClick,
      style = props.style,
      loading = props.loading,
      other = _objectWithoutProperties(props, ["options", "title", "children", "onClick", "style", "loading"]);

  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = _react["default"].useRef(null);

  var handleToggle = function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose = function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_ButtonGroup["default"], _extends({}, other, {
    style: style,
    ref: anchorRef,
    "aria-label": "split button"
  }), _react["default"].createElement(_Button["default"], _extends({}, other, {
    onClick: onClick
  }), loading ? _react["default"].createElement(_CircularProgress["default"], {
    size: 20,
    color: "#fff"
  }) : children || title), _react["default"].createElement(_Button["default"], _extends({}, other, {
    "aria-controls": open ? 'split-button-menu' : undefined,
    "aria-expanded": open ? 'true' : undefined,
    "aria-label": "select merge strategy",
    "aria-haspopup": "menu",
    className: classes.moreButton,
    onClick: handleToggle
  }), _react["default"].createElement(_ArrowDropDown["default"], null))), _react["default"].createElement(_Popper["default"], {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return _react["default"].createElement(_Grow["default"], _extends({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      }
    }), _react["default"].createElement(_Paper["default"], {
      className: classes.paper,
      elevation: 4
    }, _react["default"].createElement(_ClickAwayListener["default"], {
      onClickAway: handleClose
    }, _react["default"].createElement(_MenuList["default"], {
      id: "split-button-menu"
    }, options.map(function (option, index) {
      return _react["default"].createElement(_MenuItem["default"], {
        key: option.title,
        onClick: function onClick(event) {
          handleClose(event);
          option.onClick();
        },
        onMouseEnter: option.onMouseEnter,
        onMouseLeave: option.onMouseLeave
      }, option.title);
    })))));
  }));
}

SplitButton.propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes["default"].node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes["default"].object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes["default"].string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes["default"].oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes["default"].elementType,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * If `true`, no elevation is used.
   */
  disableElevation: _propTypes["default"].bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: _propTypes["default"].bool,

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: _propTypes["default"].bool,

  /**
   * Element placed after the children.
   */
  fullWidth: _propTypes["default"].bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),

  /**
   * Element placed before the children.
   */
  startIcon: _propTypes["default"].node,

  /**
   * @ignore
   */
  type: _propTypes["default"].string,

  /**
   * The variant to use.
   */
  variant: _propTypes["default"].oneOf(['text', 'outlined', 'contained']),

  /**
   * The content of the button.
   */
  title: _propTypes["default"].string,

  /**
  * Options of the more button.
  */
  options: _propTypes["default"].array,

  /**
   * If `true`, circular progrees will show.
   */
  loading: _propTypes["default"].bool
};
var _default = SplitButton;
exports["default"] = _default;