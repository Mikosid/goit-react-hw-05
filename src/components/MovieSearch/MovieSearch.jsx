import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

import css from "./MovieSearch.module.css";

export default function MovieSearch() {
  const [params, setParams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    params.set("movieSearch", e.target.elements.movieSearch.value);
    setParams(params);
    e.target.reset();
  };
  return (
    <form className={clsx(css.MovieForm)} onSubmit={handleSubmit}>
      <input
        className={clsx(css.MovieFormInput)}
        type="text"
        name="movieSearch"
      />
      <button className={clsx(css.MovieFormButton)} type="submit">
        Search
      </button>
    </form>
  );
}
