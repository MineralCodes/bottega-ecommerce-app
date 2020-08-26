import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

import history from "./history";
import Layout from "./components/layout";
import Shop from "./components/shop/shop";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import Account from "./components/account/account";
import OrderReview from "./components/order/orderReview";

const createStoreWithMiddleware = applyMiddleware()(
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: (f) => f
	)(createStore)
);

import "./style/main.scss";

function main() {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<Router history={history}>
				<Layout>
					<Switch>
						<Route exact path="/" component={Shop} />
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/account" component={Account} />
						<Route exact path="/shop" component={Shop} />
						<Route
							exact
							path="/order/review"
							component={OrderReview}
						/>
					</Switch>
				</Layout>
			</Router>
		</Provider>,
		document.querySelector(".app-wrapper")
	);
}

document.addEventListener("DOMContentLoaded", main);
