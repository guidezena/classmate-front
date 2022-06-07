import { createStore } from "redux";
import { Reducers } from "../reducers";

export const Store = createStore(Reducers);
export const Dispatch = (action) => {
  Store.dispatch(action);
};