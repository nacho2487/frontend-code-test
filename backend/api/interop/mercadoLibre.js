const axios = require("axios").default;
const logger = require("../../logging/logger");
const Cache = require("./cache");

const AUTHOR = {
	name: "nico",
	lastname: "card"
};

const QUERY_ITEMS_LIMIT = 4;

const cache = new Cache(process.env.CACHE_TTL_SECONDS || 300);

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
	return `https://api.mercadolibre.com/items/${id}`;
}

async function getItemDescriptionById(id) {
	return await fetchMercadoLibreApi(getMercadoLibreDescriptionByIdUrl({ id }));
}

function getMercadoLibreDescriptionByIdUrl({ id }) {
	return `https://api.mercadolibre.com/items/${id}/description`;
}

async function fetchMercadoLibreApi(url) {
	try {
		const result = await cache.get(url, async () => {
			logger.info(`Fetching data from MercadoLibre's endpoint (${url})`);
			const response = await axios.get(url);
			return response.data;
		});
		return result;
	} catch (e) {
		logger.error(
			`Error fetching data from MercadoLibre's endpoint (${url})`,
			e
		);
		throw e;
	}
}

function mapQueryItems(response) {
	const categoryFilter = response.filters.find(
		filter => filter.id === "category"
	);
	const categories =
		categoryFilter && categoryFilter.values.map(category => category.name);

	return {
		author: AUTHOR,
		categories,
		items: response.results.map(mapItem)
	};
}

function mapGetItem(itemResponse, descriptionResponse) {
	return {
		author: AUTHOR,
		item: {
			...mapItem(itemResponse),
			description: descriptionResponse.plain_text
		}
	};
}

function mapItem({
	condition,
	currency_id,
	id,
	price,
	shipping,
	thumbnail,
	title
}) {
	return {
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
	};
}

module.exports = {
	fetchMercadoLibreApi,
	getItemById,
	getItemDescriptionById,
	getMercadoLibreDescriptionByIdUrl,
	getMercadoLibreItemByIdUrl,
	getMercadoLibreQueryItemsUrl,
	mapGetItem,
	mapQueryItems,
	queryItems
};
