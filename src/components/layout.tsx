import { ReactNode } from 'react';

import styled from 'styled-components';

import GlobalStyle from '../GlobalStyle';
import { Header } from './layout/Header';
import { Content } from './layout/Content';

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, sans-serif;

  main > h1:first-child {
    color: rebeccapurple;
  }
`;

function Layout({ children, pageTitle, path }: { children: ReactNode; pageTitle?: string; path?: string }) {
  return (
    <Container>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Header path={path} />
      <Content>{children}</Content>
    </Container>
  );
}

export default Layout;
