$(document).ready(function(){
  // Lesson.fetch().then(function(lessons){
  //   lessons.forEach(function(lesson){
  //     var view = new LessonView(lesson);
  //     view.render();
  //   });
  // });
  //
  // // $(".issues").append()

  $(".help").on("click", function (event) {
  });

  $(".submit").on("click", function () {
    event.preventDefault();
    var content = $("textarea").val();
    console.log(content);
    $.ajax({
      type: 'POST',
      data: {comment: {request_type: "foo", content: content}},
      dataType: 'json',
      url: "http://localhost:3001/comments"
    }).done(function(response) {
      console.log(response);
      $(".issues").append("<p>Your comment has been logged</p>");
    }).fail(function(response){
      console.log("ajax post request failed");
    });
  });

  $(".home").on("click", function() {
    event.preventDefault();
    alert("clicked");
  });

  $(".lessons").on("click", function(){
    event.preventDefault();
    alert("clicked");
  });

  $(".instructors").on("click", function () {
    event.preventDefault();
    alert("clicked");
  });

  // Lesson.fetch().then(function(lessons){
  //   lessons.forEach(function(lesson){
  //     var view = new LessonView(lesson);
  //     view.render();
  //   });
  // });
});
