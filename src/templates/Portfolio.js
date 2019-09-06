import { graphql } from 'gatsby';
import React from 'react';

import { markdown } from '../utils/markdown';

import App from './App';
import PageHeader from '../components/PageHeader';
import PageBody from '../components/PageBody';
import SEO from '../components/SEO';

export const Portfolio = (props) => {
  const { data } = props;

  const { portfolioPiece } = data;
  const { htmlAst } = portfolioPiece;
  const { metaDescription, title, summary } = portfolioPiece.fields;

  const description = metaDescription || summary;
  const content = markdown(htmlAst);

  return (
    <App>
      <SEO title={title} description={description} />
      <PageHeader pageTitle={title} summary={summary} />
      <PageBody>{content}</PageBody>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    portfolioPiece: markdownRemark(id: { eq: $id }) {
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

export default Portfolio;
