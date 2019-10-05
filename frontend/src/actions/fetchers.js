import { FETCHERS_CLEAR } from "../constants/actionTypes";

export function doClearFetchers() {
  return {
    type: FETCHERS_CLEAR
  };
}
