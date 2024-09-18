import axios from "axios";

export const getMoviesById = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDdjNWUwYjFmMzkzY2FhZWQ4YTE4YjU5ODcwYWY1MSIsIm5iZiI6MTcyNjA1Nzk4OS4yMzk1NDYsInN1YiI6IjY2ZGRkMWJmYjcwY2M3ZjZmZDc4ODBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suMA3YJ9q_8EI4vbYkGeLDiQ98MBpwmfQR7Ui64oqnI",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movies", error);
    return null;
  }
};

export const getMovieCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDdjNWUwYjFmMzkzY2FhZWQ4YTE4YjU5ODcwYWY1MSIsIm5iZiI6MTcyNjA1Nzk4OS4yMzk1NDYsInN1YiI6IjY2ZGRkMWJmYjcwY2M3ZjZmZDc4ODBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suMA3YJ9q_8EI4vbYkGeLDiQ98MBpwmfQR7Ui64oqnI",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log("Failed", error);
    return { cast: [] };
  }
};

export const getMovieReviews = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1&per_page=3`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDdjNWUwYjFmMzkzY2FhZWQ4YTE4YjU5ODcwYWY1MSIsIm5iZiI6MTcyNjA1Nzk4OS4yMzk1NDYsInN1YiI6IjY2ZGRkMWJmYjcwY2M3ZjZmZDc4ODBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suMA3YJ9q_8EI4vbYkGeLDiQ98MBpwmfQR7Ui64oqnI",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error("Failed", error);
    return [];
  }
};

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDdjNWUwYjFmMzkzY2FhZWQ4YTE4YjU5ODcwYWY1MSIsIm5iZiI6MTcyNjA1Nzk4OS4yMzk1NDYsInN1YiI6IjY2ZGRkMWJmYjcwY2M3ZjZmZDc4ODBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suMA3YJ9q_8EI4vbYkGeLDiQ98MBpwmfQR7Ui64oqnI";

export const getMovies = async (query) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_TOKEN,
    },
  };

  try {
    const response = await axios.get(
      `${API_URL}?include_adult=false&language=en-US&page=1&query=${query}`,
      options
    );
    return response.data.results;
  } catch (err) {
    console.error("Error fetching movies:", err);
    return [];
  }
};
