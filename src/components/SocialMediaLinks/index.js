import React from 'react';
import { css } from '@emotion/core';

import ListLink from 'components/ListLink';

const SocialMediaLinks = (props) => {
  const { className } = props;

  return (
    <ul
      className={className}
      css={css`
        list-style-type: none;
        margin: 0 auto;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        @media screen and (max-width: 439px) {
          grid-gap: 1.6rem;

          .label {
            display: none;
          }
        }

        @media screen and (min-width: 440px) {
          max-width: 48rem;
          grid-gap: 3.2rem;
        }
      `}
    >
      <ListLink a link="https://twitter.com/octopusthink" iconName="twitter" centre>
        <span className="label">Twitter</span>
      </ListLink>

      <ListLink a link="https://instagram.com/octopusthinks" iconName="instagram" centre>
        <span className="label">Instagram</span>
      </ListLink>

      <ListLink a link="https://github.com/octopusthink" iconName="github" centre>
        <span className="label">GitHub</span>
      </ListLink>
    </ul>
  );
};

export default SocialMediaLinks;
