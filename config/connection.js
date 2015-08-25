var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///speakapp_db");

var Comment = sequelize.import("../models/comment");
var Instructor = sequelize.import("../models/instructor");
var Lesson = sequelize.import("../models/lesson");
var Student = sequelize.import("../models/student");

Comment.belongsTo(Lesson);
Comment.belongsTo(Student);
Instructor.hasMany(Lesson);
Instructor.hasMany(Comment); //Fix join tables
Lesson.hasMany(Comment);
Student.hasMany(Comment);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
  Comment: Comment,
  Instructor: Instructor,
  Lesson: Lesson,
  Student: Student
  }
}
