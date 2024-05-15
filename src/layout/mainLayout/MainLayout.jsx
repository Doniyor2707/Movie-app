import { Outlet } from "react-router-dom";
import Headers from "../../components/Headers/Header";
import styles from "./mainLayout.module.css"

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Headers />

      <Outlet />
    </div>
  );
};

export default MainLayout;
