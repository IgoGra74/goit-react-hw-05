import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                <p className={css.title}>{movie.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
