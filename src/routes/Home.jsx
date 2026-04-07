import { useEffect, useState } from "react";
import Movie from "../components/Movie.jsx";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = () => {
            fetch(`https://imdb.iamidiotareyoutoo.com/search?q=2025&lsn=1&v=1`)
                .then(res => res.json())
                .then(json => {
                    setMovies(json.description);
                    setLoading(false);
                });
        };

        getMovies();
    }, []);

    return (
        <div className={styles.home__container}>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className={styles.home__movies}>
                    {movies.map(movie => (
                        <Movie
                            key={movie["#IMDB_ID"]}
                            id={movie["#IMDB_ID"]}
                            coverImg={movie["#IMG_POSTER"]}
                            title={movie["#TITLE"]}
                            year={movie["#YEAR"]}
                            actor={movie["#ACTORS"]}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
