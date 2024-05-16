import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ data = [] }) => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="logo.svg" alt="Logo" />
      </Link>

      <ul className={styles.headerList}>
      {data.map((item)=> (
        <li key={item.key} className={styles.headerListItem}>
          <Link to={item.to}>{item.title}</Link>
        </li>
      ))}
      
      </ul>
    </div>
  );
};

export default Header;
