import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./Detail.module.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Detail() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`)
                .then(res => res.json())
                .then(json => {
                    setMovie(json);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                });
        }
    }, [id]);

    return (
        <div className={styles.container}>
            <button className={styles.backBtn} onClick={() => navigate(-1)}>
                &larr; 뒤로가기
            </button>
            {loading ? (
                <div className={styles.loading}>
                    <p>
                        <b>Loading...</b>
                    </p>
                </div>
            ) : (
                movie && (
                    <div className={styles.content}>
                        <img
                            className={styles.poster}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className={styles.info}>
                            <h1 className={styles.title}>{movie.title}</h1>
                            <div className={styles.meta}>
                                <span>
                                    <strong>Genre: </strong>
                                    {movie.genres?.map((genre, index) => (
                                        <span key={genre.id}>
                                            {index < movie.genres.length - 1
                                                ? `${genre.name}, `
                                                : genre.name}
                                        </span>
                                    ))}
                                </span>
                                <p>
                                    <strong>평점 : </strong> {movie.vote_average}
                                </p>
                            </div>
                            <p className={styles.overview}>
                                {movie.overview || "등록된 줄거리가 없습니다."}
                            </p>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default Detail;
