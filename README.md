# [octopusthink.com](https://octopusthink.com/)

This is the code powering the blog and website for [Octopus Think](https://octopusthink.com/).

## Development

### Getting started

octopusthink.com uses Gatsby. To run a local copy, clone the repo to your local machine, and start the Gatsby server:

```bash
npm start
```

That's it! You can now find the site at [localhost:8000](http://localhost:8000/).

All changes you make to front-end React code and styles will immediately be loaded. Any changes to `gatbsy-config.js` or `gatsby-node.js` require restarting the Gatsby server.

### Running tests

All pull requests must pass the linter rules to be merged into `master`. Tests are run against branches using GitHub Actions, but you can also run tests locally:

```bash
npm run lint
```

### Using the design system

octopusthink.com uses the [Nautilus](https://nautilus.octopusthink.com) design system under the hood. Since Nautilus is still very much under development, it's pulling from the latest changes made to the `master` GitHub branch, rather than the published version.

To pull the latest changes, uninstall and reinstall the Nautilus dependency:

```bash
npm uninstall nautilus && npm install --save octopusthink/nautilus
```

## Data & content

This site follows standard Gatsby practises for storing content & data. That means that the majority of site content is stored in `.md` or `.mdx` files in `src/content`. All content files are stored in folders based on the type of content they represent. Content is generally used for types of content that are shown on their own dedicated page.

We have three different content types: blog posts, site pages, and portfolio items.

Difference between summaryShort and summary?

### Blog posts 
### Site pages

### Portfolio items



(Maybe we can get rid of these entirely?)
Summary: as on page and blog posts, used for the page heading and the SEO description. 
summaryShort: used for the text that explains when you hover over the preview on the `/work` page.
`order:` 
`thumbnail:`

Additional data that typically doesn't have its own page is stored in `.yaml` files in `data/`. This tends to be used for data that's queried and displayed as part of a larger page, but isn't shown on its own dedicated page.

What we're storing as data:
- Blog authors, shown in a box in the footer of blog posts
- Blog tabs, shown in the header of blog posts
- Client testimonials, shown in the `TestimonialCarousel` component

## License

Copyright (c) 2020 Octopus Think Ltd. (https://octopusthink.com/)

The source code is shared under a [Creative Commons 4.0 Attribution-ShareAlike (CC-BY-SA-4.0)](https://creativecommons.org/licenses/by-sa/4.0) license. Basically this means you can use stuff that we've written on here if you attribute us and release your content under the same license—even for commercial purposes!

See the [LICENSE.txt](LICENSE.txt) file for details.
