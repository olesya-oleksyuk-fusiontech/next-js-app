import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.link};
`;

interface ILinkCustom {
  href: string;
  children: React.ReactNode;
}

function LinkCustom({
  href,
  children,
}: ILinkCustom) {
  return (
    <StyledLink href={href}>{children}</StyledLink>
  );
}

export default LinkCustom;
