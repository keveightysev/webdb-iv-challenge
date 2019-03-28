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

module.exports = router;
