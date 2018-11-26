exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.text('comment');
    table.integer('strain_id')
     .notNullable()
     .references('id')
     .inTable('saved')
     .onDelete('CASCADE')
     .index();
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
