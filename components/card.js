import styles from "../styles/Card.module.css";
import Image from "next/future/image";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <h2>About Me</h2>
      <div className={styles.imageContainer}>
        <Image
          src="/static/f.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className={styles.image}
        />
      </div>
      <p>
        I am a full stack developer with one year of engaged, routine self
        taught learning. I've always had a knack for programming, my firt hands
        on experience was at 12 years old coding .cfg menu's for Call Of Duty
        MW2.
      </p>
    </div>
  );
};

export default Card;
