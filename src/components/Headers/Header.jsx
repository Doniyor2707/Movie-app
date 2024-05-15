import styles from "../Headers/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="logo.svg" alt="Logo" />
      </Link>

      <ul className={styles.headerList}>
        <li className={styles.headerListItem}>
          <Link to="/">Movies</Link>
        </li>
        <li className={styles.headerListItem}>
          <Link to="/tvshows">TV Shows</Link>
        </li>
        <li className={styles.headerListItem}>
          <Link to="/suggest">
            Suggest me{" "}
            <span>
              <svg
                width="12"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.61987 0.953308L5.66654 4.99997L1.61987 9.04664"
                  stroke="#A8AEBF"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
