import { CATEGORIES_ADD, CATEGORIES_CLEAR } from "../constants/actionTypes";

export function doAddCategories(categories) {
  return {
    type: CATEGORIES_ADD,
    categories
  };
}

export function doClearCategories() {
  return {
    type: CATEGORIES_CLEAR
  };
}
