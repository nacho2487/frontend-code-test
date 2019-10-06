import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./SearchBar.scss";
import { getSearchQuery } from "../selectors/router";
import { doPerformSearch } from "../actions/searchResults";

export function SearchBar(props) {
  const [query, setQuery] = useState(props.query || "");

  useEffect(() => {
    setQuery(props.query);
  }, [props.query]);

  const onSubmit = event => {
    event.preventDefault();
    props.onFetchProducts(query);
  };

  const onChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  return (
    <form
      className="bar-search col-10 col-md-9 pl-0 pr-md-0"
      onSubmit={onSubmit}
    >
      <input
        aria-label="Ingresa lo que quieras encontrar"
        autoFocus
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        type="search"
        placeholder="Nunca dejes de buscar"
        className="field field-search"
        value={query}
        onChange={onChange}
      />
      <button className="btn btn-search" type="submit" aria-label="Buscar" />
    </form>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string,
  onFetchProducts: PropTypes.func
};

const mapStateToProps = state => ({ query: getSearchQuery(state) || "" });

const mapDispatchToProps = dispatch => ({
  onFetchProducts: query => dispatch(doPerformSearch(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
