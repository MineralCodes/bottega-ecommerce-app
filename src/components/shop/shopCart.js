import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import history from "../../history";

import CartProduct from "./shopCartProduct";

function CartContent({ className, products }) {
	let count = products.length;
	let productJSX = products.map((product) => (
		<CartProduct {...product} key={product._id} />
	));
	return (
		<div className={`${className} cart-content`}>
			<div className="cart-content__title">Cart ({count})</div>
			<div className="cart-content__products">{productJSX}</div>
			<CartFooter className="cart-content__footer" products={products} />
		</div>
	);
}

function CartFooter({ className, products }) {
	let subtotal = 0;
	products.map((cartProduct) => {
		subtotal += cartProduct.quantity * cartProduct.product.price;
	});
	return (
		<div className={`${className} cart-footer`}>
			<a
				onClick={() => history.push("/order/review")}
				className="cart-footer__checkout"
			>
				Checkout
			</a>
			<div className="cart-footer__subtotal">Subtotal</div>
			<div className="cart-footer__price">{subtotal.toFixed(2)}</div>
		</div>
	);
}

class ShopCart extends Component {
	handleAddToCart = () => {
		let cart = document.getElementById("shop-cart");

		if (cart.classList.contains("cart-hidden")) {
			cart.classList.remove("cart-hidden");
		} else {
			cart.classList.add("cart-hidden");
		}
	};

	componentDidMount() {
		this.props.fetchCartProducts();
	}

	render() {
		const { className } = this.props;
		return (
			<div
				id="shop-cart"
				className={`${className} shop-cart cart-hidden`}
			>
				<CartContent
					className="shop-cart__content"
					products={this.props.cartProducts}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { cartProducts } = state.user;
	return { cartProducts };
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;
