import {
  Button,
  Link,
  Heading,
  Paragraph,
  Tags,
  VisuallyHidden,
  metadata,
  useTheme,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';
import dayjs from 'dayjs';

import config from 'data/SiteConfig';
import ButtonInverse from 'components/ButtonInverse';

const PostCard = (props) => {
  const theme = useTheme();
  const { date, heading, inverse, noCTA, readingTime, slug, summary, title } = props;
  const formattedDate = dayjs(date).format(config.dateFormat);
  let ButtonComponent = Button;
  if (inverse) {
    ButtonComponent = ButtonInverse;
  }
  let headingLevel = 2;
  if (heading) {
    headingLevel = heading;
  }

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
            display: flex;
          `}
        >
          <Tags label="Date Published">
            <Tags.Tag>{formattedDate}</Tags.Tag>
          </Tags>

          <span
            css={css`
              ${metadata.small(theme)};
              color: ${theme.colors.neutral.grey800};
              padding: 0 0.4rem 0.4rem 0;

              ${inverse &&
                css`
                  color: ${theme.colors.neutral.grey200};
                `}
            `}
          >
            &middot;
          </span>

          <Tags label="Reading time">
            <Tags.Tag>
              {readingTime} min<VisuallyHidden>ute</VisuallyHidden> read
            </Tags.Tag>
          </Tags>
        </div>
        <Link tabIndex="-1" to={slug}>
          <Heading
            css={css`
              margin-bottom: 1.6rem;
            `}
            level={headingLevel}
            inverse={inverse}
          >
            {title}
          </Heading>
        </Link>
      </header>
      <Paragraph
        inverse={inverse}
        css={css`
          margin-bottom: 0;
        `}
      >
        {summary}
      </Paragraph>

      {!noCTA && (
        <footer>
          <ButtonComponent
            to={slug}
            css={css`
              margin-left: 0;
            `}
            navigation
            minimal
          >
            Continue reading<VisuallyHidden> {title}</VisuallyHidden>
          </ButtonComponent>
        </footer>
      )}
    </article>
  );
};

export default PostCard;
