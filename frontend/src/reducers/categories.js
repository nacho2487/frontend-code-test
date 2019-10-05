import { CATEGORIES_ADD, CATEGORIES_CLEAR } from "../constants/actionTypes";

export default function categories(state = [], action) {
	switch (action.type) {
		case CATEGORIES_ADD:
			return action.categories;
		case CATEGORIES_CLEAR:
			return [];
		default:
			return state;
	}
}
