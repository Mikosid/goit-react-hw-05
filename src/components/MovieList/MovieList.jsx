import { Link, useLocation } from "react-router-dom";

export default function MovieList({ home = [] }) {
  const location = useLocation();
  if (home.length === 0) {
    return <p>No movies available</p>;
  }
  return (
    <div>
      <ul>
        {home.map((movie) => (
          <li key={movie.id}>
            <Link to={`/home/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
