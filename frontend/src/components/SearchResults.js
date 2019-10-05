import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./SearchResults.scss";
import SearchResultsItem from "./SearchResultsItem";

export function SearchResults({ results = [] }) {
	return (
		<ol className="search-results">
			{results.map(item => (
				<li className="search-results-item" key={item.id}>
					<SearchResultsItem item={item} />
				</li>
			))}
		</ol>
	);
}

SearchResults.propTypes = {
	results: PropTypes.array.isRequired
};

const mapStateToProps = ({ searchResults }) => ({
	results: searchResults
});

export default connect(mapStateToProps)(SearchResults);
