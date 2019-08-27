import { PageTitle, Paragraph, heading } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';
import theme from '../../../config/theme';
import divider from '../../../static/divider.svg';

const PageHeader = props => {
	const { children, pageTitle, summary } = props;
	return (
		<header
			css={css`
				background: ${theme.colors.neutral.black};
				padding: 1.6rem;
				position: relative;

				::after {
					content: url(${divider});
					height: 60px;
					width: 100%;
					margin-top: -4rem;
					position: absolute;
					bottom: -3.2rem;
					left: 0;
					right: 0;
				}
			`}
		>
			<PageTitle
				css={css`
					color: white;
				`}
			>
				{pageTitle}
			</PageTitle>
			<Paragraph large inverse light>
				{summary}
			</Paragraph>

			{children}
		</header>
	);
};

export default PageHeader;
