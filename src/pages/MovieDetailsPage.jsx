import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movieId}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTJjOTRmNWZhNWVmNTMxY2M5ZGZhYTBhOTYwZmYxNyIsInN1YiI6IjY2MDkyNzNhZDRmZTA0MDE3YzJhMzc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SEkEt_-LzYjq6JSyF--2DSj0F8tnxODl0Pfw1-3Qfls",
        },
      };

      try {
        const response = await axios.request(options);
        const movieItemDetails = response.data;
        setMovieDetails(movieItemDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails !== null && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <h2>{movieDetails.title}</h2>
          <p>Vote average: {movieDetails.vote_average}</p>
          <h3>{movieDetails.overview}</h3>
        </div>
      )}
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
