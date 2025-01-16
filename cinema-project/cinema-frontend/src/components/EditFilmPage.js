import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './EditFilmPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faBackward } from '@fortawesome/free-solid-svg-icons';

function EditFilmPage() {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/films/${id}`);
        setFilm(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFilm();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/films/${id}`, film);
      alert('Film updated successfully!');
      navigate('/moderator');
    } catch (err) {
      console.error(err);
      alert('Failed to update the film.');
    }
  };

  return (
    <div className="edit-film-container">
      <button className="return-home-button" onClick={() => navigate('/moderator')}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <h1>Edit Film</h1>
      <form onSubmit={handleSubmit} className="edit-film-form">
        {Object.keys(film).map((key) => (
          key !== 'id' && (
            <div key={key} className="form-group">
              <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type="text"
                value={film[key]}
                onChange={(e) => setFilm({ ...film, [key]: e.target.value })}
              />
            </div>
          )
        ))}
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
    </div>
  );
}

export default EditFilmPage;
