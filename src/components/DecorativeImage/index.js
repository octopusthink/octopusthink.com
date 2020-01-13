import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const DecorativeImage = (props) => {
  const { alt, background, children, image, overlap, nomargin } = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        ${background &&
          css`
            background: ${theme.colors.neutral.grey800};
            border: 8px solid ${theme.colors.neutral.grey800};
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
          `}
        ${!nomargin &&
          css`
            margin-top: 6.4rem;
            margin-bottom: 3.2rem;
          `}

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
