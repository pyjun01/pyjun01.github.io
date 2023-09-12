import { Link } from 'gatsby';
import Inner from '../Inner';
import styled from 'styled-components';

const navItem = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
  },
];

const Container = styled.header<{ $isMain: boolean }>`
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
          min-width: 53px;
          font-size: 1.125rem;
          text-align: center;

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
`;

export function Header({ path }: { path?: string }) {
  return (
    <Container $isMain={navItem.some((item) => item.path === path)}>
      <Inner>
        <div>
          <h1>
            <Link to='/'>pyjun01</Link>
          </h1>
          <nav>
            <ul>
              {navItem.map((item) => (
                <li className={item.path === path ? 'selected' : undefined}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Inner>
    </Container>
  );
}
