import { Heading, Tags, useTheme } from '@octopusthink/nautilus';
import Img from 'gatsby-image';
import React from 'react';
import { css } from '@emotion/core';

const IllustratedPoint = (props) => {
  const {
    children,
    illustration: Illustration,
    label,
    metadata,
    photo,
    photoAlt,
    photoHover,
  } = props;

  const theme = useTheme();

  return (
    <div>
      <div
        css={css`
          height: 24rem;
          width: 24rem;
          margin: 0 auto 1.6rem;
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
          <Img
            fixed={photo.childImageSharp.fixed}
            alt={photoAlt}
            css={css`
              max-width: 100%;
              height: auto;
              border-radius: 100%;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
            `}
          />
        )}

        {photoHover && (
          <Img
            className="hover-image"
            fixed={photoHover.childImageSharp.fixed}
            alt=""
            css={css`
              max-width: 100%;
              height: auto;
              border-radius: 100%;
              opacity: 0;
              position: absolute;
              top: -243.5px;
              left: 0;
              z-index: 99;
              transition: opacity 400ms ease-in-out;
            `}
          />
        )}
      </div>

      <div
        css={css`
          text-align: center;
        `}
      >
        {metadata && (
          <Tags label="Title">
            <Tags.Tag>
              <span
                css={css`
                  color: ${theme.colors.neutral.grey600};
                  display: inline-block;
                  padding-bottom: 0.4rem;
                `}
              >
                {metadata}
              </span>
            </Tags.Tag>
          </Tags>
        )}
        <Heading
          level={3}
          css={css`
            color: ${theme.colors.text.inverse};
          `}
        >
          {label}
        </Heading>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default IllustratedPoint;
