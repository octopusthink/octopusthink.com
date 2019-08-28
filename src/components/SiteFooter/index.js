import { Icon, Link, Paragraph, heading } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';
import divider from '../../../static/divider.svg';

const SiteFooter = () => {
	return (
		<footer
			css={css`
				background: ${theme.colors.neutral.black};
				padding: 0.8rem 0.8rem 0.8rem 1.6rem;
				position: relative;
			`}
		>
			<img
				css={css`
					width: 100%;
					height: auto;
					margin-top: -4rem;
					position: absolute;
					top: -3.2rem;
					left: 0;
					right: 0;
					transform: scaleY(-1);
				`}
				src={divider}
			/>
			<Paragraph large inverse>
				Octopus Think is a design & technology company based in Scotland with a special interest in
				leveraging technology to make the world a better place.
			</Paragraph>
			<Paragraph large inverse>
				We heart inclusion, open source, emerging technologies, design systems, and React
				development. We focus on solutions that are accessible, usable, and beautiful.
			</Paragraph>

			<div
				css={css`
					margin-bottom: 3.2rem;
				`}
			>
				<Link
					as="a"
					href="//twitter.com/octopusthinks"
					css={css`
						border: 0;
					`}
				>
					<Icon
						css={css`
							:hover {
								background: ${theme.colors.accent.primaryLight};
							}
						`}
						name="twitter"
						background={theme.colors.accent.primary}
						color={theme.colors.neutral.black}
						label="Follow on Twitter"
					/>
				</Link>
				<Link
					as="a"
					href="//github.com/octopusthink"
					css={css`
						border: 0;
					`}
				>
					<Icon
						css={css`
							:hover {
								background: ${theme.colors.accent.primaryLight};
							}
						`}
						name="github"
						background={theme.colors.accent.primary}
						color={theme.colors.neutral.black}
						label="Follow on Github"
					/>
				</Link>
				<Link
					as="a"
					href="mailto:hello@octopusthink.com"
					css={css`
						border: 0;
					`}
				>
					<Icon
						css={css`
							:hover {
								background: ${theme.colors.accent.primaryLight};
							}
						`}
						name="mail"
						background={theme.colors.accent.primary}
						color={theme.colors.neutral.black}
						label="Send an email"
					/>
				</Link>
			</div>
			<Paragraph small inverse>
				Copyright © 2019 Octopus Think Ltd.
				<br />
				UK Registered Company No. 11747595
				<br />
				VAT ID: GB324954685
			</Paragraph>
		</footer>
	);
};

export default SiteFooter;
