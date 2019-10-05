import { getSearchQuery } from "../router";

describe("getSearchQuery selector", () => {
	it("Return the search query param value", () => {
		expect(
			getSearchQuery({
				router: {
					location: {
						search: "?p1=1&p2=2&search=zapato"
					}
				}
			})
		).toBe("zapato");

		expect(
			getSearchQuery({
				router: {
					location: {
						search: "?p1=1&p2=2"
					}
				}
			})
		).toBeNull();
	});
});
