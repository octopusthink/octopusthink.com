import React from 'react';
import { css } from '@emotion/core';

import ListLink from 'components/ListLink';

const SiteMap = (props) => {
  const { className } = props;
  return (
    <nav role="navigation" className={className}>
      <ul
        css={css`
          list-style-type: none;
          margin: 0;
          padding: 0;
        `}
      >
        <ListLink link="/">Home</ListLink>
        <ListLink link="/about/">Who we are</ListLink>
        <ListLink link="/apps/">Our apps</ListLink>
        <ListLink link="/blog/">Blog</ListLink>
        <ListLink link="/services/">Consulting services</ListLink>
        <ListLink link="/contact/">Contact us</ListLink>
      </ul>
    </nav>
  );
};

export default SiteMap;
