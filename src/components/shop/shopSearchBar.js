import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

function FormSearchBar(props) {
	return (
		<div className="search-bar-grid">
			<i class="fas fa-search search-bar-grid__icon"></i>
			<input
				className={`${props.className} form-search-bar search-bar-grid__field`}
				{...props.input}
				type="text"
				placeholder={`${props.placeholder}`}
			/>
		</div>
	);
}

class SearchBar extends Component {
	render() {
		const { className, handleSubmit } = this.props;
		return (
			<form
				onSubmit={handleSubmit}
				className={`${className} shop-search-bar`}
			>
				<Field
					name="shopSearchBar"
					className="shop-search-bar__form-search-bar"
					placeholder="Search"
					component={FormSearchBar}
				/>
			</form>
		);
	}
}

SearchBar = reduxForm({
	form: "ShopSearchBar",
})(SearchBar);

export default SearchBar;
