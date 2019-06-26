import React, { Component } from 'react';
import { Link } from 'gatsby';
import './Footer.css';

class Footer extends Component {
	render() {
		const { config } = this.props;
		const url = config.siteRss;
		const { copyright } = config;
		if (!copyright) {
			return null;
		}
		return (
			<footer className="footer">
				<div className="notice-container">
					<p>
						<strong>Octopus Think Ltd.</strong>
						<br />
						Copyright © 2019
						<br />
						UK Registered Company No. 11747595
						<br />
						VAT ID: GB324954685
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
