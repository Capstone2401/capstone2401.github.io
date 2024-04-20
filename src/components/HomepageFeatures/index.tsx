import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Scalable ETL pipeline",
    Svg: require("@site/static/img/noun-data-pipeline.svg").default,
    description: <>used for event streaming</>,
  },
  {
    title: "Fully automated provisioning",
    Svg: require("@site/static/img/noun-console.svg").default,
    description: <>Via custom CLI</>,
  },

  {
    title: "Distributed Data Warehouse",
    Svg: require("@site/static/img/noun-database-network.svg").default,
    description: <>Via Redshift</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="">
      <div className="flex justify-center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container py-10 ">
        <div className="flex flex-1 flex-wrap justify-around">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
