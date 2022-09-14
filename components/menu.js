import { animate, motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  function openMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <div>
      <button onClick={openMenu} name="menuButton">
        Menu
      </button>

      <div>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 2.5 }}
          className={styles.menuContainer}
        >
          {/* social media links */}
          <div className={styles.socials}>
            <a href="">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin"></i>
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
      </div>
    </div>
  );
};

export default Menu;
