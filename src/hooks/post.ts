import { graphql, useStaticQuery } from 'gatsby';

export const usePostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            title
            preview
            slug
            date(formatString: "LL")
          }
        }
      }
    }
  `);

  return data;
};
