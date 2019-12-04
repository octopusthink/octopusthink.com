import React from 'react';
import Nautilus from '@octopusthink/nautilus';
import { Link } from 'gatsby';

import theme from 'data/theme';

const NautilusWrapper = (props) => {
  const { children } = props;

  return (
    <Nautilus theme={theme} config={{ LinkComponent: Link }}>
      {children}
    </Nautilus>
  );
};

export default NautilusWrapper;
