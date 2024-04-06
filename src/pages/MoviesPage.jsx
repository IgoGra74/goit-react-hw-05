import axios from "axios";
import { useEffect, useState } from "react";
import API_REQUEST_TEMPLATE from "../movies-api";
import SearchMovie from "../components/SearchMovie/SearchMovie";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    async function fetchMovies() {
      if (!query) return;
      try {
        const response = await axios.get("/search/movie", {
          ...API_REQUEST_TEMPLATE,
          params: {
            ...API_REQUEST_TEMPLATE.params,
            query: query,
          },
        });
        setMovies(response.data.results);
        if (response.data.results.length === 0) {
          toast.error(
            "Sorry, there are no movies matching your search query. Please try again"
          );
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [query]);

  const onSetSearchMovie = (searchMovie) => {
    setSearchParams({ query: searchMovie });
  };

  return (
    <div>
      <SearchMovie onSetSearchMovie={onSetSearchMovie} />
      <ErrorMessage />
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
