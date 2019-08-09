import Nautilus from '@octopusthink/nautilus';
import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';

export const App = props => {
	const { children } = props;
	return (
		<Nautilus config={{ LinkComponent: Link }}>
			<Helmet>
				<meta
					name="description"
					content="Octopus Think: Software Design and Development. We design and build accessible, beautiful, and fun software."
				/>
				<title>Octopus Think</title>
			</Helmet>
			<Header />
			{children}
		</Nautilus>
	);
};

export default App;
