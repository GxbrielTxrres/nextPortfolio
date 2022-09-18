import styles from "../../styles/Contact.module.css";
import { motion } from "framer-motion";
import Menu from "../../components/menu";
export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <motion.h1
          animate={{
            y: [0, -10],
            opacity: [0, 0.5, 1],
          }}
          transition={{
            duration: 0.5,
            times: [0, 0.5, 1],
          }}
        >
          Contact
        </motion.h1>
        <form
          action="mailto:gtorres@outlook.com"
          method="post"
          encType="text/plain"
        >
          <motion.div
            animate={{
              y: [0, -10],
              opacity: [0.1, 0.5, 1],
            }}
            transition={{
              duration: 0.5,
              times: [0, 0.5, 1],
              delay: 0.5,
            }}
          >
            <label htmlFor="firstName">Name:</label>
            <input type="text" placeholder="First and Last" name="firstName" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10],
              opacity: [0.1, 0.5, 1],
            }}
            transition={{
              duration: 0.5,
              times: [0, 0.5, 1],
              delay: 1,
            }}
          >
            <label htmlFor="Email">Email:</label>
            <input type="email" placeholder="name@example.com" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -10],
              opacity: [0.1, 0.5, 1],
            }}
            transition={{
              duration: 0.5,
              times: [0, 0.5, 1],
              delay: 1.5,
            }}
          >
            <label htmlFor="message">Message:</label>
            <textarea
              cols="40"
              rows="10"
              name="message"
              placeholder="Leave a message..."
            />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -10],
              opacity: [0.1, 0.5, 1],
            }}
            transition={{
              duration: 0.5,
              times: [0, 0.5, 1],
              delay: 2,
            }}
          >
            <button type="submit" value="">
              Submit
            </button>
          </motion.div>
        </form>
      </div>
      <Menu />
    </>
  );
}
