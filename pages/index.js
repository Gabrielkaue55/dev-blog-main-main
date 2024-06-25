import Head from 'next/head';
import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';

import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsFromGit } from '../lib/posts';

export async function getServerSideProps() {
  const allPostsData = await getSortedPostsFromGit();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        Você já se questionou sobre o quanto a inteligência artificial está modificando o aprendizado e quais serão as consequências no futuro?  Vamos debater como essa tecnologia pode ser melhor explorada e incluída na educação de Ensino Médio, tendo como ambiente de pesquisa a Escola Estadual Ary de Oliveira Garcia.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
