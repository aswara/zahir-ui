"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("./Typography"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = function styles(theme) {
  return {
    root: {
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 12,
      paddingLeft: 12,
      cursor: 'pointer'
    }
  };
};

exports.styles = styles;
var useStyles = (0, _styles.makeStyles)(styles);

var ListItem = function ListItem(props) {
  var _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      _props$isDefault = props.isDefault,
      isDefault = _props$isDefault === void 0 ? false : _props$isDefault,
      title = props.title,
      primary = props.primary,
      secondary = props.secondary,
      description = props.description,
      rightTitle = props.rightTitle,
      rightPrimary = props.rightPrimary,
      rightSecondary = props.rightSecondary,
      rightDescription = props.rightDescription,
      _props$titleStyle = props.titleStyle,
      titleStyle = _props$titleStyle === void 0 ? {} : _props$titleStyle,
      _props$primaryStyle = props.primaryStyle,
      primaryStyle = _props$primaryStyle === void 0 ? {} : _props$primaryStyle,
      _props$secondaryStyle = props.secondaryStyle,
      secondaryStyle = _props$secondaryStyle === void 0 ? {} : _props$secondaryStyle,
      _props$descriptionSty = props.descriptionStyle,
      descriptionStyle = _props$descriptionSty === void 0 ? {} : _props$descriptionSty,
      _props$rightTitleStyl = props.rightTitleStyle,
      rightTitleStyle = _props$rightTitleStyl === void 0 ? {} : _props$rightTitleStyl,
      _props$rightPrimarySt = props.rightPrimaryStyle,
      rightPrimaryStyle = _props$rightPrimarySt === void 0 ? {} : _props$rightPrimarySt,
      _props$rightSecondary = props.rightSecondaryStyle,
      rightSecondaryStyle = _props$rightSecondary === void 0 ? {} : _props$rightSecondary,
      _props$rightDescripti = props.rightDescriptionStyle,
      rightDescriptionStyle = _props$rightDescripti === void 0 ? {} : _props$rightDescripti,
      other = _objectWithoutProperties(props, ["selected", "isDefault", "title", "primary", "secondary", "description", "rightTitle", "rightPrimary", "rightSecondary", "rightDescription", "titleStyle", "primaryStyle", "secondaryStyle", "descriptionStyle", "rightTitleStyle", "rightPrimaryStyle", "rightSecondaryStyle", "rightDescriptionStyle"]);

  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);

  var icon = _react["default"].createElement(_CheckCircle["default"], {
    color: "secondary",
    style: {
      width: 20,
      height: 20,
      marginLeft: 12
    }
  });

  var content = _react["default"].createElement(_Grid["default"], {
    style: {
      minHeight: 20
    },
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: "center"
  }, _react["default"].createElement(_Grid["default"], {
    item: true
  }, title && _react["default"].createElement(_Typography["default"], {
    style: _objectSpread({
      marginBottom: 4
    }, titleStyle),
    scale: "200",
    color: "textPrimary"
  }, title), primary && _react["default"].createElement(_Typography["default"], {
    style: primaryStyle,
    variant: "body2",
    color: "textPrimary"
  }, primary), secondary && _react["default"].createElement(_Typography["default"], {
    style: secondaryStyle,
    variant: "body2",
    color: "textSecondary"
  }, secondary), description && _react["default"].createElement(_Typography["default"], {
    style: descriptionStyle,
    scale: "200",
    color: "textPrimary"
  }, description)), _react["default"].createElement(_Grid["default"], {
    style: {
      display: 'flex'
    },
    item: true
  }, _react["default"].createElement("div", null, rightTitle && _react["default"].createElement(_Typography["default"], {
    align: "right",
    style: _objectSpread({
      marginBottom: 4
    }, rightTitleStyle),
    scale: "200",
    color: "textPrimary"
  }, rightTitle), rightPrimary && _react["default"].createElement(_Typography["default"], {
    align: "right",
    style: rightPrimaryStyle,
    variant: "body2",
    color: "textPrimary"
  }, rightPrimary), rightSecondary && _react["default"].createElement(_Typography["default"], {
    align: "right",
    style: rightSecondaryStyle,
    variant: "body2",
    color: "textSecondary"
  }, rightSecondary), rightDescription && _react["default"].createElement(_Typography["default"], {
    align: "right",
    style: rightDescriptionStyle,
    scale: "200",
    color: "textPrimary"
  }, rightDescription)), _react["default"].createElement("div", null, selected ? icon : null, isDefault && _react["default"].createElement(_Typography["default"], {
    style: {
      color: '#3da879',
      fontSize: 12
    }
  }, "Default"))));

  if (title && primary && rightTitle) {
    content = _react["default"].createElement(_Grid["default"], {
      style: {
        minHeight: 20
      },
      container: true,
      direction: "row",
      justify: "space-between",
      alignItems: "center"
    }, _react["default"].createElement(_Grid["default"], {
      item: true
    }, title && _react["default"].createElement(_Typography["default"], {
      style: _objectSpread({
        marginBottom: 4
      }, titleStyle),
      scale: "200",
      color: "textPrimary"
    }, title), primary && _react["default"].createElement(_Typography["default"], {
      style: primaryStyle,
      variant: "body2",
      color: "textPrimary"
    }, primary), secondary && _react["default"].createElement(_Typography["default"], {
      style: secondaryStyle,
      variant: "body2",
      color: "textSecondary"
    }, secondary), description && _react["default"].createElement(_Typography["default"], {
      style: descriptionStyle,
      scale: "200",
      color: "textPrimary"
    }, description)), _react["default"].createElement(_Grid["default"], {
      style: {
        display: 'flex'
      },
      item: true
    }, _react["default"].createElement("div", null, rightTitle && _react["default"].createElement(_Typography["default"], {
      align: "right",
      style: _objectSpread({
        marginBottom: 4
      }, rightTitleStyle),
      scale: "200",
      color: "textPrimary"
    }, rightTitle), rightPrimary && _react["default"].createElement(_Typography["default"], {
      align: "right",
      style: rightPrimaryStyle,
      variant: "body2",
      color: "textPrimary"
    }, rightPrimary), rightSecondary && _react["default"].createElement(_Typography["default"], {
      align: "right",
      style: rightSecondaryStyle,
      variant: "body2",
      color: "textSecondary"
    }, rightSecondary), rightDescription && _react["default"].createElement(_Typography["default"], {
      align: "right",
      style: rightDescriptionStyle,
      scale: "200",
      color: "textPrimary"
    }, rightDescription), selected ? icon : null)));
  }

  return _react["default"].createElement(_ListItem["default"], _extends({
    disableGutters: true,
    className: classes.root
  }, other), content);
};

