import { Link, SkipLink, useTheme } from '@octopusthink/nautilus';
import React, { useState } from 'react';
import { css } from '@emotion/core';

import NavigationMenu from 'components/NavigationMenu';
import Logo from 'static/octopusthink.svg';

const SiteHeader = () => {
  const [onHomepage, setOnHomepage] = useState();
  const theme = useTheme();

  return (
    <header
      css={css`
        background: ${theme.colors.neutral.black};
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem;
          padding-top: ${theme.site.mobilePadding};
          padding-bottom: ${theme.site.mobilePadding};

          @media screen and (min-width: 640px) {
            padding: ${theme.site.tabletPadding};
            padding-bottom: 0;
          }

          @media screen and (min-width: 480px) and (max-width: 860px) {
            flex-direction: column;
            align-items: center;
            grid-gap: 1.6rem;
            padding-top: ${theme.site.tabletPadding};
          }

          @media screen and (min-width: 1024px) {
            padding: ${theme.site.desktopPadding};
            padding-bottom: 0;
            max-width: ${theme.site.maxSiteWidth};
            margin: 0 auto;
          }
        `}
      >
        <SkipLink />
        <Link
          unstyled
          css={css`
            margin-bottom: 0.4rem;

            &:focus {
              box-shadow: 0 0 0 0.4rem ${theme.colors.state.focusOutline};
              outline: none;
            }
          `}
          getProps={(linkProps) => {
            const { isCurrent: isCurrentRouterLink } = linkProps;
            if (isCurrentRouterLink !== onHomepage) {
              if (isCurrentRouterLink) {
                setOnHomepage(true);
              } else {
                setOnHomepage(false);
              }
            }
          }}
          onClick={(event) => {
            if (onHomepage) {
              event.currentTarget.blur();
            }
          }}
          to="/"
        >
          <Logo
            css={css`
              height: 100%;
              width: 100%;
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
      </div>
    </header>
  );
};

export default SiteHeader;
