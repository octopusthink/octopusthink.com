import { Link, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const Testimonial = (props) => {
  const { name, children, company, title, url } = props;
  const theme = useTheme();

  let attribution;
  // If we have a company name and a link, wrap a link around the company name.
  if (company && url) {
    attribution = (
      <React.Fragment>
        {title && (
          <React.Fragment>
            {title}
            {', '}
          </React.Fragment>
        )}
        <Link
          as="a"
          href={url}
          css={css`
            color: ${theme.colors.text.inverse};
            border-color: ${theme.colors.text.inverseDark};
          `}
        >
          {company}
        </Link>
      </React.Fragment>
    );
  } else if (title && url) {
    attribution = (
      <Link
        as="a"
        href={url}
        css={css`
          color: ${theme.colors.text.inverse};
          border-color: ${theme.colors.text.inverseDark};
        `}
      >
        {title}
      </Link>
    );
  } else if (title && company) {
    attribution = `${title}, ${company}`;
  } else if (title) {
    attribution = title;
  } else if (company) {
    attribution = company;
  }

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
        {name}
        {attribution && (
          <React.Fragment>
            {' · '}
            {attribution}{' '}
          </React.Fragment>
        )}
      </cite>
    </blockquote>
  );
};

export default Testimonial;
