import styles from "../styles/about.module.css";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

export default function About() {
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <h1 className={styles.placeholder}>Hi! I'm Claire.</h1>
        <p>A little pit about me...</p>
      </main>
      <Footer />
    </body>
  );
}
