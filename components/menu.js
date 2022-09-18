import { animate, motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { useState, useRef } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef(null);
  const menu = useRef(null);

  const handleClickEvent = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      button.current.innerHTML = "Close";
      menu.current.style.display = "flex";
      menu.current.style.zIndex = 5;
    } else {
      button.current.innerHTML = "Menu";
      menu.current.style.display = "none";
    }
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

      <a className={styles.home} href="/">
        <i className="fa-sharp fa-solid fa-house"></i>
      </a>

      <motion.div
        ref={menu}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 1 }}
        className={`${isOpen ? `${styles.menuContainer}` : `${styles.hide}`}`}
      >
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
