import React from "react";
import { cleanup, render } from "@testing-library/react";
import CategoriesBreadcrumb from "../CategoriesBreadcrumb";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("CategoriesBreadcrumb component", () => {
  const categories = ["Category 1", "Category 2", "Category 3"];

  it("Renders the categories", () => {
    const { container, getAllByText, getByText } = render(
      <CategoriesBreadcrumb categories={categories} />
    );

    const chevrons = getAllByText(">");
    expect(chevrons).toHaveLength(2);

    const lastCategory = getByText(categories.slice(-1)[0]);
    expect(lastCategory.parentElement.getAttribute("aria-current")).toBe(
      "page"
    );

    expect(container.textContent).toBe(categories.join(">"));
  });
});
