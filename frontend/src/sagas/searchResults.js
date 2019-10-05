import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  doAddSearchResults,
  doClearSearchResults,
  doFetchSearchResultsSuccess,
  doFetchSearchResultsError
} from "../actions/searchResults";
import { doAddCategories, doClearCategories } from "../actions/categories";
import { QUERY_PARM_SEARCH } from "../constants";
import { doClearFetchers } from "../actions/fetchers";

const BASE_URL = "/api/items?q=";

const fetchSearchResults = async query => {
  const response = await fetch(BASE_URL + query);
  return response.json();
};

function* handleFetchSearchResults({ query }) {
  try {
    const result = yield call(fetchSearchResults, query);
    yield put(doFetchSearchResultsSuccess());
    yield put(doAddSearchResults(result.items || []));
    yield put(doAddCategories(result.categories || []));
  } catch (e) {
    yield put(doFetchSearchResultsError(e));
  }
}

function* handlePerformSearch({ query }) {
  yield put(doClearSearchResults());
  yield put(doClearCategories());
  yield put(doClearFetchers());
  if (query) {
    yield put(push(`/items?${QUERY_PARM_SEARCH}=${query}`));
  } else {
    yield put(push("/"));
  }
}

export { handleFetchSearchResults, handlePerformSearch, fetchSearchResults };
