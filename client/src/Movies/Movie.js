import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Link } from 'react-router-dom';

function Movie({ addToSavedList }) {
  const history = useHistory();
  const [movie, setMovie] = useState(null);
  const params = useParams();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const deleteMovie = (id) => {
    axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        console.log(res)
      })
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="container">
      <div className="row">
      <div className="col-8">
        <MovieCard movie={movie} />
      </div>
      
      <div className="col-4">
        <button className="btn btn-primary mt-5 mr-3" onClick={saveMovie}>
          Save
        </button>
        <Link className="btn btn-primary mt-5 mr-3" to={`/update-movie/${params.id}`}>
          Edit
        </Link>
        <button className="btn btn-primary mt-5" onClick={deleteMovie}>
          Delele
        </button>
      </div>
      
      
    </div>
    </div>
    
  );
}

export default Movie;
