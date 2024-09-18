import { useEffect, useState } from "react";
import { getMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [params] = useSearchParams();
  const movieSearch = params.get("movieSearch") ?? "";

  useEffect(() => {
    async function fetchMovies() {
      const dataOfMovies = await getMovies(movieSearch);
      setMovies(dataOfMovies || []);
    }

    if (movieSearch) {
      fetchMovies();
    }
  }, [movieSearch]);

  return (
    <div className={clsx(css.MoviesPageContainer)}>
      <MovieSearch />
      {movies.length > 0 && <MovieList home={movies} />}
    </div>
  );
}
