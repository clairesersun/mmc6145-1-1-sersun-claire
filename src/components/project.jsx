import styles from "../styles/project.module.css";
import valletoImgUrl from "src/components/valletodesktop.png";
import testiImgUrl from "src/components/griddesktop.png";

const projCompleted = [
  {
    id: 1,
    name: "VALLETO",
    href: "https://www.clairesersun.com/copy-of-projecttemplate-1",
    src: { valletoImgUrl },
    alt: "VALLETO Miami Contemporary Dance Company",
  },
  {
    id: 2,
    name: "Testimonial Grid",
    href: "https://www.clairesersun.com/copy-of-projecttemplate",
    src: { testiImgUrl },
    alt: "Testimonial Grid",
  },
];

export default function Projects() {
  const projItems = projCompleted.map((proj) => (
    <div key={proj.id}>
      <a href={proj.href} className={styles.project}>
        <p>{proj.name}</p>
        <img className={styles.projectimg} src={proj.src} alt={proj.alt}></img>
      </a>
    </div>
  ));
  return <div>{projItems}</div>;
}
