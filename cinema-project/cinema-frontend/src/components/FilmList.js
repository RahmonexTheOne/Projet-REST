import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FilmList() {
  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFilms = async () => {
      const response = await axios.get('http://localhost:5000/films');
      setFilms(response.data);
    };
    fetchFilms();
  }, []);

  const filteredFilms = films.filter(film =>
    film.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="film-list">
      <input
        type="text"
        placeholder="Search movies..."
        className="form-control my-3"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredFilms.map((film) => (
        <div key={film.id} className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{film.titre}</h5>
            <p className="card-text">Duration: {film.duree} minutes</p>
            <Link to={`/movie/${film.id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}


export default FilmList;