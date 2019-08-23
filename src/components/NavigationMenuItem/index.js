import { Icon, Link, interfaceUI } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const NavigationMenuItem = props => {
	const { children, icon, link, onClick } = props;

	return (
		<li>
			<Link
				to={link}
				onClick={onClick}
				css={css`
					${interfaceUI.small(theme)};
					text-decoration: none;
					border-bottom: 1px solid ${theme.colors.neutral.grey800};
					color: ${theme.colors.neutral.white};

					&:hover {
						color: #a42769;
					}

					@media screen and (max-width: 639px) {
						display: block;
						width: 100%;
						padding: 1.6rem 1.6rem;
					}

					@media screen and (min-width: 640px) {
						display: flex;
						flex-direction: column;
						align-items: center;
						grid-gap: 4px;
						padding: 16px 8px;
						font-size: 1.6rem;
					}
				`}
			>
				<Icon
					name={icon}
					css={css`
						margin-right: 1.6rem;
					`}
				/>
				{children}
			</Link>
		</li>
	);
};

export default NavigationMenuItem;
