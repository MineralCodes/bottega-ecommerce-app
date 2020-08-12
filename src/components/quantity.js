import React, { Component } from "react";

class QuantityCounter extends Component {
	render() {
		const { className, quantity } = this.props;
		return (
			<div className="quantity">
				<div className="quantiy__count">{quantity}</div>
				<div className="quantity__plus">
					<i className="fas fa-plus"></i>
				</div>
				<div className="quantity__minus">
					<i className="fas fa-minus"></i>
				</div>
			</div>
		);
	}
}

export default QuantityCounter;
