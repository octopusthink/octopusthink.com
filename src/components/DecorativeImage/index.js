import { useTheme, body } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const DecorativeImage = (props) => {
  const { alt, background, caption, children, image, overlap, noMargin, shadow } = props;
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
    <figure
      css={css`
        ${background &&
          css`
            background: ${theme.colors.neutral.grey800};
          `}
          ${shadow ||
            (background &&
              css`
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
              `)}
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
      {caption && (
        <figcaption
          css={css`
            ${body.small(theme)};
            color: ${theme.colors.text.light};
            text-align: center;
          `}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default DecorativeImage;
