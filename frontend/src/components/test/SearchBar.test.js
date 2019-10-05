import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { SearchBar } from "../SearchBar";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("SearchBar component", () => {
  const searchFieldLabel = "Ingresa lo que quieras encontrar";
  const searchButtonLabel = "Buscar";

  it("Inits search field", () => {
    const query = "text";
    const { getByLabelText } = render(<SearchBar query={query} />);

    expect(getByLabelText(searchFieldLabel).value).toBe(query);
  });

  it("calls onFetchProducts when form is submitted", () => {
    const handler = jest.fn();
    const query = "zapato";
    const { getByLabelText } = render(
      <SearchBar onFetchProducts={handler} query={query} />
    );

    fireEvent.click(getByLabelText(searchButtonLabel));
    expect(handler).toHaveBeenCalledWith(query);
  });
});
