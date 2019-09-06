import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const PageFooter = props => {
  const { children } = props;

  return (
    <footer
      css={css`
        width: 100%;
        padding: 3.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3.2rem;
      `}
    >
      {children}
    </footer>
  );
};

export default PageFooter;
