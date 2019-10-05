import {
	CURRENT_PRODUCT_SET,
	CURRENT_PRODUCT_FETCH,
	CURRENT_PRODUCT_FETCH_SUCCESS,
	CURRENT_PRODUCT_FETCH_ERROR
} from "../constants/actionTypes";

export function doSetCurrentProduct(currentProduct) {
	return {
		type: CURRENT_PRODUCT_SET,
		currentProduct
	};
}
export function doFetchCurrentProduct(id) {
	return {
		type: CURRENT_PRODUCT_FETCH,
		id
	};
}

export function doFetchCurrentProductSuccess() {
	return {
		type: CURRENT_PRODUCT_FETCH_SUCCESS
	};
}

export function doFetchCurrentProductError(error) {
	return {
		type: CURRENT_PRODUCT_FETCH_ERROR,
		payload: error.toString()
	};
}
