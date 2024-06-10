import styles from "./MovieList.module.css";
import MovieListItem from "../movieListItem/MovieListItem";

const getImageEndPoint = 'https://image.tmdb.org/t/p/w500'

export default function MovieList({ data = [],isLoading = false }) {

  const getImage = (image)=> {
    return `${getImageEndPoint}${image}`;
  }

  return isLoading? (
  <>
    Loading...
  </>) :(
    <>
      <h2 className={styles.moiveTitle}>
        All <small>({data.length})</small>
      </h2>

      <div className={styles.movieList}>
        {data.map((item) => (
          <MovieListItem
            key={item.id}
            handleId={item.id}
            title={item.title || item.name}
            star={item.vote_average}
            imageUrl={getImage(item.poster_path)}
            to={`/details/${item.id}`}
          />
        ))}
      </div>
    </>
  );
}
