import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import './AddFilmPage.css';

function AddFilmPage() {
  const navigate = useNavigate();
  const [film, setFilm] = useState({
    titre: '',
    duree: '',
    langue: '',
    sous_titres: '',
    realisateur: '',
    acteurs: '',
    age_minimum: '',
    description: '',
    banner: '',
    trailer: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/films', film);
      alert('Film added successfully!');
      navigate('/moderator');
    } catch (err) {
      console.error(err);
      alert('Failed to add the film.');
    }
  };

  return (
    <div className="add-film-container">
      <button className="return-home-button" onClick={() => navigate('/moderator')}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <h1>Add New Film</h1>
      <form onSubmit={handleSubmit} className="add-film-form">
        {Object.keys(film).map((key) => (
          <div key={key} className="form-group">
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type="text"
              value={film[key]}
              onChange={(e) => setFilm({ ...film, [key]: e.target.value })}
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Add Film</button>
      </form>
    </div>
  );
}

export default AddFilmPage;
