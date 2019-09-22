import React from 'react';
import { css } from '@emotion/core';

import SiteMapItem from '../SiteMapItem';

const SiteMap = () => {
  return (
    <nav
      role="navigation"
      css={css`
        margin-bottom: 3.2rem;
      `}
    >
      <ul
        css={css`
          list-style-type: none;
          margin: 0;
          padding: 0;
        `}
      >
        <SiteMapItem link="/">Home</SiteMapItem>
        <SiteMapItem link="/about/">Who we are</SiteMapItem>
        <SiteMapItem link="/services/">What we do</SiteMapItem>
        <SiteMapItem link="/work/">Some of our work</SiteMapItem>
        <SiteMapItem link="/blog/">Stories we&apos;ve written</SiteMapItem>
        <SiteMapItem link="/contact/">Contact us</SiteMapItem>
      </ul>
    </nav>
  );
};

export default SiteMap;
