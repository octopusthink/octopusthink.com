/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const moment = require('moment');

const config = require('./data/SiteConfig.js');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.twitter,
    siteUrl: config.siteUrl,
    copyright: config.copyright,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return {
                  ...edge.node.fields,
                  title: edge.node.fields.title,
                  description: edge.node.html,
                  date: edge.node.fields.date,
                  url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                  author: edge.node.fields.authors
                    .map((author) => {
                      return author.name;
                    })
                    .join(', '),
                };
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { fields: [fields___date], order: DESC }
                  filter: {
                    fileAbsolutePath: { regex: "//content/blog/" }
                    fields: { timestamp: { lte: ${parseInt(moment.utc().format('X'), 10)} } }
                  }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        authors {
                          name
                        }
                        date
                        readingTime {
                          text
                        }
                        slug
                        summary
                        title
                        tags {
                          name
                          summary
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Octopus Thoughts: The Octopus Think Blog',
            description:
              'The Octopus Think Blog blog, in which we talk about design, technology, inclusion, and anything else we’ve been thinking about lately. Oh, and adorable cephalopod stories, because they make us happy.',
            generator: 'Ghost Ship (https://github.com/octopusthink/ghost-ship)',
            site_url: config.siteUrl,
            language: 'en-GB',
            copyright: config.copyright,
            custom_namespaces: {
              atom: 'http://www.w3.org/2005/Atom',
            },
            custom_elements: [
              {
                'atom:link': [
                  {
                    _attr: {
                      href: `${config.siteUrl}/rss.xml`,
                      rel: 'self',
                      type: 'application/rss+xml',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://analytics.octopusth.ink',
        siteUrl: 'https://octopusthink.com',
        requireConsent: false,
        disableCookies: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        // Exclude specific pages or groups of pages using glob params
        // See: https://github.com/isaacs/minimatch
        exclude: ['/portfolio/*'],
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
        ignore: ['**/*.js'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
        ignore: ['**/*.js'],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-smartypants', 'gatsby-remark-reading-time'],
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/, // See below to configure properly
        },
      },
    },
  ],
  mapping: {
    'MarkdownRemark.fields.authors': 'AuthorsYaml',
    'MarkdownRemark.fields.tags': 'TagsYaml',
  },
};
