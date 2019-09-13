import { Icon, Link } from '@octopusthink/nautilus';
import React, { useState } from 'react';
import { css } from '@emotion/core';

import NavigationMenuItem from '../NavigationMenuItem';
import theme from '../../../config/theme';

const NavigationMenu = () => {
  // Menu is hidden by default on mobile.
  const [hideMenu, setHideMenu] = useState(true);
  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  };
  const closeMenu = () => {
    setHideMenu(true);
  };

  return (
    <nav
      role="navigation"
      css={css`
        z-index: 1;
      `}
    >
      <button
        css={css`
          @media screen and (max-width: 479px) {
            background: none;
            border: none;
            box-shadow: none;
            cursor: pointer;
            height: 5.6rem;
            width: 5.6rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @media screen and (min-width: 480px) {
            display: none;
          }
        `}
        aria-expanded={hideMenu ? 'false' : 'true'}
        onClick={toggleMenu}
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
      </button>

      <ul
        css={css`
					list-style-type: none;
					margin: 0;
					padding: 0;

					/* Mobile menu */
					@media screen and (max-width: 479px) {
						${hideMenu &&
              css`
                display: none;
              `}
						background: ${theme.colors.neutral.black};
						position: fixed;
						top: 6.4rem;
						left: 0;
						right: 0;
						grid-gap: 0;
						justify-content: space-between;
						width: 100%;
						margin-bottom: 0;
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
        <NavigationMenuItem icon="compass" link="/" onClick={closeMenu}>
          Home
        </NavigationMenuItem>

        <NavigationMenuItem icon="help-circle" link="/about" onClick={closeMenu}>
          About
        </NavigationMenuItem>

        <NavigationMenuItem icon="coffee" link="/services" onClick={closeMenu}>
          Services
        </NavigationMenuItem>

        <NavigationMenuItem icon="camera" link="/work" onClick={closeMenu}>
          Work
        </NavigationMenuItem>

        <NavigationMenuItem icon="send" link="/contact" onClick={closeMenu}>
          Contact
        </NavigationMenuItem>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
