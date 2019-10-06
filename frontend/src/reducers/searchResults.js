import {
  SEARCH_RESULTS_ADD,
  SEARCH_RESULTS_CLEAR
} from "../constants/actionTypes";

export default function searchResults(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS_ADD:
      return action.searchResults;
    case SEARCH_RESULTS_CLEAR:
      return [];
    default:
      return state;
  }
}
