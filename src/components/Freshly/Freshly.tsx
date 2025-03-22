import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Freshly.module.css";

import delivery from "../../assets/delivery.png";
import hot from "../../assets/hot.png";
import delicious from "../../assets/delicious.png";
import whatsapp from "../../assets/whatsapp.png";

import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import tiktok from "../../assets/tiktok.png";

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

    // Animate CTA button
    gsap.fromTo(
      `.${styles.cta}`,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out", // Bouncy effect for CTA
        scrollTrigger: {
          trigger: `.${styles.cta}`,
          start: "top 90%", // Start animation slightly earlier
          once: true,
        },
      }
    );
  }, []);
  return (
    <section className={styles.freshly}>
      <h2 className={styles.followHeader}>Follow us and get free delivery!</h2>

      <ul className={styles.links}>
        <li className={styles.link}>
          <a
            href="https://www.instagram.com/melangelb1?igsh=MTI5dXF0bmxmY3poaw%3D%3D"
            target="_blank"
            className={styles.linkIco}
          >
            <img src={instagram} alt="instagram" />
          </a>
        </li>

        <li className={styles.link}>
          <a
            href="https://www.facebook.com/share/1D6MCLVYF7/"
            target="_blank"
            className={styles.linkIco}
          >
            <img src={facebook} alt="facebook" />
          </a>
        </li>

        <li className={styles.link}>
          <a
            href="https://www.tiktok.com/@melange.lb?_t=ZS-8uu9H9rrQQO&_r=1"
            target="_blank"
            className={styles.linkIco}
          >
            <img src={tiktok} alt="tiktok" />
          </a>
        </li>
      </ul>

      <h3 className={styles.freshlyHeader}>
        <span className={styles.headerWord}>Freshly</span>
        <span className={styles.headerWord}>Made</span>
        Just For You
      </h3>
      <div className={styles.icons}>
        <div className={styles.iconItem}>
          <img src={delivery} width={50} height={50} alt="delivery" />
          <p className={styles.iconDescription}>Fast Delivery</p>
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
