import { darken, createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';
import { fontFamily } from './global';

const theme = ({ app, mode, primary, secondary, custom = {} }) => {
  const primaryColor = primary || '#027fb3';
	const secondaryColor = secondary || '#20BF6B';
	
	const primaryDarkColor = darken(primaryColor, 0.2);
  const secondaryDarkColor = darken(secondaryColor, 0.2);

  
  const primaryText = mode === 'dark' ? '#fff' : '#394D6F';
	const secondaryText = mode === 'dark' ? '#fff' : '#0078B0';
	const borderColor = '#C9CED7';
	const disabledBackground = '#C9CED7';

	const placeholder = {
		color: colors.N40,
		opacity: 1
  };

	return createMuiTheme({
		palette: {
			primary: { 
				main: primaryColor,
				dark: primaryDarkColor
			},
			secondary: {
				main: secondaryColor,
				dark: secondaryDarkColor
			},
			text: {
				primary: primaryText,
				secondary: secondaryText
			},
			divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : colors.N20,
			colors: {
				...colors
			},
			action: {
				disabledBackground,
				disabled: 'white'
			}
		},
		typography: {
			fontFamily: fontFamily
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
				alternativeLabel: {
					['@media (max-width: 600px)']: {
						top: 12,
						// left: 'calc(-50% + 20px)',
						right: 'calc(50% + 20px)',
						position: 'absolute',
						width: 73,
						left: -36,
					},
					['@media (min-width: 960px)']: {
						top: 12,
						// left: 'calc(-50% + 20px)',
						right: 'calc(50% + 20px)',
						position: 'absolute',
						width: 174,
						left: -87,
					},
					['@media (max-width: 1920px)']: {
						top: 12,
						// left: 'calc(-50% + 20px)',
						right: 'calc(50% + 20px)',
						position: 'absolute',
						width: 269,
						left: -134,
					}
				},
				active: {
					// #8854D0
					'& $line': {
						borderColor: '#20bf6b  !important',
					},
				},
				completed: {
					'& $line': {
						borderColor: '#20bf6b  !important',
					},
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
				fontSizeLarge: {
					fontSize: 120,
					['@media (max-width: 992px)']: {
						fontSize: 100
					},
					['@media (max-width: 768px)']: {
						fontSize: 50
					}
				}
			},
			MuiTableCell: {
				head: {
					fontSize: 12,
					color: '#3c4550',
					// borderBottom: 'solid 1px #d8dee2 !important',
					letterSpacing: '0.5px',
					fontWeight: 500,
					textTransform: 'uppercase'
				},
				body: {
					fontSize: 14,
					color: '#394D6F',
					letterSpacing: '0.5px',
					fontWeight: 300,
					paddingTop: '20px !important',
					paddingBottom: '20px !important'
				},
				root: {
					"&:last-child": {
						paddingRight: 0
					},
					border: 'unset !important'
				}
			},
			MuiFormControl: {
				root: {
					zIndex: 'auto'
				}
			},
			MuiFormControlLabel: {
				root: {
					marginBottom: 'unset !important'
				}
			},
			MuiDialogActions: {
				root: {
					padding: 7,
					marginBottom: 25,
					marginRight: 25,
					marginLeft: 25,
					['@media (max-width: 600px)']: {
						margin: 20
					}
				},
				spacing: {
					'& > :not(:first-child)': {
						marginLeft: 12,
					},
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
				},
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
				root: {
					fontSize: 10
				},
				error: {
					color: '#c45353 !important',
				}
			},
			MuiFormLabel: {
				root: {
					fontSize: 14,
					color: primaryText,
					"&$error": {
						"color": "#253238 !important"
					}
				},
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
				"root": {
					"&$error": {
						"&:after": {
							"borderBottomColor": "#c45353 !important"
						}
					}
				},
				underline: {
					'&:before': {
						borderBottom: '1px solid #e4eaec'
					},
					'&:after': {
						borderBottom: `1px solid #027fb3`
					},
					'&:hover:before': {
						borderBottom: '1px solid #e4eaec'
					},
					'&:hover:not($disabled):before': {
						borderBottom: `1px solid #e4eaec`,
						// Reset on touch devices, it doesn't add specificity
						'@media (hover: none)': {
							borderBottom: `1px solid #e4eaec`,
						},
					},
				},
				disabled: {
					'&:before': {
						borderBottom: '1px solid #e4eaec !important'
					},
				},
				input: {
					marginBottom: 8,
					fontWeight: 300,
					fontSize: 14,
					letterSpacing: '0.5px'
				}
			},
			MuiInputBase: {
				root: {
					fontWeight: 600
				},
				input: {
					padding: '1px 0px 5px',
					fontSize: 14,
					'&::-webkit-input-placeholder': placeholder,
					'&::-moz-placeholder': placeholder, // Firefox 19+
					'&:-ms-input-placeholder': placeholder, // IE 11

					'&::-ms-input-placeholder': placeholder, // Edge
				}
			},
			MuiOutlinedInput: {
				root: {
					backgroundColor: 'white',
					borderRadius: 4,
					minHeight: 44,
					'&:hover $notchedOutline': {
						borderColor: '#EDEEF1',
					},
					'&$focused $notchedOutline': {
						borderColor: '#EDEEF1',
						borderWidth: 1
					},
					'&$disabled $notchedOutline': {
						borderColor: '#EDEEF1',
					},
					'&$disabled': {
						backgroundColor: '#EDEEF1',
					},
				},
				multiline: {
					padding: '12.5px'
				},
				input: {
					padding: '12px 12px',
				},
				inputMultiline: {
					padding: '0px !important'
				},
				adornedEnd: {
					paddingRight: 0
				},
				adornedStart: {
					paddingLeft: 0
				},
				notchedOutline: {
					borderColor: '#EDEEF1',
				}
			},

			MuiAppBar: {
				root: {
					boxShadow: 'none'
				},
			},
			MuiFab: {
				secondary: {
					color: 'white'
				}
			},
			MuiIconButton: {
				root: {
					padding: 10,
					color: '#A5AEBD',
					"&$disabled": {
						"color": "#A5AEBD"
					}
				},
			},

			// button
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
					boxShadow: 'unset',
					color: 'white',
					'&:hover': {
						textDecoration: 'none',
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
					boxShadow: 'unset',
					color: 'white',
					'&:hover': {
						textDecoration: 'none',
						boxShadow: 'none',
						'@media (hover: none)': {
							backgroundColor: 'transparent'
						},
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
						},
					},
				},
				outlinedPrimary: {
					borderColor: primaryColor,
					color: primaryDarkColor,
					'&:hover': {
						textDecoration: 'none',
						color: 'white',
						borderColor: primaryColor,
						backgroundColor: primaryDarkColor,
						'@media (hover: none)': {
							backgroundColor: 'transparent',
							backgroundColor: primaryDarkColor,
						},
						'&$disabled': {
							backgroundColor: 'transparent'
						}
					}
				},
				outlinedSecondary: {
					borderColor: secondaryColor,
					color: secondaryColor,
					'&:hover': {
						textDecoration: 'none',
						color: '#ffffff',
						borderColor: secondaryDarkColor,
						backgroundColor: secondaryDarkColor,
						'@media (hover: none)': {
							backgroundColor: secondaryDarkColor,
							borderColor: secondaryDarkColor,
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
					opacity: '1',
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
					paddingBottom: '20px',
				},
				indicator: {
					backgroundColor: '#0078b0',
					opacity: '0.7',
					height: 3,
					borderRadius: 2,

				}
			},

			// sticky list
			MuiListSubheader: {
				root: {
					lineHeight: '30px',
				}
			},

			// modal
			MuiDialog: {
				paperFullScreen: {
					borderRadius: '.286rem',
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
							borderRight: `1px solid ${borderColor}`,
						},
					},
				},
			},

			// menu item
			MuiMenuItem: {
				root: {
					fontSize: 14
				}
			},

			// custom style
			...custom
		},
	})
};

export default theme;
