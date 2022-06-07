import { combineReducers } from "redux";
import { loaderReduce } from "./loader.reducer";
import { reloadComponentsReduce } from "./reloadComponents.reducer";
export const Reducers = combineReducers({
  loaderState: loaderReduce,
  reloadComponents: reloadComponentsReduce,
});

export type RootState = ReturnType<typeof Reducers>;
