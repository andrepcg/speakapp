var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///speakapp_db");
var Comment = sequelize.import("../models/comment");
var Instructor = sequelize.import("../models/instructor");
var Lesson = sequelize.import("../models/lesson");
var Student = sequelize.import("../models/student");

Comment.belongsTo(Lesson);
Comment.belongsTo(Student);
Comment.belongsTo(Instructor, {through: Lesson});
Instructor.hasMany(Lesson);
Lesson.hasMany(Comment);
Student.hasMany(Comment);
Student.belongsToMany(Lesson, {through: Comment});

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
