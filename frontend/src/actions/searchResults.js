import {
  SEARCH_RESULTS_ADD,
  SEARCH_RESULTS_FETCH
} from "../constants/actionTypes";

export function doAddSearchResults(searchResults) {
  return {
    type: SEARCH_RESULTS_ADD,
    searchResults
  };
}
export function doFetchSearchResults(query) {
  return {
    type: SEARCH_RESULTS_FETCH,
    query
  };
}
