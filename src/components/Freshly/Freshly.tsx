import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Freshly.module.css";

import delivery from "../../assets/delivery.png";
import hot from "../../assets/hot.png";
import delicious from "../../assets/delicious.png";
import whatsapp from "../../assets/whatsapp.png";

const Freshly = () => {
  const phone = import.meta.env.VITE_PHONE;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      `.${styles.iconItem}`,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.icons}`,
          start: "top 80%", // Start animation when 80% of the section is in view
          once: true, // Ensures animation plays only once and does not replay on scroll
        },
      }
    );
  }, []);
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
