import React from "react";
import {
  Typography,
  Grid
} from 'zahir-ui';


export default {
  component: Typography,
  title: 'Components/Typography',
};

const props = {
  scale: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ],
  weight: [
    'regular',
    'semi-bold',
    'bold',
    'extra-bold',
    'black'
  ],
  color: [
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
  ]
}

export const scale = () => (
  <Grid container spacing={2}>
    {
      props.scale.map(item => (
        <Grid item>
          <Typography color="textPrimary" scale={item}>
            {item}
          </Typography>
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
          <Typography color={item}>
            {item}
          </Typography>
        </Grid>
      ))
    }
  </Grid>
);

export const weight = () => (
  <Grid container spacing={2}>
    {
      props.weight.map(item => (
        <Grid item>
          <Typography color="textPrimary" weight={item}>
            {item}
          </Typography>
        </Grid>
      ))
    }
  </Grid>
);

