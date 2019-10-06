import { CURRENT_PRODUCT_SET } from "../constants/actionTypes";

export default function currentProduct(state = null, action) {
  switch (action.type) {
    case CURRENT_PRODUCT_SET:
      return action.currentProduct;
    default:
      return state;
  }
}
