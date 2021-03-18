import { body, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const Statistic = (props) => {
  const { number, label, preUnits, postUnits } = props;
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
        font-weight: 100;
        margin-bottom: 3.2rem;
      `}
    >
      <div
        css={css`
          ${metadata.large(theme)};
          font-weight: 500;
          color: ${numberColor};
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        {preUnits && (
          <span
            css={css`
              font-size: 3.2rem;
              font-weight: 300;
            `}
          >
            {preUnits}
          </span>
        )}
        <span
          css={css`
            font-weight: 200;
            font-size: 6rem;
            letter-spacing: -0.02em;
          `}
        >
          {number}
        </span>
        {postUnits && (
          <span
            css={css`
              margin-left: 0.8rem;
            `}
          >
            {postUnits}
          </span>
        )}
      </div>

      <span
        css={css`
          ${body.small(theme)};
          color: ${labelColor};
          font-weight: 500;
        `}
      >
        {label}
      </span>
    </div>
  );
};

export default Statistic;
