import { Icon, Link, heading } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';
import theme from '../../../config/theme';

const SiteHeader = () => {
	return (
		<header
			css={css`
				background: ${theme.colors.neutral.black};
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.8rem 0.8rem 0.8rem 1.6rem;
			`}
		>
			<Link
				to="/"
				css={css`
					display: flex;
					align-items: center;
					border: 0;
				`}
			>
				<Logo />
				<p
					css={css`
						${heading.small(theme)};
						margin: 0 0 0 0.8rem;
					`}
				>
					<span
						css={css`
							color: ${theme.colors.neutral.white};
						`}
					>
						octopus
					</span>
					<span
						css={css`
							color: ${theme.colors.accent.primary};
						`}
					>
						think
					</span>
				</p>
			</Link>

			<NavigationMenu />
		</header>
	);
};

export default SiteHeader;
