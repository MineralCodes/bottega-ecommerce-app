import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from "../../history";

import OrderSummary from "./orderSummary";
import ShippingSummary from "./shippingSummary";

import { FormInput, FormButton } from "../formFields";

class PaymentForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;

		return (
			<form
				className={`${className} payment-form`}
				onSubmit={handleSubmit}
			>
				<Field
					className="payment-form__name"
					type="text"
					title="Name on Credit Card"
					placeholder="Name"
					name="name"
					component={FormInput}
				/>

				<Field
					className="payment-form__card"
					type="text"
					title="Credit Card Number"
					placeholder="____-____-____-____"
					name="card"
					component={FormInput}
				/>

				<Field
					className="payment-form__expiration"
					type="text"
					title="Expiration Date"
					placeholder="MM/YYYY"
					name="expiration"
					component={FormInput}
				/>

				<Field
					className="payment-form__ccv"
					type="text"
					title="CCV Number"
					placeholder="CCV"
					name="ccv"
					component={FormInput}
				/>

				<div className="payment-form__line"></div>

				<Field
					className="payment-form__submit"
					onClick={() => history.push("/account")}
					type="submit"
					title="Pay and Complete Order"
					name="login"
					component={FormButton}
				/>

				<Field
					className="payment-form__back"
					onClick={() => history.push("/information/address")}
					type="button"
					title="Back"
					name="back"
					short={true}
					component={FormButton}
				/>

				<OrderSummary className="payment-form__summary" />
				<ShippingSummary
					className="payment-form__shipping-info"
					title="Shipping To"
				/>
			</form>
		);
	}
}

PaymentForm = reduxForm({
	form: "PaymentForm",
})(PaymentForm);

export default PaymentForm;
