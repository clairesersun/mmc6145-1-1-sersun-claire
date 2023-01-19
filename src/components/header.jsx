import styles from '../styles/header.module.css'

export default function Header() {
  return (
      <div>
        <a href='/'><p>Claire Sersun</p></a>
        <a href='/about' className={styles.placeholder}><p>About</p></a>
        <a href='/contact' className={styles.placeholder}><p>Contact</p></a>
      </div>
  )
}