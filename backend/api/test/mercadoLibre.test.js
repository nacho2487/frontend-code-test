const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const mercadoLibreInterop = require("../interop/mercadoLibre");
const mlQueryItemsResponse = require("./fixtures/mercado-libre-query-items-response.json");
const mlItemResponse = require("./fixtures/mercado-libre-item-response.json");
const mlItemDescriptionResponse = require("./fixtures/mercado-libre-item-description-response.json");

describe("MercadoLibre response mapping", () => {
  it("should map MercadoLibre query items response", () => {
    const mappedResponse = mercadoLibreInterop.mapQueryItems(
      mlQueryItemsResponse
    );
    expect(mappedResponse).toEqual({
      author: { name: "nico", lastname: "card" },
      categories: ["Ropa y Accesorios", "Calzado"],
      items: [
        {
          id: "MLA688322496",
          title: "Zapatos De Vestir Hombre Charol Importados Fiesta Eco Cuero ",
          price: { currency: "ARS", amount: 1690, decimals: 0 },
          picture:
            "http://mla-s1-p.mlstatic.com/908135-MLA31018116481_062019-I.jpg",
          condition: "new",
          state: "Capital Federal",
          free_shipping: false
        },
        {
          id: "MLA622676901",
          title: "Customs Ba Zapatos Hombre Botitas Vestir Botas Cuero Ec Full",
          price: { currency: "ARS", amount: 1950, decimals: 0 },
          picture:
            "http://mla-s2-p.mlstatic.com/811424-MLA31241761908_062019-I.jpg",
          condition: "new",
          state: "Capital Federal",
          free_shipping: true
        },
        {
          id: "MLA745531777",
          title: "Zapato Zapatilla Mujer Blanca Sneaker Urbana Plataforma Moda",
          price: { currency: "ARS", amount: 1599, decimals: 0 },
          picture:
            "http://mla-s2-p.mlstatic.com/987401-MLA31123862015_062019-I.jpg",
          condition: "new",
          state: "Buenos Aires",
          free_shipping: false
        },
        {
          id: "MLA618293338",
          title: "Zapato De Vestir De Hombre Simil Cuero (art. 1241/12)",
          price: { currency: "ARS", amount: 1378, decimals: 0 },
          picture:
            "http://mla-s1-p.mlstatic.com/792057-MLA31112647287_062019-I.jpg",
          condition: "new",
          state: "Capital Federal",
          free_shipping: false
        }
      ]
    });
  });

  it("should map MercadoLibre item response", () => {
    const mappedResponse = mercadoLibreInterop.mapGetItem(
      mlItemResponse,
      mlItemDescriptionResponse
    );
    expect(mappedResponse).toEqual({
      author: { name: "nico", lastname: "card" },
      item: {
        id: "MLA688322496",
        title: "Zapatos De Vestir Hombre Charol Importados Fiesta Eco Cuero ",
        price: { currency: "ARS", amount: 1690, decimals: 0 },
        picture:
          "http://mla-s1-p.mlstatic.com/908135-MLA31018116481_062019-I.jpg",
        condition: "new",
        state: "Capital Federal",
        free_shipping: false,
        sold_quantity: 1049,
        description: "Diseñador: Simón de la Costa"
      }
    });
  });
});

describe("MercadoLibe response caching", () => {
  it("should return the result from cache", async () => {
    var mock = new MockAdapter(axios);
    const url = "/path/to";
    mock.onGet(url).reply(200, { id: 1 });

    const firstResult = await mercadoLibreInterop.fetchMercadoLibreApi(url);

    // Change the response to the same url
    mock.onGet(url).reply(200, { id: 2 });

    const secondResult = await mercadoLibreInterop.fetchMercadoLibreApi(url);

    expect(firstResult).toEqual(secondResult);
  });
});
