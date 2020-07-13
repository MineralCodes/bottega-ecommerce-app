import React, { Component } from "react";
import Header from "./header-nav/header";
import NavBar from "./header-nav/navbar";

export default class Layout extends Component {
	render() {
		return (
			<div className="layout">
				{this.props.children}
				<Header />
				<NavBar />
			</div>
		);
	}
}
