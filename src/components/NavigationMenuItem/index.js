import { Link, interfaceUI } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const NavigationMenuItem = (props) => {
  const { children, className, link, onClick } = props;

  return (
    <li className={className}>
      <Link
        activeClassName="currentLink"
        to={link}
        onClick={onClick}
        css={css`
          ${interfaceUI.small(theme)};
          text-decoration: none;
          color: ${theme.colors.neutral.white};
          font-weight: 600;
          padding: 1.6rem;

          @media screen and (max-width: 479px) {
            border-bottom: 1px solid ${theme.colors.neutral.grey800};
            display: block;
            width: 100%;

            &:hover {
              border-bottom: 1px solid ${theme.colors.accent.primaryDark};
              background: ${theme.colors.accent.primaryDark};
              color: ${theme.colors.neutral.white};
            }
          }

          @media screen and (min-width: 480px) {
            border-bottom: 0;

            &:hover {
              color: ${theme.colors.accent.primaryLight};
            }
          }

          &.currentLink {
            color: ${theme.colors.accent.secondaryLight};

            &:hover {
              background: none;
              border-color: ${theme.colors.neutral.grey800};
            }

            &:focus {
              color: ${theme.colors.neutral.black};
            }

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
        {children}
      </Link>
    </li>
  );
};

export default NavigationMenuItem;
