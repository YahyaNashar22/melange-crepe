import styles from "./Cooking.module.css";

import cook from "../../assets/cook.mp4";

const Cooking = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Freshly Cooked!</h2>
      <p className={styles.content}>
        Watch our delicious creations come to life! Our team prepares each
        dessert with passion and precision, using the finest ingredients to
        craft mouthwatering treats just for you.
      </p>
      <div className={styles.videoContainer}>
        <video
          className={styles.cookingVideo}
          src={cook}
          autoPlay
          muted
          controls
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default Cooking;
