
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved').del()
    .then(function () {
      // Inserts seed entries
      return knex('saved').insert([
        {id: 1, saved_recipe_url: 'https://food52.com/recipes/14023-tomato-and-beef-roll', user_id: 1},
        {id: 2, saved_recipe_url: 'http://www.eatingwell.com/recipe/250739/vegetarian-thai-red-curry', user_id: 1},
        {id: 3, saved_recipe_url: 'http://www.seriouseats.com/recipes/2012/10/pork-and-chives-dumpling-filling.html', user_id: 2}
      ]);
    });
};
