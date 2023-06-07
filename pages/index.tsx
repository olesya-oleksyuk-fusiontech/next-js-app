import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { getSortedPostsData } from '../lib/posts';
import Heading from '../components/Heading';
import DateNote from '../components/DateNote';
import Layout, { siteTitle } from '../containers/Layout';

export const AboutMe = styled.section`
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: 1.5;
`;

export const Blogs = styled(AboutMe)`
  padding-top: 1px;

  .blog__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .blog__item {
    margin: 0 0 1.25rem;
  }
`;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

const Home: React.FC<{
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}> = (props) => {
  return (
    <Layout isHome>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AboutMe>
        <p>
          I’m a full-stack web developer (with a focus on front ❣️) who’s
          working with the latest and most effective technologies. The main
          stack of technologies I specialize in is JavaScript plus
          frameworks/libraries based on this language.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          {' '}
          <Link href="https://nextjs.org/learn">our Next.js tutorial</Link>
          .)
        </p>
      </AboutMe>
      <Blogs>
        <Heading level="h3">Blog</Heading>
        <ul className="blog__list">
          {props.allPostsData.map(({
            id,
            date,
            title,
          }) => (
            <li key={id} className="blog__item">
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <DateNote dateString={date} />
            </li>
          ))}
        </ul>
      </Blogs>
    </Layout>
  );
};

export default Home;
