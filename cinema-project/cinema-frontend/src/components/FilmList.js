import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FilmList() {
  const [films, setFilms] = useState([]); // Holds the list of films
  const [searchTerm, setSearchTerm] = useState(''); // For search functionality

  // Fetch films on component mount
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/films');
        setFilms(response.data);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };
    fetchFilms();
  }, []);

  // Filter films based on search term
  const filteredFilms = films.filter((film) =>
    film.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="film-list">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search movies..."
        className="form-control my-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Render filtered films */}
      {filteredFilms.map((film) => (
        <div key={film.id} className="card my-3">
          {/* Display banner image if available */}
          {film.banner && (
            <img
              src={film.banner}
              alt={`${film.titre} banner`}
              className="card-img-top"
              style={{ maxHeight: '200px', objectFit: 'cover' }}
            />
          )}
          <div className="card-body">
            <h5 className="card-title">{film.titre}</h5>
            <p className="card-text">Duration: {film.duree} minutes</p>
            {/* Link to movie details */}
            <Link to={`/movie/${film.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilmList;