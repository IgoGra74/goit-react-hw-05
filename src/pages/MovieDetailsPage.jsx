import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchMovieDetails;
  }, [movieId]);
  return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;
