import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.link};
`;

interface LinkCustomProps {
    href: string
    children: React.ReactNode
}

function LinkCustom({ href, children }: LinkCustomProps) {
  return (
    <StyledLink href={href}>{children}</StyledLink>
  );
}

export default LinkCustom;
