import { Icon, Link, Paragraph, heading } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const SiteFooter = () => {
	return (
		<footer
			css={css`
				background: ${theme.colors.neutral.black};
				position: relative;
				overflow: hidden;

				::before {
					content: '';
					display: block;
					width: 120%;
					margin-left: -10%;
					overflow: hidden;
					height: 50px;
					background-image: linear-gradient(
						to bottom left,
						${theme.colors.neutral.white},
						${theme.colors.neutral.white} 46%,
						${theme.colors.accent.primary} 47%,
						${theme.colors.accent.primary} 53%,
						${theme.colors.neutral.black} 54%,
						${theme.colors.neutral.black}
					);
				}
			`}
		>
			<div
				css={css`
					padding: ${theme.site.mobilePadding};

					@media screen and (min-width: 640px) {
						padding: ${theme.site.tabletPadding};
					}
					@media screen and (min-width: 1024px) {
						padding: ${theme.site.desktopPadding};
						max-width: ${theme.site.maxContentWidth};
					}
				`}
			>
				<Paragraph large inverse>
					Octopus Think is a design & technology company based in Scotland with a special interest
					in leveraging technology to make the world a better place.
				</Paragraph>
				<Paragraph large inverse>
					We ❤️ inclusion, open source, emerging technologies, design systems, and React
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
				<Paragraph
					small
					inverse
					dark
					css={css`
						font-size: 1.6rem;
						margin: 0;
					`}
				>
					Copyright © 2019 Octopus Think Ltd.
					<br />
					UK Registered Company No. 11747595
					<br />
					VAT ID: GB324954685
				</Paragraph>
			</div>
		</footer>
	);
};

export default SiteFooter;
