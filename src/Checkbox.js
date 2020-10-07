import React from 'react';
import { Checkbox } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: '#EDEEF1'
  }
})

export default function ZuiCheckbox (props) {
  const classes = useStyles();

  return(
    <Checkbox
      classes={{
        root: classes.root
      }}
      {...props}
    />
  );
}