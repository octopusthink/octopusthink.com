import { interfaceUI } from '@octopusthink/nautilus';
import React, { useMemo, useState } from 'react';
import { css } from '@emotion/core';
import shortid from 'shortid';

import theme from '../../../config/theme';

export const Checkbox = (props) => {
  const { children, id, ...otherProps } = props;
  const [generatedId] = useState(shortid.generate());
  const inputId = useMemo(() => {
    return id || generatedId;
  }, [generatedId, id]);

  return (
    <div
      css={css`
        margin-bottom: 0.8rem;
      `}
    >
      <input
        id={inputId}
        type="checkbox"
        css={css`
          position: absolute;
          z-index: 1;
          top: -2px;
          left: -2px;
          width: 44px;
          height: 44px;
          margin: 0;
          opacity: 0;

          &:checked + label {
            color: ${theme.colors.text.dark};
          }

          /* Hide the checkmark by default. */
          & + label::after {
            content: none;
          }

          /*Unhide the checkmark on the checked state*/
          &:checked + label::after {
            content: '';
          }
        `}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
      <label
        htmlFor={inputId}
        css={css`
          ${interfaceUI.small(theme)};
          color: ${theme.colors.text.default};
          position: relative;
          padding-left: 3.2rem;

          &::before,
          &::after {
            position: absolute;
          }

          /*Outer-box*/
          &::before {
            border: 2px solid ${theme.colors.neutral.black};
            content: '';
            display: inline-block;
            height: 2rem;
            width: 2rem;
            top: 0;
            left: 0;
          }

          /*Checkmark*/
          &::after {
            left: 4px;
            top: 6px;
            content: '';
            display: inline-block;
            height: 6px;
            width: 14px;
            border-left: 3px solid ${theme.colors.accent.secondary};
            border-bottom: 3px solid ${theme.colors.accent.secondary};
            transform: rotate(-50deg);
          }
        `}
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
