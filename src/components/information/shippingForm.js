import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormInput, FormButton } from "../formFields";
import OrderSummary from "./orderSummary";

class ShippingForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;

		return (
			<form
				className={`${className} shipping-form`}
				onSubmit={handleSubmit}
			>
				<Field
					className="shipping-form__name"
					type="text"
					title="Name"
					placeholder="Name"
					name="name"
					component={FormInput}
				/>

				<Field
					className="shipping-form__address"
					type="text"
					title="Street Address"
					placeholder="Street Address"
					name="address"
					component={FormInput}
				/>

				<Field
					className="shipping-form__city"
					type="text"
					title="City"
					placeholder="City"
					name="city"
					component={FormInput}
				/>

				<Field
					className="shipping-form__state"
					type="text"
					title="State"
					placeholder="State"
					name="state"
					component={FormInput}
				/>

				<Field
					className="shipping-form__zip"
					type="text"
					title="Zip Code"
					placeholder="Zip Code"
					name="zip"
					component={FormInput}
				/>

				<div className="shipping-form__line"></div>

				<Field
					className="shipping-form__use-address"
					onClick={() => history.push("/information/payment")}
					type="submit"
					title="Use This Address"
					name="use-this-address"
					component={FormButton}
				/>

				<Field
					className="shipping-form__back"
					onClick={() => history.push("/order/review")}
					type="button"
					title="Back"
					name="back"
					short={true}
					component={FormButton}
				/>

				<OrderSummary className="shipping-form__summary" />
			</form>
		);
	}
}

ShippingForm = reduxForm({
	form: "ShippingForm",
})(ShippingForm);

export default ShippingForm;
