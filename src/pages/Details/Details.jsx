import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailsBanner from "./components/DetailsBanner";
import { useParams } from "react-router-dom";

const apiKey = "f3432f65452d7797259521cb348f7e3f";

const Details = () => {
  const [detailsData, setDetailsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const parms = useParams();

  const handleGetMovie = async (movieId) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      if (res.status === 200) {
        setDetailsData(res.data);
        console.log(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  //memorize
  useEffect(() => {
    handleGetMovie(parms.movieId);
  }, [parms.movieId]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : !detailsData ? (
    <>Not Found</>
  ) : (
    <div>
      <DetailsBanner
        title={detailsData.title}
        overview = {detailsData.overview}
        vote_average = {detailsData.vote_average}
        poster_path = {`https://image.tmdb.org/t/p/original${detailsData.poster_path}`}
        release_date = {detailsData.release_date}
        runtime = {detailsData.runtime}
        tagline = {detailsData.tagline}
        genres = {detailsData.genres}
        img={`https://image.tmdb.org/t/p/original${detailsData.backdrop_path}`}
      />
    </div>
  );
};

export default Details;