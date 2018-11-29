const knex = require("../db/knex.js");

module.exports = {
  create: (req,res) => {
    knex('comments').where('recipe_id', req.params.id).insert({
        comment: req.body.comment,
        recipe_id: req.params.id
      }, '*').then(newComment => {
        res.json(newComment)
      })
      .catch(err => console.log(err))
  },
  show: (req,res) => {
    knex('comments').where('recipe_id', req.params.id).then(result => {
        res.json(result)
      })
      .catch(err => console.log(err))
  },
  update: (req,res) => {
    knex('comments').where('id', req.params.id).update({
        comment: req.body.comment
      }).then(() => {
        res.sendStatus(200)
      })
      .catch(err => console.log(err))
  },
  delete: (req,res) => {
    knex('comments').where('id', req.params.id)
    .del()
    .then(() => {
        res.sendStatus(200)
      })
      .catch(err => console.log(err))
  }
};
