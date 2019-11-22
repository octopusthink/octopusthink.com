import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const DecorativeImage = (props) => {
  const { alt, children, image, overlap } = props;

  return (
    <div
      css={css`
        margin-top: 6.4rem;
        margin-bottom: 3.2rem;

        ${overlap &&
          css`
            width: 120%;
            margin-left: -10%;
          `}
        }
      `}
    >
      <Image src={image} alt={alt} />
      {children}
    </div>
  );
};

export default DecorativeImage;
