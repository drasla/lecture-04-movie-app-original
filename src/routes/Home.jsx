import { useEffect, useState } from "react";
import Movie from "../components/Movie.jsx";
import styles from "./Home.module.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)
            .then(res => res.json())
            .then(json => {
                setMovies(json.results);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.home__container}>
            {loading ? (
                <h1 className={styles.home__loading}>Loading Movies...</h1>
            ) : (
                <div className={styles.home__movies}>
                    {movies.map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id.toString()}
                            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            title={movie.title}
                            vote_average={movie.vote_average}
                            overview={movie.overview}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
