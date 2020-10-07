import React from "react";
import {
  Grid,
  TextField
} from 'zahir-ui';
import colors from "../../src/colors";


export default {
  component: TextField,
  title: 'Components/TextField',
};



export const basic = () => (
  <Grid container spacing={2}>
      <Grid style={{ padding: 12 }}>
        <TextField  />
    </Grid>
  </Grid>
);

