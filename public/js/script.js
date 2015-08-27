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
    event.preventDefault();
    alert("clicked");
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
