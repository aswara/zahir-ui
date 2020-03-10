import React, { useState } from "react";
import {
  TextField,
  Grid
} from 'zahir-ui';


export default {
  component: TextField,
  title: 'Components/TextField',
};

export const simple = () => {
  const [ value, setValue ] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <TextField
      value={value}
      onChange={handleChange}
      placeholder="Email"
    />
  )
}


export const label = () => {
  const [ value, setValue ] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <TextField
      label="Email"
      value={value}
      onChange={handleChange}
      placeholder="e.g. a.aswara@gmail.com"
    />
  )
}

export const password = () => {
  const [ value, setValue ] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <TextField
      label="Password"
      value={value}
      onChange={handleChange}
      placeholder=""
      type="password"
    />
  )
}

export const error = () => {
  const [ value, setValue ] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <Grid container spacing="4">
      <Grid item xs="12">
        <TextField
          label="Email"
          value={value}
          onChange={handleChange}
          placeholder="e.g. a.aswara@gmail.com"
          error="Required"
          touched={true}
        />
      </Grid>
    </Grid>
  )
}

export const disabled = () => {
  const [ value, setValue ] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <Grid container spacing="4">
      <Grid item xs="12">
        <TextField
          label="Email"
          value={value}
          onChange={handleChange}
          placeholder="e.g. a.aswara@gmail.com"
          disabled={true}
        />
      </Grid>
    </Grid>
  )
}

export const forDetail = () => {
  const [ value, setValue ] = useState('a.aswara@gmail.com');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <Grid container spacing="4">
      <Grid item xs="12">
        <TextField
          label="Email"
          value={value}
          forDetail={true}
        />
      </Grid>
    </Grid>
  )
}