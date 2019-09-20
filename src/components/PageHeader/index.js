import { PageTitle, Paragraph } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';
import Watermark from '../../../static/watermark.svg';

const PageHeader = (props) => {
  const { children, metadata, pageTitle, summary, summaryExtra } = props;
  return (
    <header
      css={css`
        background: ${theme.colors.neutral.black};
        position: relative;
        overflow: hidden;
        padding-top: calc(${theme.site.mobilePadding} * 2);
        padding-bottom: calc(${theme.site.mobilePadding} * 2);

        @media screen and (min-width: 640px) {
          min-height: 320px;
          padding-top: ${theme.site.tabletPadding};
        }

        @media screen and (min-width: 1024px) {
          min-height: 400px;
          padding-top: ${theme.site.desktopPadding};
        }

        ::after {
          content: '';
          display: block;
          width: 120%;
          margin-left: -10%;
          overflow: hidden;
          height: 50px;
          position: absolute;
          bottom: 0;
          background-image: linear-gradient(
            to bottom right,
            transparent,
            transparent 46%,
            ${theme.colors.accent.primary} 47%,
            ${theme.colors.accent.primary} 53%,
            ${theme.colors.neutral.white} 54%,
            ${theme.colors.neutral.white}
          );
          z-index: 0;
        }
      `}
    >
      <Watermark
        css={css`
          @media screen and (max-width: 639px) {
            display: none;
          }
          @media screen and (min-width: 640px) {
            height: 480px;
            width: auto;
            position: absolute;
            bottom: -160px;
            right: -160px;
            opacity: 0.05;
            z-index: 0;
          }
          @media screen and (min-width: 1024px) {
            bottom: -120px;
          }
        `}
      />
      <div
        css={css`
          max-width: ${theme.site.maxSiteWidth};
          margin: 0 auto;
        `}
      >
        <div
          css={css`
            padding: ${theme.site.mobilePadding};
            //margin: 0 auto;

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
              letter-spacing: -0.05em;
            `}
          >
            {pageTitle}
          </PageTitle>
          <Paragraph
            large
            inverse
            light
            css={css`
              letter-spacing: -0.025em;
            `}
          >
            {summary}
          </Paragraph>

          {summaryExtra && (
            <Paragraph
              large
              inverse
              light
              css={css`
                letter-spacing: -0.025em;
              `}
            >
              {summaryExtra}
            </Paragraph>
          )}

          {children}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
