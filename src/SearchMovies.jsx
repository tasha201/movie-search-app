import React from "react";
import "./SearchMovies.css";

export default function SearchMovies() {
  return (
    <div className="SearchMovies">
      <form className="form">
        <label htmlFor="query" className="label">Movie name</label>
          <input
            type="text"
            name="query"
            className="input"
            placeholder="Enter a movie name..."
          />
        <button type="submit" className="button">Search</button>
      </form>
    </div>
  );
}
