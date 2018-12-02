
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved').del()
    .then(function () {
      // Inserts seed entries
      return knex('saved').insert([
        {id: 1, saved_recipe_url: 'https://food52.com/recipes/14023-tomato-and-beef-roll', saved_recipe_name:'Tomato and Beef Roll', time:10, user_id: 1},
        {id: 2, saved_recipe_url: 'http://www.eatingwell.com/recipe/250739/vegetarian-thai-red-curry', saved_recipe_name:'Vegetarian Thai Red Curry', time:30, user_id: 1},
        {id: 3, saved_recipe_url: 'http://www.seriouseats.com/recipes/2012/10/pork-and-chives-dumpling-filling.html', saved_recipe_name:'Pork and Chive Dumplings', time:20, user_id: 1},
        {id: 4, saved_recipe_url: 'http://www.marthastewart.com/1161700/mark-strausmans-chicken-piccata', saved_recipe_name:'Chicken Piccata', time:61, user_id: 1},
        {id: 5, saved_recipe_url: 'https://www.tastingtable.com/entry_detail/chefs_recipes/3013/A_bold_salad_from_New_Orleanss_favorite_son.htm', saved_recipe_name:'Seafood Maison', time:31, user_id: 1}
      ]);
    });
};
