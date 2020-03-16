import React from 'react';
import PropTypes from 'prop-types';

import MuiTooltip from '@material-ui/core/Tooltip';

function Tooltip (props) {
  return (
    <MuiTooltip
      {...props}
    />
  )
}

Tooltip.propTypes = {
  /**
   * If `true`, the tooltip is shown.
   */
  open: PropTypes.bool,
  /**
   * Tooltip placement.
   */
  placement: PropTypes.oneOf([
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top',
  ]),
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: PropTypes.node.isRequired,
};

export default Tooltip;