import type { PostInListType } from '../interfaces';

export const getMockDates = (numDates: number, dateRange: [Date, Date]) => {
  const [startDate, endDate] = dateRange;
  const dateStrings: string[] = [];

  for (let i = 0; i < numDates; i++) {
    const randomTimestamp = startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime());
    const randomDate = new Date(randomTimestamp);
    dateStrings.push(randomDate.toISOString()
      .substring(0, 10));
  }
  return dateStrings;
};

export async function getSortedPostsData(postNum = 10) {
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-01-10');
  const postDates = getMockDates(postNum, [startDate, endDate]);
  const response = await fetch(`https://dummyjson.com/posts?limit=${postNum}&select=title`);
  const { posts }: { posts: Omit<PostInListType, 'date'>[] } = await response.json();
  const postsData = posts.map((post, index) => {
    return {
      ...post,
      date: postDates[index],
    };
  });

  return postsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export const formTitleUrlParam = (str: string) => {
  const withoutDots = str.toLowerCase()
    .replace(/\./g, '');
  return withoutDots.replace(/\s/g, '-');
};

export type PostType = {
  id: number;
  title: string;
};

// a list of possible value for id to use in getStaticPaths
export async function getAllPostIds() {
  const response = await fetch('https://dummyjson.com/posts?limit=10&select=title');
  const data: { posts: PostType[] } = await response.json();

  return data.posts.map((post) => ({
    params: {
      title: formTitleUrlParam(post.title),
      id: post.id.toString(),
    },
  }));
}

export async function getPostData(id: string) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await response.json();

  return {
    post,
  };
}
