import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Intro from "./intro";

const MainMenu = () => {
  return (
    <>
      {/* Beginning Intro */}
      <Intro />
      {/* Main Menu */}
      <main>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 2.5 }}
          className={styles.mainMenuContainer}
        >
          {/* social media links */}
          <div className={styles.socials}>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
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
      </main>
    </>
  );
};

export default MainMenu;
