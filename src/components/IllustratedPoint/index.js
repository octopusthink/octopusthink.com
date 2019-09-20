import { Button, Heading, Link, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const IllustratedPoint = (props) => {
  const { children, illustration: Illustration, label, ...otherProps } = props;

  const theme = useTheme();

  return (
    <div>
      <div
        css={css`
          height: 24rem;
          width: 24rem;
          margin: 0 auto;
          align-items: center;
          justify-content: center;
        `}
      >
        <Illustration />
      </div>
      <Heading
        level={3}
        css={css`
          color: ${theme.colors.text.inverse};
          text-align: center;
        `}
      >
        {label}
      </Heading>
      <Paragraph
        small
        inverse
        css={css`
          grid-start: 1;
        `}
      >
        {children}
      </Paragraph>
    </div>
  );
};

export default IllustratedPoint;
