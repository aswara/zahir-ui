"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Visibility = _interopRequireDefault(require("@material-ui/icons/Visibility"));

var _VisibilityOff = _interopRequireDefault(require("@material-ui/icons/VisibilityOff"));

var _ImportExport = _interopRequireDefault(require("@material-ui/icons/ImportExport"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("../Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var borderColor = '#EDEEF1';

var styles = function styles(theme) {
  return {
    label: {
      marginBottom: 8,
      color: theme.palette.colors.n60,
      whiteSpace: 'nowrap'
    }
  };
};

exports.styles = styles;

function NumberFormatCustom(props) {
  var percentage = props.percentage,
      minZero = props.minZero,
      inputRef = props.inputRef,
      prefix = props.prefix,
      onChange = props.onChange,
      left = props.left,
      style = props.style,
      decimalSeparator = props.decimalSeparator,
      thousandSeparator = props.thousandSeparator,
      other = _objectWithoutProperties(props, ["percentage", "minZero", "inputRef", "prefix", "onChange", "left", "style", "decimalSeparator", "thousandSeparator"]);

  return _react["default"].createElement(_reactNumberFormat["default"], _extends({}, other, {
    style: _objectSpread({}, style, {
      textAlign: left ? 'left' : 'right'
    }),
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          value: percentage && values.value > 100 ? 100 : values.value < 0 && minZero ? values.value * -1 : values.value
        }
      });
    },
    thousandSeparator: thousandSeparator,
    decimalSeparator: decimalSeparator,
    isNumericString: true,
    prefix: prefix + ' '
  }));
}

NumberFormatCustom.propTypes = {
  inputRef: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  left: _propTypes["default"].bool,
  prefix: _propTypes["default"].string,
  minZero: _propTypes["default"].bool
};

function CardNumberFormat(props) {
  var inputRef = props.inputRef,
      onChange = props.onChange,
      style = props.style,
      other = _objectWithoutProperties(props, ["inputRef", "onChange", "style"]);

  return _react["default"].createElement(_reactNumberFormat["default"], _extends({}, other, {
    style: _objectSpread({}, style),
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          value: values.value
        }
      });
    },
    isNumericString: true,
    format: "#### #### #### ####"
  }));
}

CardNumberFormat.propTypes = {
  inputRef: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  left: _propTypes["default"].bool
};

function CardExpFormat(props) {
  var inputRef = props.inputRef,
      onChange = props.onChange,
      style = props.style,
      other = _objectWithoutProperties(props, ["inputRef", "onChange", "style"]);

  return _react["default"].createElement(_reactNumberFormat["default"], _extends({}, other, {
    style: _objectSpread({}, style),
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          value: values.value
        }
      });
    },
    isNumericString: true,
    format: "##/##"
  }));
}

CardExpFormat.propTypes = {
  inputRef: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  left: _propTypes["default"].bool
};

function CardCvnFormat(props) {
  var inputRef = props.inputRef,
      onChange = props.onChange,
      style = props.style,
      other = _objectWithoutProperties(props, ["inputRef", "onChange", "style"]);

  return _react["default"].createElement(_reactNumberFormat["default"], _extends({}, other, {
    style: _objectSpread({}, style),
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          value: values.value
        }
      });
    },
    isNumericString: true,
    format: "####"
  }));
}

CardCvnFormat.propTypes = {
  inputRef: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  left: _propTypes["default"].bool
};

function SerialNumberFormat(props) {
  var inputRef = props.inputRef,
      onChange = props.onChange,
      style = props.style,
      other = _objectWithoutProperties(props, ["inputRef", "onChange", "style"]);

  return _react["default"].createElement(_reactNumberFormat["default"], _extends({}, other, {
    style: _objectSpread({}, style),
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          value: values.value,
          formattedValue: values.formattedValue
        }
      });
    },
    isNumericString: true,
    mask: "_",
    format: "###.###-##.########"
  }));
}

SerialNumberFormat.propTypes = {
  inputRef: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  left: _propTypes["default"].bool
};

