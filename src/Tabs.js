import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 30,
      width: '100%',
      backgroundColor: '#0078B0',
      height: 3,
      borderRadius: 2
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

export default StyledTabs;