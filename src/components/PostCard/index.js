import { Button, Heading, Link, Paragraph, Tags } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';
import dayjs from 'dayjs';

import config from '../../../config';
import theme from '../../../config/theme';

const PostCard = props => {
  const { authors, date, slug, summary, tags, title } = props;
  const formattedDate = dayjs(date).format(config.dateFormat);

  return (
    <article
      css={css`
        margin-bottom: 6.4rem;
      `}
    >
      <div
        css={css`
          margin-bottom: 0.4rem;
        `}
      >
        <Tags label="Date Published">
          <Tags.Tag>{formattedDate}</Tags.Tag>
        </Tags>
      </div>
      <Heading
        css={css`
          margin-bottom: 1.6rem;
        `}
        level={2}
      >
        {title}
      </Heading>
      <Paragraph
        css={css`
          margin-bottom: 0;
        `}
      >
        {summary}
      </Paragraph>
      <Button
        to={slug}
        css={css`
          border: 0;
          margin-left: 0;

          &:hover {
            box-shadow: none;
            color: ${theme.colors.state.hoverText};
          }
        `}
        navigation
        minimal
      >
        Continue reading
      </Button>
    </article>
  );
};

export default PostCard;
