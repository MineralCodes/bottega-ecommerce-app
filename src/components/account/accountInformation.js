import React, { Component } from "react";
import PageTitle from "../pageTitle";
import AccountInformationForm from "./accountInformationForm";

export default class AccountInformation extends Component {
	onSubmit = (fields) => {
		console.log(fields);
	};

	render() {
		return (
			<div className="account-information">
				<PageTitle
					className="account-information-title"
					title="Account Information"
				/>
				<AccountInformationForm
					onSubmit={this.onSubmit}
					className="account-information-form"
				/>
			</div>
		);
	}
}
