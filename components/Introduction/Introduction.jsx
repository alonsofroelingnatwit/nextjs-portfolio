import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <h1 className={styles.introduction_title}>Hello everyone, I am</h1>
      <h1 className={styles.introduction_name}>Nicolas Alonso Froeling</h1>
      <p className={styles.introduction_text}>
        I'm a web developer with a passion for creating beautiful and functional
        websites.
      </p>
    </div>
  );
};

export default Introduction;
