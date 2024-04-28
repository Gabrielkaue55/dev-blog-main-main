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
          Junte-se a nós nesta jornada fascinante enquanto exploramos os impactos da Inteligência Artificial no ambiente escolar. Vamos discutir como podemos aproveitar ao máximo essa tecnologia para promover um aprendizado mais eficaz e inclusivo para todos. Se quiser acompanhar mais dos nossos conteúdos, fique à vontade!
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
