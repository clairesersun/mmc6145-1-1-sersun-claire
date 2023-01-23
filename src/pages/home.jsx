import styles from "../styles/home.module.css";
import Header from "../components/header.jsx";
import Projects from "../components/project.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <div className={styles.background}>
      <Header />
      <section className={styles.topsection}>
        <img
          src="src/components/ClaireSersun_Picture.jpg"
          alt="Claire's Headshot"
          className={styles.headshot}
        ></img>
        <div className={styles.toptext}>
          <p className={styles.name}>Claire Sersun</p>
          <p className={styles.title}>Web Developer</p>
          <a href="/About" className={styles.aboutlink}>
            About Me
          </a>
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
