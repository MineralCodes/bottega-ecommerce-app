import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import SearchBar from "./shopSearchBar";

class Shop extends Component {
	onSubmit = (fields) => {
		this.props.filterProductsWithQuery(fields);
	};

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
		this.props.fetchShopProducts();
		// fetch navbar links
		// set navbar links
		// filter products with links
	}

	shouldComponentUpdate(nextProps) {
		if (this.props != nextProps) {
			this.props.setNavbarLinks(nextProps.categories, (_id) =>
				this.props.filterProductsWithCategoryId(_id)
			);
		}
		return true;
	}

	render() {
		return (
			<div className="shop">
				<SearchBar
					onSubmit={this.onSubmit}
					className="shop__search-bar"
				/>
				<div className="shop__products">
					{this.props.filteredProducts.map((product) => {
						return (
							<div className="shop-product" key={product._id}>
								<div className="shop-product__title">
									{product.title}
								</div>
								<div className="shop-product__description">
									{product.description}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);

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
	const { categories, filteredProducts } = state.shop;
	return { categories, filteredProducts };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
