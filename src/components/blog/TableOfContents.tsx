import React from 'react';

import GithubSlugger from 'github-slugger';
import styled from 'styled-components';
import { Headings } from '../../utils/type';

const { slug } = GithubSlugger;

const TableOfContentsWrapper = styled.ul`
  &&& {
    margin-bottom: 56px;
    padding: 0;
  }

  list-style: none;
`;

const Item = styled.li<{ depth: number }>`
  margin-left: ${({ depth }) => `${(depth - 1) * 20}px`};
`;

function TableOfContents({ headings }: { headings: Headings }) {
  return (
    <TableOfContentsWrapper>
      {headings?.map((heading) => (
        <Item key={heading.value} depth={heading.depth}>
          <a href={`#${slug(heading.value)}`}>{heading.value}</a>
        </Item>
      ))}
    </TableOfContentsWrapper>
  );
}

export default TableOfContents;
