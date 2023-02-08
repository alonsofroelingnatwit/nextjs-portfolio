import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contact_title}>Contact</h1>
      <p className={styles.contact_text}>
        If you have any questions or would like to work together, please feel
        free to contact me!
      </p>
      <p className={styles.contact_text}>
        Email:
        <a
          href="mailto: nicolas.alonsofroeling@gmail.com"
          className={styles.contact_text_link}
        >
          {" "}
          hello
        </a>
      </p>
    </div>
  );
};

export default Contact;
