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
        max-width: 40rem;

        @media screen and (min-width: 640px) {
          grid-gap: 3.2rem;
          grid-template-columns: 1fr 1fr 1fr;
        }
      `}
    >
      <ListLink a link="https://twitter.com/octopusthinks" iconName="twitter" centre>
        Twitter
      </ListLink>

      <ListLink a link="//instagram.com/octopusthinks" iconName="instagram" centre>
        Instagram
      </ListLink>

      <ListLink a link="//github.com/octopusthink" iconName="github" centre>
        GitHub
      </ListLink>
    </ul>
  );
};

export default SocialMediaLinks;
