const config = {
  siteTitle: 'Octopus Think', // Site title.
  siteTitleShort: 'Octopus Think', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Octopus Think: Software Design and Development', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://octopusthink.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'Octopus Think is a design and development agency based in Scotland. We build inclusive, usable, and smart websites and apps.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/blog/rss.xml', // Path to the RSS file.
  twitter: '@octopusthinks',
  copyright: 'Copyright © 2019. Octopus Think Ltd.', // Copyright string for the footer of the website and RSS feed.
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
