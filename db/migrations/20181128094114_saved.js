exports.up = function(knex, Promise) {
  return knex.schema.createTable('saved', (table) => {
    table.increments();
    table.string('saved_recipe_url');
    table.string('saved_recipe_name');
    table.integer('time');
    table.integer('user_id')
     .notNullable()
     .references('id')
     .inTable('users')
     .onDelete('CASCADE')
     .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('saved')
};
