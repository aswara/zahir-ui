import React from "react";
import {
  Button,
  Grid
} from 'zahir-ui';


export default {
  component: Button,
  title: 'Components/Button',
};

const props = {
  size: ['small', 'medium', 'large'],
  variant: ['text', 'outlined', 'contained'],
  color: ['default', 'inherit', 'primary', 'secondary', 'warning', 'error']
}

export const variant = () => (
  <Grid container spacing={2}>
    {
      props.variant.map(item => (
        <Grid item>
          <Button color="secondary" variant={item}>
            {item}
          </Button>
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
          <Button variant="contained" color={item}>
            {item}
          </Button>
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
          <Button color="secondary" variant="outlined" size={item}>
            {item}
          </Button>
        </Grid>
      ))
    }
  </Grid>
);

