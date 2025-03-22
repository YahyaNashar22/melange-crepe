import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Menu.module.css";

const menuData = {
  Crepe: [
    { name: "Nutella Crepe", price: "320.000 LBP" },
    { name: "Swiss Chocolate Crepe", price: "350.000 LBP" },
    { name: "Belgium Chocolate Crepe", price: "360.000 LBP" },
    { name: "Kinder Crepe", price: "420.000 LBP" },
    { name: "Lotus Crepe", price: "450.000 LBP" },
    { name: "Oreo Crepe", price: "370.000 LBP" },
    { name: "Kitkat crepe", price: "370.000 LBP" },
    { name: "Snickers crepe", price: "380.000 LBP" },
    { name: "White chocolate crepe", price: "350.000 LBP" },
    { name: "Strawberry chocolate crepe", price: "350.000 LBP" },
    { name: "Pistachio crepe", price: "550.000 LBP" },
    { name: "Brownies crepe", price: "450.000 LBP" },
    { name: "Red velvet crepe", price: "570.000 LBP" },
    { name: "Dark swiss crepe ", price: "420.000 LBP" },
    { name: "Peanut butter crepe", price: "500.000 LBP" },
    { name: "Banana crepe", price: "420.000 LBP" },
    { name: "Mango crepe", price: "490.000 LBP" },
    { name: "Strawberry crepe", price: "420.000 LBP" },
    { name: "Avocado crepe", price: "500.000 LBP" },
    { name: "Mix fruit crepe", price: "550.000 LBP" },
  ],
  Waffle: [
    { name: "Nutella Waffle", price: "420.000 LBP" },
    { name: "Swiss Chocolate Waffle", price: "450.000 LBP" },
    { name: "Belgium Chocolate Waffle", price: "460.000 LBP" },
  ],
  "Smashed Pancake": [
    { name: "Nutella Pancake", price: "360.000 LBP" },
    { name: "Swiss Chocolate Pancake", price: "380.000 LBP" },
  ],
  "Hot Drinks": [
    { name: "Espresso Single", price: "80.000 LBP" },
    { name: "Espresso Double", price: "90.000 LBP" },
  ],  
  Smoothies: [{ name: "Peach Smoothie", price: "300.000 LBP" }],
  Milkshakes: [{ name: "Vanilla Milkshake", price: "300.000 LBP" }],
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
