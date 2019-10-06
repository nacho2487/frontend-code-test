import { takeEvery, all } from "redux-saga/effects";
import {
  SEARCH_RESULTS_FETCH,
  SEARCH_RESULTS_PERFORM,
  CURRENT_PRODUCT_FETCH
} from "../constants/actionTypes";
import { handleFetchSearchResults, handlePerformSearch } from "./searchResults";
import { handleFetchCurrenProduct } from "./currentProduct";

function* watchAll() {
  yield all([
    takeEvery(SEARCH_RESULTS_PERFORM, handlePerformSearch),
    takeEvery(SEARCH_RESULTS_FETCH, handleFetchSearchResults),
    takeEvery(CURRENT_PRODUCT_FETCH, handleFetchCurrenProduct)
  ]);
}
export default watchAll;
