import Head from 'next/head';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Container } from './Layout.styles';

export const siteTitle = 'Next.js Sample Website';

const Layout: React.FC<{ isHome?: boolean } & React.PropsWithChildren> = (props) => {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header isHome={props.isHome} />
      <main>{props.children}</main>
      {!props.isHome && <Footer />}
    </Container>
  );
};

export default Layout;
