import { Heading, Icon, Link, List, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import ListLink from '../ListLink';

const SocialMediaLinks = (props) => {
  const theme = useTheme();

  return (
    <ul
      className={props.className}
      css={css`
        list-style-type: none;
        margin: 0;
        padding: 0;
      `}
    >
      <ListLink
        link="//twitter.com/octopusthinks"
        icon={<Icon strokeColor={theme.colors.neutral.grey600} name="twitter" />}
      >
        Twitter
      </ListLink>

      <ListLink
        link="//instagram.com/octopusthinks"
        icon={<Icon strokeColor={theme.colors.neutral.grey600} name="instagram" />}
      >
        Instagram
      </ListLink>

      <ListLink
        link="mailto:hello@octopusthink.com"
        icon={<Icon strokeColor={theme.colors.neutral.grey600} name="inbox" />}
      >
        Email
      </ListLink>

      <ListLink
        link="//github.com/octopusthink"
        icon={<Icon strokeColor={theme.colors.neutral.grey600} name="github" />}
      >
        GitHub
      </ListLink>
    </ul>
  );
};

export default SocialMediaLinks;
