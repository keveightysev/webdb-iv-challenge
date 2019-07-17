exports.seed = knex => {
  return knex('dishes').insert([
    { name: 'Breakfast' },
    { name: 'Lunch' },
    { name: 'Dinner' },
  ]);
};
