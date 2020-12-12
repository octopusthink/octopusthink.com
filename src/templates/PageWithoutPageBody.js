import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SEO from 'components/SEO';
import App from 'templates/App';

export const PageWithoutPageBody = (props) => {
  const { data } = props;

  const { page } = data;
  const { body } = page;
  const { canonical, metaDescription, slug, summary, title } = page.fields;

  const description = metaDescription || summary;

  return (
    <App>
      <SEO canonical={canonical} title={title} description={description} pathname={slug} />
      <PageWrapper>
        <PageHeader summary={summary} description={description} title={title} />
        <MDXRenderer>{body}</MDXRenderer>
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    page: mdx(id: { eq: $id }) {
      fields {
        canonical
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

export default PageWithoutPageBody;
