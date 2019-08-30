/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Octopus Think`,
		description: `Octopus Think is a design and development agency based in Scotland. We build inclusive, usable, and smart websites and apps.`,
		author: `@octopusthink`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-emotion',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: `${__dirname}/src/content/`,
				ignore: [`**/*\.js`],
			},
		},
		'gatsby-transformer-remark',
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
