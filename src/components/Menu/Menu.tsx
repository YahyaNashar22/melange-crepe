import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Menu.module.css";

const menuData = {
  Crepe: [
    { name: "Nutella Crepe", price: "320.000" },
    { name: "Swiss Chocolate Crepe", price: "350.000" },
    { name: "Belgium Chocolate Crepe", price: "360.000" },
    { name: "Kinder Crepe", price: "420.000" },
    { name: "Lotus Crepe", price: "450.000" },
    { name: "Oreo Crepe", price: "370.000" },
  ],
  Waffle: [
    { name: "Nutella Waffle", price: "420.000" },
    { name: "Swiss Chocolate Waffle", price: "450.000" },
    { name: "Belgium Chocolate Waffle", price: "460.000" },
  ],
  "Smashed Pancake": [
    { name: "Nutella Pancake", price: "360.000" },
    { name: "Swiss Chocolate Pancake", price: "380.000" },
  ],
  "Hot Drinks": [
    { name: "Espresso Single", price: "80.000" },
    { name: "Espresso Double", price: "90.000" },
  ],
  Smoothies: [{ name: "Peach Smoothie", price: "300.000" }],
  Milkshakes: [{ name: "Vanilla Milkshake", price: "300.000" }],
};

const MenuItem = ({ name, price }: { name: string; price: string }) => (
  <div className={styles.menuItem}>
    <span className={styles.itemName}>{name}</span>
    <span className={styles.itemPrice}>{price}</span>
  </div>
);

const Menu = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (menuRef.current) {
      gsap.fromTo(
        menuRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section id="menu" className={styles.wrapper} ref={menuRef}>
      <h2 className={styles.title}>Our Menu</h2>
      {Object.entries(menuData).map(([category, items]) => {
        const categoryClass = category.toLowerCase().replace(/\s+/g, "-");

        return (
          <div
            key={category}
            className={`${styles.section} ${styles[categoryClass] || ""}`}
          >
            <h3 className={styles.sectionTitle}>{category}</h3>
            <div className={styles.itemList}>
              {items.map((item) => (
                <MenuItem key={item.name} name={item.name} price={item.price} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Menu;
