import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const GridLayout = (props) => {
  const { children, className, columns, gap } = props;
  const theme = useTheme();

  // HACK: Prevent errors encountered by `gatsby-plugin-mdx` on `npm run build`.
  // It seems to do some kind of "empty context" pass where `theme` is an empty
  // object. This seems to happen only on the final render and I'm not sure what
  // causes it, but using this hack still outputs the expected content from what
  // I can tell, so 🤷🏻‍♂️
  if (!theme.site) {
    return null;
  }

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
            justify-content: stretch;
            align-items: stretch;

            ${gap &&
              css`
                grid-gap: ${gap}rem;
              `}

            ${!gap &&
              css`
                grid-gap: ${theme.site.mobilePadding};
              `}

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
