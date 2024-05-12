import styled from 'styled-components';

export const A = styled.a.attrs((p) => ({
  target: p['data-not-blank'] ? undefined : '_blank',
  ...p,
}))``;
