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
    title: "Facil de Navegar",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Nuestro sitio fue diseñado para que puedas encontrar fácilmente la
        información que necesitas. Con una navegación intuitiva, podrás acceder
        rápidamente a la documentación que buscas.
      </>
    ),
  },
  {
    title: "Contenido Relevante",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Nos enfocamos en proporcionarte contenido relevante y útil sobre
        desarrollo de software. Nuestro blog está lleno de artículos
        interesantes y tutoriales prácticos que te ayudarán a mejorar tus
        habilidades.
      </>
    ),
  },
  {
    title: "Innovación Tecnológica",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Utilizamos tecnología de punta para brindarte la mejor experiencia.
        Nuestro sitio está potenciado por React, lo que nos permite ofrecerte un
        diseño moderno y funcionalidades interactivas.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
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
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
