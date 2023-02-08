import styles from "./About.module.css";
import Image from "next/image";
import triangle from "../../public/Triangle.svg";

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.about_title}>About</h1>
      <p className={styles.about_text}>
        Hello! I am Nicolas Alonso Froeling, I am from Madrid, Spain and
        currently based in Boston. I am passionate about technology and I am
        always looking for new opportunities to learn and grow.
      </p>
      <p className={styles.about_text}>
        I am fluent in Spanish, English, Dutch and intermediate in German.
      </p>
      <p className={styles.about_text}>
        I love sports! I am an athlete for the Wentworth golf team, I am the
        upcoming captain. I always try to be a leader and show by example.
      </p>
      <p className={styles.about_bulletpoints_text_title}>My skills include:</p>
      <ul className={styles.about_list}>
        <li className={styles.about_bulletpoints_text}>
          <Image src={triangle} alt="" />
          Java
        </li>
        <li className={styles.about_bulletpoints_text}>
          <Image src={triangle} alt="" />
          Typescript
        </li>
        <li className={styles.about_bulletpoints_text}>
          <Image src={triangle} alt="" />
          NextJS
        </li>
        <li className={styles.about_bulletpoints_text}>
          <Image src={triangle} alt="" />
          CSS
        </li>
        <li className={styles.about_bulletpoints_text}>
          <Image src={triangle} alt="" />
          PHP
        </li>
        <li className={styles.about_bulletpoints_text}>
          <Image src={triangle} alt="" />
          Laravel
        </li>
        <li className={styles.about_bulletpoints_text}>
          <Image src={triangle} alt="" />
          Flutter
        </li>
        <li className={styles.about_bulletpoints_text}>
          <Image src={triangle} alt="" />
          Dart
        </li>
        <li className={styles.about_bulletpoints_text}>
          <Image src={triangle} alt="" />
          MySQL
        </li>
        <li className={styles.about_bulletpoints_text}>
          <Image src={triangle} alt="" />
          ThreeJS
        </li>
      </ul>
    </div>
  );
};

export default About;
