import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <p>
        <Link to={"/about"} className={styles.link}>
          About
        </Link>
      </p>
      <p>
        <Link to={"/"} className={styles.linkhome}>
          Claire Sersun
        </Link>
      </p>
      <p>
        <Link to={"/contact"} className={styles.link}>
          Contact
        </Link>
      </p>
    </header>
  );
}
