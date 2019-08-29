import { css, Global } from '@emotion/core';
import Nautilus from '@octopusthink/nautilus';
import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import theme from '../../config/theme';
import config from '../../data/SiteConfig';

export const App = props => {
	const { children } = props;
	const lang = `en`;
	return (
		<Nautilus theme={theme} config={{ LinkComponent: Link }}>
			<Helmet
				htmlAttributes={{
					lang,
				}}
			>
				<meta
					name="description"
					content="Octopus Think: Software Design and Development. We design and build accessible, beautiful, and fun software."
				/>
				<title>{config.siteTitle}</title>
			</Helmet>
			<Global
				styles={css`
					body {
						margin: 0;
					}
				`}
			/>
			<SiteHeader />
			{children}
			<SiteFooter />
		</Nautilus>
	);
};

export default App;
