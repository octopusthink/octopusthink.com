import { Heading, Tags, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';
import NextPanelNavigation from 'components/NextPanelNavigation';

const PortfolioSection = (props) => {
  const { alt, children, heading, image, metadata, next } = props;
  const theme = useTheme();
  const hashID = heading
    .toLowerCase()
    .replace('& ', '')
    .replace('?', '')
    .replace(' ', '-');

  const imageSrc = image.split('/')[image.split('/').length - 1];

  return (
    <section
      id={hashID}
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

          &:nth-of-type(odd) {
            .portfolioSectionText {
              order: 2;
            }
          }
        }

        @media screen and (min-width: 1024px) {
          grid-gap: ${theme.site.desktopPadding};
          padding: ${theme.site.desktopPadding};
          max-width: ${theme.site.maxSiteWidth};
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
        {next && <NextPanelNavigation to={next} />}
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <div
          css={css`
            max-width: 100%;
          `}
        >
          <Image src={imageSrc} alt={alt} />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
