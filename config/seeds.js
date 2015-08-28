 var DB = require("./connection");
// var Student = DB.models.Student
var Lesson = DB.models.Lesson;
var Instructor = DB.models.Instructor;
var Comment = DB.models.Comment;

// var students = [
//   {username:"Arash", password:"alpha"},
//   {username:"Erica", password:"beta"},
//   {username:"Justin", password:"gamma"},
//   {username:"Adrian",  password:"delta"}
// ];

var lessons = [
  {topic:"AJAX", date: new Date(), time:"morning"},
  {topic:"APIs", date: new Date(), time:"afternoon"},
  {topic:"HTML", date: new Date(), time:"morning"},
  {topic:"CSS", date: new Date(), time:"afternoon"},
  {topic:"jQuery", date: new Date(), time:"morning"},
  {topic:"Git", date: new Date(), time:"afternoon"}
];

var instructors = [
  {username:"adam", password:"abcdefgh", name:"Adam Bray", photo_url:"www.google.com"},
  {username:"jesse", password:"abcdefgh", name:"Jesse Shawl", photo_url:"www.google.com"},
  {username:"andy", password:"abcdefgh", name:"Andy Kim", photo_url:"www.google.com"},
  {username:"adrian", password:"abcdefgh", name:"Adrian Maseda", photo_url:"www.google.com"},
  {username:"matt", password:"abcdefgh", name:"Matt Scilipoti", photo_url:"www.google.com"},
  {username:"robin", password:"abcdefgh", name:"Robin Thomas", photo_url:"www.google.com"}
];

var comments = [
  {request_type:"help", content:"Slow down!"},
  {request_type:"help", content:"Gotta pee!"},
  {request_type:"help", content:"Ur killin' it!"},
  {request_type:"comment",  content:"What page are we on?"}
];

Lesson.bulkCreate(lessons).then(function(lessons){
  for (var i=0; i < comments.length; i++) {
    var cmt = comments[i];
    cmt.lessonId = lessons[0].id;
    Comment.create(cmt);
  }

})
.then(function(){
  console.log("Seeded successfully! kthxbye");
  process.exit();
});
