import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormButton } from "../formFields";
import OrderReviewProducts from "./orderReviewProducts";

class OrderReviewForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;

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
			</form>
		);
	}
}

OrderReviewForm = reduxForm({
	form: "OrderReviewForm",
})(OrderReviewForm);

export default OrderReviewForm;
