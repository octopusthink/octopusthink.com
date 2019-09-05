import { Heading, Link, Paragraph, Tags } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const AuthorByline = props => {
  const { avatar, children, name } = props;
  return (
    <div
      css={css`
        background: white;
        border: 1px solid ${theme.colors.neutral.grey0};
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
        padding: 3.2rem;
        margin-bottom: 6.4rem;

        @media screen and (min-width: 640px) {
          display: grid;
          grid-template-columns: 1fr 4fr;
          grid-gap: 3.2rem;
          align-items: center;
        }
      `}
    >
      <img
        src={avatar}
        css={css`
          width: 22.4rem;
          height: auto;
          border-radius: 50%;
          border: 1px solid pink;
          margin-bottom: 3.2rem;
        `}
      />
      <div>
        <Tags label="Author">
          <Tags.Tag>Written by</Tags.Tag>
        </Tags>
        <Heading small>{name}</Heading>
        <Paragraph small>{children}</Paragraph>
      </div>
    </div>
  );
};

export default AuthorByline;
