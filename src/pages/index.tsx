import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CliPreview from "../components/CliPreview";

import styles from "./index.module.css";
import DashBoardPreview from "../components/DashboardPreview";
import BannerAnimation from "../components/BannerAnimation";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="bg-base dark:bg-primary px-4 text-white dark:text-base antialiased py-8 md:py-60 pb-14 relative font-sans border-solid border-t-1 border-gray-700 border-r-0 border-l-0 border-b-0">
      <BannerAnimation />
      <div className="flex flex-col gap-10">
        <h1 className="font-semibold text-6xl text-primary dark:text-black text-center">
          {siteConfig.title}
        </h1>
        <h2 className="text-neutral text-center text-2xl dark:text-black">
          {siteConfig.tagline}
        </h2>
        <div className={styles.buttons}>
          <Link
            className="border border-white font-semibold dark:border-base rounded-2xl p-3 hover:border-base hover:text-base hover:bg-primary dark:hover:bg-base dark:hover:text-neutral transition ease-in"
            to="/docs/category/case-study"
            style={{ textDecoration: "none" }}
          >
            Read the Case study{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={"Home"}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <CliPreview />
        <DashBoardPreview />
      </main>
    </Layout>
  );
}
