import { SEARCH_RESULTS_ADD } from "../constants/actionTypes";

export default function searchResults(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS_ADD:
      return action.searchResults;
    default:
      return state;
  }
}
