/* eslint-disable @typescript-eslint/naming-convention */
import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Layout from '../../../containers/Layout';
import Heading from '../../../components/Heading';
import { PostPage } from '../../../styling/postPageStyles';
import type { PostType } from '../../../interfaces';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const { post } = await getPostData(params?.id as string);
  return { props: { post } };
};

type PostProps = {
  post: PostType;
  toggleTheme: () => void;
};

const Post: React.FC<PostProps> = (props) => {
  return (
    <Layout toggleTheme={props.toggleTheme}>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <PostPage>
        <Heading level="h2">{props.post.title}</Heading>
        <div>{props.post.body}</div>
        <section className="post__tags">
          {
            props.post.tags.map((tag, index) => <span className="post-tag" key={index}>{tag}</span>)
          }
        </section>
      </PostPage>
    </Layout>
  );
};

export default Post;
