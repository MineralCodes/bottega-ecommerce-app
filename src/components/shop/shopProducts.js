import React, { Component } from "react";
import { connect } from "react-redux";

import Quantity from "../quantity";
import GreenPriceTag from "../greenPriceTag";

import * as actions from "../../actions";

class ShopProduct extends Component {
	handleAddToCart = () => {
		let cart = document.getElementById("shop-cart");

		if (cart.classList.contains("cart-hidden")) {
			cart.classList.remove("cart-hidden");
			const {
				_id,
				title,
				description,
				price,
				belongsTo,
				imageUrl,
			} = this.props;
			this.props.addCartProduct({
				_id,
				title,
				description,
				price,
				belongsTo,
				imageUrl,
			});
		} else {
			cart.classList.add("cart-hidden");
		}
	};

	render() {
		const { _id, title, description, price } = this.props;
		return (
			<div className="shop-product">
				<div className="shop-product__front">
					<img
						src="http://via.placeholder.com/220x220"
						className="shop-product__front__image"
					/>
					<div className="shop-product__front__title">{title}</div>
				</div>
				<div className="shop-product__back">
					<div className="shop-product__back__title">{title}</div>
					<div className="shop-product__back__description">
						{description}
					</div>
					<GreenPriceTag
						className="shop-product__back__price"
						title={price}
					/>
					<Quantity
						className="shop-product__back__quantity"
						quantity={1}
					/>
					<a
						className="shop-product__back__add-to-cart"
						onClick={() => this.handleAddToCart()}
					>
						Add to Cart
					</a>
				</div>
			</div>
		);
	}
}

ShopProduct = connect(null, actions)(ShopProduct);

export default ShopProduct;
