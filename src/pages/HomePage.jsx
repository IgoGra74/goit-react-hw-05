import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
// import { Outlet } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/movie/day",
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTJjOTRmNWZhNWVmNTMxY2M5ZGZhYTBhOTYwZmYxNyIsInN1YiI6IjY2MDkyNzNhZDRmZTA0MDE3YzJhMzc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SEkEt_-LzYjq6JSyF--2DSj0F8tnxODl0Pfw1-3Qfls",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          const trendingMovies = response.data.results;
          console.log(trendingMovies);
          setMovies(trendingMovies);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {movies !== null && <MovieList movies={movies} />}
      {/* <Outlet /> */}
    </div>
  );
};

export default HomePage;
