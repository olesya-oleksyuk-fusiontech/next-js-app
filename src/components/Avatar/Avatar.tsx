import React from 'react';
import { AvatarImage } from './Avatar.styles';

const Avatar: React.FC<{ onHome?: boolean }> = (props) => {
  const imgSize = {
    big: 144,
    small: 108,
  };

  return (
    <AvatarImage
      priority
      src="/images/profile.jpg"
      height={props.onHome ? imgSize.big : imgSize.small}
      width={props.onHome ? imgSize.big : imgSize.small}
      alt="author photo"
    />
  );
};

export default Avatar;
