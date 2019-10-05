import { Icon, Link, interfaceUI, useTheme } from '@octopusthink/nautilus';
import React, { useState } from 'react';
import { css } from '@emotion/core';

const ListLink = (props) => {
  const { children, iconName, link, onClick } = props;

  const [isCurrent, setIsCurrent] = useState();
  const theme = useTheme();

  return (
    <li>
      <Link
        __unstyled
        to={link}
        css={css`
          ${interfaceUI.small(theme)};
          text-decoration: none;
          color: ${theme.colors.text.inverse};
          font-weight: 500;
          border-bottom: 0;
          display: block;
          padding: 0.8rem 0;
          z-index: 2;
          position: relative;

          &:hover {
            color: ${theme.colors.accent.primary};

            span::after {
              border-color: ${theme.colors.accent.primaryLight};
            }

            .icon {
              &::before {
                opacity: 0.5;
                transform: scale(1);
              }

              svg {
                stroke: ${theme.colors.accent.primary};
                z-index: 2;
                position: relative;
              }
            }
          }

          &:focus {
            outline: 2px solid ${theme.colors.accent.primaryLight};
            outline-offset: 2px;

            span::after {
              border-color: transparent;
            }
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
        <span
          css={css`
            position: relative;

            &::after {
              content: '';
              border-bottom: 2px solid ${theme.colors.text.inverseDark};
              position: absolute;
              bottom: -4px;
              left: 0;
              right: 0;

              ${iconName &&
                css`
                  display: none;
                `}
            }
          `}
        >
          {iconName && (
            <Icon
              className="icon"
              strokeColor={theme.colors.neutral.grey600}
              name={iconName}
              css={css`
                width: 2.4rem;
                height: 2.4rem;
                position: relative;

                ::before {
                  transform: scale(0.1);
                  opacity: 0;
                  content: '';
                  position: absolute;
                  top: -8px;
                  right: -8px;
                  bottom: -8px;
                  left: -8px;
                  background: rgba(0, 0, 0, 0.5);
                  border-radius: 100%;
                  z-index: 1;
                  transition: all 200ms ease-out;
                }
              `}
            />
          )}
          {children}
        </span>
      </Link>
    </li>
  );
};

export default ListLink;
