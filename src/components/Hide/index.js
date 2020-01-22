import React from 'react';
import { css } from '@emotion/core';

export const VisuallyHiddenStyles = css`
  border: 0;
  clip-path: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Hide = (props) => {
  const { children, mobile, tablet, desktop, screenreaders } = props;

  return (
    <span
      css={css`
        ${mobile &&
          css`
            @media only screen and (max-width: 639px) {
              ${VisuallyHiddenStyles}
            }
          `}

        ${tablet &&
          css`
            @media only screen and (min-width: 640px) and (max-width: 1023px) {
              ${VisuallyHiddenStyles}
            }
          `}

        ${desktop &&
          css`
            @media only screen and (min-width: 1024px) {
              ${VisuallyHiddenStyles}
            }
          `}

          ${screenreaders &&
            css`
              @media only speech {
                display: none;
                visibility: hidden;
              }
            `}
      `}
    >
      {children}
    </span>
  );
};

export default Hide;
