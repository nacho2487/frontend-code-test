const axios = require("axios").default;

// https://api.mercadolibre.com/sites/MLA/search?q=​:query
// https://api.mercadolibre.com/items/​:id
// https://api.mercadolibre.com/items/​:id​/description

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
		console.error(e);
		return null;
	}
}

module.exports = {
	queryItems,
	getItemById,
	getItemDescriptionById
};
