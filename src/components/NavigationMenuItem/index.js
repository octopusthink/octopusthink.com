import { Icon, Link, interfaceUI } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const NavigationMenuItem = props => {
  const { children, icon, link, onClick } = props;

  return (
    <li>
      <Link
        activeClassName="activeLink"
        to={link}
        onClick={onClick}
        css={css`
					${interfaceUI.small(theme)};
					text-decoration: none;
					color: ${theme.colors.neutral.white};
					font-weight: 600;
					padding: 1.6rem;

					&:hover {
						color: ${theme.colors.accent.primaryLight};
					}

					@media screen and (max-width: 479px) {
						border-bottom: 1px solid ${theme.colors.neutral.grey800};
						display: block;
						width: 100%;

						&:hover {
							border-bottom: 1px solid ${theme.colors.neutral.grey800};
						}
					}

					@media screen and (min-width: 480px) {
						border-bottom: 0;
					}

					&.activeLink {
						color: ${theme.colors.accent.secondaryLight};

						@media screen and (min-width: 480px) {
							position: relative;

							::after {
								display: block;
								width: calc(100% - 3.2rem);
								content: '';
								border-bottom: 2px solid;
								position: absolute;
								bottom: 0.8rem;
								left: 1.6rem;
								right: 1.6rem;
							}
						}
					}
				`}
      >
        <Icon
          name={icon}
          css={css`
						display: none;
						margin-right: 1.6rem;
					`}
        />
        {children}
      </Link>
    </li>
  );
};

export default NavigationMenuItem;
