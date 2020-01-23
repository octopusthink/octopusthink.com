import { css } from '@emotion/core';
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
      {itemsToUse.map(({ node }, index) => {
        const { fields } = node;
        const { category, slug, summary, summaryShort, title, titleShort, thumbnail } = fields;
        const displayTitle = titleShort || title;
        const displaySummary = summaryShort || summary;

        const isLastItemAndUneven =
          (index + 1) % 2 && index + 1 === itemsToUse.length ? true : undefined;

        return (
          <PortfolioCard
            key={slug}
            category={category}
            slug={slug}
            summary={displaySummary}
            title={displayTitle}
            thumbnail={thumbnail}
            css={
              isLastItemAndUneven &&
              css`
                @media screen and (min-width: 640px) and (max-width: 1023px) {
                  display: none;
                }
              `
            }
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
