import { graphql } from 'gatsby';
import React from 'react';

import { markdown } from 'utils/markdown';

import PageBody from 'components/PageBody';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SEO from 'components/SEO';
import App from 'templates/App';

export const NotFound = (props) => {
  const { data } = props;

  const { page } = data;
  const { htmlAst } = page;
  const { title, summary } = page.fields;

  const content = markdown(htmlAst);

  return (
    <App>
      <SEO title={title} />
      <PageWrapper>
        <PageHeader pageTitle={title} summary={summary} />
        <PageBody>{content}</PageBody>
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
        title
        summary
      }
      htmlAst
      rawMarkdownBody
      id
    }
  }
`;

export default NotFound;
