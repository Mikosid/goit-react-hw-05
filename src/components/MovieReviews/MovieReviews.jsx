import { useEffect, useState } from "react";
import { getMovieReviews } from "../../movies-api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

import clsx from "clsx";

import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (reviews === null) {
    return <Loader />;
  }

  if (reviews.length === 0) {
    return <div>No reviews available</div>;
  }

  return (
    <div>
      <ul className={clsx(css.MovieReviewsList)}>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              Author:{" "}
              <span className={clsx(css.MovieReviewsAuthor)}>
                {review.author}
              </span>
            </p>
            <p className={clsx(css.MovieReviewsContent)}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
