import { css } from '@emotion/core';
import { Link, VisuallyHidden } from '@octopusthink/nautilus';
import { Tweet as MDXTweet } from '@pauliescanlon/gatsby-mdx-embed';
import React from 'react';

const Tweet = (props) => {
  const { tweetLink } = props;
  return (
    <div
      css={css`
        margin-bottom: 3.2rem;
        min-height: 260px;
        max-width: 90vw;
      `}
    >
      <MDXTweet align="center" hideConversation tweetLink={tweetLink} />
      <VisuallyHidden>
        <Link href={tweetLink}>{tweetLink}</Link>
      </VisuallyHidden>
    </div>
  );
};

export default Tweet;
