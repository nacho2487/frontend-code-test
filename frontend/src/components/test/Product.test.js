import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Product } from "../Product";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("Product component", () => {
	const item = {
		id: "MLA688322496",
		title: "Zapatos",
		price: { currency: "ARS", amount: 1690, decimals: 0 },
		picture: "http://mla-s1-p.mlstatic.com/908135-MLA31018116481_062019-I.jpg",
		condition: "new",
		free_shipping: false,
		sold_quantity: 500,
		description:
			'Diseñador: Simón de la Costa \nComposición: Charol PU\nDistribuye: Quality Import USA\n\nMedidas: \nTalle 39 - largo de pie: 25 a 25,5 cm\nTalle 40 - largo de pie: 26 a 26.5 cm\nTalle 41 - largo de pie: 27 a 27.5 cm\nTalle 42 - largo de pie: 28 a 28.5 cm\nTalle 43 - largo de pie: 29 a 29.5 cm\nTalle 44 - largo de pie: 30 a 30.5 cm\nTalle 45 - largo de pie: 31 a 31.5 cm\n\nSomos QUALITY IMPORT USA:\nComprá con tranquilidad, el 100% de nuestros clientes nos recomienda, 100% de calificaciones positivas, Somos MercadoLíder Platinum desde hace más de 10 años y todos nuestros productos están testeados y garantizados.\n\n¿DÓNDE ESTAMOS?:\nPodés visitarnos y retirar tu compra o enviar un GLOVO en el día o enviar a alguien en tu nombre en nuestro local del barrio de Congreso, muy cerca de estaciones de Subtes B "Callao" y A "Congreso".\n\nMEDIOS DE ENVIO:\nTrabajamos con MercadoEnvíos quien selecciona el medio más rapido y seguro para tu domicilio o sucursal de tu barrio y el tiempo estimado de envío te lo dice al ingresar tu código postal al iniciar la compra. Recordá que si sumás otro producto nuestro a tu carrito de compras y luego haces un sólo pago tendrás ¡envío gratis! \n\nCAMBIOS/DEVOLUCIONES:\nTodos nuestros productos cuentan con garantía y cambio, para ello la prenda no debe haber sido usada y debe conservar las etiquetas colgantes. Si es así, podes contactarnos y te ayudaremos a realizar el cambio de manera satisfactoria. Recordá que cada producto tiene publicada su tabla de talles en la última foto en la publicación. Cualquier duda sobre tu talle podés hacernos una pregunta y te ayudaremos a elegir el talle correcto.'
	};

	it("Renders the product", () => {
		const fetchProduct = jest.fn();
		const { getByAltText, getByText, getByTitle } = render(
			<Router>
				<Product item={item} id={item.id} isFetching={false} fetchProduct={fetchProduct} />
			</Router>
		);

		expect(fetchProduct).toHaveBeenCalled();

		const productImg = getByAltText(item.title);
		expect(productImg).toBeDefined();

		const buyBtn = getByTitle(`Comprar ${item.title}`);
		expect(buyBtn).toBeDefined();

		const title = getByText(item.title);
		expect(title).toBeDefined();
	});
});
