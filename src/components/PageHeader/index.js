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
		<React.Fragment>
			<header
				css={css`
					background: ${theme.colors.neutral.black};
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: start;
					padding: 1.6rem;
					position: relative;

					::after {
						display: none;
						content: '';
						background: url(${divider}) no-repeat;
						background-size: contain;
						width: calc(100% + 3.2rem);
						height: 60px;
						margin: -2.4rem -1.6rem;
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
				<img
					css={css`
						width: 100%;
						height: auto;
						margin-top: -4rem;
						position: absolute;
						bottom: -3.2rem;
						left: 0;
						right: 0;
					`}
					src={divider}
				/>
			</header>
		</React.Fragment>
	);
};

export default PageHeader;
