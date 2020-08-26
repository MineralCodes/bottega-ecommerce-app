import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

// import SignInForm from "./signInForm";
import PageTitle from "../pageTitle";

class Shipping extends Component {
	componentDidMount() {
		this.props.setHeaderLinks([]);
		this.props.setNavbarLinks([]);
	}

	onSubmit = (fields) => {
		console.log(fields);
	};

	render() {
		return (
			<div className="sign-in">
				<PageTitle
					className="sign-in__title"
					title="Shipping Information"
				/>
				{/* <ShippingForm
					onSubmit={this.onSubmit}
					className="sign-in__form"
				/> */}
			</div>
		);
	}
}

Shipping = connect(null, actions)(Shipping);

export default Shipping;
