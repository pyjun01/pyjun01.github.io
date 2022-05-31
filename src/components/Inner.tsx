import styled from 'styled-components';

const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;

  @media (min-width: 2500px) {
    max-width: 900px;
  }

  @media (max-width: 800px) {
    margin: 0 48px;
  }

  @media (max-width: 680px) {
    margin: 0 24px;
  }
`;

export default Inner;
