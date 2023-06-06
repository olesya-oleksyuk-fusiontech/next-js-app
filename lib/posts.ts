import { faker } from '@faker-js/faker';
import type { AllPostsDataType, SinglePostDataType } from '../pages';

const getDates = (count = 10, pastYears = 5) => {
  const dates = [];
  for (let i = 0; i < count; i++) {
    dates.push(faker.date.past({ years: pastYears }).toISOString());
  }
  return dates.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    return -1;
  });
};

export const getPostsData = async (limit = 5): Promise<AllPostsDataType> => {
  const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&select=title,body`);
  const data = await res.json();
  const dates = getDates(5);
  return { data, dates };
};

export const getPost = async (id : string): Promise<SinglePostDataType> => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();
  const date = getDates(1)[0];
  return { post: { id: data.id, title: data.title, content: data.body }, date };
};

// a list of possible value for id to use in getStaticPaths
export async function getAllPostIds() {
  const postsData = await getPostsData(5);
  return postsData.data.posts.map((post) => ({
    params: { id: post.id.toString(10) },
  }));
}
