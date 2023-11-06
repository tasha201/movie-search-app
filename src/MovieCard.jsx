import React from "react";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <h3 className="card--title">{movie.title}</h3>
      <div className="card--block">
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />

        <div className="card--content">
          <p className="card-text">
            <span>RELEASE DATE:</span>
            {movie.release_date}
          </p>

          <p className="card-text">
            <span>RATING:</span>
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
      <p className="card--desc">{movie.overview}</p>
    </div>
  );
}
