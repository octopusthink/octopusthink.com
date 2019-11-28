import { metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const Statistic = (props) => {
  const { number, label } = props;
  const theme = useTheme();

  const numberColor = theme.colors.accent.primary;
  const labelColor = theme.colors.text.light;

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <span
        css={css`
          ${metadata.large(theme)};
          font-weight: 100;
          font-size: 8rem;
          color: ${numberColor};
          letter-spacing: -0.02em;
        `}
      >
        {number}
      </span>
      <span
        css={css`
          ${metadata.small(theme)};
          color: ${labelColor};
        `}
      >
        {label}
      </span>
    </div>
  );
};

export default Statistic;
