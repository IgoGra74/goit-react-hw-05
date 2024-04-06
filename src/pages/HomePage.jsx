import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import API_REQUEST_TEMPLATE from "../movies-api";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await axios.get(`trending/movie/day`, {
          ...API_REQUEST_TEMPLATE,
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
