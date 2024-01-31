import React from "react";

function MovieDetails(props) {
  const { movie } = props;

  return (
    <div>
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Year of issue: {movie.year}</p>
      <p>Studio: {movie.studio}</p>
    </div>
  );
}

export default MovieDetails;
