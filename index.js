var Express = require("express");
var app = Express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", Express.static(path.join(__dirname + "/public")));

var lessonsController = require("./controllers/lessons");
app.use("/", lessonsController);

var commentsController = require("./controllers/comments");
app.use("/", commentsController);

var studentsController = require("./controllers/students");
app.use("/", studentsController);

var instructorsController = require("./controllers/instructors");
app.use("/", instructorsController);

function error(response, message){
  response.status(500);
  response.json({error: message})
};

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
