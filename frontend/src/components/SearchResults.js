import React from "react";
import PropTypes from "prop-types";
import "./SearchResults.scss";
import SearchResultsItem from "./SearchResultsItem";

function SearchResults({ results }) {
  return (
    <ol className="search-results">
      {results.items.map(item => (
        <li className="search-results-item" key={item.id}>
          <SearchResultsItem item={item} />
        </li>
      ))}
    </ol>
  );
}

SearchResults.propTypes = {
  results: PropTypes.object.isRequired
};

export default SearchResults;
