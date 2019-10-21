import React from 'react';
import { css } from '@emotion/core';

const PageWrapper = (props) => {
  const { children } = props;
  return (
    <article
      css={css`
        overflow-x: hidden;
      `}
    >
      {children}
    </article>
  );
};

export default PageWrapper;
