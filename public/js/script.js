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
    var lessonId = $(".hidden_lesson_id").val();
    // var studentId = $(".hidden_student_id").val();
    console.log(content);
    console.log(lessonId);
    $.ajax({
      type: 'POST',
      data: {content: content, lessonId: lessonId},
      dataType: 'json',
      url: "http://localhost:3001/comments"
    }).done(function(response) {
      console.log(response);
      $(".issues").append("<p>Your comment has been logged</p>");
    }).fail(function(response){
      console.log("ajax post request failed");
    });
  });

  $("span.help").on("click", function (event) {
    event.preventDefault(event.target.innerHTML);
    var requestType = event.target.innerHTML;
    console.log(requestType);
    var lessonId = $(".hidden_lesson_id").val();
    $.ajax({
      type: 'POST',
      data: {request_type: requestType, content: "", lessonId: lessonId},
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
  });

  $(".lessons").on("click", function(){
  });

  $(".instructors").on("click", function () {
  });

  // Lesson.fetch().then(function(lessons){
  //   lessons.forEach(function(lesson){
  //     var view = new LessonView(lesson);
  //     view.render();
  //   });
  // });
});
