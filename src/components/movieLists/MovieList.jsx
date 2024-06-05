import styles from "./MovieList.module.css";
import MovieListItem from "../movieListItem/MovieListItem";

const getImageEndPoint = 'https://image.tmdb.org/t/p/w500'

export default function MovieList({ data = [] }) {

  const getImage = (image)=> {
    return `${getImageEndPoint}${image}`;
  }

  return (
    <>
    <h1>
      Hello World
    </h1>
      <h2 className={styles.moiveTitle}>
        All <small>({data.length})</small>
      </h2>

      <div className={styles.movieList}>
        {data.map((item) => (
          <MovieListItem
            key={item.id}
            title={item.title}
            star={item.vote_average}
            imageUrl={getImage(item.poster_path)}
          />
        ))}
      </div>
    </>
  );
}
