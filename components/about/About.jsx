import styles from "./About.module.css";

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
        I am fluent in Spanish, English, Dutch and I speak basic German.
      </p>
      <p className={styles.about_text}>
        I love sports! I am an athlete for the Wentworth golf team, I am the
        upcoming captain. I always try to be a leader and show by example.
      </p>
      {/* <p className={styles.about_text}>
        <li className={styles.about_bulletpoints}></li>
      </p> */}
    </div>
  );
};

export default About;
