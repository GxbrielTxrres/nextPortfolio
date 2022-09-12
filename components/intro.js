import styles from "../styles/intro.module.css";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <motion.h1
        animate={{
          width: ["0%", "100%", "0%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          times: [0, 0.5, 1],
        }}
      >
        <span className={styles.introText}>Gabriel's </span>
        <span className={styles.introAnimation}>Portfolio</span>
      </motion.h1>
    </div>
  );
};

export default Intro;
