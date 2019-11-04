import { graphql } from 'gatsby';
import React from 'react';

import PageBody from 'components/PageBody';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SEO from 'components/SEO';
import App from 'templates/App';

export const NotFound = (props) => {
  const { data } = props;

  const { page } = data;
  const { body } = page;
  const { title, summary } = page.fields;

  return (
    <App>
      <SEO title={title} />
      <PageWrapper>
        <PageHeader pageTitle={title} summary={summary} />
        <PageBody>{body}</PageBody>
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    page: mdx(id: { eq: $id }) {
      fields {
        slug
        title
        summary
      }
      body
      id
    }
  }
`;

export default NotFound;
