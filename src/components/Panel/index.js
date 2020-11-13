import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Divider from 'components/Divider';

const Panel = (props) => {
  const theme = useTheme();
  const { children, className, dark, fullwidth, gridMobile, gridTablet, gridDesktop } = props;

  let hasGrid = false;
  if (gridMobile || gridTablet || gridDesktop) {
    hasGrid = true;
  }

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

          ${dark &&
            css`
              p {
                color: ${theme.colors.text.inverse};
              }

              li {
                margin-bottom: 1.6rem;
                color: ${theme.colors.text.inverse};
              }

              strong {
                color: ${theme.colors.text.inverseLight};
                background: linear-gradient(
                  -180.5deg,
                  ${theme.colors.neutral.black} 45%,
                  ${theme.colors.accent.secondaryDark} 45%,
                  ${theme.colors.accent.secondaryDark} 85%,
                  ${theme.colors.neutral.black} 85%
                ) !important;
                background: none !important;
              }
            `}
        `}
      >
        <div
          css={css`
            ${!hasGrid &&
              !fullwidth &&
              css`
                margin: auto;
                max-width: ${theme.site.maxContentWidth};
              `}

            @media screen and (max-width: 639px) {
              grid-gap: ${theme.site.mobilePadding};
              ${gridMobile &&
                css`
                  display: grid;
                  grid-template-columns: ${gridMobile};
                `}
            }

            @media screen and (min-width: 640px) {
              grid-gap: ${theme.site.tabletPadding};
              ${gridTablet &&
                css`
                  display: grid;
                  grid-template-columns: ${gridTablet};
                `}
            }

            @media screen and (min-width: 1024px) {
              grid-gap: ${theme.site.desktopPadding};
              ${gridDesktop &&
                css`
                  display: grid;
                  grid-template-columns: ${gridDesktop};
                `}
            }
          `}
        >
          {children}
        </div>
      </div>
      {dark && <Divider dark />}
      {!dark && <Divider light />}
    </section>
  );
};

export default Panel;