var InputTextField = /*#__PURE__*/function (_Component) {
  _inherits(InputTextField, _Component);

  function InputTextField(props) {
    var _this;

    _classCallCheck(this, InputTextField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputTextField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "togglePassword", function () {
      if (_this.state.type === 'password') {
        _this.setState({
          type: 'text'
        });
      } else {
        _this.setState({
          type: 'password'
        });
      }
    });

    _this.value = '';
    _this.state = {
      type: props.type || 'text',
      display: "none"
    };
    return _this;
  }

  _createClass(InputTextField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          value = _this$props.value,
          id = _this$props.id,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          autoFocus = _this$props.autoFocus,
          type = _this$props.type,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          decimalSeparator = _this$props.decimalSeparator,
          thousandSeparator = _this$props.thousandSeparator,
          error = _this$props.error,
          formatValue = _this$props.formatValue,
          icon = _this$props.icon,
          onClickIcon = _this$props.onClickIcon,
          prefix = _this$props.prefix,
          sufix = _this$props.sufix,
          label = _this$props.label,
          maxLength = _this$props.maxLength,
          percentage = _this$props.percentage,
          minZero = _this$props.minZero,
          left = _this$props.left,
          right = _this$props.right,
          prefixLabel = _this$props.prefixLabel,
          sufixLabel = _this$props.sufixLabel,
          touched = _this$props.touched,
          name = _this$props.name,
          multiline = _this$props.multiline,
          rows = _this$props.rows,
          rowsMax = _this$props.rowsMax,
          forDetail = _this$props.forDetail,
          endAdornment = _this$props.endAdornment,
          others = _objectWithoutProperties(_this$props, ["classes", "value", "id", "disabled", "readOnly", "autoFocus", "type", "onChange", "placeholder", "onFocus", "onBlur", "decimalSeparator", "thousandSeparator", "error", "formatValue", "icon", "onClickIcon", "prefix", "sufix", "label", "maxLength", "percentage", "minZero", "left", "right", "prefixLabel", "sufixLabel", "touched", "name", "multiline", "rows", "rowsMax", "forDetail", "endAdornment"]);

      return _react["default"].createElement(_core.FormControl, {
        disabled: disabled,
        fullWidth: true,
        className: classes.root
      }, label ? _react["default"].createElement(_Typography["default"], {
        className: classes.label,
        scale: "300"
      }, label) : null, _react["default"].createElement(_core.OutlinedInput, _extends({}, others, {
        value: value,
        id: id,
        disabled: disabled,
        readOnly: readOnly,
        autoFocus: autoFocus,
        type: type,
        onChange: onChange,
        placeholder: placeholder,
        onFocus: onFocus,
        onBlur: onBlur,
        inputProps: {
          decimalSeparator: decimalSeparator,
          thousandSeparator: thousandSeparator,
          maxLength: maxLength,
          minLength: 5,
          prefix: prefix,
          percentage: percentage,
          minZero: minZero,
          left: left,
          style: {
            textAlign: right ? 'right' : 'left',
            padding: forDetail ? '0px 12px 24px 1px' : '12.5px',
            color: forDetail ? '#394D6F' : 'inherit'
          }
        },
        error: error,
        inputComponent: formatValue === 'price' ? NumberFormatCustom : formatValue === 'card_number' ? CardNumberFormat : formatValue === 'card_exp' ? CardExpFormat : formatValue === 'card_cvn' ? CardCvnFormat : formatValue === 'serial_number' ? SerialNumberFormat : 'input',
        startAdornment: !!icon ? _react["default"].createElement(_core.Icon, {
          onClick: onClickIcon || null,
          style: !onClickIcon ? {
            marginRight: 10,
            color: 'rgba(0, 0, 0, 0.54)',
            marginTop: -10
          } : {
            marginRight: 10,
            color: '#46be8a',
            marginTop: -10,
            cursor: 'pointer'
          }
        }, icon) : prefixLabel ? _react["default"].createElement(_core.IconButton, {
          style: {
            marginBottom: -3,
            width: 45,
            height: 45,
            marginTop: -10
          },
          onClick: this.props.onClickPrefix || null
        }, _react["default"].createElement(_Typography["default"], {
          inline: true,
          noWrap: true,
          style: {
            width: 70,
            position: 'absolute'
          },
          variant: "body1"
        }, prefixLabel)) : type === 'rate' ? _react["default"].createElement(_core.InputAdornment, {
          position: "start"
        }, _react["default"].createElement(_core.IconButton, {
          "aria-label": "Toggle Button Switch Rate",
          onClick: function onClick() {
            return _this2.props.onClickPrefix(value);
          }
        }, _react["default"].createElement(_ImportExport["default"], {
          fontSize: "small"
        }))) : null,
        endAdornment: endAdornment ? _react["default"].createElement(_core.InputAdornment, {
          position: "end"
        }, endAdornment) : type === 'password' ? _react["default"].createElement(_core.InputAdornment, {
          position: "end"
        }, _react["default"].createElement(_core.IconButton, {
          "aria-label": "Toggle password  visibility",
          onClick: this.togglePassword
        }, this.state.type !== 'password' ? _react["default"].createElement(_Visibility["default"], {
          fontSize: "small"
        }) : _react["default"].createElement(_VisibilityOff["default"], {
          fontSize: "small"
        }))) : sufix ? _react["default"].createElement(_core.InputAdornment, {
          position: "end"
        }, this.props.typeSufixIcon === 'material' ? _react["default"].createElement(_core.IconButton, {
          onClick: this.props.onClickSufix || null
        }, _react["default"].createElement(_core.Icon, null, sufix)) : this.props.typeSufixIcon === 'label' ? _react["default"].createElement(_core.IconButton, {
          style: {
            marginBottom: 10,
            width: 45
          },
          onClick: this.props.onClickSufix || null
        }, _react["default"].createElement(_Typography["default"], {
          variant: "body1"
        }, sufix)) : this.props.typeSufixIcon === 'local' ? _react["default"].createElement(_core.IconButton, {
          style: {
            marginBottom: 10,
            width: 45
          },
          onClick: this.props.onClickSufix || null
        }, _react["default"].createElement("img", {
          alt: "icon",
          src: sufix
        })) : _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: sufix,
          size: "xs",
          color: "rgba(0, 0, 0, 0.54)"
        })) : touched && !!error && error === 'Please fill out this field.' ? _react["default"].createElement(_core.InputAdornment, {
          position: "end"
        }, _react["default"].createElement("span", {
          className: "text-warning text-warning-input"
        }, "required"), _react["default"].createElement(_core.Icon, {
          color: "error",
          fontSize: "small",
          classes: {
            fontSizeSmall: 'icon-warning-input'
          }
        }, "warning")) : sufixLabel ? _react["default"].createElement(_Typography["default"], {
          inline: true,
          style: {
            marginBottom: 10,
            width: 70,
            textAlign: 'right'
          },
          variant: "body1"
        }, sufixLabel) : null,
        multiline: multiline,
        rows: rows,
        rowsMax: rowsMax
      })), touched && !!error ? _react["default"].createElement(_core.FormHelperText, {
        style: {
          position: 'absolute',
          top: 43
        },
        error: touched && !!error
      }, name === 'email' ? "please login with this email" : error) : null);
    }
  }]);

  return InputTextField;
}(_react.Component);

