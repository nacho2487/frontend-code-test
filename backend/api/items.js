const { query } = require("express-validator");
const { defineValidator } = require("./util/validation");
const mercadoLibreInterop = require("../interop/mercadoLibre");

async function items(req, res, next) {
	try {
		const query = req.query.q;
		const response = await mercadoLibreInterop.queryItems(query);
		res.json(response);
	} catch (error) {
		next(error);
	}
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
