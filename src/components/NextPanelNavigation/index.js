import { Icon, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const NextPanelNavigation = (props) => {
  const { to } = props;
  const theme = useTheme();
  const nextHash = `#${to}`;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
  }

  return (
    <a
      href={nextHash}
      css={css`
        color: ${theme.colors.neutral.white};
        background: ${theme.colors.neutral.black};
        padding: 1.2rem;
        border-radius: 100%;
        height: 4.8rem;
        width: 4.8rem;
        margin: 0 auto;
      `}
    >
      <Icon
        title="Move to next panel"
        name="arrow-down"
        css={css`
          margin: 0;
          svg {
            opacity: 1;
          }
        `}
      />
    </a>
  );
};

export default NextPanelNavigation;
