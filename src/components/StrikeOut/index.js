import React from 'react';
import { css } from '@emotion/core';
import { heading, useTheme } from '@octopusthink/nautilus';

const StrikeOut = (props) => {
  const theme = useTheme();
  const { children, strikeoutText } = props;

  return (
    <li
      css={css`
        ${heading.large(theme)};
        list-style-type: none;
        margin: 0 auto;
        padding: 0;
        letter-spacing: -0.05em;

        @media screen and (min-width: 560px) {
          font-size: 6.4rem;
        }
      `}
    >
      <span
        css={css`
          color: ${theme.colors.neutral.grey800};
          margin-right: 0.4rem;
          text-decoration: line-through;
        `}
      >
        {strikeoutText}
      </span>
      {children}
    </li>
  );
};

export default StrikeOut;
