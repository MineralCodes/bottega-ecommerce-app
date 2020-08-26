import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormButton } from "../formFields";
import OrderReviewProducts from "./orderReviewProducts";
import GreenPriceTag from "../greenPriceTag";

class OrderReviewForm extends Component {
	render() {
		const { className, handleSubmit, subtotal } = this.props;
		const tax = subtotal * 0.08;
		const shipping = 0.0;

		return (
			<form
				className={`${className} order-review-form`}
				onSubmit={handleSubmit}
			>
				<div className="order-review-form__legend">
					<div className="order-review-form__legend__name">Name</div>
					<div className="order-review-form__legend__quantity">
						Quantity
					</div>
					<div className="order-review-form__legend__price">
						Price
					</div>
				</div>

				<OrderReviewProducts className="order-review-form__products" />

				<div className="order-review-form__line"></div>

				<Field
					className="order-review-form__proceed"
					onClick={() => history.push("/signin")}
					type="submit"
					title="Proceed To Checkout"
					name="proceed"
					component={FormButton}
				/>

				<Field
					className="order-review-form__back"
					onClick={() => history.push("/shop")}
					type="button"
					title="Back"
					name="back"
					short={true}
					component={FormButton}
				/>

				<div className="order-review-form__details review-details">
					<div className="review-details__subtotal review-detail">
						<div className="review-detail__title">Subtotal</div>
						<div className="review-detail__price">
							${subtotal.toFixed(2)}
						</div>
					</div>
					<div className="review-details__tax review-detail">
						<div className="review-detail__title">Tax</div>
						<div className="review-detail__price">
							${tax.toFixed(2)}
						</div>
					</div>

					<div className="review-details__shipping review-detail">
						<div className="review-detail__title">Shipping</div>
						<div className="review-detail__price">
							${shipping.toFixed(2)}
						</div>
					</div>

					<div className="review-details__total review-detail">
						<div className="review-detail__title">Total</div>
						<div className="review-detail__price">
							<GreenPriceTag
								className="review-detail__total__price"
								title={(subtotal + tax + shipping).toFixed(2)}
							/>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

OrderReviewForm = reduxForm({
	form: "OrderReviewForm",
})(OrderReviewForm);

export default OrderReviewForm;
