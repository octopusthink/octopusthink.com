import { interfaceUI } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import config from '../../../config';
import theme from '../../../config/theme';

export const Checkbox = (props) => {
  const { children, ...otherProps } = props;

  return (
    <div>
      <input
        type="checkbox"
        css={css`
          //display: none;
          margin-bottom: 1.6rem;
          border-bottom: 2px solid ${theme.colors.state.interactive};
          color: ${theme.colors.state.interactiveText};
          text-decoration: none;
          transition: all 200ms ease-in-out;


          &:hover {
            border-color: ${theme.colors.state.hover};
            color: ${theme.colors.state.hoverText};
          }

          &:focus {
            background: ${theme.colors.state.interactive};
            border-color: ${theme.colors.state.interactiveText};
            color: ${theme.colors.text.dark};
            outline: none;

        `}
        {...otherProps}
      />
      <label
        css={css`
          ${interfaceUI.small(theme)};
        `}
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
