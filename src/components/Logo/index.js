// import { Icon, Link } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

import logo from '../../../static/octopusthink-logomark.svg';

export const Logo = props => {
	const { size, mobileSize } = props;
	return (
		<img
			alt="Octopus Think logo. An abstract outline of an octopus with a lightbulb filament inside it."
			css={css`
				@media screen and (max-width: 639px) {
					height: ${mobileSize};
					width: ${mobileSize};
				}
				@media screen and (min-width: 640px) {
					height: ${size};
					width: ${size};
				}
			`}
			src={logo}
		/>
	);
};

Logo.defaultProps = {
	size: '12.8rem',
	mobileSize: '4.8rem',
};

export default Logo;
