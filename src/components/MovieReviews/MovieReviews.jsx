import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_REQUEST_TEMPLATE from "../../movies-api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieReviews() {
      // setLoading(true);
      // setError(null);
      try {
        const response = await axios.get(`movie/${movieId}/reviews`, {
          ...API_REQUEST_TEMPLATE,
        });
        setMovieReviews(response.data.results);
      } catch (error) {
        // setError(error.message || "An error occurred while fetching reviews.");
      }
      // setLoading(false);
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {/* {loading && <p>Loading...</p>}
      {error && <p>{error}</p>} */}
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map((movieReview) => (
            <li key={movieReview.id}>
              <p>Author: {movieReview.author}</p>
              <p>{movieReview.content}</p>
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
