import { SET_USER_PURCHASES } from "./types";

export function fetchUserPurchases() {
	return {
		type: SET_USER_PURCHASES,
		payload: [
			{
				_id: 0,
				total: 8.02,
				orderNumber: "AXF59812F",
				orderDate: new Date(),
				creditCard: "-0000",
				user: {
					name: "Jordan Hudgens",
					shippingAddress: "1234 West State St",
				},
			},
			{
				_id: 1,
				total: 18.3,
				orderNumber: "AXF86952F",
				orderDate: new Date(),
				creditCard: "-0000",
				user: {
					name: "Micah Gilbertson",
					shippingAddress: "203 West State St",
				},
			},
			{
				_id: 2,
				total: 11.0,
				orderNumber: "AXF795685F",
				orderDate: new Date(),
				creditCard: "-0000",
				user: {
					name: "Jordan Hudgens",
					shippingAddress: "1234 West State St",
				},
			},
			{
				_id: 3,
				total: 13.82,
				orderNumber: "AXF3569872F",
				orderDate: new Date(),
				creditCard: "-0000",
				user: {
					name: "Jordan Hudgens",
					shippingAddress: "1234 West State St",
				},
			},
			{
				_id: 4,
				total: 3.89,
				orderNumber: "AXF875698F",
				orderDate: new Date(),
				creditCard: "-0000",
				user: {
					name: "Max Nelson",
					shippingAddress: "8569 West State St",
				},
			},
			{
				_id: 5,
				total: 6.79,
				orderNumber: "AXF971563F",
				orderDate: new Date(),
				creditCard: "-0000",
				user: {
					name: "Kristine Hudgens",
					shippingAddress: "7968 West State St",
				},
			},
			{
				_id: 6,
				total: 42.24,
				orderNumber: "AXF975644F",
				orderDate: new Date(),
				creditCard: "-0000",
				user: {
					name: "Arthur Dent",
					shippingAddress: "6698 West State St",
				},
			},
			{
				_id: 7,
				total: 26.99,
				orderNumber: "AXF978564F",
				orderDate: new Date(),
				creditCard: "-0000",
				user: {
					name: "Jean Picard",
					shippingAddress: "1701 West State St",
				},
			},
		],
	};
}
