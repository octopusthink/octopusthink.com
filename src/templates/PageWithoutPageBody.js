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
  const { metaDescription, summary, summaryExtra, title } = page.fields;

  const description = metaDescription || summary;

  return (
    <App>
      <SEO title={title} description={description} />
      <PageWrapper>
        <PageHeader
          summary={summary}
          summaryExtra={summaryExtra}
          description={description}
          title={title}
        />
        <MDXRenderer>{body}</MDXRenderer>
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
        summaryExtra
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
