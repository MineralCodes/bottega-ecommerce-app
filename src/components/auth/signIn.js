import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import history from "../../history";

import SignInForm from "./signInForm";
import PageTitle from "../pageTitle";

class SignIn extends Component {
	componentDidMount() {
		this.props.setHeaderLinks([]);
		this.props.setNavbarLinks([]);
	}

	onSubmit = (fields) => {
		this.props.signIn(fields);
		this.props.history.push("/account");
	};

	render() {
		return (
			<div className="sign-in">
				<PageTitle className="sign-in__title" title="Login" />
				<SignInForm
					onSubmit={this.onSubmit}
					className="sign-in__form"
				/>
			</div>
		);
	}
}

SignIn = connect(null, actions)(SignIn);

export default SignIn;
