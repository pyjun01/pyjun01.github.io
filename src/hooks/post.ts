import { graphql, useStaticQuery } from 'gatsby';

export const usePostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            date(formatString: "LL")
            preview
            tag
          }
          id
          slug
        }
      }
    }
  `);

  return data;
};
