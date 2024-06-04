import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHeader from "@site/src/components/HomepageHeader";

import CliPreview from "@site/src/components/CliPreview";

import DashBoardPreview from "@site/src/components/DashboardPreview";
import SDKPreview from "@site/src/components/SdkPreview";
import { Team } from "@site/src/components/Team";

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
        <SDKPreview />
        <Team />
      </main>
    </Layout>
  );
}
