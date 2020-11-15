import { Link } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const CardImage = (props) => {
  const { alt, image, link, noMargin, small } = props;
  const imageSrc = image ? image.split('/')[image.split('/').length - 1] : undefined;

  const linkProps = {
    href: link.startsWith('http') ? link : undefined,
    to: !link.startsWith('http') ? link : undefined,
  };

  if (!image) {
    return null;
  }

  return (
    <Link
      unstyled
      tabindex="-1"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...linkProps}
    >
      <Image
        src={imageSrc}
        alt={alt}
        className="CardImage"
        css={css`
          border-radius: 3.2rem;
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.125);

          ${!noMargin &&
            css`
              margin-bottom: 2.4rem;
            `}

          ${small &&
            css`
              border-radius: 1.6rem;
            `}
        `}
      />
    </Link>
  );
};

export default CardImage;
