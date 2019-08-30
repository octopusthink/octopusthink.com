import { css, Global } from '@emotion/core';
import Nautilus from '@octopusthink/nautilus';
import { Link } from 'gatsby';
import React from 'react';
import 'typeface-inter';

import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import theme from '../../config/theme';
import SEO from '../components/SEO';

export const App = props => {
	const { children } = props;
	const lang = `en`;
	return (
		<Nautilus theme={theme} config={{ LinkComponent: Link }}>
			<SEO title="Home" />
			<Global
				styles={css`
					body {
						margin: 0;
					}
				`}
			/>
			<SiteHeader />
			<main id="content">{children}</main>
			<SiteFooter />
		</Nautilus>
	);
};

export default App;
