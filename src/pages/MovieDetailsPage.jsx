import { useEffect, useState, Suspense, lazy } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../components/MovieReviews/MovieReviews")
);

// import css from "./MovieDetailsPage.module.css";
import API_REQUEST_TEMPLATE from "../movies-api";
import Loader from "../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`movie/${movieId}`, {
          ...API_REQUEST_TEMPLATE,
        });
        setMovieDetails(response.data);
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
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : defaultImg
            }
            width={250}
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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
