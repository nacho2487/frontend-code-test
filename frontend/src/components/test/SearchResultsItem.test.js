import React from "react";
import { cleanup, render } from "@testing-library/react";
import SearchResultsItem from "../SearchResultsItem";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("SearchResultsItem component", () => {
  const item = {
    id: "MLA688322496",
    title: "Zapatos",
    price: { currency: "ARS", amount: 1690, decimals: 0 },
    picture: "http://mla-s1-p.mlstatic.com/908135-MLA31018116481_062019-I.jpg",
    condition: "new",
    free_shipping: true
  };

  it("Renders an item", () => {
    const { getByAltText, getByText } = render(
      <SearchResultsItem item={item} />
    );

    const itemImg = getByAltText(item.title);
    expect(itemImg).toBeDefined();
    expect(itemImg.getAttribute("src")).toBe(item.picture);

    const freeShippingImg = getByAltText("Envío gratis");
    expect(freeShippingImg).toBeDefined();
    expect(freeShippingImg.getAttribute("srcset")).toBeDefined();

    const title = getByText(item.title);
    expect(title).toBeDefined();

    const price = getByText(`${item.price.currency} ${item.price.amount}`);
    expect(price).toBeDefined();
  });
});
