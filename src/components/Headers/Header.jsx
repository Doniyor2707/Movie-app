import { Link } from "react-router-dom";
import Logo from "../../../src/assets/logo.svg"
import styles from "./header.module.css";
import { publicRoutes } from "../../constans/path";

const Header = ({ data  }) => {
  return (
    <div className={styles.header}>
      <Link to={publicRoutes.home}>
        <img src={Logo} alt="Logo" />
      </Link>

      <ul className={styles.headerList}>
      {data.map(({key,title,to})=> (
        <li key={key} className={styles.headerListItem}>
          <Link className={styles.headerListLink} to={to}>{title}</Link>
        </li>
      ))}
      
      </ul>
    </div>
  );
};

export default Header;
