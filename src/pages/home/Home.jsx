import { MainTabs } from "../../components/mainTabs/MainTabs";
import { SearchBox } from "../../components/searchBox/SearchBox";
import MyTitle from "../../components/ui/myTitle/MyTitle";
import MovieList from "../../components/movieLists/MovieList";
import { useEffect, useState } from "react";
import axios from "axios";

const tabsData = [
  { key: 1, 
    label: "All",
    value: "all"
  },
  {
    key: 2,
    label: "Movies",
    value: "movie",
  },
  {
    key : 3,
    label: "Tv Shows",
    value: "tv"
  },
];


//Api key
const apiKey = "f3432f65452d7797259521cb348f7e3f";
//const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`

const Home = () => {
  //tabs API
  const [palying,setPlaying] = useState([])

  //tabs state
  const [activeMovie, setActiveMovie] = useState("all")
  const[isLoading,setIsLoading] = useState(false)

  //API
  const handleGetMovie = async(movieType) => {
    setIsLoading(true)

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/${movieType}/week?api_key=${apiKey}`);
      if(res.status === 200 && res.data.results && res.data.results.length) {
        setPlaying(res.data.results)
      }
    }
    catch(err) {
        console.error(err);
    }finally{
      setIsLoading(false)
    }

    // const res = await fetch(nowPlaying);
    // const data = await res.json();

    // setPlaying(data)
  }
    //memorize
    useEffect(()=> {
      handleGetMovie(activeMovie);
    },[activeMovie])
    // tabs value
    const handleTab = (value)=> {
      setActiveMovie(value)
    }

  return (
    <div className="home">
      {/* Title */}
      <MyTitle />

      {/* Serarch box */}
      <SearchBox/>

      {/* Tabs */}
      <MainTabs data={tabsData} setValue={handleTab} activeMovie={activeMovie}/> 
      
      {/* MovieList */}
      <MovieList data={palying} />
    </div>
  );
};

export default Home;
