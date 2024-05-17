import { MainTabs } from "../../components/mainTabs/MainTabs";
import { SearchBox } from "../../components/searchBox/SearchBox";
import MyTitle from "../../components/ui/myTitle/MyTitle";
import data from "../../data/data.json"
import MovieList from "../../components/movieLists/MovieList";

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
      
      {/* Savol nimaga data bu joyda berilgan */}
      {/* MovieList */}
      <MovieList data={data.all} />
    </div>
  );
};

export default Home;
