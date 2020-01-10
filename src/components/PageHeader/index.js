import { PageTitle, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Divider from 'components/Divider';
import Markdown from 'components/Markdown';
import Watermark from 'static/watermark.svg';

const PageHeader = (props) => {
  const { metadata, summary, title } = props;
  const theme = useTheme();

  return (
    <header
      css={css`
        background: ${theme.colors.neutral.black};
        position: relative;
        overflow: hidden;
        padding-top: calc(${theme.site.mobilePadding} * 2);
        padding-bottom: calc(${theme.site.mobilePadding} * 2);
        padding-bottom: 0;

        @media screen and (min-width: 640px) {
          min-height: 320px;
          padding-top: ${theme.site.tabletPadding};
        }

        @media screen and (min-width: 1024px) {
          min-height: 400px;
          padding-top: ${theme.site.desktopPadding};
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
            z-index: 2;
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
            {title}
          </PageTitle>

          <Markdown
            components={{
              p: (summaryProps) => (
                <Paragraph
                  large
                  inverse
                  light
                  css={css`
                    letter-spacing: -0.025em;
                  `}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...summaryProps}
                />
              ),
            }}
          >
            {summary}
          </Markdown>
        </div>
      </div>
      <Divider
        dark
        css={css`
          bottom: 0;
          position: absolute;
          z-index: 1;
        `}
      />
    </header>
  );
};

export default PageHeader;
