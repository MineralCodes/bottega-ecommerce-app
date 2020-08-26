import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import PageTitle from "../pageTitle";
import OrderReviewForm from "./orderReviewForm";

class OrderReview extends Component {
	componentDidMount() {
		this.props.setHeaderLinks([
			{
				_id: 0,
				title: "Shop",
				path: "/shop",
			},
		]);
		this.props.setNavbarLinks([]);
	}

	onSubmit = (fields) => {
		console.log(fields);
	};

	render() {
		let subtotal = 0;
		this.props.cartProducts.map((cartProduct) => {
			subtotal += cartProduct.quantity * cartProduct.product.price;
		});

		return (
			<div className="order-review">
				<PageTitle
					title="Order Review"
					className="order-review__title"
				/>
				<OrderReviewForm
					className="order-review__form"
					handleSubmit={this.onSubmit}
					subtotal={subtotal}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { cartProducts } = state.user;
	return {
		cartProducts,
	};
}

OrderReview = connect(mapStateToProps, actions)(OrderReview);

export default OrderReview;
