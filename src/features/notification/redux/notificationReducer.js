/* eslint-disable indent */
import { NOTIFY, HIDE_NOTIFICATION } from "./notificationActions";

const INITIAL_STATE = {
  message: "",
  showNotification: false,
  variant: "success",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFY:
      const { message, variant } = action.payload;
      return { message, variant, showNotification: true };
    case HIDE_NOTIFICATION:
      return { ...state, showNotification: false };
    default:
      return state;
  }
};
