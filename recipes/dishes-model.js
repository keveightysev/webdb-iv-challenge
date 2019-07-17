const db = require('../data/dbConfig.js');

module.exports = { getDishes, addDish, getDishById };

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes').insert(dish);
}

function getDishById(id) {
  return db('dishes')
    .where({ id })
    .first();
}
