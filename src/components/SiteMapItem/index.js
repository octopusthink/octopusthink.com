import { Link, interfaceUI, useTheme } from '@octopusthink/nautilus';
import React, { useState } from 'react';
import { css } from '@emotion/core';

const SiteMapItem = (props) => {
  const { children, link, onClick } = props;

  const [isCurrent, setIsCurrent] = useState();
  const theme = useTheme();

  return (
    <li>
      <Link
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

          ${isCurrent &&
            css`
              color: ${theme.colors.text.inverseDark};
            `}
        `}
        getProps={(linkProps) => {
          const { isCurrent: isCurrentRouterLink } = linkProps;
          if (isCurrentRouterLink !== isCurrent) {
            if (isCurrentRouterLink) {
              setIsCurrent(true);
            } else {
              setIsCurrent(false);
            }
          }
        }}
        onClick={(event) => {
          if (typeof onClick === 'function') {
            onClick(event);
          }

          if (isCurrent) {
            event.currentTarget.blur();
          }
        }}
      >
        {children}
      </Link>
    </li>
  );
};

export default SiteMapItem;
