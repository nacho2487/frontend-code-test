import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./CategoriesBreadcrumb.scss";

export function CategoriesBreadcrumb({ categories = [] }) {
	return (
		<nav aria-label="Menú de categorías">
			<ol
				className="categories-breadcrumb"
				itemScope
				itemType="http://schema.org/BreadcrumbList"
			>
				{categories.map((category, i) => (
					<li
						className="categories-breadcrumb-item"
						key={category}
						itemProp="itemListElement"
						itemScope
						itemType="http://schema.org/ListItem"
					>
						{!!i && (
							<span
								className="categories-breadcrumb-separator"
								itemProp="position"
								content={i}
							>
								&gt;
							</span>
						)}
						<a
							className="categories-breadcrumb-text"
							itemProp="item"
							href="/"
							aria-current={i === categories.length - 1 ? "page" : undefined}
						>
							<span itemProp="name">{category}</span>
						</a>
					</li>
				))}
			</ol>
		</nav>
	);
}

CategoriesBreadcrumb.propTypes = {
	categories: PropTypes.array.isRequired
};

const mapStateToProps = ({ categories }) => ({
	categories
});

export default connect(mapStateToProps)(CategoriesBreadcrumb);
