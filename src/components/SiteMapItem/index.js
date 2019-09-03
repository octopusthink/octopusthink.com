import { Icon, Link, interfaceUI } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

const SiteMapItem = props => {
  const { children, link } = props;

  return (
    <li>
      <Link
        activeStyle={{
          color: theme.colors.text.inverseDark,
        }}
        to={link}
        css={css`
          ${interfaceUI.small(theme)};
          text-decoration: none;
          color: ${theme.colors.text.inverse};
          font-weight: 600;
          border-bottom: 1px solid ${theme.colors.neutral.grey800};
          display: block;
          width: 100%;
          padding: 1.6rem 0;

          &:hover {
            color: ${theme.colors.text.inverseLight};
            border-color: ${theme.colors.neutral.grey600};
          }
        `}
      >
        {children}
      </Link>
    </li>
  );
};

export default SiteMapItem;
