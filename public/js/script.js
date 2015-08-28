$(document).ready(function(){
  $(".submit").on("click", function(event) {
    event.preventDefault(event);
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
      $("#comment_confirmation").append("Your comment has been logged");
      setTimeout(function(){
        $("#comment_confirmation").empty();
      }, 5000);
    }).fail(function(response){
      console.log("ajax post request failed");
    });
  });

  $("span.help").on("click", function(event) {
    event.preventDefault(event);
    var requestType = $(event.target).text();
    console.log(event.target);
    console.log(requestType);
    var lessonId = $(".hidden_lesson_id").val();
    $.ajax({
      type: 'POST',
      data: {request_type: requestType, content: "", lessonId: lessonId},
      dataType: 'json',
      url: "http://localhost:3001/comments"
    }).done(function(response) {
      console.log(response);
      $("#comment_confirmation").append("Your comment has been logged!");
      setTimeout(function(){
        $("#comment_confirmation").empty();
      }, 5000);
    }).fail(function(response){
      console.log("ajax post request failed");
    });
  });
});
