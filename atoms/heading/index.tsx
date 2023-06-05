import React from 'react';
import styled from 'styled-components';

const Heading2Xl = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;
const HeadingXl = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const HeadingLg = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.4;
  margin: 1rem 0;
`;
const HeadingMd = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.5;
`;

interface HeadingProps {
    size: '2xl' | 'xl' | 'lg' | 'md'
    children: React.ReactNode
}

function Heading({ size, children }: HeadingProps) {
  switch (size) {
    case '2xl':
      return (<Heading2Xl>{children}</Heading2Xl>);
    case 'xl':
      return (<HeadingXl>{children}</HeadingXl>);
    case 'lg':
      return (<HeadingLg>{children}</HeadingLg>);
    case 'md':
      return (<HeadingMd>{children}</HeadingMd>);
    default:
      return (<HeadingMd>{children}</HeadingMd>);
  }
}

export default Heading;
