import { Heading, Link, List, Paragraph, Tags } from '@octopusthink/nautilus';
import { graphql } from 'gatsby';
import React, { Fragment } from 'react';

import App from '../App';
import PageHeader from '../../components/PageHeader';
import PageBody from '../../components/PageBody';
import PostCard from '../../components/PostCard';
import SEO from '../../components/SEO';

export const BlogList = props => {
  const { data, pageContext } = props;
  const { posts } = data;
  const { numberOfPages, currentPage } = pageContext;
  const title = 'Stories';
  const summary =
    'AKA our blog, in which we talk about design, technology, inclusion, and anything else we’ve been thinking about lately. Oh, and adorable cephalopod stories, because they make us happy.';
  const description =
    'The blog of Octopus Think. Design, technology, inclusion, and adorable cephalopod stories.';

  return (
    <App>
      <SEO title={title} description={description} />
      <PageHeader pageTitle={title} summary={summary} />

      <PageBody>
        {posts.edges.map(({ node }) => {
          const { date, slug, summary, title } = node.fields;
          return (
            <Fragment key={slug}>
              <PostCard slug={slug} date={date} summary={summary} title={title} />
            </Fragment>
          );
        })}

        {numberOfPages > 1 && (
          <List>
            {Array(numberOfPages)
              .fill(null)
              .map((item, i) => {
                const index = i + 1;
                const link = index === 1 ? '/blog' : `/blog/page=${index}`;

                return (
                  <List.Item key={link}>
                    {currentPage === index ? <span>{index}</span> : <Link to={link}>{index}</Link>}
                  </List.Item>
                );
              })}
          </List>
        )}
      </PageBody>
    </App>
  );
};

export const pageQuery = graphql`
  query blogPostsList($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "//content/blog/" } }
      limit: $limit
      skip: $skip
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
        }
      }
    }
  }
`;

export default BlogList;
