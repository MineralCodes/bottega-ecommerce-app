import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Purchases extends Component {
	componentDidMount() {
		this.props.fetchUserPurchases();
	}

	render() {
		const { classname } = this.props;
		return (
			<div className={`${classname} purchases`}>
				{this.props.purchases.map((purchase) => {
					return <div>{purchase.title}</div>;
				})}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { purchases } = state.user;
	return { purchases };
}

Purchases = connect(mapStateToProps, actions)(Purchases);

export default Purchases;
