import { Link } from 'gatsby';
import styled from 'styled-components';

const ListContainer = styled.ul`
  @media (max-width: 680px) {
    padding-top: 32px;
  }
`;

const Item = styled.li`
  & + & {
    margin-top: 16px;
  }

  @media (max-width: 680px) {
    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

function List({ nodes }) {
  return (
    <ListContainer>
      {nodes.map((node) => (
        <Item key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>
            {node.frontmatter.preview} - {node.frontmatter.date}
          </p>
        </Item>
      ))}
    </ListContainer>
  );
}

export default List;
