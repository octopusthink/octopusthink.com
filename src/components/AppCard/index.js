import { Button, Heading, Tags, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import CardImage from 'components/CardImage';

const AppCard = (props) => {
  const { alt, beta, children, heading, image, link, linkText, type } = props;
  const theme = useTheme();

  return (
    <section
      css={css`
        position: relative;

        p {
          margin-bottom: 0;
        }
      `}
    >
      <CardImage link={link} image={image} alt={alt} />
      {beta && (
        <span
          css={css`
            ${metadata.small(theme)};
            position: absolute;
            background: ${theme.colors.accent.secondaryDark};
            color: ${theme.colors.neutral.white};
            padding: 0.4rem 0.8rem;
            top: 1.6rem;
            right: -0.8rem;
          `}
        >
          Beta
        </span>
      )}

      <Tags
        label="Metadata"
        css={css`
          margin-bottom: 0.4rem;
        `}
      >
        <Tags.Tag>{type}</Tags.Tag>
      </Tags>
      <Heading
        level={2}
        css={css`
          margin-bottom: 1.6rem;
        `}
      >
        {heading}
      </Heading>
      {children}

      <Button noMargin minimal navigation href={link}>
        {linkText}
      </Button>
    </section>
  );
};

export default AppCard;
