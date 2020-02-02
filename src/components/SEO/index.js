/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO(props) {
  const { canonical, description, homepage, lang, meta, pathname, title } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            siteUrl
            title
          }
        }
      }
    `,
  );

  // Inverse the order of site & page titles on homepage only.
  // TODO: Try to use Helmet's titleTemplate and/or automatic detection.
  let pageDisplayTitle = `${title} · ${site.siteMetadata.title}`;
  if (homepage) {
    pageDisplayTitle = `${site.siteMetadata.title} · ${title}`;
  }

  const seo = {
    description: description || site.siteMetadata.description,
    lang,
    siteName: site.siteMetadata.title,
    title,
    url: canonical || `${site.siteMetadata.siteUrl}${pathname || '/'}`,
  };
  console.log(seo.lang);

  return (
    <Helmet
      htmlAttributes={{
        lang: seo.lang,
      }}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:site_name`,
          content: seo.siteName,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          property: `og:locale`,
          content: seo.lang,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(meta)}
    >
      <title>{pageDisplayTitle}</title>
      <link rel="canonical" href={seo.url} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en-GB`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
