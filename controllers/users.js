const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex("users").then(results => {
        res.json(results);
      })
      .catch(err => console.log(err));
  },
  show: (req, res) => {
    knex("users")
      .where("id", req.params.id)
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let { user_name, password, email } = req.body;
    console.log(req.body);
    knex("users")
      .insert({
        user_name,
        password,
        email
      }, '*')
      .then(newUser => {
        res.json(newUser);
      })
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    let { user_name, password, email } = req.body;
    knex("users")
      .where("id", req.params.id)
      .update({
        user_name,
        password,
        email
      })
      .then(updatedUser => {
        res.json(updatedUser);
      })
      .catch(err => console.log(err));
  }
};
