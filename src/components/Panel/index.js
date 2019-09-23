import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const Panel = (props) => {
  const { children, className, dark, grid, gridSmall } = props;

  const panelBackground = dark ? theme.colors.neutral.black : theme.colors.neutral.white;

  return (
    <section
      className={className}
      css={css`
        background: ${panelBackground};
        justify-content: center;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;

        ${dark &&
          css`
            ::before,
            ::after {
              content: '';
              display: block;
              width: 120%;
              margin-left: -10%;
              overflow: hidden;
              height: 50px;
              background-image: linear-gradient(
                to bottom left,
                ${theme.colors.neutral.white},
                ${theme.colors.neutral.white} 46%,
                ${theme.colors.accent.primary} 47%,
                ${theme.colors.accent.primary} 53%,
                ${theme.colors.neutral.black} 54%,
                ${theme.colors.neutral.black}
              );
            }

            ::after {
              background-image: linear-gradient(
                to top right,
                ${theme.colors.neutral.white},
                ${theme.colors.neutral.white} 46%,
                ${theme.colors.accent.primary} 47%,
                ${theme.colors.accent.primary} 53%,
                ${theme.colors.neutral.black} 54%,
                ${theme.colors.neutral.black}
              );
            }
          `}
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          padding-top: 8rem;
          padding-bottom: 8rem;
          padding-left: ${theme.site.mobilePadding};
          padding-right: ${theme.site.mobilePadding};

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
            ${!grid &&
              css`
                max-width: ${theme.site.maxContentWidth};
              `}

            ${grid &&
              css`
                @media screen and (min-width: 640px) {
                  display: grid;
                  grid-gap: ${theme.site.tabletPadding};
                  grid-template-columns: ${grid};
                }

                ${gridSmall &&
                  css`
                    @media screen and (max-width: 850px) {
                      grid-gap: ${theme.site.mobilePadding};
                      grid-template-columns: ${gridSmall};
                    }
                  `}

                @media screen and (min-width: 1024px) {
                  grid-gap: ${theme.site.desktopPadding};
                }
              `}
          `}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Panel;
