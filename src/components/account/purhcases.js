import React, { Component } from "react";

export default class Purchases extends Component {
	render() {
		const { classname } = this.props;
		return <div className={`${classname} purchases`}>These are the purhcases</div>;
	}
}
