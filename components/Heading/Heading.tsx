import React from 'react';
import { CustomHeading, HeadingWrapper } from './Heading.styles';

const Heading: React.FC<{
  level: 'h1' | 'h2' | 'h3' | 'h4';
} & React.PropsWithChildren> = (props) => {
  return (
    <HeadingWrapper>
      <CustomHeading as={props.level}>{props.children}</CustomHeading>
    </HeadingWrapper>
  );
};

export default Heading;
