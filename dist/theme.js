"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultTheme = (0, _styles.createMuiTheme)();

var theme = function theme(_ref) {
  var _alternativeLabel, _fontSizeLarge;

  var app = _ref.app,
      type = _ref.type,
      primary = _ref.primary,
      secondary = _ref.secondary;
  var primaryColor = primary || '#027fb3';
  var secondaryColor = secondary || '#20BF6B';
  var secondaryDarkColor = '#1B9D58';
  var primaryText = type === 'dark' ? '#fff' : '#394D6F';
  var secondaryText = type === 'dark' ? '#fff' : '#0078B0';
  var borderColor = '#C9CED7';
  var disabledBackground = '#C9CED7';
  var placeholder = {
    color: _colors["default"].N40,
    opacity: 1
  };
  return (0, _styles.createMuiTheme)({
    palette: {
      primary: {
        main: '#027fb3'
      },
      // Purple and green play nicely together.
      secondary: {
        main: secondaryColor,
        dark: secondaryDarkColor
      },
      // This is just green.A700 as hex.
      text: {
        primary: primaryText,
        secondary: secondaryText
      },
      divider: type === 'dark' ? 'rgba(255, 255, 255, 0.12)' : _colors["default"].N20,
      colors: _objectSpread({}, _colors["default"]),
      action: {
        disabledBackground: disabledBackground,
        disabled: 'white'
      }
    },
    overrides: {
      MuiBackdrop: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.25)'
        }
      },
      MuiPaper: {
        elevation24: {
          boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.25)'
        },
        elevation4: {
          boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)'
        }
      },
      MuiLinearProgress: {
        root: {
          height: 3
        }
      },
      MuiStepper: {
        root: {
          paddingTop: 35
        }
      },
      MuiStepConnector: {
        alternativeLabel: (_alternativeLabel = {}, _defineProperty(_alternativeLabel, defaultTheme.breakpoints.only("xs"), {
          top: 12,
          // left: 'calc(-50% + 20px)',
          right: 'calc(50% + 20px)',
          position: 'absolute',
          width: 73,
          left: -36
        }), _defineProperty(_alternativeLabel, defaultTheme.breakpoints.up("md"), {
          top: 12,
          // left: 'calc(-50% + 20px)',
          right: 'calc(50% + 20px)',
          position: 'absolute',
          width: 174,
          left: -87
        }), _defineProperty(_alternativeLabel, defaultTheme.breakpoints.only("xl"), {
          top: 12,
          // left: 'calc(-50% + 20px)',
          right: 'calc(50% + 20px)',
          position: 'absolute',
          width: 269,
          left: -134
        }), _alternativeLabel),
        active: {
          // #8854D0
          '& $line': {
            borderColor: '#20bf6b  !important'
          }
        },
        completed: {
          '& $line': {
            borderColor: '#20bf6b  !important'
          }
        },
        // #CFBAEC
        line: {
          borderColor: '#a5e5c3  !important'
        }
      },
      MuiStepIcon: {
        root: {
          color: '#a5e5c3 !important'
        },
        completed: {
          color: '#20bf6b !important'
        },
        active: {
          color: '#20bf6b !important'
        }
      },
      MuiSvgIcon: {
        fontSizeSmall: {
          fontSize: 16
        },
        fontSizeLarge: (_fontSizeLarge = {
          fontSize: 120
        }, _defineProperty(_fontSizeLarge, '@media (max-width: 992px)', {
          fontSize: 100
        }), _defineProperty(_fontSizeLarge, '@media (max-width: 768px)', {
          fontSize: 50
        }), _fontSizeLarge)
      },
      MuiTableCell: {
        head: {
          fontSize: 12,
          color: '#3c4550',
          borderBottom: 'solid 1px #d8dee2 !important',
          letterSpacing: '0.5px',
          fontWeight: 500,
          textTransform: 'uppercase'
        },
        body: {
          fontSize: 14,
          color: '#394D6F',
          letterSpacing: '0.5px',
          fontWeight: 300
        },
        root: {
          "&:last-child": {
            paddingRight: 0
          },
          border: 'unset !important'
        }
      },
      MuiFormControlLabel: {
        root: {
          marginBottom: 'unset !important'
        }
      },
      MuiDialogActions: {
        root: _defineProperty({
          padding: 7,
          marginBottom: 25,
          marginRight: 25,
          marginLeft: 25
        }, '@media (max-width: 600px)', {
          margin: 20
        }),
        spacing: {
          '& > :not(:first-child)': {
            marginLeft: 12
          }
        },
        action: {
          marginLeft: 20,
          marginRight: 0
        }
      },
      MuiTypography: {
        root: {
          color: '#394d6f'
        },
        body1: {
          fontWeight: 600,
          fontSize: 14
        },
        caption: {
          fontSize: 11
        }
      },
      MuiNotchedOut: {
        line: {
          root: {
            borderRadius: '3 !important'
          }
        }
      },
      MuiCollapse: {
        container: {
          width: '100%'
        }
      },
      MuiListItemText: {
        primary: {
          color: '#fff'
        }
      },
      MuiListItemIcon: {
        root: {
          minWidth: 30
        }
      },
      MuiFormHelperText: {
        error: {
          color: '#c45353 !important',
          fontWeight: 100
        }
      },
      MuiFormLabel: {
        root: {
          fontSize: 14,
          color: primaryText
        },
        error: {
          color: '#253238 !important'
        }
      },
      MuiInputLabel: {
        formControl: {
          color: '#76838f',
          letterSpacing: '0.5px',
          fontWeight: 300
        }
      },
      MuiIcon: {
        colorError: {
          color: '#ff9616'
        }
      },
      // Text Field
      MuiInput: {
        underline: {
          '&:before': {
            borderBottom: '1px solid #e4eaec'
          },
          '&:after': {
            borderBottom: "1px solid #027fb3"
          },
          '&:hover:before': {
            borderBottom: '1px solid #e4eaec'
          },
          '&:hover:not($disabled):before': {
            borderBottom: "1px solid #e4eaec",
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              borderBottom: "1px solid #e4eaec"
            }
          }
        },
        disabled: {
          '&:before': {
            borderBottom: '1px solid #e4eaec !important'
          }
        },
        error: {
          '&:after': {
            borderBottomColor: '#c45353 !important'
          }
        },
        input: {
          marginBottom: 8,
          fontWeight: 300,
          fontSize: 14,
          letterSpacing: '0.5px'
        }
      },
      MuiInputBase: {
        input: {
          padding: '1px 0px 5px',
          fontSize: 14,
          '&::-webkit-input-placeholder': placeholder,
          '&::-moz-placeholder': placeholder,
          // Firefox 19+
          '&:-ms-input-placeholder': placeholder,
          // IE 11
          '&::-ms-input-placeholder': placeholder // Edge

        }
      },
      MuiOutlinedInput: {
        root: {
          background: 'white',
          borderRadius: 4,
          height: 44,
          '&:hover $notchedOutline': {
            borderColor: '#EDEEF1'
          },
          '&$focused $notchedOutline': {
            borderColor: '#EDEEF1',
            borderWidth: 1
          }
        },
        input: {
          padding: '12px 12px'
        },
        adornedEnd: {
          paddingRight: 0
        },
        adornedStart: {
          paddingLeft: 0
        },
        notchedOutline: {
          borderColor: '#EDEEF1'
        }
      },
      MuiAppBar: {
        root: {
          boxShadow: 'none'
        },
        colorDefault: {
          color: '#000',
          backgroundColor: '#fff',
          boxShadow: '0 1px 2px 0 rgba(60, 69, 80, 0.19)'
        },
        colorPrimary: {
          backgroundColor: '#0078B0'
        }
      },
      MuiFab: {
        secondary: {
          color: 'white'
        }
      },
      MuiIconButton: {
        root: {
          padding: 10,
          color: '#A5AEBD'
        },
        disabled: {
          color: '#A5AEBD'
        }
      },
      MuiButton: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 600,
          minWidth: 80,
          height: 36
        },
        mini: {
          boxShadow: 'unset',
          minHeight: 15,
          height: 15,
          width: 15
        },
        containedPrimary: {
          minWidth: 80,
          boxShadow: 'unset',
          // backgroundColor: '#46be8a',
          '&:hover': {
            textDecoration: 'none',
            // backgroundColor: '#3da879',
            boxShadow: 'none',
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            },
            '&$disabled': {
              backgroundColor: 'transparent'
            }
          }
        },
        containedSecondary: {
          minWidth: 80,
          boxShadow: 'unset',
          color: 'white',
          fontSize: 14,
          borderRadius: 4,
          fontWeight: 600,
          '&:hover': {
            textDecoration: 'none',
            boxShadow: 'none',
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
        },
        flatPrimary: {
          color: '#027fb3'
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            '@media (hover: none)': {
              boxShadow: 'none'
            }
          }
        },
        outlinedPrimary: {
          borderColor: primaryColor,
          color: primaryColor,
          fontWeight: 600,
          '&:hover': {
            textDecoration: 'none',
            color: 'white',
            borderColor: primaryColor,
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            },
            '&$disabled': {
              backgroundColor: 'transparent'
            }
          }
        },
        outlinedSecondary: {
          fontWeight: 600,
          borderColor: secondaryColor,
          color: secondaryColor,
          '&:hover': {
            textDecoration: 'none',
            color: '#ffffff',
            borderColor: secondaryDarkColor,
            backgroundColor: secondaryDarkColor,
            '@media (hover: none)': {
              backgroundColor: secondaryDarkColor,
              borderColor: secondaryDarkColor
            },
            '&$disabled': {
              backgroundColor: 'transparent'
            }
          }
        },
        sizeSmall: {
          padding: '0px 10px',
          height: 28,
          fontSize: 14
        },
        sizeLarge: {
          padding: '9px 20px',
          height: 44,
          fontSize: 14
        },
        outlined: {
          border: '1px solid #EDEEF1',
          padding: '5px 15px'
        },
        text: {
          color: disabledBackground
        },
        fab: {
          position: 'absolute',
          zIndex: 1,
          bottom: 20,
          right: 20,
          margin: '0 auto'
        }
      },
      // tab
      MuiTab: {
        root: {
          borderBottom: 'none',
          minWidth: 'unset !important',
          textTransform: 'none'
        },
        labelContainer: {
          textTransform: 'initial',
          lineHeight: '16px',
          fontSize: 14,
          letterSpacing: '0.4px',
          padding: '14px 20px',
          opacity: '1'
        },
        textColorInherit: {
          opacity: 0.5
        },
        textColorPrimary: {
          fontWeight: 300,
          '&$selected': {
            fontWeight: 'normal',
            color: '#0078b0',
            opacity: '0.7'
          }
        }
      },
      MuiTabs: {
        root: {
          paddingBottom: '20px'
        },
        indicator: {
          backgroundColor: '#0078b0',
          opacity: '0.7',
          height: 3,
          borderRadius: 2
        }
      },
      // sticky list
      MuiListSubheader: {
        root: {
          lineHeight: '30px'
        }
      },
      // modal
      MuiDialog: {
        paperFullScreen: {
          borderRadius: '.286rem'
        },
        paper: {
          minHeight: 600,
          margin: '48px',
          display: 'flex',
          outline: 'none',
          position: 'relative',
          overflowY: 'unset',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: 8
        }
      },
      MuiDialogContent: {
        root: {
          padding: '0 32px 32px'
        }
      },
      MuiDialogTitle: {
        root: {
          padding: 32
        }
      },
      // snackbar
      MuiSnackbar: {
        anchorOriginTopRight: {
          top: '64px !important',
          right: '0px !important'
        }
      },
      // button group
      MuiButtonGroup: {
        contained: {
          boxShadow: 'none'
        },
        grouped: {
          minWidth: 80
        },
        groupedContainedHorizontal: {
          '&:not(:last-child)': {
            '&$disabled': {
              borderRight: "1px solid ".concat(borderColor)
            }
          }
        }
      },
      // menu item
      MuiMenuItem: {
        root: {
          fontSize: 14
        }
      }
    },
    typography: {
      // fontFamily: 'Roboto',
      fontFamily: 'Muli, sans-serif'
    },
    MuiCheckbox: {
      root: {
        color: '#0078b0',
        '&$checked': {
          color: '#107aae'
        }
      }
    },
    //menu item
    MuiMenuItem: {
      root: {
        color: 'rgba(0, 0, 0, 0.87) !important',
        width: 'auto !important',
        height: '24px !important',
        overflow: 'hidden !important',
        fontSize: '14px !important',
        boxSizing: 'content-box !important',
        fontWeight: '200 !important',
        fontFamily: 'Muli !important',
        lineHeight: '1.5em !important',
        whiteSpace: 'nowrap !important',
        paddingLeft: '16px !important',
        textOverflow: 'ellipsis !important',
        paddingRight: '16px !important'
      }
    }
  });
};

var _default = theme;
exports["default"] = _default;