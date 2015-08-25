var Express = require("express");
var app = Express();

var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///speakapp_db");

sequelize.sync({force: true});

app.get("/", function(req, res) {
  res.send("You're on the homepage!")
})

app.listen(3000, function() {
  console.log("Listening on port 3000");
})
