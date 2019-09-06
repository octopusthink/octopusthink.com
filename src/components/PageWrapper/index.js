import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const PageWrapper = props => {
  const { children } = props;
  return <article>{children}</article>;
};

export default PageWrapper;
