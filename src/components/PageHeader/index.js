import { PageTitle, Paragraph, Tags, heading } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';
import theme from '../../../config/theme';
import divider from '../../../static/divider.svg';

const PageHeader = props => {
	const { children, metadata, pageTitle, summary } = props;
	return (
		<header
			css={css`
				background: ${theme.colors.neutral.black};
				padding: ${theme.site.mobilePadding};
				position: relative;

				@media screen and (min-width: 640px) {
					padding: ${theme.site.tabletPadding};
				}
				@media screen and (min-width: 1024px) {
					padding: ${theme.site.desktopPadding};
				}

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
			{metadata && (
				<Tags>
					<Tags.Tag>{metadata}</Tags.Tag>
				</Tags>
			)}
			<PageTitle
				css={css`
					color: white;
					margin: 0.8rem 0 3.2rem 0;
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
