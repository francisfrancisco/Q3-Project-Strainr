
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comment: 'sweet', recipe_id: 1, user_id: 1},
        {id: 2, comment: 'nice', recipe_id: 2, user_id: 1},
        {id: 3, comment: 'This recipe is only for the filling', recipe_id: 3, user_id: 1},
        {id: 4, comment: 'It makes 10 to 15 dumplings', recipe_id: 3, user_id: 1},
        {id: 5, comment: 'Vinegar and soy sauce make a good sauce', recipe_id: 3, user_id: 1}
      ]);
    });
};
