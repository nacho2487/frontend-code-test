import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Product.scss";
import {
  currencyToFormatParts,
  currencyToFormattedString
} from "../util/currency";

export function Product({ item }) {
  const { condition, description, picture, price, sold_quantity, title } = item;
  const conditionText = condition === "new" ? "Nuevo" : "Usado";
  const priceFormatParts = currencyToFormatParts(price.currency, price.amount);
  const priceFormattedText = currencyToFormattedString(
    price.currency,
    price.amount
  );
  return (
    <div className="product">
      <div className="row">
        <div className="col-12 col-md-8">
          <img className="product-picture" src={picture} alt={title} />
        </div>
        <div className="col-12 col-md-4">
          <div className="product-conditions">{`${conditionText} - ${sold_quantity} vendidos`}</div>
          <header>
            <h1 className="product-header-title">{title}</h1>
          </header>
          <div className="product-price">
            {priceFormatParts &&
              priceFormatParts.map(part => (
                <span key={part.type} className={`product-price-${part.type}`}>
                  {part.value}
                </span>
              ))}
            {!priceFormatParts && priceFormattedText}
          </div>
          <button
            className="btn btn-success product-btn-buy"
            title={`Comprar ${title}`}
          >
            Comprar
          </button>
        </div>
      </div>
      <div>
        <h2 className="product-header-description">Descripción del producto</h2>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired
};

const mapStateToProps = ({ currentProduct }) => ({
	item: currentProduct
});

export default connect(mapStateToProps)(Product);

