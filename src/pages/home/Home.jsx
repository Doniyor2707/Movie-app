import { MainTabs } from "../../components/mainTabs/MainTabs";
import { SearchBox } from "../../components/searchBox/SearchBox";
import MyTitle from "../../components/ui/myTitle/MyTitle";
import styles from "./home.module.css";

const Home = () => {

  const tabsData = [
    {
      key: 1,
      label: "All",
      to: "/",
    },
    {
      key: 2,
      label: "Movies",
      to: "/",
    },
    {
      key: 3,
      label: "TV Shows",
      to: "/",
    },
  ];

  return (
    <div className="home">
      {/* Title */}
      <MyTitle />

      {/* Serarch box */}
      <SearchBox/>

      {/* Tabs */}
      <MainTabs data = {tabsData}/>
    </div>
  );
};

export default Home;
