import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Divider from 'components/Divider';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SEO from 'components/SEO';
import App from 'templates/App';

export const Portfolio = (props) => {
  const { data } = props;

  const { page } = data;
  const { body } = page;
  const { metaDescription, slug, summary, title } = page.fields;

  const description = metaDescription || summary;

  return (
    <App>
      <SEO title={title} description={description} pathname={slug} />
      <PageWrapper>
        <PageHeader title={title} summary={summary} description={description} />
        <MDXRenderer>{body}</MDXRenderer>
        <Divider light />
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    page: mdx(id: { eq: $id }) {
      fields {
        metaDescription
        slug
        summary
        title
      }
      body
      mdxAST
      rawBody
      id
    }
  }
`;

export default Portfolio;
