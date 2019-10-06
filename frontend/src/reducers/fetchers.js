import { combineReducers } from "redux";
import {
  CURRENT_PRODUCT_FETCH,
  CURRENT_PRODUCT_FETCH_SUCCESS,
  CURRENT_PRODUCT_FETCH_ERROR,
  SEARCH_RESULTS_FETCH,
  SEARCH_RESULTS_FETCH_SUCCESS,
  SEARCH_RESULTS_FETCH_ERROR,
  FETCHERS_CLEAR
} from "../constants/actionTypes";

function fetcher(FETCH, SUCCESS, ERROR) {
  function isFetching(state = false, action) {
    switch (action.type) {
      case FETCH:
        return true;
      case SUCCESS:
        return false;
      case ERROR:
        return false;
      case FETCHERS_CLEAR:
        return false;
      default:
        return state;
    }
  }

  function error(state = null, action) {
    switch (action.type) {
      case FETCH:
        return null;
      case SUCCESS:
        return null;
      case ERROR:
        return action.payload;
      case FETCHERS_CLEAR:
        return null;
      default:
        return state;
    }
  }

  return combineReducers({
    isFetching,
    error
  });
}

export default combineReducers({
  currentProduct: fetcher(
    CURRENT_PRODUCT_FETCH,
    CURRENT_PRODUCT_FETCH_SUCCESS,
    CURRENT_PRODUCT_FETCH_ERROR
  ),
  searchResults: fetcher(
    SEARCH_RESULTS_FETCH,
    SEARCH_RESULTS_FETCH_SUCCESS,
    SEARCH_RESULTS_FETCH_ERROR
  )
});
