import styled from 'styled-components';

export const AboutMe = styled.section`
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: 1.5;
`;

export const Blogs = styled(AboutMe)`
  padding-top: 1px;

  .blog__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .blog__item {
    margin: 0 0 1.25rem;
  }
`;
