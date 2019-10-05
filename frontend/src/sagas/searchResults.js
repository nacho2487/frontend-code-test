import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { doAddSearchResults } from "../actions/searchResults";
import { QUERY_PARM_SEARCH } from "../constants";
import { doAddCategories } from "../actions/categories";

const BASE_URL = "/api/items?q=";

const fetchSearchResults = query =>
  fetch(BASE_URL + query).then(response => response.json());

function* handleFetchSearchResults(action) {
  const { query } = action;
  const result = yield call(fetchSearchResults, query);
  yield put(doAddSearchResults(result.items));
  yield put(doAddCategories(result.categories));
  yield put(push(`/items?${QUERY_PARM_SEARCH}=${query}`));
}

export { handleFetchSearchResults };
