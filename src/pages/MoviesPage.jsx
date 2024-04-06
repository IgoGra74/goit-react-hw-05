import axios from "axios";
import { useEffect, useState } from "react";
import API_REQUEST_TEMPLATE from "../movies-api";
import SearchMovie from "../components/SearchMovie/SearchMovie";
import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get("/search/movie", {
          ...API_REQUEST_TEMPLATE,
          params: {
            ...API_REQUEST_TEMPLATE.params,
            query: topic,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    if (topic) {
      fetchMovies();
    }
  }, [topic]);

  const onSearchMovie = (searchMovie) => {
    setTopic(searchMovie);
  };

  return (
    <div>
      <SearchMovie onSearchMovie={onSearchMovie} />
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
