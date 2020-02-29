"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var buildScale = function buildScale(size, lineHeight) {
  return {
    fontSize: size,
    lineHeight: lineHeight + 'px'
  };
};

var buildWeight = function buildWeight(weight) {
  return {
    fontWeight: weight
  };
};

var styles = function styles(theme) {
  return {
    defaultColor: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `scale="100"`. */
    100: buildScale(8.1, 10),

    /* Styles applied to the root element if `scale="200"`. */
    200: buildScale(9.7, 12),

    /* Styles applied to the root element if `scale="300"`. */
    300: buildScale(12, 15),

    /* Styles applied to the root element if `scale="400"`. */
    400: buildScale(14, 18),

    /* Styles applied to the root element if `scale="500"`. */
    500: buildScale(16.8, 21),

    /* Styles applied to the root element if `scale="600"`. */
    600: buildScale(20.2, 25),

    /* Styles applied to the root element if `scale="700"`. */
    700: buildScale(24.2, 30),

    /* Styles applied to the root element if `scale="800"`. */
    800: buildScale(29, 36),

    /* Styles applied to the root element if `scale="900"`. */
    900: buildScale(34.8, 44),

    /* Styles applied to the root element if `weigth="regular"`. */
    "regular": buildWeight("normal"),

    /* Styles applied to the root element if `weigth="semi-bold"`. */
    "semi-bold": buildWeight(500),

    /* Styles applied to the root element if `weigth="bold"`. */
    "bold": buildWeight("bold"),

    /* Styles applied to the root element if `weigth="extra-bold"`. */
    "extra-bold": buildWeight(800),

    /* Styles applied to the root element if `weigth="black"`. */
    "black": buildWeight(900)
  };
};

exports.styles = styles;
var useStyles = (0, _styles.makeStyles)(styles);

var Typography = function Typography(props) {
  var _clsx;

  var _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$scale = props.scale,
      scale = _props$scale === void 0 ? 'initial' : _props$scale,
      weight = props.weight,
      children = props.children,
      color = props.color,
      variant = props.variant,
      className = props.className,
      other = _objectWithoutProperties(props, ["style", "scale", "weight", "children", "color", "variant", "className"]);

  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);
  var paletteColor = _colors["default"][color];
  return _react["default"].createElement(_Typography["default"], _extends({
    style: _objectSpread({}, style, {
      color: paletteColor
    }),
    className: (0, _clsx2["default"])((_clsx = {}, _defineProperty(_clsx, classes[scale], scale !== 'initial'), _defineProperty(_clsx, classes[weight], weight !== null), _defineProperty(_clsx, classes.defaultColor, color == null && !paletteColor), _clsx), className),
    variant: variant,
    color: color
  }, other), children);
};

Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: _propTypes["default"].oneOf(['inherit', 'left', 'center', 'right', 'justify']),

  /**
   * The content of the component.
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
  color: _propTypes["default"].oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * Overrides the behavior of the `variantMapping` prop.
   */
  component: _propTypes["default"].elementType,

  /**
   * Controls the display type
   */
  display: _propTypes["default"].oneOf(['initial', 'block', 'inline']),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: _propTypes["default"].bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: _propTypes["default"].bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: _propTypes["default"].bool,

  /**
   * Applies the theme typography styles.
   */
  variant: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),

  /**
   * The component maps the variant prop to a range of different DOM element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  variantMapping: _propTypes["default"].object,

  /**
   * Applies the theme typography styles.
   */
  scale: _propTypes["default"].oneOf(["100", "200", "300", "400", "500", "600", "700", "800", "900"]),

  /**
   * Applies the theme typography styles.
   */
  weight: _propTypes["default"].oneOf(["regular", "semi-bold", "bold", "extra-bold", "black"])
};
var _default = Typography;
exports["default"] = _default;