import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col movie-list">
          {
            movies.map(movie => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default MovieList;
