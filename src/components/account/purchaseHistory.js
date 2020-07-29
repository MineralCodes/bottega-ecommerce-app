import React, { Component } from "react";

import PageTitle from "../pageTitle";
import Purchases from "./purhcases";
import PurchaseDetail from "./purchaseDetail";

export default class PurchaseHistory extends Component {
	render() {
		return (
			<div className="purchase-history">
				<PageTitle
					className="purchase-history__page-title"
					title="Purchase History"
				/>
				<div className="purchase-history__content">
					<Purchases className="purchase-history__purchases" />
					<PurchaseDetail className="purchase-history__purchase-detail" />
				</div>
				<div className="purchase-history__bottom-border"></div>
			</div>
		);
	}
}
