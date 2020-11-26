import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./mainReducer";

const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));

export default store;
