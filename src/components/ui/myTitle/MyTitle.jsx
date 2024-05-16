import styles from "./MyTitle.module.css";

const MyTitle = () => {
  return (
    <div className={styles.myTitle}>
      <h3 className={styles.titleItem}>MaileHereko</h3>

      <p className={styles.titleParagrf}>
        List of movies and TV Shows, I, <span>Pramod Poudel</span> have watched till date.
        Explore what I have watched and also feel free to make a suggestion. 😉
      </p>
    </div>
  );
};

export default MyTitle;
