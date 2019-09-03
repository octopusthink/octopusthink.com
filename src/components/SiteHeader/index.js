import { Link, SkipLink, heading } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Logo from '../../../static/octopusthink.svg';
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
        padding: 0.8rem;
        padding-top: ${theme.site.mobilePadding};

        @media screen and (min-width: 640px) {
          padding: ${theme.site.tabletPadding};
        }
        @media screen and (min-width: 1024px) {
          padding: ${theme.site.desktopPadding};
        }

        @media screen and (min-width: 480px) and (max-width: 860px) {
          flex-direction: column;
          align-items: center;
          grid-gap: 1.6rem;
          padding-bottom: 3.2rem;
          padding-top: ${theme.site.tabletPadding};
        }
      `}
    >
      <SkipLink />
      <Link
        to="/"
        css={css`
          border: 0;
        `}
      >
        <Logo
          css={css`
            height: 100%;
            width: auto;
            max-height: 45px;
            max-width: 300px;

            @media screen and (min-width: 640px) {
              height: 60px;
              width: 400px;
            }

            @media screen and (min-width: 1024px) {
              max-height: 60px;
              max-width: 400px;
            }
          `}
        />
      </Link>

      <NavigationMenu />
    </header>
  );
};

export default SiteHeader;
