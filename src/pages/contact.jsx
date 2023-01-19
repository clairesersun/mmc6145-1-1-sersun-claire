import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
          <h1 className={styles.placeholder}>Let's Connect!</h1>
          <h2>Email</h2>
          <p>clairesersun@ufl.edu</p>
          <h2>Social Links</h2>
          <a href='https://www.linkedin.com/in/clairesersun/'> LinkedIn</a>
          <a href='https://github.com/clairesersun'> GitHub</a>
          <a href='https://www.instagram.com/clairesersun/?hl=en'> Instagram</a>
      </main>
      <Footer />
    </body>
  )
}