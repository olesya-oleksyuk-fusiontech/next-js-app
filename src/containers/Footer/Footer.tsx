import React from 'react';
import Link from 'next/link';
import { BackToHome } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <BackToHome>
      <Link href="/">← Back to home</Link>
    </BackToHome>
  );
};

export default Footer;
