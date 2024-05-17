import styles from "./MovieList.module.css";
import MovieListItem from "../movieListItem/MovieListItem";

export default function MovieList({ data }) {
  return (
    <>
      <h2 className={styles.moiveTitle}>
        All <small>({data.length})</small>
      </h2>

      <div className={styles.movieList}>
        {data.map(({id,title,star,imageUrl}) => (
          <MovieListItem
            key={id}
            title={title}
            star={star}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </>
  );
}
