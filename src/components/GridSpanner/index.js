import React from 'react';
import { css } from '@emotion/core';

const GridSpanner = (props) => {
  const { children } = props;

  return (
    <div
      css={css`
        grid-column: 1 / -1;
        margin: 0 auto;
        max-width: max-content;
      `}
    >
      {children}
    </div>
  );
};

export default GridSpanner;
