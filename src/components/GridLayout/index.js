import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const GridLayout = (props) => {
  const theme = useTheme();
  const { children, className, columns } = props;

  return (
    <section
      className={className}
      css={css`
        justify-content: center;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          padding-top: 8rem;
          padding-bottom: 8rem;
          padding-left: ${theme.site.mobilePadding};
          padding-right: ${theme.site.mobilePadding};
          width: 100%;

          @media screen and (min-width: 640px) {
            padding-left: ${theme.site.tabletPadding};
            padding-right: ${theme.site.tabletPadding};
          }
          @media screen and (min-width: 1024px) {
            max-width: ${theme.site.maxSiteWidth};
            padding-left: ${theme.site.desktopPadding};
            padding-right: ${theme.site.desktopPadding};
          }
        `}
      >
        <div
          css={css`
            display: grid;
            grid-gap: ${theme.site.mobilePadding};
            justify-content: stretch;
            align-items: stretch;

            @media screen and (min-width: 608px) {
              grid-template-columns: repeat(${columns - 1}, 1fr);
              grid-auto-rows: 1fr;
            }

            @media screen and (min-width: 960px) {
              grid-template-columns: repeat(${columns}, 1fr);
            }
          `}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default GridLayout;
