const { query } = require("express-validator");
const { defineValidator } = require("./util/validation");
const mercadoLibreInterop = require("../interop/mercadoLibre");
const { author } = require("./common");

async function items(req, res, next) {
	try {
		const query = req.query.q;
		const response = await mercadoLibreInterop.queryItems(query);

		res.json(mapMercadoLibreResponse(response));
	} catch (error) {
		next(error);
	}
}

function mapMercadoLibreResponse(response) {
	const categoryFilter = response.filters.find(
		filter => filter.id === "category"
	);
	const categories =
		categoryFilter && categoryFilter.values.map(category => category.name);

	return {
		author,
		categories,
		items: response.results.map(
			({ condition, currency_id, id, price, shipping, thumbnail, title }) => ({
				id,
				title,
				price: {
					currency: currency_id,
					amount: price,
					decimals: 0 // Averiguar de qué se trata esta propiedad
				},
				picture: thumbnail,
				condition,
				free_shipping: shipping.free_shipping
			})
		)
	};
}

const itemsValidator = defineValidator([
	query("q")
		.isString()
		.withMessage("Only letters and digits allowed in query.")
		.trim()
		.not()
		.isEmpty()
		.withMessage("A query must be specified")
]);

module.exports = [itemsValidator, items];
