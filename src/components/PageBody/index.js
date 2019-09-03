import { PageTitle, Paragraph } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const PageBody = props => {
  const { children, pageTitle, summary } = props;
  return (
    <article
      css={css`
				background: ${theme.colors.neutral.white};
				margin: 6.4rem 0;
				padding: ${theme.site.mobilePadding};
				min-height: 70vh;
				display: flex;
				align-items: center;

				@media screen and (min-width: 640px) {
					padding: ${theme.site.tabletPadding};
				}
				@media screen and (min-width: 1024px) {
					padding: ${theme.site.desktopPadding};
					max-width: ${theme.site.maxContentWidth};
				}
			`}
    >
      {children}
    </article>
  );
};

export default PageBody;
