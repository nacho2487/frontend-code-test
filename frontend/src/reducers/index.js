import { combineReducers } from 'redux'
import { connectRouter } from "connected-react-router";
import categories from "./categories";
import searchResults from "./searchResults";
import currentProduct from "./currentProduct";

function createRootReducer(history) {
	return combineReducers({
		router: connectRouter(history),
		categories,
		currentProduct,
		searchResults
	});
}

export default createRootReducer;
