import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    async function fetchMovieReviews() {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTJjOTRmNWZhNWVmNTMxY2M5ZGZhYTBhOTYwZmYxNyIsInN1YiI6IjY2MDkyNzNhZDRmZTA0MDE3YzJhMzc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SEkEt_-LzYjq6JSyF--2DSj0F8tnxODl0Pfw1-3Qfls",
        },
      };

      try {
        const response = await axios.request(options);
        const movieReviews = response.data.results;

        setMovieReviews(movieReviews);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {Array.isArray(movieReviews) &&
          movieReviews.map((movieReview) => (
            <li key={movieReview.id}>
              <p>{movieReview.author}</p>
              <p>{movieReview.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
