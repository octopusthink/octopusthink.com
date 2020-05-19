import { Button, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const ButtonInverse = (props) => {
  const theme = useTheme();
  const { children, className, noMargin, to } = props;

  return (
    <Button
      className={className}
      navigation
      noMargin={noMargin}
      minimal
      to={to}
      css={css`
        color: ${theme.colors.state.interactiveTextInverse};

        &:hover {
          color: ${theme.colors.state.hoverTextInverse};
        }

        &::before {
          border-color: ${theme.colors.state.hoverTextInverse};
        }
      `}
    >
      {children}
    </Button>
  );
};

export default ButtonInverse;
