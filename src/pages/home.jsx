import styles from "../styles/home.module.css";
import Header from "../components/header.jsx";
import Projects from "../components/project.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";
import myHeadUrl from "src/components/ClaireSersun_Picture.jpg";

export default function Home() {
  return (
    <div className={styles.background}>
      <Header />
      <section className={styles.topsection}>
        <img
          src={myHeadUrl}
          alt="Claire's Headshot"
          className={styles.headshot}
        ></img>
        <div className={styles.toptext}>
          <p className={styles.name}>Claire Sersun</p>
          <p className={styles.title}>Web Developer</p>
          <p>
            <Link to={"/about"} className={styles.aboutlink}>
              About Me
            </Link>
          </p>
        </div>
      </section>
      <main className={styles.main}>
        <h1>Work</h1>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
