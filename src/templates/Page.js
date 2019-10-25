import { graphql } from 'gatsby';
import React from 'react';

import { markdown } from 'utils/markdown';

import PageBody from 'components/PageBody';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SEO from 'components/SEO';
import App from 'templates/App';

export const Page = (props) => {
  const { data } = props;

  const { page } = data;
  const { mdxAST } = page;
  const { metaDescription, summary, summaryExtra, title } = page.fields;

  const description = metaDescription || summary;
  const content = markdown(mdxAST);

  return (
    <App>
      <SEO title={title} description={description} />
      <PageWrapper>
        <PageHeader
          pageTitle={title}
          summary={summary}
          summaryExtra={summaryExtra}
          description={description}
        />
        <PageBody>{content}</PageBody>
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
      mdxAST
      rawBody
      id
    }
  }
`;

export default Page;
