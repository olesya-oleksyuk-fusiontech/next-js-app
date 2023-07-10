import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { formTitleUrlParam, getSortedPostsData } from '../lib/posts';
import Heading from '../components/Heading';
import DateNote from '../components/DateNote';
import Layout, { siteTitle } from '../containers/Layout';
import { HomePage } from '../components/homePageStyles';
import type { PostInListType } from '../interfaces';

export async function getStaticProps() {
  // ensures that data is not shared between different users and requests
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['posts'], () => getSortedPostsData(), {
    staleTime: 24 * 60 * (60 * 1000), // refetch once a day on the server
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: React.FC<{
  allPostsData: PostInListType[];
  toggleTheme: () => void;
}> = (props) => {
  const {
    isSuccess,
    data: postsData,
    error,
  } = useQuery(
    ['posts'],
    () => getSortedPostsData(),
    {
      staleTime: 10 * (60 * 1000), // refetch every 10 mins
    },
  );

  const renderPosts = () => {
    if (isSuccess) {
      return (
        <>
          <Heading level="h3">Blog</Heading>
          <ul className="blog__list">
            {postsData?.map(({
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
        </>
      );
    }

    if (error) {
      return (
        <>
          <Heading level="h2">
            Something went wrong{' '}
            <span role="img" aria-label="sad">
                  😢
            </span>
          </Heading>
          <div>{`An error has occurred: ${error}`}</div>
        </>
      );
    }
  };

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
          {
            renderPosts()
          }
        </section>
      </HomePage>
    </Layout>
  );
};

export default Home;
