import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

import css from "./HomePage.module.css";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [home, setHome] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mjk3YjQ5ZWU1MGZmMjQyYzNhOGExYzExMzg3NGEwMyIsIm5iZiI6MTcyNjM1MDIyNy40NDI5NTMsInN1YiI6IjY2ZTU3ZWRhNjRkYmIzYmUxODJlNDU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BNrsAaUdUNr0qSm3psLigER6IL839NLEvOpYOVaNDQo",
        },
      };

      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(url, options);
        setHome(response.data.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={css.MoviesPageContainer}>
      {loading && <Loader />}
      {error && <p>Something went wrong. Please try again later.</p>}
      {!loading && !error && <MovieList home={home} />}
    </div>
  );
}
