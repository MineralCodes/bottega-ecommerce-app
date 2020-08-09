import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Shop extends Component {
	componentDidMount() {
		const headerLinks = [
			{
				_id: 0,
				title: "Login",
				path: "/signin",
			},
		];

		this.props.setHeaderLinks(headerLinks);
		this.props.fetchShopCategories();
		// fetch Shop Products
		// fetch navbar links
		// set navbar links
		// filter products with links
	}

	render() {
		return <div className="shop">This is the shop/homepage</div>;

		{
			/*
		searchbar
		shop products
		cart button
	*/
		}
	}
}

function mapStateToProps(state) {
	return { state };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
