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

export const warning = () => {
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
      textOk="Ok"
      textClose="Close"
      title="Warning"
      description="If you leave this page, your data may not be saved. Are you sure want to leave this page?"
      variant="warning"
    />
  </Grid>
  );
}
