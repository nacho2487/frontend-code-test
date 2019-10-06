import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MetaTags from "react-meta-tags";
import "./SearchResults.scss";
import SearchResultsItem from "./SearchResultsItem";
import { doFetchSearchResults } from "../actions/searchResults";
import { getSearchQuery } from "../selectors/router";
import { Loading } from "./Loading";

export function SearchResults({
	isFetching,
	query,
	results = [],
	fetchSearchResults
}) {
	useEffect(() => {
		fetchSearchResults(query);
	}, [query, fetchSearchResults]);

	if (isFetching) {
		return <Loading count="3" />;
	}

	if (results.length === 0) {
		return (
			<div className="search-results-empty">
				No se encontraron productos. Intenta con otra búsqueda.
			</div>
		);
	}

	return (
		<>
			<MetaTags>
				<title>{`${query} en MercadoLibre`}</title>
				<meta
					name="description"
					content={`Encuentra ${query} a excelentes precios en Mercado Libre! Entra y conoce nuestras ofertas increíbles`}
				/>
			</MetaTags>
			<ol className="search-results">
				{results.map(item => (
					<li className="search-results-item" key={item.id}>
						<SearchResultsItem item={item} />
					</li>
				))}
			</ol>
		</>
	);
}

SearchResults.propTypes = {
	results: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	query: PropTypes.string.isRequired
};

const mapStateToProps = state => {
	const { searchResults, fetchers } = state;

	return {
		isFetching: fetchers.searchResults.isFetching,
		query: getSearchQuery(state) || "",
		results: searchResults
	};
};

const mapDispatchToProps = dispatch => ({
	fetchSearchResults: query => dispatch(doFetchSearchResults(query))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResults);
