import { Link } from "react-router-dom";
import styles from "./MainTabs.module.css";

export const MainTabs = ({ data,setValue,activeMovie}) => {

  const handleClick = (value)=>{
    setValue(value)
  }

  return (
    <div className={styles.mainTabs}>
      <div className={styles.mainTabsItem}>
        {data.map(({label, to, key,value}) => (
          <Link className={[styles.mainTabsItemLink,value===activeMovie?styles.active:''].join(' ')} to={to} key={key} onClick={()=>handleClick(value)}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};
