import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import { Tweet, CodeSandbox } from 'mdx-embed';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CodeBlock from '../../components/MDX/CodeBlock';
import { H1, H2, H3, H4, H5, H6 } from '../../components/MDX/Title';
import { A } from '../../components/MDX';

const components = {
  Tweet,
  CodeSandbox,
};

const Container = styled.div`
  padding: 32px 0;

  > h2 {
    margin: 0;
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

  img {
    max-width: 100%;
  }

  figure {
    margin: 1.5rem 0;

    img {
      display: block;
      margin: 0 auto;
    }

    figcaption {
      font-size: 0.875rem;
      color: #757575;
      text-align: center;
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
      <SEO title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.preview} slug={data.mdx.slug} />
      <Container>
        <h2>{data.mdx.frontmatter.title}</h2>
        <p className='date'>{data.mdx.frontmatter.date}</p>
        <div className='content'>
          <MDXProvider
            components={{
              pre: CodeBlock,
              a: A,
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              h5: H5,
              h6: H6,
              ...components,
            }}
          >
            <MDXRenderer headings={data.mdx.headings}>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </Container>
      <img
        src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fpyjun01.github.io/v/${data.mdx.slug}&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false`}
        style={{ opacity: 0 }}
      />
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
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
      slug
    }
  }
`;

export default BlogPost;
