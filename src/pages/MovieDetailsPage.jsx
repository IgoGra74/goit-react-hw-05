import { useEffect, useState, useRef, Suspense, lazy } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../components/MovieReviews/MovieReviews")
);

import css from "./MovieDetailsPage.module.css";

import API_REQUEST_TEMPLATE from "../movies-api";
import Loader from "../components/Loader/Loader";

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");
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
      <Link to={backLink.current}>⬅ Go Back</Link>
      {movieDetails !== null && (
        <div className={css.movie}>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : defaultImg
            }
            width={250}
            height={400}
            alt={movieDetails.title}
          />
          <div className={css.info}>
            <h1>{movieDetails.title}</h1>
            <p>Release date: {movieDetails.release_date}</p>
            <p>User Score: {movieDetails.vote_average}</p>
            <p>Popularity: {movieDetails.popularity}</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
          </div>
        </div>
      )}

      <div className={css.additional}>
        <h2 className={css.details}>Additional information</h2>
        <ul className={css.list}>
          <li className={css.link}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.link}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

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
