import styles from "./Freshly.module.css";

import delivery from "../../assets/delivery.png";
import hot from "../../assets/hot.png";
import delicious from "../../assets/delicious.png";
import whatsapp from "../../assets/whatsapp.png";

const Freshly = () => {
  const phone = import.meta.env.VITE_PHONE;
  return (
    <section className={styles.freshly}>
      <h3 className={styles.freshlyHeader}>
        <span className={styles.headerWord}>Freshly</span>
        <span className={styles.headerWord}>Made</span>
        Just For You
      </h3>
      <div className={styles.icons}>
        <div className={styles.iconItem}>
          <img src={delivery} width={50} height={50} alt="delivery" />
          <p className={styles.iconDescription}>Delivery</p>
        </div>
        <div className={styles.iconItem}>
          <img src={hot} width={50} height={50} alt="hot" />
          <p className={styles.iconDescription}>Hot</p>
        </div>
        <div className={styles.iconItem}>
          <img src={delicious} width={50} height={50} alt="delicious" />
          <p className={styles.iconDescription}>Delicious</p>
        </div>
      </div>
      <a href={`https://wa.me/${phone}`} className={styles.cta}>
        Order Now! <img src={whatsapp} width={30} height={30} alt="whatsapp" />
      </a>
    </section>
  );
};

export default Freshly;
