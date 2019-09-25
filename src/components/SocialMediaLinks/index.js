import { Heading, Icon, Link, List, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import SiteMapItem from '../SiteMapItem';

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
      <SiteMapItem link="//twitter.com/octopusthinks">
        <Icon strokeColor={theme.colors.neutral.grey600} name="twitter" title="Twitter" />
        Twitter
      </SiteMapItem>

      <SiteMapItem link="//instagram.com/octopusthinks">
        <Icon strokeColor={theme.colors.neutral.grey600} name="instagram" title="Instagram" />
        Instagram
      </SiteMapItem>

      <SiteMapItem link="mailto:hello@octopusthink.com">
        <Icon strokeColor={theme.colors.neutral.grey600} name="inbox" title="Email" />
        Email
      </SiteMapItem>

      <SiteMapItem link="//github.com/octopusthink">
        <Icon strokeColor={theme.colors.neutral.grey600} name="github" title="GitHub" />
        GitHub
      </SiteMapItem>
    </ul>
  );
};

export default SocialMediaLinks;
