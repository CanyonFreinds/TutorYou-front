/* ref: packages/redkiwi-app/src/components/Toast.js */
import React from 'react';
import {
  ToastContainer,
  toast,
} from 'react-toastify';
import { makeStyles } from '@mui/styles';

export const TOAST_FADE_IN_DURATION_IN_MS = 1000;
export const TOAST_DEFAULT_DURATION_IN_MS = 3000;

const useStyles = makeStyles({
  toast: {
    backgroundColor: '#ff6f61',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: '1px',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  body: {
    fontSize: '18px',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'white',
  },
});

const Toast = (): JSX.Element => {
  const classes = useStyles();
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={TOAST_DEFAULT_DURATION_IN_MS}
      toastClassName={classes.toast}
      bodyClassName={classes.body}
      hideProgressBar
      closeButton={false}
    />
  );
};

export const showToast = (text: string): React.ReactText => toast(text);

export default Toast;
