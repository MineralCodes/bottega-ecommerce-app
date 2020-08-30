import React, { Component } from "react";
import { UnderlinedTitle, InfoTitle } from "./infoHelp";

import { connect } from "react-redux";

class OrderSummary extends Component {
	render() {
		let subtotal = 0;
		let amtStickers = 0;
		const taxRate = 0.08;
		const shipping = 0;

		this.props.cartProducts.map((cartProduct) => {
			subtotal += cartProduct.quantity * cartProduct.product.price;
			amtStickers += cartProduct.quantity;
		});

		const tax = subtotal * taxRate;
		const { className } = this.props;
		return (
			<div className={`${className} order-summary`}>
				<UnderlinedTitle
					className="order-summary__title"
					title="Order Summary"
				/>
				<InfoTitle
					className="order-summary__quantity"
					title={`${amtStickers} stickers`}
					value={`$${subtotal.toFixed(2)}`}
				/>
				<InfoTitle
					className="order-summary__tax-shipping"
					title="Taxes &amp; Shipping"
					value={`$${(tax * subtotal + shipping).toFixed(2)}`}
				/>
				<InfoTitle
					className="order-summary__total info-title-green"
					title="Total"
					value={`$${(subtotal + tax + shipping).toFixed(2)}`}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { cartProducts } = state.user;
	return { cartProducts };
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;
