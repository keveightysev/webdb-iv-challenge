const db = require('../data/dbConfig.js');

module.exports = { getRecipes, addRecipe };

function getRecipes() {
  return db('recipes')
    .join('dishes', 'dishes.id', 'recipes.dish_id')
    .select('recipes.id', 'recipes.name', 'dishes.name as dish');
}

function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}
