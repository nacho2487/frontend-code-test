import { put, call } from "redux-saga/effects";
import { handleFetchSearchResults, fetchSearchResults } from "../searchResults";
import {
  doFetchSearchResultsSuccess,
  doFetchSearchResultsError
} from "../../actions/searchResults";

describe("handleFetchSearchResults saga", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("Fetches search results succesfully", () => {
    const query = "zapato";
    const response = {
      author: { name: "nico", lastname: "card" },
      categories: ["Calzado"],
      items: [
        {
          id: "MLA688322496",
          title: "Zapatos",
          price: { currency: "ARS", amount: 1690, decimals: 0 },
          picture:
            "http://mla-s1-p.mlstatic.com/908135-MLA31018116481_062019-I.jpg",
          condition: "new",
          free_shipping: false
        }
      ]
    };
    fetch.mockResponse(JSON.stringify(response));

    const generator = handleFetchSearchResults({ query });
    expect(generator.next().value).toEqual(call(fetchSearchResults, query));
    expect(generator.next().value).toEqual(put(doFetchSearchResultsSuccess()));
  });

  it("Handles exception fetching", () => {
    const query = "zapato";
    const errorMessage = "Error fetching";
    const error = new Error(errorMessage);
    fetch.mockRejectOnce(error);

    const generator = handleFetchSearchResults({ query });
    expect(generator.next().value).toEqual(call(fetchSearchResults, query));
    expect(generator.throw("Error: " + errorMessage).value).toEqual(
      put(doFetchSearchResultsError(error))
    );
  });
});
