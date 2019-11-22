import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const Divider = (props) => {
  const theme = useTheme();
  const { className, dark, light } = props;

  return (
    <div
      className={className}
      css={css`
        content: '';
        display: block;
        width: 120%;
        margin-left: -10%;
        overflow: hidden;
        height: 50px;
        z-index: 0;

        ${light &&
          css`
            background-image: linear-gradient(
              to bottom left,
              transparent,
              transparent 46%,
              ${theme.colors.accent.primary} 47%,
              ${theme.colors.accent.primary} 53%,
              ${theme.colors.neutral.black} 54%,
              ${theme.colors.neutral.black}
            );
          `}

        ${dark &&
          css`
            background-image: linear-gradient(
              to top left,
              white,
              white 46%,
              ${theme.colors.accent.primary} 47%,
              ${theme.colors.accent.primary} 53%,
              ${theme.colors.neutral.black} 54%,
              ${theme.colors.neutral.black}
            );
          `}
      `}
    />
  );
};

export default Divider;
