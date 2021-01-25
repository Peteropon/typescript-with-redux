import { ActionTypes, INCREMENT_COUNTER } from "../types";

export function increaseCounter(): ActionTypes {
  return {
    type: INCREMENT_COUNTER,
  };
}
