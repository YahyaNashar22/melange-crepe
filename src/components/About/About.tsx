import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import styles from "./About.module.css";

import ramy from "../../assets/ramy.jpg";

const About = () => {
  const ramyRef = useRef<HTMLImageElement>(null);
  const [isInView, setIsInView] = useState(false); // State to track if the image is in view

  useEffect(() => {
    // Set up Intersection Observer to detect when the image comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Set to true when the image is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    if (ramyRef.current) {
      observer.observe(ramyRef.current); // Start observing the image
    }

    return () => {
      if (ramyRef.current) {
        observer.unobserve(ramyRef.current); // Clean up the observer when the component unmounts
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && ramyRef.current) {
      gsap.fromTo(
        ramyRef.current,
        { opacity: 0, scale: 0.5, rotation: -45 }, // Initial state
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 2,
          ease: "power3.out", // Easing for smooth animation
        }
      );
    }
  }, [isInView]); // Run thi
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
          src={ramy}
          alt="ramy"
          className={styles.ramy}
          loading="lazy"
          ref={ramyRef}
        />
      </div>
    </section>
  );
};

export default About;
