import { Button, Heading, Tags, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const AppCard = (props) => {
  const { alt, beta, children, heading, image, link, linkText, type } = props;
  const theme = useTheme();
  const imageSrc = image.split('/')[image.split('/').length - 1];

  return (
    <section
      css={css`
        position: relative;

        p {
          margin-bottom: 0;
        }
      `}
    >
      <Image
        src={imageSrc}
        alt={alt}
        css={css`
          border-radius: 3.2rem;
          margin-bottom: 2.4rem;
        `}
      />
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

      <Tags label="Metadata">
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
