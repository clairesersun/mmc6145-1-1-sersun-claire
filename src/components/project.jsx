import styles from '../styles/project.module.css'

export default function Project() {
  return (
    <div>
    <a href='https://www.clairesersun.com/copy-of-projecttemplate-1' className={styles.placeholder}>
        <p>VALLETO</p>
        <img src='../src/components/valletodesktop.png' alt='VALLETO Miami Contemporary Dance Company'></img>
    </a>
    <a href='https://www.clairesersun.com/copy-of-projecttemplate'>
      <p>Testimonial Grid</p>
      <img src='../src/components/griddesktop.png' alt='Testimonial Grid'></img>
      </a>
    </div>
  )
}