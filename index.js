var Express = require("express");
var app = Express();
var path = require("path");
var bodyParser = require("body-parser");
var env = require("./env");
var session = require("express-session");
// var passport = require("passport");
// var TwitterStrategy = require("passport-twitter").Strategy;
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(session({secret: "banana"}));

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

app.get("/", function(req, res) {
  res.redirect("/lessons");
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
//  res.redirect("/lessons");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", Express.static(path.join(__dirname + "/public")));

var pg = require('pg');

app.get('/db', function (request, response) {
 pg.connect(process.env.DATABASE_URL, function(err, client, done) {
   client.query('SELECT * FROM test_table', function(err, result) {
     done();
     if (err)
      { console.error(err); response.send("Error " + err); }
     else
      { response.render('pages/db', {results: result.rows} ); }
   });
 });
});

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
