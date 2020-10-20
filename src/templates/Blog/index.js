import { Link, List } from '@octopusthink/nautilus';
import { graphql } from 'gatsby';
import React, { Fragment } from 'react';

import Divider from 'components/Divider';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import PostCard from 'components/PostCard';
import SEO from 'components/SEO';
import config from 'data/SiteConfig';
import App from 'templates/App';
import GridLayout from 'components/GridLayout';

export const BlogList = (props) => {
  const { data, pageContext } = props;
  const { posts } = data;
  const { numberOfPages, currentPage } = pageContext;
  const pageTitle = config.blogTitle;
  const pageSummary = config.blogSummary;
  const description = config.blogDescription;
  const pageSlug = config.blogUrl;

  return (
    <App>
      <SEO title={pageTitle} description={description} pathname={pageSlug} />
      <PageWrapper>
        <PageHeader summary={pageSummary} title={pageTitle} />
        <GridLayout columnsTablet="2" gap="8.0">
          {posts.edges.map(({ node }) => {
            const { fields, timeToRead: readingTime } = node;
            const { date, slug, summary, title, thumbnail } = fields;
            return (
              <Fragment key={slug}>
                <PostCard
                  date={date}
                  readingTime={readingTime}
                  slug={slug}
                  summary={summary}
                  title={title}
                  image={thumbnail}
                />
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
                      {currentPage === index ? (
                        <span>{index}</span>
                      ) : (
                        <Link to={link}>{index}</Link>
                      )}
                    </List.Item>
                  );
                })}
            </List>
          )}
        </GridLayout>
        <Divider light />
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query blogPostsList($skip: Int!, $limit: Int!, $nowTimestamp: Int!) {
    posts: allMdx(
      sort: { fields: [fields___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//content/blog/" }
        fields: { timestamp: { lte: $nowTimestamp } }
      }
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
            thumbnail
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
