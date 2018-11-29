const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

require('./config/sessions')(app);

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
