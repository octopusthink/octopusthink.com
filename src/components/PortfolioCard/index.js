import { Link, Heading, Paragraph, Tags, VisuallyHidden, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import ButtonInverse from 'components/ButtonInverse';
import CardImage from 'components/CardImage';

const PortfolioCard = (props) => {
  const { category, className, slug, summary, title, thumbnail } = props;
  const theme = useTheme();

  return (
    <Link
      className={className}
      to={slug}
      css={css`
        border-bottom: 0;
        position: relative;
        margin-bottom: 0;
        box-shadow: none;

        &:hover,
        &:focus {
          box-shadow: none;

          .details {
            bottom: 0;
            opacity: 1;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
          }

          .details-content {
            opacity: 1;
          }
        }

        &:focus {
          .details {
            box-shadow: 0 0 0 0.4rem ${theme.colors.state.focusOutline};
          }
        }
      `}
    >
      <article>
        <CardImage link={slug} image={thumbnail} alt="" noMargin />

        <div
          className="details"
          css={css`
            background: rgba(0, 0, 0, 0.85);
            padding: 2.4rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 100%;
            transition: all 200ms ease-out;
            border-radius: 3.2rem;
            opacity: 0;
          `}
        >
          <div
            className="details-content"
            css={css`
              opacity: 0;
              transition: all 200ms ease-out 200ms;
            `}
          >
            <header>
              <div
                css={css`
                  margin-bottom: 0.4rem;
                `}
              >
                <Tags label="Category">
                  <Tags.Tag>#{category}</Tags.Tag>
                </Tags>
              </div>
              <Heading
                inverse
                css={css`
                  margin-bottom: 1.6rem;
                `}
                level={3}
              >
                {title}
              </Heading>
            </header>
            <Paragraph inverse small noMargin>
              {summary}
            </Paragraph>
            <footer>
              <ButtonInverse
                to={slug}
                noMargin
                css={css`
                  border: 0;

                  &:hover {
                    box-shadow: none;
                  }
                `}
                navigation
                minimal
              >
                Continue reading<VisuallyHidden> {title}</VisuallyHidden>
              </ButtonInverse>
            </footer>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PortfolioCard;
