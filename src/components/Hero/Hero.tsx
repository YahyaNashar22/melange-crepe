import styles from "./Hero.module.css";

import happiness from "../../assets/happiness.jpg";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <a href="#menu" className={styles.cta}>
        Check Our Menu
      </a>
      <h1 className={styles.headline}>Unlock your happiness</h1>
      <h2 className={styles.slogan}>Potential</h2>
      <img
        src={happiness}
        alt="Delicious Crepes"
        className={styles.heroImage}
      />
    </section>
  );
};

export default Hero;

// https://wa.me/+96170576716
