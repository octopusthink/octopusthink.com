import { Heading, Icon, Link, Tags } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import config from '../../../config';
import theme from '../../../config/theme';

const SequentialLink = props => {
  const { direction, title, to } = props;
  let arrowIcon;
  if (direction == 'next') {
    arrowIcon = 'arrow-right';
  }
  if (direction == 'previous') {
    arrowIcon = 'arrow-left';
  }

  return (
    <Link
      to={to}
      css={css`
        border: 0;
        display: flex;
        align-items: middle;
        justify-content: end;
        grid-gap: 1.6rem;

        ${direction == 'previous' &&
          css`
            text-align: left;
            flex-direction: row-reverse;
            justify-content: start;
          `}

        ${direction == 'next' &&
          css`
            text-align: right;
            flex-direction: row;
            justify-content: end;
          `}
      `}
    >
      <div>
        <Tags label="">
          <Tags.Tag>{direction} post</Tags.Tag>
        </Tags>
        <Heading level={3}>{title}</Heading>
      </div>
      <Icon name={arrowIcon} background="black" color="white" medium />
    </Link>
  );
};

export default SequentialLink;
