import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function UpdateMovie(props) {

  const params = useParams();
  const history = useHistory();

  const formState = props.movies.filter(movie => movie.id === parseInt(params.id))[0];

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    setFormData(formState);
  }, [formState])

  const editMovie = e => {
    e.preventDefault();

    axios.put('http://localhost:5000/api/movies/' + params.id, formData)
      .then(res => {
        setFormData(null);
        history.push('/');
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = e => {
    e.persist();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  return <>
    <form onSubmit={editMovie}>

      {formData && <>
      <div className="container">
      <div className="row my-3">
        <div className="col-8">
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="director">Director</label>
            <input
              className="form-control"
              type="text"
              name="director"
              value={formData.director}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="metascore">Metascore</label>
            <input
              className="form-control"
              type="text"
              name="metascore"
              value={formData.metascore}
              onChange={handleChange}
            />
          </div>
          
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-4">Update</button>
      </div>  
      </>}  
    </form>
  </>
}