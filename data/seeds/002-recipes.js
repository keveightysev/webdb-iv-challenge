exports.seed = knex => {
  return knex('recipes').insert([
    { name: 'Omelette', dish_id: 1 },
    { name: 'Bowl of Cereal', dish_id: 1 },
    { name: 'Ham Sammy', dish_id: 2 },
    { name: 'Salad', dish_id: 2 },
    { name: 'Steak and Taters', dish_id: 3 },
    { name: 'Lasagna', dish_id: 3 },
  ]);
};
