import { CATEGORIES_ADD } from "../constants/actionTypes";

export default function categories(state = [], action) {
  switch (action.type) {
    case CATEGORIES_ADD:
      return action.categories;
    default:
      return state;
  }
}
