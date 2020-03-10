import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Typography from './Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';

export const styles = theme => ({
  paper: {
    minHeight: 100,
    maxWidth: 460
  }
});

const useStyles = makeStyles(styles);

function AlertDialog(props) {
  const {
    title,
    description,
    variant,
    open,
    onClose,
    onOk,
    textOk,
    textClose
  } = props;


  const theme = useTheme();
  const classes = useStyles(theme);


  let color = "primary";
  let icon = null;
  if (variant === "warning") {
    color = "info"
    icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9999 13C12.9999 13.552 12.5519 14 11.9999 14C11.4479 14 10.9999 13.552 10.9999 13V9C10.9999 8.448 11.4479 8 11.9999 8C12.5519 8 12.9999 8.448 12.9999 9V13ZM11.9999 17C11.4479 17 10.9999 16.552 10.9999 16C10.9999 15.448 11.4479 15 11.9999 15C12.5519 15 12.9999 15.448 12.9999 16C12.9999 16.552 12.5519 17 11.9999 17ZM22.5609 16.303L14.8889 3.584C14.2899 2.592 13.2099 2 11.9999 2C10.7899 2 9.70994 2.592 9.11094 3.584L1.43894 16.303C0.870936 17.246 0.853936 18.38 1.39394 19.336C1.97294 20.363 3.09794 21 4.32794 21H19.6719C20.9019 21 22.0269 20.363 22.6059 19.336C23.1459 18.38 23.1289 17.246 22.5609 16.303Z" fill="#394D6F" />
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="22" height="19">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9999 13C12.9999 13.552 12.5519 14 11.9999 14C11.4479 14 10.9999 13.552 10.9999 13V9C10.9999 8.448 11.4479 8 11.9999 8C12.5519 8 12.9999 8.448 12.9999 9V13ZM11.9999 17C11.4479 17 10.9999 16.552 10.9999 16C10.9999 15.448 11.4479 15 11.9999 15C12.5519 15 12.9999 15.448 12.9999 16C12.9999 16.552 12.5519 17 11.9999 17ZM22.5609 16.303L14.8889 3.584C14.2899 2.592 13.2099 2 11.9999 2C10.7899 2 9.70994 2.592 9.11094 3.584L1.43894 16.303C0.870936 17.246 0.853936 18.38 1.39394 19.336C1.97294 20.363 3.09794 21 4.32794 21H19.6719C20.9019 21 22.0269 20.363 22.6059 19.336C23.1459 18.38 23.1289 17.246 22.5609 16.303Z" fill="white" />
            </mask>
            <g mask="url(#mask0)">
              <rect width="24" height="24" fill="#F7B731" />
            </g>
          </svg>
  }

  return (
    <div>
      <Dialog
        classes={{
          paper: classes.paper
        }}
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle disableTypography id="alert-dialog-title">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {icon && <span style={{ marginRight: 12 }}>{icon}</span>}<Typography scale="700" weight="bold">{title}</Typography>
          </div>
        </DialogTitle>
        <DialogContent>
          <Typography scale="400">
            {description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            color={color}
            variant="outlined"
          >
            {textClose}
          </Button>
          <Button
            onClick={onOk}
            color={color}
            autoFocus
            variant="contained"
          >
            {textOk}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AlertDialog.propTypes = {
  /**
   * The title of the modal.
   */
  title: PropTypes.string,
  /**
   * The desription of the modal.
   */
  desription: PropTypes.string,
  /**
   * The textOk of the modal.
   */
  textOk: PropTypes.string,
  /**
   * The textClose of the modal.
   */
  textClose: PropTypes.string,
  /**
   * The onOk of the modal.
   */
  onOk: PropTypes.string,
  /**
   * The onClose of the modal.
   */
  onClose: PropTypes.string,
  /**
   * If `true`, the modal will be open.
   */
  open: PropTypes.bool,
}

export default AlertDialog;