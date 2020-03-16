import React from "react";
import {
  colors,
  Grid,
  Typography
} from 'zahir-ui';


export default {
  component: colors,
  title: 'Components',
};



export const color = () => (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography scale="700" weight="bold">
          Usage
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography scale="400" weight="bold">
          {`import { colors } from 'zahir-ui'`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography scale="400">
          {`<div style={{ background: colors.N10 }}></div>`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography scale="700" weight="bold">
          Palette
        </Typography>
      </Grid>
      { Object.keys(colors).map(item => (
        <Grid item md={2}>
          <div
            style={{
              backgroundColor: colors[item],
              padding: 10,
              fontSize: 20
            }}
          >
            {item}
          </div>
        </Grid>
      ))}
    </Grid>
);