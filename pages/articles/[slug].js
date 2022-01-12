import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import {ArticleBody} from '../../components';
import { getAllArticles, getArticleBySlug } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";

export default function Article({article}) {
  const router = useRouter();
  console.log(article)
  return (
    <div className={styles.container}>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.excerpt} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism.css"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{router.query.slug}</h1>
        <ArticleBody content={article.content} />
      </main>
    </div>
  );
}

export async function getStaticProps({params}) {
  const article = getArticleBySlug(params.slug);
  console.log('article content', article)
  const content = await markdownToHtml(article.content)
  // console.log('article', article)
  // let content;
  // markdownToHtml(article.content).then((awaitContent) => {
  //   console.log(awaitContent);
  //   content = awaitContent;
  // }).catch((e) => {
  //   console.log(e)
  // })

  console.log('content', content)
  return {
    props: {
      article: {
        ...article,
        content
      }
    }
  }
}

export function getStaticPaths() {
  const articles = getAllArticles();

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug
        }
      }
    }),
    fallback: false,
  }
}