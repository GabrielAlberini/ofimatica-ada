import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Introducción Ofimática</h1>
        <img
          src="https://twoda-intro-frontend-mt.onrender.com/img/carreras.png"
          alt="logo ADA ITW"
        />
        <div>
          <a
            class="button button--outline button--secondary button--lg custom-button"
            href="./docs/clase-1"
          >
            Ir a cursos
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Ada ITW`}
      description="Página destinada al curso de Ofimática de Ada ITW"
    >
      <HomepageHeader />
    </Layout>
  );
}
