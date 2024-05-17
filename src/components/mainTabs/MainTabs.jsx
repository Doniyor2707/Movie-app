import { Link } from "react-router-dom";
import styles from "./MainTabs.module.css";

export const MainTabs = ({ data }) => {
  return (
    <div className={styles.mainTabs}>
      <div className={styles.mainTabsItem}>
        {data.map(({label, to, key}) => (
          <Link className={[styles.mainTabsItemLink,key===1?styles.active:''].join(' ')} to={to} key={key}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};
