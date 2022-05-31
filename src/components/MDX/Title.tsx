import Slugger from 'github-slugger';
import styled from 'styled-components';

const { slug } = Slugger;

export const H1 = styled.h1.attrs(({ children }) => ({
  id: slug(children),
}))``;
export const H2 = styled.h2.attrs(({ children }) => ({
  id: slug(children),
}))``;
export const H3 = styled.h3.attrs(({ children }) => ({
  id: slug(children),
}))``;
export const H4 = styled.h4.attrs(({ children }) => ({
  id: slug(children),
}))``;
export const H5 = styled.h5.attrs(({ children }) => ({
  id: slug(children),
}))``;
export const H6 = styled.h6.attrs(({ children }) => ({
  id: slug(children),
}))``;
