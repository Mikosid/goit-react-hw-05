import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies = [] }) {
  const location = useLocation();
  if (movies.length === 0) {
    return <p>No movies available</p>;
  }
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
