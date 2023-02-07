import styles from "./Projects.module.css";
import Image from "next/image";
import etg from "../../public/ETG.svg";
import stfu from "../../public/stfu.svg";
import passwordManager from "../../public/passwordManager.svg";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.projects_title}>Projects</h1>
      <div className={styles.projects_container}>
        <div className={styles.projects_cards}>
          <h3 className={styles.projects_cards_title}>
            Software-To-Feel-United
          </h3>
          <Image src={stfu} alt="" className={styles.projects_cards_image} />
          <p className={styles.projects_cards_text}>
            Developed a group chat web application using PHP and Laravel for the
            backend and React for the frontend. The app allows users to create
            groups and chat with other users in real time.
          </p>
        </div>
        <div className={styles.projects_cards}>
          <h3 className={styles.projects_cards_title}>ETG Mobile App</h3>
          <Image src={etg} alt="" className={styles.projects_cards_image} />
          <p className={styles.projects_cards_text}>
            Currentrly developing a mobile app for an indoor golf facility using
            the framework Flutter. The app will be used to book virtual tee
            times, as well as having a weekly leaderboard and tournaments.
          </p>
        </div>
        <div className={styles.projects_cards}>
          <h3 className={styles.projects_cards_title}>Password Manager</h3>
          <Image
            src={passwordManager}
            alt=""
            className={styles.projects_cards_image}
          />
          <p className={styles.projects_cards_text}>
            Developed a password manager using Java and JavaFX. The app allows
            users to store their encrypted passwords in the local storage. The
            app also allows users to generate random strong passwords.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
