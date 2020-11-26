export const NOTIFY = "notification/NOTIFY";
export const HIDE_NOTIFICATION = "notification/HIDE_NOTIFICATION";

export const notify = (notification) => ({
  type: NOTIFY,
  payload: notification,
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
