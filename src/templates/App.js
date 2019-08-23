import { css, Global } from '@emotion/core';
import Nautilus from '@octopusthink/nautilus';
import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import theme from '../../config/theme';

export const App = props => {
	const { children } = props;
	return (
		<Nautilus theme={theme} config={{ LinkComponent: Link }}>
			<Helmet>
				<meta
					name="description"
					content="Octopus Think: Software Design and Development. We design and build accessible, beautiful, and fun software."
				/>
				<title>Octopus Think</title>
			</Helmet>
			<Global
				styles={css`
					body {
						margin: 0;
					}
				`}
			/>
			<Header />
			<div
				css={css`
					max-width: 680px;
				`}
			>
				{children}
			</div>
		</Nautilus>
	);
};

export default App;
