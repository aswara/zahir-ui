"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireWildcard(require("react-select"));

var _Creatable = _interopRequireDefault(require("react-select/lib/Creatable"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _colors = _interopRequireDefault(require("../colors"));

var _styles = require("@material-ui/core/styles");

var _SelectComponent$prop;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    label: {
      marginBottom: 8,
      color: theme.palette.colors.N60
    },
    container: {
      position: 'relative'
    },
    iconButtonRight: {
      position: 'absolute',
      right: 31,
      top: 9
    },
    iconButtonLeft: {
      position: 'absolute',
      right: 56,
      top: 9
    },
    icon: {
      height: 20,
      width: 20
    },
    errorText: {
      fontSize: 10,
      color: theme.palette.colors.R40,
      position: 'absolute',
      bottom: -18
    }
  };
};

exports.styles = styles;
var customStyles = {
  control: function control(base) {
    return _objectSpread({}, base, {
      borderRadius: 4,
      marginBottom: 0,
      marginTop: 0,
      minHeight: 20,
      height: 44,
      minWidth: 130,
      width: '100%',
      boxShadow: 'none',
      backgroundColor: 'transparent'
    });
  },
  valueContainer: function valueContainer(base) {
    return _objectSpread({}, base, {
      padding: 0,
      fontSize: 14,
      marginLeft: 8
    });
  },
  placeholder: function placeholder(base) {
    return _objectSpread({}, base, {
      color: _colors["default"].N40
    });
  },
  indicatorSeparator: function indicatorSeparator(base) {
    return _objectSpread({}, base, {
      backgroundColor: 'transparent !important'
    });
  },
  menu: function menu(base) {
    return _objectSpread({}, base, {
      zIndex: 100,
      height: 'auto',
      maxHeight: 200
    });
  },
  menuList: function menuList(base) {
    return _objectSpread({}, base, {
      height: 'auto',
      maxHeight: 150
    });
  },
  option: function option(base) {
    return _objectSpread({}, base, {
      fontSize: 14,
      padding: 0,
      color: '#394D6F',
      ':active': _objectSpread({}, base[':active'], {
        color: '#394D6F'
      })
    });
  },
  singleValue: function singleValue(base) {
    return _objectSpread({}, base, {
      paddingRight: 15,
      textTransform: 'capitalize'
    });
  },
  input: function input(base) {
    return _objectSpread({}, base, {
      maxWidth: 400,
      overflow: 'hidden'
    });
  }
};

var DropdownIndicator = function DropdownIndicator(props) {
  return _react["default"].createElement(_reactSelect.components.DropdownIndicator, props, _react["default"].createElement(_ArrowDropDown["default"], {
    style: {
      color: '#A5AEBD'
    }
  }));
};

var SelectComponent = function SelectComponent(props) {
  var error = props.error,
      errorText = props.errorText,
      label = props.label,
      styles = props.styles,
      classes = props.classes,
      fullWidth = props.fullWidth,
      onClickLookup = props.onClickLookup,
      onClickEdit = props.onClickEdit,
      isShowLookup = props.isShowLookup,
      isShowEdit = props.isShowEdit,
      creatable = props.creatable,
      others = _objectWithoutProperties(props, ["error", "errorText", "label", "styles", "classes", "fullWidth", "onClickLookup", "onClickEdit", "isShowLookup", "isShowEdit", "creatable"]);

  var borderColor = error ? '#EB3B5A' : '#EDEEF1';
  return _react["default"].createElement(_FormControl["default"], {
    fullWidth: fullWidth
  }, label && _react["default"].createElement(_Typography["default"], {
    scale: "300",
    className: classes.label
  }, label), _react["default"].createElement("div", {
    className: classes.container
  }, creatable ? _react["default"].createElement(_Creatable["default"], _extends({}, others, {
    styles: customStyles,
    theme: function theme(_theme) {
      return _objectSpread({}, _theme, {
        colors: _objectSpread({}, _theme.colors, {
          primary: borderColor,
          neutral30: borderColor,
          neutral20: borderColor,
          neutral10: borderColor
        })
      });
    },
    components: {
      DropdownIndicator: DropdownIndicator,
      LoadingIndicator: null
    }
  })) : _react["default"].createElement(_reactSelect["default"], _extends({}, others, {
    styles: customStyles,
    theme: function theme(_theme2) {
      return _objectSpread({}, _theme2, {
        colors: _objectSpread({}, _theme2.colors, {
          primary: borderColor,
          neutral30: borderColor,
          neutral20: borderColor,
          neutral10: borderColor
        })
      });
    },
    components: {
      DropdownIndicator: DropdownIndicator,
      LoadingIndicator: null
    }
  })), isShowLookup && _react["default"].createElement(_IconButton["default"], {
    className: isShowEdit ? classes.iconButtonLeft : classes.iconButtonRight,
    onClick: onClickLookup,
    size: "small"
  }, _react["default"].createElement(_Search["default"], {
    className: classes.icon
  })), isShowEdit && _react["default"].createElement(_IconButton["default"], {
    className: classes.iconButtonRight,
    onClick: onClickEdit,
    size: "small"
  }, _react["default"].createElement(_Edit["default"], {
    className: classes.icon
  }))), error && _react["default"].createElement(_FormHelperText["default"], {
    className: classes.errorText
  }, errorText));
};

SelectComponent.propTypes = (_SelectComponent$prop = {
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: _propTypes["default"].bool,

  /**
  * If `true`, the field will be full.
  */
  fullWidth: _propTypes["default"].bool,

  /**
  * The error text content.
  */
  errorText: _propTypes["default"].node,

  /**
  * The label content.
  */
  label: _propTypes["default"].node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes["default"].object.isRequired,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: _propTypes["default"].any
}, _defineProperty(_SelectComponent$prop, "label", _propTypes["default"].node), _defineProperty(_SelectComponent$prop, "multiple", _propTypes["default"].bool), _defineProperty(_SelectComponent$prop, "onChange", _propTypes["default"].func), _defineProperty(_SelectComponent$prop, "onClose", _propTypes["default"].func), _defineProperty(_SelectComponent$prop, "onOpen", _propTypes["default"].func), _defineProperty(_SelectComponent$prop, "open", _propTypes["default"].bool), _defineProperty(_SelectComponent$prop, "renderValue", _propTypes["default"].func), _defineProperty(_SelectComponent$prop, "value", _propTypes["default"].any), _defineProperty(_SelectComponent$prop, "isShowLookup", _propTypes["default"].bool), _defineProperty(_SelectComponent$prop, "onClickLookup", _propTypes["default"].func), _defineProperty(_SelectComponent$prop, "isShowLookup", _propTypes["default"].bool), _defineProperty(_SelectComponent$prop, "onClickEdit", _propTypes["default"].func), _defineProperty(_SelectComponent$prop, "creatable", _propTypes["default"].bool), _SelectComponent$prop);
SelectComponent.muiName = 'Select';

var _default = (0, _styles.withStyles)(styles, {
  name: 'ZuiSelect'
})(SelectComponent);

exports["default"] = _default;