import {
  Button,
  Link,
  Heading,
  Paragraph,
  Tags,
  VisuallyHidden,
  useTheme,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const PortfolioCard = (props) => {
  const theme = useTheme();
  const { category, slug, summary, title, thumbnail } = props;

  return (
    <Link
      tabIndex="-1"
      to={slug}
      css={css`
        border-bottom: 0;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
        position: relative;
        overflow: hidden;

        &:hover {
          .details {
            top: 0;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
          }

          .tags,
          .footer,
          .description {
            opacity: 1;
          }
        }
      `}
    >
      <article
        css={css`
          background: ${theme.colors.neutral.black};
        `}
      >
        <Image
          src={thumbnail}
          alt=""
          css={css`
            max-width: 100%;
            width: 600px;
          `}
        />
        <div
          className="details"
          css={css`
            background: rgba(0, 0, 0, 0.85);
            padding: 2.4rem;
            position: absolute;
            top: calc(100% - 9.6rem);
            left: 0;
            right: 0;
            bottom: 0;
            transition: all 200ms ease-out;
          `}
        >
          <header>
            <div
              className="tags"
              css={css`
                opacity: 1;
                margin-bottom: 0.4rem;
              `}
            >
              <Tags label="Category">
                <Tags.Tag>#{category}</Tags.Tag>
              </Tags>
            </div>
            <Link tabIndex="-1" to={slug}>
              <Heading
                inverse
                css={css`
                  margin-bottom: 1.6rem;
                `}
                level={4}
              >
                {title}
              </Heading>
            </Link>
          </header>
          <Paragraph
            className="description"
            inverse
            small
            css={css`
              margin-bottom: 0;
              opacity: 0;
            `}
          >
            {summary}
          </Paragraph>
          <footer
            className="footer"
            css={css`
              opacity: 0;
            `}
          >
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
    </Link>
  );
};

export default PortfolioCard;
