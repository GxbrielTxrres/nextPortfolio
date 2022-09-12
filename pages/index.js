import Head from "next/head";
import Intro from "../components/intro";
import styles from "../styles/Home.module.css";
import Image from "next/future/image";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Head tag  */}
      <Head>
        <title>Gabriel's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Beginning Intro */}
      <Intro />

      {/* Main Menu */}
      <main>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 2.5 }}
          className={styles.menuContainer}
        >
          <Image
            className={styles.image}
            priority={true}
            src="/static/abduction.svg"
            alt="titties"
            height={200}
            width={200}
          />
          <a className={styles.card} href="">
            About
          </a>
          <a className={styles.card} href="">
            Contact
          </a>
          <a className={styles.card} href="">
            Projects
          </a>
          <a className={styles.card} href="">
            Services
          </a>
        </motion.div>
      </main>
    </div>
  );
}
