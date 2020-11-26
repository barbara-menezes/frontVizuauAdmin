/* eslint-disable indent */
import { SETUSER } from "./authActions";

const INITIAL_STATE = {
  user: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETUSER:
      return { user: action.payload };
    default:
      return state;
  }
};
