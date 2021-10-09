import { ReactNode } from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import GlobalStyle from '../GlobalStyle';
import Inner from './Inner';

const Container = styled.div`
  font-family: sans-serif;

  header {
    padding: 16px 0 24px;
    color: gray;
    font-weight: 700;

    a {
      font-size: 44px;
      color: #333333;
      text-decoration: none;
    }
  }

  main > h1:first-child {
    color: rebeccapurple;
  }
`;

function Layout({ pageTitle, children }: { pageTitle?: string; children: ReactNode }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <GlobalStyle />
      <title>
        {data.site.siteMetadata.title}
        {pageTitle ? ` | ${pageTitle}` : ''}
      </title>
      <header>
        <Inner>
          <h1>
            <Link to='/'>Justin</Link>
          </h1>
        </Inner>
      </header>
      <main>
        <Inner>{children}</Inner>
      </main>
    </Container>
  );
}

export default Layout;
