const { trackingId } = require('./key.json');

module.exports = {
  siteMetadata: {
    description: 'pyjun01 블로그',
    siteUrl: 'https://pyjun01.github.io',
  },
  trailingSlash: 'always',
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-mdx-frontmatter',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
  ],
};
