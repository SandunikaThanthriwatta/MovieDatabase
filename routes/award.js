const express = require('express');
const router = express.Router();
const Award = require('../models/awards');

// POST a new award
router.post('/', async (req, res) => {
  try {
    const award = new Award(req.body);
    await award.save();
    res.status(201).send(award);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET all countries
router.get('/', async (req, res) => {
  try {
    const countries = await Award.find();
    res.status(200).send(countries);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET a specific award by ID
router.get('/:id', async (req, res) => {
  try {
    const award = await Award.findById(req.params.id);
    if (!award) {
      return res.status(404).send();
    }
    res.status(200).send(award);
  } catch (err) {
    res.status(500).send(err);
  }
});

// UPDATE a award by ID
router.put('/:id', async (req, res) => {
  try {
    const award = await Award.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!award) {
      return res.status(404).send();
    }
    res.status(200).send(award);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a award by ID
router.delete('/:id', async (req, res) => {
  try {
    const award = await Award.findByIdAndDelete(req.params.id);
    if (!award) {
      return res.status(404).send();
    }
    res.status(200).send(award);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
