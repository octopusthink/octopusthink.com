import { Link, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const QuoteLink = ({ company, name, url }) => {
  const theme = useTheme();

  if (!url) {
    return null;
  }

  return (
    <Link
      href={url}
      css={css`
        color: ${theme.colors.text.inverse};
        border-color: ${theme.colors.text.inverseDark};
      `}
    >
      {company || name}
    </Link>
  );
};

const Quote = (props) => {
  const { inverse, name, children, company, title, url } = props;
  const theme = useTheme();

  let textColor;
  if (inverse) {
    textColor = theme.colors.text.inverseDark;
  } else {
    textColor = theme.colors.text.light;
  }

  let attribution;
  // eslint-disable-next-line react/jsx-props-no-spreading
  const nameLink = !company && url ? <QuoteLink {...props} /> : name;
  // eslint-disable-next-line react/jsx-props-no-spreading
  const companyLink = company && url && <QuoteLink {...props} />;

  if (company && url) {
    attribution = (
      <React.Fragment>
        {title && (
          <React.Fragment>
            {title}
            {', '}
          </React.Fragment>
        )}
        {companyLink}
      </React.Fragment>
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
        margin: 6.4rem 0;

        @media screen and (min-width: 640px) {
          margin-left: 2.4rem;
        }

        &::before {
          color: ${textColor};
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
          color: ${textColor};
          font-style: normal;
        `}
      >
        {nameLink}
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

export default Quote;
