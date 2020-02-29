import React from "react";
import {
  SplitButton,
  Grid
} from 'zahir-ui';


export default {
  component: SplitButton,
  title: 'Components/SplitButton',
};

const props = {
  size: ['small', 'medium', 'large'],
  variant: ['text', 'outlined', 'contained'],
  color: ['default', 'inherit', 'primary', 'secondary', 'warning', 'info']
};

const options = [
  { title: 'Save' },
  { title: 'Save Draft' },
];

export const variant = () => (
  <Grid container spacing={2}>
    {
      props.variant.map(item => (
        <Grid item>
          <SplitButton
            color="secondary"
            variant={item}
            title={item}
            options={options}
          />
        </Grid>
      ))
    }
  </Grid>
);

export const color = () => (
  <Grid container spacing={2}>
    {
      props.color.map(item => (
        <Grid item>
          <SplitButton
            variant="contained"
            color={item}
            title={item}
            options={options}
          />
        </Grid>
      ))
    }
  </Grid>
);

export const size = () => (
  <Grid container spacing={2}>
    {
      props.size.map(item => (
        <Grid item>
          <SplitButton 
            color="secondary"
            variant="contained"
            size={item}
            title={item}
            options={options}
          />
        </Grid>
      ))
    }
  </Grid>
);

