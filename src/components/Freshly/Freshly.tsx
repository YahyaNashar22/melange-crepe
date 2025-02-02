import styles from "./Freshly.module.css";

const Freshly = () => {
  return (
    <section className={styles.freshly}>
      <h3 className={styles.freshlyHeader}>
        <span className={styles.headerWord}>Freshly</span>
        <span className={styles.headerWord}>Made</span>
        Just For You
      </h3>
    </section>
  );
};

export default Freshly;
