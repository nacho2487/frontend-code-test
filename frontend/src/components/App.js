import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store";
import "./App.scss";
import { APP_ROOT_ELEMENT_ID } from "../constants/identifiers";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Product from "./Product";
import CategoriesBreadcrumb from "./CategoriesBreadcrumb";

function App() {
	return (
		<div className="App">
			<Header />
			<main className="container" role="main" id={`${APP_ROOT_ELEMENT_ID}`}>
				<div className="row no-gutters">
					<div className="col-10 offset-1">
						<CategoriesBreadcrumb />
						<div className="app-body">
							<ConnectedRouter history={history}>
								<Switch>
                  <Route exact path="/items" component={SearchResults} />
									<Route path="/items/:id" component={Product} />
								</Switch>
							</ConnectedRouter>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
