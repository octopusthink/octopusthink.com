import { Link, interfaceUI, useTheme } from '@octopusthink/nautilus';
import React, { useState } from 'react';
import { css } from '@emotion/core';

const NavigationMenuItem = (props) => {
  const { children, className, link, onClick } = props;

  const [isCurrent, setIsCurrent] = useState();
  const theme = useTheme();

  return (
    <li className={className}>
      <Link
        unstyled
        aria-describedby={isCurrent ? 'isCurrentPageText' : undefined}
        className={className}
        css={css`
          ${interfaceUI.small(theme)};
          text-decoration: none;
          color: ${theme.colors.neutral.white};
          font-weight: 600;
          padding: 1.6rem;

          @media screen and (max-width: 479px) {
            border-bottom: 1px solid ${theme.colors.neutral.grey800};
            display: block;
            width: 100%;

            &:hover {
              border-bottom: 1px solid ${theme.colors.accent.primaryDark};
              background: ${theme.colors.accent.primaryDark};
              color: ${theme.colors.neutral.white};
            }
          }

          @media screen and (min-width: 480px) {
            border-bottom: 0;

            &:hover {
              color: ${theme.colors.accent.primaryLight};
            }
          }

          ${isCurrent &&
            css`
              color: ${theme.colors.accent.secondaryLight};
              cursor: default;

              &:hover {
                background: none;
                border-color: ${theme.colors.neutral.grey800};
              }

              &:focus {
                color: ${theme.colors.neutral.black};
              }

              @media screen and (min-width: 480px) {
                position: relative;

                ::after {
                  display: block;
                  width: calc(100% - 3.2rem);
                  content: '';
                  border-bottom: 2px solid;
                  position: absolute;
                  bottom: 0.8rem;
                  left: 1.6rem;
                  right: 1.6rem;
                }
              }
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
        to={link}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavigationMenuItem;
