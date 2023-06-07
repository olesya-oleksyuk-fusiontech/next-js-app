import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../containers/Layout';
import Heading from '../../components/Heading';
import DateNote from '../../components/DateNote/DateNote';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return { props: { postData } };
};

const Post: React.FC<{
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}> = (props) => {
  return (
    <Layout>
      <Head>
        <title>{props.postData.title}</title>
      </Head>
      <article>
        <Heading level="h2">{props.postData.title}</Heading>
        <DateNote dateString={props.postData.date} />
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
