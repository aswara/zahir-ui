import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Typography from './Typography';

import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';

export const styles = theme => ({
  paper: {
    minHeight: 100,
    maxWidth: 460
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20
  }
});

const useStyles = makeStyles(styles);

function AlertDialog(props) {
  const {
    color,
    content,
    title,
    description,
    variant,
    open,
    onClose,
    onOk,
    textOk,
    textClose,
    hideCloseIcon
  } = props;


  const theme = useTheme();
  const classes = useStyles(theme);


  let buttonColor = color;
  let buttonCloseVariant = 'outlined';
  let icon = null;
  let isShowCloseIcon = !hideCloseIcon;

  switch (variant) {
    case "warning":
      isShowCloseIcon = false;
      buttonColor = "warning"
      icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9999 13C12.9999 13.552 12.5519 14 11.9999 14C11.4479 14 10.9999 13.552 10.9999 13V9C10.9999 8.448 11.4479 8 11.9999 8C12.5519 8 12.9999 8.448 12.9999 9V13ZM11.9999 17C11.4479 17 10.9999 16.552 10.9999 16C10.9999 15.448 11.4479 15 11.9999 15C12.5519 15 12.9999 15.448 12.9999 16C12.9999 16.552 12.5519 17 11.9999 17ZM22.5609 16.303L14.8889 3.584C14.2899 2.592 13.2099 2 11.9999 2C10.7899 2 9.70994 2.592 9.11094 3.584L1.43894 16.303C0.870936 17.246 0.853936 18.38 1.39394 19.336C1.97294 20.363 3.09794 21 4.32794 21H19.6719C20.9019 21 22.0269 20.363 22.6059 19.336C23.1459 18.38 23.1289 17.246 22.5609 16.303Z" fill="#394D6F" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="22" height="19">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9999 13C12.9999 13.552 12.5519 14 11.9999 14C11.4479 14 10.9999 13.552 10.9999 13V9C10.9999 8.448 11.4479 8 11.9999 8C12.5519 8 12.9999 8.448 12.9999 9V13ZM11.9999 17C11.4479 17 10.9999 16.552 10.9999 16C10.9999 15.448 11.4479 15 11.9999 15C12.5519 15 12.9999 15.448 12.9999 16C12.9999 16.552 12.5519 17 11.9999 17ZM22.5609 16.303L14.8889 3.584C14.2899 2.592 13.2099 2 11.9999 2C10.7899 2 9.70994 2.592 9.11094 3.584L1.43894 16.303C0.870936 17.246 0.853936 18.38 1.39394 19.336C1.97294 20.363 3.09794 21 4.32794 21H19.6719C20.9019 21 22.0269 20.363 22.6059 19.336C23.1459 18.38 23.1289 17.246 22.5609 16.303Z" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <rect width="24" height="24" fill="#F7B731" />
        </g>
      </svg>
      break;

    case "delete":
      isShowCloseIcon = false;
      buttonColor = "error"
      icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19ZM8.46 11.88L9.87 10.47L12 12.59L14.12 10.47L15.53 11.88L13.41 14L15.53 16.12L14.12 17.53L12 15.41L9.88 17.53L8.47 16.12L10.59 14L8.46 11.88ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="#EB3B5A" />
      </svg>
      break;

    case "info":
      isShowCloseIcon = false;
      icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9ZM13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z" fill="#394D6F" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9ZM13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <rect width="24" height="24" fill="#20BF6B" />
        </g>
      </svg>
      break;

    case "basic":
      buttonCloseVariant = 'text';
      break;

    default:
      break;
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
            {icon && <div style={{ marginRight: 12, display: 'flex', alignItems: 'center' }}>{icon}</div>}<Typography scale="700" weight="bold">{title}</Typography>
          </div>
        { isShowCloseIcon &&
          <IconButton
            size="small"
            className={classes.closeButton}
            onClick={onClose}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM16.0608 15L15 16.0608L12 13.0608L9 16.0608L7.93922 15L10.9392 12L7.93922 9L9 7.93922L12 10.9392L15 7.93922L16.0608 9L13.0608 12L16.0608 15Z" fill="#D1D8E0"/>
            </svg>
          </IconButton>
        }
        </DialogTitle>
        <DialogContent>
          {description ?
            <Typography scale="400">
              {description}
            </Typography>
            : content}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            color={buttonColor}
            variant={buttonCloseVariant}
          >
            {textClose}
          </Button>
          <Button
            onClick={onOk}
            color={buttonColor}
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
   * Dialog children, usually the included sub-components.
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
   * Callback fired when the ok is clicked.
   */
  onOk: PropTypes.func,
  /**
   * Callback fired when the close is clicked.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, the modal will be open.
   */
  open: PropTypes.bool,
  /**
   * If `true`, close icon will be hide.
   */
  hideCloseIcon: PropTypes.bool,
  /**
  * The variant of the component.
  */
  variant: PropTypes.oneOf(['default', 'basic', 'warning', 'info', 'delete']),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'warning', 'error']),
}

AlertDialog.defaultProps = {
  textOk: 'Ok',
  textClose: 'Close',
  color: 'primary',
  variant: 'default',
  hideCloseIcon: false
}

export default AlertDialog;