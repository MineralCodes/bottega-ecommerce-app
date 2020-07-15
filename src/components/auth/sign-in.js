import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class SignIn extends Component {
	render() {
		return <div className="signin">sign in</div>;
	}
}

SignIn = reduxForm({
	form: "SignIn",
})(SignIn);

export default SignIn;
