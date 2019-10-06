const request = require("supertest");
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const app = require("../../server");
const itemFixtureData = require("./fixtures/mercado-libre-item-response.json");
const descriptionFixtureData = require("./fixtures/mercado-libre-item-description-response.json");
const {
  getMercadoLibreDescriptionByIdUrl,
  getMercadoLibreItemByIdUrl
} = require("../interop/mercadoLibre");

describe("GET /api/items/:id", () => {
  it("should return an error when no id is specified", async () => {
    const res = await request(app).get("/api/items/");
    expect(res.statusCode).toEqual(422);
    expect(res.body).toHaveProperty("details.errors");
  });

  it("should succesfully return the result fetching by id", async () => {
    const id = "MLA688322496";
    var mock = new MockAdapter(axios);
    mock.onGet(getMercadoLibreItemByIdUrl({ id })).reply(200, itemFixtureData);
    mock
      .onGet(getMercadoLibreDescriptionByIdUrl({ id }))
      .reply(200, descriptionFixtureData);

    const res = await request(app).get(`/api/items/${id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("author");
    expect(res.body).toHaveProperty("item");
    expect(res.body.item.id).toBe(id);
  });
});
