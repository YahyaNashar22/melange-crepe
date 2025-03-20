import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import styles from "./About.module.css";

import waffle from "../../assets/waffle.jpg";
import delivery from "../../assets/delivery.jpg";

const About = () => {
  const waffleRef = useRef<HTMLImageElement>(null);
  const deliveryRef = useRef<HTMLImageElement>(null); // New ref for the delivery image
  const [isRamyInView, setIsRamyInView] = useState(false); // State for Ramy image visibility
  const [isDeliveryInView, setIsDeliveryInView] = useState(false); // State for delivery image visibility

  useEffect(() => {
    // Set up Intersection Observer for both images
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === waffleRef.current && entry.isIntersecting) {
            setIsRamyInView(true); // Set Ramy image visibility to true when in view
          } else if (
            entry.target === deliveryRef.current &&
            entry.isIntersecting
          ) {
            setIsDeliveryInView(true); // Set Delivery image visibility to true when in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    if (waffleRef.current) observer.observe(waffleRef.current); // Start observing Ramy image
    if (deliveryRef.current) observer.observe(deliveryRef.current); // Start observing Delivery image

    return () => {
      if (waffleRef.current) observer.unobserve(waffleRef.current); // Clean up observer for Ramy image
      if (deliveryRef.current) observer.unobserve(deliveryRef.current); // Clean up observer for Delivery image
    };
  }, []);

  useEffect(() => {
    if (isRamyInView && waffleRef.current) {
      gsap.fromTo(
        waffleRef.current,
        { opacity: 0, scale: 0.5, rotation: -45 }, // Initial state for Ramy image
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 2,
          ease: "power3.out", // Easing for smooth animation
        }
      );
    }
  }, [isRamyInView]); // Run this animation when Ramy image comes into view

  useEffect(() => {
    if (isDeliveryInView && deliveryRef.current) {
      gsap.fromTo(
        deliveryRef.current,
        { opacity: 0, x: 100 }, // Initial state for Delivery image
        {
          opacity: 1,
          x: 0, // Move to the original position
          duration: 2,
          ease: "power3.out", // Easing for smooth animation
        }
      );
    }
  }, [isDeliveryInView]); // Run this animation when Delivery image comes into view
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Know a little about us</h2>
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          At Melange Crepe, we take pride in our authentic and delicious taste.
          Our team specializes in crafting the finest crepes, waffles, and mini
          pancakes, all made with the freshest ingredients. Whether you're
          craving a sweet treat or a savory delight, we've got something to
          satisfy every taste bud. We believe in creating moments of joy with
          every bite, offering a variety of toppings to make your dessert
          experience truly unique. From decadent chocolate drizzles to fresh
          fruits, our creations are as delightful as they are mouthwatering.
        </p>
        <img
          src={waffle}
          alt="waffle"
          className={styles.aboutImg}
          loading="lazy"
          ref={waffleRef}
        />
      </div>

      <h2 className={styles.title}>We Deliver!</h2>
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          At Melange Crepe, we bring the delightful taste of our fresh and hot
          made-to-order desserts right to your doorstep! Whether you're craving
          a sweet treat or a savory delight, we deliver a wide range of
          delicious options including crepes, waffles, and mini pancakes, all
          made with the finest, freshest ingredients. Our delivery service
          ensures that every bite you take is as delicious and warm as it would
          be if you were enjoying it right in our cozy store. We offer fast and
          reliable delivery within Tripoli, ensuring you don't have to wait long
          to satisfy your cravings. From decadent chocolate drizzles to fresh
          fruits, our wide variety of toppings makes each dessert a unique
          experience. Plus, with our friendly delivery team, your order will
          arrive quickly and safely, so you can enjoy our mouthwatering
          creations wherever you are. Craving something tasty? Place your order
          today and experience the convenience of having your favorite Melange
          Crepe dessert delivered straight to your door in no time!
        </p>
        <img
          src={delivery}
          alt="ramy"
          className={styles.aboutImg}
          loading="lazy"
          ref={deliveryRef}
        />
      </div>
    </section>
  );
};

export default About;
