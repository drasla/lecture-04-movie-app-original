import PropTypes from "prop-types";
import { Link } from "react-router";
import styles from "./Movie.module.css";

function Movie({ id, poster, title, vote_average, overview }) {
    return (
        <div className={styles.movie}>
            <img className={styles.movie__img} src={poster} alt={title} />
            <div className={styles.movie__content}>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h5 className={styles.movie__year}>{vote_average}</h5>
                <p className={styles.movie__overview}>
                    {overview ? overview : "줄거리 정보가 없습니다."}
                </p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
};

export default Movie;
