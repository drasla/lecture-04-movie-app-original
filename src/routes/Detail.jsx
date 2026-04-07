import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getMovie = () => {
            fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`)
                .then(res => res.json())
                .then(json => {
                    setMovie(json.short);
                    setLoading(false);
                });
        };

        getMovie();
    }, [id]);

    return (
        <div>
            {loading ? (
                <div>
                    <p>
                        <b>Loading...</b>
                    </p>
                </div>
            ) : (
                <div>
                    <h1>{movie.name}</h1>
                    <strong>
                        <span>
                            Genre:{" "}
                            {movie.genre.map((genre, index) => (
                                <span key={index}>
                                    {index < movie.genre.length - 1 ? `${genre}` : `${genre}`}
                                </span>
                            ))}
                        </span>
                        <p>평점 : {movie.review?.reviewRating?.ratingValue}</p>
                    </strong>
                    <p>{movie.description}</p>
                    <img src={movie.image} alt={movie.name} style={{ height: "400px" }} />
                </div>
            )}
        </div>
    );
}

export default Detail;
