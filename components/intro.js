import styles from "../styles/intro.module.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";

const Intro = () => {
  const intro = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      intro.current.style.display = "none";
    }, 3000);
  });

  return (
    <div ref={intro} className={styles.introContainer}>
      <motion.p
        animate={{ opacity: [0, 1, 0], y: [0, -100] }}
        transition={{ duration: 3, times: [0, 0.5, 1] }}
        className="text-center text-white"
      >
        (Swipe/Click+Drag Stars)
      </motion.p>
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
