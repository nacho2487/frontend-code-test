const axios = require("axios").default;
const logger = require("../logging/logger");

const QUERY_ITEMS_LIMIT = 4;

async function queryItems(query) {
	return await fetchMercadoLibreApi(getMercadoLibreQueryItemsUrl({ query }));
}

function getMercadoLibreQueryItemsUrl({ query }) {
	return `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${QUERY_ITEMS_LIMIT}`;
}

async function getItemById(id) {
	return await fetchMercadoLibreApi(getMercadoLibreItemByIdUrl({ id }));
}

function getMercadoLibreItemByIdUrl({ id }) {
	return `https://api.mercadolibre.com/sites/MLA/search?q=${id}`;
}

async function getItemDescriptionById(id) {
	return await fetchMercadoLibreApi(getMercadoLibreDescriptionByIdUrl({ id }));
}

function getMercadoLibreDescriptionByIdUrl({ id }) {
	return `https://api.mercadolibre.com/items/${id}/description`;
}

async function fetchMercadoLibreApi(url) {
	try {
		logger.info(`Fetching data from MercadoLibre's endpoint (${url})`);
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
	getItemById,
	getItemDescriptionById,
	getMercadoLibreDescriptionByIdUrl,
	getMercadoLibreItemByIdUrl,
	getMercadoLibreQueryItemsUrl,
	queryItems
};
