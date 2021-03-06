import { Icon, interfaceUI, VisuallyHidden, useTheme } from '@octopusthink/nautilus';
import React, { useState } from 'react';
import { css, Global } from '@emotion/core';
import useEventListener from '@use-it/event-listener';

import NavigationMenuItem from 'components/NavigationMenuItem';

const NavigationMenu = () => {
  // Menu is hidden by default on mobile.
  const [hideMenu, setHideMenu] = useState(true);
  const theme = useTheme();
  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  };
  const closeMenu = () => {
    setHideMenu(true);
  };

  let buttonLabelText = 'Menu';

  if (!hideMenu) {
    buttonLabelText = 'Close';
  }

  useEventListener('keydown', (event) => {
    if (!hideMenu && event.key === 'Escape') {
      closeMenu();
    }
  });

  return (
    <React.Fragment>
      <Global
        styles={
          !hideMenu
            ? css`
                body {
                  @media screen and (max-width: 479px) {
                    overflow: hidden;
                  }
                }
              `
            : undefined
        }
      />
      <nav
        role="navigation"
        css={css`
          z-index: 2;

          ${!hideMenu &&
            css`
              ::before {
                @media screen and (max-width: 479px) {
                  background: ${theme.colors.neutral.white};
                  content: '';
                  position: absolute;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  opacity: 0.1;
                }
              }
            `}
        `}
      >
        <button
          css={css`
            @media screen and (max-width: 479px) {
              ${interfaceUI.small(theme)};
              background: none;
              border: none;
              box-shadow: none;
              color: ${theme.colors.text.inverse};
              cursor: pointer;
              display: flex;
              height: 5.6rem;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-transform: uppercase;
              font-size: 0.9rem;
              font-weight: 600;
              width: 5.6rem;
              letter-spacing: 0.05em;
              position: relative; // Ensures that the full area is a touch target.

              &:focus {
                border: 2px solid ${theme.colors.accent.primaryLight};
              }
            }

            @media screen and (min-width: 480px) {
              display: none;
            }
          `}
          aria-expanded={hideMenu ? 'false' : 'true'}
          onClick={toggleMenu}
          type="button"
        >
          {hideMenu ? (
            <Icon
              css={css`
                margin: 0;
              `}
              color={theme.colors.neutral.white}
              name="menu"
              title="Open navigation menu"
            />
          ) : (
            <Icon
              css={css`
                margin: 0;
              `}
              color={theme.colors.neutral.white}
              name="x"
              title="Close navigation menu"
            />
          )}
          {buttonLabelText}
        </button>

        <ul
          css={css`
            list-style-type: none;
            margin: 0;
            padding: 0;

            /* Mobile menu */
            @media screen and (max-width: 479px) {
              background: ${theme.colors.neutral.black};
              position: fixed;
              top: 0;
              left: 0;
              bottom: 0;
              grid-gap: 0;
              justify-content: space-between;
              margin-bottom: 0;
              box-shadow: 4px 0 8px rgba(0, 0, 0, 0.25);
              width: calc(100% - 6.4rem);
              transition: left 200ms ease-in;

              ${hideMenu &&
                css`
                  left: -100%;
                `}
            }

            @media screen and (min-width: 480px) {
              display: flex;
              margin-top: 0.4rem;
            }

            @media screen and (min-width: 480px) and (max-width: 860px) {
              margin-top: 1.6rem;
            }
          `}
        >
          <NavigationMenuItem link="/" onClick={closeMenu}>
            Home
          </NavigationMenuItem>

          <NavigationMenuItem link="/apps/" onClick={closeMenu}>
            Apps
          </NavigationMenuItem>

          <NavigationMenuItem link="/blog/" onClick={closeMenu}>
            Blog
          </NavigationMenuItem>

          <NavigationMenuItem link="/about/" onClick={closeMenu}>
            About
          </NavigationMenuItem>

          <NavigationMenuItem link="/services/" onClick={closeMenu}>
            Services
          </NavigationMenuItem>

          <NavigationMenuItem link="/contact/" onClick={closeMenu}>
            Contact
          </NavigationMenuItem>
        </ul>
        <VisuallyHidden>
          <div id="isCurrentPageText">Current page</div>
        </VisuallyHidden>
      </nav>
    </React.Fragment>
  );
};

export default NavigationMenu;
