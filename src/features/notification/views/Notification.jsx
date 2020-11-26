import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const Notification = (props) => {
  const { notification, hideNotification } = props;
  const { message, variant, showNotification } = notification;
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={showNotification}
      autoHideDuration={5000}
      onClose={hideNotification}
    >
      <Alert severity={variant}>{message}</Alert>
    </Snackbar>
  );
};

export default Notification;
