import { CATEGORIES_ADD } from "../constants/actionTypes";

export function doAddCategories(categories) {
  return {
    type: CATEGORIES_ADD,
    categories
  };
}
