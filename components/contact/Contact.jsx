import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contact_title}>Contact</h1>
      <p className={styles.contact_text}>
        If you have any questions or would like to work together, please feel
        free to contact me!
      </p>
      <div className={styles.contact_form}>
        <form>
          <div className={styles.contact_form_group}>
            <input
              type="text"
              id="name"
              className={styles.contact_form_group_input}
              placeholder="Name"
            />
            <hr className={styles.contact_form_line} />
            <input
              type="email"
              id="email"
              className={styles.contact_form_group_input}
              placeholder="Email"
            />
            <hr className={styles.contact_form_line} />
            <textarea
              id="message"
              rows="5"
              className={styles.contact_form_group_textarea}
              placeholder="Message"
            />
            <button type="submit" className={styles.contact_form_group_button}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
