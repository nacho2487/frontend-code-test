const { param } = require("express-validator");
const { defineValidator } = require("./util/validation");
const mercadoLibreInterop = require("../interop/mercadoLibre");

async function itemById(req, res, next) {
	try {
		const id = req.params.id;
		const itemResponse = await mercadoLibreInterop.getItemById(id);
		const descriptionResponse = await mercadoLibreInterop.getItemDescriptionById(
			id
		);

		res.json(mercadoLibreInterop.mapGetItem(itemResponse, descriptionResponse));
	} catch (error) {
		next(error);
	}
}

const itemsByIdValidator = defineValidator([
	param("id")
		.isString()
		.withMessage("Only letters and digits allowed in item id.")
		.trim()
		.not()
		.isEmpty()
		.withMessage("An item id must be specified")
]);

module.exports = [itemsByIdValidator, itemById];
