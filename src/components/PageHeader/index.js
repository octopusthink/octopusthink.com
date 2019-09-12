import { PageTitle, Paragraph } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const PageHeader = (props) => {
  const { children, metadata, pageTitle, summary } = props;
  return (
    <header
      css={css`
        background: ${theme.colors.neutral.black};
        position: relative;
        overflow: hidden;

        ::after {
          content: '';
          display: block;
          width: 120%;
          margin-left: -10%;
          overflow: hidden;
          height: 50px;
          background-image: linear-gradient(
            to bottom right,
            ${theme.colors.neutral.black},
            ${theme.colors.neutral.black} 46%,
            ${theme.colors.accent.primary} 47%,
            ${theme.colors.accent.primary} 53%,
            ${theme.colors.neutral.white} 54%,
            ${theme.colors.neutral.white}
          );
        }
      `}
    >
      <div
        css={css`
          max-width: ${theme.site.maxSiteWidth};
          margin: 0 auto;
        `}
      >
        <div
          css={css`
            padding: ${theme.site.mobilePadding};
            @media screen and (min-width: 640px) {
              padding: ${theme.site.tabletPadding};
              max-width: calc(${theme.site.maxContentWidth} + ${theme.site.tabletPadding} * 2);
            }
            @media screen and (min-width: 1024px) {
              padding: ${theme.site.desktopPadding};
              max-width: calc(${theme.site.maxContentWidth} + ${theme.site.desktopPadding} * 2);
            }
          `}
        >
          {metadata}
          <PageTitle
            css={css`
              color: white;
              margin: 0.8rem 0 3.2rem 0;
              letter-spacing: -0.022em;
            `}
          >
            {pageTitle}
          </PageTitle>
          <Paragraph
            large
            inverse
            light
            css={css`
              letter-spacing: -0.017em;
            `}
          >
            {summary}
          </Paragraph>

          {children}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
