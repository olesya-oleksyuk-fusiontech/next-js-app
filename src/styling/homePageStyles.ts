import styled from 'styled-components';

export const HomePage = styled.div`
  .about-me {
    font-size: ${({ theme }) => theme.font.size.md};
    line-height: 1.5;
  }

  .blog {
    padding-top: 1px;
  }

  .blog__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .blog__item {
    margin: 0 0 1.25rem;
  }
`;
