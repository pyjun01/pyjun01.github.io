import { ReactNode } from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

import GlobalStyle from '../GlobalStyle';
import Inner from './Inner';

const Container = styled.div<{ $isMain: boolean }>`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, sans-serif;

  header {
    padding: 16px 0 24px;
    color: gray;

    ${Inner} > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1,
      a {
        margin: 0;
      }

      a {
        color: #333333;
        text-decoration: none;
      }

      h1 > a {
        font-weight: 700;
        font-size: ${({ $isMain }) => ($isMain ? '32px' : '18px')};
      }

      nav {
        ul {
          all: unset;
          display: flex;
          gap: 12px;

          li {
            all: unset;
            font-size: 1.125rem;

            @media (max-width: 680px) {
              font-size: 1.5rem;
            }

            &.selected {
              font-weight: 700;
            }
          }
        }
      }
    }

    @media (max-width: 680px) {
      padding: 16px 0;
    }
  }

  main > h1:first-child {
    color: rebeccapurple;
  }
`;

const isBrowser = typeof window !== 'undefined';

function Layout({ pageTitle, children }: { pageTitle?: string; children: ReactNode }) {
  return (
    <Container $isMain={!pageTitle}>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <header>
        <Inner>
          <div>
            <h1>
              <Link to='/'>pyjun01</Link>
            </h1>
            <nav>
              <ul>
                <li className={isBrowser && window.location.pathname === '/' ? 'selected' : undefined}>
                  <Link to='/'>Home</Link>
                </li>
                <li className={isBrowser && window.location.pathname === '/about/' ? 'selected' : undefined}>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Inner>
      </header>
      <main>
        <Inner>{children}</Inner>
      </main>
    </Container>
  );
}

export default Layout;
