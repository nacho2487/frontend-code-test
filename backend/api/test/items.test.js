const request = require("supertest");
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const app = require("../../server");
const fixtureData = require("./fixtures/mercado-libre-query-items-response.json");
const { getMercadoLibreQueryItemsUrl } = require("../../interop/mercadoLibre");

describe("GET /api/items?q=​:query", () => {
	it("should return an error when no query is specified", async done => {
		const res = await request(app).get("/api/items");
		expect(res.statusCode).toEqual(422);
		expect(res.body).toHaveProperty("errors");
		done();
	});

	it("should succesfully return the result of querying for 'zapato'", async done => {
		const query = "zapato";
		var mock = new MockAdapter(axios);
		mock.onGet(getMercadoLibreQueryItemsUrl({ query })).reply(200, fixtureData);

		const res = await request(app).get(`/api/items?q=${query}`);
		expect(res.statusCode).toEqual(200);
		expect(res.body.items).toHaveLength(4);
		done();
	});
});
