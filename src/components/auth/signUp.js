import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import SignUpForm from "./signUpForm";
import PageTitle from "../pageTitle";

class SignUp extends Component {
	componentDidMount() {
		this.props.setHeaderLinks([]);
		this.props.setNavbarLinks([]);
	}

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

SignUp = connect(null, actions)(SignUp);

export default SignUp;
