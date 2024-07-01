import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsBannerTvShows from "./components/DetailsBannerTvShows";

const apiKey = "f3432f65452d7797259521cb348f7e3f";

const DetailsTvShows = () => {
  const [detailsData, setDetailsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const parms = useParams();

  const handleGetMovie = async (tvShowId) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${apiKey}`
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
    handleGetMovie(parms.tvShowId);
  }, [parms.tvShowId]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : !detailsData ? (
    <>Not Found</>
  ) : (
    <div>
      <DetailsBannerTvShows
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

export default DetailsTvShows;