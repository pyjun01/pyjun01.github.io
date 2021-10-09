module.exports = {
  siteMetadata: {
    title: 'Justin',
    description: 'pyjun01 blog',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
  ],
};
