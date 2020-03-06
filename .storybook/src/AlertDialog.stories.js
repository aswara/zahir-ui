import React, { useState } from "react";
import {
  AlertDialog,
  Grid,
  Button
} from 'zahir-ui';


export default {
  component: AlertDialog,
  title: 'Components/AlertDialog',
};

export const defaultAlert = () => {
  const [open, setOpen] = useState(false);

  return(
  <Grid container spacing={2}>
    <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
      Open alert dialog
    </Button>
    <AlertDialog
      open={open}
      onClose={() => setOpen(false)}
      onOk={() => alert('Ok')}
      title="Default"
      description="If you leave this page, your data may not be saved. Are you sure want to leave this page?"
      variant="default"
    />
  </Grid>
  );
}

export const basicAlert = () => {
  const [open, setOpen] = useState(false);

  return(
  <Grid container spacing={2}>
    <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
      Open alert dialog
    </Button>
    <AlertDialog
      open={open}
      onClose={() => setOpen(false)}
      onOk={() => alert('Ok')}
      title="Basic"
      description="If you leave this page, your data may not be saved. Are you sure want to leave this page?"
      variant="basic"
    />
  </Grid>
  );
}

export const warningAlert = () => {
  const [open, setOpen] = useState(false);

  return(
  <Grid container spacing={2}>
    <Button variant="outlined" color="warning" onClick={() => setOpen(true)}>
      Open alert dialog
    </Button>
    <AlertDialog
      open={open}
      onClose={() => setOpen(false)}
      onOk={() => alert('Ok')}
      title="Warning"
      description="If you leave this page, your data may not be saved. Are you sure want to leave this page?"
      variant="warning"
    />
  </Grid>
  );
}


export const deleteAlert = () => {
  const [open, setOpen] = useState(false);

  return(
  <Grid container spacing={2}>
    <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
      Open alert dialog
    </Button>
    <AlertDialog
      open={open}
      onClose={() => setOpen(false)}
      onOk={() => alert('Ok')}
      title="Delete"
      description="Are you sure want to delete Jakarta Selatan from your list data?"
      variant="delete"
    />
  </Grid>
  );
}

export const infoAlert = () => {
  const [open, setOpen] = useState(false);

  return(
  <Grid container spacing={2}>
    <Button variant="outlined" color="secondary" onClick={() => setOpen(true)}>
      Open alert dialog
    </Button>
    <AlertDialog
      open={open}
      onClose={() => setOpen(false)}
      onOk={() => alert('Ok')}
      title="Info"
      description="Please login again, your request could not be processed because the user session has been destroyed."
      variant="info"
      color="secondary"
    />
  </Grid>
  );
}
