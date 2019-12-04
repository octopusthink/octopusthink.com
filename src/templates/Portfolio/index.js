import { graphql } from 'gatsby';
import React, { Fragment } from 'react';

import Divider from 'components/Divider';
import GridLayout from 'components/GridLayout';
import Image from 'components/Image';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import PortfolioCard from 'components/PortfolioCard';
import SEO from 'components/SEO';
import Statistic from 'components/Statistic';
import TestimonialCarousel from 'components/TestimonialCarousel';
import App from 'templates/App';

export const PortfolioList = (props) => {
  const { data } = props;
  const { page, portfolioItems } = data;

  const { metaDescription, summary: pageSummary, title: pageTitle } = page.fields;

  return (
    <App>
      <SEO title={pageTitle} description={metaDescription} />
      <PageWrapper>
        <PageHeader pageTitle={pageTitle} summary={pageSummary} />

        <GridLayout columns="3">
          <Statistic number="28" label="Years experience" />
          <Statistic number="100+" label="Projects shipped" />
          <Statistic number="958" label="Diet Cokes consumed" />

          {portfolioItems.edges.map(({ node }) => {
            const { fields } = node;
            const { category, slug, summary, summaryShort, title, titleShort, thumbnail } = fields;
            const displayTitle = titleShort || title;
            const displaySummary = summaryShort || summary;

            return (
              <Fragment key={slug}>
                <PortfolioCard
                  category={category}
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

        <TestimonialCarousel />

        <GridLayout columns="3" gap="8.0">
          <Image src="google.png" alt="Google logo" />
          <Image src="firefox.png" alt="Firefox logo" />
          <Image src="mozilla.png" alt="Mozilla logo" />
          <Image src="wordpress.com.png" alt="WordPress logo" />
          <Image src="automattic.png" alt="Automattic logo" />
          <Image src="ea.png" alt="EA logo" />
          <Image src="10up.png" alt="10up logo" />
          <Image src="fernwood.png" alt="Fernwood logo" />
          <Image src="arbor-day-foundation.png" alt="Arbor Day Foundation logo" />
          <Image src="hachette.png" alt="Hachette Book Group logo" />
          <Image src="nebula.png" alt="Nebula logo" />
          <Image src="ns-government.png" alt="Nova Scotia Government logo" />
          <Image src="saffron-marigold.png" alt="Saffron Marigold logo" />
          <Image src="snp.png" alt="Scottish National Party logo" />
          <Image src="standard.png" alt="Standard logo" />
          <Image src="wicker-emporium.png" alt="Wicker Emporium logo" />
          <Image src="wordpress.png" alt="WordPress logo" />
          <Image src="nslc.png" alt="Nova Scotia Liquor Commission logo" />
        </GridLayout>

        <Divider light />
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query portfolioItemsList($id: String!) {
    portfolioItems: allMdx(
      sort: { fields: [fields___order], order: ASC }
      filter: { fileAbsolutePath: { regex: "//content/work/" } }
    ) {
      edges {
        node {
          fields {
            category
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

export default PortfolioList;
