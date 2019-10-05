import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "../store";
import "./App.scss";
import { APP_ROOT_ELEMENT_ID } from "../constants";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Product from "./Product";
import CategoriesBreadcrumb from "./CategoriesBreadcrumb";

const INITIAL_STATE = {
  categories: ["Ropa, calzados y accesorios", "Calzados"],
  searchResults: [
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
  ],
  currentProduct: {
    id: "MLA688322496",
    title: "Zapatos De Vestir Hombre Charol Importados Fiesta Eco Cuero ",
    price: { currency: "ARS", amount: 1690, decimals: 0 },
    picture: "http://mla-s1-p.mlstatic.com/908135-MLA31018116481_062019-I.jpg",
    condition: "new",
    free_shipping: false,
    sold_quantity: 500,
    description:
      'Diseñador: Simón de la Costa \nComposición: Charol PU\nDistribuye: Quality Import USA\n\nMedidas: \nTalle 39 - largo de pie: 25 a 25,5 cm\nTalle 40 - largo de pie: 26 a 26.5 cm\nTalle 41 - largo de pie: 27 a 27.5 cm\nTalle 42 - largo de pie: 28 a 28.5 cm\nTalle 43 - largo de pie: 29 a 29.5 cm\nTalle 44 - largo de pie: 30 a 30.5 cm\nTalle 45 - largo de pie: 31 a 31.5 cm\n\nSomos QUALITY IMPORT USA:\nComprá con tranquilidad, el 100% de nuestros clientes nos recomienda, 100% de calificaciones positivas, Somos MercadoLíder Platinum desde hace más de 10 años y todos nuestros productos están testeados y garantizados.\n\n¿DÓNDE ESTAMOS?:\nPodés visitarnos y retirar tu compra o enviar un GLOVO en el día o enviar a alguien en tu nombre en nuestro local del barrio de Congreso, muy cerca de estaciones de Subtes B "Callao" y A "Congreso".\n\nMEDIOS DE ENVIO:\nTrabajamos con MercadoEnvíos quien selecciona el medio más rapido y seguro para tu domicilio o sucursal de tu barrio y el tiempo estimado de envío te lo dice al ingresar tu código postal al iniciar la compra. Recordá que si sumás otro producto nuestro a tu carrito de compras y luego haces un sólo pago tendrás ¡envío gratis! \n\nCAMBIOS/DEVOLUCIONES:\nTodos nuestros productos cuentan con garantía y cambio, para ello la prenda no debe haber sido usada y debe conservar las etiquetas colgantes. Si es así, podes contactarnos y te ayudaremos a realizar el cambio de manera satisfactoria. Recordá que cada producto tiene publicada su tabla de talles en la última foto en la publicación. Cualquier duda sobre tu talle podés hacernos una pregunta y te ayudaremos a elegir el talle correcto.'
  }
};

const store = configureStore(INITIAL_STATE);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Header />
          <main className="container" role="main" id={`${APP_ROOT_ELEMENT_ID}`}>
            <div className="row no-gutters">
              <div className="col-10 offset-1">
                <CategoriesBreadcrumb />
                <div className="app-body">
                  <Switch>
                    <Route exact path="/items" component={SearchResults} />
                    <Route path="/items/:id" component={Product} />
                  </Switch>
                </div>
              </div>
            </div>
          </main>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
