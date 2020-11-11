import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { css } from '@emotion/core';

const TwitterFeed = (props) => {
  const { number } = props;

  const InstagramQuery = useStaticQuery(graphql`
    query {
      allInstaNode(sort: { order: DESC, fields: timestamp }) {
        totalCount
        nodes {
          id
          caption
          timestamp
          localFile {
            publicURL
          }
        }
      }
    }
  `);

  let posts = InstagramQuery.allInstaNode.nodes.slice(0);
  if (number) {
    posts = posts.slice(0, number);
  }

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 100%;
        margin-bottom: 3.2rem;
        grid-gap: 0.8rem;
      `}
    >
      {posts.map(({ id, localFile, caption }) => {
        return (
          <div>
            <a href={`https://www.instagram.com/p/${id}`}>
              <img
                src={localFile.publicURL}
                alt={caption}
                css={css`
                  max-width: 100%;
                `}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default TwitterFeed;
