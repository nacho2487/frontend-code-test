import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import MetaTags from "react-meta-tags";
import SearchResults from "./SearchResults";
import Product from "./Product";
import { doClearCategories } from "../actions/categories";
import { doClearSearchResults } from "../actions/searchResults";
import { getError } from "../selectors/fetchers";
import "./Body.scss";

export function Body({ error, resetSearch }) {
	if (error) {
		return (
			<div className="body-error">
				Lo sentimos, ha ocurrido un error. Intenta recargando la página.
			</div>
		);
	}

	return (
		<Switch>
			<Route
				exact
				path="/"
				render={() => {
					resetSearch();
					return (
						<MetaTags>
							<title>{`Mercado Libre`}</title>
							<meta
								name="description"
								content="La comunidad de compra y venta online más grande de América Latina"
							/>
						</MetaTags>
					);
				}}
			/>
			<Route exact path="/items" component={SearchResults} />
			<Route path="/items/:id" component={Product} />
		</Switch>
	);
}

Body.propTypes = {
	error: PropTypes.string,
	resetSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		error: getError(state)
	};
};

const mapDispatchToProps = dispatch => ({
	resetSearch: () => {
		dispatch(doClearCategories());
		dispatch(doClearSearchResults());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Body);
