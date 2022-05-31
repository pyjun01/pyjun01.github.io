import { ReactNode } from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import GlobalStyle from '../GlobalStyle';
import Inner from './Inner';

const Container = styled.div<{ $isMain: boolean }>`
  font-family: sans-serif;

  header {
    padding: 16px 0 24px;
    color: gray;
    font-weight: 700;

    h1,
    a {
      margin: 0;
    }

    a {
      font-size: ${({ $isMain }) => ($isMain ? '32px' : '18px')};
      color: #333333;
      text-decoration: none;
    }

    @media (max-width: 680px) {
      padding: 16px 0;
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
    <Container $isMain={!pageTitle}>
      <GlobalStyle />
      <title>
        {data.site.siteMetadata.title}
        {pageTitle ? ` | ${pageTitle}` : ''}
      </title>
      <header>
        <Inner>
          <h1>
            <Link to='/'>pyjun01</Link>
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
