import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { formTitleUrlParam, getSortedPostsData } from '../lib/posts';
import Heading from '../components/Heading';
import DateNote from '../components/DateNote';
import Layout, { siteTitle } from '../containers/Layout';
import { HomePage } from '../components/homePageStyles';
import type { PostInListType } from '../interfaces';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return { props: { allPostsData } };
}

const Home: React.FC<{
  allPostsData: PostInListType[];
  toggleTheme: () => void;
}> = (props) => {
  return (
    <Layout isHome toggleTheme={props.toggleTheme}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomePage>
        <section className="about-me">
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
        </section>
        <section className="blog">
          <Heading level="h3">Blog</Heading>
          <ul className="blog__list">
            {props.allPostsData.map(({
              id,
              date,
              title,
            }) => (
              <li key={id} className="blog__item">
                <Link href={`/posts/${formTitleUrlParam(title)}/${id}`}>{title}</Link>
                <br />
                <DateNote dateString={date} />
              </li>
            ))}
          </ul>
        </section>
      </HomePage>
    </Layout>
  );
};

export default Home;
