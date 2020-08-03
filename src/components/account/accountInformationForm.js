import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormInput, FormButton } from "../formFields";

class AccountInformationForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;

		return (
			<form
				className={`${className} account-information__form`}
				onSubmit={handleSubmit}
			>
				<Field
					className="account-information-form__name"
					type="name"
					title="Name"
					placeholder="Name"
					name="name"
					component={FormInput}
				/>

				<Field
					className="account-information-form__email"
					type="email"
					title="Email"
					placeholder="Email"
					name="email"
					component={FormInput}
				/>

				<Field
					className="account-information-form__street-address"
					type="street-address"
					title="Street Address"
					placeholder="Street Address"
					name="address"
					component={FormInput}
				/>

				<Field
					className="account-information-form__city"
					type="city"
					title="City"
					placeholder="City"
					name="city"
					component={FormInput}
				/>

				<Field
					className="account-information-form__state"
					type="state"
					title="State"
					placeholder="State"
					name="state"
					component={FormInput}
				/>

				<Field
					className="account-information-form__zipcode"
					type="zipcode"
					title="Zip Code"
					placeholder="Zip Code"
					name="zipcode"
					component={FormInput}
				/>

				{/* <Field
					className="account-information-form__password"
					type="password"
					title="Password"
					placeholder="Password"
					name="password"
					component={FormInput}
				/>
				<div className="account-information-form__line"></div>

				<Field
					className="account-information-form__login"
					onClick={() => history.push("/account")}
					type="submit"
					title="Login"
					name="login"
					component={FormButton}
				/> */}
			</form>
		);
	}
}

AccountInformationForm = reduxForm({
	form: "AccountInformationForm",
})(AccountInformationForm);

export default AccountInformationForm;
