import { Heading, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const IllustratedPoint = (props) => {
  const { children, illustration: Illustration, label, photo, photoAlt, photoHover } = props;

  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        grid-gap: 1.6rem;
      `}
    >
      <div
        css={css`
          height: 24rem;
          width: 24rem;
          margin: 0 auto;
          align-items: center;
          justify-content: center;
          position: relative;

          &:hover {
            .hover-image {
              opacity: 1;
            }
          }
        `}
      >
        {Illustration && <Illustration />}
        {photo && (
          <img
            src={photo}
            alt={photoAlt}
            width="480"
            height="480"
            css={css`
              max-width: 100%;
              height: auto;
              border-radius: 100%;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
            `}
          />
        )}

        {photoHover && (
          <img
            className="hover-image"
            src={photoHover}
            alt=""
            width="480"
            height="480"
            css={css`
              max-width: 100%;
              height: auto;
              border-radius: 100%;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 99;
              transition: opacity 400ms ease-in-out;
            `}
          />
        )}
      </div>
      <Heading
        level={3}
        css={css`
          color: ${theme.colors.text.inverse};
          text-align: center;
        `}
      >
        {label}
      </Heading>
      <div>{children}</div>
    </div>
  );
};

export default IllustratedPoint;
