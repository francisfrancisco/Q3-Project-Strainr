exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', (table) => {
    table.increments();
    table.integer('users_id')
     .notNullable()
     .references('id')
     .inTable('users')
     .onDelete('CASCADE')
     .index();
     table.integer('liked_recipe_id')
      .notNullable()
      .references('id')
      .inTable('saved')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('likes')
};
