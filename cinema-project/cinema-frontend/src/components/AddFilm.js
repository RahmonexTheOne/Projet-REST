import React, { useState } from 'react';
import axios from 'axios';

function AddFilm() {
  const [film, setFilm] = useState({
    titre: '', duree: '', langue: '', realisateur: '', banner: '', trailer: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/films', film);
      alert('Film added successfully!');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Titre" onChange={(e) => setFilm({ ...film, titre: e.target.value })} />
      <input placeholder="Durée (minutes)" onChange={(e) => setFilm({ ...film, duree: e.target.value })} />
      <input placeholder="Langue" onChange={(e) => setFilm({ ...film, langue: e.target.value })} />
      <input placeholder="Réalisateur" onChange={(e) => setFilm({ ...film, realisateur: e.target.value })} />
      <input placeholder="Banner URL" onChange={(e) => setFilm({ ...film, banner: e.target.value })} />
      <input placeholder="Trailer URL" onChange={(e) => setFilm({ ...film, trailer: e.target.value })} />
      <button type="submit">Ajouter le film</button>
    </form>
  );
}

export default AddFilm;
