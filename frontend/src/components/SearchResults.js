import React from "react";
import PropTypes from "prop-types";
import "./SearchResults.scss";
import SearchResultsItem from "./SearchResultsItem";

function SearchResults({ results }) {
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <ol className="search-results">
          {results.items.map(item => (
            <li className="search-results-item" key={item.id}>
              <SearchResultsItem item={item} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.object.isRequired
};

export default SearchResults;
