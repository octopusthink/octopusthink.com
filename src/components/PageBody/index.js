import { PageTitle, Paragraph, heading } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const PageBody = props => {
	const { children, pageTitle, summary } = props;
	return (
		<article
			css={css`
				background: ${theme.colors.neutral.white};
				padding: 1.6rem;
				margin-top: 6.4rem;
			`}
		>
			{children}
		</article>
	);
};

export default PageBody;
