import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <div>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        </div>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={`${styles.heroButtons}`}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started 🚀
          </Link>
          <Link
            className="button button--primary button--lg"
            to="https://github.com/yourusername/yourrepository"
          >
            View on GitHub
          </Link>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="/img/hero-illustration.svg" alt="Hero Illustration" />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
