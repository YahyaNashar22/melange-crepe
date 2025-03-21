import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Menu.module.css";

const menuData = {
  Saj: [
    { name: "Cheese Akkawi", price: "120.000 LBP" },
    { name: "Zaatar", price: "60.000 LBP" },
    { name: "Zaatar Khodar", price: "100.000 LBP" },
    { name: "Cheese Halloumi", price: "140.000 LBP" },
    { name: "Cheese Mortadella", price: "150.000 LBP" },
    { name: "Cheese Kashkaval", price: "160.000 LBP" },
    { name: "Cheese w Zaatar", price: "120.000 LBP" },
    { name: "Labne", price: "120.000 LBP" },
    { name: "Labne Khodra", price: "150.000 LBP" },
    { name: "Arishe", price: "130.000 LBP" },
    { name: "Cheese Arishe", price: "150.000 LBP" },
    { name: "Cheese Sujok", price: "170.000 LBP" },
    { name: "Cheese Sitos", price: "160.000 LBP" },
    { name: "Cheese Awarma", price: "170.000 LBP" },
    { name: "Labne Awarma", price: "170.000 LBP" },
    { name: "Keshek", price: "160.000 LBP" },
    { name: "Chocolate Banana", price: "150.000 LBP" },
    { name: "Chocolate Pistachio", price: "170.000 LBP" },
    { name: "Fajita", price: "200.000 LBP" },
    { name: "Kafta", price: "200.000 LBP" },
    { name: "Mexicana", price: "200.000 LBP" },
    { name: "Chicken Sub", price: "200.000 LBP" },
    { name: "Chicken Ceaser", price: "200.000 LBP" },
    { name: "Tuna", price: "200.000 LBP" },
    { name: "Turkey and Cheese", price: "200.000 LBP" },
  ],
  Crepe: [
    { name: "Nutella", price: "320.000 LBP" },
    { name: "Swiss Chocolate", price: "350.000 LBP" },
    { name: "Belgium Chocolate", price: "360.000 LBP" },
    { name: "Kinder", price: "420.000 LBP" },
    { name: "Lotus ", price: "450.000 LBP" },
    { name: "Oreo", price: "370.000 LBP" },
    { name: "Kitkat", price: "370.000 LBP" },
    { name: "Snickers", price: "380.000 LBP" },
    { name: "White chocolate", price: "350.000 LBP" },
    { name: "Strawberry chocolate", price: "350.000 LBP" },
    { name: "Pistachio", price: "550.000 LBP" },
    { name: "Brownies", price: "450.000 LBP" },
    { name: "Red velvet", price: "570.000 LBP" },
    { name: "Dark swiss", price: "420.000 LBP" },
    { name: "Peanut butter", price: "500.000 LBP" },
    { name: "Banana", price: "420.000 LBP" },
    { name: "Mango", price: "490.000 LBP" },
    { name: "Strawberry", price: "420.000 LBP" },
    { name: "Avocado", price: "500.000 LBP" },
    { name: "Mix fruit", price: "550.000 LBP" },
  ],
  Waffle: [
    { name: "Nutella", price: "420.000 LBP" },
    { name: "Swiss Chocolate", price: "450.000 LBP" },
    { name: "Belgium Chocolate", price: "460.000 LBP" },
    { name: "Kinder", price: "490.000 LBP" },
    { name: "Lotus", price: "500.000 LBP" },
    { name: "Oreo", price: "450.000 LBP" },
    { name: "White chocolate", price: "450.000 LBP" },
    { name: "Strawberry chocolate", price: "450.000 LBP" },
    { name: "Pistachio", price: "550.000 LBP" },
    { name: "Brownies", price: "480.000 LBP" },
    { name: "Red velvet", price: "570.000 LBP" },
    { name: "Dark swiss", price: "480.000 LBP" },
    { name: "Mango", price: "550.000 LBP" },
    { name: "Banana", price: "430.000 LBP" },
    { name: "Avocado", price: "480.000 LBP" },
    { name: "Mix fruit", price: "490.000 LBP" },
  ],
  "Smashed Pancake": [
    { name: "Nutella", price: "360.000 LBP" },
    { name: "Swiss Chocolate", price: "380.000 LBP" },
    { name: "Belgium chocolate", price: "390.000 LBP" },
    { name: "Kinder", price: "460.000 LBP" },
    { name: "Lotus", price: "490.000 LBP" },
    { name: "Oreo", price: "390.000 LBP" },
    { name: "Kitkat", price: "390.000 LBP" },
    { name: "Snickers", price: "390.000 LBP" },
    { name: "White chocolate", price: "370.000 LBP" },
    { name: "Strawberry chocolate", price: "390.000 LBP" },
    { name: "Pistachio", price: "580.000 LBP" },
    { name: "Brownies", price: "480.000 LBP" },
    { name: "Red velvet", price: "590.000 LBP" },
    { name: "Dark swiss", price: "480.000 LBP" },
    { name: "Peanut butter", price: "550.000 LBP" },
    { name: "Banana", price: "480.000 LBP" },
    { name: "Mango", price: "490.000 LBP" },
    { name: "Strawberry", price: "470.000 LBP" },
    { name: "Avocado", price: "540.000 LBP" },
    { name: "Mix fruit", price: "570.000 LBP" },
  ],
  "Hot Drinks": [
    { name: "Espresso Single", price: "80.000 LBP" },
    { name: "Espresso Double", price: "90.000 LBP" },
    { name: "Cappuccino", price: "150.000 LBP" },
    { name: "Americano", price: "150.000 LBP" },
    { name: "Cortado", price: "150.000 LBP" },
    { name: "Latte", price: "180.000 LBP" },
    { name: "Macchiato latte", price: "180.000 LBP" },
    { name: "Caramel latte", price: "200.000 LBP" },
    { name: "Kinder latte", price: "200.000 LBP" },
    { name: "Vanilla latte", price: "200.000 LBP" },
    { name: "Spanish latte", price: "200.000 LBP" },
    { name: "Lotus latte", price: "200.000 LBP" },
    { name: "Oreo latte", price: "200.000 LBP" },
    { name: "Irish latte", price: "200.000 LBP" },
    { name: "Mocha latte", price: "200.000 LBP" },
    { name: "Hot chocolate", price: "200.000 LBP" },
    { name: "Tea", price: "90.000 LBP" },
  ],
  Smoothies: [
    { name: "Peach", price: "300.000 LBP" },
    { name: "Mango", price: "300.000 LBP" },
    { name: "Strawberry", price: "300.000 LBP" },
    { name: "Blueberry", price: "300.000 LBP" },
    { name: "Passion fruit", price: "300.000 LBP" },
  ],
  Milkshakes: [
    { name: "Vanilla", price: "300.000 LBP" },
    { name: "Chocolate", price: "300.000 LBP" },
    { name: "Strawberry", price: "320.000 LBP" },
    { name: "Lotus", price: "330.000 LBP" },
    { name: "Oreo", price: "330.000 LBP" },
    { name: "Nescafe", price: "300.000 LBP" },
    { name: "Cookies", price: "300.000 LBP" },
    { name: "Blueberry", price: "320.000 LBP" },
    { name: "Coconut", price: "300.000 LBP" },
    { name: "Irish", price: "300.000 LBP" },
  ]
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
