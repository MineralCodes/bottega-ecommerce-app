import React, { Component } from "react";

import { UnderlinedTitle } from "./infoHelp";

export default class ShippingSummary extends Component {
	render() {
		const { className, title } = this.props;
		return (
			<div className={`${className} shipping-info`}>
				<UnderlinedTitle
					className="shipping-info__title"
					title={title}
				/>
				<div className="shipping-info__name small-text">
					Jordan Hudgens
				</div>
				<div className="shipping-info__address small-text">
					123 example street
				</div>
			</div>
		);
	}
}
