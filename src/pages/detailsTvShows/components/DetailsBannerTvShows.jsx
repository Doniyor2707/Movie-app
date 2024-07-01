import styles from "./detailsBannerTvShows.module.css";

const DetailsBannerTvShows = ({
  img,
  title,
  overview,
  vote_average,
  release_date,
  runtime,
  tagline,
  poster_path,
  genres
}) => {
  return (
    <>
      <div className={styles.detailsBanner}>
        {/* Bg */}
        <div className={styles.detailsBannerBg}>
          <img src={img} title={title} />
        </div>

        {/* Body */}
        <div className={styles.detailsBannerBody}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <div className={styles.breadcrumbItem}>Asosiy</div>
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.024 13.48H9.068L13.124 3.58H12.08L8.024 13.48Z"
                fill="#8996A2"
              />
            </svg>

            <div className={styles.breadcrumbItem}>Movies</div>
          </div>

          {/* Title */}
          <h1 className={styles.detailsBannerTitle}>{title}</h1>
        </div>
      </div>

      <div className={styles.detailsMovieInfo}>
        {/* Image */}
        <div className={styles.detailsMovieImage}>
          <img src={poster_path} alt={title} />
        </div>
        <div className={styles.detailsMovieDetail}>
          {/* Title */}
          <div className={styles.detailsMovieTitle}>
            <h1>{tagline}</h1>
            <p>{overview}</p>
          </div>
          {/* Star */}
          <div className={styles.detailsStar}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.15327 2.33999L10.3266 4.68666C10.4866 5.01333 10.9133 5.32666 11.2733 5.38666L13.3999 5.73999C14.7599 5.96666 15.0799 6.95333 14.0999 7.92666L12.4466 9.57999C12.1666 9.85999 12.0133 10.4 12.0999 10.7867L12.5733 12.8333C12.9466 14.4533 12.0866 15.08 10.6533 14.2333L8.65994 13.0533C8.29994 12.84 7.70661 12.84 7.33994 13.0533L5.34661 14.2333C3.91994 15.08 3.05327 14.4467 3.42661 12.8333L3.89994 10.7867C3.98661 10.4 3.83327 9.85999 3.55327 9.57999L1.89994 7.92666C0.926606 6.95333 1.23994 5.96666 2.59994 5.73999L4.72661 5.38666C5.07994 5.32666 5.50661 5.01333 5.66661 4.68666L6.83994 2.33999C7.47994 1.06666 8.51994 1.06666 9.15327 2.33999Z"
                stroke="#FFAD49"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{vote_average}</span>
          </div>
          {/* Details movie Title data */}
          <div className={styles.detailsMovieType}>
            Type
            <div className={styles.detailsMovieData}>Tv Shows</div>
          </div>
          <div className={styles.detailsMovieType}>
            Release Date:
            <div className={styles.detailsMovieData}>{release_date}</div>
          </div>
          <div className={styles.detailsMovieType}>
            Run time
            <div className={styles.detailsMovieData}>{runtime}</div>
          </div>
          <div className={styles.detailsMovieType}>
            Genres
            <div className={styles.detailsMovieData}>{
              genres.map((item)=> (
                <span key={item.id}>
                  {item.name}</span>
              ))
            }</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBannerTvShows;
