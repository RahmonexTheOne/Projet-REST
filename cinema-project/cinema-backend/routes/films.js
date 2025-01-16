const express = require('express');
const router = express.Router();
const { Film } = require('../models');

// Ajouter un film
router.post('/', async (req, res) => {
  try {
    const film = await Film.create(req.body);
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
    const film = await Film.findByPk(req.params.id); // Fetch the film by primary key (ID)
    if (!film) {
      return res.status(404).json({ error: 'Film not found' });
    }
    res.json(film);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;