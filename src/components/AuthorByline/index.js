import { Heading, Link, Paragraph, Tags } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import config from '../../../config';
import theme from '../../../config/theme';

const AuthorByline = props => {
  const { alt, avatar, children, name, title } = props;
  return (
    <div
      css={css`
        background: white;
        border: 1px solid ${theme.colors.neutral.grey0};
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
        display: grid;
        margin-top: 6.4rem;

        @media screen and (max-width: 639px) {
          font-size: 0.8em;
          grid-gap: 2.4rem;
          padding: 2.4rem;
          margin-left: -${theme.site.mobilePadding};
          width: calc(100% + ${theme.site.mobilePadding} + ${theme.site.mobilePadding});
        }

        @media screen and (min-width: 640px) {
          align-items: center;
          grid-template-columns: 16rem auto;
          grid-column-gap: 3.2rem;
          grid-row-gap: 1.6rem;
          padding: 3.2rem;
          margin-left: -1.6rem;
          width: calc(100% + 3.2rem);
        }

        @media screen and (min-width: 1024px) {
          margin-left: -3.2rem;
          width: calc(100% + 6.4rem);
        }
      `}
    >
      <div
        css={css`
          @media screen and (max-width: 639px) {
            text-align: center;
          }
          @media screen and (min-width: 640px) {
            grid-row: 1 / 3;
          }
        `}
      >
        <img
          src={avatar}
          css={css`
            width: 100%;
            height: auto;
            border-radius: 50%;
            max-width: 16rem;
          `}
          alt={alt}
        />
      </div>

      <div
        css={css`
          @media screen and (max-width: 639px) {
            text-align: center;
          }
        `}
      >
        <Tags label="Job title">
          <Tags.Tag>Written by</Tags.Tag>
        </Tags>
        <Heading
          level={2}
          css={css`
            margin-bottom: 0;
            letter-spacing: -0.021em;
          `}
        >
          {name}
        </Heading>
      </div>

      <Paragraph
        small
        css={css`
          margin-bottom: 0;
        `}
      >
        {children}
      </Paragraph>
    </div>
  );
};

export default AuthorByline;
