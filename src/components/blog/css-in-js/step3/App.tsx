import React from 'react';

import Result from '../../Result';
import styled from './styled';

const color = '#f00';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${color};
`;

const World = styled.span`
  color: #000;
  font-weight: bold;
`;

const Container2 = styled(Container)`
  justify-content: center;
  color: #666;
`;

function App() {
  return (
    <Result>
      <Container2>
        Hello,
        <World>World!</World>
      </Container2>
    </Result>
  );
}

export default App;
