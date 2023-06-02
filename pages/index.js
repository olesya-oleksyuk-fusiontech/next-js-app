import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import {getSortedPostsData} from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {props: {allPostsData}};
}

export default function Home({allPostsData}) {
    return (
        // eslint-disable-next-line react/jsx-filename-extension
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
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({
                                           id,
                                           date,
                                           title
                                       }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
