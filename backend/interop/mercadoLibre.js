const axios = require("axios").default;
const logger = require("../logging/logger");

async function queryItems(query) {
	return await fetchMercadoLibreApi(
		`https://api.mercadolibre.com/sites/MLA/search?q=${query}`
	);
}

async function getItemById(id) {
	return await fetchMercadoLibreApi(`https://api.mercadolibre.com/items/${id}`);
}

async function getItemDescriptionById(id) {
	return await fetchMercadoLibreApi(
		`https://api.mercadolibre.com/items/${id}/description`
	);
}

async function fetchMercadoLibreApi(url) {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (e) {
		logger.error(
			`Error fetching data from MercadoLibre's endpoint (${url})`,
			e
		);
		throw e;
	}
}

module.exports = {
	queryItems,
	getItemById,
	getItemDescriptionById
};
