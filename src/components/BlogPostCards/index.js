import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';

import PostCard from 'components/PostCard';

const BlogPostCards = (props) => {
  const { number } = props;

  const blogPostQuery = useStaticQuery(graphql`
    query {
      posts: allMdx(
        sort: { fields: [fields___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "//content/blog/" } }
      ) {
        edges {
          node {
            fields {
              date
              slug
              summary
              title
              tags {
                name
                summary
              }
            }
            timeToRead
          }
        }
      }
    }
  `);

  let posts = blogPostQuery.posts.edges.slice(0);
  if (number) {
    posts = posts.slice(0, number);
  }

  return (
    <Fragment>
      {posts.map(({ node }) => {
        const { fields, timeToRead: readingTime } = node;
        const { date, slug, summary, title } = fields;
        return (
          <PostCard
            key={slug}
            date={date}
            heading={3}
            readingTime={readingTime}
            slug={slug}
            summary={summary}
            title={title}
            inverse
          />
        );
      })}
    </Fragment>
  );
};

export default BlogPostCards;
