import React from "react";
import "./App.scss";
import { APP_ROOT_ELEMENT_ID } from "../constants/identifiers";
import Header from "./Header";
import SearchResults from "./SearchResults";

const results = {
  author: { name: "nico", lastname: "card" },
  categories: ["Calzado"],
  items: [
    {
      id: "MLA688322496",
      title: "Zapatos De Vestir Hombre Charol Importados Fiesta Eco Cuero ",
      price: { currency: "ARS", amount: 1690, decimals: 0 },
      picture:
        "http://mla-s1-p.mlstatic.com/908135-MLA31018116481_062019-I.jpg",
      condition: "new",
      free_shipping: false
    },
    {
      id: "MLA622676901",
      title: "Customs Ba Zapatos Hombre Botitas Vestir Botas Cuero Ec Full",
      price: { currency: "ARS", amount: 1950, decimals: 0 },
      picture:
        "http://mla-s2-p.mlstatic.com/811424-MLA31241761908_062019-I.jpg",
      condition: "new",
      free_shipping: true
    },
    {
      id: "MLA745531777",
      title: "Zapato Zapatilla Mujer Blanca Sneaker Urbana Plataforma Moda",
      price: { currency: "ARS", amount: 1599, decimals: 0 },
      picture:
        "http://mla-s2-p.mlstatic.com/987401-MLA31123862015_062019-I.jpg",
      condition: "new",
      free_shipping: false
    },
    {
      id: "MLA618293338",
      title: "Zapato De Vestir De Hombre Simil Cuero (art. 1241/12)",
      price: { currency: "ARS", amount: 1378, decimals: 0 },
      picture:
        "http://mla-s1-p.mlstatic.com/792057-MLA31112647287_062019-I.jpg",
      condition: "new",
      free_shipping: false
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container" role="main" id={`${APP_ROOT_ELEMENT_ID}`}>
        <SearchResults results={results} />
      </main>
    </div>
  );
}

export default App;
