import React from 'react';
import { css } from '@emotion/core';

const PageFooter = (props) => {
  const { children } = props;

  return (
    <footer
      css={css`
        display: grid;
        width: 100%;

        @media screen and (max-width: 639px) {
          padding: 1.6rem;
          grid-gap: 3.2rem;
        }
        @media screen and (min-width: 640px) {
          padding: 3.2rem;
          grid-template-columns: 1fr 1fr;
          grid-gap: 3.2rem;
        }
      `}
    >
      {children}
    </footer>
  );
};

export default PageFooter;
