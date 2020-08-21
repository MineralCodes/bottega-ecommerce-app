import React from "react";

export default function CartButton({ className, icon, onClick }) {
	return (
		<a className={`${className} cart-button`} onClick={onClick}>
			<i className={`fas fa-${icon}`} />
		</a>
	);
}
