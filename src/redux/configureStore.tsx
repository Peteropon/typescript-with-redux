import { createStore } from "redux";
import rootReducer from "./reducers";
import { CounterState } from "./types";

export default function configureStore(initialState: CounterState) {
  return createStore(rootReducer, initialState);
}
