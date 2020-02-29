"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _capitalize = _interopRequireDefault(require("./utils/capitalize"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _colors = _interopRequireDefault(require("./colors"));

var _Button$propTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var buildColor = function buildColor(backgroundColor, color, borderColor) {
  return {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: color,
    '&:hover': {
      backgroundColor: backgroundColor,
      color: color,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    }
  };
};

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element if `color="warning"`. */
    warningContained: {
      backgroundColor: '#EB3B5A',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#f11f44',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: '#EB3B5A'
        }
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    warningText: {
      backgroundColor: 'transparent',
      color: '#EB3B5A',
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    warningOutlined: {
      backgroundColor: 'transparent',
      borderColor: '#EB3B5A',
      color: '#EB3B5A',
      '&:hover': {
        backgroundColor: '#f11f44',
        color: 'white',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `color="info"`. */
    infoContained: {
      backgroundColor: _colors["default"].Y40,
      color: '#fff',
      '&:hover': {
        backgroundColor: _colors["default"].Y50,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: _colors["default"].Y40
        }
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    infoText: {
      backgroundColor: 'transparent',
      color: _colors["default"].Y40,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    infoOutlined: {
      backgroundColor: 'transparent',
      borderColor: _colors["default"].Y40,
      color: _colors["default"].Y40,
      '&:hover': {
        backgroundColor: _colors["default"].Y50,
        color: 'white',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },
    iconLarge: {
      height: 44,
      width: 44,
      minWidth: 44,
      '& svg': {
        height: 22,
        width: 22
      }
    },
    iconMedium: {
      height: 38,
      width: 38,
      minWidth: 38,
      '& svg': {
        height: 20,
        width: 20
      }
    }
  };
};

exports.styles = styles;
var useStyles = (0, _styles.makeStyles)(styles);

var Button = function Button(props) {
  var _clsx;

  var children = props.children,
      className = props.className,
      color = props.color,
      title = props.title,
      variant = props.variant,
      icon = props.icon,
      size = props.size,
      loading = props.loading,
      upperCase = props.upperCase,
      other = _objectWithoutProperties(props, ["children", "className", "color", "title", "variant", "icon", "size", "loading", "upperCase"]);

  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);
  var defaultColor = ['default', 'inherit', 'primary', 'secondary'];
  var isDefaultColor = false;

  if (defaultColor.includes(color)) {
    isDefaultColor = true;
  }

  var content = children || title;

  if (upperCase && title) {
    content = title.toUpperCase();
  }

  return _react["default"].createElement(_Button["default"], _extends({
    className: (0, _clsx2["default"])((_clsx = {}, _defineProperty(_clsx, classes[color + (0, _capitalize["default"])(variant)], !isDefaultColor), _defineProperty(_clsx, classes['icon' + (0, _capitalize["default"])(size)], icon), _clsx), className),
    color: isDefaultColor ? color : '',
    variant: variant,
    size: size
  }, other), loading ? _react["default"].createElement(_CircularProgress["default"], {
    size: 20,
    color: "#fff"
  }) : content);
};

Button.propTypes = (_Button$propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes["default"].node.isRequired,

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
  color: _propTypes["default"].oneOf(['default', 'inherit', 'primary', 'secondary', 'warning', 'info']),

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
  endIcon: _propTypes["default"].node,

  /**
   * @ignore
   */
  focusVisibleClassName: _propTypes["default"].string,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: _propTypes["default"].bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: _propTypes["default"].string,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
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
   * If `true`, the button will be icon button.
   */
  icon: _propTypes["default"].bool
}, _defineProperty(_Button$propTypes, "disabled", _propTypes["default"].bool), _defineProperty(_Button$propTypes, "loading", _propTypes["default"].bool), _defineProperty(_Button$propTypes, "upperCase", _propTypes["default"].bool), _Button$propTypes);
var _default = Button;
exports["default"] = _default;