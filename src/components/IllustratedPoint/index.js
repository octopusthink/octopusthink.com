import { Heading, Paragraph, Tags, useTheme, metadata } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const IllustratedPoint = (props) => {
  const {
    children,
    illustration: Illustration,
    label,
    metadata: metadataProp,
    photo,
    photoAlt,
    photoHover,
    minimal,
  } = props;

  const theme = useTheme();

  return (
    <div>
      <div
        css={css`
          max-height: 24rem;
          max-width: 24rem;
          margin: 0 auto 1.6rem;
          align-items: center;
          justify-content: center;
          position: relative;

          ${minimal &&
            css`
              margin-bottom: 0;
            `}

          &:hover {
            .hover-image {
              opacity: 1;
            }
          }
        `}
      >
        {Illustration && <Illustration />}
        {photo && (
          <Image
            src={photo}
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
          <Image
            className="hover-image"
            src={photoHover}
            alt=""
            css={css`
              max-width: 100%;
              height: auto;
              border-radius: 100%;
              opacity: 0;
              position: absolute;
              top: -240px;
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
        {metadataProp && (
          <Tags label="Title">
            <Tags.Tag>
              <span
                css={css`
                  color: ${theme.colors.neutral.grey600};
                  display: inline-block;
                  padding-bottom: 0.4rem;
                `}
              >
                {metadataProp}
              </span>
            </Tags.Tag>
          </Tags>
        )}

        {!minimal && (
          <Heading
            level={3}
            css={css`
               {
                inverse&&
              color: ${theme.colors.text.inverse};
              }
            `}
          >
            {label}
          </Heading>
        )}

        {minimal && (
          <Paragraph
            css={css`
              color: ${theme.colors.text.inverse};
              ${metadata.small(theme)};
              margin-bottom: 0;
            `}
          >
            {label}
          </Paragraph>
        )}
      </div>

      <div>{children}</div>
    </div>
  );
};

export default IllustratedPoint;
