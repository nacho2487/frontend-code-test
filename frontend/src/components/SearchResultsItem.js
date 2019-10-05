import React from "react";
import PropTypes from "prop-types";
import "./SearchResultsItem.scss";
import IconShipping from "../assets/ic_shipping.png";
import IconShipping_2x from "../assets/ic_shipping@2x.png";

function SearchResultsItem({ item }) {
  return (
    <div className="row no-gutters">
      <div className="col-3">
        <img
          className="search-result-item-photo"
          src={item.picture}
          alt={item.title}
        />
      </div>
      <div className="search-result-item-info col-7 col-md-8">
        <div className="search-result-item-info-header">
          <div className="search-result-item-price">
            {`${item.price.currency} ${item.price.amount}`}
          </div>
          {item.free_shipping && (
            <img
              className="search-result-item-free-shipping"
              src={IconShipping}
              srcSet={`${IconShipping} 1x, ${IconShipping_2x} 2x`}
              alt="Envío gratis"
            />
          )}
        </div>
        <div className="search-result-item-title">{item.title}</div>
      </div>
      <div className="search-result-item-area col-2 col-md-1" />
    </div>
  );
}

SearchResultsItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default SearchResultsItem;
