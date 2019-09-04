import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const PageBody = props => {
	const { children } = props;
	return (
		<article
			css={css`
				background: ${theme.colors.neutral.white};
				margin: 6.4rem auto;
				padding: ${theme.site.mobilePadding};
				min-height: 70vh;
				justify-content: center;
				display: flex;
				flex-direction: column;

				@media screen and (min-width: 640px) {
					padding: ${theme.site.tabletPadding};
				}
				@media screen and (min-width: 1024px) {
					padding: ${theme.site.desktopPadding};
					max-width: ${theme.site.maxSiteWidth};
				}
			`}
		>
			<div
				css={css`
					max-width: ${theme.site.maxContentWidth};
				`}
			>
				{children}
			</div>
		</article>
	);
};

export default PageBody;
