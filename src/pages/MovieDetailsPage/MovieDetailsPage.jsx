import {
  Outlet,
  Link,
  NavLink,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMoviesById } from "../../movies-api";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader/Loader";

import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

export default function MovieDetailsPage() {
  const location = useLocation();

  const backLink = useRef(location.state?.from ?? "/movies");

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieById() {
      const data = await getMoviesById(movieId);
      setMovie(data);
    }
    fetchMovieById();
  }, [movieId]);
  if (!movie) {
    return <Loader />;
  }
  const userScore = Math.round(movie.vote_average * 10);
  return (
    <div>
      <Link to={backLink.current}>Back</Link>
      <img
        className={clsx(css.MovieDetailsImage)}
        alt={movie.title}
        width="250px"
        height="375px"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
      <p>{movie.title}</p>
      <p>
        Users score: <span>{userScore}</span>%
      </p>
      <p className={clsx(css.MovieDetailsOverview)}>
        Overview: <span> {movie.overview}</span>
      </p>
      <p>
        Genres:{" "}
        <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
      </p>
      <p>Additional information:</p>

      <ul className={clsx(css.MovieDetailsList)}>
        <li className={clsx(css.MovieDetailsCast)}>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li className={clsx(css.MovieDetailsReviews)}>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE!!!</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