var _default = (0, _styles.withStyles)(styles, {
  name: 'ZuiTextField'
})(InputTextField);

exports["default"] = _default;
InputTextField.propTypes = {
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  type: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  meta: _propTypes["default"].object.isRequired,
  formPhone: _propTypes["default"].bool,
  noLabel: _propTypes["default"].bool,
  setValue: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  italic: _propTypes["default"].bool,
  left: _propTypes["default"].bool,
  maxLength: _propTypes["default"].number,
  right: _propTypes["default"].bool,
  prefix: _propTypes["default"].string,
  onHandleKeyDown: _propTypes["default"].func,
  noMargin: _propTypes["default"].bool,
  loginClass: _propTypes["default"].bool,
  minZero: _propTypes["default"].bool,

  /**
  	* Mixed: single character string or boolean true (true is default to ,)
  	*/
  thousandSeparator: _propTypes["default"].string,

  /**
  	* Single character string
  	*/
  decimalSeparator: _propTypes["default"].string,

  /**
   * Format value.
   * `price` is equivalent to have currency format.
   */
  formatValue: _propTypes["default"].oneOf(['price', 'card_number', 'card_exp', 'card_cvn', 'serial_number', 'input']),

  /**
    * If `true`, will be detail style
    */
  forDetail: _propTypes["default"].bool
};
InputTextField.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  disabled: false,
  readonly: false,
  formPhone: false,
  noLabel: false,
  setValue: '',
  autoFocus: false,
  italic: false,
  left: false,
  maxLength: undefined,
  loginClass: false,
  right: false,
  prefix: '',
  onHandleKeyDown: null,
  noMargin: false,
  minZero: false,
  thousandSeparator: ',',
  decimalSeparator: '.'
};