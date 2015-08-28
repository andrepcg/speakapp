var Express = require("express");
var app = Express();
var path = require("path");
var DB = require("./config/connection");
var Lesson = DB.models.Lesson;

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//
// var env = require("./env");
// var session = require("express-session");
// var passport = require("passport");
// var TwitterStrategy = require("passport-twitter").Strategy;
//
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(session({secret: "banana"}));
//
// passport.use(new TwitterStrategy({
//   consumerKey: env.consumerKey,
//   consumerSecret: env.consumerSecret,
//   callbackUrl: env.callbackUrl
// }, function(aToken, aTokenSecret, aProfile, done){
//   token = aToken;
//   tokenSecret = aTokenSecret;
//   profile = aProfile;
//   done(null, profile);
// }));
//
app.use("/public", Express.static(path.join(__dirname + "/public")));
app.set("view engine", "hbs");

app.get("/", function(req, res) {
  Lesson.findAll().then(function(lessons){
    res.render('index', {lessons:lessons});
  });
  // res.redirect("/auth/twitter");
});
//
// app.get("/auth/twitter", passport.authenticate("twitter"), function(req, res){
// });
//
// app.get("/auth/twitter/callback", passport.authenticate('twitter'), function(req, res){
//  req.session.token = token;
//  req.session.tokenSecret = tokenSecret;
//  req.session.profile = profile;
//  // res.redirect("/lessons");
//  res.render('index', {});
// });
//
// var pg = require('pg');

var lessonsController = require("./controllers/lessons");
app.use("/", lessonsController);

var commentsController = require("./controllers/comments");
app.use("/", commentsController);

var studentsController = require("./controllers/students");
app.use("/", studentsController);

var instructorsController = require("./controllers/instructors");
app.use("/", instructorsController);

app.listen(process.env.PORT || 3001, function() {
  console.log("Listening on port 3001");
});
