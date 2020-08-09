import {
	SET_SHOP_CATEGORIES,
	SET_NAVBAR_LINKS,
	SET_SHOP_PRODUCTS,
} from "./types";

export function fetchShopCategories() {
	return {
		type: SET_NAVBAR_LINKS,
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
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum? Magni nihil eos facere molestiae unde natus ullam! Mollitia, expedita neque.",
				price: 1.99,
				belongsTo: [0, 1],
			},
			{
				_id: 1,
				title: "Graph Database",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum? Magni nihil eos facere molestiae unde natus ullam! Mollitia, expedita neque.",
				price: 1.99,
				belongsTo: [0, 6],
			},
			{
				_id: 2,
				title: "Full Stack Development",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum? Magni nihil eos facere molestiae unde natus ullam! Mollitia, expedita neque.",
				price: 1.99,
				belongsTo: [0, 1, 4],
			},
			{
				_id: 3,
				title: "Javascript Development",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum? Magni nihil eos facere molestiae unde natus ullam! Mollitia, expedita neque.",
				price: 1.99,
				belongsTo: [0, 1],
			},
			{
				_id: 4,
				title: "User Interface Design",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum? Magni nihil eos facere molestiae unde natus ullam! Mollitia, expedita neque.",
				price: 1.99,
				belongsTo: [0, 2, 5],
			},
			{
				_id: 5,
				title: "User Experience Design",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum? Magni nihil eos facere molestiae unde natus ullam! Mollitia, expedita neque.",
				price: 1.99,
				belongsTo: [0, 2],
			},
			{
				_id: 6,
				title: "Advanced Object Oriented Programming",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt, vero magnam, modi labore corporis qui veniam, ipsam error tenetur itaque. Consequuntur suscipit nisi voluptate fugiat natus sit magnam omnis facere cum, nobis, ea doloremque velit, dolore quas nostrum? Magni nihil eos facere molestiae unde natus ullam! Mollitia, expedita neque.",
				price: 1.99,
				belongsTo: [0, 4, 6],
			},
		],
	};
}
