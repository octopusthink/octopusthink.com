import { Link } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const CardImage = (props) => {
  const { alt, image, link, noMargin } = props;
  const imageSrc = image ? image.split('/')[image.split('/').length - 1] : undefined;

  const linkProps = {
    href: link.startsWith('http') ? link : undefined,
    to: !link.startsWith('http') ? link : undefined,
  };

  if (!image) {
    return null;
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link unstyled tabindex="-1" {...linkProps}>
      <Image
        src={imageSrc}
        alt={alt}
        css={css`
          border-radius: 3.2rem;
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.125);
          ${!noMargin &&
            css`
              margin-bottom: 2.4rem;
            `}
        `}
      />
    </Link>
  );
};

export default CardImage;
