import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Heading from '../../atoms/heading';
import DateNote from '../../atoms/dateNote';

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
export interface IPost {
    postData: {
        title: string;
        date: string;
        contentHtml: string;
    };
}

export default function Post({ postData } : IPost) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Heading size="xl">{postData.title}</Heading>
        <DateNote dateString={postData.date} />
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
