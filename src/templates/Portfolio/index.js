import { graphql } from 'gatsby';
import React, { Fragment } from 'react';

import Divider from 'components/Divider';
import GridLayout from 'components/GridLayout';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import PortfolioCard from 'components/PortfolioCard';
import SEO from 'components/SEO';
import Statistic from 'components/Statistic';
import App from 'templates/App';

export const PortfolioList = (props) => {
  const { data } = props;
  const { portfolioItems } = data;
  const pageTitle = 'Selected projects';
  const pageSummary =
    'We’ve designed and built all sorts of different apps, websites, and products over the years.';
  const description =
    'An overview of projects we’ve worked on, ranging from WordPress development and design systems to open-source projects and custom web apps.';

  return (
    <App>
      <SEO title={pageTitle} description={description} />
      <PageWrapper>
        <PageHeader pageTitle={pageTitle} summary={pageSummary} />

        <GridLayout columns="3">
          <Statistic number="28" label="Years experience" />
          <Statistic number="134" label="Happy customers" />
          <Statistic number="256" label="Projects shipped" />

          {portfolioItems.edges.map(({ node }) => {
            const { fields } = node;
            const { slug, summary, summaryShort, title, titleShort, thumbnail } = fields;
            const displayTitle = titleShort || title;
            const displaySummary = summaryShort || summary;

            return (
              <Fragment key={slug}>
                <PortfolioCard
                  slug={slug}
                  summary={displaySummary}
                  title={displayTitle}
                  thumbnail={thumbnail}
                />
              </Fragment>
            );
          })}
        </GridLayout>
        <Divider light />
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query portfolioItemsList {
    portfolioItems: allMdx(
      sort: { fields: [fields___order], order: ASC }
      filter: { fileAbsolutePath: { regex: "//content/work/" } }
    ) {
      edges {
        node {
          fields {
            slug
            summary
            summaryShort
            title
            titleShort
            thumbnail
          }
        }
      }
    }
  }
`;

export default PortfolioList;
