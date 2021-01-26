import { ActionTypes, CounterState, INCREMENT_COUNTER } from "../types";

export const initialState: CounterState = {
  counter: 0,
};

export default function counterReducer(
  state = initialState.counter,
  action: ActionTypes
) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;

    default:
      return state;
  }
}
