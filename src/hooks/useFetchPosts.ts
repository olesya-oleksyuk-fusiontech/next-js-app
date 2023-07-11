import { useQuery } from 'react-query';
import { getSortedPostsData } from '../lib/posts';
import type { PostInListType } from '../interfaces';

export const useFetchPosts = () => {
  const {
    isSuccess,
    isLoading,
    data: postsData,
    error,
  } = useQuery<PostInListType[], Error>(
    ['posts'],
    () => getSortedPostsData(),
    {
      staleTime: 10 * (60 * 1000),
    },
  );

  return {
    isSuccess,
    isLoading,
    postsData,
    error,
  };
};
