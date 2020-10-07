import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from './Typography';

import MuiListItem from '@material-ui/core/ListItem';

export const styles = theme => ({
  root: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 12,
    paddingLeft: 12,
    cursor: 'pointer'
  },
  rootSelect: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    cursor: 'pointer'
  }
});

const useStyles = makeStyles(styles);

const ListItem = (props) => {
  const {
    selected = false,
    isDefault = false,
    isSelect = false,

    title,
    primary,
    secondary,
    description,

    rightTitle,
    rightPrimary,
    rightSecondary,
    rightDescription,

    titleStyle = {},
    primaryStyle = {},
    secondaryStyle = {},
    descriptionStyle = {},

    rightTitleStyle = {},
    rightPrimaryStyle = {},
    rightSecondaryStyle = {},
    rightDescriptionStyle = {},

    ...other
  } = props;


  const theme = useTheme();
  const classes = useStyles(theme);
  
  const icon = <CheckCircleIcon color="secondary" style={{ width: 20, height: 20, marginLeft: 12 }} />
  const isBottomIconSelected = title && primary && rightTitle && !rightPrimary
  const isTopIconSelected = title && primary && rightTitle && rightPrimary

  let content = <div style={{ minHeight: 20, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div>
        {title && <Typography style={{ marginBottom: 4, ...titleStyle }} scale="200" color="textPrimary">{title}</Typography>}
        {primary && <Typography style={primaryStyle} variant="body2" color="textPrimary">{primary}</Typography>}
        {secondary && <Typography style={secondaryStyle} variant="body2" color="textSecondary">{secondary}</Typography>}
        {description && <Typography style={descriptionStyle} scale="200" color="textPrimary">{description}</Typography>}
      </div>
      <div style={{ display: 'flex', alignItems: isTopIconSelected ? 'start' : 'center' }} item>
        <div>
          {rightTitle && <Typography align="right" style={{ marginBottom: 4, ...rightTitleStyle }} scale="200" color="textPrimary">{rightTitle}</Typography>}
          {rightPrimary && <Typography align="right" style={rightPrimaryStyle} variant="body2" color="textPrimary">{rightPrimary}</Typography>}
          {rightSecondary && <Typography align="right" style={rightSecondaryStyle} variant="body2" color="textSecondary">{rightSecondary}</Typography>}
          {rightDescription && <Typography align="right" style={rightDescriptionStyle} scale="200" color="textPrimary">{rightDescription}</Typography>}
          {isBottomIconSelected ? selected ? icon : <div style={{ height: 20 }}></div> : null}
        </div>
        <div>
          {isBottomIconSelected ? null : selected ? icon : null}
          {isDefault && <Typography style={{ color: '#3da879', fontSize: 12, }}>Default</Typography>}
        </div>
      </div>
    </div>

  return (
    <MuiListItem
      disableGutters
      className={isSelect ? classes.rootSelect : classes.root}
      {...other}
    >
      {content}
    </MuiListItem>
  );
}

ListItem.propTypes = {
  /**
   * Defines the `align-items` style property.
   */
  alignItems: PropTypes.oneOf(['flex-start', 'center']),
  /**
   * If `true`, the list item will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus: PropTypes.bool,
  /**
   * If `true`, the list item will be a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   */
  button: PropTypes.bool,
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component: PropTypes.elementType,
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   */
  ContainerComponent: PropTypes.elementType,
  /**
   * Props applied to the container component if used.
   */
  ContainerProps: PropTypes.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: PropTypes.bool,
  /**
   * If `true`, the list item will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: PropTypes.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * Use to apply selected styling.
   */
  selected: PropTypes.bool,
  /**
   * The title of the ListItem.
   */
  title: PropTypes.string,
  /**
   * The primary of the ListItem.
   */
  primary: PropTypes.string,
  /**
   * The secondary of the ListItem.
   */
  secondary: PropTypes.string,
  /**
   * The description of the ListItem.
   */
  description: PropTypes.string,
    /**
   * The right hand title of the ListItem.
   */
  rightTitle: PropTypes.string,
  /**
   * The right hand primary  of the ListItem.
   */
  rightPrimary: PropTypes.string,
  /**
   * The right hand secondary of the ListItem.
   */
  rightSecondary: PropTypes.string,
  /**
   * The right hand description of the ListItem.
   */
  rightDescription: PropTypes.string,
  /**
   * The style title of the ListItem.
   */
  titleStyle: PropTypes.object,
  /**
   * The style primary of the ListItem.
   */
  primaryStyle: PropTypes.object,
  /**
   * The style secondary of the ListItem.
   */
  secondaryStyle: PropTypes.object,
  /**
   * The style description of the ListItem.
   */
  descriptionStyle: PropTypes.object,
    /**
   * The style right hand title of the ListItem.
   */
  rightTitleStyle: PropTypes.object,
  /**
   * The style right hand primary  of the ListItem.
   */
  rightPrimaryStyle: PropTypes.object,
  /**
   * The style right hand secondary of the ListItem.
   */
  rightSecondaryStyle: PropTypes.object,
  /**
   * The style right hand description of the ListItem.
   */
  rightDescriptionStyle: PropTypes.object,
  /**
   * If `true`, will be show label Default.
   */
  isDefault: PropTypes.bool,
  /**
   * If `true`, for label component Select padding will be 0.
   */
  isSelect: PropTypes.bool,
};

export default ListItem;