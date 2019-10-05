import { put, call } from "redux-saga/effects";
import {
  handleFetchCurrenProduct,
  fetchCurrentProduct
} from "../currentProduct";
import {
  doFetchCurrentProductSuccess,
  doFetchCurrentProductError
} from "../../actions/currentProduct";

describe("handleFetchCurrenProduct saga", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("Fetches current product succesfully", () => {
    const id = "MLA688322496";
    const response = {
      author: { name: "nico", lastname: "card" },
      item: {
        id,
        title: "Zapatos",
        price: { currency: "ARS", amount: 1690, decimals: 0 },
        picture:
          "http://mla-s1-p.mlstatic.com/908135-MLA31018116481_062019-I.jpg",
        condition: "new",
        free_shipping: false,
        description: "Diseñador: Simón de la Costa",
        sold_quantity: 1051
      }
    };
    fetch.mockResponseOnce(JSON.stringify(response));

    const generator = handleFetchCurrenProduct({ id });
    expect(generator.next().value).toEqual(call(fetchCurrentProduct, id));
    expect(generator.next().value).toEqual(put(doFetchCurrentProductSuccess()));
  });

  it("Handles exception fetching", () => {
    const id = "MLA688322496";
    const errorMessage = "Error fetching";
    const error = new Error(errorMessage);
    fetch.mockRejectOnce(error);

    const generator = handleFetchCurrenProduct({ id });
    expect(generator.next().value).toEqual(call(fetchCurrentProduct, id));
    expect(generator.throw("Error: " + errorMessage).value).toEqual(
      put(doFetchCurrentProductError(error))
    );
  });
});
