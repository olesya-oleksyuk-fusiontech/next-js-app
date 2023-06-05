import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const AvatarImage = styled(Image)`
  border-radius: 9999px;
`;

interface AvatarProps {
    onHome?: boolean
}
function Avatar({ onHome }: AvatarProps) {
  const imgSize = {
    big: 144,
    small: 108
  };

  return (
    <AvatarImage
      priority
      src="/images/profile.jpg"
      height={onHome ? imgSize.big : imgSize.small}
      width={onHome ? imgSize.big : imgSize.small}
      alt="author photo"
    />
  );
}

export default Avatar;
