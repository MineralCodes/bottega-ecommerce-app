import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import PageTitle from "../pageTitle";

class OrderReview extends Component {
	componentDidMount() {
		this.props.setHeaderLinks([
			{
				_id: 0,
				title: "Shop",
				path: "/shop",
			},
		]);
		this.props.setNavbarLinks([]);
	}

	render() {
		return (
			<div className="order-review">
				<PageTitle
					title="Order Review"
					className="order-review__title"
				/>
			</div>
		);
	}
}

OrderReview = connect(null, actions)(OrderReview);

export default OrderReview;
