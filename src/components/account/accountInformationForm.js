import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormInput, FormButton, LongGreyButton } from "../formFields";

class AccountInformationForm extends Component {
	constructor() {
		super();

		this.state = {
			showPasswords: false,
		};
	}

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

				{this.state.showPasswords ? (
					[
						<Field
							key={0}
							className="account-information-form__current"
							type="password"
							title="Current Password"
							placeholder="Current Password"
							name="current"
							component={FormInput}
						/>,
						<Field
							key={1}
							className="account-information-form__new"
							type="password"
							title="New Password"
							placeholder="New Password"
							name="new"
							component={FormInput}
						/>,
						<Field
							key={2}
							className="account-information-form__confirm"
							type="password"
							title="Confirm Password"
							placeholder="Confirm Password"
							name="confirm"
							component={FormInput}
						/>,
						<div
							key={3}
							className="account-information-form__line"
						></div>,

						<Field
							key={4}
							className="account-information-form__update-information"
							onClick={() =>
								this.setState({ showPasswords: false })
							}
							type="submit"
							title="Update Information"
							name="update-information"
							component={FormButton}
						/>,

						<Field
							key={5}
							className="account-information-form__cancel"
							onClick={() =>
								this.setState({ showPasswords: false })
							}
							type="button"
							title="Cancel"
							name="cancel"
							short={true}
							component={FormButton}
						/>,
					]
				) : (
					<Field
						className="account-information-form__change-password"
						onClick={() => this.setState({ showPasswords: true })}
						type="button"
						buttonName="Password"
						title="Change Password"
						name="change-password"
						component={LongGreyButton}
					/>
				)}
			</form>
		);
	}
}

AccountInformationForm = reduxForm({
	form: "AccountInformationForm",
})(AccountInformationForm);

export default AccountInformationForm;
