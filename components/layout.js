import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';

const name = ' INFLUÊNCIA DA INTELIGÊNCIA ARTIFICIAL NO ENSINO MÉDIO: ESTUDO DE CASO NA ESCOLA ARY DE OLIVEIRA GARCIA ';
export const siteTitle = 'Blog INFLUÊNCIA DA INTELIGÊNCIA ARTIFICIAL NO ENSINO MÉDIO: ESTUDO DE CASO NA ESCOLA ARY DE OLIVEIRA GARCIA';

export default function Layout({ children, home }) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.headerNav}>
        <div className={styles.divNav}>
          <Link href="/" className={styles.logo}>
            <Image
              priority
              src="/images/Logo.png"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt=""

            />
            <h1>Blog</h1>
          </Link>

          <nav className={styles.nav}>
            <Link href="/">
              Home
            </Link>
            <Link href="/">
              <>Blog</>
            </Link>
            <Link href="https://drive.google.com/file/d/1S4DHuY0m69zwlhVX6uL_bylQltZtyGPE/view?usp=sharing">
              <>Diário</>
            </Link>
          </nav>

          <div className={styles.socialMedia}>
            <Link href="https://drive.google.com/file/d/1S4DHuY0m69zwlhVX6uL_bylQltZtyGPE/view?usp=sharing">
              <FontAwesomeIcon icon={faBook} />
            </Link>
          </div>

        </div>

        <div>
          <div className={styles.menu} onClick={handleMenuClick}>
            {isMobileMenuOpen ? <><IoCloseOutline />
            </> : <><RxHamburgerMenu />
            </>}
          </div>

          <div className={`${styles.mobile} ${isMobileMenuOpen ? styles.open : ''}`}>
            <div>------</div>
            <div className={styles.menu} onClick={handleMenuClick}>
              {isMobileMenuOpen ? <><IoCloseOutline />
              </> : <><RxHamburgerMenu />
              </>}
            </div>
            <div>------</div>

            <Link href="/">Home</Link>
            <Link href="/"><>Blog</></Link>
            <Link href="https://drive.google.com/file/d/1S4DHuY0m69zwlhVX6uL_bylQltZtyGPE/view?usp=sharing"><>Diário</></Link>
          </div>
        </div>

      </header >

      <div className={styles.container}>

        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/capa.jpg"
                className={utilStyles.borderCircle}
                height={1280}
                width={720}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>

              <Image
                priority
                src="/images/capa2.jpeg"
                className={utilStyles.borderCircle}
                height={1280}
                width={720}
                alt=""
              />

              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Pagina Principal</Link>
          </div>
        )}
      </div>
    </div >
  );
}