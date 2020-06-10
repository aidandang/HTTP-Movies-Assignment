import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  const { id, title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card row">
      <div className="col-8">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="col-4 text-right">
        <Link className="btn btn-primary" to={`/update-movie/${id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default MovieCard;
