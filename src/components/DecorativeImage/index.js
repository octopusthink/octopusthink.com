import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const DecorativeImage = (props) => {
  const { alt, background, children, image, overlap, noMargin } = props;
  const theme = useTheme();

  // HACK: Prevent errors encountered by `gatsby-plugin-mdx` on `npm run build`.
  // It seems to do some kind of "empty context" pass where `theme` is an empty
  // object. This seems to happen only on the final render and I'm not sure what
  // causes it, but using this hack still outputs the expected content from what
  // I can tell, so 🤷🏻‍♂️
  if (!theme.site) {
    return null;
  }

  return (
    <div
      css={css`
        ${background &&
          css`
            background: ${theme.colors.neutral.grey800};
            border: 8px solid ${theme.colors.neutral.grey800};
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
          `}
        ${!noMargin &&
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
