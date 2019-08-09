// import { Icon, Link } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

import logo from '../../../static/logomark.png';

export const Logo = props => {
	const { size } = props;
	return (
		<img
			alt="Octopus Think logo. An abstract outline of an octopus with a lightbulb filament inside it."
			css={css`
				height: ${size};
				width: ${size};
			`}
			src={logo}
		/>
	);
};

Logo.defaultProps = {
	size: '128px',
};

export default Logo;
