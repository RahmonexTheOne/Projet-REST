import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ModeratorPage.css';

function ModeratorPage() {
  const [films, setFilms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/films');
        setFilms(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFilms();
  }, []);

  return (
    <div className="moderator-container">
      <button className="return-home-button" onClick={() => navigate('/')}>
        ⬅️ Return to Home
      </button>
      <h1 className="moderator-title">Moderator Panel</h1>
      <div className="film-list">
        {films.map((film) => (
          <div
            key={film.id}
            className="film-card"
            onClick={() => navigate(`/moderator/edit/${film.id}`)}
          >
            <img src={film.banner} alt={film.titre} className="film-card-image" />
            <h3 className="film-card-title">{film.titre}</h3>
          </div>
        ))}
      </div>
      <button
        className="add-film-button"
        onClick={() => navigate('/moderator/add')}
      >
        Add New Film
      </button>
    </div>
  );
}

export default ModeratorPage;
