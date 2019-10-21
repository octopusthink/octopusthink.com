import { graphql } from 'gatsby';
import React from 'react';

import HomepageContent from 'components/HomepageContent';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SEO from 'components/SEO';
import Helmet from 'react-helmet';

import App from 'templates/App';

export const Page = (props) => {
  const { data } = props;
  const { page } = data;
  const { metaDescription, summary, summaryExtra, title } = page.fields;
  const description = metaDescription || summary;

  return (
    <App>
      <SEO title={title} description={description} homepage />
      <PageWrapper>
        <PageHeader
          pageTitle={title}
          summary={summary}
          summaryExtra={summaryExtra}
          description={description}
        />
        <HomepageContent />
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        metaDescription
        slug
        summary
        summaryExtra
        title
      }
      htmlAst
      rawMarkdownBody
      id
    }
  }
`;

export default Page;
