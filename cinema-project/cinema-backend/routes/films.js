const express = require('express');
const router = express.Router();
const { Film } = require('../models');

// Ajouter un film
router.post('/', async (req, res) => {
  try {
    const { titre, duree, langue, sous_titres, realisateur, acteurs, age_minimum, banner, trailer } = req.body;
    const film = await Film.create({ titre, duree, langue, sous_titres, realisateur, acteurs, age_minimum, banner, trailer });
    res.status(201).json(film);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Lister les films
router.get('/', async (req, res) => {
  try {
    const films = await Film.findAll();
    res.status(200).json(films);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lister film avec ID
router.get('/:id', async (req, res) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (!film) {
      return res.status(404).json({ error: 'Film not found' });
    }
    res.json(film);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Modifier un film avec ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFilm = await Film.update(req.body, { where: { id } });
    if (!updatedFilm[0]) {
      return res.status(404).json({ error: 'Film not found' });
    }
    res.json({ message: 'Film updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;