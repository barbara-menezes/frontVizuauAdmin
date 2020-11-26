import { combineReducers } from "redux";
import { authReducer as auth } from "./features/auth";
import { loadingReducer as loading } from "./features/loading";
import { notificationReducer as notification } from "./features/notification";
import { cupomReducer as cupom } from "./features/cupons";

export default combineReducers({
  auth,
  loading,
  notification,
  cupom
});
