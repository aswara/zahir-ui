import React, { useState } from "react";
import {
  AlertDialog,
  Grid,
  Button,
  TextField
} from 'zahir-ui';


export default {
  component: AlertDialog,
  title: 'Components/AlertDialog',
};

export const defaultAlert = () => {
  const [open, setOpen] = useState(false);

  return (
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
      />
    </Grid>
  );
}


export const customAlert = () => {
  const [open, setOpen] = useState(false);

  const icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9ZM13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z" fill="#394D6F" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9ZM13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z" fill="white" />
    </mask>
    <g mask="url(#mask0)">
      <rect width="24" height="24" fill="#20BF6B" />
    </g>
  </svg>


  const content = <div>
    <TextField
      placeholder="Reason"
    />
  </div>

  return (
    <Grid container spacing={2}>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Open alert dialog
    </Button>
      <AlertDialog
        open={open}
        onClose={() => setOpen(false)}
        onOk={() => alert('Ok')}
        title="Reason"
        icon={icon}
        content={content}
      />
    </Grid>
  );
}

export const warningAlert = () => {
  const [open, setOpen] = useState(false);

  return (
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

  return (
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

  return (
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
