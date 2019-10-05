import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "../store";
import "./App.scss";
import { APP_ROOT_ELEMENT_ID } from "../constants";
import Header from "./Header";
import CategoriesBreadcrumb from "./CategoriesBreadcrumb";
import Body from "./Body";

const store = configureStore();

function App() {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div className="App">
					<Header />
					<main className="container" role="main" id={`${APP_ROOT_ELEMENT_ID}`}>
						<div className="row no-gutters">
							<div className="col-10 offset-1">
								<CategoriesBreadcrumb />
								<div className="app-body">
									<Body />
								</div>
							</div>
						</div>
					</main>
				</div>
			</ConnectedRouter>
		</Provider>
	);
}

export default App;
