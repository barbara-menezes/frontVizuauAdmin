/* eslint-disable indent */
import { SHOW_LOADING } from "./loadingActions";

export const INITIAL_STATE = {
  showLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { showLoading: !state.showLoading };
    default:
      return state;
  }
};
