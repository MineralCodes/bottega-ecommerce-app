import React, { Component } from "react";

import SignUpForm from "./signUpForm";
import PageTitle from "../pageTitle";

class SignUp extends Component {
	onSubmit = (fields) => {
		console.log(fields);
	};

	render() {
		return (
			<div className="sign-up">
				<PageTitle className="sign-up__title" title="Login" />
				<SignUpForm onSubmit={this.onSubmit} className="sign-up__form" />
			</div>
		);
	}
}

export default SignUp;
