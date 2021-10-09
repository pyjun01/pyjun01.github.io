import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Container = styled.div`
  padding: 32px 0 0;

  h2 {
    font-size: 3rem;
    line-height: 3.75rem;
    letter-spacing: -0.0625rem;
    font-weight: 100;
    font-family: Georgia, Times, serif;
  }

  .date {
    margin: 32px 0 56px;
    text-align: right;
  }

  .content {
    font-size: 1.125rem;
    line-height: 1.6rem;
    word-break: break-word;
  }

  @media (max-width: 680px) {
    .date {
      font-size: 1.3rem;
    }

    .content {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
  }
`;

function BlogPost({ data }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <SEO title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.preview} />
      <Container>
        <h2>{data.mdx.frontmatter.title}</h2>
        <p className='date'>{data.mdx.frontmatter.date}</p>
        <div className='content'>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        preview
        tag
      }
      body
    }
  }
`;

export default BlogPost;
