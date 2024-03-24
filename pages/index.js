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
        Junte-se a nós nesta jornada fascinante enquanto exploramos os impactos da IA no ambiente escolar e discutimos como podemos 
        aproveitar ao máximo essa tecnologia para promover um aprendizado mais eficaz e inclusivo para todos.
          se quiser acompanhar mais dos nossos conteudos, esse é nosso <a href="https://etecspgov-my.sharepoint.com/:w:/r/personal/gabriel_cruz131_etec_sp_gov_br/_layouts/15/doc2.aspx?sourcedoc=%7B1334AC50-F605-4122-A3C4-A63D42D385EB%7D&file=DI%C3%81RIO%20DE%20BORDO_GRUPO4_2023.docx&action=default&mobileredirect=true&DefaultItemOpen=1&ct=1709143092541&wdOrigin=OFFICECOM-WEB.START.REC&cid=ef997c00-7ef1-4a5d-897f-b5d3a545985a&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=06af73e5-bc7b-4517-b65c-afd68ce1cf7d">Diario de Bordo </a>
           <a href=""></a>
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
