import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <h1 className={styles.introduction_title}>Hello everyone, I am</h1>
      <h1 className={styles.introduction_name}>Nicolas Alonso Froeling</h1>
      <p className={styles.introduction_text}>
        I am a computer science student at Wentworth Institute of Technology.
      </p>
      <p className={styles.introduction_under_text}>
        From Madrid, Spain. based in Boston.
      </p>
    </div>
  );
};

export default Introduction;
