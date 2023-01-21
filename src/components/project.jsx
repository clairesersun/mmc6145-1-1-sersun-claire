import styles from "../styles/project.module.css";

const projCompleted = [
  {
    id: 1,
    name: "VALLETO",
    href: "https://www.clairesersun.com/copy-of-projecttemplate-1",
    src: "../src/components/valletodesktop.png",
    alt: "VALLETO Miami Contemporary Dance Company",
  },
  {
    id: 2,
    name: "Testimonial Grid",
    href: "https://www.clairesersun.com/copy-of-projecttemplate",
    src: "../src/components/griddesktop.png",
    alt: "Testimonial Grid",
  },
];

export default function Projects() {
  const projItems = projCompleted.map((proj) => (
    <div>
      <a href={proj.href} className={styles.placeholder}>
        <p>{proj.name}</p>
        <img src={proj.src} alt={proj.alt}></img>
      </a>
    </div>
  ));
  return <div>{projItems}</div>;
}
