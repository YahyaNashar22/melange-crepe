import { useEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./Menu.module.css";

import items from "../../items";

import strawberry from "../../assets/strawberry.png";
import oreo from "../../assets/oreo.png";
import chocolate from "../../assets/chocolate.png";
import white_chocolate from "../../assets/white_chocolate.png";
import pistachio from "../../assets/pistachio.png";
import chips from "../../assets/chips.png";
import flakes from "../../assets/flakes.png";
import white_chips from "../../assets/white_chips.png";

const MenuCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const Menu = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      gsap.fromTo(
        menuRef.current.children,
        { opacity: 0, y: 50 }, // Start hidden & slightly lower
        {
          opacity: 1,
          y: 0,
          duration: 2,
          stagger: 0.2, // Stagger effect for each card
          ease: "power3.out",
        }
      );
    }
  }, []);
  return (
    <section id="menu" className={styles.wrapper} ref={menuRef}>
      {items.map((item) => (
        <MenuCard
          key={item.name}
          name={item.name}
          description={item.description}
        />
      ))}
      <h2 className={styles.toppings}>
        Add your favorite toppings! 🍫🍓 Choose from chocolate chips, fresh
        fruits, sweeteners, corn flakes, and more!
      </h2>

      {/* Scattered Images Positioned Around Section */}
      <img
        src={oreo}
        className={`${styles.scatteredImage} ${styles.oreo}`}
        loading="lazy"
        alt="Oreo"
        width={64}
        height={64}
      />
      <img
        src={strawberry}
        className={`${styles.scatteredImage} ${styles.strawberry}`}
        loading="lazy"
        alt="Strawberry"
        width={64}
        height={64}
      />
      <img
        src={chocolate}
        className={`${styles.scatteredImage} ${styles.chocolate}`}
        loading="lazy"
        alt="Chocolate"
        width={64}
        height={64}
      />
      <img
        src={pistachio}
        className={`${styles.scatteredImage} ${styles.pistachio}`}
        loading="lazy"
        alt="Pistachio"
        width={64}
        height={64}
      />
      <img
        src={white_chocolate}
        className={`${styles.scatteredImage} ${styles.white}`}
        loading="lazy"
        alt="White Chocolate"
        width={64}
        height={64}
      />  <img
      src={chips}
      className={`${styles.scatteredImage} ${styles.chips}`}
      loading="lazy"
      alt="Chips"
      width={64}
      height={64}
    />  <img
    src={white_chips}
    className={`${styles.scatteredImage} ${styles.white_chips}`}
    loading="lazy"
    alt="White Chips"
    width={64}
    height={64}
  />  <img
  src={flakes}
  className={`${styles.scatteredImage} ${styles.flakes}`}
  loading="lazy"
  alt="Flakes"
  width={64}
  height={64}
/>
    </section>
  );
};

export default Menu;
