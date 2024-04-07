import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_REQUEST_TEMPLATE from "../../movies-api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const defaultImgCast =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
      try {
        const response = await axios.get(`movie/${movieId}/credits`, {
          ...API_REQUEST_TEMPLATE,
        });
        setMovieCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2 className={css.title}>Cast</h2>
      <ul className={css.cast}>
        {Array.isArray(movieCast) &&
          movieCast.map((cast) => (
            <li key={cast.id} className={css.actor}>
              <img
                className={css.img}
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                    : defaultImgCast
                }
                width="120"
                height="160"
                alt={cast.name}
              />
              <p className={css.name}>{cast.name}</p>
              <p className={css.name}>Character: {cast.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieCast;
