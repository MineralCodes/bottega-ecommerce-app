import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

import history from "./history";
import Layout from "./components/layout";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";

const createStoreWithMiddleware = applyMiddleware()(
	compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)(
		createStore
	)
);

import "./style/main.scss";

function main() {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<Router history={history}>
				<Layout>
					<Switch>
						<Route exact path="/" component={SignIn} />

						<Route path="/signup" component={SignUp} />
					</Switch>
				</Layout>
			</Router>
		</Provider>,
		document.querySelector(".app-wrapper")
	);
}

document.addEventListener("DOMContentLoaded", main);
