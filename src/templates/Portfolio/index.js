import { graphql } from 'gatsby';
import React from 'react';

import Divider from 'components/Divider';
import FriendLogos from 'components/FriendLogos';
import GridLayout from 'components/GridLayout';
import Panel from 'components/Panel';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import PortfolioCards from 'components/PortfolioCards';
import SEO from 'components/SEO';
import Statistic from 'components/Statistic';
import TestimonialCarousel from 'components/TestimonialCarousel';
import App from 'templates/App';

export const PortfolioList = (props) => {
  const { data } = props;
  const { page } = data;

  const { metaDescription, summary: pageSummary, slug, title: pageTitle } = page.fields;

  return (
    <App>
      <SEO title={pageTitle} description={metaDescription} pathname={slug} />
      <PageWrapper>
        <PageHeader summary={pageSummary} title={pageTitle} />

        <GridLayout columnsTablet="2" columnsDesktop="3">
          <Statistic number="28" label="Years experience" />
          <Statistic number="100+" label="Projects shipped" />
          <Statistic number="958" label="Diet Cokes consumed" />

          <PortfolioCards />
        </GridLayout>

        <Divider light />

        <TestimonialCarousel />

        <Panel fullwidth>
          <FriendLogos title="A few of our friends" />
        </Panel>
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query portfolioItemsList($id: String!) {
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

export default PortfolioList;
