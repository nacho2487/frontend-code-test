import {
	SEARCH_RESULTS_ADD,
	SEARCH_RESULTS_CLEAR,
	SEARCH_RESULTS_FETCH,
	SEARCH_RESULTS_FETCH_SUCCESS,
	SEARCH_RESULTS_FETCH_ERROR,
	SEARCH_RESULTS_PERFORM
} from "../constants/actionTypes";

export function doAddSearchResults(searchResults) {
	return {
		type: SEARCH_RESULTS_ADD,
		searchResults
	};
}

export function doClearSearchResults() {
	return {
		type: SEARCH_RESULTS_CLEAR
	};
}

export function doPerformSearch(query) {
	return {
		type: SEARCH_RESULTS_PERFORM,
		query
	};
}

export function doFetchSearchResults(query) {
	return {
		type: SEARCH_RESULTS_FETCH,
		query
	};
}

export function doFetchSearchResultsSuccess() {
	return {
		type: SEARCH_RESULTS_FETCH_SUCCESS
	};
}

export function doFetchSearchResultsError(error) {
	return {
		type: SEARCH_RESULTS_FETCH_ERROR,
		payload: error.toString()
	};
}
