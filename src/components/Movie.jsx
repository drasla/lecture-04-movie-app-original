import PropTypes from "prop-types";
import { Link } from "react-router";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, actor }) {
    return (
        <div className={styles.movie}>
            <img
                className={styles.movie__img}
                src={coverImg}
                alt={title}
                style={{ height: "200px" }}
            />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h5 className={styles.movie__year}>{year}</h5>
                <p>{actor}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
};

export default Movie;
