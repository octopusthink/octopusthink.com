import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const ImagePanel = (props) => {
  const theme = useTheme();
  const { alt, className, dark, image } = props;

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
                to bottom right,
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
                transparent 54%,
                transparent
              );
            }
          `}
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          @media screen and (min-width: 1024px) {
            max-width: ${theme.site.maxSiteWidth};
          }
        `}
      >
        <img
          src={image}
          alt={alt}
          css={css`
            max-width: 100%;
            margin-bottom: -50px;
            margin-top: 50px;
          `}
        />
      </div>
    </section>
  );
};

export default ImagePanel;
