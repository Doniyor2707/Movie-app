
import MovieList from "../../components/movieLists/MovieList";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchBox } from "../../components/searchBox/SearchBox";
import { Title } from "../../components/Title/Title";
import styles from "./tvShow.module.css"

const TvShows = () => {
  const apiKey = "f3432f65452d7797259521cb348f7e3f";

  const [palying,setPlaying] = useState([])

  //tabs state
  const [activeMovie, setActiveMovie] = useState("all")
  const[isLoading,setIsLoading] = useState(false)

  //API
  const handleGetMovie = async() => {
    setIsLoading(true)

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`);
      if(res.status === 200 && res.data.results && res.data.results.length) {
        setPlaying(res.data.results)
      }
    }
    catch(err) {
        console.error(err);
    }finally{
      setIsLoading(false)
    }

  }
    //memorize
    useEffect(()=> {
      handleGetMovie(activeMovie);
    },[activeMovie])
  return (
    <div className={styles.tvShows}>
     
    <Title value={"TV Shows"}/>

      <SearchBox/>


      <MovieList data={palying} />
    </div>
  );
};

export default TvShows;
