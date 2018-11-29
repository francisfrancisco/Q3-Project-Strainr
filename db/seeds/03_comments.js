
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comment: 'sweet', recipe_id: 1},
        {id: 2, comment: 'nice', recipe_id: 2},
        {id: 3, comment: 'great', recipe_id: 3}
      ]);
    });
};
