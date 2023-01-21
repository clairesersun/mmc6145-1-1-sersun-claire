import styles from "../styles/home.module.css";
import Header from "../components/header.jsx";
import Projects from "../components/project.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <body className={styles.background}>
      <Header />
      <section>
        <p>Claire Sersun</p>
        <p>Web Developer</p>
        <a href="/About">About Me</a>
      </section>
      <main className={styles.main}>
        <h1 className={styles.placeholder}>I'm the home page!</h1>
        <h2>Work</h2>
        <Projects />
      </main>
      <Footer />
    </body>
  );
}
