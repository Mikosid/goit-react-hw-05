import { useEffect, useState } from "react";
import { getMovieCast } from "../../movies-api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import clsx from "clsx";

import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      const castsData = await getMovieCast(movieId);
      setCasts(castsData.cast);
    };
    fetchMovieCast();
  }, [movieId]);

  if (!casts) {
    return <Loader />;
  }
  if (casts.length === 0) {
    return <div>No casts available</div>;
  }
  return (
    <div>
      <ul className={clsx(css.MovieCastList)}>
        {casts.map((actor) => (
          <li key={actor.id}>
            <img
              alt={actor.name}
              width="150px"
              height="200px"
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            />
            <p>{actor.name}</p>
            <p>
              Character: <span>{actor.character}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
