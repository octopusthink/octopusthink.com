import { Heading, useTheme, metadata } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import NextPanelNavigation from 'components/NextPanelNavigation';

const PortfolioSummary = (props) => {
  const { children, next } = props;
  const theme = useTheme();

  return (
    <section
      id="summary"
      css={css`
        margin: 0 auto 3.2rem;
        padding: ${theme.site.mobilePadding};
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 98vh;

        @media screen and (min-width: 640px) {
          padding: ${theme.site.tabletPadding};
        }

        @media screen and (min-width: 1024px) {
          padding: ${theme.site.desktopPadding};
          max-width: ${theme.site.maxSiteWidth};
        }
      `}
    >
      <Heading level={2}>Project overview</Heading>

      <div
        css={css`
          display: grid;
          grid-gap: ${theme.site.mobilePadding};

          @media screen and (min-width: 640px) {
            grid-template-columns: 1fr 1fr;
            grid-gap: ${theme.site.tabletPadding};
          }

          @media screen and (min-width: 1024px) {
            grid-gap: ${theme.site.desktopPadding};
          }

          h3 {
            ${metadata.large(theme)};
          }
        `}
      >
        {children}
      </div>
      <NextPanelNavigation to={next} />
    </section>
  );
};

export default PortfolioSummary;
