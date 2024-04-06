import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_REQUEST_TEMPLATE from "../../movies-api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieReviews() {
      try {
        const response = await axios.get(`movie/${movieId}/reviews`, {
          ...API_REQUEST_TEMPLATE,
        });
        setMovieReviews(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.reviews}>
        {movieReviews.length > 0 ? (
          movieReviews.map((movieReview) => (
            <li key={movieReview.id} className={css.review}>
              <p className={css.author}>Author: {movieReview.author}</p>
              <p className={css.content}>{movieReview.content}</p>
            </li>
          ))
        ) : (
          <p>We don&apos;t have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
