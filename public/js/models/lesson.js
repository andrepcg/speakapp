var Lesson = function(info){
  var self = this;
  this.topic = info.topic;
  this.date = info.date;
  this.time = info.time;
  this.id = info.id;
  //this.instructor
};

Lesson.fetch = function() {
  var request = $.getJSON('http://localhost:3001/lessons')
  .then(function(response) {
    var lessons = [];
    for(var i = 0; i < response.length; i++){
      lessons.push(new Lesson(response[i]));
    }
    return lessons;
  })
  .fail(function(response){
    console.log("js failed to load");
  });
  return request;
};

Lesson.prototype.fetchComments = function(){
  var url = "http://localhost:3001/lessons/" + this.id + "/comments";
  var request = $.getJSON(url)
  .then(function(response){
    var comments = [];
    for(var i = 0; i < response.length; i++){
      // TODO: should this be this.songs?
      comments.push(new Comment(response[i]));
    }
    return comments;
    })
  .fail(function(repsonse){
    console.log("js failed to load");
  });
  return request;
};
