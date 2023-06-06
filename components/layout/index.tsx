import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/heading';
import Avatar from '../avatar';
import LinkCustom from '../../atoms/link';

const name = 'Olesia Oleksiuk';
export const siteTitle = 'Next.js Sample Website';

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackToHome = styled.div`
  margin: 3rem 0 0;
  
  a {
    color: ${({ theme }) => theme.link};
  }
`;

const HeadingLink = styled(Link)`
  color: inherit;
`;

function Layout({ children, home }: {
    children: React.ReactNode;
    home?: boolean;
}) {
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
      <Header>
        {home ? (
          <>
            <Avatar onHome />
            <Heading size="2xl">{name}</Heading>
          </>
        ) : (
          <>
            <LinkCustom href="/">
              <Avatar />
            </LinkCustom>
            <Heading size="lg">
              <HeadingLink href="/">
                {name}
              </HeadingLink>
            </Heading>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
      <BackToHome>
        <Link href="/">← Back to home</Link>
      </BackToHome>
      )}
    </Container>
  );
}

export default Layout;
