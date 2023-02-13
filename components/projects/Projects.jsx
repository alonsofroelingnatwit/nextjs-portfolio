import styles from "./Projects.module.css";
import Image from "next/image";
import etg from "../../public/ETG.svg";
import stfu from "../../public/stfu.svg";
import passwordManager from "../../public/passwordManager.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [isOpenSTFU, setIsOpenSTFU] = useState(false);
  const [isOpenETG, setIsOpenETG] = useState(false);
  const [isOpenPM, setIsOpenPM] = useState(false);

  return (
    <div className={styles.projects}>
      <h1 className={styles.projects_title}>Projects</h1>
      <div className={styles.projects_container}>
        <motion.div
          onClick={() =>
            setIsOpenSTFU(!isOpenSTFU, setIsOpenETG(false), setIsOpenPM(false))
          }
          className={styles.projects_cards}
        >
          <h3 className={styles.projects_cards_title}>
            Software-To-Feel-United
          </h3>
          <Image src={stfu} alt="" className={styles.projects_cards_image} />
          {isOpenSTFU && (
            <motion.p className={styles.projects_cards_text}>
              Developed a group chat web application using PHP and Laravel for
              the backend and React for the frontend. The app allows users to
              create groups and chat with other users in real time.
            </motion.p>
          )}
        </motion.div>
        <motion.div
          onClick={() =>
            setIsOpenETG(!isOpenETG, setIsOpenSTFU(false), setIsOpenPM(false))
          }
          className={styles.projects_cards}
        >
          <h3 className={styles.projects_cards_title}>ETG Mobile App</h3>
          <Image src={etg} alt="" className={styles.projects_cards_image} />
          {isOpenETG && (
            <motion.p className={styles.projects_cards_text}>
              Currently developing a mobile app for an indoor golf facility
              using the framework Flutter. The app will be used to book virtual
              tee times, as well as having a weekly leaderboard and tournaments.
            </motion.p>
          )}
        </motion.div>
        <motion.div
          onClick={() =>
            setIsOpenPM(!isOpenPM, setIsOpenSTFU(false), setIsOpenETG(false))
          }
          className={styles.projects_cards}
        >
          <h3 className={styles.projects_cards_title}>Password Manager</h3>
          <Image
            src={passwordManager}
            alt=""
            className={styles.projects_cards_image}
          />
          {isOpenPM && (
            <motion.p className={styles.projects_cards_text}>
              Developed a password manager using Java and JavaFX. The app allows
              users to store their encrypted passwords in the local storage. The
              app also allows users to generate random strong passwords.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
