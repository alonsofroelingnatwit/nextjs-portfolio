import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header_header}>
      <img className={styles.Header_logo} src="/NA-logo.svg" alt="NA logo" />
      <ul className={styles.header_list}>
        <li className={styles.header_list_item}>Home</li>
        <li className={styles.header_list_item}>About</li>
        <li className={styles.header_list_item}>Contact</li>
        <li className={styles.header_list_item}>Resume</li>
      </ul>
    </header>
  );
};

export default Header;
