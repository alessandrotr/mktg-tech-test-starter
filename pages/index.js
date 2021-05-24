import Head from 'next/head';

import styles from '../styles/Home.module.css';

import Navbar from './../components/Navigation/Navbar';
import HeaderContent from './../components/HeaderContent/HeaderContent';
import CaseStudyContent from './../components/CaseStudyContent/CaseStudyContent';
import CustomerCard from './../components/CustomerCard/CustomerCard';
import Quote from './../components/Quote/Quote';
import Newsletter from './../components/Newsletter/Newsletter';
import FooterContent from './../components/FooterContent/FooterContent';


export async function getStaticProps() {
  const headerLinks = await import('./../data/site-header-links.json');
  const caseStudies = await import('./../data/customer-case-studies.json');
  const footerLinks = await import('./../data/site-footer-links.json');

  return {
    props: {
      headerLinks: headerLinks.default,
      caseStudies: caseStudies.default,
      footerLinks: footerLinks.default,
    }
  }
}

export default function Home({ headerLinks, caseStudies, footerLinks }) {
  const caseStudy = caseStudies[0];
  const linksHeader = headerLinks;
  const linksFooter = footerLinks;

  return (
    <>
      <Head>
        <meta property="og:description" content={caseStudy.metaTags.description} />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:title" content={caseStudy.metaTags.title} />
        <meta property="og:image" content='./assets/og-image.png' />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Rasa" />

        <meta name="twitter:title" content={caseStudy.metaTags.title} />
        <meta name="twitter:site" content="Rasa" />
        <meta name="twitter:image" content="./assets/og-image.png" />
        <meta name="twitter:description" content={caseStudy.metaTags.description} />

        <meta name="description" content={caseStudy.metaTags.description} />
        <title>{caseStudy.metaTags.title}</title>
      </Head>
      <header>
        <Navbar links={linksHeader} />
        <HeaderContent caseStudy={caseStudy} />
      </header>
      <div className={styles.WavyShape} />
      <section className={styles.ContentContainer}>
        <div className={styles.Content}>
          <CaseStudyContent caseStudy={caseStudy} />
          <CustomerCard caseStudy={caseStudy} />
        </div>
      </section>
      <section className={styles.QuoteContainer}>
        <div className={styles.Quote}>
          <Quote caseStudy={caseStudy} />
        </div>
      </section>
      <footer>
        <Newsletter />
        <FooterContent links={linksFooter} />
      </footer>
    </>
  );
}


