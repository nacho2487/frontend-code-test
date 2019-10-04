import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchBar.scss";

function SearchBar(props) {
  const [query, setQuery] = useState(props.query);

  const onSubmit = event => {
    event.preventDefault();
    if (query) {
      props.onFetchProducts(query);
    }
  };

  const onChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  return (
    <form className="bar-search col-10 pl-0" onSubmit={onSubmit}>
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

export default SearchBar;
