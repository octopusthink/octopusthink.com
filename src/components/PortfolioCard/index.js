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

import config from 'config';

const PortfolioCard = (props) => {
  const theme = useTheme();
  const { slug, summary, title, thumbnail } = props;

  return (
    <article
      css={css`
        background: ${theme.colors.neutral.black} url(${thumbnail});
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        padding: 2.4rem;
      `}
    >
      <div
        css={css`
          opacity: 0;
        `}
      >
        <header>
          <div
            css={css`
              display: none;
              margin-bottom: 0.4rem;
            `}
          >
            <Tags label="Category">
              <Tags.Tag>#WordPress</Tags.Tag>
            </Tags>
          </div>
          <Link tabIndex="-1" to={slug}>
            <Heading
              inverse
              css={css`
                margin-bottom: 1.6rem;
              `}
              level={2}
            >
              {title}
            </Heading>
          </Link>
        </header>
        <Paragraph
          inverse
          small
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
            Continue reading<VisuallyHidden> {title}</VisuallyHidden>
          </Button>
        </footer>
      </div>
    </article>
  );
};

export default PortfolioCard;
