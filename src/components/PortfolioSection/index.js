import { Heading, Tags, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const PortfolioSection = (props) => {
  const { alt, children, heading, image, metadata } = props;
  const theme = useTheme();

  return (
    <section
      css={css`
        margin: 0 auto 3.2rem;
        padding: ${theme.site.mobilePadding};

        @media screen and (min-width: 640px) {
          padding: ${theme.site.tabletPadding};
        }

        @media screen and (min-width: 800px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: ${theme.site.tabletPadding};
          min-height: 98vh;
          padding: 0;

          &:nth-of-type(odd) {
            .portfolioSectionText {
              order: 2;
            }
          }
        }

        @media screen and (min-width: 1024px) {
          grid-gap: ${theme.site.desktopPadding};
          max-width: ${theme.site.maxSiteWidth};
          max-width: 1024px;
        }
      `}
    >
      <div
        className="portfolioSectionText"
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <Tags label="Metadata">
          <Tags.Tag>{metadata}</Tags.Tag>
        </Tags>
        <Heading level={2}>{heading}</Heading>
        {children}
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <img
          src={image}
          alt={alt}
          css={css`
            max-width: 100%;
          `}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
