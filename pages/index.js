import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I’m a full-stack web developer (with a focus on front 💕) who’s
          working with the latest and most effective technologies. The main
          stack of technologies I specialize in is JavaScript plus
          frameworks/libraries based on this language.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <h1 className={utilStyles.headingMd}>
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </Layout>
  );
}
