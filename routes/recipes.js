const express = require('express');
const Recipes = require('../recipes/recipes-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  if (!req.body.name) {
    res.status(406).json({ message: 'Please enter a name for the recipe' });
    return;
  } else if (!req.body.dish_id) {
    res
      .status(406)
      .json({ message: 'Please include a dish ID for the recipe' });
    return;
  }
  try {
    const recipe = await Recipes.addRecipe(req.body);
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
