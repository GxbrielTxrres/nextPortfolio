import { animate, motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { useState, useRef } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef(null);
  const handleClickEvent = () => {
    setIsOpen(!isOpen);
    isOpen
      ? (button.current.innerHTML = "Menu")
      : (button.current.innerHTML = "Close");
  };
  return (
    <>
      <div>
        <button
          ref={button}
          className={styles.menuButton}
          onClick={handleClickEvent}
        >
          Menu
        </button>
      </div>

      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 1 }}
        className={`${isOpen ? `${styles.menuContainer}` : `${styles.hide}`}`}
      >
        {/* social media links */}
        <div className={styles.home}>
          <a href="/">
            <i className="fa-sharp fa-solid fa-house"></i>
          </a>
        </div>

        {/* MENU OPTIONS */}
        <motion.a
          whileTap={{ scale: 0.8 }}
          className={styles.card}
          href="/about"
        >
          About
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.8 }}
          className={styles.card}
          href="/contact"
        >
          Contact
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.8 }}
          className={styles.card}
          href="/projects"
        >
          Projects
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.8 }}
          className={styles.card}
          href="/services"
        >
          Services
        </motion.a>
      </motion.div>
    </>
  );
};

export default Menu;
