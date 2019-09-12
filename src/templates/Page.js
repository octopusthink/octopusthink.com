import { graphql } from 'gatsby';
import React from 'react';

import { markdown } from '../utils/markdown';

import App from './App';
import PageBody from '../components/PageBody';
import PageHeader from '../components/PageHeader';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

export const Page = props => {
  const { data } = props;

  const { page } = data;
  const { htmlAst } = page;
  const { metaDescription, summary, title } = page.fields;

  const description = metaDescription || summary;
  const content = markdown(htmlAst);

  return (
    <App>
      <SEO title={title} description={description} />
      <PageWrapper>
        <PageHeader pageTitle={title} summary={summary} description={description} />
        <PageBody>{content}</PageBody>
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
        title
      }
      htmlAst
      rawMarkdownBody
      id
    }
  }
`;

export default Page;
