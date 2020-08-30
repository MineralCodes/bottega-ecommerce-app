import React, { Component } from "react";
import { connect } from "react-redux";

import { UnderlinedTitle } from "./infoHelp";

class ShippingSummary extends Component {
	render() {
		const { className, title } = this.props;
		return (
			<div className={`${className} shipping-info`}>
				<UnderlinedTitle
					className="shipping-info__title"
					title={title}
				/>
				<div className="shipping-info__name small-text">
					{this.props.name}
				</div>
				<div className="shipping-info__address small-text">
					{this.props.address}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { name, address } = state.user.user;
	return { name, address };
}

ShippingSummary = connect(mapStateToProps)(ShippingSummary);

export default ShippingSummary;
