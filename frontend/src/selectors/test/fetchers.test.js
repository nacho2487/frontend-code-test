import { getError } from "../fetchers";

describe("getError selector", () => {
  it("Return the errors", () => {
    const error = "An error";
    expect(
      getError({
        fetchers: {
          currentProduct: {
            error
          },
          searchResults: {
            error: null
          }
        }
      })
    ).toBe(error);

    expect(
      getError({
        fetchers: {
          currentProduct: {
            error: null
          },
          searchResults: {
            error: null
          }
        }
      })
    ).toBeUndefined();
  });
});
