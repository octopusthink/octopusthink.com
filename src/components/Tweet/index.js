import { css } from '@emotion/core';
import { Tweet as MDXTweet } from '@pauliescanlon/gatsby-mdx-embed';
import React from 'react';

const Tweet = (props) => {
  return (
    <div
      css={css`
        margin-bottom: 3.2rem;
      `}
    >
      <MDXTweet align="center" hideConversation {...props} />
    </div>
  );
};

export default Tweet;
