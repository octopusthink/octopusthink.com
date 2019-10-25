import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import { markdown } from 'utils/markdown';

import PageBody from 'components/PageBody';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SEO from 'components/SEO';
import App from 'templates/App';

export const Portfolio = (props) => {
  const { data } = props;

  const { portfolioPiece } = data;
  const { body, mdxAST } = portfolioPiece;
  const { metaDescription, title, summary } = portfolioPiece.fields;

  const description = metaDescription || summary;
  const content = body; //markdown(mdxAST);
  console.log('html', body);

  return (
    <App>
      <SEO title={title} description={description} />
      <PageWrapper>
        <PageHeader pageTitle={title} summary={summary} />
        <PageBody>
          <MDXRenderer>{content}</MDXRenderer>
        </PageBody>
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    portfolioPiece: mdx(id: { eq: $id }) {
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