ListItem.propTypes = {
  /**
   * Defines the `align-items` style property.
   */
  alignItems: _propTypes["default"].oneOf(['flex-start', 'center']),

  /**
   * If `true`, the list item will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * If `true`, the list item will be a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   */
  button: _propTypes["default"].bool,

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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component: _propTypes["default"].elementType,

  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   */
  ContainerComponent: _propTypes["default"].elementType,

  /**
   * Props applied to the container component if used.
   */
  ContainerProps: _propTypes["default"].object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: _propTypes["default"].bool,

  /**
   * If `true`, the list item will be disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: _propTypes["default"].bool,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: _propTypes["default"].bool,

  /**
   * @ignore
   */
  focusVisibleClassName: _propTypes["default"].string,

  /**
   * Use to apply selected styling.
   */
  selected: _propTypes["default"].bool,

  /**
   * The title of the ListItem.
   */
  title: _propTypes["default"].string,

  /**
   * The primary of the ListItem.
   */
  primary: _propTypes["default"].string,

  /**
   * The secondary of the ListItem.
   */
  secondary: _propTypes["default"].string,

  /**
   * The description of the ListItem.
   */
  description: _propTypes["default"].string,

  /**
  * The right hand title of the ListItem.
  */
  rightTitle: _propTypes["default"].string,

  /**
   * The right hand primary  of the ListItem.
   */
  rightPrimary: _propTypes["default"].string,

  /**
   * The right hand secondary of the ListItem.
   */
  rightSecondary: _propTypes["default"].string,

  /**
   * The right hand description of the ListItem.
   */
  rightDescription: _propTypes["default"].string,

  /**
   * The style title of the ListItem.
   */
  titleStyle: _propTypes["default"].object,

  /**
   * The style primary of the ListItem.
   */
  primaryStyle: _propTypes["default"].object,

  /**
   * The style secondary of the ListItem.
   */
  secondaryStyle: _propTypes["default"].object,

  /**
   * The style description of the ListItem.
   */
  descriptionStyle: _propTypes["default"].object,

  /**
  * The style right hand title of the ListItem.
  */
  rightTitleStyle: _propTypes["default"].object,

  /**
   * The style right hand primary  of the ListItem.
   */
  rightPrimaryStyle: _propTypes["default"].object,

  /**
   * The style right hand secondary of the ListItem.
   */
  rightSecondaryStyle: _propTypes["default"].object,

  /**
   * The style right hand description of the ListItem.
   */
  rightDescriptionStyle: _propTypes["default"].object,

  /**
   * If `true`, will be show label Default.
   */
  isDefault: _propTypes["default"].bool
};
var _default = ListItem;
exports["default"] = _default;