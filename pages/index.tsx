import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Heading from '../components/atoms/heading';
import DateNote from '../components/atoms/dateNote';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
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

interface HomeProps {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}
export default function Home({ allPostsData } : HomeProps) {
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
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
          .)
        </p>
      </AboutMe>
      <Blogs>
        <Heading size="lg">Blog</Heading>
        <BlogList>
          {allPostsData.map(({
            id,
            date,
            title
          }) => (
            <Blog key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <DateNote dateString={date} />
            </Blog>
          ))}
        </BlogList>
      </Blogs>
    </Layout>
  );
}
