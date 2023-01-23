import styles from "../styles/about.module.css";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

export default function About() {
  return (
    <div className={styles.background}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <h1 className={styles.toptext}>Hi! I'm Claire.</h1>
        <p className={styles.content}>
          Claire Sersun is an American artist, dancer, choreographer, movement
          instructor, web designer, and photographer. She started her career at
          15 dancing in music videos in Los Angeles. She then moved to NYC and
          received her Bachelor of Arts in Kinesiology and Dance from Marymount
          Manhattan College. While there she was also able to explore her
          interest in photography through her minor. While in NYC, Claire has
          had the pleasure of performing and sharing her choreography and
          photography across the city. She has performed works by Valeria
          Gonzalez, Mackenzie Martin, Cornelius Carter, Deborah Damast, Karen
          Gayle, Elizabeth Roxas-Dobrish, Troy Ogilvie, Camille Loftin, Anthony
          Ferro, Christy Curtis Buss, Charm La'Donna, and more. She was apart of
          VALLETO Dance's Fall 2020 virtual season. In the Fall of 2021 she
          trained with the LA based dance company, Geometry Dance Company, as a
          G2 artist..
        </p>
        <p className={styles.content}>
          Claire is a passionate, vastly certified, fitness instructor and
          coach. Alongside her Bachelor of Arts in Kinesiology and Dance, she
          holds a Personal Training Certification from the American Council on
          Exercise (ACE). She is trained in somatic based fitness and dance
          programs as well as pedagogy for those facing the side-effects of
          cancer and aging. Claire is a Moving For Life Certified Instructor, a
          Certified BodyMind Dancing Teacher, Row House Coach, and a yoga
          teacher (200-Hour Registered Yoga Teacher). She is trained in the
          Bridging The Gap Movement Method™ which is a neurophysiological
          conditioning program. Her passion is in getting people moving so that
          they can love their bodies and live their lives to the fullest.{" "}
        </p>
        <p className={styles.content}>
          Claire is currently a Graduate Student in the University of Florida's
          College of Journalism and Communications. She is working towards a
          Master of Arts in Mass Communication with a concentration in Web
          Design. Claire loves helping to build out the voice of the individual,
          company, or organization through their website's presence.
        </p>
      </main>
      <Footer />
    </div>
  );
}
