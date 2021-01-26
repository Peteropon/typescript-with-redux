import { ActionTypes, INCREMENT_COUNTER } from "../types";

export function incrementCounter(): ActionTypes {
  return {
    type: INCREMENT_COUNTER,
  };
}
