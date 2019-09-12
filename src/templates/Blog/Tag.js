import { Heading, Link, Paragraph, Tags } from '@octopusthink/nautilus';
import { graphql } from 'gatsby';
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import App from '../App';
import PageHeader from '../../components/PageHeader';
import PageBody from '../../components/PageBody';
import PostCard from '../../components/PostCard';
import SEO from '../../components/SEO';

export const BlogTags = (props) => {
  const { data, pageContext } = props;
  const { posts, tag } = data;

  let summary;
  let title;

  if (tag.edges.length > 0) {
    const tagData = tag.edges[0].node;
    title = `Posts tagged #${tagData.name}`;
    summary = tagData.summary;
  } else {
    title = `Posts tagged #${pageContext.tag}`;
    summary = `An archive of blog posts tagged #${pageContext.tag}`;
  }
  const description = summary;

  return (
    <App>
      <SEO title={title} description={description} />

      <PageHeader pageTitle={title} summary={summary} />
      <PageBody>
        {posts.edges.map(({ node }) => {
          const { authors, date, readingTime, slug, summary, title } = node.fields;

          return (
            <Fragment key={slug}>
              <PostCard
                date={date}
                readingTime={readingTime}
                slug={slug}
                summary={summary}
                title={title}
              />
            </Fragment>
          );
        })}
      </PageBody>
    </App>
  );
};

export const pageQuery = graphql`
  query($tagId: String!, $nowTimestamp: Int!) {
    posts: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//content/blog/" }
        fields: { timestamp: { lte: $nowTimestamp }, tags: { elemMatch: { id: { eq: $tagId } } } }
      }
    ) {
      edges {
        node {
          fields {
            authors {
              bio
              id
              name
            }
            date
            readingTime {
              text
            }
            slug
            summary
            title
            tags {
              id
              name
              summary
            }
          }
        }
      }
    }
    tag: allTagsYaml(filter: { id: { eq: $tagId } }) {
      edges {
        node {
          id
          summary
          name
        }
      }
    }
  }
`;

export default BlogTags;
