import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <p>
        <a href="/about" className={styles.link}>
          About
        </a>
      </p>
      <p>
        <a href="/" className={styles.linkhome}>
          Claire Sersun
        </a>
      </p>
      <p>
        <a href="/contact" className={styles.link}>
          Contact
        </a>
      </p>
    </header>
  );
}
