import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';
import { getAllPostIds, getPost } from '../../lib/posts';
import Layout from '../../components/layout';
import Heading from '../../atoms/heading';
import DateNote from '../../atoms/dateNote';
import type { SinglePostDataType } from '../index';

const PostContent = styled.section`
  margin-top: 1rem;
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPost(params?.id as string);
  return { props: { postData } };
};
export interface IPost {
    postData: SinglePostDataType;
}

export default function Post({ postData } : IPost) {
  return (
    <Layout>
      <Head>
        <title>{postData.post.title}</title>
      </Head>
      <article>
        <Heading size="xl">{postData.post.title}</Heading>
        <DateNote dateString={postData.date} />
        <PostContent>
          {postData.post.content}
        </PostContent>
      </article>
    </Layout>
  );
}
