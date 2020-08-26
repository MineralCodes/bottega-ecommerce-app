import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormInput, FormButton } from "../formFields";

class PaymentForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;

		return (
			<form
				className={`${className} sign-up-form`}
				onSubmit={handleSubmit}
			>
				<Field
					className="sign-up-form__name"
					type="text"
					title="Name"
					placeholder="Name"
					name="name"
					component={FormInput}
				/>

				<Field
					className="sign-up-form__email"
					type="email"
					title="Email"
					placeholder="Email"
					name="email"
					component={FormInput}
				/>

				<Field
					className="sign-up-form__password"
					type="password"
					title="Password"
					placeholder="Password"
					name="password"
					component={FormInput}
				/>
				<Field
					className="sign-up-form__confirm"
					type="confirm"
					title="Confirm Password"
					placeholder="Confirm Password"
					name="confirm"
					component={FormInput}
				/>
				<div className="sign-up-form__line"></div>

				<Field
					className="sign-up-form__login"
					onClick={() => history.push("/account")}
					type="submit"
					title="Sign Up"
					name="login"
					component={FormButton}
				/>

				<Field
					className="sign-up-form__back"
					onClick={() => history.push("/")}
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

PaymentForm = reduxForm({
	form: "PaymentForm",
})(PaymentForm);

export default PaymentForm;
