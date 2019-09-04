/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Octopus Think`,
    description: `Octopus Think is a design and development agency based in Scotland. We build inclusive, usable, and smart websites and apps.`,
    author: `@octopusthinks`,
    siteUrl: `https://octopusthink.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        exclude: ['/blog', '/blog/*', '/blog/*/*', '/portfolio/*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
        ignore: [`**/*.js`],
      },
    },
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-smartypants`],
			},
		},
    {
      resolve: `gatsby-plugin-favicon`,
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
};
