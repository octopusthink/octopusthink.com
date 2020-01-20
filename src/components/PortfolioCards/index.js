import { graphql, useStaticQuery } from 'gatsby';
import { knuthShuffle } from 'knuth-shuffle';
import React, { Fragment } from 'react';

import PortfolioCard from 'components/PortfolioCard';

const PortfolioCards = (props) => {
  const { number, random } = props;

  const portfolioQuery = useStaticQuery(graphql`
    query {
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
    }
  `);

  let itemsToUse = portfolioQuery.portfolioItems.edges.slice(0);
  if (random) {
    itemsToUse = knuthShuffle(itemsToUse.slice(0));
  }
  if (number) {
    itemsToUse = itemsToUse.slice(0, number);
  }

  return (
    <Fragment>
      {itemsToUse.map(({ node }) => {
        const { fields } = node;
        const { category, slug, summary, summaryShort, title, titleShort, thumbnail } = fields;
        const displayTitle = titleShort || title;
        const displaySummary = summaryShort || summary;

        return (
          <PortfolioCard
            key={slug}
            category={category}
            slug={slug}
            summary={displaySummary}
            title={displayTitle}
            thumbnail={thumbnail}
          />
        );
      })}
    </Fragment>
  );
};

PortfolioCards.defaultProps = {
  number: undefined,
  random: false,
};

export default PortfolioCards;
