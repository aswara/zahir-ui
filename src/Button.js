import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import capitalize from './utils/capitalize';

import MuiButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import colors from './colors';

const buildColor = (backgroundColor, color, borderColor) => ({
  backgroundColor,
  borderColor,
  color,
  '&:hover': {
    backgroundColor,
    color,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent',
    },
    '&$disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  }
})



export const styles = theme => ({
  /* Styles applied to the root element if `color="warning"`. */
  warningContained: {
    backgroundColor: '#EB3B5A',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#f11f44',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: '#EB3B5A',
      },
    },
    '&$disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  warningText: {
    backgroundColor: 'transparent',
    color: '#EB3B5A',
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
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
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
  },
  /* Styles applied to the root element if `color="info"`. */
  infoContained: {
    backgroundColor: colors.Y40,
    color: '#fff',
    '&:hover': {
      backgroundColor: colors.Y50,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: colors.Y40,
      },
    },
    '&$disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  infoText: {
    backgroundColor: 'transparent',
    color: colors.Y40,
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    }
  },
  infoOutlined: {
    backgroundColor: 'transparent',
    borderColor: colors.Y40,
    color: colors.Y40,
    '&:hover': {
      backgroundColor: colors.Y50,
      color: 'white',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
  },
  iconLarge: {
    height: 44,
    width: 44,
    minWidth: 44,
    '& svg': {
      height: 22,
      width: 22,
    }
  },
  iconMedium: {
    height: 38,
    width: 38,
    minWidth: 38,
    '& svg': {
      height: 20,
      width: 20,
    }
  }
});

const useStyles = makeStyles(styles);

const Button = (props) => {
  const {
    children,
    className,
    color,
    title,
    variant,
    icon,
    size,
    loading,
    upperCase,
    ...other
  } = props;

  const theme = useTheme();
  const classes = useStyles(theme);
  const defaultColor = ['default', 'inherit', 'primary', 'secondary'];
  let isDefaultColor = false;
  if (defaultColor.includes(color)) {
    isDefaultColor = true;
  }

  let content = children || title;
  if(upperCase && title) {
    content = title.toUpperCase(); 
  }

  return (
    <MuiButton
      className={clsx(
        {
          [classes[color + capitalize(variant)]]: !isDefaultColor,
          [classes['icon' + capitalize(size)]]: icon
        },
        className,
      )}
      color={isDefaultColor ? color : ''}
      variant={variant}
      size={size}
      {...other}
    >
      { loading ? 
      <CircularProgress size={20} color="#fff" />
      : content }
    </MuiButton>
  );
};

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'warning', 'info']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, no elevation is used.
   */
  disableElevation: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: PropTypes.bool,
  /**
   * Element placed after the children.
   */
  endIcon: PropTypes.node,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Element placed before the children.
   */
  startIcon: PropTypes.node,
  /**
   * @ignore
   */
  type: PropTypes.string,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  /**
   * The content of the button.
   */
  title: PropTypes.string,
  /**
   * If `true`, the button will be icon button.
   */
  icon: PropTypes.bool,
  /**
   * If `true`, the button will show loading.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the button will be show loader.
   */
  loading: PropTypes.bool,
  /**
   * If `true`, the title button will be upper case 
   */
  upperCase: PropTypes.bool,
};

export default Button;