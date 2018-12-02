const knex = require("../db/knex.js");

module.exports = {
  create: (req,res) => {
    knex('saved').where('user_id', req.params.id).insert({
        saved_recipe_url: req.body.saved_recipe_url,
        saved_recipe_name: req.body.saved_recipe_name,
        time: req.body.time,
        user_id: req.params.id
      }, '*').then(newSaved => {
        res.json(newSaved)
      })
      .catch(err => console.log(err))
  },
  show: (req,res) => {
    knex('saved').where('user_id', req.params.id).then(result => {
        res.json(result)
      })
      .catch(err => console.log(err))
  },
  delete: (req,res) => {
    knex('saved').where('id', req.params.id)
    .del()
    .then(() => {
        res.sendStatus(200)
      })
      .catch(err => console.log(err))
  }
};
