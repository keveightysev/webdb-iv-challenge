exports.seed = knex => {
  return knex('ingredients').insert([
    { name: 'Eggs' },
    { name: 'Cheese' },
    { name: 'Ham' },
    { name: 'Milk' },
    { name: 'Cereal' },
    { name: 'Bread' },
    { name: 'Mayonnaise' },
    { name: 'Lettuce' },
    { name: 'Tomatoes' },
    { name: 'Ranch Dressing' },
    { name: 'Steak' },
    { name: 'Potatoes' },
    { name: 'Gravy' },
    { name: 'Lasagna Noodles' },
    { name: 'Ground Beef' },
    { name: 'Tomato Sauce' },
  ]);
};
