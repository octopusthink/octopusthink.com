import { Heading, useTheme, metadata } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const PortfolioSummary = (props) => {
  const { children } = props;
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

        @media screen and (min-width: 800px) {
          padding: 0;
        }

        @media screen and (min-width: 1024px) {
          grid-gap: ${theme.site.desktopPadding};
          max-width: ${theme.site.maxSiteWidth};
          max-width: 1024px;
        }
      `}
    >
      <Heading level={2}>In Brief</Heading>

      <div
        css={css`
          display: grid;

          @media screen and (min-width: 640px) {
            grid-template-columns: 1fr 1fr;
            grid-gap: ${theme.site.tabletPadding};
          }

          h3 {
            ${metadata.large(theme)};
          }
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default PortfolioSummary;
