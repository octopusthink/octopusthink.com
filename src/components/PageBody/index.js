import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const PageBody = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <section
      css={css`
        background: ${theme.colors.neutral.white};
        margin: 0 auto;
        padding-top: 8rem;
        padding-bottom: 8rem;
        padding-left: ${theme.site.mobilePadding};
        padding-right: ${theme.site.mobilePadding};
        min-height: 70vh;
        justify-content: center;
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 640px) {
          padding-left: ${theme.site.tabletPadding};
          padding-right: ${theme.site.tabletPadding};
        }
        @media screen and (min-width: 1024px) {
          padding-left: ${theme.site.desktopPadding};
          padding-right: ${theme.site.desktopPadding};
          max-width: ${theme.site.maxSiteWidth};
        }
      `}
    >
      <div
        css={css`
          max-width: ${theme.site.maxContentWidth};
          margin: 0 auto;
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default PageBody;
