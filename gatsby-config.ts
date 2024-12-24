import path from 'path';

/** @type {import('gatsby').GatsbyConfig} */
const config = {
  siteMetadata: {
    description: 'pyjun01 블로그',
    siteUrl: 'https://pyjun01.github.io',
  },
  trailingSlash: 'always',
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
        jsxPragma: `jsx`, // defaults to "React"
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: path.resolve('./src/blog'),
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

export default config;
