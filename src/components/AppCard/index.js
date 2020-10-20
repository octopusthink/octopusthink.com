import { Button, Heading, Tags, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const AppCard = (props) => {
  const { alt, children, heading, image, link, linkText, metadata } = props;
  const theme = useTheme();
  const imageSrc = image.split('/')[image.split('/').length - 1];

  return (
    <section css={css``}>
      <Image src={imageSrc} alt={alt} />

      <div
        css={css`
          margin-top: 3.2rem;
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
          text-align: center;
        `}
      >
        <Button minimal navigation href={link}>
          {linkText}
        </Button>
      </div>
    </section>
  );
};

export default AppCard;
