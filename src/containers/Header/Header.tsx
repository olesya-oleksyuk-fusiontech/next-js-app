import React from 'react';
import Link from 'next/link';
import Avatar from '../../components/Avatar/Avatar';
import Heading from '../../components/Heading/Heading';
import { StyledHeader } from './Header.styles';

const name = 'Olesia Oleksiuk';

const Header: React.FC<{ isHome?: boolean }> = (props) => {
  return (
    <StyledHeader>
      {props.isHome ? (
        <>
          <Avatar onHome />
          <Heading level="h1">{name}</Heading>
        </>
      ) : (
        <>
          <Link href="/">
            <Avatar />
          </Link>
          <Heading level="h3">
            <Link href="/">
              {name}
            </Link>
          </Heading>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
