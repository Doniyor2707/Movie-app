import { SearchBox } from "../../components/searchBox/SearchBox";
import MyTitle from "../../components/ui/myTitle/MyTitle";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className="home">
      {/* Title */}
      <MyTitle />

      {/* Serarch box */}
      <SearchBox/>
    </div>
  );
};

export default Home;
