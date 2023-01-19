import styles from '../styles/home.module.css'
import Header from '../components/header'
import Project from '../components/project'

export default function Home() {
  return (
    <body className={styles.background}>
      <header className={styles.header}>
        <Header />
        <p>Claire Sersun</p>
        <p>Web Developer</p>
        <a href='/About'>About Me</a>
      </header>
      <main className={styles.main}>
        <h1 className={styles.placeholder}>I'm the home page!</h1>
        <h2>Work</h2>
        <Project />
      </main>
      <Footer />
    </body>
  )
}