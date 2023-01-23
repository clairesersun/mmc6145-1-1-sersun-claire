import styles from "../styles/contact.module.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

export default function Contact() {
  return (
    <div className={styles.background}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <h1 className={styles.toptext}>Let's Connect!</h1>
        <h2 className={styles.content}>Email</h2>
        <p className={styles.content}>clairesersun@ufl.edu</p>
        <h2 className={styles.content}>Social Links</h2>
        <a
          href="https://www.linkedin.com/in/clairesersun/"
          className={styles.content}
        >
          {" "}
          LinkedIn
        </a>
        <a href="https://github.com/clairesersun" className={styles.content}>
          {" "}
          GitHub
        </a>
        <a
          href="https://www.instagram.com/clairesersun/?hl=en"
          className={styles.content}
        >
          {" "}
          Instagram
        </a>
      </main>
      <Footer />
    </div>
  );
}
