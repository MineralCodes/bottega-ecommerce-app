import React, { Component } from "react";

export default class componentName extends Component {
	renderChildren() {
		const { links, info } = this.props;
		let children = [];
		if (links) {
			children = links.map((link) => {
				return (
					<a key={link._id} onClick={link.onClick} className={link.className}>
						{link.title}
					</a>
				);
			});
		} else if (info) {
			children = info.map((item) => {
				return (
					<div key={item._id} className={item.className}>
						{item.title}
					</div>
				);
			});
		}

		return children;
	}

	render() {
		const { className, title, links } = this.props;
		return (
			<div className={`${className} details`}>
				<div className="details__title">{title}</div>
				<div className="details__links">{this.renderChildren()}</div>
			</div>
		);
	}
}
