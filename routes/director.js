const express = require('express');
const router = express.Router();
const Director = require('../models/directors');

// POST a new director
router.post('/', async (req, res) => {
  try {
    const director = new Director(req.body);
    await director.save();
    res.status(201).send(director);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET all directors
router.get('/', async (req, res) => {
  try {
    const directors = await Director.find();
    res.status(200).send(directors);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET a specific director by ID
router.get('/:id', async (req, res) => {
  try {
    const director = await Director.findById(req.params.id).populate('movies');
    if (!director) {
      return res.status(404).send();
    }
    res.status(200).send(director);
  } catch (err) {
    res.status(500).send(err);
  }
});

// UPDATE a director by ID
router.put('/:id', async (req, res) => {
  try {
    const director = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!director) {
      return res.status(404).send();
    }
    res.status(200).send(director);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a director by ID
router.delete('/:id', async (req, res) => {
  try {
    const director = await Director.findByIdAndDelete(req.params.id);
    if (!director) {
      return res.status(404).send();
    }
    res.status(200).send(director);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
