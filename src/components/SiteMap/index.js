import { Link } from '@octopusthink/nautilus';
import React, { useState } from 'react';
import { css } from '@emotion/core';

import SiteMapItem from '../SiteMapItem';
import theme from '../../../config/theme';

const SiteMap = () => {
	return (
		<nav
			role="navigation"
			css={css`
				margin-bottom: 3.2rem;
			`}
		>
			<ul
				css={css`
					list-style-type: none;
					margin: 0;
					padding: 0;
				`}
			>
				<SiteMapItem icon="compass" link="/">
					Home
				</SiteMapItem>

				<SiteMapItem icon="help-circle" link="/about">
					Who we are
				</SiteMapItem>

				<SiteMapItem icon="coffee" link="/services">
					What we do
				</SiteMapItem>

				<SiteMapItem icon="camera" link="/work">
					Some of our work
				</SiteMapItem>

				<SiteMapItem icon="send" link="/contact">
					Contact us
				</SiteMapItem>
			</ul>
		</nav>
	);
};

export default SiteMap;
