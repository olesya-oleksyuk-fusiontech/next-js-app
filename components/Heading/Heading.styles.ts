import styled from 'styled-components';

export const HeadingWrapper = styled.div`
  h1, h2, h3, h4 {
    margin: 1rem 0
  }

  h1, h2 {
    font-weight: 800;
    letter-spacing: -0.05rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.xxl};
    line-height: 1.2;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.xl};
    line-height: 1.3;
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    line-height: 1.4;
  }

  h4 {
    font-size: ${({ theme }) => theme.font.size.md};
    line-height: 1.5;
  }

`;

export const CustomHeading = styled.div``;
