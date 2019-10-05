import { call, put } from "redux-saga/effects";
import {
  doSetCurrentProduct,
  doFetchCurrentProductSuccess,
  doFetchCurrentProductError
} from "../actions/currentProduct";

const BASE_URL = "/api/items/";

const fetchCurrentProduct = async id => {
  const response = await fetch(BASE_URL + id);
  return await response.json();
};

function* handleFetchCurrenProduct({ id }) {
  try {
    const result = yield call(fetchCurrentProduct, id);
    yield put(doFetchCurrentProductSuccess());
    yield put(doSetCurrentProduct(result.item));
  } catch (e) {
    yield put(doFetchCurrentProductError(e));
  }
}

export { handleFetchCurrenProduct, fetchCurrentProduct };
