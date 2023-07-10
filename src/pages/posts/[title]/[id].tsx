/* eslint-disable @typescript-eslint/naming-convention */
import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useRouter } from 'next/router';

import Layout from '../../../containers/Layout';
import Heading from '../../../components/Heading';
import { PostPage } from '../../../styling/postPageStyles';

import type { PostType } from '../../../interfaces';
import { fetchPostData, getAllPostIds } from '../../../lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['post', id], () => fetchPostData(id), {
    staleTime: 24 * 60 * (60 * 1000), // refetch once a day on the server
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

type PostProps = {
  post: PostType;
  toggleTheme: () => void;
};

const Post: React.FC<PostProps> = (props) => {
  const router = useRouter();
  const postID = typeof router.query?.id === 'string' ? router.query.id : '';

  const {
    isSuccess,
    data: postData,
    isError,
  } = useQuery(
    ['post', postID],
    () => fetchPostData(postID),
    {
      enabled: postID.length > 0,
      staleTime: 10 * (60 * 1000), // refetch every 10 mins
    },
  );

  const metaData = {
    description: postData?.post.body.substring(0, 145),
    keywords: postData?.post.tags.join(', '),
  };
  const renderPost = () => {
    if (isSuccess) {
      return (
        <>
          <Heading level="h2">{postData.post.title}</Heading>
          <div>{postData.post.body}</div>
          <section className="post__tags">
            {
              postData.post.tags.map((tag, index) => (
                <span className="post-tag" key={index}>
                  {tag}
                </span>))
            }
          </section>
        </>
      );
    }

    if (!isError) {
      return (
        <Heading level="h2">
          We could not find your post{' '}
          <span role="img" aria-label="sad">
          😢
          </span>
        </Heading>
      );
    }
  };

  return (
    <Layout toggleTheme={props.toggleTheme}>
      <Head>
        <title>{postData?.post.title}</title>
        <meta
          name="description"
          content={metaData.description}
        />
        <meta name="keywords" content={metaData.keywords} />
      </Head>
      <PostPage>
        {renderPost()}
      </PostPage>
    </Layout>
  );
};

export default Post;
