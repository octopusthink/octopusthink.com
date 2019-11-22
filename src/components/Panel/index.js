import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Divider from 'components/Divider';

const Panel = (props) => {
  const theme = useTheme();
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
                display: grid;
                grid-gap: ${theme.site.tabletPadding};

                @media screen and (min-width: 640px) {
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
      {dark && <Divider dark />}
      {!dark && <Divider light />}
    </section>
  );
};

export default Panel;
