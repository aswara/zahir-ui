import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MuiTypography from '@material-ui/core/Typography';
import colors from './colors';

const buildScale = (size, lineHeight) => ({
  fontSize: size,
  lineHeight: lineHeight + 'px'
});

const buildWeight = (weight) => ({
  fontWeight: weight
});

export const styles = theme => ({
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
  "black": buildWeight(900),
});

const useStyles = makeStyles(styles);

const Typography = (props) => {
  const {
    style = {},
    scale = 'initial',
    weight,
    children,
    color,
    variant,
    className,
    ...other
  } = props;

  const theme = useTheme();
  const classes = useStyles(theme);
  
  const paletteColor = colors[color];

  return (
    <MuiTypography
      style={{ ...style, color: paletteColor }}
      className={clsx(
        {
          [classes[scale]]: scale !== 'initial',
          [classes[weight]]: weight !== null,
          [classes.defaultColor]: (color == null && !paletteColor)
        },
        className
      )}
      variant={variant}
      color={color}
      {...other}
    >
      {children}
    </MuiTypography>
  );
};

Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
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
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * Overrides the behavior of the `variantMapping` prop.
   */
  component: PropTypes.elementType,
  /**
   * Controls the display type
   */
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit',
  ]),
  /**
   * The component maps the variant prop to a range of different DOM element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  variantMapping: PropTypes.object,
  /**
   * Applies the theme typography styles.
   */
  scale: PropTypes.oneOf([
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]),
  /**
   * Applies the theme typography styles.
   */
  weight: PropTypes.oneOf([
    "regular",
    "semi-bold",
    "bold",
    "extra-bold",
    "black"
  ])
};

export default Typography;