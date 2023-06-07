import Head from 'next/head';
import styled from 'styled-components';
import Layout, { siteTitle } from '../components/layout';
import Heading from '../atoms/heading';
import LinkCustom from '../atoms/link';
import { getPostsData } from '../lib/posts';
import DateNote from '../atoms/dateNote';

// runs at build time (never runs in the browser)
export async function getStaticProps() {
  const allPostsData = await getPostsData(5);
  return { props: { allPostsData } };
}

const AboutMe = styled.section`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.5;
`;

const Blogs = styled(AboutMe)`
  padding-top: 1px;
`;

const BlogList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const Blog = styled.li`
  margin: 0 0 1.25rem;
`;

export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type AllPostsDataType = {
  data: {
    posts: PostType[];
    limit: number;
    skip: number;
    total: number;
  };
  dates: string[];
};

export type SinglePostDataType = {
  post: {
    id: number;
    title: string;
    content: string;
  };
  date: string;
};

interface IHome {
  allPostsData: AllPostsDataType;
}
export default function Home({ allPostsData } : IHome) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AboutMe>
        <p>
          I’m a full-stack web developer (with a focus on front ❣️) who’s
          working with the latest and most effective technologies. The main
          stack of technologies I specialize in is JavaScript plus
          frameworks/libraries based on this language.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          {' '}
          <LinkCustom href="https://nextjs.org/learn">our Next.js tutorial</LinkCustom>
          .)
        </p>
      </AboutMe>
      <Blogs>
        <Heading size="lg">Blog</Heading>
        <BlogList>
          {allPostsData.data.posts.map(({
            id,
            title,
          }, index) => (
            <Blog key={id}>
              <LinkCustom href={`/posts/${id}`}>{title}</LinkCustom>
              <br />
              <DateNote dateString={allPostsData.dates[index]} />
            </Blog>
          ))}
        </BlogList>
      </Blogs>
    </Layout>
  );
}
