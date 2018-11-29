
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'shonuff', email: 'frank@test.com', password: 'frank'},
        {id: 2, user_name: 'letsGoKnicks', email: 'knicks@test.com', password: 'knicks'}
      ]);
    });
};
