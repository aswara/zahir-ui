import React from 'react';
import PropTypes from 'prop-types';
import Select, { components, getStyles } from 'react-select';
import Creatable from 'react-select/lib/Creatable';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

import Typography from '../Typography';
import colors from '../colors';
import global from '../global';


import { makeStyles, useTheme } from '@material-ui/core/styles';

export const styles = theme => ({
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
  iconDropDown: {
    position: 'absolute',
    right: 8,
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
});

const customStyles = {
  container: (base) => ({
    ...base,
    fontFamily: global.fontFamily
  }),
  control: (base) => ({
    ...base,
    borderRadius: 4,
    marginBottom: 0,
    marginTop: 0,
    minHeight: 20,
    height: 44,
    minWidth: 130,
    width: '100%',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
    fontSize: 14,
    marginLeft: 8
  }),
  placeholder: (base) => ({
    ...base,
    color: colors.N40
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: 'transparent !important'
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,
    height: 'auto',
    maxHeight: 200,
    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)'
  }),
  menuList: (base) => ({
    ...base,
    height: 'auto',
    maxHeight: 150
  }),
  option: (base) => ({
    ...base,
    fontSize: 14,
    padding: 12,
    color: '#394D6F',
    ':active': {
      ...base[':active'],
      color: '#394D6F'
    },
  }),
  singleValue: (base) => ({
    ...base,
    paddingRight: 15,
    textTransform: 'capitalize'
  }),
  input: (base) => ({
    ...base,
    maxWidth: 400,
    color: colors.N70,
    fontSize: 14,
    overflow: 'hidden'
  }),
  multiValue: (base) => ({
    ...base,
    borderRadius: 4
  }),
  multiValueLabel: (base, { data }) => {
    const isInput = data.type == 'input';
    return({
      ...base,
      padding: isInput ? 0 : '4px 0 4px 8px',
      paddingLeft: isInput ? 0 : 6,
      fontSize: 14,
      color: colors.N70,
      backgroundColor: isInput ? 'white' : colors.N20
    })
  },
  multiValueRemove: (base, { data }) => {
    const isInput = data.type == 'input';
    return({
      ...base,
      display: isInput ? 'none' : 'flex',
      color: colors.N40,
      backgroundColor: isInput ? 'white' : colors.N20,
      ':hover': {
        backgroundColor: colors.N20,
        color: colors.N70,
      },
    })
  },
  clearIndicator: (base) => ({
    ...base,
    padding: 0
  })
}

const useStyles = makeStyles(styles);

// custom components react-select
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDropDownIcon style={{ color: '#A5AEBD' }} />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = props => {
  const {
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props)}
    >
      <IconButton
        size="small"
      >
        <CloseIcon style={{ height: 20, width: 20 }} />
      </IconButton>
    </div>
  );
};

const SelectComponent = (props) => {
  const {
    error,
    errorText,
    label,
    styles,
    fullWidth,
    onClickLookup,
    onClickEdit,
    isShowLookup,
    isShowEdit,
    creatable,
    ...others
  } = props;

  const theme = useTheme();
  const classes = useStyles(theme);

  const borderColor = error ? '#EB3B5A' : '#EDEEF1';

  const components = {
    DropdownIndicator,
    LoadingIndicator: null,
    ClearIndicator
  }

  return (
    <FormControl
      fullWidth={fullWidth}
    >
      {label && (
        <Typography
          scale="300"
          className={classes.label}
        >
          {label}
        </Typography>
      )}
      <div className={classes.container}>
      { creatable ?
        <Creatable
          {...others}
          styles={customStyles}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: borderColor,
              neutral30: borderColor,
              neutral20: borderColor,
              neutral10: borderColor
            }
          })}
          components={components}
        />
        :
        <Select
          {...others}
          styles={customStyles}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: borderColor,
              neutral30: borderColor,
              neutral20: borderColor,
              neutral10: borderColor
            }
          })}
          components={components}
        />
      }
      {isShowLookup &&
        <IconButton
          className={isShowEdit ? classes.iconButtonLeft : classes.iconButtonRight}
          onClick={onClickLookup}
          size="small"
        >
          <SearchIcon className={classes.icon} />
        </IconButton>
      }
      {isShowEdit &&
        <IconButton
          className={classes.iconButtonRight}
          onClick={onClickEdit}
          size="small"
        >
          <EditIcon className={classes.icon} />
        </IconButton>
      }
      </div>
      { error &&
        <FormHelperText className={classes.errorText}>
          {errorText}
        </FormHelperText>

      }
    </FormControl>
  )
}

SelectComponent.propTypes = {
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: PropTypes.bool,
    /**
   * If `true`, the field will be full.
   */
  fullWidth: PropTypes.bool,
  /**
 * The error text content.
 */
  errorText: PropTypes.node,
  /**
 * The label content.
 */
  label: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * See [OutlinedLabel#label](/api/outlined-input/#props)
   */
  label: PropTypes.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes.bool,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes.func,
  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: PropTypes.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: PropTypes.func,
  /**
   * The input value. Providing an empty string will select no options.
   * This prop is required when the `native` prop is `false` (default).
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: PropTypes.any,
  /**
   * If `true`, will be show lookup button.
   */
  isShowLookup: PropTypes.bool,
  /**
   * Callback fired when click button lookup.
   */
  onClickLookup: PropTypes.func,
  /**
   * If `true`, will be show edit button.
   */
  isShowLookup: PropTypes.bool,
  /**
   * Callback fired when click button edit.
   */
  onClickEdit: PropTypes.func,
  /**
   * If `true`, the select will be creatable.
   */
  creatable: PropTypes.bool,
};

SelectComponent.muiName = 'Select';

export default SelectComponent;