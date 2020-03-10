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
    textClose,
    icon,
    content
  } = props;


  const theme = useTheme();
  const classes = useStyles(theme);


  let color = "primary";
  let defaultIcon = null;

  switch (variant) {
    case 'warning':
      color = 'warning'
      defaultIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9999 13C12.9999 13.552 12.5519 14 11.9999 14C11.4479 14 10.9999 13.552 10.9999 13V9C10.9999 8.448 11.4479 8 11.9999 8C12.5519 8 12.9999 8.448 12.9999 9V13ZM11.9999 17C11.4479 17 10.9999 16.552 10.9999 16C10.9999 15.448 11.4479 15 11.9999 15C12.5519 15 12.9999 15.448 12.9999 16C12.9999 16.552 12.5519 17 11.9999 17ZM22.5609 16.303L14.8889 3.584C14.2899 2.592 13.2099 2 11.9999 2C10.7899 2 9.70994 2.592 9.11094 3.584L1.43894 16.303C0.870936 17.246 0.853936 18.38 1.39394 19.336C1.97294 20.363 3.09794 21 4.32794 21H19.6719C20.9019 21 22.0269 20.363 22.6059 19.336C23.1459 18.38 23.1289 17.246 22.5609 16.303Z" fill="#394D6F" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="22" height="19">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9999 13C12.9999 13.552 12.5519 14 11.9999 14C11.4479 14 10.9999 13.552 10.9999 13V9C10.9999 8.448 11.4479 8 11.9999 8C12.5519 8 12.9999 8.448 12.9999 9V13ZM11.9999 17C11.4479 17 10.9999 16.552 10.9999 16C10.9999 15.448 11.4479 15 11.9999 15C12.5519 15 12.9999 15.448 12.9999 16C12.9999 16.552 12.5519 17 11.9999 17ZM22.5609 16.303L14.8889 3.584C14.2899 2.592 13.2099 2 11.9999 2C10.7899 2 9.70994 2.592 9.11094 3.584L1.43894 16.303C0.870936 17.246 0.853936 18.38 1.39394 19.336C1.97294 20.363 3.09794 21 4.32794 21H19.6719C20.9019 21 22.0269 20.363 22.6059 19.336C23.1459 18.38 23.1289 17.246 22.5609 16.303Z" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <rect width="24" height="24" fill="#F7B731" />
        </g>
      </svg>
      break;

    case 'delete':
      color = 'error'
      defaultIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19ZM8.46 11.88L9.87 10.47L12 12.59L14.12 10.47L15.53 11.88L13.41 14L15.53 16.12L14.12 17.53L12 15.41L9.88 17.53L8.47 16.12L10.59 14L8.46 11.88ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="#EB3B5A" />
      </svg>

      break;

    case 'info':
      defaultIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9ZM13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z" fill="#394D6F" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9ZM13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <rect width="24" height="24" fill="#20BF6B" />
        </g>
      </svg>


      break;

    default:
      break;
  }

  if (icon) {
    defaultIcon = icon;
  }

  return (
    <div>
      <Dialog
        classes={{
          paper: classes.paper
        }}
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle disableTypography id="alert-dialog-title">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {defaultIcon && <span style={{ marginRight: 12 }}>{defaultIcon}</span>}<Typography scale="700" weight="bold">{title}</Typography>
          </div>
        </DialogTitle>
        <DialogContent>
        { description &&
          <Typography scale="400">
            {description}
          </Typography> }
        { content && 
        content }
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
   * The icon of the modal.
   */
  icon: PropTypes.node,
  /**
   * The content of the modal.
   */
  content: PropTypes.node,
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

AlertDialog.defaultProps = {
  textOk: 'Ok',
  textClose: 'Close'
}

export default AlertDialog;