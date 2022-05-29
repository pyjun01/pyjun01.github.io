import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CodeBlock from '../../components/CodeBlock';
import { H1, H2, H3, H4, H5, H6 } from '../../components/Title';

const Container = styled.div`
  padding: 32px 0;

  > h2 {
    font-size: 3rem;
    line-height: 3.75rem;
    letter-spacing: -0.0625rem;
    font-weight: 100;
    font-family: Georgia, Times, serif;
  }

  > .date {
    margin: 32px 0 56px;
    text-align: right;
  }

  > .content {
    font-size: 1.125rem;
    line-height: 1.6rem;
    word-break: break-word;

    h1 {
      margin-top: 3rem;
      margin-bottom: 1.5rem;
      line-height: 1;
    }
    h2 {
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;
      line-height: 1;
    }
    h3,
    h4,
    h5,
    h6 {
      margin-top: 2rem;
      margin-bottom: 1rem;
      line-height: 1;
    }

    ul,
    ol {
      margin: 1em 0 0.75em;
      padding-left: 25px;

      > li + li {
        margin-top: 0.25rem;
      }
    }

    code:not(.code-preview) {
      padding: 0.2rem 0.325rem;
      background: rgb(26, 91, 137, 0.07);
      border-radius: 0.325rem;
      font-size: 80%;
    }
  }

  @media (max-width: 680px) {
    > .date {
      font-size: 1.3rem;
    }

    > .content {
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
          <MDXProvider
            components={{
              pre: CodeBlock,
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              h5: H5,
              h6: H6,
            }}
          >
            <MDXRenderer headings={data.mdx.headings}>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        preview
        tag
      }
      headings {
        depth
        value
      }
      body
    }
  }
`;

export default BlogPost;
