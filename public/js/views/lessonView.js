var LessonView = function(lesson){
  this.lesson = lesson;
  this.$el = $("<div class='lessons_placeholder'></div>");
};

LessonView.prototype = {
  render: function () {
    var self = this;

    self.$el.html(self.lessonTemplate(self.lesson));
    $(".lessons_placeholder").append(self.$el);
  },
  lessonTemplate: function(lesson){
    var html = $("<div>");
    html.append("<h2 class='lesson_title'>" + this.topic + "</h2>");
    html.append("<p>" + this.date + "</p>");
  }
};

// <a href="https://twitter.com/jshawl"><img class="jess" src="images/jesse.png"/></a>
// <h3>Jesse Shawl</h3>
// <p>@jshawl</p>
// <div class="issues">
//   <span class="help">
//     Slow down!
//   </span>
//   <span class="help">
//     Gotta pee!
//   </span>
//   <span class="help">
//     Don't get it!
//   </span>
//   <span class="help">
//     Ur killin' it!
//   </span>
// </div>
// <p>
//   <textarea name="textarea" rows="5" cols="25">Comments?</textarea>
// </p>
// <span class="submit">
//   Submit
// </span>
