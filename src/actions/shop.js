import {
	SET_SHOP_CATEGORIES,
	SET_NAVBAR_LINKS,
	SET_SHOP_PRODUCTS,
	FILTER_PRODUCTS_WITH_CATEGORY_ID,
	FILTER_PRODUCTS_WITH_QUERY,
} from "./types";

export function filterProductsWithQuery(fields) {
	return {
		type: FILTER_PRODUCTS_WITH_QUERY,
		payload: fields,
	};
}

export function filterProductsWithCategoryId(_id) {
	return {
		type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
		payload: _id,
	};
}

export function fetchShopCategories() {
	return {
		type: SET_SHOP_CATEGORIES,
		payload: [
			{
				_id: 0,
				title: "All",
				active: true,
			},
			{
				_id: 1,
				title: "Javascript",
				active: false,
			},
			{
				_id: 2,
				title: "UI/UX",
				active: false,
			},
			{
				_id: 3,
				title: "Linux",
				active: false,
			},
			{
				_id: 4,
				title: "Python",
				active: false,
			},
			{
				_id: 5,
				title: "UML",
				active: false,
			},
			{
				_id: 6,
				title: "Ruby",
				active: false,
			},
		],
	};
}

export function fetchShopProducts() {
	return {
		type: SET_SHOP_PRODUCTS,
		payload: [
			{
				_id: 0,
				title: "Javascript in the browser",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum?",
				price: 1.99,
				belongsTo: [0, 1],
				imageUrl: "http://via.placeholder.com/80x80",
			},
			{
				_id: 1,
				title: "Graph Database",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum?",
				price: 1.99,
				belongsTo: [0, 6],
				imageUrl: "http://via.placeholder.com/80x80",
			},
			{
				_id: 2,
				title: "Full Stack Development",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum?",
				price: 1.99,
				belongsTo: [0, 1, 4],
				imageUrl: "http://via.placeholder.com/80x80",
			},
			{
				_id: 3,
				title: "Javascript Development",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum?",
				price: 1.99,
				belongsTo: [0, 1],
				imageUrl: "http://via.placeholder.com/80x80",
			},
			{
				_id: 4,
				title: "User Interface Design",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum?",
				price: 1.99,
				belongsTo: [0, 2, 5],
				imageUrl: "http://via.placeholder.com/80x80",
			},
			{
				_id: 5,
				title: "User Experience Design",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum?",
				price: 1.99,
				belongsTo: [0, 2],
				imageUrl: "http://via.placeholder.com/80x80",
			},
			{
				_id: 6,
				title: "Advanced Object Oriented Programming",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum?",
				price: 1.99,
				belongsTo: [0, 4, 6],
				imageUrl: "http://via.placeholder.com/80x80",
			},
		],
	};
}
