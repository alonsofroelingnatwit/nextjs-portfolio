import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <h1 className={styles.introduction_title}>Hello everyone, I am</h1>
      <h1 className={styles.introduction_name}>Nicolas Alonso Froeling</h1>
      <p className={styles.introduction_text}>
        I am a computer science student at Wentworth Institute of Technology. I
        am currently looking for a full-time position as a software engineer.
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      </p>
    </div>
  );
};

export default Introduction;
