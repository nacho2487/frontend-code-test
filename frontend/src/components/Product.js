import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import {
	currencyToFormatParts,
	currencyToFormattedString
} from "../util/currency";

function Product({ item }) {
	const conditionText = item.condition === "new" ? "Nuevo" : "Usado";
	const { price } = item;
	const priceFormatParts = currencyToFormatParts(price.currency, price.amount);
	const priceFormattedText = currencyToFormattedString(
		price.currency,
		price.amount
	);
	return (
		<div className="product">
			<div className="row">
				<div className="col-12 col-md-8">
					<img
						className="product-picture"
						src={item.picture}
						alt={item.title}
					/>
				</div>
				<div className="col-12 col-md-4">
					<div className="product-conditions">{`${conditionText} - ${item.sold_quantity} vendidos`}</div>
					<header>
						<h1 className="product-header-title">{item.title}</h1>
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
						title={`Comprar ${item.title}`}
					>
						Comprar
					</button>
				</div>
			</div>
			<div>
				<h2 className="product-header-description">Descripción del producto</h2>
				<p className="product-description">{item.description}</p>
			</div>
		</div>
	);
}

Product.propTypes = {
	item: PropTypes.object.isRequired
};

export default Product;
