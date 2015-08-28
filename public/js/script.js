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
      url: "https://ga-speakapp.herokuapp.com/comments"
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
      url: "https://ga-speakapp.herokuapp.com/comments"
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

  $("#new_lesson_button").on("click", function () {
    $("main").append('<div class="new_lesson_form"><h2 class="lesson_title">Create a new lesson!</h2><form action="" method="post"><div><label for="POST-title">Title:</label></div><div><input id="POST-title" type=text name="title"></div><div><label for="POST-date">Date:</label></div><input id="POST-date" type=text name="date"></div><div><label for="POST-name">Name:</label></div><div><input id="POST-name" type=text name="name"></div><label for="POST-twitter">Twitter:</label><div><input id="POST-twitter" type=text name="twitter"></div></form><span class="submit">Submit</span></div>');
  });
});
