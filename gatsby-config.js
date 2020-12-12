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
    defaultImage: config.defaultImage,
    imageHeight: config.imageHeight,
    imageWidth: config.imageWidth,
    description: config.siteDescription,
    author: config.twitter,
    copyright: config.copyright,
    language: config.language,
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/NautilusWrapper`),
      },
    },
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
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
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
                allMdx(
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
                        slug
                        summary
                        title
                        tags {
                          name
                          summary
                        }
                        thumbnail
                      }
                      timeToRead
                    }
                  }
                }
              }
            `,
            output: config.siteRss,
            title: config.blogTitleRSS || config.blogTitle,
            description: config.blogDescription,
            generator: 'Ghost Ship (https://github.com/octopusthink/ghost-ship)',
            site_url: config.siteUrl,
            language: config.language,
            copyright: config.copyright,
            custom_namespaces: {
              atom: 'http://www.w3.org/2005/Atom',
            },
            custom_elements: [
              {
                'atom:link': [
                  {
                    _attr: {
                      href: `${config.siteUrl}${config.siteRss}`,
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
        exclude: [],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLoaders: {
          default: require.resolve('./src/components/MDXLayout'),
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1280,
            },
          },
          { resolve: 'gatsby-remark-reading-time' },
          { resolve: 'gatsby-remark-smartypants' },
        ],
      },
    },
    {
      resolve: '@pauliescanlon/gatsby-mdx-embed',
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/src/images`,
        destination: '/images',
      },
    },
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `20783413824`,
      },
    },
    // {
    //   resolve: `gatsby-source-twitter`,
    //   options: {
    //     credentials: {
    //       consumer_key: process.env.TWITTER_CONSUMER_KEY,
    //       consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    //       bearer_token: process.env.TWITTER_BEARER_TOKEN,
    //     },
    //     queries: {
    //       OctopusTweets: {
    //         endpoint: `statuses/user_timeline`,
    //         params: {
    //           screen_name: `octopusthinks`,
    //           include_rts: false,
    //           exclude_replies: false,
    //           tweet_mode: `extended`,
    //           count: 1,
    //         },
    //       },
    //     },
    //   },
    // },
    { resolve: `gatsby-plugin-meta-redirect` },
  ],
  mapping: {
    'Mdx.fields.authors': 'AuthorsYaml',
    'Mdx.fields.tags': 'TagsYaml',
  },
};
