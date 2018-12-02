const users = require("../controllers/users.js");
const saved = require("../controllers/saved.js");
const comments = require("../controllers/comments.js");

module.exports = function(app) {
  // USERS
  app.get('/api/user/:id', users.index)//complete
  app.post("/api/register", users.create);//complete
  // app.post("/api/users/:id", users.update);
  // app.post("/api/users/delete/:id", users.delete);

  // app.use(authMiddleware);

  //SAVED
  //query params req.query.
  app.get('/api/savedRecipes/:id', saved.show);//complete
  app.post('/api/addSavedRecipe/:id', saved.create);//complete
  app.post('/api/removeSavedRecipe/:id', saved.delete);//complete

  //COMMENTS
  app.get('/api/comments/:id', comments.show);//complete
  app.post('/api/comments/newComment/:id', comments.create);//complete
  app.patch('/api/comments/update/:id', comments.update);//complete
  app.post('/api/comments/delete/:id', comments.delete);//complete

};

const authMiddleware = (req, res, next) => {
  if(!req.session.user_id){
    res.redirect('/');
  }else{
    next();
  }
}
