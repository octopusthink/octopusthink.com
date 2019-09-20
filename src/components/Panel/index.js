import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const Panel = (props) => {
  const { children, dark, grid } = props;
  let panelBackground = theme.colors.neutral.white;
  if (dark) {
    panelBackground = theme.colors.neutral.black;
  }
  return (
    <section
      css={css`
        background: ${panelBackground};
        //min-height: 70vh;
        //justify-content: center;
        //display: flex;
        //flex-direction: column;
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
                grid-template-columns: ${grid};
                grid-gap: ${theme.site.mobilePadding};

                @media screen and (min-width: 640px) {
                  grid-gap: ${theme.site.tabletPadding};
                }

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
