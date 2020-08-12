import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import SearchBar from "./shopSearchBar";
import ShopProduct from "./shopProducts";

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
						return <ShopProduct {...product} key={product._id} />;
					})}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { categories, filteredProducts } = state.shop;
	return { categories, filteredProducts };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
