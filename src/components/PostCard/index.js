import { Button, Heading, Link, Paragraph, Tags, metadata } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';
import dayjs from 'dayjs';

import config from '../../../config';
import theme from '../../../config/theme';

const PostCard = props => {
  const { authors, date, readingTime, slug, summary, tags, title } = props;
  const formattedDate = dayjs(date).format(config.dateFormat);

  return (
    <article
      css={css`
        margin-bottom: 6.4rem;
      `}
    >
      <header>
        <div
          css={css`
            margin-bottom: 0.4rem;
          `}
        >
          <Tags label="Date Published">
            <Tags.Tag>{formattedDate}</Tags.Tag>
          </Tags>

          <span
            css={css`
              ${metadata.small(theme)};
              color: ${theme.colors.neutral.grey800};
              padding: 0 0.4rem;
            `}
          >
            &middot;
          </span>

          <Tags label="Reading time">
            <Tags.Tag>{readingTime.text}</Tags.Tag>
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
      </header>
      <Paragraph
        css={css`
          margin-bottom: 0;
        `}
      >
        {summary}
      </Paragraph>
      <footer>
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
      </footer>
    </article>
  );
};

export default PostCard;
