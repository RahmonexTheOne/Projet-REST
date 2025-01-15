import React, { useState } from 'react';
import axios from 'axios';

function AddFilm() {
  const [film, setFilm] = useState({ titre: '', duree: '', langue: '', realisateur: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/films', film);
      alert('Film ajouté avec succès !');
    } catch (err) {
      alert('Erreur : ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Titre" onChange={(e) => setFilm({ ...film, titre: e.target.value })} />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddFilm;