import styles from "./pageNotFount.module.css";
import Img from "../../assets/404.svg";

const PageNotFount = () => {
  return (
    <div className={styles.pageNotFound}>
        {/* PageNF Child */}
      <div className={styles.pageChild}>
        {/* Image */}
        <img src={Img} alt="Page Not Found" className={styles.img} />
        {/* Title */}
        <h1 className={styles.title}>Lost your way?</h1>
        <p className={styles.paragrf}>
          Oops! This is awkward. You are looking for something that doesn't
          actually exist.
        </p>
        {/* btn */}
        <button className={styles.btn}>Go Home</button>
      </div>
    </div>
  );
};

export default PageNotFount;
