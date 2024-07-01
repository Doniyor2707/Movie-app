import { Outlet } from "react-router-dom";
import Headers from "../../components/Headers/Header"
import styles from "./mainLayout.module.css"
import { publicRoutes } from "../../constans/path";

const MainLayout = () => {
  const headerItems = [
    {
      key: 1,
      title: "Movies",
      to: publicRoutes.movies,
    },
    {
      key: 2,
      title: "TV Shows",
      to: publicRoutes.tvShows,
    },
    {
      key: 3,
      title: (
        <>
          Suggest me &nbsp;
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.62 3.95331L13.6667 7.99997L9.62 12.0466"
              stroke="#A8AEBF"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.33337 8H13.5534"
              stroke="#A8AEBF"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
      to: publicRoutes.suggestMe,
    },
  ];

  return (
    <div className={styles.container}>
      <Headers data = {headerItems}/>

      <Outlet />
    </div>
  );
};

export default MainLayout;
