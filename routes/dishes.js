const express = require('express');
const Dishes = require('../recipes/dishes-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.getDishes();
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  if (!req.body.name) {
    res.status(406).json({ message: 'Please enter a name for the dish' });
    return;
  }
  try {
    const dish = await Dishes.addDish(req.body);
    res.status(201).json(dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
