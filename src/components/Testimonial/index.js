import { Link, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const ServicesContent = (props) => {
  const { author, children, company, position, url } = props;
  const theme = useTheme();

  return (
    <blockquote
      css={css`
        font-size: 1.2em;
        position: relative;

        &::before {
          color: ${theme.colors.text.inverseDark};
          content: '“';
          font-family: Georgia, 'Times New Roman', Times, serif;
          font-size: 12rem;
          position: absolute;
          top: -2.8rem;
          left: -5.6rem;
          display: block;
          opacity: 0.25;
        }
      `}
    >
      {children}

      <cite
        css={css`
          ${metadata.small(theme)};
          color: ${theme.colors.text.inverseDark};
          font-style: normal;
        `}
      >
        {author}
        {position && <React.Fragment>, {position} </React.Fragment>}
        <Link as="a" href={url}>
          {company}
        </Link>
      </cite>
    </blockquote>
  );
};

export default ServicesContent;
