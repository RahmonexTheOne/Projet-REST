import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FilmList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const response = await axios.get('http://localhost:5000/films');
      setFilms(response.data);
    };
    fetchFilms();
  }, []);

  return (
    <div>
      {films.map((film) => (
        <div key={film.id}>
          <h2>{film.titre}</h2>
          <p>Durée : {film.duree} minutes</p>
        </div>
      ))}
    </div>
  );
}

export default FilmList;