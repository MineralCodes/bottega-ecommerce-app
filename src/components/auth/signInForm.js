import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormInput, FormButton } from "../formFields";
import Details from "../details";

class SignInForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;
		const links = [
			{
				_id: 0,
				title: "Not registered? Create account here",
				onClick: () => history.push("/signup"),
			},
			{
				_id: 1,
				title: "Forgot account email?",
				onClick: () => console.log("forgot email"),
			},
			{
				_id: 2,
				title: "Forgot password?",
				onClick: () => console.log("forgot password"),
			},
		];

		return (
			<form
				className={`${className} sign-in-form`}
				onSubmit={handleSubmit}
			>
				<Field
					className="sign-in-form__email"
					type="email"
					title="Email"
					placeholder="Email"
					name="email"
					component={FormInput}
				/>

				<Field
					className="sign-in-form__password"
					type="password"
					title="Password"
					placeholder="Password"
					name="password"
					component={FormInput}
				/>
				<div className="sign-in-form__line"></div>

				<Field
					className="sign-in-form__login"
					onClick={() => this.props.onSubmit}
					type="submit"
					title="Login"
					name="login"
					component={FormButton}
				/>

				<Details
					className="sign-in-form__details"
					title="Quick Links"
					links={links}
				/>
			</form>
		);
	}
}

SignInForm = reduxForm({
	form: "SignInForm",
})(SignInForm);

export default SignInForm;
