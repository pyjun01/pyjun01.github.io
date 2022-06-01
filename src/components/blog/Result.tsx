import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { isBrowser } from '../../utils';

const ResultWrapper = styled.div`
  margin: 1.5rem 0;
  border: 1px solid #cdcdcd;

  > p {
    margin: 0;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #cdcdcd;
  }

  > div {
    padding: 1rem;
    max-height: 370px;
    overflow-y: scroll;

    * {
      margin: 0;
      padding: 0;
    }
  }
`;

function Result({ children }: PropsWithChildren<{}>) {
  return (
    <ResultWrapper>
      <p>Demo</p>
      <div>{isBrowser && children}</div>
    </ResultWrapper>
  );
}

export default Result;
