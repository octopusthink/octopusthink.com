import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import ListLink from '../ListLink';

const SocialMediaLinks = (props) => {
  const { className } = props;
  const theme = useTheme();

  return (
    <ul
      className={className}
      css={css`
        list-style-type: none;
        margin: 0;
        padding: 0;
      `}
    >
      <ListLink link="//twitter.com/octopusthinks" iconName="twitter">
        Twitter
      </ListLink>

      <ListLink link="//instagram.com/octopusthinks" iconName="instagram">
        Instagram
      </ListLink>

      <ListLink link="mailto:hello@octopusthink.com" iconName="inbox">
        Email
      </ListLink>

      <ListLink link="//github.com/octopusthink" iconName="github">
        GitHub
      </ListLink>
    </ul>
  );
};

export default SocialMediaLinks;
