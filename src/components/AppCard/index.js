import { Button, Heading, Tags, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const AppCard = (props) => {
  const { alt, children, heading, image, link, linkText, metadata } = props;
  const theme = useTheme();
  const imageSrc = image.split('/')[image.split('/').length - 1];

  return (
    <section
      css={css`
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

      <Tags label="Metadata">
        <Tags.Tag>{metadata}</Tags.Tag>
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
