import { Heading, Tags, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const PortfolioSection = (props) => {
  const { children, heading, metadata } = props;
  const theme = useTheme();

  return (
    <section
      css={css`
        background: ${theme.colors.neutral.white};
        border: 1px solid ${theme.colors.neutral.grey0};
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
        display: grid;
        margin-top: 6.4rem;

        @media screen and (max-width: 639px) {
          font-size: 0.8em;
          grid-gap: 2.4rem;
          padding: 2.4rem;
          margin-left: -${theme.site.mobilePadding};
          width: calc(100% + ${theme.site.mobilePadding} + ${theme.site.mobilePadding});
        }

        @media screen and (min-width: 640px) {
          align-items: center;
          grid-template-columns: 16rem auto;
          grid-column-gap: 3.2rem;
          grid-row-gap: 1.6rem;
          padding: 3.2rem;
          margin-left: -1.6rem;
          width: calc(100% + 3.2rem);
        }

        @media screen and (min-width: 1024px) {
          margin-left: -3.2rem;
          width: calc(100% + 6.4rem);
        }
      `}
    >
      <Tags label="Metadata">
        <Tags.Tag>{metadata}</Tags.Tag>
      </Tags>
      <Heading
        level={2}
        css={css`
          margin-bottom: 0;
        `}
      >
        {heading}
      </Heading>
      {children}
    </section>
  );
};

export default PortfolioSection;
