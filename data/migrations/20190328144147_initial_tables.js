exports.up = function(knex) {
  return knex.schema
    .createTable('dishes', table => {
      table.increments();
      table.string('name', 128).notNullable();
    })

    .createTable('recipes', table => {
      table.increments();
      table.string('name').notNullable();
      table
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })

    .createTable('ingredients', table => {
      table.increments();
      table
        .string('name')
        .notNullable()
        .unique();
    })

    .createTable('recipes_ingredients', table => {
      table.increments();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredents')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes');
};
