import { takeEvery, all } from "redux-saga/effects";
import { SEARCH_RESULTS_FETCH } from "../constants/actionTypes";
import { handleFetchSearchResults } from "./searchResults";

function* watchAll() {
  yield all([takeEvery(SEARCH_RESULTS_FETCH, handleFetchSearchResults)]);
}
export default watchAll;
