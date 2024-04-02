import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;

// adult: false;
// backdrop_path: "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg";
// genre_ids: (3)[(28, 878, 12)];
// id: 823464;
// media_type: "movie";
// original_language: "en";
// original_title: "Godzilla x Kong: The New Empire";
// overview: "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.";
// popularity: 5072.084;
// poster_path: "/iG5sbWWK1JEPAxdt3ItsCMGGV4p.jpg";
// release_date: "2024-03-27";
// title: "Godzilla x Kong: The New Empire";
// video: false;
// vote_average: 6.836;
// vote_count: 271;
{
  /* <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          /> */
}
